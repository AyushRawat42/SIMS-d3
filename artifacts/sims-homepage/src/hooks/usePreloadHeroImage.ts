import { useEffect } from 'react';
import type { ResponsiveImage } from '@/lib/responsive-image';

/**
 * Preload the most likely LCP candidate (hero) so the browser discovers it early.
 * Picks a reasonable default from srcset (1600w / default src).
 */
export function usePreloadHeroImage(image: ResponsiveImage | undefined) {
  useEffect(() => {
    if (!image?.src) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = image.src;
    link.setAttribute('imagesrcset', image.srcSet);
    link.setAttribute('imagesizes', '100vw');
    link.fetchPriority = 'high';
    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, [image]);
}
