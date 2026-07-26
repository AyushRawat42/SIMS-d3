/**
 * Shared responsive image shape used across SIMS pages.
 * Generated assets live in `responsive-images.generated.ts`.
 */
export interface ResponsiveImage {
  /** Default src (largest display size, typically 1600w WebP) */
  src: string;
  /** srcset string, e.g. "url1 640w, url2 1024w, url3 1600w" */
  srcSet: string;
  /** Intrinsic width of the default src (for CLS) */
  width: number;
  /** Intrinsic height of the default src (for CLS) */
  height: number;
  /** Higher-res variant for lightbox / zoom (typically 1920w) */
  fullSrc: string;
}

/** Common sizes attributes matched to SIMS layouts */
export const IMAGE_SIZES = {
  /** Full-bleed hero backgrounds */
  hero: '100vw',
  /** Hero featured card (~5/12 of desktop width) */
  heroFeatured: '(max-width: 1023px) 100vw, 42vw',
  /** Half-width content blocks */
  half: '(max-width: 1023px) 100vw, 50vw',
  /** Third-width gallery / cards */
  third: '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw',
  /** Quarter-width faculty / leadership */
  quarter: '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw',
  /** Portrait / square content image */
  content: '(max-width: 1023px) 100vw, 40vw',
} as const;
