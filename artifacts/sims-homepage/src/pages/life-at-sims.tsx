import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { CheckCircle2, ArrowRight, X } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { SectionHeading } from '@/components/Shared';
import { Button } from '@/components/ui/button';
import {
  FACULTY_SHOWCASE,
  LIFE_ACTIVITIES,
  LIFE_GALLERY,
  LIFE_HERO,
  LIFE_PAGE,
  LIFE_VALUES,
} from '@/lib/life-at-sims';

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

export function LifeAtSimsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useDocumentMeta(
    'Life at SIMS | Sushila Institute of Medical Sciences',
    LIFE_PAGE.metaDescription,
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  return (
    <div className="min-h-[100dvh] bg-sims-bg font-sans selection:bg-sims-primary/20">
      <Header onApplyClick={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onOpenChange={setModalOpen} />

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={LIFE_HERO.src}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sims-primary/94 via-sims-primary/78 to-sims-primary/35" />
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
                  <li className="text-amber-300 font-medium">Life at SIMS</li>
                </ol>
              </nav>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                {LIFE_PAGE.title}
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
                {LIFE_PAGE.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white h-12 px-7 font-bold rounded-lg"
                  onClick={() => setModalOpen(true)}
                >
                  Apply Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white bg-white/10 hover:bg-white hover:text-sims-primary h-12 px-7 font-semibold backdrop-blur-sm rounded-lg"
                  asChild
                >
                  <a href="/#programs">Explore Programs</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white bg-transparent hover:bg-white/10 h-12 px-7 font-semibold rounded-lg"
                  asChild
                >
                  <Link href="/contact-us">Contact Admissions</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3]">
                <img
                  src={LIFE_HERO.src}
                  alt={LIFE_HERO.alt}
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
          <SectionHeading title="Campus Experience" className="mb-6" />
          <div className="space-y-4 text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base">
            {LIFE_PAGE.intro.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className={`${sectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title="Activities & Campus Life"
            subtitle="Extracurricular programmes at SIMS support leadership, creativity, service, and wellness alongside healthcare studies."
            className="mb-10 md:mb-12"
          />
          <div className="space-y-12 md:space-y-16">
            {LIFE_ACTIVITIES.map((activity, index) => {
              const reverse = index % 2 === 1;
              return (
                <article
                  key={activity.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
                >
                  <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : ''}`}>
                    <h3 className="font-display text-2xl md:text-[1.75rem] font-bold text-sims-primary leading-tight mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-sims-text-muted leading-relaxed text-[0.975rem] mb-5">
                      {activity.description}
                    </p>
                    <ul className="space-y-2.5">
                      {activity.highlights.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-sims-text">
                          <CheckCircle2 className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`lg:col-span-6 ${reverse ? 'lg:order-1' : ''}`}>
                    <button
                      type="button"
                      className="w-full rounded-2xl overflow-hidden border border-sims-border shadow-sm aspect-[4/3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/40"
                      onClick={() =>
                        setLightbox({ src: activity.image, alt: activity.imageAlt })
                      }
                    >
                      <img
                        src={activity.image}
                        alt={activity.imageAlt}
                        className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                        loading="lazy"
                      />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <SectionHeading
            title="Campus Gallery"
            subtitle="Moments from cultural programmes, outreach drives, celebrations, and everyday student life."
            centered
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[240px]">
            {LIFE_GALLERY.map((photo) => (
              <button
                key={photo.alt}
                type="button"
                onClick={() => setLightbox({ src: photo.src, alt: photo.alt })}
                className={`relative rounded-xl md:rounded-2xl overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary/40 ${
                  photo.large ? 'sm:row-span-2' : 'row-span-1'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sims-primary/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty showcase — photos only */}
      <section className={`${sectionPad} bg-sims-surface-2 border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title="Our Faculty"
            subtitle="Educators and mentors who guide classroom learning, skills practice, and student growth."
            centered
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {FACULTY_SHOWCASE.map((photo) => (
              <div
                key={photo.alt}
                className="rounded-2xl overflow-hidden border border-sims-border shadow-sm aspect-[3/4] bg-white"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <SectionHeading
            title="What Campus Life Builds"
            subtitle="Healthcare education at SIMS pairs academic rigour with habits that matter in patient care."
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {LIFE_VALUES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-sims-border bg-sims-bg p-6 shadow-sm"
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
            Be part of life at SIMS
          </h2>
          <p className="text-white/85 mb-7 leading-relaxed">
            Explore programmes, talk to admissions, or start your application for the current intake.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white h-12 px-7 font-bold rounded-lg"
              onClick={() => setModalOpen(true)}
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white bg-white/10 hover:bg-white hover:text-sims-primary h-12 px-7 font-semibold rounded-lg"
              asChild
            >
              <Link href="/contact-us">Contact Us</Link>
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
              href="/facilities"
              className="inline-flex items-center text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors"
            >
              View campus facilities
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Simple lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close image preview"
            onClick={() => setLightbox(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
