import AnimatedSection from "../AnimatedSection";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

function SocialIcons () {
  return (
  <AnimatedSection delay={0.8}>
    <div className="flex justify-center space-x-6 pt-8">
      <a
        href="https://github.com/mehmetaliseker/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-graphite-text text-3xl z-10 hover:text-graphite-accent hover:cursor-pointer hover:scale-110 transition duration-400"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/mehmetaliseker/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-graphite-text text-3xl z-10 hover:text-graphite-accent hover:cursor-pointer hover:scale-110 transition duration-400"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/maseker35_/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-graphite-text text-3xl z-10 hover:text-graphite-accent hover:cursor-pointer hover:scale-110 transition duration-400"
      >
        <FaInstagram />
      </a>
      <a
        href="mailto:maliseker2005@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-graphite-text text-3xl z-10 hover:text-graphite-accent hover:cursor-pointer hover:scale-110 transition duration-400"
      >
        <LuMail />
      </a>
    </div>
  </AnimatedSection>
);
}
export default SocialIcons;