import React, { useState, useRef } from 'react';
import type { MouseEvent } from 'react';

interface ThreeDTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt degrees
  perspective?: number; // Perspective distance in px
  scale?: number; // Scale on hover
  style?: React.CSSProperties;
}

export default function ThreeDTilt({
  children,
  className = '',
  maxTilt = 10,
  perspective = 1000,
  scale = 1.02,
  style: customStyle,
}: ThreeDTiltProps) {
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    transformStyle: 'preserve-3d',
  });

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center (from -0.5 to 0.5)
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;

    // Calculate rotation angles
    const rotateX = -y * maxTilt;
    const rotateY = x * maxTilt;

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)',
      transformStyle: 'preserve-3d',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
      transformStyle: 'preserve-3d',
    });
  };

  return (
    <div
      ref={cardRef}
      className={`will-change-transform ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...customStyle,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
