import { FaGithub } from "react-icons/fa";
import AnimatedSection from "../AnimatedSection";

const ProjectCard = ({ project, index }) => (
  <AnimatedSection direction="bottom" delay={0.4 + index * 0.3}>
    <div className="relative bg-graphite-secondary rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-[1.01] border border-graphite-background/30">
      <div className="relative h-64 w-full overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-graphite-accent transition duration-300 flex items-center justify-center hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h4 className="text-xl font-semibold">{project.title}</h4>
        <p className="text-sm text-graphite-text/80 leading-relaxed">
          {project.description}
        </p>
        <p className="text-sm text-graphite-accent">
          {project.technologies.join(", ")}
        </p>
      </div>
    </div>
  </AnimatedSection>
);

export default ProjectCard;