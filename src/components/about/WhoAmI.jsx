import AnimatedSection from "../AnimatedSection";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const WhoAmI = () => {
  const { t } = useLanguage();
  return (
    <>
      <AnimatedSection direction="top" delay={0.2}>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-graphite-accent flex-1"></div>
          <h3 className="text-3xl font-bold text-graphite-text whitespace-nowrap">{t('about.whoamiTitle')}</h3>
          <div className="h-px bg-graphite-accent flex-1"></div>
        </div>
      </AnimatedSection>
      <div className="space-y-6 text-graphite-textMuted leading-relaxed text-base md:text-lg">
        <AnimatedSection direction="top" delay={0.3}>
          <div className="relative pl-6 border-l-2 border-graphite-accent/30">
            <p className="text-graphite-text">
              {t('about.whoami.1')}
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right" delay={0.4}>
          <div className="relative pl-6 border-l-2 border-graphite-accent/30">
            <p className="text-graphite-text">
              {t('about.whoami.2')}
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="bottom" delay={0.5}>
          <div className="relative pl-6 border-l-2 border-graphite-accent/30">
            <p className="text-graphite-text">
              {t('about.whoami.3')}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};
export default WhoAmI;
