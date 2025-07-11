import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";

function AnimatedArrow({ isHovered, hasUnderline = false }) {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    if (isHovered) {
      setAnimation("rotate");
    } else {
      setAnimation("");
    }
  }, [isHovered]);

  const handleAnimationEnd = () => {
    if (animation === "rotate") {
      setAnimation("bounce");
    }
  };

  return (
    <div className={`relative ${isHovered ? "inline-block" : "hidden"}`}>
      <FaArrowRight
        className={`transition-all duration-300
          ${animation === "rotate" ? "animate-rotateOnce" : ""}
          ${animation === "bounce" ? "animate-bounceY" : ""}
        `}
        onAnimationEnd={handleAnimationEnd}
        style={{ transformOrigin: "center" }}
      />
      {hasUnderline && (
        <div className="absolute -bottom-2 left-1/2 w-6 h-0.5 bg-graphite-background transform -translate-x-1/2"></div>
      )}
    </div>
  );
}

export default AnimatedArrow;
