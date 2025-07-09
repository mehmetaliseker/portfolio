import { useState, useEffect } from "react";

function Navbar  () {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    fetch("/data/navItems.json")
      .then((res) => res.json())
      .then((data) => setNavItems(data))
      .catch((err) => console.error("Failed to fetch nav items:", err));
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-graphite-secondary/70 backdrop-blur-md shadow-lg z-50 border-b border-graphite-background/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-graphite-text font-serif">
              Mehmet Ali ŞEKER
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.section)}
                  className="relative group text-graphite-text px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-[1.03]"
                >
                  {item.label}
                  <span
                    className="
                    absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0
                    transform transition-transform duration-500 ease-in-out
                    group-hover:scale-x-100
                    bg-gradient-to-r from-graphite-accent via-white to-graphite-accentAlt
                    bg-[length:200%] bg-[position:0%_50%] bg-clip-border
                    group-hover:animate-gradient-shift rounded-full
                  "
                  ></span>
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-graphite-text hover:text-graphite-accent focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
