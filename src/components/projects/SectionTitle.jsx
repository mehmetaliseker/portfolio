import AnimatedSection from "../AnimatedSection";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SectionTitle = () => {
  const { t } = useLanguage();

  return (
    <>
      <AnimatedSection direction="top" delay={0}>
        <div className="mb-16">
          <div className="flex items-center gap-6">
            <div className="text-6xl font-bold text-graphite-accent/20 leading-none">03</div>
            <div className="flex-1">
              <h2 className="text-5xl md:text-6xl font-bold text-graphite-text mb-2">{t('projects.sectionTitle')}</h2>
              <div className="h-1 w-32 bg-graphite-accent mb-4"></div>
              <p className="text-lg text-graphite-textMuted max-w-2xl">
                {t('projects.description')}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default SectionTitle;