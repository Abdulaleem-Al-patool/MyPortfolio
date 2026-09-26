import { useEffect } from 'react';

/**
 * Lightweight scroll reveal hook using IntersectionObserver.
 * Observes all elements with .reveal-on-scroll class and adds .is-revealed
 * when they enter the viewport. Fully respects prefers-reduced-motion.
 */
export function useScrollReveal() {
  useEffect(() => {
    // If browser doesn't support IntersectionObserver or user prefers reduced motion, reveal everything
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.reveal-on-scroll');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
