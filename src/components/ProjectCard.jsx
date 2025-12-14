import { motion, AnimatePresence } from 'framer-motion';
import { memo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaGithub } from 'react-icons/fa';
import SpotlightCard from './SpotlightCard';

const ProjectCard = memo(({ project, index }) => {
  const { t, language } = useLanguage();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const locale = language === 'tr' ? 'tr-TR' : 'en-US';
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#F7DF1E',
      TypeScript: '#3178C6',
      Python: '#3776AB',
      Java: '#ED8B00',
      'C++': '#00599C',
      C: '#A8B9CC',
      'C#': '#239120',
      PHP: '#777BB4',
      Ruby: '#CC342D',
      Go: '#00ADD8',
      Rust: '#000000',
      Swift: '#FA7343',
      Kotlin: '#7F52FF',
      HTML: '#E34F26',
      CSS: '#1572B6',
      Vue: '#4FC08D',
      React: '#61DAFB',
      'React Native': '#61DAFB',
      Angular: '#DD0031',
      Node: '#339933',
      'Next.js': '#000000',
      NestJS: '#E0234E',
      Docker: '#2496ED',
      Shell: '#89E051'
    };
    return colors[language] || '#FFFFFF';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ willChange: 'transform, opacity' }}
    >
      <SpotlightCard className="backdrop-blur-sm">
        <div className="p-6 w-full">
          {/* Proje İsmi */}
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: '#e8e8e8' }}
          >
            {project.name}
          </h3>

          {/* Dil Badge */}
          {project.language && (
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getLanguageColor(project.language) }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: '#c8c8c8' }}
              >
                {project.language}
              </span>
            </div>
          )}

          {/* Açıklama */}
          {project.description && (
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${project.id}-${language}`}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="text-sm mb-4"
                style={{ color: '#c8c8c8' }}
              >
                {project.description}
              </motion.p>
            </AnimatePresence>
          )}

          {/* Tarihler */}
          <div className="flex flex-col gap-2 pb-4 border-white/10">
            <div className="flex items-center justify-between">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`created-${language}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-xs"
                  style={{ color: '#a8a8a8' }}
                >
                  {t('projects.createdAt')}:
                </motion.span>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`created-date-${project.id}-${language}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-xs font-medium"
                  style={{ color: '#c8c8c8' }}
                >
                  {formatDate(project.createdAt)}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-between">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`last-commit-${language}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-xs"
                  style={{ color: '#a8a8a8' }}
                >
                  {t('projects.lastCommit')}:
                </motion.span>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`last-commit-date-${project.id}-${language}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-xs font-medium"
                  style={{ color: '#c8c8c8' }}
                >
                  {formatDate(project.lastCommitDate)}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          {/* See On GitHub Butonu */}
          <a
            href={project.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 mb-4"
            style={{
              background: '#FFFFFF',
              color: '#000000'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F0F0F0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFFFFF';
            }}
          >
            <FaGithub size={18} />
            <AnimatePresence mode="wait">
              <motion.span
                key={`github-btn-${language}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="inline-block"
              >
                {t('projects.seeOnGitHub')}
              </motion.span>
            </AnimatePresence>
          </a>
        </div>
      </SpotlightCard>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
