import AnimatedSection from "../AnimatedSection";

function HeroTitle () {
  return (
  <AnimatedSection delay={0}>
    <h1 className="text-5xl md:text-7xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-graphite-accent via-graphite-accentAlt to-graphite-accent bg-[length:200%] bg-[position:0%_50%] transition-all duration-1000 ease-in-out animate-gradient-shift">
      Mehmet Ali Şeker
    </h1>
  </AnimatedSection>
);
}
export default HeroTitle;