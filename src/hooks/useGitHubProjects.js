import { useState, useEffect } from 'react';

// Cache süresi: 12 saat (günde 2 kere yenileme)
const CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 saat (milisaniye)

const getCacheKey = (username, language) => `github_projects_${username}_${language}`;
const getTimestampKey = (username, language) => `github_projects_timestamp_${username}_${language}`;

// Basit çeviri fonksiyonu (gerçek bir çeviri API'si kullanılabilir)
const translateDescription = (description) => {
  // Basit bir mapping - gerçek projeler için daha kapsamlı bir çeviri servisi kullanılabilir
  const translations = {
    'No description': 'Açıklama yok',
    'A portfolio website': 'Bir portföy web sitesi',
    'A web application': 'Bir web uygulaması',
    'A mobile app': 'Bir mobil uygulama',
    // Daha fazla çeviri eklenebilir
  };
  
  // Eğer tam eşleşme varsa döndür
  if (translations[description]) {
    return translations[description];
  }
  
  // Aksi halde orijinal açıklamayı döndür (gerçek bir çeviri API'si kullanılabilir)
  return description;
};

const getCachedProjects = (username, language) => {
  try {
    const cacheKey = getCacheKey(username, language);
    const timestampKey = getTimestampKey(username, language);
    
    const cachedData = localStorage.getItem(cacheKey);
    const cachedTimestamp = localStorage.getItem(timestampKey);
    
    if (!cachedData || !cachedTimestamp) {
      return null;
    }
    
    const now = Date.now();
    const cacheTime = parseInt(cachedTimestamp, 10);
    const timeDiff = now - cacheTime;
    
    // Cache süresi dolmuş mu kontrol et
    if (timeDiff > CACHE_DURATION) {
      // Cache'i temizle
      localStorage.removeItem(cacheKey);
      localStorage.removeItem(timestampKey);
      return null;
    }
    
    // Cache geçerli, parse et ve döndür
    return JSON.parse(cachedData);
  } catch (error) {
    console.warn('Cache okuma hatası:', error);
    return null;
  }
};

const setCachedProjects = (username, language, projects) => {
  try {
    const cacheKey = getCacheKey(username, language);
    const timestampKey = getTimestampKey(username, language);
    
    localStorage.setItem(cacheKey, JSON.stringify(projects));
    localStorage.setItem(timestampKey, Date.now().toString());
  } catch (error) {
    console.warn('Cache yazma hatası:', error);
  }
};

