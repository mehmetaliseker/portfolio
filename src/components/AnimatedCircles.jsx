import { useEffect, useRef, useState } from 'react';

const AnimatedCircles = ({ isHovered: externalHover }) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);
  const imageSizeRef = useRef({ width: 400, height: 600 });

  useEffect(() => {
    // Load image to calculate size
    const img = new Image();
    img.src = '/mehmet_ali_nobg.png';
    img.onload = () => {
      imageRef.current = img;
      // Calculate display size (40vw max width, 60vh max height)
      const maxWidth = window.innerWidth * 0.4;
      const maxHeight = window.innerHeight * 0.6;
      const aspectRatio = img.width / img.height;
      
      let displayWidth = maxWidth;
      let displayHeight = maxWidth / aspectRatio;
      
      if (displayHeight > maxHeight) {
        displayHeight = maxHeight;
        displayWidth = maxHeight * aspectRatio;
      }
      
      imageSizeRef.current = { width: displayWidth, height: displayHeight };
    };
  }, []);
  
  useEffect(() => {
    setIsHovered(externalHover || false);
  }, [externalHover]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const calculateImageSize = () => {
      if (imageRef.current) {
        const maxWidth = window.innerWidth * 0.4;
        const maxHeight = window.innerHeight * 0.6;
        const aspectRatio = imageRef.current.width / imageRef.current.height;
        
        let displayWidth = maxWidth;
        let displayHeight = maxWidth / aspectRatio;
        
        if (displayHeight > maxHeight) {
          displayHeight = maxHeight;
          displayWidth = maxHeight * aspectRatio;
        }
        
        imageSizeRef.current = { width: displayWidth, height: displayHeight };
      }
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      calculateImageSize();
    };
    
    // Initial calculation
    calculateImageSize();

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawCircles = (time) => {
      timeRef.current = time;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Clear canvas
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Calculate image dimensions (assuming image is centered)
      const imageWidth = imageSizeRef.current.width;
      const imageHeight = imageSizeRef.current.height;
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Calculate circle positions to touch image corners
      // Image corners relative to center
      const imageTopLeftX = centerX - imageWidth / 2;
      const imageTopLeftY = centerY - imageHeight / 2;
      const imageTopRightX = centerX + imageWidth / 2;
      const imageTopRightY = centerY - imageHeight / 2;
      const imageBottomLeftX = centerX - imageWidth / 2;
      const imageBottomLeftY = centerY + imageHeight / 2;
      const imageBottomRightX = centerX + imageWidth / 2;
      const imageBottomRightY = centerY + imageHeight / 2;

      // Pulse animation
      const pulse = 0.8 + 0.2 * Math.sin(time * 0.001);
      const hoverMultiplier = isHovered ? 1.5 : 1.0;

      // Left bottom circle - touches bottom-left corner of image
      const leftBottomX = 0;
      const leftBottomY = height;
      const leftBottomRadius = Math.sqrt(
        Math.pow(imageBottomLeftX - leftBottomX, 2) + 
        Math.pow(imageBottomLeftY - leftBottomY, 2)
      ) + 20; // Small padding to ensure touch

      // Right top circle - touches top-right corner of image
      const rightTopX = width;
      const rightTopY = 0;
      const rightTopRadius = Math.sqrt(
        Math.pow(imageTopRightX - rightTopX, 2) + 
        Math.pow(imageTopRightY - rightTopY, 2)
      ) + 20; // Small padding to ensure touch

      // Draw circle with smooth border and corner glow
      const drawCircleWithBorder = (x, y, radius, glowCornerX, glowCornerY, pulseValue) => {
        // Draw smooth border circle (stroke only, no fill)
        // Multiple stroke layers for smooth, soft appearance
        ctx.save();
        
        // Outer soft glow
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowBlur = 30;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.08)';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Main border
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.15)';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Inner highlight
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(x, y, radius - 1, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.restore();

        // Draw corner glow at specified corner
        // Multiple glow layers for smooth, layered effect
        const glowLayers = [
          { size: 80, opacity: 0.4 * pulseValue * hoverMultiplier },
          { size: 60, opacity: 0.6 * pulseValue * hoverMultiplier },
          { size: 40, opacity: 0.8 * pulseValue * hoverMultiplier },
          { size: 25, opacity: 1.0 * pulseValue * hoverMultiplier },
        ];

        glowLayers.forEach((layer, index) => {
          const gradient = ctx.createRadialGradient(
            glowCornerX, glowCornerY, 0,
            glowCornerX, glowCornerY, layer.size
          );
          
          gradient.addColorStop(0, `rgba(255, 255, 255, ${layer.opacity})`);
          gradient.addColorStop(0.3, `rgba(255, 255, 255, ${layer.opacity * 0.7})`);
          gradient.addColorStop(0.6, `rgba(255, 255, 255, ${layer.opacity * 0.4})`);
          gradient.addColorStop(0.8, `rgba(255, 255, 255, ${layer.opacity * 0.15})`);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(glowCornerX, glowCornerY, layer.size, 0, Math.PI * 2);
          ctx.fill();
        });

        // Animated small glows around the corner (creates movement)
        const cornerGlowCount = 3;
        for (let i = 0; i < cornerGlowCount; i++) {
          const angle = (time * 0.0005 + i * (Math.PI * 2 / cornerGlowCount)) % (Math.PI * 2);
          const distance = 20 + 10 * Math.sin(time * 0.0015 + i * 0.8);
          const glowX = glowCornerX + Math.cos(angle) * distance;
          const glowY = glowCornerY + Math.sin(angle) * distance;
          const glowSize = 25 + 15 * Math.sin(time * 0.002 + i * 0.6);
          
          const cornerGradient = ctx.createRadialGradient(
            glowX, glowY, 0,
            glowX, glowY, glowSize
          );
          const baseOpacity = 0.6 + 0.4 * Math.sin(time * 0.0012 + i);
          cornerGradient.addColorStop(0, `rgba(255, 255, 255, ${baseOpacity * pulseValue * hoverMultiplier})`);
          cornerGradient.addColorStop(0.5, `rgba(255, 255, 255, ${baseOpacity * 0.5 * pulseValue * hoverMultiplier})`);
          cornerGradient.addColorStop(0.8, `rgba(255, 255, 255, ${baseOpacity * 0.2 * pulseValue * hoverMultiplier})`);
          cornerGradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = cornerGradient;
          ctx.beginPath();
          ctx.arc(glowX, glowY, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }
      };

      // Calculate glow corner positions
      // Left bottom circle: glow at top-right corner (relative to circle)
      // The circle touches image's bottom-left, so we need the circle's top-right area
      const leftCircleTopRightX = leftBottomX + leftBottomRadius * 0.7;
      const leftCircleTopRightY = leftBottomY - leftBottomRadius * 0.7;
      
      // Right top circle: glow at bottom-left corner (relative to circle)
      // The circle touches image's top-right, so we need the circle's bottom-left area
      const rightCircleBottomLeftX = rightTopX - rightTopRadius * 0.7;
      const rightCircleBottomLeftY = rightTopY + rightTopRadius * 0.7;

      // Left bottom circle (touches bottom-left corner of image, glow at circle's top-right)
      drawCircleWithBorder(
        leftBottomX,
        leftBottomY,
        leftBottomRadius,
        leftCircleTopRightX,
        leftCircleTopRightY,
        pulse
      );

      // Right top circle (touches top-right corner of image, glow at circle's bottom-left)
      drawCircleWithBorder(
        rightTopX,
        rightTopY,
        rightTopRadius,
        rightCircleBottomLeftX,
        rightCircleBottomLeftY,
        pulse
      );
    };

    const animate = (time) => {
      drawCircles(time);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered]);


  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#000000' }}
    />
  );
};

export default AnimatedCircles;
