import AnimatedArrow from "../AnimatedArrow";
import AnimatedPhone from "../AnimatedPhone";
import AnimatedSection from "../AnimatedSection";
import { useState } from "react";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ContactCTA = ({ delay }) => {
  const { t } = useLanguage();
  const [hoveredArrow, setHoveredArrow] = useState(false);
  const [hoveredPhone, setHoveredPhone] = useState(false);

  return (
    <AnimatedSection direction="top" delay={.2}>
      <div className="mt-20">
        <div className="relative bg-graphite-tertiary border-2 border-graphite-accent/20 p-12 max-w-4xl mx-auto group hover:border-graphite-accent transition-all duration-300">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-graphite-accent/20 group-hover:border-graphite-accent transition-colors"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-graphite-accent/20 group-hover:border-graphite-accent transition-colors"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-graphite-accent/20 group-hover:border-graphite-accent transition-colors"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-graphite-accent/20 group-hover:border-graphite-accent transition-colors"></div>

          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-graphite-text">
              {t('projects.interest')}
            </h3>
            <p className="text-graphite-textMuted text-lg max-w-2xl mx-auto">
              {t('projects.descriptionCTA')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:+905468303055"
                onMouseEnter={() => setHoveredPhone(true)}
                onMouseLeave={() => setHoveredPhone(false)}
                className="group relative px-8 py-4 bg-graphite-accent text-white font-semibold
                hover:bg-transparent hover:text-graphite-accent transition-all duration-300
                border-2 border-graphite-accent flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('projects.getInTouch')}
                  <AnimatedPhone isHovered={hoveredPhone} />
                </span>
                <span className="absolute inset-0 bg-graphite-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
              <a
                href="./seker.pdf"
                download
                onMouseEnter={() => setHoveredArrow(true)}
                onMouseLeave={() => setHoveredArrow(false)}
                className="group px-8 py-4 border-2 border-graphite-accent text-graphite-accent font-semibold
                hover:bg-graphite-accent hover:text-white transition-all duration-300
                flex items-center justify-center gap-2"
              >
                {t('projects.downloadCV')}
                <AnimatedArrow isHovered={hoveredArrow} hasUnderline />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactCTA;