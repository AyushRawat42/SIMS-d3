import { Link, useLocation } from 'wouter';
import { FACILITIES_NAV_LINKS } from '@/lib/facilities-nav';
import { cn } from '@/lib/utils';

export function FacilitiesSectionNav({
  className,
  variant = 'hero',
}: {
  className?: string;
  variant?: 'hero' | 'light';
}) {
  const [location] = useLocation();

  return (
    <nav
      aria-label="Facilities section pages"
      className={cn('flex flex-wrap gap-2', className)}
    >
      {FACILITIES_NAV_LINKS.map((link) => {
        const active =
          link.href === '/facilities'
            ? location === '/facilities'
            : location === link.href || location.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'inline-flex items-center rounded-lg border px-3 py-2 text-xs sm:text-sm font-semibold transition-colors',
              variant === 'hero'
                ? active
                  ? 'border-amber-400/60 bg-amber-500 text-slate-900'
                  : 'border-white/30 bg-white/10 text-white hover:bg-white hover:text-sims-primary'
                : active
                  ? 'border-sims-primary/30 bg-sims-primary text-white'
                  : 'border-sims-border bg-white text-sims-text hover:border-sims-primary/25 hover:text-sims-primary',
            )}
            aria-current={active ? 'page' : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
