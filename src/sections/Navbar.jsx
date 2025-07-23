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
      <nav className="fixed top-0 left-0 right-0 bg-graphite-secondary/70 backdrop-blur-md shadow-lg z-50 border-b border-graphite-background/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="App.jsx">
                <h1 className="text-xl font-bold text-graphite-text font-serif">
                  Mehmet Ali ŞEKER
                </h1>
              </a>
            </div>

            <div className="hidden sm:block">
              <div className="ml-10 flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.section)}
                    className="relative group text-graphite-text px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.05]"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transform transition-transform duration-500 ease-in-out group-hover:scale-x-100 bg-gradient-to-r from-graphite-accent via-white to-graphite-accentAlt bg-[length:200%] bg-[position:0%_50%] bg-clip-border group-hover:animate-gradient-shift rounded-full"></span>
                  </button>
                ))}

                <button
                  onClick={toggleLanguage}
                  className="relative w-16 h-8 bg-graphite-background border border-graphite-accent/40 rounded-full shadow-inner transition-all duration-300 hover:border-graphite-accentAlt group"
                >
                  <div className="absolute inset-1 bg-graphite-secondary rounded-full"></div>

                  <motion.div
                    className="absolute top-[3.5px] w-6 h-6 rounded-full shadow-md"
                    style={{ backgroundColor: "#FFB347" }}
                    animate={{ x: language === "en" ? 4.5 : 34.5 }}
                  />

                  <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                    <span
                      className={`text-xs font-bold ${language === "en"
                        ? "text-gray-800 drop-shadow-[0_0_6px_rgba(108,99,255,0.8)]"
                        : "text-gray-500"
                        }`}
                    >
                      EN
                    </span>
                    <span
                      className={`text-xs font-bold ${language === "tr"
                        ? "text-gray-800 drop-shadow-[0_0_6px_rgba(255,213,128,0.8)]"
                        : "text-gray-500"
                        }`}
                    >
                      TR
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="sm:hidden flex justify-between items-center h-16">
              <div>
                <button
                  onClick={toggleLanguage}
                  className="relative w-16 h-8 bg-graphite-background border mr-10 border-graphite-accent/40 rounded-full shadow-inner transition-all duration-300 hover:border-graphite-accentAlt group"
                >
                  <div className="absolute inset-1 bg-graphite-secondary rounded-full"></div>

                  <motion.div
                    className="absolute top-[3.5px] w-6 h-6 rounded-full shadow-md"
                    style={{
                      backgroundColor: "#FFB347"
                    }}
                    animate={{ x: language === "en" ? 4.5 : 34.5 }}
                  />

                  <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                    <span
                      className={`text-xs font-bold ${language === "en"
                        ? "text-gray-800 drop-shadow-[0_0_6px_rgba(108,99,255,0.8)]"
                        : "text-gray-500"
                        }`}
                    >
                      EN
                    </span>
                    <span
                      className={`text-xs font-bold ${language === "tr"
                        ? "text-gray-800 drop-shadow-[0_0_6px_rgba(255,213,128,0.8)]"
                        : "text-gray-500"
                        }`}
                    >
                      TR
                    </span>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className="text-graphite-text hover:text-graphite-accent focus:outline-none"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>

          </div>

          {isMenuOpen && (
            <div className="sm:hidden block mt-2 px-4 pb-4 space-y-2 bg-graphite-secondary rounded-md shadow-lg">

              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.section)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-graphite-text hover:text-graphite-accent transition"
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