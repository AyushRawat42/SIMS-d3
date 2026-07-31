import React from 'react';
import { Link } from 'wouter';
import { OptimizedImage } from '@/components/OptimizedImage';
import { logo_transparent as logoTransparent } from '@/lib/responsive-images.generated';
import { cn } from '@/lib/utils';

type SimsLogoProps = {
  /** Visual context — header is compact; footer sits on a light plate over dark bg */
  variant?: 'header' | 'footer';
  className?: string;
  /** Wrap in home link (header). Footer usually stays plain. */
  linkToHome?: boolean;
  /** Eager-load for above-the-fold header mark */
  priority?: boolean;
};

const VARIANT_CLASS = {
  // Progressive max-width so the mark stays clear without crowding mid-range headers
  header:
    'h-12 sm:h-14 md:h-16 w-auto max-w-[220px] sm:max-w-[260px] md:max-w-[280px] xl:max-w-[300px] 2xl:max-w-[360px] object-contain object-left',
  footer: 'w-full h-auto max-h-14 object-contain object-left',
} as const;

const VARIANT_SIZES = {
  header: '(max-width: 640px) 220px, (max-width: 1280px) 280px, 360px',
  footer: '320px',
} as const;

/**
 * Shared SIMS brand logo — transparent WebP derived from archived logo.jpeg.
 * Used in both header and footer.
 */
export function SimsLogo({
  variant = 'header',
  className,
  linkToHome = false,
  priority = false,
}: SimsLogoProps) {
  const image = (
    <OptimizedImage
      image={logoTransparent}
      alt="Sushila Institute of Medical Sciences"
      sizes={VARIANT_SIZES[variant]}
      loading={priority || variant === 'header' ? 'eager' : 'lazy'}
      className={cn(VARIANT_CLASS[variant], className)}
    />
  );

  if (linkToHome) {
    return (
      <Link href="/" className="flex items-center z-50 shrink-0">
        {image}
      </Link>
    );
  }

  return image;
}

/** @deprecated Prefer SimsLogo — kept as alias for older imports */
export const SimsWatermark = SimsLogo;
