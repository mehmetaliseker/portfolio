import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import useGitHubProjects from '../hooks/useGitHubProjects';
import ProjectCard from '../components/ProjectCard';
import ShinyText from '../components/ShinyText';
import Footer from '../components/Footer';

const Projects = ({ onPageChange }) => {
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
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              style={{ color: '#e8e8e8' }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={`projects-title-${language}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="inline-block"
                >
                  <ShinyText text={t('projects.title')} speed={1} className="text-[#e8e8e8]" />
                </motion.span>
              </AnimatePresence>
            </h1>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div
                  className="inline-block w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4"
                />
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`loading-${language}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg"
                    style={{ color: '#c8c8c8' }}
                  >
                    {t('projects.loading')}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`error-${language}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg mb-2"
                    style={{ color: '#ff6b6b' }}
                  >
                    {t('projects.error')}
                  </motion.p>
                </AnimatePresence>
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
                      transition={{ duration: 0.3 }}
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
      <Footer onPageChange={onPageChange} />
    </div>
  );
};

export default Projects;
