import { Link, useLocation } from 'wouter';
import { ABOUT_NAV_LINKS } from '@/lib/about-nav';
import { cn } from '@/lib/utils';

export function AboutSectionNav({ className }: { className?: string }) {
  const [location] = useLocation();

  return (
    <nav
      aria-label="About section pages"
      className={cn('flex flex-wrap gap-2', className)}
    >
      {ABOUT_NAV_LINKS.map((link) => {
        const active = location === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'inline-flex items-center rounded-lg border px-3 py-2 text-xs sm:text-sm font-semibold transition-colors',
              active
                ? 'border-amber-400/60 bg-amber-500 text-slate-900'
                : 'border-white/30 bg-white/10 text-white hover:bg-white hover:text-sims-primary',
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
