import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo, memo, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../hooks/useNavigation';
import { usePage } from '../hooks/usePage';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import LanguageSwitch from './LanguageSwitch';

const PillNavbar = memo(() => {
  const { language } = useLanguage();
  const { navigateToPage, currentPage } = useNavigation();
  const { navItems } = usePage();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Body scroll lock hook
  useBodyScrollLock(isMobileMenuOpen);

  // Active index'i hesapla
  useEffect(() => {
    const index = navItems.findIndex(item => item.name === currentPage);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [currentPage, navItems]);

  const handleNavClick = useCallback((pageName) => {
    navigateToPage(pageName);
    setIsMobileMenuOpen(false);
  }, [navigateToPage]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto w-full md:w-auto"
        >
          <div
            className="flex items-center justify-between md:justify-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full backdrop-blur-xl border border-white/10"
            style={{
              background: 'rgba(0, 0, 0, 0.6)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Sol tarafta isim - sadece mobil/tablet */}
            <div className="md:hidden text-sm font-semibold text-white">
              Mehmet Ali Şeker
            </div>

            {/* Desktop nav items */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => {
                const isActive = index === activeIndex;
                const isHovered = hoveredIndex === index || isActive;

                return (
                  <motion.button
                    key={item.name}
                    onClick={() => {
                      setActiveIndex(index);
                      handleNavClick(item.name);
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden"
                    style={{
                      color: isHovered ? '#FFFFFF' : '#C8C8C8',
                      background: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${item.name}-${language}`}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="relative z-10 inline-block"
                      >
                        {item.label}
                      </motion.span>
                    </AnimatePresence>
                    {(isHovered || isActive) && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 rounded-full border border-white/20"
                        style={{
                          background: isActive 
                            ? 'rgba(255, 255, 255, 0.1)' 
                            : 'rgba(255, 255, 255, 0.05)',
                          boxShadow: isActive
                            ? '0 0 25px rgba(255, 255, 255, 0.15)'
                            : '0 0 20px rgba(255, 255, 255, 0.1)'
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
              <div className="h-6 w-px mx-2" style={{ background: 'rgba(255, 255, 255, 0.1)' }} />
              <LanguageSwitch />
            </div>

            {/* Hamburger menu button - sadece mobil/tablet */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative w-7 h-9 cursor-pointer z-50"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div
                className={`absolute top-1/2 left-0 w-full h-[0.15em] bg-white rounded transition-all duration-500 ${
                  isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'
                }`}
              />
              <div
                className={`absolute top-1/2 left-0 w-full h-[0.15em] bg-white rounded transition-all duration-500 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <div
                className={`absolute top-1/2 left-0 w-full h-[0.15em] bg-white rounded transition-all duration-500 ${
                  isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'
                }`}
              />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobil menü overlay - tüm sayfayı kaplar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center h-full gap-6 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.name)}
                    className="text-2xl md:text-3xl font-medium py-3 px-6 rounded-lg transition-all duration-300 relative"
                    style={{
                      color: isActive ? '#FFFFFF' : '#C8C8C8',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`mobile-${item.name}-${language}`}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.span>
                    </AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className="absolute inset-0 rounded-lg border border-white/20"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          boxShadow: '0 0 25px rgba(255, 255, 255, 0.15)'
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
              
              {/* Language switch mobil menüde */}
              <div className="mt-4">
                <LanguageSwitch />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

PillNavbar.displayName = 'PillNavbar';

export default PillNavbar;
