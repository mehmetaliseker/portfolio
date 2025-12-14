import { useRef, useState, useEffect } from 'react';

const SpotlightCard = ({ children, className = '', style = {} }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hasHoverSupport, setHasHoverSupport] = useState(false);

  // Hover desteğini kontrol et (mobil cihazlarda genellikle yok)
  useEffect(() => {
    const checkHoverSupport = () => {
      // Media query ile hover desteğini kontrol et
      const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
      setHasHoverSupport(mediaQuery.matches);
      
      // Ekran genişliğine göre de kontrol et (md breakpoint: 768px)
      const isDesktop = window.innerWidth >= 768;
      setHasHoverSupport(mediaQuery.matches && isDesktop);
    };

    checkHoverSupport();
    
    // Ekran boyutu değiştiğinde tekrar kontrol et
    const handleResize = () => {
      checkHoverSupport();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !hasHoverSupport) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    if (!hasHoverSupport) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!hasHoverSupport) return;
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${className}`}
      style={{
        background: 'rgba(0, 0, 0, 0.4)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        ...style
      }}
      onMouseMove={hasHoverSupport ? handleMouseMove : undefined}
      onMouseEnter={hasHoverSupport ? handleMouseEnter : undefined}
      onMouseLeave={hasHoverSupport ? handleMouseLeave : undefined}
    >
      {/* Spotlight Effect - Sadece hover desteği varsa göster */}
      {hasHoverSupport && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 40%)`,
            opacity: isHovered ? 1 : 0
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
