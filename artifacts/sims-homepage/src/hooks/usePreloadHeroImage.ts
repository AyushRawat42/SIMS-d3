import { useEffect } from 'react';
import type { ResponsiveImage } from '@/lib/responsive-image';

/**
 * Preload the most likely LCP candidate (hero) so the browser discovers it early.
 * Picks a reasonable default from srcset (1600w / default src) or direct URL.
 */
export function usePreloadHeroImage(image: ResponsiveImage | string | undefined) {
  useEffect(() => {
    if (!image) return;
    const src = typeof image === 'string' ? image : image.src;
    const srcSet = typeof image === 'string' ? undefined : image.srcSet;
    if (!src) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    if (srcSet) link.setAttribute('imagesrcset', srcSet);
    link.setAttribute('imagesizes', '100vw');
    link.fetchPriority = 'high';
    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, [image]);
}
