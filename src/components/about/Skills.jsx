import { useEffect, useState } from "react";
import AnimatedSection from "../AnimatedSection";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Failed to fetch skills:", err));
  }, []);

  return (
    <>
<div className="space-y-6">
      <AnimatedSection direction="top" delay={0.02}>
        <h3 className="text-2xl font-semibold">My Skills</h3>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <AnimatedSection
            key={index}
            direction="bottom"
            delay={0.05 + index * 0.02}
          >
            <div className="bg-graphite-secondary border border-graphite-background/30 rounded-lg px-4 py-6 text-center shadow-md hover:shadow-lg transition">
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
    </>
  );
};

export default Skills;