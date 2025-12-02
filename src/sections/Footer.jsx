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
    <footer className="relative bg-graphite-background border-t-2 border-graphite-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <AnimatedSection direction="top" delay={0.1}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-graphite-accent flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <h2 className="text-xl font-bold text-graphite-text">Mehmet Ali ŞEKER</h2>
              </div>
              <p className="text-graphite-textMuted text-sm leading-relaxed">
                {t('footer.description')}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="top" delay={0.3}>
            <div>
              <h3 className="text-lg font-bold text-graphite-accent mb-4 border-b border-graphite-accent/20 pb-2">
                {language === 'en' ? 'Quick Links' : 'Hızlı Bağlantılar'}
              </h3>
              <ul className="space-y-2">
                {navItems.map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className="text-graphite-textMuted hover:text-graphite-accent transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-graphite-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="top" delay={0.5}>
            <div>
              <h3 className="text-lg font-bold text-graphite-accent mb-4 border-b border-graphite-accent/20 pb-2">
                {language === 'en' ? 'Contact' : 'İletişim'}
              </h3>
              <ul className="text-graphite-textMuted text-sm space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-graphite-text min-w-[60px]">Email:</span>
                  <a
                    href="mailto:maliseker2005@gmail.com"
                    className="hover:text-graphite-accent transition-colors break-all"
                  >
                    maliseker2005@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-graphite-text min-w-[60px]">
                    {language === 'en' ? 'Phone:' : 'Telefon:'}
                  </span>
                  <a
                    href="tel:+905468303055"
                    className="hover:text-graphite-accent transition-colors"
                  >
                    +90 546 830 30 55
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
        <div className="pt-8 border-t border-graphite-accent/10 text-center">
          <p className="text-xs text-graphite-textMuted">
            &copy; {new Date().getFullYear()} Mehmet Ali ŞEKER. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 