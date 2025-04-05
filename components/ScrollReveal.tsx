"use client";

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'scaleIn';
  delay?: number;
  threshold?: number;
}

const shouldReduceMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

export default function ScrollReveal({ 
  children, 
  animation = 'fadeIn',
  delay = 0,
  threshold = 0.1
}: ScrollRevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: '50px',
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    if (shouldReduceMotion) {
      elementRef.current.style.opacity = '1';
      return;
    }

    if (inView) {
      requestAnimationFrame(() => {
        if (!elementRef.current) return;
        
        elementRef.current.style.animationDelay = `${delay}s`;
        elementRef.current.style.willChange = 'transform, opacity';
        elementRef.current.classList.add(
          animation === 'fadeIn' ? 'animate-on-scroll' :
          animation === 'slideUp' ? 'animate-slide-up' :
          'animate-scale'
        );
      });
    }

    return () => {
      if (elementRef.current) {
        elementRef.current.style.willChange = 'auto';
      }
    };
  }, [inView, animation, delay]);

  // If reduced motion is preferred, render without animation wrapper
  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <div ref={ref}>
      <div 
        ref={elementRef} 
        style={{ 
          opacity: 0,
          transform: 'translateZ(0)',
          perspective: '1000px',
          backfaceVisibility: 'hidden'
        }}
      >
        {children}
      </div>
    </div>
  );
}