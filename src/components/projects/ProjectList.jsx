import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "../AnimatedSection";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const { t } = useLanguage();

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to fetch projects:", err));
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default ProjectList;