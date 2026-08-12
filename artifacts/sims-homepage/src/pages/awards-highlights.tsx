import React, { useState } from 'react';
import { Link } from 'wouter';
import { Cpu, HeartHandshake, Leaf, Droplets, Stethoscope, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { AboutSectionNav } from '@/components/AboutSectionNav';
import { SectionHeading } from '@/components/Shared';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { useDocumentMeta } from '@/lib/seo';
import {
  AI_HIGHLIGHT,
  AWARDS_FEATURED,
  AWARDS_PAGE,
  AWARDS_RECOGNITION,
  IMPACT_ACTIVITIES,
  IMPACT_INTRO,
} from '@/lib/about';

const sectionPad = 'py-14 md:py-16 lg:py-20';
const containerPad = 'container mx-auto px-4 md:px-6';

const impactIcons = [Stethoscope, Leaf, Droplets, HeartHandshake] as const;

/** Landscape highlight photos are ~460–880px wide — avoid upscaling past native size. */
const featuredSizes = '(max-width: 1023px) 100vw, 70vw';
const cardImageSizes = '(max-width: 767px) 100vw, 50vw';

export function AwardsHighlightsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  useDocumentMeta(AWARDS_PAGE.metaTitle, AWARDS_PAGE.metaDescription);

  return (
    <div className="min-h-[100dvh] bg-sims-bg font-sans selection:bg-sims-primary/20">
      <Header onApplyClick={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onOpenChange={setModalOpen} />

      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-16 overflow-hidden bg-sims-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-sims-primary via-sims-primary to-sims-primary-2" />
        <div className={`${containerPad} relative z-10`}>
          <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-4">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-amber-300 font-medium">Awards & Highlights</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              {AWARDS_PAGE.title}
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 max-w-2xl">
              {AWARDS_PAGE.subtitle}
            </p>
            <AboutSectionNav />
          </div>
        </div>
      </section>

      {/* Campus facade — establishing shot (centered on desktop) */}
      <section className="bg-white pt-8 md:pt-10">
        <div className={containerPad}>
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-sims-border shadow-sm aspect-[877/391]">
            <OptimizedImage
              image={AWARDS_FEATURED.facade.image}
              alt={AWARDS_FEATURED.facade.alt}
              sizes="(max-width: 1023px) 100vw, 896px"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <div className="rounded-2xl border border-sims-border bg-sims-bg overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 p-6 sm:p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
                  {AI_HIGHLIGHT.eyebrow}
                </p>
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-sims-surface text-sims-primary-2 flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-sims-primary leading-tight">
                    {AI_HIGHLIGHT.title}
                  </h2>
                </div>
                <div className="space-y-4 text-sm md:text-[0.9375rem] text-sims-text-muted leading-relaxed">
                  {AI_HIGHLIGHT.paragraphs.map((para) => (
                    <p key={para.slice(0, 48)}>{para}</p>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 bg-sims-primary text-white p-6 sm:p-8 flex flex-col justify-center gap-3 border-t lg:border-t-0 lg:border-l border-sims-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  Key highlights
                </p>
                {AI_HIGHLIGHT.badges.map((badge) => (
                  <div key={badge} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-sm text-white/90 leading-snug">{badge}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prestige recognition — Emerging Uttarakhand */}
      <section className="pb-10 md:pb-12 bg-white">
        <div className={containerPad}>
          <figure className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-sims-border bg-sims-bg shadow-sm">
            <div className="aspect-[552/362]">
              <OptimizedImage
                image={AWARDS_FEATURED.emergingUttarakhand.image}
                alt={AWARDS_FEATURED.emergingUttarakhand.alt}
                sizes="(max-width: 1023px) 100vw, 768px"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <figcaption className="px-5 py-4 md:px-6 text-sm md:text-[0.9375rem] text-sims-text-muted leading-relaxed border-t border-sims-border">
              {AWARDS_FEATURED.emergingUttarakhand.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Recognition + campus spirit */}
      <section className="pb-14 md:pb-16 bg-white">
        <div className={containerPad}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            <figure className="overflow-hidden rounded-2xl border border-sims-border bg-sims-bg shadow-sm flex flex-col">
              <div className="aspect-[613/235] flex-grow">
                <OptimizedImage
                  image={AWARDS_FEATURED.ceremony.image}
                  alt={AWARDS_FEATURED.ceremony.alt}
                  sizes={featuredSizes}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-sims-text-muted leading-relaxed border-t border-sims-border">
                {AWARDS_FEATURED.ceremony.caption}
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-sims-border bg-sims-bg shadow-sm flex flex-col">
              <div className="aspect-[612/268] flex-grow">
                <OptimizedImage
                  image={AWARDS_FEATURED.campusSpirit.image}
                  alt={AWARDS_FEATURED.campusSpirit.alt}
                  sizes={featuredSizes}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm text-sims-text-muted leading-relaxed border-t border-sims-border">
                {AWARDS_FEATURED.campusSpirit.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Recognition gallery */}
      <section className={`${sectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title="Recognition & Achievements"
            subtitle="Moments of excellence — from regional awards to campus celebrations."
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {AWARDS_RECOGNITION.map((item) => (
              <figure
                key={item.id}
                className="overflow-hidden rounded-2xl border border-sims-border bg-white shadow-sm flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-sims-surface-2">
                  <OptimizedImage
                    image={item.image}
                    alt={item.alt}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-sims-text-muted leading-snug border-t border-sims-border">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-sims-surface-2`}>
        <div className={containerPad}>
          <SectionHeading
            title="Making an Impact"
            subtitle="Real learning through real community outreach."
            className="mb-4"
          />
          <p className="text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base mb-8 md:mb-10 max-w-3xl">
            {IMPACT_INTRO}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {IMPACT_ACTIVITIES.map((activity, index) => {
              const Icon = impactIcons[index % impactIcons.length];
              return (
                <article
                  key={activity.id}
                  className="rounded-2xl border border-sims-border bg-white overflow-hidden shadow-sm flex flex-col h-full"
                >
                  {activity.image ? (
                    <div className="aspect-[16/9] overflow-hidden bg-sims-bg border-b border-sims-border">
                      <OptimizedImage
                        image={activity.image}
                        alt={activity.imageAlt}
                        sizes={cardImageSizes}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  ) : null}
                  <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-grow">
                    <div className="w-11 h-11 rounded-xl bg-sims-surface text-sims-primary-2 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-sims-primary mb-3 leading-snug">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-sims-text-muted leading-relaxed mb-5 flex-grow">
                      {activity.summary}
                    </p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-sims-text-muted mb-2">
                        Highlights
                      </p>
                      <ul className="space-y-2">
                        {activity.highlights.map((item) => (
                          <li key={item} className="flex gap-2.5 text-sm text-sims-text">
                            <CheckCircle2
                              className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-sims-primary text-white">
        <div className={`${containerPad} text-center max-w-3xl mx-auto`}>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3 leading-tight">
            Be part of SIMS’s next chapter
          </h2>
          <p className="text-white/85 mb-7 leading-relaxed">
            From AI-enabled learning to community service — discover programmes and apply today.
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
              <a href="/#programs">Explore Programs</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 h-12 px-7 font-semibold rounded-lg"
              asChild
            >
              <Link href="/about">About SIMS</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
