import { CheckCircle2, Home, Shield, UtensilsCrossed } from 'lucide-react';
import { SectionHeading } from '@/components/Shared';
import { FacilitiesPageShell, facilitiesContainerPad, facilitiesSectionPad } from '@/components/FacilitiesPageShell';
import { OptimizedImage } from '@/components/OptimizedImage';
import { IMAGE_SIZES } from '@/lib/responsive-image';
import { HOSTEL_GALLERY, HOSTEL_PAGE } from '@/lib/facilities-pages';
import { DSC05112_hero } from '@/lib/responsive-images.generated';

export function HostelPage() {
  return (
    <FacilitiesPageShell
      metaTitle={HOSTEL_PAGE.metaTitle}
      metaDescription={HOSTEL_PAGE.metaDescription}
      title={HOSTEL_PAGE.title}
      subtitle={HOSTEL_PAGE.subtitle}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Facilities', href: '/facilities' },
        { label: 'Hostel' },
      ]}
      heroImage={DSC05112_hero}
      heroImageAlt="SIMS hostel room with multiple wooden beds, paired study desks, and a ceiling fan"
      ctaTitle="Ask about SIMS student accommodation"
      ctaText="Speak with admissions about Medical College Hostel options in Dehradun, room types, and the next intake."
    >
      <section className={`${facilitiesSectionPad} bg-white`}>
        <div className={`${facilitiesContainerPad} max-w-3xl`}>
          <SectionHeading title="Safe Living for Healthcare Students" className="mb-6" />
          <div className="space-y-4 text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base">
            {HOSTEL_PAGE.intro.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${facilitiesSectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={facilitiesContainerPad}>
          <SectionHeading
            title="Why Families Choose SIMS Hostel Living"
            subtitle="Secure residential support designed for nursing and allied health students in Dehradun."
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {HOSTEL_PAGE.highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-sims-border bg-white p-6 md:p-7 shadow-sm h-full"
              >
                <h3 className="text-lg font-bold text-sims-primary mb-2">{item.title}</h3>
                <p className="text-sm text-sims-text-muted leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${facilitiesSectionPad} bg-white`}>
        <div className={facilitiesContainerPad}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
            <article className="rounded-2xl border border-sims-border bg-sims-bg p-6 md:p-7 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-sims-surface flex items-center justify-center text-sims-primary-2 mb-4">
                <Home className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-sims-primary mb-3">Hostel rooms</h3>
              <ul className="space-y-2.5">
                {HOSTEL_PAGE.roomPoints.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-sims-text">
                    <CheckCircle2 className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-sims-border bg-sims-bg p-6 md:p-7 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-sims-surface flex items-center justify-center text-sims-primary-2 mb-4">
                <Shield className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-sims-primary mb-3">Security & surveillance</h3>
              <ul className="space-y-2.5">
                {HOSTEL_PAGE.securityPoints.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-sims-text">
                    <CheckCircle2 className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-sims-border bg-sims-bg p-6 md:p-7 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-sims-surface flex items-center justify-center text-sims-primary-2 mb-4">
                <UtensilsCrossed className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-sims-primary mb-3">Canteen & meals</h3>
              <ul className="space-y-2.5">
                {HOSTEL_PAGE.canteenPoints.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-sims-text">
                    <CheckCircle2 className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={`${facilitiesSectionPad} bg-sims-surface-2 border-y border-sims-border/60`}>
        <div className={facilitiesContainerPad}>
          <SectionHeading
            title="Hostel Gallery"
            subtitle="A look at furnished residential spaces that support rest and study on campus."
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {HOSTEL_GALLERY.map((photo) => (
              <div
                key={photo.alt}
                className="rounded-2xl overflow-hidden border border-sims-border shadow-sm aspect-[4/3] bg-white"
              >
                <OptimizedImage
                  image={photo.src}
                  alt={photo.alt}
                  sizes={IMAGE_SIZES.half}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </FacilitiesPageShell>
  );
}
