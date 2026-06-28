import React, { useState, useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string; // e.g. 'animate-fade-in-up', 'animate-fade-in-left', etc.
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  animationClass = 'animate-fade-in-up',
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const [hasRevealed, setHasRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Return early if IntersectionObserver is not supported
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setHasRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          observer.disconnect(); // Disconnect immediately on intersect for scroll performance
        }
      },
      {
        threshold,
        // Trigger slightly before element enters viewport to feel seamless
        rootMargin: '0px 0px -5% 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${hasRevealed ? animationClass : 'opacity-0'}`}
      style={{
        animationDelay: `${delay}ms`,
        willChange: 'transform, opacity', // Performance hint to browser
      }}
    >
      {children}
    </div>
  );
}
