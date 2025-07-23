import AnimatedSection from "../AnimatedSection";
import { useLanguage } from "../../context/LanguageContext";

const HeroSubtitle = () => {
  const { t } = useLanguage();

  return (
  <AnimatedSection delay={0.2}>
    <p className="text-xl md:text-2xl text-graphite-text font-medium">
      {t('home.title')}
    </p>
  </AnimatedSection>
);
}
export default HeroSubtitle;