import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { schemasForPath } from '@/lib/seo/page-schemas';
import { jsonLd } from '@/lib/seo/schema';
import { cleanPathname } from '@/lib/seo/urls';

/** Replaces head JSON-LD on every SPA route change. Prerender writes the first set. */
export function RouteJsonLd() {
  const [location] = useLocation();

  useEffect(() => {
    document.querySelectorAll('script[data-seo-jsonld="1"]').forEach((node) => node.remove());
    for (const schema of schemasForPath(cleanPathname(location))) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoJsonld = '1';
      script.text = jsonLd(schema);
      document.head.appendChild(script);
    }
  }, [location]);

  return null;
}
