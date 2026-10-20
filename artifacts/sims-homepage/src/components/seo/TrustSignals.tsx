import { BadgeCheck, Building2, GraduationCap, Microscope } from 'lucide-react';
import { SectionHeading } from '@/components/Shared';
import {
  CAMPUS_EXPERIENCE,
  clinicalSettingsFor,
  facultyHighlightsFor,
  recognitionBadgesFor,
} from '@/lib/trust-signals';

export function TrustSignals({
  courseSlug,
  variant,
}: {
  courseSlug: string;
  variant: 'badges' | 'proof';
}) {
  if (variant === 'badges') {
    const badges = recognitionBadgesFor(courseSlug);
    return (
      <section aria-label="Affiliation and approval highlights" className="bg-white border-b border-sims-border/70">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {badges.map((badge) => (
              <li
                key={badge.id}
                className="flex gap-3 rounded-xl border border-sims-border bg-sims-bg px-3.5 py-3"
              >
                <BadgeCheck className="w-5 h-5 text-sims-primary-2 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-sims-primary leading-snug">{badge.title}</p>
                  <p className="text-xs text-sims-text-muted leading-relaxed mt-1">{badge.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  const settings = clinicalSettingsFor(courseSlug);
  const faculty = facultyHighlightsFor(courseSlug);

  return (
    <section className="py-14 md:py-16 lg:py-20 bg-white border-t border-sims-border/60">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Clinical training and academic proof"
          subtitle="Where students practise, who teaches them, and what the campus is built to do."
          className="mb-8 md:mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-5">
          {settings.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-sims-border bg-sims-bg p-5 md:p-6 shadow-sm"
            >
              <Building2 className="w-5 h-5 text-sims-primary-2 mb-3" aria-hidden="true" />
              <h3 className="font-bold text-sims-primary leading-snug mb-2">{item.title}</h3>
              <p className="text-sm text-sims-text-muted leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>

        <article className="rounded-2xl border border-sims-border bg-sims-surface-2 p-5 md:p-6 mb-5 flex gap-4">
          <div className="w-11 h-11 rounded-xl bg-white border border-sims-border flex items-center justify-center text-sims-primary shrink-0">
            <GraduationCap className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-bold text-sims-primary leading-snug mb-1">{faculty.title}</h3>
            <p className="text-sm text-sims-text-muted leading-relaxed">{faculty.text}</p>
          </div>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {CAMPUS_EXPERIENCE.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-sims-border bg-white p-5 md:p-6 shadow-sm"
            >
              <Microscope className="w-5 h-5 text-sims-primary-2 mb-3" aria-hidden="true" />
              <h3 className="font-bold text-sims-primary leading-snug mb-2">{item.title}</h3>
              <p className="text-sm text-sims-text-muted leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
