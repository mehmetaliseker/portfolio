import AnimatedSection from "../AnimatedSection";
import { useLanguage } from '../../context/LanguageContext';

const HeroDescription = () => {
  const { t } = useLanguage();

  return (
  <AnimatedSection delay={0.4}>
    <p className="text-lg text-graphite-text leading-relaxed max-w-3xl mx-auto">
      {t('home.subtitle')}
    </p>
  </AnimatedSection>
);
}
export default HeroDescription;