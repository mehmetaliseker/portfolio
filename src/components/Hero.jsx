import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, forwardRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../hooks/useNavigation';
import SocialIcons from './SocialIcons';

const Hero = forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t, language } = useLanguage();
  const { navigateToPage } = useNavigation();

  return (
    <div 
      ref={ref}
      className="relative z-20 flex flex-col items-center justify-center min-h-screen h-screen px-4 md:px-8 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: 1, 
          y: 0
        }}
        transition={{ 
          duration: 1, 
          ease: [0.22, 1, 0.36, 1]
        }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center mb-4 sm:mb-6 md:mb-8 px-2"
        style={{ 
          fontFamily: "'Inter', 'Geist', 'Space Grotesk', -apple-system, sans-serif",
          letterSpacing: '-0.02em',
          lineHeight: '1.1',
          fontWeight: 700,
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)'
        }}
      >
        <span className="text-[#e8e8e8]" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.15)' }}>Mehmet Ali ŞEKER</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0
        }}
        transition={{ 
          duration: 1, 
          delay: 0.2, 
          ease: [0.22, 1, 0.36, 1]
        }}
        className="text-lg sm:text-xl md:text-2xl lg:text-[26px] text-center mb-3 sm:mb-4 md:mb-6 px-2"
        style={{ 
          fontWeight: 400,
          letterSpacing: '0.01em',
          textShadow: '0 2px 6px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 255, 255, 0.08)'
        }}
      >
        <span className="text-[#e2e2e2]" style={{ textShadow: '0 0 12px rgba(255, 255, 255, 0.25), 0 0 25px rgba(255, 255, 255, 0.12)' }}>Full-Stack Developer</span>
      </motion.p>

      <motion.p
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0
        }}
        transition={{ 
          duration: 0.3, 
          ease: [0.22, 1, 0.36, 1],
          layout: { duration: 0.3 }
        }}
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-center mb-4 sm:mb-6 md:mb-8 px-4 max-w-2xl"
        style={{ 
          fontWeight: 300,
          letterSpacing: '0.01em',
          textShadow: '0 2px 6px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 255, 255, 0.08)'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={`subtitle-${language}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="inline-block"
          >
            <span className="text-[#e2e2e2]" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.1)' }}>{t('home.subtitle')}</span>
          </motion.span>
        </AnimatePresence>
      </motion.p>

      <motion.button
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.1, 
          ease: [0.22, 1, 0.36, 1],
          layout: { 
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
        onClick={() => navigateToPage('about')}
        className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold mb-6 sm:mb-8 md:mb-10 learn-more-button inline-block text-sm sm:text-base"
        style={{
          background: 'transparent',
          color: '#ffffff',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
          cursor: 'pointer',
          transition: 'width 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={`button-${language}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="inline-block whitespace-nowrap"
          >
            {t('home.learnMore')}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="px-2"
      >
        <SocialIcons />
      </motion.div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
