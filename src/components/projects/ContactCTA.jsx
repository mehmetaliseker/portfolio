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
      <div className="text-center mt-16">
        <div className="bg-graphite-secondary rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-graphite-background/30">
          <h3 className="text-2xl font-semibold mb-4">
            {t('projects.interest')}
          </h3>
          <p className="text-graphite-text/70 mb-6">
            {t('projects.descriptionCTA')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905468303055"
              onMouseEnter={() => setHoveredPhone(true)}
              onMouseLeave={() => setHoveredPhone(false)}
              className="group px-8 py-3 border-2 border-graphite-accent bg-graphite-accent text-black font-semibold rounded-lg
              hover:bg-graphite-background/35 hover:text-graphite-accent transition-all duration-300 shadow-lg hover:shadow-xl
              flex items-center gap-2 hover:scale-105"
            >
              {t('projects.getInTouch')}
              <AnimatedPhone isHovered={hoveredPhone} />
            </a>
            <a
              href="./seker.pdf"
              download
              onMouseEnter={() => setHoveredArrow(true)}
              onMouseLeave={() => setHoveredArrow(false)}
              className="group px-8 py-3 border-2 border-graphite-accent text-graphite-accent font-semibold rounded-lg
              hover:bg-graphite-accent hover:text-black transition-all duration-300
              flex items-center gap-2 hover:scale-105"
            >
              {t('projects.downloadCV')}
              <AnimatedArrow isHovered={hoveredArrow} hasUnderline />
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactCTA;