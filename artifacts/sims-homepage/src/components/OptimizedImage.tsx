import React from 'react';
import type { ResponsiveImage } from '@/lib/responsive-image';

type ImgProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'srcSet' | 'width' | 'height' | 'fetchPriority'
>;

export interface OptimizedImageProps extends ImgProps {
  image: ResponsiveImage;
  alt: string;
  /** sizes attribute — required for correct responsive selection */
  sizes: string;
  /**
   * True for LCP / above-the-fold heroes only.
   * Sets loading=eager, fetchPriority=high, decoding=sync unless overridden.
   */
  priority?: boolean;
  /**
   * Use the higher-res fullSrc (lightbox / zoom). Still includes srcset for safety.
   */
  useFull?: boolean;
}

/**
 * Standardized image rendering for SIMS pages:
 * - WebP responsive srcset
 * - width/height to reduce CLS
 * - lazy-load below-fold only
 * - fetchPriority=high for true LCP images
 */
export function OptimizedImage({
  image,
  alt,
  sizes,
  priority = false,
  useFull = false,
  className,
  style,
  loading,
  decoding,
  ...rest
}: OptimizedImageProps) {
  const src = useFull ? image.fullSrc : image.src;

  return (
    <img
      src={src}
      srcSet={useFull ? undefined : image.srcSet}
      sizes={useFull ? undefined : sizes}
      width={image.width}
      height={image.height}
      alt={alt}
      className={className}
      style={{ ...style }}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={decoding ?? (priority ? 'sync' : 'async')}
      {...rest}
    />
  );
}
