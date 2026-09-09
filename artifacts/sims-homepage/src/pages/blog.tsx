import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { SectionHeading } from '@/components/Shared';
import { Button } from '@/components/ui/button';
import { useDocumentMeta } from '@/lib/seo';
import { getPublishedBlogPosts, blogPostPath, isCampusTourPost, isCareerGuidePost, isFeeStructurePost, isNursingUpgradePost } from '@/lib/blog-posts';

const sectionPad = 'py-10 sm:py-14 md:py-16 lg:py-20';
const containerPad = 'container mx-auto px-4 sm:px-5 md:px-6 min-w-0';

export function BlogIndexPage() {
  const [modalOpen, setModalOpen] = useState(false);

  useDocumentMeta(
    'SIMS Blog | Nursing & Admissions Guides | Dehradun',
    'Guides for BPT, B.Sc Nursing, GNM, Post Basic vs M.Sc, fees, and admissions at Sushila Institute of Medical Sciences (SIMS), Dehradun — clear advice for students and parents.',
  );

  return (
    <div className="min-h-[100dvh] bg-sims-bg font-sans selection:bg-sims-primary/20 overflow-x-clip">
      <Header onApplyClick={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onOpenChange={setModalOpen} />

      <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-10 sm:pb-14 md:pb-16 overflow-hidden bg-sims-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-sims-primary via-sims-primary to-sims-primary-2" />
        <div className={`${containerPad} relative z-10`}>
          <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-white/70 mb-3 sm:mb-4">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-amber-300 font-medium">Blog</li>
            </ol>
          </nav>

          <div className="max-w-3xl min-w-0">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-3 sm:mb-4">
              SIMS Blog
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl break-words">
              Practical guides on nursing fees, admissions, and campus life at Sushila Institute of
              Medical Sciences, Dehradun—written for students and parents who want clarity before
              they enrol.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={containerPad}>
          <SectionHeading
            title="Latest articles"
            subtitle="Walk the campus in photos, compare Post Basic vs M.Sc Nursing, then confirm fees with admissions for the 2026–27 intake."
            className="mb-6 sm:mb-10"
          />

          <ul className="grid grid-cols-1 gap-4 sm:gap-6 max-w-4xl">
            {getPublishedBlogPosts().map((post) => {
              const ctaLabel = isFeeStructurePost(post)
                ? 'Read fee guide'
                : isNursingUpgradePost(post)
                  ? 'Compare PB B.Sc vs M.Sc'
                  : isCareerGuidePost(post)
                    ? 'Read BPT career guide'
                    : isCampusTourPost(post)
                      ? 'Take the campus photo tour'
                      : 'Read college guide';
              return (
                <li key={post.slug} className="min-w-0">
                  <article className="rounded-2xl border border-sims-border bg-white p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md hover:border-sims-primary/25 transition-all duration-200">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-sims-text-muted mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-sims-primary leading-snug mb-2 sm:mb-3 break-words">
                      <Link
                        href={blogPostPath(post.slug)}
                        className="hover:text-sims-primary-2 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm md:text-base text-sims-text-muted leading-relaxed mb-4 sm:mb-5 break-words">
                      {post.excerpt}
                    </p>
                    <Button
                      asChild
                      className="w-full sm:w-auto bg-sims-primary hover:bg-sims-primary-2 text-white font-semibold rounded-lg min-h-11"
                    >
                      <Link href={blogPostPath(post.slug)}>
                        {ctaLabel}
                        <ArrowRight className="w-4 h-4 ml-2 shrink-0" aria-hidden="true" />
                      </Link>
                    </Button>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
