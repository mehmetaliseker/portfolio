import { memo } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const SocialIcons = memo(() => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/mehmetaliseker/",
      label: "GitHub"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mehmetaliseker/",
      label: "LinkedIn"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/maseker35_/",
      label: "Instagram"
    },
    {
      icon: LuMail,
      href: "mailto:maliseker2005@gmail.com",
      label: "Email"
    }
  ];

  return (
    <div className="flex justify-center items-center space-x-6 sm:space-x-8 md:space-x-10 z-10">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl md:text-4xl transition-all duration-300 relative group"
            style={{ 
              color: '#E8E8E8',
              filter: 'none'
            }}
            aria-label={social.label}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translate3d(0, 0, 0) scale(1.1)';
              e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.5))';
              e.currentTarget.style.willChange = 'transform';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#E8E8E8';
              e.currentTarget.style.transform = 'translate3d(0, 0, 0) scale(1)';
              e.currentTarget.style.filter = 'none';
              e.currentTarget.style.willChange = 'auto';
            }}
          >
            <Icon />
            <span 
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{ background: '#E8E8E8' }}
            />
          </a>
        );
      })}
    </div>
  );
});

SocialIcons.displayName = 'SocialIcons';
export default SocialIcons;
