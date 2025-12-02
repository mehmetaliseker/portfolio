import { useEffect, useState } from "react";
import AnimatedSection from "../AnimatedSection";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Failed to fetch skills:", err));
  }, []);

  return (
    <>
      <div className="space-y-8">
        <AnimatedSection direction="top" delay={0.02}>
          <div className="flex items-center gap-4">
            <h3 className="text-3xl font-bold text-graphite-text">{t('about.skillsTitle')}</h3>
            <div className="h-px bg-graphite-accent flex-1"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <AnimatedSection
              key={index}
              direction="bottom"
              delay={0.05 + index * 0.02}
            >
              <div className="group relative bg-graphite-tertiary border border-graphite-accent/20 px-6 py-8 text-center transition-all duration-300 hover:border-graphite-accent hover:bg-graphite-accent/5 cursor-pointer">
                <div className="absolute inset-0 bg-graphite-accent/0 group-hover:bg-graphite-accent/5 transition-colors duration-300"></div>
                <p className="text-base font-semibold text-graphite-text relative z-10 group-hover:text-graphite-accent transition-colors">
                  {skill}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-graphite-accent group-hover:w-full transition-all duration-300"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;