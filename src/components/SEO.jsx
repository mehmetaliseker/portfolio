import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SEO = () => {
  const location = useLocation();
  const { language } = useLanguage();

  const baseUrl = 'https://mehmetaliseker.com';
  const siteName = 'Mehmet Ali ŞEKER';
  const defaultTitle = 'Mehmet Ali ŞEKER - Full-Stack Developer';
  const defaultDescription = language === 'tr' 
    ? 'Full-Stack Developer Mehmet Ali ŞEKER. React, Node.js, TypeScript ve modern web teknolojileri ile profesyonel web uygulamaları geliştiriyorum.'
    : 'Full-Stack Developer Mehmet Ali ŞEKER. I develop professional web applications with React, Node.js, TypeScript and modern web technologies.';

  const getPageMetadata = () => {
    const path = location.pathname;
    
    switch (path) {
      case '/':
        return {
          title: defaultTitle,
          description: defaultDescription,
          keywords: language === 'tr' 
            ? 'Full-Stack Developer, React, Node.js, TypeScript, Web Developer, Portfolio, Mehmet Ali ŞEKER'
            : 'Full-Stack Developer, React, Node.js, TypeScript, Web Developer, Portfolio, Mehmet Ali ŞEKER'
        };
      case '/about':
        return {
          title: language === 'tr' 
            ? 'Hakkımda - Mehmet Ali ŞEKER'
            : 'About - Mehmet Ali ŞEKER',
          description: language === 'tr'
            ? 'Full-Stack Developer Mehmet Ali ŞEKER hakkında. Eğitim, deneyim ve yeteneklerim hakkında bilgi edinin.'
            : 'About Full-Stack Developer Mehmet Ali ŞEKER. Learn about my education, experience and skills.',
          keywords: language === 'tr'
            ? 'Hakkımda, Eğitim, Deneyim, Yetenekler, Full-Stack Developer'
            : 'About, Education, Experience, Skills, Full-Stack Developer'
        };
      case '/projects':
        return {
          title: language === 'tr'
            ? 'Projelerim - Mehmet Ali ŞEKER'
            : 'Projects - Mehmet Ali ŞEKER',
          description: language === 'tr'
            ? 'Mehmet Ali ŞEKER\'in geliştirdiği web projeleri ve uygulamalar. React, Node.js ve modern teknolojilerle oluşturulmuş projeler.'
            : 'Web projects and applications developed by Mehmet Ali ŞEKER. Projects built with React, Node.js and modern technologies.',
          keywords: language === 'tr'
            ? 'Projeler, Web Uygulamaları, React Projeleri, Portfolio Projeleri'
            : 'Projects, Web Applications, React Projects, Portfolio Projects'
        };
      case '/contact':
        return {
          title: language === 'tr'
            ? 'İletişim - Mehmet Ali ŞEKER'
            : 'Contact - Mehmet Ali ŞEKER',
          description: language === 'tr'
            ? 'Mehmet Ali ŞEKER ile iletişime geçin. Projeleriniz için teklif alın veya sorularınızı iletin.'
            : 'Contact Mehmet Ali ŞEKER. Get a quote for your projects or send your questions.',
          keywords: language === 'tr'
            ? 'İletişim, Email, LinkedIn, GitHub, İletişim Formu'
            : 'Contact, Email, LinkedIn, GitHub, Contact Form'
        };
      default:
        return {
          title: defaultTitle,
          description: defaultDescription,
          keywords: 'Full-Stack Developer, React, Node.js, TypeScript'
        };
    }
  };

  useEffect(() => {
    const metadata = getPageMetadata();
    const currentUrl = `${baseUrl}${location.pathname}`;
    const imageUrl = `${baseUrl}/mehmet_ali_nobg.png`;

    // Title
    document.title = metadata.title;

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', metadata.description);

    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', metadata.keywords);

    // Open Graph
    const ogTags = {
      'og:title': metadata.title,
      'og:description': metadata.description,
      'og:image': imageUrl,
      'og:url': currentUrl,
      'og:type': 'website',
      'og:site_name': siteName,
      'og:locale': language === 'tr' ? 'tr_TR' : 'en_US'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Twitter Card
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': metadata.title,
      'twitter:description': metadata.description,
      'twitter:image': imageUrl,
      'twitter:site': '@maseker35_',
      'twitter:creator': '@maseker35_'
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Language alternates
    const alternateTags = [
      { rel: 'alternate', hreflang: 'tr', href: `${baseUrl}${location.pathname}?lang=tr` },
      { rel: 'alternate', hreflang: 'en', href: `${baseUrl}${location.pathname}?lang=en` },
      { rel: 'alternate', hreflang: 'x-default', href: `${baseUrl}${location.pathname}` }
    ];

    alternateTags.forEach(({ rel, hreflang, href }) => {
      let tag = document.querySelector(`link[rel="${rel}"][hreflang="${hreflang}"]`);
      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        tag.setAttribute('hreflang', hreflang);
        document.head.appendChild(tag);
      }
      tag.setAttribute('href', href);
    });

    // Structured Data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Mehmet Ali ŞEKER',
      jobTitle: 'Full-Stack Developer',
      url: baseUrl,
      sameAs: [
        'https://github.com/mehmetaliseker/',
        'https://www.linkedin.com/in/mehmetaliseker/',
        'https://www.instagram.com/maseker35_/'
      ],
      email: 'maliseker2005@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'İzmir',
        addressCountry: 'TR'
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [location.pathname, language]);

  return null;
};

export default SEO;
