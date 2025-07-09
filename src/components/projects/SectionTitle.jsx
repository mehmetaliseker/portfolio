import AnimatedSection from "../AnimatedSection";

const SectionTitle = () => (
  <AnimatedSection direction="top" delay={0}>
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold font-serif mb-4">My Projects</h2>
      <div className="w-24 h-1 bg-graphite-accent mx-auto mb-4 rounded-full"></div>
      <p className="text-lg text-graphite-text/70 max-w-2xl mx-auto">
        Here are some of the projects I've worked on.
      </p>
    </div>
  </AnimatedSection>
);

export default SectionTitle;
