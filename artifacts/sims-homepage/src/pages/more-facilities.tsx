import { CheckCircle2, BookOpen, Users, Presentation, HeartPulse, Clapperboard, LayoutGrid } from 'lucide-react';
import { SectionHeading } from '@/components/Shared';
import { FacilitiesPageShell, facilitiesContainerPad, facilitiesSectionPad } from '@/components/FacilitiesPageShell';
import { OptimizedImage } from '@/components/OptimizedImage';
import { IMAGE_SIZES } from '@/lib/responsive-image';
import { MORE_FACILITIES, MORE_FACILITIES_PAGE } from '@/lib/facilities-pages';
import { facility_library_students } from '@/lib/responsive-images.generated';

function facilityIcon(id: string) {
  switch (id) {
    case 'library':
      return BookOpen;
    case 'conference-rooms':
      return Presentation;
    case 'common-rooms':
      return Users;
    case 'medical-room':
      return HeartPulse;
    case 'av-auditorium':
      return Clapperboard;
    case 'multipurpose-hall':
      return LayoutGrid;
    default:
      return LayoutGrid;
  }
}

export function MoreFacilitiesPage() {
  return (
    <FacilitiesPageShell
      metaTitle={MORE_FACILITIES_PAGE.metaTitle}
      metaDescription={MORE_FACILITIES_PAGE.metaDescription}
      title={MORE_FACILITIES_PAGE.title}
      subtitle={MORE_FACILITIES_PAGE.subtitle}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Facilities', href: '/facilities' },
        { label: 'More Facilities' },
      ]}
      heroImage={facility_library_students}
      heroImageAlt="SIMS students in uniform studying anatomy textbooks in the campus library"
      ctaTitle="Explore the full SIMS campus"
      ctaText="Visit laboratories, hostel, and transport pages — or speak with admissions about a campus tour."
    >
      <section className={`${facilitiesSectionPad} bg-white`}>
        <div className={`${facilitiesContainerPad} max-w-3xl`}>
          <SectionHeading title="Spaces That Support Campus Life" className="mb-6" />
          <div className="space-y-4 text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base">
            {MORE_FACILITIES_PAGE.intro.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${facilitiesSectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={facilitiesContainerPad}>
          <SectionHeading
            title="Academic & Student Support Spaces"
            subtitle="Library, meeting rooms, welfare, and event venues used across SIMS programmes."
            className="mb-10 md:mb-12"
          />
          <div className="space-y-14 md:space-y-16 lg:space-y-20">
            {MORE_FACILITIES.map((facility, index) => {
              const Icon = facilityIcon(facility.id);
              const reverse = index % 2 === 1;

              return (
                <article
                  key={facility.id}
                  id={facility.id}
                  className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
                >
                  <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : ''}`}>
                    <div className="flex items-start gap-3.5 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-sims-surface flex items-center justify-center text-sims-primary-2 shrink-0">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h2 className="font-display text-2xl md:text-[1.75rem] font-bold text-sims-primary leading-tight pt-1.5">
                        {facility.title}
                      </h2>
                    </div>
                    <p className="text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base mb-5">
                      {facility.description}
                    </p>
                    <ul className="space-y-2.5">
                      {facility.highlights.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm md:text-[0.9375rem] text-sims-text">
                          <CheckCircle2 className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`lg:col-span-6 ${reverse ? 'lg:order-1' : ''}`}>
                    {facility.image ? (
                      <div className="rounded-2xl overflow-hidden border border-sims-border shadow-sm aspect-[4/3] bg-sims-surface">
                        <OptimizedImage
                          image={facility.image}
                          alt={facility.imageAlt ?? facility.title}
                          sizes={IMAGE_SIZES.half}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-sims-border bg-white p-6 md:p-8 h-full min-h-[220px] flex flex-col justify-center shadow-sm">
                        <p className="text-sm font-semibold uppercase tracking-wide text-sims-primary-2 mb-3">
                          At a glance
                        </p>
                        <ul className="space-y-3">
                          {facility.highlights.slice(0, 4).map((item) => (
                            <li key={item} className="flex gap-2.5 text-sm text-sims-text">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                              <span className="leading-snug font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </FacilitiesPageShell>
  );
}
