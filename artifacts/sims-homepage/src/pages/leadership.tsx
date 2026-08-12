import React, { useState } from 'react';
import { Link } from 'wouter';
import { Quote } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { AboutSectionNav } from '@/components/AboutSectionNav';
import { SectionHeading } from '@/components/Shared';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { IMAGE_SIZES } from '@/lib/responsive-image';
import { useDocumentMeta } from '@/lib/seo';
import { LEADERSHIP, LEADERSHIP_PAGE, type LeadershipProfile } from '@/lib/about';

const sectionPad = 'py-14 md:py-16 lg:py-20';
const containerPad = 'container mx-auto px-4 md:px-6';

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .replace(/^Dr\.\s*/i, '')
    .replace(/^Mr\.\s*/i, '')
    .replace(/^Mrs\.\s*/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

  return (
    <div
      className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sims-primary to-sims-primary-2 text-white"
      aria-hidden="true"
    >
      <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight">{initials}</span>
    </div>
  );
}

function ChairmanFeature({ leader }: { leader: LeadershipProfile }) {
  return (
    <div className="space-y-5 md:space-y-6">
      <article className="relative overflow-hidden rounded-2xl bg-sims-primary text-white">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[min(55%,420px)] opacity-40"
          aria-hidden="true"
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 320 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMid slice"
          >
            <path
              d="M-20 40C40 80 60 140 20 200C-20 260 40 300 90 280C140 260 180 320 140 380C100 440 160 480 220 460"
              stroke="url(#chairmanMeshLeadership)"
              strokeWidth="1.25"
              strokeDasharray="2 6"
            />
            <path
              d="M0 20C70 70 90 130 50 190C10 250 70 310 130 290C190 270 220 340 170 400C120 460 190 500 250 480"
              stroke="url(#chairmanMeshLeadership)"
              strokeWidth="1"
              strokeDasharray="1.5 7"
              opacity="0.7"
            />
            <path
              d="M30 0C100 50 120 120 80 180C40 240 100 290 160 270C220 250 250 320 200 380C150 440 220 500 280 470"
              stroke="url(#chairmanMeshLeadership)"
              strokeWidth="0.9"
              strokeDasharray="1 8"
              opacity="0.5"
            />
            <defs>
              <linearGradient id="chairmanMeshLeadership" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1E5288" />
                <stop offset="55%" stopColor="#93C5FD" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.35" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 lg:min-h-[380px]">
          <div className="lg:col-span-7 flex flex-col justify-center px-6 py-8 sm:px-8 md:px-10 lg:px-12 lg:py-12 order-2 lg:order-1">
            <div className="max-w-xl">
              {leader.title ? (
                <>
                  <p className="font-script text-[1.75rem] sm:text-[2.15rem] md:text-[2.35rem] leading-none text-white">
                    {leader.title}
                  </p>
                  <div
                    className="mt-2 mb-4 h-px w-40 sm:w-52 bg-gradient-to-r from-white/80 via-white/40 to-transparent"
                    aria-hidden="true"
                  />
                  <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-amber-300/95 mb-5">
                    {leader.role}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-script text-[1.75rem] sm:text-[2.15rem] md:text-[2.35rem] leading-none text-white">
                    {leader.role}
                  </p>
                  <div
                    className="mt-2 mb-5 h-px w-40 sm:w-52 bg-gradient-to-r from-white/80 via-white/40 to-transparent"
                    aria-hidden="true"
                  />
                </>
              )}
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight mb-6">
                {leader.name}
              </h2>
              <blockquote className="relative pl-1">
                <span
                  className="font-display text-5xl sm:text-6xl leading-none text-white/35 select-none block mb-1"
                  aria-hidden="true"
                >
                  “
                </span>
                <p className="text-sm sm:text-[0.95rem] md:text-base text-white/90 leading-relaxed -mt-6 sm:-mt-7 pl-5 sm:pl-6">
                  {leader.quote}
                </p>
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-5 relative order-1 lg:order-2 w-full aspect-[1024/678] lg:aspect-auto lg:min-h-full bg-sims-primary-2/30">
            {leader.image ? (
              <OptimizedImage
                image={leader.image}
                alt={leader.imageAlt ?? leader.name}
                sizes={IMAGE_SIZES.content}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            ) : (
              <InitialsAvatar name={leader.name} />
            )}
            <div
              className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-sims-primary to-transparent pointer-events-none hidden lg:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </article>

      <div className="relative overflow-hidden rounded-2xl bg-sims-primary text-white p-5 sm:p-6 md:p-8 shadow-sm">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[min(55%,420px)] opacity-30"
          aria-hidden="true"
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 320 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMid slice"
          >
            <path
              d="M-20 40C40 80 60 140 20 200C-20 260 40 300 90 280C140 260 180 320 140 380C100 440 160 480 220 460"
              stroke="url(#chairmanMsgMesh)"
              strokeWidth="1.25"
              strokeDasharray="2 6"
            />
            <path
              d="M0 20C70 70 90 130 50 190C10 250 70 310 130 290C190 270 220 340 170 400C120 460 190 500 250 480"
              stroke="url(#chairmanMsgMesh)"
              strokeWidth="1"
              strokeDasharray="1.5 7"
              opacity="0.7"
            />
            <defs>
              <linearGradient id="chairmanMsgMesh" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1E5288" />
                <stop offset="55%" stopColor="#93C5FD" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.35" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300/95 mb-4">
            Honourable Chairman’s Message
          </p>
          <div className="space-y-3 text-sm md:text-[0.9375rem] text-white/90 leading-relaxed">
            {leader.message.map((para) => (
              <p key={para.slice(0, 56)}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadershipCard({
  leader,
  variant = 'stack',
}: {
  leader: LeadershipProfile;
  variant?: 'stack' | 'split';
}) {
  const isSplit = variant === 'split';

  return (
    <article className="rounded-2xl border border-sims-border bg-white shadow-sm overflow-hidden flex flex-col h-full">
      {isSplit ? (
        <>
          <div className="flex flex-col sm:flex-row sm:h-72 shrink-0">
            <div className="sm:w-[38%] md:w-[34%] shrink-0 h-56 sm:h-full overflow-hidden bg-sims-surface">
              {leader.image ? (
                <OptimizedImage
                  image={leader.image}
                  alt={leader.imageAlt ?? leader.name}
                  sizes={IMAGE_SIZES.quarter}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full">
                  <InitialsAvatar name={leader.name} />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0 sm:h-full p-5 md:p-6 flex flex-col justify-center bg-gradient-to-br from-sims-primary to-sims-primary-2 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-300/95 mb-1.5">
                {leader.role}
              </p>
              {leader.title ? (
                <p className="text-sm font-medium text-white/80 mb-1">{leader.title}</p>
              ) : null}
              <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                {leader.name}
              </h2>
              <div className="relative">
                <span
                  className="font-display text-4xl leading-none text-white/30 select-none block"
                  aria-hidden="true"
                >
                  “
                </span>
                <blockquote className="pl-1 -mt-5 text-sm text-white/90 leading-relaxed italic">
                  {leader.quote}
                </blockquote>
              </div>
            </div>
          </div>
          {leader.message.length > 0 ? (
            <div className="border-t border-sims-border/70 bg-sims-bg px-5 py-5 md:px-6 md:py-6 flex-grow">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-sims-primary-2 mb-3">
                Message
              </p>
              <div className="space-y-3 text-[0.8125rem] md:text-sm text-sims-text-muted leading-relaxed">
                {leader.message.map((para) => (
                  <p key={para.slice(0, 56)}>{para}</p>
                ))}
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden bg-sims-surface shrink-0">
            {leader.image ? (
              <OptimizedImage
                image={leader.image}
                alt={leader.imageAlt ?? leader.name}
                sizes={IMAGE_SIZES.half}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <InitialsAvatar name={leader.name} />
            )}
          </div>
          <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-grow">
            <p className="text-xs font-semibold uppercase tracking-wide text-sims-primary-2 mb-1">
              {leader.role}
            </p>
            {leader.title ? (
              <p className="text-sm font-medium text-amber-700 mb-1">{leader.title}</p>
            ) : null}
            <h2 className="font-display text-xl sm:text-2xl font-bold text-sims-primary mb-4 leading-snug">
              {leader.name}
            </h2>
            <div className="relative mb-5">
              <Quote
                className="w-5 h-5 text-sims-primary/20 absolute -top-1 -left-0.5"
                aria-hidden="true"
              />
              <blockquote className="pl-6 text-sm sm:text-[0.9375rem] text-sims-text font-medium leading-relaxed italic">
                “{leader.quote}”
              </blockquote>
            </div>
            <div className="space-y-3 text-sm text-sims-text-muted leading-relaxed flex-grow">
              {leader.message.map((para) => (
                <p key={para.slice(0, 56)}>{para}</p>
              ))}
            </div>
          </div>
        </>
      )}
    </article>
  );
}

export function LeadershipPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const chairman = LEADERSHIP.find((l) => l.id === 'chairman');
  const pairedLeaders = LEADERSHIP.filter(
    (l) => l.id === 'vice-chairperson' || l.id === 'managing-director',
  );
  const remainingLeaders = LEADERSHIP.filter(
    (l) => l.id !== 'chairman' && l.id !== 'vice-chairperson' && l.id !== 'managing-director',
  );

  useDocumentMeta(LEADERSHIP_PAGE.metaTitle, LEADERSHIP_PAGE.metaDescription);

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
              <li className="text-amber-300 font-medium">Leadership Talk</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              {LEADERSHIP_PAGE.title}
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 max-w-2xl">
              {LEADERSHIP_PAGE.subtitle}
            </p>
            <AboutSectionNav />
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-sims-surface-2 border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title="Messages from Our Leadership"
            subtitle="Words that guide SIMS’s academic culture, student support, and service to healthcare."
            className="mb-8 md:mb-10"
          />
          <div className="space-y-5 md:space-y-6">
            {chairman ? <ChairmanFeature leader={chairman} /> : null}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {pairedLeaders.map((leader) => (
                <LeadershipCard key={leader.id} leader={leader} variant="split" />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {remainingLeaders.map((leader) => (
                <LeadershipCard key={leader.id} leader={leader} variant="split" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-sims-primary text-white">
        <div className={`${containerPad} text-center max-w-3xl mx-auto`}>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3 leading-tight">
            Learn with leaders who invest in people
          </h2>
          <p className="text-white/85 mb-7 leading-relaxed">
            Explore our vision, campus impact, or start your application for the next intake.
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
              <Link href="/vision-mission">Vision & Mission</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 h-12 px-7 font-semibold rounded-lg"
              asChild
            >
              <Link href="/awards-highlights">Awards & Highlights</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
