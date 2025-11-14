"use client";

import React, { useRef, useEffect, useState } from "react";
import "./SectionLayoutBG.css";

const SectionLayoutBG = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`researchSection_background jsh_ani fadeIn ${
        isVisible ? "active" : ""
      }`}
    >
      <div className="container">
        <div className="research_item_container relative">{children}</div>
      </div>
    </section>
  );
};

export default SectionLayoutBG;
