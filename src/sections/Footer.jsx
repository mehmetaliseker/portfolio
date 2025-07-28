import React, { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const { t, language } = useLanguage();
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    fetch('/data/navItems.json')
      .then((res) => res.json())
      .then((data) => {
        if (data[language]) {
          setNavItems(data[language]);
        }
      });
  }, [language]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-graphite-secondary backdrop-blur-md border-t border-graphite-background/40 shadow-2xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <AnimatedSection direction="top" delay={0.1}>
            <div className="flex-1 min-w-[220px]">
              <h2 className="text-xl font-bold text-graphite-accent mb-2 font-serif">Mehmet Ali ŞEKER</h2>
              <p className="text-graphite-text/80 text-sm max-w-xs">
                {t('footer.description')}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="top" delay={0.3}>
            <div className="flex-1 min-w-[180px]">
              <h3 className="text-lg font-semibold text-graphite-accent mb-2">
                {language === 'en' ? 'Quick Links' : 'Hızlı Bağlantılar'}
              </h3>
              <ul className="space-y-1">
                {navItems.map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className="text-graphite-text/90 hover:text-graphite-accent transition text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="top" delay={0.5}>
            <div className="flex-1 min-w-[220px]">
              <h3 className="text-lg font-semibold text-graphite-accent mb-2">
                {language === 'en' ? 'Contact' : 'İletişim'}
              </h3>
              <ul className="text-graphite-text/80 text-sm space-y-1">
                <li>
                  <span className="font-medium">Email:</span>{' '}
                  <a
                    href="mailto:maliseker2005@gmail.com"
                    className="hover:text-graphite-accent transition"
                  >
                    maliseker2005@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-medium">
                    {language === 'en' ? 'Phone: ' : 'Telefon: '}
                  </span>
                  <a
                    href="tel:+905468303055"
                    className="hover:text-graphite-accent transition"
                  >
                    +90 546 830 30 55
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
        <div className="mt-10 text-center text-xs text-graphite-text/60">
          &copy; {new Date().getFullYear()} Mehmet Ali ŞEKER. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}

export default Footer; 