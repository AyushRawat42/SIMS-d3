import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/Shared';
import { Button } from '@/components/ui/button';
import type { RelatedGuide } from '@/lib/blog-internal-links';
import { cn } from '@/lib/utils';

export function RelatedBlogGuides({
  title,
  subtitle,
  guides,
  className,
}: {
  title: string;
  subtitle?: string;
  guides: RelatedGuide[];
  className?: string;
}) {
  if (guides.length === 0) return null;

  return (
    <div className={cn('min-w-0', className)}>
      {subtitle ? (
        <SectionHeading title={title} subtitle={subtitle} className="mb-6 sm:mb-8" />
      ) : (
        <h2 className="font-display text-xl sm:text-2xl font-bold text-sims-primary mb-4 sm:mb-6">
          {title}
        </h2>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {guides.map((guide) => (
          <li key={guide.href}>
            <article className="h-full rounded-2xl border border-sims-border bg-white p-4 sm:p-5 shadow-sm flex flex-col">
              <h3 className="font-display text-base sm:text-lg font-bold text-sims-primary mb-2 leading-snug">
                <Link
                  href={guide.href}
                  className="hover:text-sims-primary-2 transition-colors"
                >
                  {guide.label}
                </Link>
              </h3>
              <p className="text-sm text-sims-text-muted leading-relaxed mb-4 flex-1">{guide.blurb}</p>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-sims-primary text-sims-primary hover:bg-sims-primary hover:text-white font-semibold rounded-lg h-auto min-h-10"
                asChild
              >
                <Link href={guide.href}>
                  Read guide
                  <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" aria-hidden="true" />
                </Link>
              </Button>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
