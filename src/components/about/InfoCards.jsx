import AnimatedSection from "../AnimatedSection";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const InfoCards = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="space-y-6">
        <AnimatedSection direction="bottom" delay={.5}>
          <div className="relative bg-graphite-tertiary border-l-4 border-graphite-accent p-6 transition-all duration-300 hover:bg-graphite-secondary group">
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-graphite-accent/20"></div>
            <h4 className="text-xl font-bold mb-4 text-graphite-accent">{t('about.education.title')}</h4>
            <div className="space-y-3 text-sm">
              <p className="font-semibold text-graphite-text text-base">{t('about.education.degree')}</p>
              <p className="text-graphite-textMuted">{t('about.education.university')}</p>
              <p className="text-graphite-textMuted/70 text-xs">{t('about.education.years')}</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="bottom" delay={.6}>
          <div className="relative bg-graphite-tertiary border-l-4 border-graphite-accent p-6 transition-all duration-300 hover:bg-graphite-secondary group">
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-graphite-accent/20"></div>
            <h4 className="text-xl font-bold mb-4 text-graphite-accent">{t('about.experience.title')}</h4>
            <div className="space-y-3 text-sm">
              <p className="font-semibold text-graphite-text text-base">{t('about.experience.position')}</p>
              <p className="text-graphite-textMuted">{t('about.experience.company')}</p>
              <p className="text-graphite-textMuted/70 text-xs">{t('about.experience.years')}</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default InfoCards;