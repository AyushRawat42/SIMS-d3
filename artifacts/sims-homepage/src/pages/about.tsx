import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Quote, ExternalLink, FlaskConical, Users, Building2, HeartPulse } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { SectionHeading } from '@/components/Shared';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { IMAGE_SIZES } from '@/lib/responsive-image';
import {
  ABOUT_INTRO,
  ABOUT_MISSION,
  ABOUT_PAGE,
  ABOUT_SOCIAL,
  ABOUT_SOCIAL_LINKS,
  ABOUT_STRENGTHS,
  ABOUT_VISION,
  LEADERSHIP,
} from '@/lib/about';

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

const strengthIcons = [FlaskConical, Users, Building2, HeartPulse];

export function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  useDocumentMeta(
    'About SIMS | Sushila Institute of Medical Sciences',
    ABOUT_PAGE.metaDescription,
  );

  return (
    <div className="min-h-[100dvh] bg-sims-bg font-sans selection:bg-sims-primary/20">
      <Header onApplyClick={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onOpenChange={setModalOpen} />

      {/* Hero */}
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
              <li className="text-amber-300 font-medium">About</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              {ABOUT_PAGE.title}
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-7 max-w-2xl">
              {ABOUT_PAGE.subtitle}
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
        </div>
      </section>

      {/* Introduction */}
      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionHeading title="Who We Are" className="mb-3" />
              <p className="text-xs sm:text-sm font-semibold text-sims-primary-2 tracking-wide leading-snug max-w-[18rem] sm:max-w-none">
                Dehradun · HNB UTTARAKHAND MEDICAL EDUCATION UNIVERSITY
              </p>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base">
              {ABOUT_INTRO.map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stay connected */}
      <section className={`${sectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={`${containerPad} max-w-3xl`}>
          <SectionHeading title={ABOUT_SOCIAL.title} className="mb-4" />
          <p className="text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base mb-6">
            {ABOUT_SOCIAL.text}
          </p>
          <div className="flex flex-wrap gap-3">
            {ABOUT_SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-sims-border bg-white px-4 h-11 text-sm font-semibold text-sims-primary hover:border-sims-primary/30 hover:shadow-sm transition-all"
              >
                {link.label}
                <ExternalLink className="w-4 h-4 text-sims-primary-2" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <SectionHeading
            title="Vision & Mission"
            subtitle="What guides teaching, training, and student development at SIMS."
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            <article className="rounded-2xl border border-sims-border bg-sims-bg p-6 md:p-8 shadow-sm h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-2">
                Vision
              </p>
              <h3 className="font-display text-2xl font-bold text-sims-primary mb-4">
                {ABOUT_VISION.title}
              </h3>
              <div className="space-y-4 text-sm md:text-[0.9375rem] text-sims-text-muted leading-relaxed">
                {ABOUT_VISION.paragraphs.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-sims-border bg-sims-primary text-white p-6 md:p-8 shadow-sm h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                Mission
              </p>
              <h3 className="font-display text-2xl font-bold mb-4">{ABOUT_MISSION.title}</h3>
              <div className="space-y-4 text-sm md:text-[0.9375rem] text-white/85 leading-relaxed">
                {ABOUT_MISSION.paragraphs.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={`${sectionPad} bg-sims-surface-2 border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title="Leadership Messages"
            subtitle="Words from the leadership that guide SIMS’s academic and student-centred culture."
            centered
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {LEADERSHIP.map((leader) => (
              <article
                key={leader.id}
                className="rounded-2xl border border-sims-border bg-white shadow-sm overflow-hidden flex flex-col h-full"
              >
                <div className="aspect-[4/5] overflow-hidden bg-sims-surface">
                  <OptimizedImage
                    image={leader.image}
                    alt={leader.imageAlt}
                    sizes={IMAGE_SIZES.quarter}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sims-primary-2 mb-1">
                    {leader.role}
                  </p>
                  <h3 className="text-lg font-bold text-sims-primary mb-4 leading-snug">
                    {leader.name}
                  </h3>
                  <div className="relative flex-grow">
                    <Quote
                      className="w-5 h-5 text-sims-primary/20 absolute -top-1 -left-0.5"
                      aria-hidden="true"
                    />
                    <blockquote className="pl-6 text-sm text-sims-text-muted leading-relaxed italic">
                      “{leader.quote}”
                    </blockquote>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why SIMS */}
      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <SectionHeading
            title="Why SIMS"
            subtitle="Core strengths that shape everyday learning and student development."
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {ABOUT_STRENGTHS.map((item, i) => {
              const Icon = strengthIcons[i % strengthIcons.length];
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-sims-border bg-sims-bg p-6 shadow-sm flex gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-sims-surface flex items-center justify-center text-sims-primary-2 shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-sims-primary mb-1.5">{item.title}</h3>
                    <p className="text-sm text-sims-text-muted leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 bg-sims-primary text-white">
        <div className={`${containerPad} text-center max-w-3xl mx-auto`}>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Begin your healthcare education at SIMS
          </h2>
          <p className="text-white/85 mb-7 leading-relaxed">
            Explore programmes, visit campus facilities, or speak with admissions about the next intake.
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
              <Link href="/facilities">Explore Facilities</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
