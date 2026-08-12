import React, { useState } from 'react';
import { Link } from 'wouter';
import { Compass, Target } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { AboutSectionNav } from '@/components/AboutSectionNav';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { useDocumentMeta } from '@/lib/seo';
import {
  ABOUT_MISSION,
  ABOUT_VISION,
  VISION_MISSION_CLOSING,
  VISION_MISSION_PAGE,
} from '@/lib/about';
import {
  mission_skills_lab,
  vision_inclusive_classroom,
} from '@/lib/responsive-images.generated';

const sectionPad = 'py-14 md:py-16 lg:py-20';
const containerPad = 'container mx-auto px-4 md:px-6';

/** Portrait photos are ~400px wide — keep display near native size on desktop. */
const portraitSizes = '(max-width: 1023px) min(100vw - 2rem, 420px), 380px';

export function VisionMissionPage() {
  const [modalOpen, setModalOpen] = useState(false);

  useDocumentMeta(VISION_MISSION_PAGE.metaTitle, VISION_MISSION_PAGE.metaDescription);

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
              <li className="text-amber-300 font-medium">Vision & Mission</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              {VISION_MISSION_PAGE.title}
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 max-w-2xl">
              {VISION_MISSION_PAGE.subtitle}
            </p>
            <AboutSectionNav />
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <div className="space-y-8 md:space-y-10">
            {/* Vision — text left, inclusive classroom photo right */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center rounded-2xl border border-sims-border bg-sims-bg p-5 sm:p-6 md:p-8 shadow-sm">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="w-11 h-11 rounded-xl bg-sims-surface text-sims-primary-2 flex items-center justify-center mb-5">
                  <Compass className="w-5 h-5" aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
                  Vision
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-sims-primary mb-4 leading-tight">
                  {ABOUT_VISION.title}
                </h2>
                <p className="text-base md:text-lg font-semibold text-sims-text leading-relaxed mb-5">
                  {ABOUT_VISION.lead}
                </p>
                <div className="space-y-4 text-sm md:text-[0.9375rem] text-sims-text-muted leading-relaxed">
                  {ABOUT_VISION.paragraphs.map((para) => (
                    <p key={para.slice(0, 40)}>{para}</p>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="mx-auto max-w-[380px] lg:max-w-none lg:ml-auto lg:mr-0 overflow-hidden rounded-2xl border border-sims-border bg-white shadow-sm aspect-[402/442]">
                  <OptimizedImage
                    image={vision_inclusive_classroom}
                    alt="SIMS educator teaching nursing students in an inclusive classroom setting"
                    sizes={portraitSizes}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </article>

            {/* Mission — skills-lab photo left, text right */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center rounded-2xl border border-sims-border bg-sims-primary text-white p-5 sm:p-6 md:p-8 shadow-sm">
              <div className="lg:col-span-5">
                <div className="mx-auto max-w-[380px] lg:max-w-none lg:mr-auto lg:ml-0 overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-sm aspect-[395/486]">
                  <OptimizedImage
                    image={mission_skills_lab}
                    alt="SIMS instructor demonstrating clinical skills training with a medical mannequin in the nursing skills lab"
                    sizes={portraitSizes}
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="w-11 h-11 rounded-xl bg-white/15 text-amber-300 flex items-center justify-center mb-5">
                  <Target className="w-5 h-5" aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                  Mission
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                  {ABOUT_MISSION.title}
                </h2>
                <p className="text-base md:text-lg font-semibold text-white leading-relaxed mb-5">
                  {ABOUT_MISSION.lead}
                </p>
                <div className="space-y-4 text-sm md:text-[0.9375rem] text-white/85 leading-relaxed">
                  {ABOUT_MISSION.paragraphs.map((para) => (
                    <p key={para.slice(0, 40)}>{para}</p>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <div className="mt-8 md:mt-10 rounded-2xl border border-sims-border bg-sims-surface-2 p-6 md:p-8">
            <p className="text-[0.975rem] md:text-base text-sims-text-muted leading-relaxed max-w-4xl">
              {VISION_MISSION_CLOSING}
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-sims-primary text-white">
        <div className={`${containerPad} text-center max-w-3xl mx-auto`}>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3 leading-tight">
            Join a values-driven healthcare journey
          </h2>
          <p className="text-white/85 mb-7 leading-relaxed">
            Learn more about SIMS leadership, campus highlights, or speak with admissions.
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
              <Link href="/leadership">Leadership Talk</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 h-12 px-7 font-semibold rounded-lg"
              asChild
            >
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
