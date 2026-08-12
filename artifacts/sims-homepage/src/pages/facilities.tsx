import { Link } from 'wouter';
import { ArrowRight, FlaskConical, Home, Bus, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/Shared';
import { FacilitiesPageShell, facilitiesContainerPad, facilitiesSectionPad } from '@/components/FacilitiesPageShell';
import { OptimizedImage } from '@/components/OptimizedImage';
import { IMAGE_SIZES } from '@/lib/responsive-image';
import { FACILITIES_PAGE, FACILITIES_HERO_IMAGE } from '@/lib/facilities';
import { FACILITIES_NAV_LINKS } from '@/lib/facilities-nav';
import { LAB_CATEGORIES, LABS } from '@/lib/labs';
import { labs_collage, transport_bus_collage, DSC00603, DSC05124_cleanup } from '@/lib/responsive-images.generated';

const hubCards = [
  {
    href: '/facilities/laboratories',
    title: 'Laboratories',
    description:
      'Browse nursing, paramedical, physiotherapy, and shared labs — each with a dedicated page covering purpose, equipment, and academic use.',
    icon: FlaskConical,
    image: labs_collage,
    imageAlt:
      'SIMS laboratory collage — faculty teaching with a microscope, a student examining a sample vial, and students pipetting in the skills lab',
    imageAspect: 'aspect-[495/432]',
    stats: `${LABS.length} dedicated labs`,
  },
  {
    href: '/facilities/hostel',
    title: 'Hostel',
    description:
      'Safe boys and girls hostels with hygienic canteen meals, 24×7 CCTV surveillance, and trained security for SIMS student accommodation.',
    icon: Home,
    image: DSC05124_cleanup,
    imageAlt: 'Furnished SIMS hostel room for residential students',
    imageAspect: 'aspect-[3/2]',
    stats: 'Boys & girls hostels',
  },
  {
    href: '/facilities/transport',
    title: 'Transport',
    description:
      'College bus coverage across Dehradun — including Sahastradhara, Prem Nagar, Clock Tower, ISBT, and more — with GPS and safety systems.',
    icon: Bus,
    image: transport_bus_collage,
    imageAlt:
      'SIMS college bus collage — nursing students posing in front of the yellow campus bus and a student boarding the Sushila Institute of Medical Sciences bus',
    imageAspect: 'aspect-[532/271]',
    stats: 'Wide Dehradun routes',
  },
  {
    href: '/facilities/more',
    title: 'More Facilities',
    description:
      'Library, conference rooms, common rooms, medical room, AV auditorium, and multipurpose hall supporting campus academic life.',
    icon: LayoutGrid,
    image: DSC00603,
    imageAlt: 'SIMS library and resource centre',
    imageAspect: 'aspect-[16/9]',
    stats: 'Library & campus spaces',
  },
] as const;

export function FacilitiesPage() {
  return (
    <FacilitiesPageShell
      metaTitle="Facilities at SIMS | Sushila Institute of Medical Sciences"
      metaDescription={FACILITIES_PAGE.metaDescription}
      title={FACILITIES_PAGE.title}
      subtitle={FACILITIES_PAGE.subtitle}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Facilities' },
      ]}
      heroImage={FACILITIES_HERO_IMAGE.src}
      heroImageAlt={FACILITIES_HERO_IMAGE.alt}
    >
      <section className={`${facilitiesSectionPad} bg-white`}>
        <div className={`${facilitiesContainerPad} max-w-3xl`}>
          <SectionHeading title="A Campus Built for Healthcare Learning" className="mb-6" />
          <div className="space-y-4 text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base">
            {FACILITIES_PAGE.intro.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${facilitiesSectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={facilitiesContainerPad}>
          <SectionHeading
            title="Explore Facilities"
            subtitle="Four focused sections — laboratories, hostel, transport, and more campus spaces — each SEO-ready and mobile-first."
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 items-stretch">
            {hubCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group rounded-2xl overflow-hidden border border-sims-border bg-white shadow-sm hover:shadow-md hover:border-sims-primary/15 transition-all h-full md:h-full flex flex-col md:flex-col"
                >
                  <div
                    className={`${card.imageAspect} md:aspect-auto md:h-64 shrink-0 overflow-hidden bg-sims-surface`}
                  >
                    <OptimizedImage
                      image={card.image}
                      alt={card.imageAlt}
                      sizes={IMAGE_SIZES.half}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-grow md:flex-1 min-h-0">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-sims-surface flex items-center justify-center text-sims-primary-2 shrink-0">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-sims-primary leading-snug">{card.title}</h2>
                        <p className="text-xs font-semibold uppercase tracking-wide text-sims-primary-2 mt-1">
                          {card.stats}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-sims-text-muted leading-relaxed mb-5 flex-1">
                      {card.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-semibold text-sims-primary-2 group-hover:text-sims-primary transition-colors mt-auto">
                      Open section
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${facilitiesSectionPad} bg-white`}>
        <div className={facilitiesContainerPad}>
          <SectionHeading
            title="Laboratory Directory Snapshot"
            subtitle="SIMS maintains specialised labs across nursing, paramedical, physiotherapy, and shared foundational learning."
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {LAB_CATEGORIES.map((category) => (
              <article
                key={category.id}
                className="rounded-2xl border border-sims-border bg-sims-bg p-6 shadow-sm h-full"
              >
                <h3 className="text-lg font-bold text-sims-primary mb-2">{category.title}</h3>
                <p className="text-sm text-sims-text-muted leading-relaxed mb-4">
                  {category.description}
                </p>
                <p className="text-sm font-semibold text-sims-primary-2">
                  {LABS.filter((lab) => lab.category === category.id).length} labs
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/facilities/laboratories"
              className="inline-flex items-center text-sm font-semibold text-sims-primary-2 hover:text-sims-primary transition-colors"
            >
              Browse all laboratories
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className={`${facilitiesSectionPad} bg-sims-surface-2 border-y border-sims-border/60`}>
        <div className={facilitiesContainerPad}>
          <SectionHeading title="Why Facilities Matter at SIMS" className="mb-8 md:mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                title: 'Practical competence',
                text: 'Labs and skills spaces help students move from textbook concepts to supervised procedure practice before clinical postings.',
              },
              {
                title: 'Focused academic routines',
                text: 'Classrooms, library resources, and computer access support consistent study habits across nursing and allied health programmes.',
              },
              {
                title: 'Daily student comfort',
                text: 'Hostel, canteen, transport, and campus spaces reduce friction in everyday student life so learning can stay the priority.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-sims-border p-6 shadow-sm">
                <div className="flex gap-2.5 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-sims-primary-2 shrink-0 mt-0.5" />
                  <h3 className="text-lg font-bold text-sims-primary">{item.title}</h3>
                </div>
                <p className="text-sm text-sims-text-muted leading-relaxed pl-7">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {FACILITIES_NAV_LINKS.filter((link) => link.href !== '/facilities').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-lg border border-sims-border bg-white px-3 py-2 text-sm font-semibold text-sims-text hover:border-sims-primary/25 hover:text-sims-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </FacilitiesPageShell>
  );
}
