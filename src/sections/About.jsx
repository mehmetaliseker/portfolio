import SectionTitle from "../components/about/SectionTitle";
import Skills from "../components/about/Skills";
import WhoAmI from "../components/about/WhoAmI";
import InfoCards from "../components/about/InfoCards";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20 bg-graphite-background/95 text-graphite-text"
    >
      <div className="absolute w-64 h-64 bg-graphite-accent rounded-full opacity-20 blur-2xl animate-pulse z-0 top-[30%] left-[70%]" />

      <div className="relative pt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle />
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Skills />
            <div className="space-y-8">
              <WhoAmI />
              <InfoCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
