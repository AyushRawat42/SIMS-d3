import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CalendarDays, Clock, Search } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { SectionHeading } from '@/components/Shared';
import { Button } from '@/components/ui/button';
import { usePageSeo } from '@/lib/seo';
import {
  getPublishedBlogPosts,
  blogDateLabel,
  blogPostPath,
  isCampusTourPost,
  isCareerGuidePost,
  isFeeStructurePost,
  isNursingUpgradePost,
  isResourceGuidePost,
  type BlogCategory,
} from '@/lib/blog-posts';

const sectionPad = 'py-10 sm:py-14 md:py-16 lg:py-20';
const containerPad = 'container mx-auto px-4 sm:px-5 md:px-6 min-w-0';
const BLOG_CATEGORIES: Array<'All' | BlogCategory> = [
  'All',
  'Nursing',
  'Physiotherapy & Paramedical',
  'HNBUMU Exams & Counseling',
  'Campus & Student Life',
];

export function BlogIndexPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'All' | BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase();
  const posts = getPublishedBlogPosts().filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const searchText = [post.title, post.excerpt, ...post.keywords].join(' ').toLocaleLowerCase();
    return matchesCategory && (!normalizedQuery || searchText.includes(normalizedQuery));
  });

  usePageSeo('/blog');

  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-sims-bg font-sans selection:bg-sims-primary/20">
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
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl break-words mb-6">
              Practical guides on nursing fees, admissions, and campus life at Sushila Institute of
              Medical Sciences, Dehradun—written for students and parents who want clarity before
              they enrol.
            </p>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white h-12 px-7 font-bold rounded-lg"
              onClick={() => setModalOpen(true)}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={containerPad}>
          <div className="mb-6 space-y-4 sm:mb-8">
            <div
              role="group"
              aria-label="Filter blog posts by category"
              className="flex gap-2 overflow-x-auto no-scrollbar pb-2"
            >
              {BLOG_CATEGORIES.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedCategory(category)}
                    className={`min-h-[48px] shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors ${
                      isSelected
                        ? 'border-sims-primary bg-sims-primary text-white'
                        : 'border-sims-border bg-white text-sims-primary hover:border-sims-primary/50'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
            <label className="relative block w-full max-w-xl">
              <span className="sr-only">Search blog articles</span>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-sims-text-muted"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search articles by topic or course"
                className="min-h-[48px] w-full rounded-xl border border-sims-border bg-white py-3 pl-12 pr-4 text-base text-sims-text outline-none transition focus:border-sims-primary focus:ring-2 focus:ring-sims-primary/20"
              />
            </label>
          </div>

          <SectionHeading
            title="Latest articles"
            subtitle="Walk the campus in photos, compare Post Basic vs M.Sc Nursing, then confirm fees with admissions for the 2026–27 intake."
            className="mb-6 sm:mb-10"
          />

          {posts.length > 0 ? (
            <ul className="grid grid-cols-1 gap-4 sm:gap-6 max-w-4xl">
              {posts.map((post) => {
              const ctaLabel = isFeeStructurePost(post)
                ? 'Read fee guide'
                : isNursingUpgradePost(post)
                  ? 'Compare PB B.Sc vs M.Sc'
                  : isCareerGuidePost(post)
                    ? 'Read BPT career guide'
                    : isCampusTourPost(post)
                      ? 'Take the campus photo tour'
                      : isResourceGuidePost(post)
                        ? post.slug === 'hnbumu-nursing-paramedical-entrance-exam-preparation-syllabus'
                          ? 'View the HNBUMU study plan'
                          : post.slug === 'bpt-vs-bsc-nursing-career-scope-comparison'
                            ? 'Compare BPT and B.Sc Nursing'
                            : post.slug === 'hospital-clinical-postings-practical-training-sims-dehradun'
                              ? 'Explore clinical training'
                              : post.slug === 'scholarships-education-loan-guide-nursing-paramedical-uttarakhand'
                                ? 'Read the scholarship guide'
                                : post.slug.startsWith('hnbumu')
                                  ? 'Read HNBUMU counseling guide'
                                  : 'Compare B.Sc, GNM and BPT'
                        : 'Read college guide';
              return (
                <li key={post.slug} className="min-w-0">
                  <article className="rounded-2xl border border-sims-border bg-white p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md hover:border-sims-primary/25 transition-all duration-200">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-sims-text-muted mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <time dateTime={post.publishedAt}>{blogDateLabel(post.publishedAt)}</time>
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
                    <p className="text-base sm:text-lg text-sims-text-muted leading-relaxed mb-4 sm:mb-5 break-words">
                      {post.excerpt}
                    </p>
                    <Button
                      asChild
                      className="w-full sm:w-auto bg-sims-primary hover:bg-sims-primary-2 text-white font-semibold rounded-lg min-h-[48px]"
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
          ) : (
            <p className="max-w-4xl rounded-2xl border border-sims-border bg-white p-6 text-base leading-relaxed text-sims-text-muted">
              No articles match that search. Try another keyword or choose a different category.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
