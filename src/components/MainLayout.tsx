"use client";

import React, { useRef, useEffect, useState } from "react";
import "./mainLayout.css";

const MainLayout = ({
  leftChildren,
  rightChildren,
  overflow = "hidden",
  isNewsBoard = false,
  isMain = false,
}: {
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
  overflow?: "hidden" | "visible";
  isNewsBoard?: boolean;
  isMain?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 화면 아래쪽으로 스크롤 내릴 때만 활성화
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
      className={`jsh_ani fadeIn ${isVisible ? "active" : ""}`}
    >
      <div className="container">
        <div
          className={`item_container ${isMain ? "main_layout" : ""}`}
          style={{
            overflow: overflow,
            marginTop: isNewsBoard ? "52px" : "80px",
          }}
        >
          <div className="left">{leftChildren}</div>
          <div className="right">{rightChildren}</div>
        </div>
      </div>
    </section>
  );
};

export default MainLayout;
