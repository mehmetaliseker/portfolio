import AnimatedSection from "../AnimatedSection";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const WhoAmI = () => {
  const { t } = useLanguage();
  return (
    <>
      <AnimatedSection direction="top" delay={0.2}>
        <h3 className="text-2xl font-semibold mb-4">{t('about.whoamiTitle')}</h3>
      </AnimatedSection>
      <div className="space-y-4 text-graphite-text leading-relaxed text-sm md:text-base">
        <AnimatedSection direction="top" delay={0.3}>
          <p>
            {t('about.whoami.1')}
          </p>
        </AnimatedSection>
        <AnimatedSection direction="right" delay={0.4}>
          <p>
            {t('about.whoami.2')}
          </p>
        </AnimatedSection>
        <AnimatedSection direction="bottom" delay={0.5}>
          <p>
            {t('about.whoami.3')}
          </p>
        </AnimatedSection>
      </div>
    </>
  );
};
export default WhoAmI;
