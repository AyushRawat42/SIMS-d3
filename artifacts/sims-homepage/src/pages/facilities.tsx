import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { CheckCircle2, ArrowRight, FlaskConical, BookOpen, Bus, Home, UtensilsCrossed, Monitor, Building2, HeartPulse, Accessibility, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { SectionHeading } from '@/components/Shared';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { IMAGE_SIZES } from '@/lib/responsive-image';
import { usePreloadHeroImage } from '@/hooks/usePreloadHeroImage';
import {
  FACILITIES,
  FACILITIES_HERO_IMAGE,
  FACILITIES_PAGE,
  HOSTEL_GALLERY,
  LAB_TOOLS_NOTE,
  LABS,
  type FacilityItem,
} from '@/lib/facilities';

const sectionPad = 'py-14 md:py-16 lg:py-20';
const containerPad = 'container mx-auto px-4 md:px-6';

function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    const created = !meta;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    const prevDescription = meta.getAttribute('content');
    meta.setAttribute('content', description);

    return () => {
      document.title = prevTitle;
      if (created) {
        meta?.remove();
      } else if (prevDescription != null) {
        meta?.setAttribute('content', prevDescription);
      }
    };
  }, [title, description]);
}

function facilityIcon(id: string) {
  switch (id) {
    case 'campus':
    case 'classrooms':
      return Building2;
    case 'laboratories':
    case 'nursing-skills':
      return FlaskConical;
    case 'library':
      return BookOpen;
    case 'computer-lab':
      return Monitor;
    case 'hostel':
      return Home;
    case 'canteen':
      return UtensilsCrossed;
    case 'transport':
      return Bus;
    case 'student-activity':
      return Users;
    case 'medical-support':
      return HeartPulse;
    case 'accessibility':
      return Accessibility;
    default:
      return Building2;
  }
}

