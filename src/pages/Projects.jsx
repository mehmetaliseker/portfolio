import { motion, AnimatePresence } from 'framer-motion';
import { memo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import useGitHubProjects from '../hooks/useGitHubProjects';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { SkeletonProjectCard } from '../components/Skeleton';
import { useNavigation } from '../hooks/useNavigation';

const Projects = memo(() => {
  const { navigateToPage } = useNavigation();
  const { t, language } = useLanguage();
  const { projects, loading, error } = useGitHubProjects('mehmetaliseker', language);

  return (
    <div className="flex flex-col w-full">
      <div className="relative z-10 px-4 md:px-8 lg:px-16 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Başlık */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 md:mb-16"
            style={{ willChange: 'transform, opacity' }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              style={{ color: '#e8e8e8', textShadow: '0 0 15px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.15)' }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={`projects-title-${language}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="inline-block"
                >
                  {t('projects.title')}
                </motion.span>
              </AnimatePresence>
            </h1>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonProjectCard key={index} />
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <p className="text-lg mb-2" style={{ color: '#ff6b6b' }}>
                  {t('projects.error')}
                </p>
                <p className="text-base" style={{ color: '#c8c8c8' }}>
                  {error}
                </p>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`no-projects-${language}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-lg"
                      style={{ color: '#c8c8c8' }}
                    >
                      {t('projects.noProjects')}
                    </motion.p>
                  </AnimatePresence>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
});

Projects.displayName = 'Projects';
export default Projects;
