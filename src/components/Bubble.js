import React, { useEffect, useRef } from "react";

const Bubble = ({ color, speed, size, opacity, shape }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    const animateBubble = (x) => {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.left = `${x}px`;
      bubble.style.backgroundColor = color;
      bubble.style.animationDuration = `${speed}s`; // Set the animation duration
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.opacity = opacity;

      // Set border radius based on shape
      if (shape === "circle") {
        bubble.style.borderRadius = "50%";
      } else if (shape === "square") {
        bubble.style.borderRadius = "0%";
      } else if (shape === "diamond") {
        // bubble.style.borderRadius = "50%";
        bubble.style.clipPath = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
      } else if (shape === "triangle") {
        bubble.style.clipPath = "polygon(50% 0%, 100% 100%, 0% 100%)";
      }

      wrapper.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, speed * 1000); // Adjusted time to match the animation duration
    };

    const handleMouseMove = (e) => {
      animateBubble(e.clientX);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [color, speed, size, opacity, shape]);

  return <div className="bubble-wrapper" ref={wrapperRef}></div>;
};

export default Bubble;
