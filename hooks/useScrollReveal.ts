'use client';

import { useState, useEffect, useRef } from 'react';

export const useScrollReveal = <T extends HTMLElement = HTMLElement>(threshold = 0.15) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: threshold * 0.5, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  
  return { ref, isVisible };
};
