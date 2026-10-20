import type { SeoEntry } from '@/lib/seo/meta-registry';
import { canonicalUrl } from '@/lib/seo/urls';

export const OG_SITE_NAME = 'Sushila Institute of Medical Sciences (SIMS) Dehradun';

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export type PageHead = {
  path: string;
  lastUpdated: string;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    locale: 'en_IN';
    type: 'website';
    image: string;
    imageWidth: number;
    imageHeight: number;
    imageAlt: string;
  };
  twitter: {
    card: 'summary_large_image';
    title: string;
    description: string;
    image: string;
  };
};

/** Public path of the build-time Open Graph PNG for a route. */
export function ogImagePath(pathname: string): string {
  const slug = pathname === '/' ? '/home' : pathname;
  return `/og${slug}.png`;
}

export function buildPageHead(entry: SeoEntry): PageHead {
  const canonical = canonicalUrl(entry.path);
  const image = `${canonicalUrl(ogImagePath(entry.path))}`;
  return {
    path: entry.path,
    lastUpdated: entry.lastUpdated,
    title: entry.seoTitle,
    description: entry.seoDescription,
    keywords: entry.keywords.join(', '),
    canonical,
    openGraph: {
      title: entry.ogTitle,
      description: entry.ogDescription,
      url: canonical,
      siteName: OG_SITE_NAME,
      locale: 'en_IN',
      type: 'website',
      image,
      imageWidth: OG_IMAGE_WIDTH,
      imageHeight: OG_IMAGE_HEIGHT,
      imageAlt: entry.ogTitle,
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.ogTitle,
      description: entry.ogDescription,
      image,
    },
  };
}
