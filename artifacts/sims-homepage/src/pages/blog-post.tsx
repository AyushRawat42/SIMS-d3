import React, { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link, useLocation, useParams } from 'wouter';
import {
  Download,
  MessageCircle,
  CalendarDays,
  Clock,
  AlertTriangle,
  Building2,
  FlaskConical,
  GraduationCap,
  ShieldCheck,
  Hospital,
  Users,
  BadgeCheck,
  Activity,
  Briefcase,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  IdCard,
  Stethoscope,
} from 'lucide-react';
import { OptimizedImage } from '@/components/OptimizedImage';
import { IMAGE_SIZES } from '@/lib/responsive-image';
import { CONTACT_DETAILS, MAP_CONFIG } from '@/lib/contact';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { SectionHeading } from '@/components/Shared';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { useDocumentMeta, useJsonLd } from '@/lib/seo';
import {
  buildBlogPostingJsonLd,
  buildFaqPageJsonLd,
  counselorWhatsappHref,
  feePdfHref,
  getBlogPost,
  isBlogPostPublished,
  isCampusTourPost,
  isCareerGuidePost,
  isCollegeGuidePost,
  isFeeStructurePost,
  isNursingUpgradePost,
  isPublicSiteHref,
  type BlogPost,
  type CampusTourPost,
  type CareerGuidePost,
  type ChecklistRow,
  type CollegeGuidePost,
  type FeeComparisonRow,
  type FeeStructurePost,
  type NursingUpgradePost,
  type RichPart,
  type SalaryRow,
  type TourFigure,
  type UpgradeCompareRow,
} from '@/lib/blog-posts';
import NotFound from '@/pages/not-found';
import { cn } from '@/lib/utils';

const sectionPad = 'py-10 sm:py-14 md:py-16 lg:py-20';
const containerPad = 'container mx-auto px-4 sm:px-5 md:px-6 min-w-0';
const UNLISTED_BLOG_SLUGS = new Set(['bsc-nursing-gnm-fee-structure-dehradun-2026-27']);

function publicNavLinks<T extends { href: string }>(links: T[]): T[] {
  return links.filter((link) => isPublicSiteHref(link.href));
}

function BlogCtaStrip({
  onApplyClick,
  applyLabel = 'Apply Now',
  secondaryHref,
  secondaryLabel,
  secondaryIcon = 'download',
  whatsappHref,
  whatsappLabel,
  className,
}: {
  onApplyClick?: () => void;
  applyLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  secondaryIcon?: 'download' | 'link';
  whatsappHref: string;
  whatsappLabel: string;
  className?: string;
}) {
  const btnClass =
    'w-full sm:w-auto min-h-12 h-auto py-3 px-4 sm:px-6 font-bold rounded-lg whitespace-normal text-center leading-snug justify-center';

  return (
    <div className={cn('flex flex-col sm:flex-row sm:flex-wrap gap-3 w-full max-w-full', className)}>
      {onApplyClick ? (
        <Button
          type="button"
          size="lg"
          className={cn(btnClass, 'bg-amber-500 hover:bg-amber-600 text-white')}
          onClick={onApplyClick}
        >
          <span className="min-w-0">{applyLabel}</span>
        </Button>
      ) : null}
      {secondaryHref && secondaryLabel ? (
        <Button
          size="lg"
          className={cn(
            btnClass,
            onApplyClick
              ? 'bg-white text-sims-primary hover:bg-sims-surface-2'
              : 'bg-amber-500 hover:bg-amber-600 text-white',
          )}
          asChild
        >
          {secondaryIcon === 'download' ? (
            <a href={secondaryHref} target="_blank" rel="noreferrer" className="gap-2">
              <Download className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span className="min-w-0">{secondaryLabel}</span>
            </a>
          ) : (
            <Link href={secondaryHref} className="gap-2">
              <span className="min-w-0">{secondaryLabel}</span>
            </Link>
          )}
        </Button>
      ) : null}
      <Button
        size="lg"
        className={cn(btnClass, 'bg-[#25D366] hover:bg-[#1ebe57] text-white')}
        asChild
      >
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="gap-2">
          <WhatsAppIcon className="w-5 h-5 shrink-0" />
          <span className="min-w-0">{whatsappLabel}</span>
        </a>
      </Button>
    </div>
  );
}

function RichParagraph({ parts }: { parts: RichPart[] }) {
  return (
    <p className="text-sims-text-muted leading-relaxed text-[0.95rem] sm:text-base md:text-[1.05rem] break-words">
      {parts.map((part, i) =>
        part.type === 'link' ? (
          <Link
            key={`${part.href}-${i}`}
            href={part.href}
            className="text-sims-primary font-semibold underline underline-offset-2 hover:text-sims-primary-2 break-words"
          >
            {part.value}
          </Link>
        ) : (
          <React.Fragment key={i}>{part.value}</React.Fragment>
        ),
      )}
    </p>
  );
}

