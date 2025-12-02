import SectionTitle from "../components/projects/SectionTitle";
import ProjectList from "../components/projects/ProjectList";
import ContactCTA from "../components/projects/ContactCTA";

function Projects () {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-32 bg-graphite-background text-graphite-text"
    >
      {/* Side Number */}
      <div className="absolute left-8 top-32 hidden lg:block">
        <div className="text-8xl font-bold text-graphite-accent/10 leading-none">03</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle />
        <ProjectList />
        <ContactCTA />
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-graphite-accent/30 to-transparent"></div>
    </section>
  );
};

export default Projects;