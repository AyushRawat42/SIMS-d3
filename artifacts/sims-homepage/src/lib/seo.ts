import { useEffect } from 'react';

/** Sets document title and meta description for SPA routes (Vite + Wouter). */
export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    const created = !meta;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    const prevDescription = meta.getAttribute('content');
    meta.setAttribute('content', description);

    return () => {
      document.title = prevTitle;
      if (created) {
        meta?.remove();
      } else if (prevDescription != null) {
        meta?.setAttribute('content', prevDescription);
      }
    };
  }, [title, description]);
}

/**
 * Injects one or more JSON-LD scripts into document.head and removes them on unmount.
 * Pass a stable `id` so multiple schemas (e.g. BlogPosting + FAQPage) can coexist.
 */
export function useJsonLd(id: string, data: Record<string, unknown> | null) {
  useEffect(() => {
    const scriptId = `jsonld-${id}`;

    if (!data) {
      document.getElementById(scriptId)?.remove();
      return;
    }

    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [id, data]);
}