function FeeComparisonMobile({ rows }: { rows: FeeComparisonRow[] }) {
  return (
    <ul className="md:hidden space-y-4">
      {rows.map((row) => (
        <li
          key={row.courseName}
          className="rounded-2xl border border-sims-border bg-white p-4 shadow-sm"
        >
          <div className="flex items-baseline justify-between gap-3 mb-3 pb-3 border-b border-sims-border/70">
            <h3 className="font-display text-lg font-bold text-sims-primary">{row.courseName}</h3>
            <span className="text-xs font-semibold text-sims-primary-2 shrink-0">{row.duration}</span>
          </div>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-sims-text-muted mb-1">
                Official academic fee
              </dt>
              <dd className="text-sims-primary font-medium leading-snug">{row.approxAnnualTuition}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-sims-text-muted mb-1">
                Clinical / lab details
              </dt>
              <dd className="text-sims-text-muted leading-relaxed">{row.clinicalLabDetails}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-sims-text-muted mb-1">
                Eligibility
              </dt>
              <dd className="text-sims-text-muted leading-relaxed">{row.eligibility}</dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}

function UpgradeCompareMobile({ rows }: { rows: UpgradeCompareRow[] }) {
  return (
    <ul className="md:hidden space-y-4">
      {rows.map((row) => (
        <li
          key={row.criterion}
          className="rounded-2xl border border-sims-border bg-white p-4 shadow-sm"
        >
          <h3 className="font-display text-base font-bold text-sims-primary mb-3 pb-3 border-b border-sims-border/70">
            {row.criterion}
          </h3>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-sims-text-muted mb-1">
                Post Basic B.Sc Nursing
              </dt>
              <dd className="text-sims-text-muted leading-relaxed">{row.postBasic}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-sims-text-muted mb-1">
                M.Sc Nursing
              </dt>
              <dd className="text-sims-text-muted leading-relaxed">{row.msc}</dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}

function ChecklistMobile({ rows }: { rows: ChecklistRow[] }) {
  return (
    <ul className="md:hidden space-y-4">
      {rows.map((row) => (
        <li
          key={row.lookFor.slice(0, 40)}
          className="rounded-2xl border border-sims-border bg-white overflow-hidden shadow-sm"
        >
          <div className="p-4 bg-emerald-50/80 border-b border-sims-border/60">
            <p className="text-[11px] font-bold uppercase tracking-wide text-emerald-800 mb-1.5">
              What to look for
            </p>
            <p className="text-sm text-sims-primary font-medium leading-relaxed">{row.lookFor}</p>
          </div>
          <div className="p-4 bg-red-50/50">
            <p className="text-[11px] font-bold uppercase tracking-wide text-red-800 mb-1.5">
              Red flag to avoid
            </p>
            <p className="text-sm text-sims-text-muted leading-relaxed">{row.redFlag}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function BlogShell({
  post,
  modalOpen,
  setModalOpen,
  heroCta,
  children,
  closingExtra,
}: {
  post: BlogPost;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  heroCta: ReactNode;
  children: ReactNode;
  closingExtra?: ReactNode;
}) {
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
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-amber-300 font-medium break-words min-w-0 max-w-full">
                {post.breadcrumbLabel}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/70 mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <time dateTime={post.publishedAt}>Updated {post.updatedAt}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                {post.readingTime}
              </span>
              <span className="min-w-0 break-words">{post.author}</span>
            </div>
            <h1 className="font-display text-[1.35rem] leading-snug sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight mb-5 break-words">
              {post.title}
            </h1>
            {heroCta}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-12 bg-amber-50 border-b border-amber-200/60">
        <div className={`${containerPad} max-w-3xl`}>
          <p className="text-[0.95rem] sm:text-base md:text-lg text-sims-primary font-medium leading-relaxed break-words">
            {post.directAnswer}
          </p>
        </div>
      </section>

      {children}

      <section className={`${sectionPad} bg-sims-bg`} id="faqs">
        <div className={`${containerPad} max-w-3xl`}>
          <SectionHeading
            title="Frequently asked questions"
            subtitle={post.faqSectionSubtitle}
            className="mb-6 sm:mb-8"
          />
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-2xl border border-sims-border px-3 sm:px-4 md:px-6"
          >
            {post.faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger className="text-sims-primary font-semibold text-sm sm:text-base py-4 sm:py-5 hover:no-underline gap-3 text-left items-start [&>svg]:mt-1 [&>svg]:shrink-0">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sims-text-muted leading-relaxed text-sm pb-4 sm:pb-5 break-words">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className={`${sectionPad} bg-sims-primary`}>
        <div className={`${containerPad} max-w-3xl text-center`}>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 break-words">
            {post.closingCtaTitle}
          </h2>
          <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-6 sm:mb-8 break-words">
            {post.closingCtaBody}
          </p>
          <div className="flex justify-stretch sm:justify-center w-full">{closingExtra}</div>
          <p className="mt-6 text-sm text-white/60 flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>
              Prefer a call? Use{' '}
              <button
                type="button"
                className="text-amber-300 hover:underline font-semibold"
                onClick={() => setModalOpen(true)}
              >
                Apply Now
              </button>{' '}
              or visit{' '}
              <Link href="/contact-us" className="text-amber-300 hover:underline">
                Contact Us
              </Link>
              .
            </span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeeStructureBody({
  post,
  whatsappHref,
  onApplyClick,
}: {
  post: FeeStructurePost;
  whatsappHref: string;
  onApplyClick: () => void;
}) {
  const pdfHref = feePdfHref(post);

  return (
    <>
      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={`${containerPad} max-w-3xl`}>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-sims-primary mb-3 sm:mb-4 break-words">
            {post.audienceIntroTitle}
          </h2>
          <p className="text-sims-text-muted leading-relaxed text-[0.95rem] sm:text-base md:text-[1.05rem] break-words">
            {post.audienceIntro}
          </p>
        </div>
      </section>

      <section className={`${sectionPad} bg-white border-y border-sims-border/60`}>
        <div className={`${containerPad} min-w-0`}>
          <SectionHeading
            title="Course comparison: tuition, clinical training & eligibility"
            subtitle={post.comparisonIntro}
            className="mb-6 sm:mb-8 max-w-3xl"
          />

          <FeeComparisonMobile rows={post.comparisonRows} />

          <div className="hidden md:block min-w-0">
            <div className="overflow-x-auto overscroll-x-contain rounded-2xl border border-sims-border shadow-sm max-w-full">
              <table className="w-full min-w-[720px] text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-sims-primary text-white">
                    <th scope="col" className="px-4 py-3.5 font-semibold whitespace-nowrap">
                      Course Name
                    </th>
                    <th scope="col" className="px-4 py-3.5 font-semibold whitespace-nowrap">
                      Duration
                    </th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">
                      Official academic fee
                    </th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">
                      Clinical/Lab Fee Details
                    </th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">
                      Eligibility
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {post.comparisonRows.map((row, i) => (
                    <tr
                      key={row.courseName}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-sims-surface-2/60'}
                    >
                      <th
                        scope="row"
                        className="px-4 py-4 font-bold text-sims-primary align-top whitespace-nowrap"
                      >
                        {row.courseName}
                      </th>
                      <td className="px-4 py-4 text-sims-text-muted align-top whitespace-nowrap">
                        {row.duration}
                      </td>
                      <td className="px-4 py-4 text-sims-primary font-medium align-top">
                        {row.approxAnnualTuition}
                      </td>
                      <td className="px-4 py-4 text-sims-text-muted align-top leading-relaxed">
                        {row.clinicalLabDetails}
                      </td>
                      <td className="px-4 py-4 text-sims-text-muted align-top leading-relaxed">
                        {row.eligibility}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3.5 sm:p-4 md:p-5 max-w-4xl">
            <AlertTriangle
              className="w-5 h-5 text-amber-600 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-sm text-sims-text-muted leading-relaxed break-words">
              {post.feeDisclaimer}
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <BlogCtaStrip
              onApplyClick={onApplyClick}
              secondaryHref={pdfHref}
              secondaryLabel={post.pdfCtaLabel}
              whatsappHref={whatsappHref}
              whatsappLabel={post.whatsappCtaLabel}
            />
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={containerPad}>
          <SectionHeading
            title="Additional costs families should budget for"
            subtitle={post.additionalCostsIntro}
            className="mb-6 sm:mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {post.additionalCosts.map((block, idx) => {
              const Icon = [Building2, GraduationCap, FlaskConical][idx] ?? Building2;
              return (
                <article
                  key={block.title}
                  className="rounded-2xl border border-sims-border bg-white p-4 sm:p-6 shadow-sm"
                >
                  <Icon className="w-6 h-6 text-sims-primary-2 mb-3" aria-hidden="true" />
                  <h3 className="font-display text-base sm:text-lg font-bold text-sims-primary mb-2">
                    {block.title}
                  </h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed mb-3 break-words">
                    {block.summary}
                  </p>
                  <p className="text-sm font-medium text-sims-primary leading-relaxed border-t border-sims-border/70 pt-3 break-words">
                    {block.budgetNote}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-white border-y border-sims-border/60`}>
        <div className={`${containerPad} max-w-3xl`}>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-sims-primary mb-4 sm:mb-6 break-words">
            {post.clinicalJustificationTitle}
          </h2>
          <div className="space-y-4">
            {post.clinicalJustification.map((para) => (
              <p
                key={para.slice(0, 48)}
                className="text-sims-text-muted leading-relaxed text-[0.95rem] sm:text-base md:text-[1.05rem] break-words"
              >
                {para}
              </p>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            {publicNavLinks(post.relatedProgramLinks).map((link) => (
              <Button
                key={link.href}
                variant="outline"
                className="w-full sm:w-auto border-sims-primary text-sims-primary hover:bg-sims-primary hover:text-white font-semibold rounded-lg whitespace-normal h-auto min-h-11 py-2.5"
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const parameterIcons = [BadgeCheck, ShieldCheck, Hospital, Users];

function CollegeGuideBody({ post }: { post: CollegeGuidePost }) {
  return (
    <>
      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={containerPad}>
          <SectionHeading
            title={post.parametersTitle}
            subtitle="Commercial investigation starts here—document these four before any admission deposit."
            className="mb-6 sm:mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {post.parameters.map((param, idx) => {
              const Icon = parameterIcons[idx] ?? BadgeCheck;
              return (
                <article
                  key={param.title}
                  className="rounded-2xl border border-sims-border bg-white p-4 sm:p-6 shadow-sm"
                >
                  <Icon className="w-6 h-6 text-sims-primary-2 mb-3" aria-hidden="true" />
                  <h3 className="font-display text-base sm:text-lg font-bold text-sims-primary mb-2 break-words">
                    {param.title}
                  </h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed break-words">
                    {param.summary}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-white border-y border-sims-border/60`}>
        <div className={`${containerPad} max-w-3xl`}>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-sims-primary mb-4 sm:mb-6 break-words">
            {post.caseStudyTitle}
          </h2>
          <div className="space-y-4">
            {post.caseStudyParagraphs.map((para) => (
              <p
                key={para.slice(0, 48)}
                className="text-sims-text-muted leading-relaxed text-[0.95rem] sm:text-base md:text-[1.05rem] break-words"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={`${containerPad} min-w-0`}>
          <SectionHeading
            title={post.checklistTitle}
            subtitle={post.checklistIntro}
            className="mb-6 sm:mb-8 max-w-3xl"
          />

          <ChecklistMobile rows={post.checklistRows} />

          <div className="hidden md:block min-w-0">
            <div className="overflow-x-auto overscroll-x-contain rounded-2xl border border-sims-border shadow-sm max-w-full">
              <table className="w-full min-w-[640px] text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-sims-primary text-white">
                    <th scope="col" className="px-4 py-3.5 font-semibold w-1/2">
                      What to Look For
                    </th>
                    <th scope="col" className="px-4 py-3.5 font-semibold w-1/2">
                      Red Flags to Avoid
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {post.checklistRows.map((row, i) => (
                    <tr
                      key={row.lookFor.slice(0, 32)}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-sims-surface-2/60'}
                    >
                      <td className="px-4 py-4 text-sims-primary align-top leading-relaxed font-medium">
                        {row.lookFor}
                      </td>
                      <td className="px-4 py-4 text-sims-text-muted align-top leading-relaxed">
                        {row.redFlag}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-white border-y border-sims-border/60`}>
        <div className={`${containerPad} max-w-3xl`}>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-sims-primary mb-4 sm:mb-6 break-words">
            {post.admissionTitle}
          </h2>
          <div className="space-y-4">
            {post.admissionParagraphs.map((parts, i) => (
              <RichParagraph key={i} parts={parts} />
            ))}
          </div>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            {publicNavLinks(post.exploreLinks).map((link) => (
              <Button
                key={link.href}
                variant="outline"
                className="w-full sm:w-auto border-sims-primary text-sims-primary hover:bg-sims-primary hover:text-white font-semibold rounded-lg whitespace-normal h-auto min-h-11 py-2.5"
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SalaryMobile({ rows }: { rows: SalaryRow[] }) {
  return (
    <ul className="md:hidden space-y-4">
      {rows.map((row) => (
        <li
          key={row.sector}
          className="rounded-2xl border border-sims-border bg-white p-4 shadow-sm"
        >
          <h3 className="font-display text-lg font-bold text-sims-primary mb-1">{row.sector}</h3>
          <p className="text-sm text-sims-text-muted leading-relaxed mb-3">{row.roleFocus}</p>
          <p className="text-base font-bold text-sims-primary mb-2">{row.startingPay}</p>
          <p className="text-xs text-sims-text-muted leading-relaxed border-t border-sims-border/70 pt-2">
            {row.growthNote}
          </p>
        </li>
      ))}
    </ul>
  );
}

function CareerGuideBody({ post }: { post: CareerGuidePost }) {
  return (
    <>
      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={`${containerPad} max-w-3xl`}>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-sims-primary mb-3 sm:mb-4 break-words">
            Why BPT demand is rising for PCB students
          </h2>
          <p className="text-sims-text-muted leading-relaxed text-[0.95rem] sm:text-base md:text-[1.05rem] break-words">
            {post.demandIntro}
          </p>
        </div>
      </section>

      <section className={`${sectionPad} bg-white border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title={post.degreeTitle}
            subtitle={post.degreeIntro}
            className="mb-6 sm:mb-10 max-w-3xl"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {post.degreePhases.map((phase, idx) => {
              const Icon = idx === 0 ? GraduationCap : Activity;
              return (
                <article
                  key={phase.title}
                  className="rounded-2xl border border-sims-border bg-sims-bg p-4 sm:p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <Icon className="w-6 h-6 text-sims-primary-2 shrink-0" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-wide text-sims-primary-2 bg-white border border-sims-border rounded-full px-2.5 py-1">
                      {phase.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-sims-primary mb-2 break-words">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed mb-4 break-words">
                    {phase.summary}
                  </p>
                  <ul className="space-y-2">
                    {phase.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex gap-2 text-sm text-sims-primary leading-snug"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="min-w-0 break-words">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={`${containerPad} min-w-0`}>
          <SectionHeading
            title={post.salaryTitle}
            subtitle={post.salaryIntro}
            className="mb-6 sm:mb-8 max-w-3xl"
          />

          <SalaryMobile rows={post.salaryRows} />

          <div className="hidden md:block min-w-0">
            <div className="overflow-x-auto overscroll-x-contain rounded-2xl border border-sims-border shadow-sm max-w-full">
              <table className="w-full min-w-[680px] text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-sims-primary text-white">
                    <th scope="col" className="px-4 py-3.5 font-semibold">
                      Sector
                    </th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">
                      Role focus
                    </th>
                    <th scope="col" className="px-4 py-3.5 font-semibold whitespace-nowrap">
                      Starting pay grade
                    </th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">
                      Growth note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {post.salaryRows.map((row, i) => (
                    <tr
                      key={row.sector}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-sims-surface-2/60'}
                    >
                      <th
                        scope="row"
                        className="px-4 py-4 font-bold text-sims-primary align-top whitespace-nowrap"
                      >
                        {row.sector}
                      </th>
                      <td className="px-4 py-4 text-sims-text-muted align-top leading-relaxed">
                        {row.roleFocus}
                      </td>
                      <td className="px-4 py-4 text-sims-primary font-medium align-top whitespace-nowrap">
                        {row.startingPay}
                      </td>
                      <td className="px-4 py-4 text-sims-text-muted align-top leading-relaxed">
                        {row.growthNote}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3.5 sm:p-4 md:p-5 max-w-4xl">
            <Briefcase className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-sims-text-muted leading-relaxed break-words">
              {post.salaryDisclaimer}
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-white border-y border-sims-border/60`}>
        <div className={`${containerPad} max-w-3xl`}>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-sims-primary mb-4 sm:mb-6 break-words">
            {post.campusTitle}
          </h2>
          <div className="space-y-4">
            {post.campusParagraphs.map((para) => (
              <p
                key={para.slice(0, 48)}
                className="text-sims-text-muted leading-relaxed text-[0.95rem] sm:text-base md:text-[1.05rem] break-words"
              >
                {para}
              </p>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            {publicNavLinks(post.campusLabLinks).map((link) => (
              <Button
                key={link.href}
                variant="outline"
                className="w-full sm:w-auto border-sims-primary text-sims-primary hover:bg-sims-primary hover:text-white font-semibold rounded-lg whitespace-normal h-auto min-h-11 py-2.5"
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={`${containerPad} max-w-3xl`}>
          <SectionHeading
            title={post.admissionTitle}
            subtitle={post.admissionIntro}
            className="mb-6 sm:mb-8"
          />
          <ol className="space-y-4">
            {post.admissionSteps.map((item, i) => (
              <li
                key={item.step}
                className="rounded-2xl border border-sims-border bg-white p-4 sm:p-5 shadow-sm flex gap-3 sm:gap-4"
              >
                <span
                  className="shrink-0 w-8 h-8 rounded-full bg-sims-primary text-white text-sm font-bold flex items-center justify-center"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-bold text-sims-primary mb-1 break-words">
                    {item.step}
                  </h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed break-words">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            {publicNavLinks(post.exploreLinks).map((link) => (
              <Button
                key={link.href}
                variant="outline"
                className="w-full sm:w-auto border-sims-primary text-sims-primary hover:bg-sims-primary hover:text-white font-semibold rounded-lg whitespace-normal h-auto min-h-11 py-2.5"
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BlogFigure({ figure, priority = false }: { figure: TourFigure; priority?: boolean }) {
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-2xl border border-sims-border bg-sims-surface shadow-sm">
        <OptimizedImage
          image={figure.image}
          alt={figure.alt}
          sizes={IMAGE_SIZES.half}
          priority={priority}
          className="w-full h-auto max-h-[min(52vh,28rem)] object-cover object-center"
        />
      </div>
      <figcaption className="mt-2.5 sm:mt-3 px-0.5 text-xs sm:text-sm text-sims-text-muted leading-relaxed break-words">
        {figure.caption}
        {figure.href && figure.hrefLabel ? (
          <>
            {' '}
            <Link
              href={figure.href}
              className="text-sims-primary font-semibold underline underline-offset-2 hover:text-sims-primary-2"
            >
              {figure.hrefLabel}
            </Link>
          </>
        ) : null}
      </figcaption>
    </figure>
  );
}

function CampusTourBody({ post }: { post: CampusTourPost }) {
  return (
    <>
      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={`${containerPad} max-w-3xl`}>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-sims-primary mb-3 sm:mb-4 break-words">
            {post.introTitle}
          </h2>
          <div className="space-y-4 mb-6 sm:mb-8">
            {post.intro.map((para) => (
              <p
                key={para.slice(0, 48)}
                className="text-sims-text-muted leading-relaxed text-[0.95rem] sm:text-base md:text-[1.05rem] break-words"
              >
                {para}
              </p>
            ))}
          </div>
          <BlogFigure figure={post.heroFigure} priority />
        </div>
      </section>

      {post.stops.map((stop, stopIndex) => (
        <section
          key={stop.id}
          className={cn(
            sectionPad,
            stopIndex % 2 === 0
              ? 'bg-white border-y border-sims-border/60'
              : 'bg-sims-bg',
          )}
        >
          <div className={`${containerPad} max-w-3xl`}>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-sims-primary mb-3 sm:mb-4 break-words">
              {stop.title}
            </h2>
            <div className="space-y-4 mb-6 sm:mb-8">
              {stop.paragraphs.map((para) => (
                <p
                  key={para.slice(0, 48)}
                  className="text-sims-text-muted leading-relaxed text-[0.95rem] sm:text-base md:text-[1.05rem] break-words"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              {stop.figures.map((figure) => (
                <BlogFigure key={figure.srcPath} figure={figure} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className={`${sectionPad} bg-white border-y border-sims-border/60`}>
        <div className={`${containerPad} max-w-3xl`}>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-sims-primary mb-3 sm:mb-4 break-words">
            {post.locationTitle}
          </h2>
          <p className="text-sims-text-muted leading-relaxed text-[0.95rem] sm:text-base md:text-[1.05rem] break-words mb-5 sm:mb-6">
            {post.locationIntro}
          </p>

          <address className="not-italic rounded-2xl border border-sims-border bg-sims-bg p-4 sm:p-5 mb-6 sm:mb-8">
            <p className="flex items-start gap-2 text-xs font-semibold uppercase tracking-wide text-sims-primary-2 mb-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
              Official campus address
            </p>
            <p className="font-display font-bold text-sims-primary mb-2">
              {CONTACT_DETAILS.collegeName}
            </p>
            {CONTACT_DETAILS.addressLines.map((line) => (
              <p key={line} className="text-sm sm:text-base text-sims-text-muted leading-relaxed">
                {line}
              </p>
            ))}
          </address>

          <p className="text-sm sm:text-base text-sims-text-muted leading-relaxed mb-4 sm:mb-5 break-words">
            {post.commuteIntro}
          </p>

          <ul className="md:hidden space-y-4 mb-8">
            {post.commuteRows.map((row) => (
              <li
                key={row.from}
                className="rounded-2xl border border-sims-border bg-sims-bg p-4 shadow-sm"
              >
                <h3 className="font-display text-base font-bold text-sims-primary mb-2 break-words">
                  {row.from}
                </h3>
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-sims-text-muted">
                      Distance
                    </dt>
                    <dd className="text-sims-primary font-medium">{row.distance}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-sims-text-muted">
                      Typical time
                    </dt>
                    <dd className="text-sims-primary font-medium">{row.time}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-sims-text-muted mb-1">
                      How to travel
                    </dt>
                    <dd className="text-sims-text-muted leading-relaxed">{row.options}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>

          <div className="hidden md:block min-w-0 mb-8">
            <div className="overflow-x-auto overscroll-x-contain rounded-2xl border border-sims-border shadow-sm max-w-full">
              <table className="w-full min-w-[640px] text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-sims-primary text-white">
                    <th scope="col" className="px-4 py-3.5 font-semibold">
                      From
                    </th>
                    <th scope="col" className="px-4 py-3.5 font-semibold whitespace-nowrap">
                      Distance
                    </th>
                    <th scope="col" className="px-4 py-3.5 font-semibold whitespace-nowrap">
                      Typical time
                    </th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">
                      Travel options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {post.commuteRows.map((row, i) => (
                    <tr
                      key={row.from}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-sims-surface-2/60'}
                    >
                      <th
                        scope="row"
                        className="px-4 py-4 font-bold text-sims-primary align-top"
                      >
                        {row.from}
                      </th>
                      <td className="px-4 py-4 text-sims-primary font-medium align-top whitespace-nowrap">
                        {row.distance}
                      </td>
                      <td className="px-4 py-4 text-sims-primary font-medium align-top whitespace-nowrap">
                        {row.time}
                      </td>
                      <td className="px-4 py-4 text-sims-text-muted align-top leading-relaxed">
                        {row.options}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-sims-border shadow-md bg-white">
            <div className="relative w-full min-h-[240px] sm:min-h-[320px] md:min-h-[380px] bg-sims-surface">
              <iframe
                title={MAP_CONFIG.iframeTitle}
                src={MAP_CONFIG.embedSrc}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-sm text-sims-text-muted leading-relaxed min-w-0">
                Google Map of Sushila Institute of Medical Sciences, Chakrata Road, Dehradun.
              </p>
              <Button
                className="w-full sm:w-auto min-h-11 bg-sims-primary hover:bg-sims-primary-2 text-white rounded-lg font-semibold"
                asChild
              >
                <a href={MAP_CONFIG.directionsUrl} target="_blank" rel="noreferrer">
                  Get directions
                  <ExternalLink className="w-4 h-4 ml-2 shrink-0" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={`${containerPad} max-w-3xl`}>
          <SectionHeading
            title={post.visitTitle}
            subtitle={post.visitingHoursNote}
            className="mb-6 sm:mb-8"
          />

          <div className="rounded-2xl border border-sims-border bg-white p-4 sm:p-6 mb-6 sm:mb-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-sims-primary-2 mb-1">
              Visiting hours
            </p>
            <p className="font-display text-lg sm:text-xl font-bold text-sims-primary mb-4">
              {post.visitingHours}
            </p>
            <ul className="space-y-3 text-sm">
              {CONTACT_DETAILS.phones.map((phone) => (
                <li key={phone.tel} className="flex items-start gap-2 min-w-0">
                  <Phone className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5" aria-hidden="true" />
                  <a
                    href={`tel:${phone.tel}`}
                    className="text-sims-primary font-semibold break-all hover:underline"
                  >
                    {phone.display}
                  </a>
                  <span className="text-sims-text-muted">({phone.label})</span>
                </li>
              ))}
              <li className="flex items-start gap-2 min-w-0">
                <Mail className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="text-sims-primary font-semibold break-all hover:underline"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>

          <ol className="space-y-4 mb-6 sm:mb-8">
            {post.visitSteps.map((item, i) => (
              <li
                key={item.title}
                className="rounded-2xl border border-sims-border bg-white p-4 sm:p-5 shadow-sm flex gap-3 sm:gap-4"
              >
                <span
                  className="shrink-0 w-8 h-8 rounded-full bg-sims-primary text-white text-sm font-bold flex items-center justify-center"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-bold text-sims-primary mb-1 break-words">
                    {item.title}
                  </h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed break-words">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
            {publicNavLinks(post.exploreLinks).map((link) => (
              <Button
                key={link.href}
                variant="outline"
                className="w-full sm:w-auto border-sims-primary text-sims-primary hover:bg-sims-primary hover:text-white font-semibold rounded-lg whitespace-normal h-auto min-h-11 py-2.5"
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function NursingUpgradeBody({
  post,
  whatsappHref,
  onApplyClick,
}: {
  post: NursingUpgradePost;
  whatsappHref: string;
  onApplyClick: () => void;
}) {
  const trainingIcons = [GraduationCap, Hospital, Clock, FlaskConical];

  return (
    <>
      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={`${containerPad} max-w-3xl`}>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-sims-primary mb-3 sm:mb-4 break-words">
            {post.audienceIntroTitle}
          </h2>
          <p className="text-sims-text-muted leading-relaxed text-[0.95rem] sm:text-base md:text-[1.05rem] break-words">
            {post.audienceIntro}
          </p>
        </div>
      </section>

      <section className={`${sectionPad} bg-white border-y border-sims-border/60`}>
        <div className={`${containerPad} min-w-0`}>
          <SectionHeading
            title="Post Basic B.Sc Nursing vs M.Sc Nursing"
            subtitle={post.comparisonIntro}
            className="mb-6 sm:mb-8 max-w-3xl"
          />

          <UpgradeCompareMobile rows={post.comparisonRows} />

          <div className="hidden md:block min-w-0">
            <div className="overflow-x-auto overscroll-x-contain rounded-2xl border border-sims-border shadow-sm max-w-full">
              <table className="w-full min-w-[720px] text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-sims-primary text-white">
                    <th scope="col" className="px-4 py-3.5 font-semibold whitespace-nowrap">
                      Factor
                    </th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">
                      Post Basic B.Sc Nursing
                    </th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">
                      M.Sc Nursing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {post.comparisonRows.map((row, i) => (
                    <tr
                      key={row.criterion}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-sims-surface-2/60'}
                    >
                      <th
                        scope="row"
                        className="px-4 py-4 font-bold text-sims-primary align-top whitespace-nowrap"
                      >
                        {row.criterion}
                      </th>
                      <td className="px-4 py-4 text-sims-text-muted align-top leading-relaxed">
                        {row.postBasic}
                      </td>
                      <td className="px-4 py-4 text-sims-text-muted align-top leading-relaxed">
                        {row.msc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3.5 sm:p-4 md:p-5 max-w-4xl">
            <AlertTriangle
              className="w-5 h-5 text-amber-600 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-sm text-sims-text-muted leading-relaxed break-words">
              {post.comparisonDisclaimer}
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <BlogCtaStrip
              onApplyClick={onApplyClick}
              applyLabel={post.applyCtaLabel}
              whatsappHref={whatsappHref}
              whatsappLabel={post.whatsappCtaLabel}
            />
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={`${containerPad} max-w-3xl`}>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-sims-primary mb-3 sm:mb-4 break-words">
            {post.registrationTitle}
          </h2>
          <p className="text-sims-text-muted leading-relaxed text-[0.95rem] sm:text-base md:text-[1.05rem] break-words mb-5 sm:mb-6">
            {post.registrationIntro}
          </p>
          <ul className="space-y-3">
            {post.registrationPoints.map((point) => (
              <li
                key={point.slice(0, 40)}
                className="flex gap-3 rounded-2xl border border-sims-border bg-white p-4 sm:p-5 shadow-sm"
              >
                <IdCard className="w-5 h-5 text-sims-primary-2 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-sims-text-muted leading-relaxed break-words">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${sectionPad} bg-white border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title={post.trainingTitle}
            subtitle={post.trainingIntro}
            className="mb-6 sm:mb-10 max-w-3xl"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-5xl">
            {post.trainingBlocks.map((block, idx) => {
              const Icon = trainingIcons[idx] ?? Stethoscope;
              return (
                <article
                  key={block.title}
                  className="rounded-2xl border border-sims-border bg-sims-bg p-4 sm:p-6 shadow-sm"
                >
                  <Icon className="w-6 h-6 text-sims-primary-2 mb-3" aria-hidden="true" />
                  <h3 className="font-display text-base sm:text-lg font-bold text-sims-primary mb-2 break-words">
                    {block.title}
                  </h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed break-words">
                    {block.summary}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-sims-bg`}>
        <div className={`${containerPad} max-w-3xl`}>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-sims-primary mb-4 sm:mb-6 break-words">
            {post.chooseTitle}
          </h2>
          <div className="space-y-4">
            {post.chooseParagraphs.map((parts, i) => (
              <RichParagraph key={i} parts={parts} />
            ))}
          </div>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            {publicNavLinks(post.exploreLinks).map((link) => (
              <Button
                key={link.href}
                variant="outline"
                className="w-full sm:w-auto border-sims-primary text-sims-primary hover:bg-sims-primary hover:text-white font-semibold rounded-lg whitespace-normal h-auto min-h-11 py-2.5"
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? '';
  const [, setLocation] = useLocation();
  const isUnlisted = UNLISTED_BLOG_SLUGS.has(slug);
  const post = isUnlisted ? undefined : getBlogPost(slug);
  const [modalOpen, setModalOpen] = useState(false);
  const isLive = !!post && isBlogPostPublished(post);

  useEffect(() => {
    if (isUnlisted) setLocation('/blog', { replace: true });
  }, [isUnlisted, setLocation]);

  const faqJsonLd = useMemo(
    () => (isLive && post ? buildFaqPageJsonLd(post.faqs) : null),
    [isLive, post],
  );
  const blogJsonLd = useMemo(
    () => (isLive && post ? buildBlogPostingJsonLd(post) : null),
    [isLive, post],
  );

  useDocumentMeta(
    isLive && post ? post.metaTitle : 'Blog | SIMS',
    isLive && post ? post.metaDescription : 'SIMS Dehradun blog',
  );
  useJsonLd('blog-posting', blogJsonLd);
  useJsonLd('faq-page', faqJsonLd);

  if (isUnlisted) {
    return null;
  }

  if (!post || !isLive) {
    return <NotFound />;
  }

  const whatsappHref = counselorWhatsappHref(post);
  const openContactForm = () => setModalOpen(true);

  if (isFeeStructurePost(post)) {
    const pdfHref = feePdfHref(post);
    return (
      <BlogShell
        post={post}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        heroCta={
          <BlogCtaStrip
            onApplyClick={openContactForm}
            secondaryHref={pdfHref}
            secondaryLabel={post.pdfCtaLabel}
            whatsappHref={whatsappHref}
            whatsappLabel={post.whatsappCtaLabel}
          />
        }
        closingExtra={
          <BlogCtaStrip
            onApplyClick={openContactForm}
            secondaryHref={pdfHref}
            secondaryLabel={post.pdfCtaLabel}
            whatsappHref={whatsappHref}
            whatsappLabel={post.whatsappCtaLabel}
            className="sm:justify-center"
          />
        }
      >
        <FeeStructureBody
          post={post}
          whatsappHref={whatsappHref}
          onApplyClick={openContactForm}
        />
      </BlogShell>
    );
  }

  if (isCollegeGuidePost(post)) {
    return (
      <BlogShell
        post={post}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        heroCta={
          <BlogCtaStrip
            onApplyClick={openContactForm}
            secondaryHref="/admissions"
            secondaryLabel="View admissions procedure"
            secondaryIcon="link"
            whatsappHref={whatsappHref}
            whatsappLabel={post.whatsappCtaLabel}
          />
        }
        closingExtra={
          <BlogCtaStrip
            onApplyClick={openContactForm}
            secondaryHref="/nursing"
            secondaryLabel="Explore nursing programs"
            secondaryIcon="link"
            whatsappHref={whatsappHref}
            whatsappLabel={post.whatsappCtaLabel}
            className="sm:justify-center"
          />
        }
      >
        <CollegeGuideBody post={post} />
      </BlogShell>
    );
  }

  if (isCareerGuidePost(post)) {
    return (
      <BlogShell
        post={post}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        heroCta={
          <BlogCtaStrip
            onApplyClick={openContactForm}
            secondaryHref="/programs/bpt"
            secondaryLabel="View BPT program"
            secondaryIcon="link"
            whatsappHref={whatsappHref}
            whatsappLabel={post.whatsappCtaLabel}
          />
        }
        closingExtra={
          <BlogCtaStrip
            onApplyClick={openContactForm}
            secondaryHref="/admissions"
            secondaryLabel="Admissions procedure"
            secondaryIcon="link"
            whatsappHref={whatsappHref}
            whatsappLabel={post.whatsappCtaLabel}
            className="sm:justify-center"
          />
        }
      >
        <CareerGuideBody post={post} />
      </BlogShell>
    );
  }

  if (isCampusTourPost(post)) {
    return (
      <BlogShell
        post={post}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        heroCta={
          <BlogCtaStrip
            onApplyClick={openContactForm}
            applyLabel={post.appointmentLabel}
            whatsappHref={whatsappHref}
            whatsappLabel={post.whatsappCtaLabel}
          />
        }
        closingExtra={
          <BlogCtaStrip
            onApplyClick={openContactForm}
            applyLabel={post.appointmentLabel}
            whatsappHref={whatsappHref}
            whatsappLabel={post.whatsappCtaLabel}
            className="sm:justify-center"
          />
        }
      >
        <CampusTourBody post={post} />
      </BlogShell>
    );
  }

  if (isNursingUpgradePost(post)) {
    return (
      <BlogShell
        post={post}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        heroCta={
          <BlogCtaStrip
            onApplyClick={openContactForm}
            applyLabel={post.applyCtaLabel}
            whatsappHref={whatsappHref}
            whatsappLabel={post.whatsappCtaLabel}
          />
        }
        closingExtra={
          <BlogCtaStrip
            onApplyClick={openContactForm}
            applyLabel={post.applyCtaLabel}
            whatsappHref={whatsappHref}
            whatsappLabel={post.whatsappCtaLabel}
            className="sm:justify-center"
          />
        }
      >
        <NursingUpgradeBody
          post={post}
          whatsappHref={whatsappHref}
          onApplyClick={openContactForm}
        />
      </BlogShell>
    );
  }

  return <NotFound />;
}
