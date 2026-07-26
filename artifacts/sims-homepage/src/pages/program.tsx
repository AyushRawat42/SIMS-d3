import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'wouter';
import { ArrowRight, CheckCircle2, Clock, GraduationCap, BookOpen, Briefcase, Target } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { SectionHeading } from '@/components/Shared';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { IMAGE_SIZES } from '@/lib/responsive-image';
import { usePreloadHeroImage } from '@/hooks/usePreloadHeroImage';
import NotFound from '@/pages/not-found';
import {
  PROGRAM_CATEGORIES,
  getProgramBySlug,
  getRelatedPrograms,
  programPath,
  type Program,
} from '@/lib/programs';

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

function HighlightIcon({ label }: { label: string }) {
  if (label === 'Duration') return <Clock className="w-5 h-5" />;
  if (label === 'Level') return <GraduationCap className="w-5 h-5" />;
  if (label === 'Learning Focus') return <Target className="w-5 h-5" />;
  if (label === 'Career Pathways') return <Briefcase className="w-5 h-5" />;
  return <BookOpen className="w-5 h-5" />;
}

function ProgramContent({ program }: { program: Program }) {
  const [modalOpen, setModalOpen] = useState(false);
  const related = getRelatedPrograms(program);
  const categoryLabel =
    PROGRAM_CATEGORIES.find((c) => c.id === program.category)?.label ?? 'Programs';

  useDocumentMeta(
    `${program.name} | SIMS — Sushila Institute of Medical Sciences`,
    program.metaDescription,
  );
  usePreloadHeroImage(program.image);

  const handleApplyClick = () => setModalOpen(true);

  return (
    <div className="min-h-[100dvh] bg-sims-bg font-sans selection:bg-sims-primary/20">
      <Header onApplyClick={handleApplyClick} />
      <ContactModal isOpen={modalOpen} onOpenChange={setModalOpen} />

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            image={program.image}
            alt=""
            aria-hidden="true"
            sizes={IMAGE_SIZES.hero}
            priority
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sims-primary/94 via-sims-primary/82 to-sims-primary/45" />
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
                  <li>
                    <a href="/#programs" className="hover:text-white transition-colors">
                      Programs
                    </a>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-amber-300 font-medium truncate max-w-[14rem] sm:max-w-none">
                    {program.shortName}
                  </li>
                </ol>
              </nav>

              <p className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                {categoryLabel}
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                {program.name}
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
                {program.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
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
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3] bg-sims-primary/30">
                <OptimizedImage
                  image={program.image}
                  alt={program.imageAlt}
                  sizes={IMAGE_SIZES.heroFeatured}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeading title="Program Overview" className="mb-6" />
              <div className="space-y-4 text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base">
                {program.overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-sims-border bg-sims-bg p-6 md:p-7 shadow-sm h-full">
                <h2 className="font-display text-xl font-bold text-sims-primary mb-5">
                  Key Highlights
                </h2>
                <ul className="space-y-4">
                  {program.highlights.map((item) => (
                    <li key={item.label} className="flex gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-sims-surface flex items-center justify-center text-sims-primary-2 shrink-0">
                        <HighlightIcon label={item.label} />
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-sims-text-muted">
                          {item.label}
                        </p>
                        <p className="text-sm md:text-[0.9375rem] font-semibold text-sims-text leading-snug mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className={`${sectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title="What You’ll Study"
            subtitle="A practical overview of core learning areas. Exact semester-wise syllabi follow university guidelines and may be confirmed with admissions."
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {program.curriculum.map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl border border-sims-border p-5 md:p-6 shadow-sm flex gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-sims-primary-2 shrink-0 mt-0.5" />
                <p className="text-sm md:text-[0.9375rem] text-sims-text leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <SectionHeading
            title="Career Opportunities"
            subtitle="Graduates typically explore roles across clinical, diagnostic, and community healthcare settings."
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {program.careers.map((role) => (
              <div
                key={role}
                className="rounded-2xl bg-sims-surface-2/70 border border-sims-border/70 p-5 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-sims-primary shrink-0 mt-0.5" />
                  <p className="font-semibold text-sims-text text-sm md:text-[0.9375rem] leading-snug">
                    {role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SIMS */}
      <section className={`${sectionPad} bg-sims-surface-2`}>
        <div className={containerPad}>
          <SectionHeading title="Why Choose SIMS?" className="mb-8 md:mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl">
            {[
              {
                title: 'Hands-on clinical learning',
                text: 'Purpose-built labs and hospital-linked training help students connect classroom knowledge with real patient-care environments.',
              },
              {
                title: 'Experienced faculty mentorship',
                text: 'Educators and practicing professionals guide students through theory, skills labs, and clinical postings.',
              },
              {
                title: 'Placement-oriented support',
                text: 'SIMS provides career counselling and placement assistance through its hospital and healthcare partner network.',
              },
              {
                title: 'Dehradun campus ecosystem',
                text: 'Students learn in a focused academic setting with facilities that support nursing and allied health education.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-sims-border p-6 shadow-sm"
              >
                <h3 className="font-bold text-sims-primary text-lg mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm md:text-[0.9375rem] text-sims-text-muted leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related programs */}
      {related.length > 0 && (
        <section className={`${sectionPad} bg-white border-t border-sims-border/60`}>
          <div className={containerPad}>
            <SectionHeading
              title="Explore Related Programs"
              subtitle={`Other ${categoryLabel} programs at SIMS`}
              className="mb-8"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((relatedProgram) => (
                <Link
                  key={relatedProgram.slug}
                  href={programPath(relatedProgram.slug)}
                  className="group rounded-2xl border border-sims-border bg-sims-bg p-6 hover:bg-white hover:shadow-md hover:border-sims-primary/20 transition-all"
                >
                  <p className="text-xs font-semibold text-sims-primary-2 mb-2">
                    {relatedProgram.duration}
                  </p>
                  <h3 className="font-bold text-sims-primary group-hover:text-sims-primary-2 transition-colors leading-snug mb-2">
                    {relatedProgram.name}
                  </h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed line-clamp-3 mb-4">
                    {relatedProgram.cardDescription}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-sims-primary-2">
                    View program
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="/#programs"
                className="inline-flex items-center text-sm font-semibold text-sims-primary hover:text-sims-primary-2 transition-colors"
              >
                View all programs
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 md:py-16 bg-sims-primary text-white">
        <div className={`${containerPad} text-center max-w-3xl mx-auto`}>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Ready to begin your journey in {program.shortName}?
          </h2>
          <p className="text-white/85 mb-7 leading-relaxed">
            Talk to our admissions team about eligibility, documentation, and the next intake.
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
              <a href="/#programs">Explore Other Programs</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export function ProgramPage() {
  const params = useParams<{ slug?: string }>();
  const program = params.slug ? getProgramBySlug(params.slug) : undefined;

  if (!program) {
    return <NotFound />;
  }

  return <ProgramContent key={program.slug} program={program} />;
}
