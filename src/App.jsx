import './App.css';
import { useState, useRef, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import PillNavbar from './components/PillNavbar';
import ColorBends from './components/ColorBends';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  // URL hash'inden veya localStorage'dan sayfa durumunu al
  const getInitialPage = () => {
    const hash = window.location.hash.slice(1); // # işaretini kaldır
    if (hash && ['home', 'about', 'projects', 'contact'].includes(hash)) {
      return hash;
    }
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage && ['home', 'about', 'projects', 'contact'].includes(savedPage)) {
      return savedPage;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  // Sayfa değiştiğinde URL hash'ini ve localStorage'ı güncelle
  useEffect(() => {
    window.location.hash = currentPage;
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  // Hash değişikliklerini dinle (geri/ileri butonları için)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && ['home', 'about', 'projects', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={setCurrentPage} />;
      case 'about':
        return <About onPageChange={setCurrentPage} />;
      case 'projects':
        return <Projects onPageChange={setCurrentPage} />;
      case 'contact':
        return <Contact onPageChange={setCurrentPage} />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="relative w-full h-screen overflow-y-auto overflow-x-hidden" style={{ background: '#0b0b0b' }}>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ColorBends
            rotation={-160}
            speed={0.2}
            colors={[
              '#040404',
              '#0b0b0b',
              '#14111a', // muted purple
              '#10141c', // cold blue
              '#1a1410', // muted amber
              '#150f12', // dark wine red
              '#0c0c0c',
            ]}
            transparent={true}
            autoRotate={0}
            scale={0.7}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            parallax={1}
            noise={0.1}
          />
        </div>
        <PillNavbar currentPage={currentPage} onPageChange={setCurrentPage} />
        {renderPage()}
      </div>
    </LanguageProvider>
  );
}

export default App;