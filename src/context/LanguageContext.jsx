import React, { createContext, useContext, useState } from 'react';

const translations = {
    en: {
        // Nav
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',

        // Home Section
        'home.title': 'Software Developer & Creative Problem Solver',
        'home.subtitle': "Welcome to my portfolio! I'm passionate about creating innovative solutions and turning ideas into reality through code. Let's build something amazing together.",
        'home.viewProjects': 'View My Projects',
        'home.learnMore': 'Learn More About Me',

        // About Section
        'about.title': 'About Me',
        'about.skillsTitle': 'My Skills',
        'about.whoamiTitle': 'Who Am I',
        'about.whoami.1': "Hello! My name is Mehmet Ali and I'm a passionate software developer with a strong foundation in modern web technologies. My journey in programming began with curiosity and has evolved into a deep passion for creating meaningful digital experiences.",
        'about.whoami.2': "I specialize in building responsive, user-friendly applications using React, Tailwind CSS and other cutting-edge technologies. My approach combines technical expertise with creative problem-solving to deliver solutions that exceed expectations.",
        'about.whoami.3': "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying updated with the latest industry trends.",
        'about.education.title': 'Education',
        'about.education.degree': 'Computer Programming',
        'about.education.university': 'Ege University',
        'about.education.years': '2024 - Present',
        'about.experience.title': 'Experience',
        'about.experience.position': 'IT Intern',
        'about.experience.company': 'Kale Pratt & Whitney',
        'about.experience.years': 'June/2022 - September/2022',

        // Projects Section
        'projects.sectionTitle': 'My Projects',
        'projects.featured': 'Featured Projects',
        'projects.description': "Here are some of the projects I've worked on.",
        'projects.project.1.title': 'Ege University Promotional Web Site',
        'projects.project.1.description': 'A promotional website for Ege University, showcasing its history, departments, and campus life with a modern design and responsive layout.',
        'projects.project.2.title': 'Store App',
        'projects.project.2.description': 'A full-stack e-commerce application featuring product management, user authentication, and a shopping cart system, built with PHP, SQL, and JavaScript.',
        'projects.project.3.title': 'Weather App',
        'projects.project.3.description': 'A weather application that provides real-time weather updates and forecasts using a third-party API, built with React and Tailwind CSS.',
        'projects.technologiesUsed': 'Technologies Used',
        'projects.viewCode': 'Code',
        'projects.interest': 'Interested in Working Together?',
        'projects.descriptionCTA': "I'm always open to discussing new opportunities and exciting projects.Let's create something amazing together!",
        'projects.getInTouch': 'Get In Touch',
        'projects.downloadCV': 'Download CV',

    },

    tr: {
        // Nav
        'nav.home': 'Ana Sayfa',
        'nav.about': 'Hakkımda',
        'nav.projects': 'Projeler',

        // Home Section
        'home.title': 'Yazılım Geliştirici & Problem Çözücü',
        'home.subtitle': "Portföyüme hoş geldiniz! Yenilikçi çözümler üretmek ve fikirleri kod aracılığıyla gerçeğe dönüştürmek konusunda tutkuluyum. Hadi birlikte harika bir şey inşa edelim.",
        'home.viewProjects': 'Projelerime Göz At',
        'home.learnMore': 'Hakkımda Daha Fazla Bilgi',

        // About Section
        'about.title': 'Hakkımda',
        'about.skillsTitle': 'Yeteneklerim',
        'about.whoamiTitle': 'Ben Kimim',
        'about.whoami.1': "Merhaba! Benim adım Mehmet Ali. Modern web teknolojileri konusunda sağlam bir temele sahip, tutkulu bir yazılım geliştiricisiyim. Programlamaya olan yolculuğum merakla başladı ve zamanla anlamlı dijital deneyimler oluşturma tutkusuna dönüştü.",
        'about.whoami.2': "React, Tailwind CSS ve diğer güncel teknolojilerle duyarlı ve kullanıcı dostu uygulamalar geliştirme konusunda uzmanım. Teknik uzmanlığımı yaratıcı problem çözme yaklaşımıyla birleştirerek beklentilerin ötesinde çözümler sunuyorum.",
        'about.whoami.3': "Kod yazmadığım zamanlarda yeni teknolojileri keşfeder, açık kaynak projelere katkı sağlar veya geliştirici topluluğuyla bilgi paylaşırım. Sürekli öğrenmeye ve sektördeki en son trendleri takip etmeye inanıyorum.",
        'about.education.title': 'Eğitim',
        'about.education.degree': 'Bilgisayar Programcılığı',
        'about.education.university': 'Ege Üniversitesi',
        'about.education.years': '2024 - Günümüz',
        'about.experience.title': 'Deneyim',
        'about.experience.position': 'Bilişim Stajyeri',
        'about.experience.company': 'Kale Pratt & Whitney',
        'about.experience.years': 'Haziran/2022 - Eylül/2022',

        // Projects Section
        'projects.sectionTitle': 'Projelerim',
        'projects.featured': 'Öne Çıkan Projeler',
        'projects.description': "Üzerinde çalıştığım bazı projeler.",
        'projects.project.1.title': 'Ege Üniversitesi Tanıtım Web Sitesi',
        'projects.project.1.description': 'Ege Üniversitesi için hazırlanan, tarihçesini, bölümlerini ve kampüs hayatını modern ve duyarlı bir tasarımla sunan tanıtım sitesi.',
        'projects.project.2.title': 'Mağaza Uygulaması',
        'projects.project.2.description': 'PHP, SQL ve JavaScript ile geliştirilmiş; ürün yönetimi, kullanıcı doğrulama ve alışveriş sepeti sistemi içeren tam kapsamlı bir e-ticaret uygulaması.',
        'projects.project.3.title': 'Hava Durumu Uygulaması',
        'projects.project.3.description': 'Gerçek zamanlı hava durumu bilgileri ve tahminleri sunan, üçüncü parti API ile çalışan React ve Tailwind CSS tabanlı bir uygulama.',
        'projects.technologiesUsed': 'Kullanılan Teknolojiler',
        'projects.viewCode': 'Kodu Görüntüle',
        'projects.interest': 'Benimle Çalışmak İster Misiniz?',
        'projects.descriptionCTA': "Yeni fırsatlar ve heyecan verici projeler hakkında konuşmaya her zaman açığım. Hadi birlikte harika bir şey yaratalım!",
        'projects.getInTouch': 'İletişime Geç',
        'projects.downloadCV': 'CV İndir',


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


export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};