import './App.css';
import { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import PillNavbar from './components/PillNavbar';
import ColorBendsBackground from './components/Background/ColorBendsBackground';
import ScrollToTop from './components/ScrollToTop';
import { routeConfig, ROUTES } from './config/routes';
import { navigationService } from './services/NavigationService';
import { useNavigation } from './hooks/useNavigation';

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <div className="inline-block w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4" />
      <p className="text-white/60">Loading...</p>
    </div>
  </div>
);

// Navigation Provider Component (IOC Pattern)
const NavigationProvider = ({ children }) => {
  const navigation = useNavigation();
  
  useEffect(() => {
    // IOC Container - Dependency Injection
    navigationService.setNavigator(navigation);
  }, [navigation]);

  return <>{children}</>;
};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <NavigationProvider>
          <div 
            id="scroll-container"
            className="relative w-full h-screen overflow-y-auto overflow-x-hidden" 
            style={{ background: '#0b0b0b' }}
          >
            <ScrollToTop />
            <ColorBendsBackground />
            <PillNavbar />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {routeConfig.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                  />
                ))}
                <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
              </Routes>
            </Suspense>
          </div>
        </NavigationProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;