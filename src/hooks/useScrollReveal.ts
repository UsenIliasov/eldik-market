import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>(
  options?: IntersectionObserverInit & { staggerIndex?: number }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const staggerDelay = options?.staggerIndex !== undefined
      ? options.staggerIndex * 0.08
      : 0;

    if (staggerDelay > 0) {
      (el as HTMLElement).style.transitionDelay = `${staggerDelay}s`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        ...options,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [options?.staggerIndex]);

  return ref;
}
