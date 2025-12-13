import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';

const Footer = ({ onPageChange, isMinimal = false }) => {
  const { t, language } = useLanguage();
  
  const handlePageChange = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  if (isMinimal) {
    return (
      <footer
        className="relative z-10 w-full mt-auto"
        style={{ background: 'rgba(10, 10, 10, 0.9)' }}
      >
        <div className="w-full px-4 md:px-8 lg:px-16 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-evenly items-start gap-8 md:gap-12">
            {/* Column 1 - About */}
            <div className="text-start md:text-left flex-1 max-w-xs pl-4 md:pl-0">
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: '#e8e8e8' }}
              >
                Mehmet Ali Şeker
              </h3>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`footer-desc-minimal-${language}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm leading-relaxed"
                  style={{ color: '#c8c8c8' }}
                >
                  {t('footer.description')}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="text-start md:text-left flex-1 max-w-xs pl-8 md:pl-0">
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: '#e8e8e8' }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`quick-links-minimal-${language}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    {t('footer.quickLinks')}
                  </motion.span>
                </AnimatePresence>
              </h3>
              <ul className="space-y-2">
                {[
                  { label: t('nav.home'), page: 'home' },
                  { label: t('nav.projects'), page: 'projects' },
                  { label: t('nav.about'), page: 'about' },
                  { label: t('nav.contact'), page: 'contact' }
                ].map((link, index) => (
                  <li key={link.page}>
                    <AnimatePresence mode="wait">
                      <motion.button
                        key={`link-${link.page}-${language}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => handlePageChange(link.page)}
                        className="text-sm transition-all duration-300 hover:text-white relative"
                        style={{ color: '#c8c8c8' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.textShadow = 'none';
                        }}
                      >
                        {link.label}
                      </motion.button>
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Contact */}
            <div className="text-start md:text-left flex-1 max-w-xs pl-8 md:pl-0">
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: '#e8e8e8' }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`contact-minimal-${language}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    {t('footer.contact')}
                  </motion.span>
                </AnimatePresence>
              </h3>
              <ul className="space-y-2">
                <li>
                  <AnimatePresence mode="wait">
                    <motion.a
                      key={`github-minimal-${language}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                      href="https://github.com/mehmetaliseker/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-start gap-2 text-sm transition-all duration-300 hover:text-white relative"
                      style={{ color: '#c8c8c8' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.textShadow = 'none';
                      }}
                    >
                      <FaGithub size={16} />
                      GitHub
                    </motion.a>
                  </AnimatePresence>
                </li>
                <li>
                  <AnimatePresence mode="wait">
                    <motion.a
                      key={`linkedin-minimal-${language}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      href="https://www.linkedin.com/in/mehmetaliseker/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-start gap-2 text-sm transition-all duration-300 hover:text-white relative"
                      style={{ color: '#c8c8c8' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.textShadow = 'none';
                      }}
                    >
                      <FaLinkedin size={16} />
                      LinkedIn
                    </motion.a>
                  </AnimatePresence>
                </li>
                <li>
                  <AnimatePresence mode="wait">
                    <motion.a
                      key={`email-minimal-${language}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      href="mailto:maliseker2005@gmail.com"
                      className="flex items-center justify-start gap-2 text-sm transition-all duration-300 hover:text-white relative"
                      style={{ color: '#c8c8c8' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.textShadow = 'none';
                      }}
                    >
                      <LuMail size={16} />
                      Email
                    </motion.a>
                  </AnimatePresence>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div
            className="w-full h-px my-6"
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
          />

          {/* Copyright */}
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={`rights-minimal-${language}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xs"
                style={{ color: '#a8a8a8' }}
              >
                © 2025 Mehmet Ali Şeker. {t('footer.rights')}
              </motion.p>
            </AnimatePresence>
          </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      className="relative z-10 w-full mt-auto"
      style={{ background: 'rgba(10, 10, 10, 0.9)' }}
    >
      <div className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-evenly items-start gap-y-8 md:gap-12">
          {/* Column 1 - About */}
          <div className="text-start md:text-left flex-1 max-w-xs md:pl-0">
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: '#e8e8e8' }}
            >
              Mehmet Ali Şeker
            </h3>
            <AnimatePresence mode="wait">
              <motion.p
                key={`footer-desc-${language}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-base leading-relaxed"
                style={{ color: '#c8c8c8' }}
              >
                {t('footer.description')}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="text-start md:text-left flex-1 max-w-xs md:pl-0">
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: '#e8e8e8' }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={`quick-links-${language}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  {t('footer.quickLinks')}
                </motion.span>
              </AnimatePresence>
            </h3>
            <ul className="space-y-3">
              {[
                { label: t('nav.home'), page: 'home' },
                { label: t('nav.projects'), page: 'projects' },
                { label: t('nav.about'), page: 'about' },
                { label: t('nav.contact'), page: 'contact' }
              ].map((link, index) => (
                <li key={link.page}>
                  <AnimatePresence mode="wait">
                    <motion.button
                      key={`link-${link.page}-${language}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => handlePageChange(link.page)}
                      className="text-base transition-all duration-300 hover:text-white relative"
                      style={{ color: '#c8c8c8' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.textShadow = 'none';
                      }}
                    >
                      {link.label}
                    </motion.button>
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="text-start md:text-left flex-1 max-w-xs md:pl-0">
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: '#e8e8e8' }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={`contact-${language}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  {t('footer.contact')}
                </motion.span>
              </AnimatePresence>
            </h3>
            <ul className="space-y-3">
              <li>
                <AnimatePresence mode="wait">
                  <motion.a
                    key={`github-${language}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    href="https://github.com/mehmetaliseker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-start gap-2 text-base transition-all duration-300 hover:text-white relative"
                    style={{ color: '#c8c8c8' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    <FaGithub size={18} />
                    GitHub
                  </motion.a>
                </AnimatePresence>
              </li>
              <li>
                <AnimatePresence mode="wait">
                  <motion.a
                    key={`linkedin-${language}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    href="https://www.linkedin.com/in/mehmetaliseker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-start gap-2 text-base transition-all duration-300 hover:text-white relative"
                    style={{ color: '#c8c8c8' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    <FaLinkedin size={18} />
                    LinkedIn
                  </motion.a>
                </AnimatePresence>
              </li>
              <li>
                <AnimatePresence mode="wait">
                  <motion.a
                    key={`email-${language}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    href="mailto:maliseker2005@gmail.com"
                    className="flex items-center justify-start gap-2 text-base transition-all duration-300 hover:text-white relative"
                    style={{ color: '#c8c8c8' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >
                    <LuMail size={18} />
                    Email
                  </motion.a>
                </AnimatePresence>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px my-8"
          style={{ background: 'rgba(255, 255, 255, 0.1)' }}
        />

        {/* Copyright */}
        <div className="text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={`rights-${language}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm"
              style={{ color: '#a8a8a8' }}
            >
              © 2025 Mehmet Ali Şeker. {t('footer.rights')}
            </motion.p>
          </AnimatePresence>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
