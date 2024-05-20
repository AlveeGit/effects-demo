import React, { useEffect, useRef } from "react";

const Ballon = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    const animateBallon = (x) => {
      const ballon = document.createElement("div");
      ballon.className = "ballon";
      ballon.style.left = `${x}px`;

      wrapper.appendChild(ballon);

      setTimeout(() => {
        ballon.remove();
      }, 5000);
    };

    const handleMouseMove = (e) => {
      animateBallon(e.clientX);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="ballon-wrapper" ref={wrapperRef}></div>;
};

export default Ballon;