const useGitHubProjects = (username, language = 'en') => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        // Önce cache'i kontrol et (dil bazlı)
        const cachedProjects = getCachedProjects(username, language);
        
        if (cachedProjects) {
          // Cache geçerli, cache'den döndür ve dil bazlı description'ı ayarla
          const processedProjects = cachedProjects.map(project => ({
            ...project,
            description: language === 'tr' ? project.descriptionTr : project.descriptionEn
          }));
          setProjects(processedProjects);
          setLoading(false);
          return;
        }

        // Cache yok veya süresi dolmuş, API'den çek

        // GitHub API için headers
        const headers = {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App'
        };

        // Kullanıcının public repos'larını çek
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=100`,
          {
            headers: headers,
            method: 'GET'
          }
        );

        if (!reposResponse.ok) {
          const errorText = await reposResponse.text();
          let errorMessage = 'GitHub API isteği başarısız oldu';
          
          if (reposResponse.status === 403) {
            errorMessage = 'Rate limit aşıldı. Lütfen birkaç dakika sonra tekrar deneyin.';
          } else if (reposResponse.status === 404) {
            errorMessage = 'Kullanıcı bulunamadı.';
          }
          
          throw new Error(errorMessage);
        }

        const repos = await reposResponse.json();

        // Rate limit'i azaltmak için her repo için ayrı istek yapmak yerine
        // batch işlem yapıyoruz ve sadece gerekli olanları çekiyoruz
        const projectsWithDetails = await Promise.all(
          repos.map(async (repo, index) => {
            try {
              // Rate limit'i azaltmak için her 5 repo'da bir bekleme ekle
              if (index > 0 && index % 5 === 0) {
                await new Promise(resolve => setTimeout(resolve, 100));
              }

              // Dilleri çek
              let languages = {};
              try {
                const languagesResponse = await fetch(repo.languages_url, {
                  headers: headers,
                  method: 'GET'
                });
                
                if (languagesResponse.ok) {
                  languages = await languagesResponse.json();
                }
              } catch (langErr) {
                console.warn(`Repo ${repo.name} için dil bilgisi alınamadı:`, langErr);
              }

              // Son commit tarihi için updated_at kullan (daha az istek)
              // Eğer daha kesin tarih isterseniz, sadece ilk birkaç repo için commit isteği yapabiliriz
              let lastCommitDate = repo.updated_at;
              
              // Sadece ilk 10 repo için commit tarihini detaylı çek (rate limit için)
              if (index < 10) {
                try {
                  const commitsResponse = await fetch(
                    `${repo.url}/commits?per_page=1`,
                    {
                      headers: headers,
                      method: 'GET'
                    }
                  );
                  
                  if (commitsResponse.ok) {
                    const commits = await commitsResponse.json();
                    if (commits.length > 0 && commits[0].commit?.author?.date) {
                      lastCommitDate = commits[0].commit.author.date;
                    }
                  }
                } catch (commitErr) {
                  // Commit tarihi alınamazsa updated_at kullan
                  console.warn(`Repo ${repo.name} için commit tarihi alınamadı:`, commitErr);
                }
              }

              // En çok kullanılan dili bul
              const totalBytes = Object.values(languages).reduce(
                (sum, bytes) => sum + bytes,
                0
              );
              const primaryLanguage = totalBytes > 0
                ? Object.entries(languages)
                    .sort(([, a], [, b]) => b - a)[0][0]
                : null;

              // Açıklamayı çevir (basit bir çeviri servisi kullanılabilir veya manuel mapping)
              const descriptionEn = repo.description || 'No description';
              const descriptionTr = repo.description ? translateDescription(repo.description) : 'Açıklama yok';
              const description = language === 'tr' ? descriptionTr : descriptionEn;
              
              return {
                id: repo.id,
                name: repo.name,
                description: description,
                descriptionEn: descriptionEn,
                descriptionTr: descriptionTr,
                htmlUrl: repo.html_url,
                createdAt: repo.created_at,
                updatedAt: repo.updated_at,
                lastCommitDate: lastCommitDate,
                language: primaryLanguage,
                languages: languages,
                stars: repo.stargazers_count,
                forks: repo.forks_count
              };
            } catch (err) {
              console.error(`Repo ${repo.name} için hata:`, err);
              const defaultDesc = language === 'tr' ? 'Açıklama yok' : 'No description';
              return {
                id: repo.id,
                name: repo.name,
                description: defaultDesc,
                descriptionEn: 'No description',
                descriptionTr: 'Açıklama yok',
                htmlUrl: repo.html_url,
                createdAt: repo.created_at,
                updatedAt: repo.updated_at,
                lastCommitDate: repo.updated_at,
                language: null,
                languages: {},
                stars: repo.stargazers_count,
                forks: repo.forks_count
              };
            }
          })
        );

        // Son commit tarihine göre sırala (en yeni en başta)
        const sortedProjects = projectsWithDetails.sort((a, b) => {
          return new Date(b.lastCommitDate) - new Date(a.lastCommitDate);
        });

        // Cache'e kaydet (her iki dil için de - descriptionEn ve descriptionTr ile birlikte)
        setCachedProjects(username, 'en', sortedProjects);
        setCachedProjects(username, 'tr', sortedProjects);

        // Projeleri dil bazlı olarak işle
        const processedProjects = sortedProjects.map(project => ({
          ...project,
          description: language === 'tr' ? project.descriptionTr : project.descriptionEn
        }));
        
        setProjects(processedProjects);
      } catch (err) {
        // Hata durumunda cache'den döndürmeyi dene
        const cachedProjects = getCachedProjects(username, language);
        if (cachedProjects) {
          console.warn('API hatası, cache\'den yükleniyor:', err);
          setProjects(cachedProjects);
        } else {
          setError(err.message);
          console.error('GitHub projeleri yüklenirken hata:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchProjects();
    }
  }, [username, language]);

  return { projects, loading, error };
};

export default useGitHubProjects;
