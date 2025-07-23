import AnimatedSection from "../AnimatedSection";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SectionTitle = () => {
  const { t } = useLanguage();
  return (
    <>
      <AnimatedSection direction="top" delay={0}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif mb-4">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-graphite-accent mx-auto rounded-full"></div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default SectionTitle;