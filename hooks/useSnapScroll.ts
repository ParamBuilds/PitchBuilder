
import { useLenis } from '@studio-freight/react-lenis';
import { useCallback } from 'react';

export function useSnapScroll() {
  const lenis = useLenis();

  const snapTo = useCallback((selector: string | number | HTMLElement) => {
    if (!lenis) return;
    
    lenis.scrollTo(selector, {
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-style curve
      lock: true,
    });
  }, [lenis]);

  return { snapTo };
}
