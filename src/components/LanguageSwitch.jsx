import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center rounded-full transition-all duration-300 overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        width: '70px',
        height: '32px',
        padding: '2px'
      }}
    >
      <div className="relative flex items-center justify-between w-full h-full px-2 z-10">
        <span
          className="text-xs font-semibold transition-all duration-300 relative z-20"
          style={{
            color: language === 'en' ? '#FFFFFF' : '#A8A8A8',
            opacity: language === 'en' ? 1 : 0.6
          }}
        >
          EN
        </span>
        <span
          className="text-xs font-semibold transition-all duration-300 relative z-20"
          style={{
            color: language === 'tr' ? '#FFFFFF' : '#A8A8A8',
            opacity: language === 'tr' ? 1 : 0.6
          }}
        >
          TR
        </span>
      </div>
      <motion.div
        layout
        className="absolute top-1 bottom-1 rounded-full"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.1)',
          width: 'calc(50% - 2px)',
          left: language === 'en' ? '2px' : 'calc(50% + 0px)',
          zIndex: 1
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }}
      />
    </button>
  );
};

export default LanguageSwitch;
