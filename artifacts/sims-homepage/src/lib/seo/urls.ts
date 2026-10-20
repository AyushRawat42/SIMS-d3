export const SITE_ORIGIN = 'https://www.sims.college';

export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;

/** Pathname only: no query string, no hash, no trailing slash except `/`. */
export function cleanPathname(input: string): string {
  const withoutQuery = input.split('?')[0] ?? '/';
  const withoutHash = withoutQuery.split('#')[0] ?? '/';
  const withLeading = withoutHash.startsWith('/') ? withoutHash : `/${withoutHash}`;
  if (withLeading.length > 1 && withLeading.endsWith('/')) {
    return withLeading.replace(/\/+$/, '') || '/';
  }
  return withLeading || '/';
}

export function canonicalUrl(pathname: string): string {
  const path = cleanPathname(pathname);
  return path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path}`;
}

/** Absolute URL that keeps a hash, for breadcrumb targets such as `/#programs`. */
export function absoluteUrl(path: string): string {
  const hashIndex = path.indexOf('#');
  if (hashIndex === -1) return canonicalUrl(path);
  const hash = path.slice(hashIndex);
  const before = path.slice(0, hashIndex);
  return `${canonicalUrl(before === '' ? '/' : before)}${hash}`;
}
