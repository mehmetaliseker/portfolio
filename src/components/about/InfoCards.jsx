import AnimatedSection from "../AnimatedSection";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const InfoCards = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatedSection direction="bottom" delay={.5}>
          <div className="bg-graphite-secondary p-6 rounded-lg shadow-lg border border-graphite-background/30">
            <h4 className="text-lg font-semibold mb-3 text-graphite-accent">{t('about.education.title')}</h4>
            <div className="space-y-2 text-sm">
              <p className="font-medium">{t('about.education.degree')}</p>
              <p className="text-graphite-text/70">{t('about.education.university')}</p>
              <p className="text-graphite-text/50">{t('about.education.years')}</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="bottom" delay={.6}>
          <div className="bg-graphite-secondary p-6 rounded-lg shadow-lg border border-graphite-background/30">
            <h4 className="text-lg font-semibold mb-3 text-graphite-accent">{t('about.experience.title')}</h4>
            <div className="space-y-2 text-sm">
              <p className="font-medium">{t('about.experience.position')}</p>
              <p className="text-graphite-text/70">{t('about.experience.company')}</p>
              <p className="text-graphite-text/50">{t('about.experience.years')}</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default InfoCards;