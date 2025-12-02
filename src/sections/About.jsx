import SectionTitle from "../components/about/SectionTitle";
import Skills from "../components/about/Skills";
import WhoAmI from "../components/about/WhoAmI";
import InfoCards from "../components/about/InfoCards";
import AnimatedSection from "../components/AnimatedSection";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-32 bg-graphite-background text-graphite-text"
    >
      {/* Side Number */}
      <div className="absolute left-8 top-32 hidden lg:block">
        <div className="text-8xl font-bold text-graphite-accent/10 leading-none">02</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {/* Left Column - Who Am I */}
          <div className="lg:col-span-2 space-y-8">
            <WhoAmI />
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-6">
            <InfoCards />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <Skills />
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-graphite-accent/30 to-transparent"></div>
    </section>
  );
};

export default About;
