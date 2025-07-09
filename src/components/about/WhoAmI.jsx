import AnimatedSection from "../AnimatedSection";

const WhoAmI = () => (
  <>
    <AnimatedSection direction="top" delay={0.5}>
      <h3 className="text-2xl font-semibold mb-4">Who Am I</h3>
    </AnimatedSection>
    <div className="space-y-4 text-graphite-text leading-relaxed text-sm md:text-base">
      <AnimatedSection direction="top" delay={0.6}>
        <p>
          Hello! My name is Mehmet Ali and
          I'm a passionate software developer with a strong foundation in modern web
          technologies. My journey in programming began with curiosity and has
          evolved into a deep passion for creating meaningful digital experiences.
        </p>
      </AnimatedSection>
      <AnimatedSection direction="right" delay={0.7}>
        <p>
          I specialize in building responsive, user-friendly applications using React,
          Tailwind CSS and other cutting-edge technologies. My approach combines
          technical expertise with creative problem-solving to deliver solutions that
          exceed expectations.
        </p>
      </AnimatedSection>
      <AnimatedSection direction="bottom" delay={0.8}>
        <p>
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or sharing knowledge with the
          developer community. I believe in continuous learning and staying updated
          with the latest industry trends.
        </p>
      </AnimatedSection>
    </div>
  </>
);

export default WhoAmI;
