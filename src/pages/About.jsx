import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LogoLoop } from '../components/LogoLoop';
import GlareHover from '../components/GlareHover';
import CountUp from '../components/CountUp';
import Footer from '../components/Footer';
import { LuFileText } from 'react-icons/lu';
import { useNavigation } from '../hooks/useNavigation';

const About = () => {
  const { navigateToPage } = useNavigation();
  const { t, language } = useLanguage();
  const [animationsComplete, setAnimationsComplete] = useState(false);
  const [completedAnimations, setCompletedAnimations] = useState(new Set());

  const handleAnimationEnd = (animationId) => {
    setCompletedAnimations(prev => {
      const newSet = new Set(prev);
      newSet.add(animationId);
      if (newSet.size === 2) {
        setAnimationsComplete(true);
      }
      return newSet;
    });
  };
  const skills = [
    { src: 'https://cdn.simpleicons.org/docker/FFFFFF', alt: 'Docker' },
    { src: 'https://cdn.simpleicons.org/github/FFFFFF', alt: 'GitHub' },
    { src: 'https://cdn.simpleicons.org/tailwindcss/FFFFFF', alt: 'Tailwind CSS' },
    { src: 'https://cdn.simpleicons.org/react/FFFFFF', alt: 'React' },
    { src: 'https://cdn.simpleicons.org/nestjs/FFFFFF', alt: 'NestJS' },
    { src: 'https://cdn.simpleicons.org/postgresql/FFFFFF', alt: 'PostgreSQL' },
    { src: 'https://cdn.simpleicons.org/mongodb/FFFFFF', alt: 'MongoDB' },
    { src: 'https://cdn.simpleicons.org/firebase/FFFFFF', alt: 'Firebase' },
    { src: 'https://cdn.simpleicons.org/javascript/FFFFFF', alt: 'JavaScript' },
    { src: 'https://cdn.simpleicons.org/typescript/FFFFFF', alt: 'TypeScript' },
    { src: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF', alt: 'Next.js' },
    { src: '/java-icon.svg', alt: 'Java' },
    { src: 'https://cdn.simpleicons.org/git/FFFFFF', alt: 'Git' },
    { src: '/canva-icon.svg', alt: 'Canva' },
    { src: 'https://cdn.simpleicons.org/figma/FFFFFF', alt: 'Figma' },
    { src: '/mysql-icon.svg', alt: 'MySQL' },
    { src: 'https://cdn.simpleicons.org/python/FFFFFF', alt: 'Python' },
    { src: 'https://cdn.simpleicons.org/vuedotjs/FFFFFF', alt: 'Vue' },
    { src: 'https://cdn.simpleicons.org/php/FFFFFF', alt: 'PHP' },
    { src: '/csharp-icon.svg', alt: 'C#' }
  ];

  return (
    <div className="flex flex-col w-full">
      <style>{`
        .cv-button-wrapper:hover .cv-icon {
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
        }
        .cv-button-wrapper:hover .cv-text {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6);
        }
      `}</style>
      <div className="relative z-10 min-h-screen px-4 md:px-8 lg:px-16 py-20 md:py-24 flex items-start">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol Taraf - Profil ve Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center lg:items-center"
            >
              {/* Yuvarlak Profil Fotoğrafı */}
              <div className="relative mb-12 flex justify-center lg:justify-center">
                {/* Glow Layers */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-50"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.15)'
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-60"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    transform: 'scale(1.1)'
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-70"
                  style={{
                    transform: 'scale(1.05)'
                  }}
                />
                <img
                  src="/mehmet_ali_nobg.png"
                  alt="Mehmet Ali ŞEKER"
                  className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white/20 z-10"
                  style={{
                    filter: 'grayscale(100%) contrast(1.1)'
                  }}
                />
              </div>

              {/* My Skills */}
              <div className="w-full">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: '#e8e8e8' }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`skills-${language}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="inline-block"
                    >
                      {t('about.skillsTitle')}
                    </motion.span>
                  </AnimatePresence>
                </h3>
                <div className="w-full">
                  <LogoLoop
                    logos={skills}
                    speed={60}
                    direction="left"
                    logoHeight={40}
                    gap={24}
                    pauseOnHover={true}
                    scaleOnHover={true}
                    renderItem={(item) => (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-[40px] w-auto block object-contain transition-transform duration-300 group-hover/item:scale-125"
                        style={{
                          filter: 'brightness(0) invert(1)',
                          transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
                          opacity: 1
                        }}
                      />
                    )}
                  />
                </div>
                
                {/* İstatistik Kutuları */}
                <div className="flex flex-row md:flex-row justify-evenly gap-3 md:gap-12 mt-8" style={{ width: '100%' }}>
                  {/* Projects */}
                  <GlareHover
                    width="100%"
                    height="auto"
                    background="rgba(0, 0, 0, 0.4)"
                    borderRadius="16px"
                    borderColor="rgba(255, 255, 255, 0.1)"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    autoTrigger={animationsComplete}
                    autoTriggerDelay={2000}
                    className="backdrop-blur-sm !block flex-1"
                    style={{
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <div className="p-4 md:p-6 w-full text-center">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#e8e8e8' }}>
                        <CountUp
                          to={10}
                          from={0}
                          duration={2}
                          delay={0}
                          className="inline"
                          onEnd={() => handleAnimationEnd('projects')}
                        />
                        <span style={{ color: '#e8e8e8' }}>+</span>
                      </div>
                      <p className="text-sm md:text-base lg:text-lg" style={{ color: '#c8c8c8' }}>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`projects-label-${language}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="inline-block"
                          >
                            {t('about.projects')}
                          </motion.span>
                        </AnimatePresence>
                      </p>
                    </div>
                  </GlareHover>

                  {/* Success Rate */}
                  <GlareHover
                    width="100%"
                    height="auto"
                    background="rgba(0, 0, 0, 0.4)"
                    borderRadius="16px"
                    borderColor="rgba(255, 255, 255, 0.1)"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    autoTrigger={animationsComplete}
                    autoTriggerDelay={2000}
                    className="backdrop-blur-sm !block flex-1"
                    style={{
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <div className="p-4 md:p-6 w-full text-center">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#e8e8e8' }}>
                        <CountUp
                          to={100}
                          from={0}
                          duration={2}
                          delay={0}
                          className="inline"
                          onEnd={() => handleAnimationEnd('success')}
                        />
                        <span style={{ color: '#e8e8e8' }}>%</span>
                      </div>
                      <p className="text-sm md:text-base lg:text-lg" style={{ color: '#c8c8c8' }}>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`success-rate-${language}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="inline-block"
                          >
                            {t('about.successRate')}
                          </motion.span>
                        </AnimatePresence>
                      </p>
                    </div>
                  </GlareHover>
                </div>
              </div>
            </motion.div>

            {/* Sağ Taraf - İçerik */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Başlık */}
              <h2
                className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center"
                style={{ color: '#e8e8e8', textShadow: '0 0 12px rgba(255, 255, 255, 0.3), 0 0 25px rgba(255, 255, 255, 0.15)' }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`whoami-title-${language}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="inline-block"
                  >
                    {t('about.whoamiTitle')}
                  </motion.span>
                </AnimatePresence>
              </h2>

              {/* Hakkımda Paragrafları */}
              <div className="space-y-6 mb-12">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`whoami-1-${language}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="text-base md:text-md leading-relaxed"
                    style={{ color: '#c8c8c8', textShadow: '0 0 8px rgba(255, 255, 255, 0.15), 0 0 15px rgba(255, 255, 255, 0.08)' }}
                  >
                    {t('about.whoami.1')}
                  </motion.p>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`whoami-2-${language}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="text-base md:text-md leading-relaxed"
                    style={{ color: '#c8c8c8', textShadow: '0 0 8px rgba(255, 255, 255, 0.15), 0 0 15px rgba(255, 255, 255, 0.08)' }}
                  >
                    {t('about.whoami.2')}
                  </motion.p>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`whoami-3-${language}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="text-base md:text-md leading-relaxed"
                    style={{ color: '#c8c8c8', textShadow: '0 0 8px rgba(255, 255, 255, 0.15), 0 0 15px rgba(255, 255, 255, 0.08)' }}
                  >
                    {t('about.whoami.3')}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* View CV Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8"
              >
                <a
                  href="/seker.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="seker.pdf"
                  className="block cv-button-wrapper"
                >
                  <GlareHover
                    width="100%"
                    height="auto"
                    background="rgba(0, 0, 0, 0.4)"
                    borderRadius="16px"
                    borderColor="rgba(255, 255, 255, 0.1)"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    className="backdrop-blur-sm !block"
                    style={{
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <div className="p-4 flex items-center justify-center gap-3">
                      <LuFileText 
                        size={24} 
                        className="cv-icon transition-all duration-300"
                        style={{ 
                          color: '#e8e8e8'
                        }}
                      />
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`cv-${language}`}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="cv-text text-lg md:text-xl font-semibold transition-all duration-300 inline-block"
                          style={{ 
                            color: '#e8e8e8'
                          }}
                        >
                          {t('about.viewCV')}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </GlareHover>
                </a>
              </motion.div>

              {/* Eğitim ve Deneyim Kutuları */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Eğitim */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <GlareHover
                    width="100%"
                    height="auto"
                    background="rgba(0, 0, 0, 0.4)"
                    borderRadius="16px"
                    borderColor="rgba(255, 255, 255, 0.1)"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    className="backdrop-blur-sm !block"
                    style={{
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <div className="p-6 w-full">
                      <h3
                        className="text-xl font-semibold mb-4"
                        style={{ color: '#e8e8e8' }}
                      >
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`education-title-${language}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="inline-block"
                          >
                            {t('about.education.title')}
                          </motion.span>
                        </AnimatePresence>
                      </h3>
                      <div>
                        <h4
                          className="text-lg font-medium mb-1"
                          style={{ color: '#e2e2e2' }}
                        >
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={`education-degree-${language}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="inline-block"
                            >
                              {t('about.education.degree')}
                            </motion.span>
                          </AnimatePresence>
                        </h4>
                        <p
                          className="text-base mb-2"
                          style={{ color: '#c8c8c8' }}
                        >
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={`education-university-${language}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="inline-block"
                            >
                              {t('about.education.university')}
                            </motion.span>
                          </AnimatePresence>
                        </p>
                        <p
                          className="text-sm"
                          style={{ color: '#a8a8a8' }}
                        >
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={`education-years-${language}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="inline-block"
                            >
                              {t('about.education.years')}
                            </motion.span>
                          </AnimatePresence>
                        </p>
                      </div>
                    </div>
                  </GlareHover>
                </motion.div>

                {/* Deneyim */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <GlareHover
                    width="100%"
                    height="auto"
                    background="rgba(0, 0, 0, 0.4)"
                    borderRadius="16px"
                    borderColor="rgba(255, 255, 255, 0.1)"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    className="backdrop-blur-sm !block"
                    style={{
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <div className="p-6 w-full">
                      <h3
                        className="text-xl font-semibold mb-4"
                        style={{ color: '#e8e8e8' }}
                      >
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`experience-title-${language}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="inline-block"
                          >
                            {t('about.experience.title')}
                          </motion.span>
                        </AnimatePresence>
                      </h3>
                      <div>
                        <h4
                          className="text-lg font-medium mb-1"
                          style={{ color: '#e2e2e2' }}
                        >
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={`experience-position-${language}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="inline-block"
                            >
                              {t('about.experience.position')}
                            </motion.span>
                          </AnimatePresence>
                        </h4>
                        <p
                          className="text-base mb-2"
                          style={{ color: '#c8c8c8' }}
                        >
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={`experience-company-${language}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="inline-block"
                            >
                              {t('about.experience.company')}
                            </motion.span>
                          </AnimatePresence>
                        </p>
                        <p
                          className="text-sm"
                          style={{ color: '#a8a8a8' }}
                        >
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={`experience-years-${language}`}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="inline-block"
                            >
                              {t('about.experience.years')}
                            </motion.span>
                          </AnimatePresence>
                        </p>
                      </div>
                    </div>
                  </GlareHover>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer isMinimal={true} />
    </div>
  );
};

export default About;
