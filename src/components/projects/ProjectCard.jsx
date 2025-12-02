import React from 'react';
import { FaGithub } from 'react-icons/fa';
import AnimatedSection from '../AnimatedSection';
import { useLanguage } from '../../context/LanguageContext';

const ProjectCard = ({ project, index }) => {
  const { t, language } = useLanguage();

  return (
    <>
      <AnimatedSection direction="bottom" delay={0.04 + index * 0.03}>
        <div className="group relative bg-graphite-tertiary border border-graphite-accent/20 overflow-hidden transition-all duration-300 hover:border-graphite-accent hover:shadow-2xl hover:shadow-graphite-accent/20">
          {/* Corner Decoration */}
          <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-graphite-accent/20 group-hover:border-graphite-accent transition-colors"></div>
          
          <div className="relative h-64 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title[language]}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-graphite-background/90 via-graphite-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-graphite-accent text-white px-4 py-2 font-semibold text-sm hover:bg-graphite-accentAlt transition-colors"
              >
                <FaGithub />
                {t('projects.viewCode')}
              </a>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h4 className="text-xl font-bold text-graphite-text flex-1">{project.title[language]}</h4>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-graphite-textMuted hover:text-graphite-accent transition-colors text-xl"
              >
                <FaGithub />
              </a>
            </div>
            <p className="text-sm text-graphite-textMuted leading-relaxed line-clamp-3">
              {project.description[language]}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-3 py-1 bg-graphite-secondary border border-graphite-accent/20 text-graphite-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default ProjectCard;