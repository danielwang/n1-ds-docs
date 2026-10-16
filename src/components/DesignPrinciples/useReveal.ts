import {useEffect, useRef, useState} from 'react';

type RevealState = 'idle' | 'armed' | 'visible';

/**
 * Reveals an element the first time it scrolls into view, then stops
 * observing. Content is visible by default (the `idle` state renders
 * identically to `visible` in CSS) so it never depends on JavaScript to
 * be readable — only elements confirmed to be off-screen at mount get
 * armed into a hidden starting state, which avoids a flash of hidden
 * content for anything already in the viewport on load. Respects
 * `prefers-reduced-motion` by skipping the hidden state entirely.
 */
export default function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [state, setState] = useState<RevealState>('idle');

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === 'undefined') {
      return;
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.92;

    if (reduceMotion || alreadyInView) {
      setState('visible');
      return;
    }

    setState('armed');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('visible');
          observer.disconnect();
        }
      },
      {threshold: 0.2, rootMargin: '0px 0px -10% 0px'},
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return {ref, state};
}
