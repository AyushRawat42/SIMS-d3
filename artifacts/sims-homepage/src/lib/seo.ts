import { useEffect, useRef } from 'react';
import { buildPageHead, type PageHead } from '@/lib/seo/metadata';
import { contentSeo, getSeoEntry, type SeoEntry } from '@/lib/seo/meta-registry';
import { cleanPathname } from '@/lib/seo/urls';

type MetaAttr = 'name' | 'property';

function upsertMeta(attr: MetaAttr, key: string, content: string) {
  let meta = document.querySelector(`meta[${attr}="${key}"]`);
  const created = !meta;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }
  const previous = meta.getAttribute('content');
  meta.setAttribute('content', content);
  return { meta, created, previous };
}

function applyPageHead(head: PageHead) {
  const prevTitle = document.title;
  document.title = head.title;

  const metas = [
    upsertMeta('name', 'description', head.description),
    upsertMeta('name', 'keywords', head.keywords),
    upsertMeta('property', 'og:title', head.openGraph.title),
    upsertMeta('property', 'og:description', head.openGraph.description),
    upsertMeta('property', 'og:url', head.openGraph.url),
    upsertMeta('property', 'og:site_name', head.openGraph.siteName),
    upsertMeta('property', 'og:locale', head.openGraph.locale),
    upsertMeta('property', 'og:type', head.openGraph.type),
    upsertMeta('property', 'og:image', head.openGraph.image),
    upsertMeta('property', 'og:image:width', String(head.openGraph.imageWidth)),
    upsertMeta('property', 'og:image:height', String(head.openGraph.imageHeight)),
    upsertMeta('property', 'og:image:alt', head.openGraph.imageAlt),
    upsertMeta('name', 'twitter:card', head.twitter.card),
    upsertMeta('name', 'twitter:title', head.twitter.title),
    upsertMeta('name', 'twitter:description', head.twitter.description),
    upsertMeta('name', 'twitter:image', head.twitter.image),
  ];

  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  const canonicalCreated = !canonical;
  const prevCanonical = canonical?.getAttribute('href') ?? null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', head.canonical);
  document.querySelectorAll('link[rel="canonical"]').forEach((node) => {
    if (node !== canonical) node.remove();
  });

  return () => {
    document.title = prevTitle;
    for (const item of metas) {
      if (item.created) item.meta.remove();
      else if (item.previous != null) item.meta.setAttribute('content', item.previous);
    }
    if (canonicalCreated) canonical?.remove();
    else if (prevCanonical) canonical?.setAttribute('href', prevCanonical);
  };
}

function useHeadEffect(entry: SeoEntry | null | undefined) {
  const entryRef = useRef(entry);
  entryRef.current = entry;
  const key = entry
    ? `${entry.path}\0${entry.seoTitle}\0${entry.seoDescription}\0${entry.ogTitle}\0${entry.ogDescription}\0${entry.keywords.join(',')}\0${entry.lastUpdated}`
    : '';

  useEffect(() => {
    const current = entryRef.current;
    if (!current) return;
    return applyPageHead(buildPageHead(current));
  }, [key]);
}

/** Applies a registry row, including Open Graph and Twitter cards. */
export function useSeoEntry(entry: SeoEntry | null | undefined) {
  useHeadEffect(entry);
}

/** Looks up `path` in the CTR registry and applies that head. */
export function usePageSeo(path: string) {
  useHeadEffect(getSeoEntry(path) ?? null);
}

/**
 * Sets document title, description, canonical, and the matching social tags.
 * Prefer `usePageSeo` so copy stays in the CTR registry.
 */
export function useDocumentMeta(title: string, description: string, canonicalPath?: string) {
  const path = canonicalPath ? cleanPathname(canonicalPath) : undefined;
  const entry = path
    ? (getSeoEntry(path) ??
      contentSeo({
        path,
        seoTitle: title,
        seoDescription: description,
        keywords: [],
      }))
    : null;
  useHeadEffect(entry);
}
