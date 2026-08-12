import { Bus, CheckCircle2, MapPin, Shield } from 'lucide-react';
import { SectionHeading } from '@/components/Shared';
import { FacilitiesPageShell, facilitiesContainerPad, facilitiesSectionPad } from '@/components/FacilitiesPageShell';
import { OptimizedImage } from '@/components/OptimizedImage';
import { TRANSPORT_PAGE } from '@/lib/facilities-pages';
import { FACILITIES_HERO_IMAGE } from '@/lib/facilities';
import { transport_route_coverage_map } from '@/lib/responsive-images.generated';

export function TransportPage() {
  return (
    <FacilitiesPageShell
      metaTitle={TRANSPORT_PAGE.metaTitle}
      metaDescription={TRANSPORT_PAGE.metaDescription}
      title={TRANSPORT_PAGE.title}
      subtitle={TRANSPORT_PAGE.subtitle}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Facilities', href: '/facilities' },
        { label: 'Transport' },
      ]}
      heroImage={FACILITIES_HERO_IMAGE.src}
      heroImageAlt={FACILITIES_HERO_IMAGE.alt}
      ctaTitle="Ask about SIMS bus routes"
      ctaText="Contact admissions for Medical College Transport Facility details, route coverage in Dehradun, and current schedule guidance."
    >
      <section className={`${facilitiesSectionPad} bg-white`}>
        <div className={`${facilitiesContainerPad} max-w-3xl`}>
          <SectionHeading title="College Transport Across Dehradun" className="mb-6" />
          <div className="space-y-4 text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base">
            {TRANSPORT_PAGE.intro.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${facilitiesSectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={facilitiesContainerPad}>
          <SectionHeading
            title="Service Highlights"
            subtitle="Wide coverage, modern buses, fixed schedules, and affordable student options."
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {TRANSPORT_PAGE.servicePoints.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-sims-border bg-white p-6 md:p-7 shadow-sm h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-sims-surface flex items-center justify-center text-sims-primary-2 mb-4">
                  <Bus className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-sims-primary mb-2">{item.title}</h3>
                <p className="text-sm text-sims-text-muted leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${facilitiesSectionPad} bg-white`}>
        <div className={facilitiesContainerPad}>
          <SectionHeading
            title="SIMS Bus Routes in Dehradun"
            subtitle="Wide route coverage across key localities used by students and staff."
            className="mb-8 md:mb-10"
          />

          <div className="mx-auto mb-8 md:mb-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-sims-border bg-white shadow-sm aspect-[880/388]">
            <OptimizedImage
              image={transport_route_coverage_map}
              alt="SIMS route coverage map across Dehradun — including Sahastradhara, Vikas Nagar, Prem Nagar, Clock Tower, Raipur, and Patelnagar ISBT"
              sizes="(max-width: 1023px) 100vw, 1024px"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {TRANSPORT_PAGE.routes.map((route) => (
              <div
                key={route}
                className="rounded-xl border border-sims-border bg-sims-bg px-4 py-3.5 flex items-center gap-3 shadow-sm"
              >
                <MapPin className="w-4 h-4 text-sims-primary-2 shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-sims-text leading-snug">{route}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-sims-text-muted leading-relaxed max-w-3xl">
            Route availability and stop timings can vary by academic session. Admissions can confirm the
            latest SIMS bus route guidance for your locality.
          </p>
        </div>
      </section>

      <section className={`${facilitiesSectionPad} bg-sims-surface-2 border-y border-sims-border/60`}>
        <div className={facilitiesContainerPad}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="w-11 h-11 rounded-xl bg-white border border-sims-border flex items-center justify-center text-sims-primary-2 mb-4">
                <Shield className="w-5 h-5" aria-hidden="true" />
              </div>
              <SectionHeading
                title="Safety Priorities"
                subtitle="Transport operations designed around student protection and predictable commuting."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {TRANSPORT_PAGE.safetyPoints.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-sims-border bg-white p-5 shadow-sm flex gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5" />
                    <span className="text-sm text-sims-text leading-snug font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </FacilitiesPageShell>
  );
}
