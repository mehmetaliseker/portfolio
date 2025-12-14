import React, { createContext, useContext, useState } from 'react';

const translations = {
    en: {
        // Nav
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Home Section
        'home.subtitle': 'Building digital products that are simple, scalable, and built to last.',
        'home.learnMore': 'Learn More about me',

        // About Section
        'about.whoamiTitle': 'WHO AM I?',
        'about.whoami.1': 'I am a passionate Full-Stack Developer with a strong foundation in modern web technologies. My journey in software development has been driven by curiosity and a desire to create innovative solutions that solve real-world problems.',
        'about.whoami.2': 'With expertise spanning both frontend and backend development, I specialize in building scalable applications using React, Tailwind CSS, and NestJS. I have hands-on experience with various databases including PostgreSQL, Firebase, and MSSQL, allowing me to choose the right technology stack for each project.',
        'about.whoami.3': "I believe in writing clean, maintainable code and following best practices. My experience includes working with cloud services, containerization with Docker, and implementing robust CI/CD pipelines. I'm always eager to learn new technologies and contribute to meaningful projects.",
        'about.skillsTitle': 'My Skills',
        'about.education.title': 'Education',
        'about.education.degree': 'Computer Programming',
        'about.education.university': 'Ege University',
        'about.education.years': '2024 - Present',
        'about.experience.title': 'Experience',
        'about.experience.position': 'IT Intern',
        'about.experience.company': 'Kale Pratt & Whitney',
        'about.experience.years': 'June/2022 - September/2022',
        'about.viewCV': 'View CV',
        'about.projects': 'Projects',
        'about.successRate': 'Success Rate',

        // Projects Section
        'projects.title': 'My Projects',
        'projects.loading': 'Loading projects...',
        'projects.error': 'An error occurred',
        'projects.noProjects': 'No projects found yet.',
        'projects.createdAt': 'Created at',
        'projects.lastCommit': 'Last commit',
        'projects.seeOnGitHub': 'See On GitHub',

        // Contact Section
        'contact.getInTouch': 'Get In Touch',
        'contact.description': 'Have a project in mind or want to collaborate? Feel free to reach out!',
        'contact.connectWithMe': 'Contact Me',
        'contact.connectDescription': 'You can also reach me through these platforms:',
        'contact.form.name': 'Full Name',
        'contact.form.email': 'Email',
        'contact.form.phone': 'Phone',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Message',
        'contact.form.namePlaceholder': 'Your Full Name',
        'contact.form.emailPlaceholder': 'your.email@example.com',
        'contact.form.phonePlaceholder': '+1 111 111 1111 (Optional)',
        'contact.form.subjectPlaceholder': 'Message Subject',
        'contact.form.messagePlaceholder': 'Your message here...',
        'contact.form.sendButton': 'Send Message',
        'contact.form.sending': 'Sending...',
        'contact.form.success': 'Your message has been sent successfully!',
        'contact.form.error': 'An error occurred. Please try again.',

        // Footer Section
        'footer.quickLinks': 'Quick Links',
        'footer.contact': 'Contact',
        'footer.rights': 'All rights reserved.',
        'footer.description': 'A passionate Full-Stack Developer dedicated to creating innovative solutions and building scalable applications with modern technologies.'
    },

    tr: {
        // Nav
        'nav.home': 'Ana Sayfa',
        'nav.about': 'Hakkımda',
        'nav.projects': 'Projeler',
        'nav.contact': 'İletişim',

        // Home Section
        'home.subtitle': 'Basit, ölçeklenebilir ve kalıcı dijital ürünler inşa ediyorum.',
        'home.learnMore': 'Hakkımda Daha Fazla Bilgi Edinin',

        // About Section
        'about.whoamiTitle': 'BEN KİMİM?',
        'about.whoami.1': 'Modern web teknolojilerinde sağlam bir temele sahip, tutkulu bir Full-Stack Developer\'ım. Yazılım geliştirme yolculuğum merak ve gerçek dünya problemlerini çözen yenilikçi çözümler yaratma arzusuyla sürdürüldü.',
        'about.whoami.2': 'Hem frontend hem de backend geliştirme alanlarında uzmanlığa sahip olarak, React, Tailwind CSS ve NestJS kullanarak ölçeklenebilir uygulamalar geliştirme konusunda uzmanlaştım. PostgreSQL, Firebase ve MSSQL dahil olmak üzere çeşitli veritabanlarıyla pratik deneyime sahibim, bu da her proje için doğru teknoloji yığınını seçmeme olanak tanıyor.',
        'about.whoami.3': 'Temiz, sürdürülebilir kod yazmaya ve en iyi uygulamaları takip etmeye inanıyorum. Deneyimim bulut hizmetleriyle çalışmayı, Docker ile konteynerleştirmeyi ve sağlam CI/CD pipeline\'ları uygulamayı içeriyor. Yeni teknolojiler öğrenmeye ve anlamlı projelere katkıda bulunmaya her zaman istekliyim.',
        'about.skillsTitle': 'Yeteneklerim',
        'about.education.title': 'Eğitim',
        'about.education.degree': 'Bilgisayar Programcılığı',
        'about.education.university': 'Ege Üniversitesi',
        'about.education.years': '2024 - Günümüz',
        'about.experience.title': 'Deneyim',
        'about.experience.position': 'Bilişim Stajyeri',
        'about.experience.company': 'Kale Pratt & Whitney',
        'about.experience.years': 'Haziran/2022 - Eylül/2022',
        'about.viewCV': 'CV Görüntüle',
        'about.projects': 'Projeler',
        'about.successRate': 'Başarı Oranı',

        // Projects Section
        'projects.title': 'Projelerim',
        'projects.loading': 'Projeler yükleniyor...',
        'projects.error': 'Bir hata oluştu',
        'projects.noProjects': 'Henüz proje bulunamadı.',
        'projects.createdAt': 'Oluşturulma',
        'projects.lastCommit': 'Son commit',
        'projects.seeOnGitHub': 'GitHub\'da Gör',

        // Contact Section
        'contact.getInTouch': 'İletişime Geç',
        'contact.description': 'Aklınızda bir proje var mı veya işbirliği yapmak ister misiniz? Çekinmeden iletişime geçin!',
        'contact.connectWithMe': 'Ulaşabileceğiniz Yerler',
        'contact.connectDescription': 'Bu platformlar aracılığıyla da bana ulaşabilirsiniz:',
        'contact.form.name': 'Ad Soyad',
        'contact.form.email': 'E-posta',
        'contact.form.phone': 'Telefon',
        'contact.form.subject': 'Konu',
        'contact.form.message': 'Mesaj',
        'contact.form.namePlaceholder': 'Adınız ve Soyadınız',
        'contact.form.emailPlaceholder': 'ornek@email.com',
        'contact.form.phonePlaceholder': '+90 111 111 11 11 (Opsiyonel)',
        'contact.form.subjectPlaceholder': 'Mesajınızın konusu',
        'contact.form.messagePlaceholder': 'Mesajınızı buraya yazın...',
        'contact.form.sendButton': 'Mesaj Gönder',
        'contact.form.sending': 'Gönderiliyor...',
        'contact.form.success': 'Mesajınız başarıyla gönderildi!',
        'contact.form.error': 'Bir hata oluştu. Lütfen tekrar deneyin.',

        // Footer Section
        'footer.quickLinks': 'Hızlı Bağlantılar',
        'footer.contact': 'İletişim',
        'footer.rights': 'Tüm hakları saklıdır.',
        'footer.description': 'Yenilikçi çözümler yaratmaya ve modern teknolojilerle ölçeklenebilir uygulamalar geliştirmeye adanmış tutkulu bir Full-Stack Developer.'
    }
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'tr' : 'en'));
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
