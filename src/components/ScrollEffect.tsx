import React, { useEffect, useRef } from "react";

const ScrollEffect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate opacity based on scroll position
      let opacity = Math.min(1, Math.max(0, 1 - rect.top / windowHeight));
      ref.current.style.opacity = `${opacity}`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div ref={ref} className="section">{children}</div>;
};

export default ScrollEffect;
