import React from 'react';
import { FaGithub } from 'react-icons/fa';
import AnimatedSection from '../AnimatedSection';
import { useLanguage } from '../../context/LanguageContext';

const ProjectCard = ({ project, index }) => {
  const { t, language } = useLanguage();

  return (
    <>
      <AnimatedSection direction="bottom" delay={0.04 + index * 0.03}>
        <div className="relative bg-graphite-secondary rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01] border border-graphite-background/30">

          <div className="relative h-64 w-full overflow-hidden group">
            <img
              src={project.image}
              alt={project.title[language]}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
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
            <h4 className="text-xl font-semibold">{project.title[language]}</h4>
            <p className="text-sm text-graphite-text/80 leading-relaxed">
              {project.description[language]}
            </p>
            <p className="text-sm text-graphite-accent">
              {project.technologies.join(", ")}
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-graphite-accent text-graphite-accent px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:text-black hover:bg-graphite-accent font-semibold text-sm"
            >
              <FaGithub className="transition-transform duration-300 group-hover:scale-110" />
              {t('projects.viewCode')}
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default ProjectCard;