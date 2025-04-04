"use client";

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'scaleIn';
  delay?: number;
}

export default function ScrollReveal({ 
  children, 
  animation = 'fadeIn',
  delay = 0 
}: ScrollRevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && elementRef.current) {
      elementRef.current.style.animationDelay = `${delay}s`;
      elementRef.current.classList.add(
        animation === 'fadeIn' ? 'animate-on-scroll' :
        animation === 'slideUp' ? 'animate-slide-up' :
        'animate-scale'
      );
    }
  }, [inView, animation, delay]);

  return (
    <div ref={ref}>
      <div ref={elementRef} style={{ opacity: 0 }}>
        {children}
      </div>
    </div>
  );
}