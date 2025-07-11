import AnimatedSection from "../AnimatedSection";
import AnimatedArrow from "../AnimatedArrow";
import { useState } from "react";

function HeroButtons () {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <AnimatedSection delay={0.6}>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
        <button
          onMouseEnter={() => setHoveredButton("projects")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() =>
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
          }
          className="group px-8 py-3 border-2 border-graphite-accent bg-graphite-accent text-black font-semibold rounded-lg
          hover:bg-graphite-background/35 hover:text-graphite-accent transition-all duration-300 shadow-lg hover:shadow-xl
          flex items-center gap-2 hover:scale-105"
        >
          View My Projects
          <AnimatedArrow isHovered={hoveredButton === "projects"} />
        </button>

        <button
          onMouseEnter={() => setHoveredButton("about")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() =>
            document.getElementById("about").scrollIntoView({ behavior: "smooth" })
          }
          className="group px-8 py-3 border-2 border-graphite-accent text-graphite-accent font-semibold rounded-lg
          hover:bg-graphite-accent hover:text-black transition-all duration-300
          flex items-center gap-2 hover:scale-105"
        >
          Learn More About Me
          <AnimatedArrow isHovered={hoveredButton === "about"} />
        </button>
      </div>
    </AnimatedSection>
  );
}

export default HeroButtons;
