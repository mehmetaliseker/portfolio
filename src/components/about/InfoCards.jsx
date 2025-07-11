import AnimatedSection from "../AnimatedSection";

const InfoCards = () => (
  <div className="grid md:grid-cols-2 gap-6">
    <AnimatedSection direction="bottom" delay={1.4}>
      <div className="bg-graphite-secondary p-6 rounded-lg shadow-lg border border-graphite-background/30">
        <h4 className="text-lg font-semibold mb-3 text-graphite-accent">Education</h4>
        <div className="space-y-2 text-sm">
          <p className="font-medium">Computer Programming</p>
          <p className="text-graphite-text/70">Ege University</p>
          <p className="text-graphite-text/50">2024 - Present</p>
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection direction="bottom" delay={1.6}>
      <div className="bg-graphite-secondary p-6 rounded-lg shadow-lg border border-graphite-background/30">
        <h4 className="text-lg font-semibold mb-3 text-graphite-accent">Experience</h4>
        <div className="space-y-2 text-sm">
          <p className="font-medium">IT Intern</p>
          <p className="text-graphite-text/70">Kale Pratt & Whitney</p>
          <p className="text-graphite-text/50">June/2022 - September/2022</p>
        </div>
      </div>
    </AnimatedSection>
  </div>
);

export default InfoCards;