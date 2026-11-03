import React from 'react';
import type { ResponsiveImage } from '@/lib/responsive-image';

type ImgProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'srcSet' | 'width' | 'height' | 'fetchPriority'
>;

export interface OptimizedImageProps extends ImgProps {
  image?: ResponsiveImage | string;
  src?: string;
  alt: string;
  /** sizes attribute — required for correct responsive selection */
  sizes?: string;
  width?: number | string;
  height?: number | string;
  /** Emulates Next.js Image fill layout (absolute inset-0 w-full h-full) */
  fill?: boolean;
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
 * - Supports ResponsiveImage object or direct string path (WebP)
 * - width/height to reduce CLS
 * - lazy-load below-fold only
 * - fetchPriority=high for true LCP images
 * - Supports fill prop for responsive absolute aspect containers
 */
export function OptimizedImage({
  image,
  src: directSrc,
  alt,
  sizes,
  width,
  height,
  fill = false,
  priority = false,
  useFull = false,
  className,
  style,
  loading,
  decoding,
  ...rest
}: OptimizedImageProps) {
  const targetImage = image ?? directSrc ?? '';
  const fillStyle: React.CSSProperties = fill
    ? { position: 'absolute', height: '100%', width: '100%', inset: 0 }
    : {};

  if (typeof targetImage === 'string') {
    return (
      <picture>
        <source srcSet={targetImage} type="image/webp" />
        <img
          src={targetImage}
          alt={alt}
          sizes={sizes}
          width={fill ? undefined : (width ?? 1024)}
          height={fill ? undefined : (height ?? 768)}
          className={className}
          style={{ ...fillStyle, ...style }}
          loading={loading ?? (priority ? 'eager' : 'lazy')}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={decoding ?? (priority ? 'sync' : 'async')}
          {...rest}
        />
      </picture>
    );
  }

  const src = useFull ? targetImage.fullSrc : targetImage.src;

  return (
    <img
      src={src}
      srcSet={useFull ? undefined : targetImage.srcSet}
      sizes={useFull ? undefined : sizes}
      width={fill ? undefined : (width ?? targetImage.width)}
      height={fill ? undefined : (height ?? targetImage.height)}
      alt={alt}
      className={className}
      style={{ ...fillStyle, ...style }}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={decoding ?? (priority ? 'sync' : 'async')}
      {...rest}
    />
  );
}

export const Image = OptimizedImage;
