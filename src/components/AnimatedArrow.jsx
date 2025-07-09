import { FaArrowRight } from "react-icons/fa";
import React, { useState, useRef } from "react";

function AnimatedArrow () {
  const [rotated, setRotated] = useState(false);
  const arrowRef = useRef(null);

  const handleAnimationEnd = () => {
    setRotated(true);
  };

  return (
    <FaArrowRight
      ref={arrowRef}
      className={`hidden group-hover:inline-block
        ${rotated ? 'animate-bounceY' : 'animate-rotateOnce'}
        transition-opacity duration-300
      `}
      onAnimationEnd={handleAnimationEnd}
      style={{ transformOrigin: 'center' }}
    />
  );
};

export default AnimatedArrow;