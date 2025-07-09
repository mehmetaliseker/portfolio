import SectionTitle from "../components/projects/SectionTitle";
import ProjectList from "../components/projects/ProjectList";
import ContactCTA from "../components/projects/ContactCTA";

function Projects () {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 bg-graphite-background/95 text-graphite-text"
    >
      <div className="absolute w-64 h-64 bg-graphite-accent rounded-full opacity-20 blur-2xl animate-pulse z-0 top-[10%] left-[80%]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle />
        <ProjectList />
        <ContactCTA delay={1.2} />
      </div>
    </section>
  );
};

export default Projects;