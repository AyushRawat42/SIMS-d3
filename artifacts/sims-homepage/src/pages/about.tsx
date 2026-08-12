import React, { useState } from 'react';
import { Link } from 'wouter';
import { ExternalLink, FlaskConical, Users, Building2, HeartPulse, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { SectionHeading } from '@/components/Shared';
import { AboutSectionNav } from '@/components/AboutSectionNav';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { IMAGE_SIZES } from '@/lib/responsive-image';
import { cn } from '@/lib/utils';
import { useDocumentMeta } from '@/lib/seo';
import {
  ABOUT_INTRO,
  ABOUT_INTRO_SECONDARY,
  ABOUT_PAGE,
  ABOUT_SOCIAL,
  ABOUT_SOCIAL_LINKS,
  ABOUT_STRENGTHS,
  HNB_AFFILIATION,
} from '@/lib/about';
import { ABOUT_NAV_LINKS } from '@/lib/about-nav';
import { sims_campus_entrance, sims_campus_signage } from '@/lib/responsive-images.generated';

const sectionPad = 'py-14 md:py-16 lg:py-20';
const containerPad = 'container mx-auto px-4 md:px-6';
const strengthIcons = [FlaskConical, Users, Building2, HeartPulse];

function aboutSocialLinkClass(label: string) {
  if (label === 'Facebook') {
    return 'bg-blue-50 border-blue-200/80 text-blue-700 hover:bg-blue-100 hover:border-blue-300 [&_svg]:text-blue-600';
  }
  if (label === 'Instagram') {
    return 'bg-pink-50 border-pink-200/80 text-pink-700 hover:bg-pink-100 hover:border-pink-300 [&_svg]:text-pink-600';
  }
  return 'bg-red-50 border-red-200/80 text-red-700 hover:bg-red-100 hover:border-red-300 [&_svg]:text-red-600';
}

export function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  useDocumentMeta(ABOUT_PAGE.metaTitle, ABOUT_PAGE.metaDescription);

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
              <li className="text-amber-300 font-medium">About SIMS</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              {ABOUT_PAGE.title}
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 max-w-2xl">
              {ABOUT_PAGE.subtitle}
            </p>
            <AboutSectionNav className="mb-7" />
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

      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <SectionHeading title="Who We Are" className="mb-8 md:mb-10" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-sims-border bg-sims-bg p-5 sm:p-6 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-sims-text-muted mb-3">
                  Affiliated with
                </p>
                <OptimizedImage
                  image={HNB_AFFILIATION.logo}
                  alt={HNB_AFFILIATION.logoAlt}
                  sizes={IMAGE_SIZES.affiliationLogo}
                  className="w-28 sm:w-32 md:w-36 h-auto object-contain mb-3"
                />
                <p className="text-xs sm:text-sm font-semibold text-sims-primary-2 tracking-wide leading-snug">
                  {HNB_AFFILIATION.fullName}
                </p>
                <p className="text-xs text-sims-text-muted mt-1.5">
                  {HNB_AFFILIATION.location} · {HNB_AFFILIATION.motto}
                </p>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base">
              {ABOUT_INTRO.map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title="Empowering the Next Generation of Healthcare Professionals"
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 lg:max-w-none">
                <div className="rounded-2xl overflow-hidden border border-sims-border shadow-sm bg-white aspect-[325/282]">
                  <OptimizedImage
                    image={sims_campus_entrance}
                    alt="Sushila Institute of Medical Sciences (SIMS) campus entrance, Dehradun"
                    sizes="(max-width: 1023px) 50vw, 14vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-sims-border shadow-sm bg-white aspect-[325/282]">
                  <OptimizedImage
                    image={sims_campus_signage}
                    alt="SIMS campus wall and gate signage on Chakrata Road, Dehradun"
                    sizes="(max-width: 1023px) 50vw, 14vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4 text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base">
              {ABOUT_INTRO_SECONDARY.map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      <section className={`${sectionPad} bg-sims-surface-2 border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title="Explore More About SIMS"
            subtitle="Continue with our vision, leadership voices, and campus highlights."
            className="mb-8"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {ABOUT_NAV_LINKS.filter((l) => l.href !== '/about').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-sims-border bg-white p-5 md:p-6 shadow-sm hover:shadow-md hover:border-sims-primary/25 transition-all"
              >
                <h3 className="font-bold text-sims-primary mb-1.5 group-hover:text-sims-primary-2 transition-colors">
                  {link.label}
                </h3>
                <p className="text-sm text-sims-text-muted leading-relaxed mb-3">{link.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-sims-primary-2">
                  Read more <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-white`}>
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
                className={cn(
                  'inline-flex items-center gap-2 rounded-lg border px-4 h-11 text-sm font-semibold shadow-sm transition-all duration-200',
                  aboutSocialLinkClass(link.label),
                )}
              >
                {link.label}
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

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