function FacilityBlock({
  facility,
  reverse = false,
}: {
  facility: FacilityItem;
  reverse?: boolean;
}) {
  const Icon = facilityIcon(facility.id);

  return (
    <article
      id={facility.id}
      className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
    >
      <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : ''}`}>
        <div className="flex items-start gap-3.5 mb-4">
          <div className="w-11 h-11 rounded-xl bg-sims-surface flex items-center justify-center text-sims-primary-2 shrink-0">
            <Icon className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-display text-2xl md:text-[1.75rem] font-bold text-sims-primary leading-tight pt-1.5">
            {facility.title}
          </h3>
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

      {facility.image ? (
        <div className={`lg:col-span-6 ${reverse ? 'lg:order-1' : ''}`}>
          <div className="rounded-2xl overflow-hidden border border-sims-border shadow-sm aspect-[4/3] bg-sims-surface">
            <OptimizedImage
              image={facility.image}
              alt={facility.imageAlt ?? facility.title}
              sizes={IMAGE_SIZES.half}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ) : (
        <div className={`lg:col-span-6 ${reverse ? 'lg:order-1' : ''}`}>
          <div className="rounded-2xl border border-sims-border bg-sims-surface-2/70 p-6 md:p-8 h-full min-h-[220px] flex flex-col justify-center">
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
        </div>
      )}
    </article>
  );
}

export function FacilitiesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  useDocumentMeta(
    'Facilities at SIMS | Sushila Institute of Medical Sciences',
    FACILITIES_PAGE.metaDescription,
  );
  usePreloadHeroImage(FACILITIES_HERO_IMAGE.src);

  const handleApplyClick = () => setModalOpen(true);

  const imagedFacilities = FACILITIES.filter((f) => f.image && f.id !== 'student-activity');
  const textFacilities = FACILITIES.filter((f) => !f.image || f.id === 'student-activity');

  return (
    <div className="min-h-[100dvh] bg-sims-bg font-sans selection:bg-sims-primary/20">
      <Header onApplyClick={handleApplyClick} />
      <ContactModal isOpen={modalOpen} onOpenChange={setModalOpen} />

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            image={FACILITIES_HERO_IMAGE.src}
            alt=""
            aria-hidden="true"
            sizes={IMAGE_SIZES.hero}
            priority
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sims-primary/94 via-sims-primary/80 to-sims-primary/40" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className={`${containerPad} relative z-10`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5">
              <nav aria-label="Breadcrumb" className="text-sm text-white/70">
                <ol className="flex flex-wrap items-center gap-1.5">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-amber-300 font-medium">Facilities</li>
                </ol>
              </nav>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                {FACILITIES_PAGE.title}
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
                {FACILITIES_PAGE.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white h-12 px-7 font-bold rounded-lg"
                  onClick={handleApplyClick}
                >
                  Apply Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white bg-white/10 hover:bg-white hover:text-sims-primary h-12 px-7 font-semibold backdrop-blur-sm rounded-lg"
                  onClick={handleApplyClick}
                >
                  Contact Admissions
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white bg-transparent hover:bg-white/10 h-12 px-7 font-semibold rounded-lg"
                  asChild
                >
                  <a href="/#programs">Explore Programs</a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3]">
                <OptimizedImage
                  image={FACILITIES_HERO_IMAGE.src}
                  alt={FACILITIES_HERO_IMAGE.alt}
                  sizes={IMAGE_SIZES.heroFeatured}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className={`${sectionPad} bg-white`}>
        <div className={`${containerPad} max-w-3xl`}>
          <SectionHeading title="A Campus Built for Healthcare Learning" className="mb-6" />
          <div className="space-y-4 text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base">
            {FACILITIES_PAGE.intro.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Main facilities with images */}
      <section className={`${sectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title="Campus Facilities"
            subtitle="Academic, practical, and residential spaces that support everyday student life at SIMS."
            className="mb-10 md:mb-12"
          />
          <div className="space-y-14 md:space-y-16 lg:space-y-20">
            {imagedFacilities.map((facility, index) => (
              <FacilityBlock
                key={facility.id}
                facility={facility}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional facilities grid */}
      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <SectionHeading
            title="More Student Support Facilities"
            subtitle="Everyday campus services that keep learning practical and life on campus manageable."
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {textFacilities.map((facility) => {
              const Icon = facilityIcon(facility.id);
              return (
                <article
                  key={facility.id}
                  id={facility.id}
                  className="scroll-mt-28 rounded-2xl border border-sims-border bg-sims-bg p-6 md:p-7 shadow-sm hover:shadow-md hover:border-sims-primary/15 transition-all h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-sims-surface flex items-center justify-center text-sims-primary-2 mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-sims-primary mb-2 leading-snug">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed mb-4">
                    {facility.description}
                  </p>
                  <ul className="space-y-2">
                    {facility.highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-sims-text">
                        <CheckCircle2 className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Labs detail */}
      <section id="labs" className={`${sectionPad} bg-sims-surface-2 border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title="Laboratories in Focus"
            subtitle="SIMS maintains department labs for anatomy & physiology, microbiology, pathology & clinical work, radiology & imaging, and physiotherapy practice."
            className="mb-8 md:mb-10"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8">
            {LABS.filter((lab) => lab.image).map((lab) => (
              <article
                key={lab.id}
                className="lg:col-span-6 rounded-2xl overflow-hidden border border-sims-border bg-white shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <OptimizedImage
                    image={lab.image!}
                    alt={lab.imageAlt ?? lab.title}
                    sizes={IMAGE_SIZES.half}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sims-primary mb-2">{lab.title}</h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed mb-4">
                    {lab.description}
                  </p>
                  <ul className="space-y-2">
                    {lab.highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-sims-text">
                        <CheckCircle2 className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {LABS.filter((lab) => !lab.image).map((lab) => (
              <article
                key={lab.id}
                className="rounded-2xl border border-sims-border bg-white p-6 shadow-sm h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-sims-surface flex items-center justify-center text-sims-primary-2 mb-3">
                  <FlaskConical className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-sims-primary mb-2">{lab.title}</h3>
                <p className="text-sm text-sims-text-muted leading-relaxed mb-4">
                  {lab.description}
                </p>
                <ul className="space-y-2">
                  {lab.highlights.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-sims-text">
                      <CheckCircle2 className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-sims-text-muted leading-relaxed max-w-4xl border-l-2 border-sims-primary/20 pl-4">
            {LAB_TOOLS_NOTE}
          </p>
        </div>
      </section>

      {/* Hostel / student life gallery */}
      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <SectionHeading
            title="Hostel & Student Living"
            subtitle="On-campus hostel rooms support rest and study, with separate accommodation for boys and girls."
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {HOSTEL_GALLERY.map((photo) => (
              <div
                key={photo.alt}
                className="rounded-2xl overflow-hidden border border-sims-border shadow-sm aspect-[4/3]"
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
          <p className="mt-6 text-sm md:text-[0.9375rem] text-sims-text-muted leading-relaxed max-w-3xl">
            Hostel living is complemented by canteen dining and transport options for commuting students,
            helping residential and day scholars stay connected to academic schedules.
          </p>
        </div>
      </section>

      {/* Why facilities matter */}
      <section className={`${sectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={containerPad}>
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
              <div
                key={item.title}
                className="rounded-2xl bg-white border border-sims-border p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-sims-primary mb-2">{item.title}</h3>
                <p className="text-sm text-sims-text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 bg-sims-primary text-white">
        <div className={`${containerPad} text-center max-w-3xl mx-auto`}>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
            See the campus for yourself
          </h2>
          <p className="text-white/85 mb-7 leading-relaxed">
            Speak with admissions about programmes, campus facilities, and the next intake — or explore
            courses that match your career path.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white h-12 px-7 font-bold rounded-lg"
              onClick={handleApplyClick}
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white bg-white/10 hover:bg-white hover:text-sims-primary h-12 px-7 font-semibold rounded-lg"
              onClick={handleApplyClick}
            >
              Contact Admissions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 h-12 px-7 font-semibold rounded-lg"
              asChild
            >
              <a href="/#programs">Explore Programs</a>
            </Button>
          </div>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors"
            >
              Back to homepage
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
