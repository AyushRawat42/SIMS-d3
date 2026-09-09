import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { SectionHeading } from '@/components/Shared';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { IMAGE_SIZES } from '@/lib/responsive-image';
import { useDocumentMeta } from '@/lib/seo';
import { getProgramsByCategory, programPath } from '@/lib/programs';
import { RelatedBlogGuides } from '@/components/RelatedBlogGuides';
import { NURSING_HUB_GUIDES } from '@/lib/blog-internal-links';

const sectionPad = 'py-14 md:py-16 lg:py-20';
const containerPad = 'container mx-auto px-4 md:px-6';

const NURSING_PAGE = {
  title: 'Nursing Programs at SIMS Dehradun',
  subtitle:
    'Explore B.Sc Nursing, GNM, Post Basic B.Sc Nursing, and M.Sc Nursing at Sushila Institute of Medical Sciences—clinical labs, hospital exposure, and HNBUMU-aligned pathways.',
  metaTitle: 'Nursing College Dehradun | B.Sc Nursing, GNM & M.Sc | SIMS',
  metaDescription:
    'SIMS nursing college Dehradun — B.Sc Nursing, GNM, Post Basic B.Sc Nursing, and M.Sc Nursing with clinical training, modern labs, and HNBUMU affiliation.',
};

export function NursingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const programs = getProgramsByCategory('nursing');

  useDocumentMeta(NURSING_PAGE.metaTitle, NURSING_PAGE.metaDescription);

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
              <li className="text-amber-300 font-medium">Nursing</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              {NURSING_PAGE.title}
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-7 max-w-2xl">
              {NURSING_PAGE.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
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
                className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-sims-primary h-12 px-7 font-semibold rounded-lg"
                asChild
              >
                <Link href="/admissions">Admissions procedure</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={containerPad}>
          <SectionHeading
            title="Choose your nursing pathway"
            subtitle="Each program combines classroom learning with skills-lab practice and clinical postings designed for hospital and community care roles."
            className="mb-10"
          />

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {programs.map((program) => (
              <li key={program.slug}>
                <article className="h-full rounded-2xl border border-sims-border bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-sims-primary/25 transition-all duration-200 flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden bg-sims-surface-2">
                    <OptimizedImage
                      image={program.image}
                      alt={program.imageAlt}
                      sizes={IMAGE_SIZES.half}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-sims-primary-2 mb-2">
                      <GraduationCap className="w-4 h-4" aria-hidden="true" />
                      {program.duration} · {program.level}
                    </div>
                    <h2 className="font-display text-xl font-bold text-sims-primary mb-2">
                      {program.name}
                    </h2>
                    <p className="text-sm text-sims-text-muted leading-relaxed mb-5 flex-1">
                      {program.cardDescription}
                    </p>
                    <Button
                      className="bg-sims-primary hover:bg-sims-primary-2 text-white font-semibold rounded-lg w-fit"
                      asChild
                    >
                      <Link href={programPath(program.slug)}>
                        View program
                        <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-12 space-y-8">
            <div className="rounded-2xl border border-sims-border bg-white p-6 md:p-8">
              <p className="text-sm sm:text-base text-sims-text-muted leading-relaxed mb-0">
                Compare fees in the{' '}
                <Link
                  href="/blog/bsc-nursing-gnm-fee-structure-dehradun-2026-27"
                  className="text-sims-primary font-semibold underline underline-offset-2 hover:text-sims-primary-2"
                >
                  B.Sc Nursing & GNM fee structure guide
                </Link>
                , check affiliation with the{' '}
                <Link
                  href="/blog/top-private-bsc-nursing-colleges-dehradun-affiliation-eligibility-checklist"
                  className="text-sims-primary font-semibold underline underline-offset-2 hover:text-sims-primary-2"
                >
                  private college checklist
                </Link>
                , and if you already hold GNM or B.Sc, read{' '}
                <Link
                  href="/blog/post-basic-bsc-nursing-vs-msc-nursing-career-upgrade"
                  className="text-sims-primary font-semibold underline underline-offset-2 hover:text-sims-primary-2"
                >
                  Post Basic B.Sc vs M.Sc Nursing
                </Link>
                . Planning a visit? Use the{' '}
                <Link
                  href="/blog/inside-sims-dehradun-photo-facility-tour-nursing-labs-campus"
                  className="text-sims-primary font-semibold underline underline-offset-2 hover:text-sims-primary-2"
                >
                  campus photo and facility tour
                </Link>
                .
              </p>
            </div>
            <RelatedBlogGuides
              title="Nursing articles to read next"
              subtitle="Each guide links back to these programme pages so you can move from research to application."
              guides={NURSING_HUB_GUIDES}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
