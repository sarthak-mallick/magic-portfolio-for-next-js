"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./about.module.scss";

interface StaggerRevealProps {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}

const StaggerReveal: React.FC<StaggerRevealProps> = ({ children, delayMs = 0, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.staggerBlock}${isVisible ? ` ${styles.staggerVisible}` : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
};

export default StaggerReveal;
