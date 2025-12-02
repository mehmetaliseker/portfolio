import { useLanguage } from "../context/LanguageContext";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedArrow from "../components/AnimatedArrow";
import { useState } from "react";

const Home = () => {
  const { t } = useLanguage();
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-graphite-background pt-16 overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${Array.from({length: 20}, (_, i) => 
            `rgba(37, 99, 235, 0.1) ${i * 5}%, transparent ${i * 5 + 2.5}%`
          ).join(', ')})`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Side - Content */}
          <div className="space-y-8 z-10">
            <AnimatedSection delay={0}>
              <div className="inline-block mb-4">
                <span className="text-graphite-accent text-sm font-mono tracking-wider uppercase">
                  {t('home.title')}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="block text-graphite-text">Mehmet Ali</span>
                <span className="block text-graphite-accent mt-2">Şeker</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl text-graphite-textMuted leading-relaxed max-w-lg">
                {t('home.subtitle')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onMouseEnter={() => setHoveredButton("projects")}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() =>
                    document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
                  }
                  className="group relative px-8 py-4 bg-graphite-accent text-white font-semibold rounded-none
                  hover:bg-transparent hover:text-graphite-accent transition-all duration-300
                  border-2 border-graphite-accent flex items-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t('home.viewProjects')}
                    <AnimatedArrow isHovered={hoveredButton === "projects"} />
                  </span>
                  <span className="absolute inset-0 bg-graphite-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </button>

                <button
                  onMouseEnter={() => setHoveredButton("about")}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() =>
                    document.getElementById("about").scrollIntoView({ behavior: "smooth" })
                  }
                  className="group px-8 py-4 border-2 border-graphite-accent text-graphite-accent font-semibold rounded-none
                  hover:bg-graphite-accent hover:text-white transition-all duration-300
                  flex items-center gap-2"
                >
                  {t('home.learnMore')}
                  <AnimatedArrow isHovered={hoveredButton === "about"} />
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex items-center gap-6 pt-4">
                <div className="h-px bg-graphite-accent/30 flex-1"></div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/mehmetaliseker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-graphite-textMuted hover:text-graphite-accent transition-colors duration-300 text-2xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mehmetaliseker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-graphite-textMuted hover:text-graphite-accent transition-colors duration-300 text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/maseker35_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-graphite-textMuted hover:text-graphite-accent transition-colors duration-300 text-2xl"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="mailto:maliseker2005@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-graphite-textMuted hover:text-graphite-accent transition-colors duration-300 text-2xl"
                  >
                    <LuMail />
                  </a>
                </div>
                <div className="h-px bg-graphite-accent/30 flex-1"></div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Side - Visual Element */}
          <div className="hidden lg:block relative z-10">
            <AnimatedSection delay={0.5}>
              <div className="relative">
                {/* Geometric Shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 border-2 border-graphite-accent/20 transform rotate-45"></div>
                <div className="absolute top-20 right-20 w-80 h-80 border-2 border-graphite-accent/30 transform -rotate-12"></div>
                <div className="absolute top-40 right-40 w-64 h-64 bg-graphite-accent/10 transform rotate-45"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-4 h-4 bg-graphite-accent rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-32 w-6 h-6 bg-graphite-accentAlt rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-56 right-56 w-3 h-3 bg-graphite-accent rounded-full animate-pulse delay-700"></div>
                
                {/* Number Badge */}
                <div className="absolute bottom-0 left-0 bg-graphite-tertiary border-2 border-graphite-accent p-6">
                  <div className="text-4xl font-bold text-graphite-accent">01</div>
                  <div className="text-sm text-graphite-textMuted mt-2">Portfolio</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-graphite-textMuted font-mono">Scroll</span>
          <div className="w-px h-12 bg-graphite-accent/30 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;