import React from 'react';
import { Link } from 'wouter';
import { OptimizedImage } from '@/components/OptimizedImage';
import { logoTransparent } from '@/lib/responsive-images.generated';
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
  header: 'h-14 md:h-16 w-auto max-w-[280px] md:max-w-[380px] object-contain object-left',
  footer: 'w-full h-auto max-h-14 object-contain object-left',
} as const;

const VARIANT_SIZES = {
  header: '380px',
  footer: '320px',
} as const;

/**
 * Shared SIMS brand logo — transparent WebP derived from logo.jpeg.
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
