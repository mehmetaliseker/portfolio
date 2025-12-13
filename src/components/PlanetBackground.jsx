import { useEffect, useRef } from 'react';

const PlanetBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawPlanets = (time) => {
      timeRef.current = time;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Clear canvas
      ctx.fillStyle = '#0B0B0B';
      ctx.fillRect(0, 0, width, height);

      // Subtle pulse animation for glows (very slow and calm)
      const pulse = 0.7 + 0.3 * Math.sin(time * 0.0005);

      // Create premium planet gradient with smooth, cinematic depth
      const createPlanetGradient = (x, y, radius) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        // More subtle, premium dark tones
        gradient.addColorStop(0, 'rgba(25, 25, 25, 0.25)');
        gradient.addColorStop(0.15, 'rgba(18, 18, 18, 0.5)');
        gradient.addColorStop(0.3, 'rgba(15, 15, 15, 0.75)');
        gradient.addColorStop(0.5, 'rgba(13, 13, 13, 0.9)');
        gradient.addColorStop(0.75, 'rgba(12, 12, 12, 0.97)');
        gradient.addColorStop(1, '#0B0B0B');
        return gradient;
      };

      // Left bottom planet - with soft edges
      const leftPlanetX = width * 0.08;
      const leftPlanetY = height * 0.88;
      const leftPlanetRadius = Math.max(width, height) * 0.65;
      
      // Save context for shadow blur
      ctx.save();
      ctx.shadowBlur = 100;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
      
      ctx.fillStyle = createPlanetGradient(leftPlanetX, leftPlanetY, leftPlanetRadius);
      ctx.beginPath();
      ctx.arc(leftPlanetX, leftPlanetY, leftPlanetRadius, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();

      // Premium glow effect for left planet (top right corner) - soft off-white
      const leftGlowX = leftPlanetX + leftPlanetRadius * 0.38;
      const leftGlowY = leftPlanetY - leftPlanetRadius * 0.38;
      const leftGlowRadius = leftPlanetRadius * 0.22;
      
      // Soft outer bloom (very subtle)
      const leftGlowGradient1 = ctx.createRadialGradient(
        leftGlowX, leftGlowY, 0, 
        leftGlowX, leftGlowY, leftGlowRadius * 2.5
      );
      leftGlowGradient1.addColorStop(0, `rgba(242, 242, 242, ${0.15 * pulse})`);
      leftGlowGradient1.addColorStop(0.2, `rgba(242, 242, 242, ${0.08 * pulse})`);
      leftGlowGradient1.addColorStop(0.4, `rgba(242, 242, 242, ${0.04 * pulse})`);
      leftGlowGradient1.addColorStop(0.7, `rgba(242, 242, 242, ${0.01 * pulse})`);
      leftGlowGradient1.addColorStop(1, 'transparent');
      
      ctx.fillStyle = leftGlowGradient1;
      ctx.beginPath();
      ctx.arc(leftGlowX, leftGlowY, leftGlowRadius * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Medium glow layer
      const leftGlowGradient2 = ctx.createRadialGradient(
        leftGlowX, leftGlowY, 0, 
        leftGlowX, leftGlowY, leftGlowRadius * 1.5
      );
      leftGlowGradient2.addColorStop(0, `rgba(242, 242, 242, ${0.35 * pulse})`);
      leftGlowGradient2.addColorStop(0.3, `rgba(242, 242, 242, ${0.18 * pulse})`);
      leftGlowGradient2.addColorStop(0.6, `rgba(242, 242, 242, ${0.08 * pulse})`);
      leftGlowGradient2.addColorStop(1, 'transparent');
      
      ctx.fillStyle = leftGlowGradient2;
      ctx.beginPath();
      ctx.arc(leftGlowX, leftGlowY, leftGlowRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Inner bright core (subtle)
      const leftGlowGradient3 = ctx.createRadialGradient(
        leftGlowX, leftGlowY, 0, 
        leftGlowX, leftGlowY, leftGlowRadius
      );
      leftGlowGradient3.addColorStop(0, `rgba(242, 242, 242, ${0.5 * pulse})`);
      leftGlowGradient3.addColorStop(0.4, `rgba(242, 242, 242, ${0.25 * pulse})`);
      leftGlowGradient3.addColorStop(0.8, `rgba(242, 242, 242, ${0.1 * pulse})`);
      leftGlowGradient3.addColorStop(1, 'transparent');
      
      ctx.fillStyle = leftGlowGradient3;
      ctx.beginPath();
      ctx.arc(leftGlowX, leftGlowY, leftGlowRadius, 0, Math.PI * 2);
      ctx.fill();

      // Right top planet - with soft edges
      const rightPlanetX = width * 0.92;
      const rightPlanetY = height * 0.12;
      const rightPlanetRadius = Math.max(width, height) * 0.65;
      
      // Save context for shadow blur
      ctx.save();
      ctx.shadowBlur = 100;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
      
      ctx.fillStyle = createPlanetGradient(rightPlanetX, rightPlanetY, rightPlanetRadius);
      ctx.beginPath();
      ctx.arc(rightPlanetX, rightPlanetY, rightPlanetRadius, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();

      // Premium glow effect for right planet (bottom left corner) - soft off-white
      const rightGlowX = rightPlanetX - rightPlanetRadius * 0.38;
      const rightGlowY = rightPlanetY + rightPlanetRadius * 0.38;
      const rightGlowRadius = rightPlanetRadius * 0.22;
      
      // Soft outer bloom (very subtle)
      const rightGlowGradient1 = ctx.createRadialGradient(
        rightGlowX, rightGlowY, 0, 
        rightGlowX, rightGlowY, rightGlowRadius * 2.5
      );
      rightGlowGradient1.addColorStop(0, `rgba(242, 242, 242, ${0.15 * pulse})`);
      rightGlowGradient1.addColorStop(0.2, `rgba(242, 242, 242, ${0.08 * pulse})`);
      rightGlowGradient1.addColorStop(0.4, `rgba(242, 242, 242, ${0.04 * pulse})`);
      rightGlowGradient1.addColorStop(0.7, `rgba(242, 242, 242, ${0.01 * pulse})`);
      rightGlowGradient1.addColorStop(1, 'transparent');
      
      ctx.fillStyle = rightGlowGradient1;
      ctx.beginPath();
      ctx.arc(rightGlowX, rightGlowY, rightGlowRadius * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Medium glow layer
      const rightGlowGradient2 = ctx.createRadialGradient(
        rightGlowX, rightGlowY, 0, 
        rightGlowX, rightGlowY, rightGlowRadius * 1.5
      );
      rightGlowGradient2.addColorStop(0, `rgba(242, 242, 242, ${0.35 * pulse})`);
      rightGlowGradient2.addColorStop(0.3, `rgba(242, 242, 242, ${0.18 * pulse})`);
      rightGlowGradient2.addColorStop(0.6, `rgba(242, 242, 242, ${0.08 * pulse})`);
      rightGlowGradient2.addColorStop(1, 'transparent');
      
      ctx.fillStyle = rightGlowGradient2;
      ctx.beginPath();
      ctx.arc(rightGlowX, rightGlowY, rightGlowRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Inner bright core (subtle)
      const rightGlowGradient3 = ctx.createRadialGradient(
        rightGlowX, rightGlowY, 0, 
        rightGlowX, rightGlowY, rightGlowRadius
      );
      rightGlowGradient3.addColorStop(0, `rgba(242, 242, 242, ${0.5 * pulse})`);
      rightGlowGradient3.addColorStop(0.4, `rgba(242, 242, 242, ${0.25 * pulse})`);
      rightGlowGradient3.addColorStop(0.8, `rgba(242, 242, 242, ${0.1 * pulse})`);
      rightGlowGradient3.addColorStop(1, 'transparent');
      
      ctx.fillStyle = rightGlowGradient3;
      ctx.beginPath();
      ctx.arc(rightGlowX, rightGlowY, rightGlowRadius, 0, Math.PI * 2);
      ctx.fill();

      // Subtle connection glow in the center where planets meet (very elegant)
      const centerX = width / 2;
      const centerY = height / 2;
      const connectionRadius = Math.min(width, height) * 0.12;
      
      const connectionGradient = ctx.createRadialGradient(
        centerX, centerY, 0, 
        centerX, centerY, connectionRadius * 2.5
      );
      connectionGradient.addColorStop(0, `rgba(242, 242, 242, ${0.12 * pulse})`);
      connectionGradient.addColorStop(0.3, `rgba(242, 242, 242, ${0.06 * pulse})`);
      connectionGradient.addColorStop(0.6, `rgba(242, 242, 242, ${0.02 * pulse})`);
      connectionGradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = connectionGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, connectionRadius * 2.5, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = (time) => {
      drawPlanets(time);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#0B0B0B' }}
    />
  );
};

export default PlanetBackground;
