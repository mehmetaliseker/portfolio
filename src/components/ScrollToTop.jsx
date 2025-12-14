import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Sayfa değiştiğinde scroll'u en üste alan component
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Route değişiminden sonra scroll yapmak için kısa bir gecikme
    const timer = setTimeout(() => {
      // Scroll container'ı bul (App.jsx'teki scroll-container id'li div)
      const scrollContainer = document.getElementById('scroll-container');
      
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      } else {
        // Fallback: window'a scroll yap
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
