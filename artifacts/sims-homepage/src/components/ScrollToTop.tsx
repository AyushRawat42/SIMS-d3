import { useLayoutEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Resets window scroll on route pathname changes (SPA navigation).
 * Preserves in-page hash targets (e.g. /#programs) when a hash is present.
 */
export function ScrollToTop() {
  const [pathname] = useLocation();

  useLayoutEffect(() => {
    const hash = window.location.hash;

    if (hash.length > 1) {
      const id = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(id);
      if (target) {
        // Let the section land in view; avoid forcing top when hash navigation is intentional.
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }
    }

    // Instant jump — overrides html { scroll-behavior: smooth } for route changes.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
