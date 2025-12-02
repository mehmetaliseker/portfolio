import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

function Navbar() {
  const [navItems, setNavItems] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    fetch("/data/navItems.json")
      .then((res) => res.json())
      .then((data) => {
        if (data[language]) {
          setNavItems(data[language]);
        } else {
          console.warn("Dil desteği bulunamadı:", language);
        }
      })
      .catch((err) => console.error("Nav items fetch hatası:", err));
  }, [language]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-graphite-background/80 backdrop-blur-lg z-50 border-b border-graphite-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-graphite-accent flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-graphite-text leading-tight">
                      Mehmet Ali<br />
                      <span className="text-graphite-accent">ŞEKER</span>
                    </h1>
                  </div>
                </div>
              </a>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.section)}
                  className="relative px-4 py-2 text-sm font-medium text-graphite-textMuted hover:text-graphite-text transition-colors duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-graphite-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="relative w-14 h-7 bg-graphite-tertiary border border-graphite-accent/30 transition-all duration-300 hover:border-graphite-accent group"
              >
                <motion.div
                  className="absolute top-0.5 left-0.5 w-6 h-6 bg-graphite-accent"
                  animate={{ x: language === "en" ? 0 : 24 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
                <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
                  <span className={`text-[10px] font-bold z-10 ${language === "en" ? "text-white" : "text-graphite-textMuted"}`}>
                    EN
                  </span>
                  <span className={`text-[10px] font-bold z-10 ${language === "tr" ? "text-white" : "text-graphite-textMuted"}`}>
                    TR
                  </span>
                </div>
              </button>

              <button
                className="md:hidden text-graphite-text hover:text-graphite-accent focus:outline-none transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-graphite-accent/10 py-4 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.section)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-graphite-text hover:text-graphite-accent hover:bg-graphite-tertiary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;