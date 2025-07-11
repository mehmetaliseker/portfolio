import { BsFillTelephoneFill } from "react-icons/bs";
import React from "react";

function AnimatedPhone({ isHovered }) {
  return (
    <span
      className={`transition-all duration-300 ${
        isHovered ? "inline-block animate-phoneRotate" : "hidden"
      }`}
      style={{ transformOrigin: "center" }}
    >
      <BsFillTelephoneFill />
    </span>
  );
}

export default AnimatedPhone;