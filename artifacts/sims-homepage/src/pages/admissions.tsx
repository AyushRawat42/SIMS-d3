import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import {
  Scale,
  FileCheck2,
  Users,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  BookOpen,
  MessageCircle,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { SectionHeading } from '@/components/Shared';
import { Button } from '@/components/ui/button';
import { CONTACT_DETAILS, MAP_CONFIG } from '@/lib/contact';
import { SITE_CONTENT } from '@/lib/site-content';
import {
  ADMISSIONS_PAGE,
  DISCLAIMER,
  LEGAL_NOTE,
  PG_DIPLOMA_ELIGIBILITY,
  PROCEDURE_STEPS,
  SEAT_DISTRIBUTION,
  SEAT_TRANSFER_NOTE,
  UG_ELIGIBILITY,
  WEIGHTAGE_CRITERIA,
  WEIGHTAGE_MARKS_EACH,
  WEIGHTAGE_MAX,
} from '@/lib/admissions';

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

const stepIcons = [Scale, Users, FileCheck2];

export function AdmissionsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const primaryPhone = CONTACT_DETAILS.phones[0];

  useDocumentMeta(
    'Admissions at SIMS | Sushila Institute of Medical Sciences',
    ADMISSIONS_PAGE.metaDescription,
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
              <li className="text-amber-300 font-medium">Admissions</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              {ADMISSIONS_PAGE.title}
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-7 max-w-2xl">
              {ADMISSIONS_PAGE.subtitle}
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
                <Link href="/contact-us">Contact Admissions</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white bg-transparent hover:bg-white/10 h-12 px-7 font-semibold rounded-lg"
                asChild
              >
                <a href="/#programs">Explore Programs</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure */}
      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <SectionHeading
            title="Admission Procedure"
            subtitle="Fair and transparent admissions based on merit, interview, and document verification."
            className="mb-6"
          />

          <div className="rounded-2xl border border-amber-500/25 bg-amber-500/5 p-5 md:p-6 mb-8 md:mb-10">
            <div className="flex gap-3">
              <Scale className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm md:text-[0.9375rem] text-sims-text leading-relaxed">
                {LEGAL_NOTE}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {PROCEDURE_STEPS.map((step, i) => {
              const Icon = stepIcons[i % stepIcons.length];
              return (
                <article
                  key={step.id}
                  className="rounded-2xl border border-sims-border bg-sims-bg p-6 shadow-sm h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-sims-surface text-sims-primary-2 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sims-primary-2 mb-1">
                    Step {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-lg font-bold text-sims-primary mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className={`${sectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title="Eligibility Criteria"
            subtitle="At SIMS, admissions are guided by merit and applicable reservation policies."
            className="mb-8 md:mb-10"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            <article className="rounded-2xl border border-sims-border bg-white p-6 md:p-7 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-sims-surface text-sims-primary-2 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-sims-primary leading-snug">
                  Undergraduate Courses
                </h3>
              </div>
              <ul className="space-y-3">
                {UG_ELIGIBILITY.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-sims-text leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-sims-border bg-white p-6 md:p-7 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-sims-surface text-sims-primary-2 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-sims-primary leading-snug">
                  PG Diploma in Clinical Diagnostics
                </h3>
              </div>
              <p className="text-sm text-sims-text-muted leading-relaxed mb-4">
                {PG_DIPLOMA_ELIGIBILITY.intro}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PG_DIPLOMA_ELIGIBILITY.subjects.map((subject) => (
                  <li
                    key={subject}
                    className="rounded-lg bg-sims-bg border border-sims-border/70 px-3 py-2 text-sm font-medium text-sims-text"
                  >
                    {subject}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Seat distribution */}
      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <SectionHeading
            title="Seat Distribution"
            subtitle="Reservation and allocation details as published for SIMS admissions."
            className="mb-8 md:mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 mb-6">
            {SEAT_DISTRIBUTION.map((seat) => (
              <article
                key={seat.label}
                className="rounded-2xl border border-sims-border bg-sims-bg p-5 md:p-6 shadow-sm"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-sims-primary mb-1">
                  {seat.value}
                </p>
                <h3 className="text-base font-bold text-sims-primary mb-2 leading-snug">
                  {seat.label}
                </h3>
                <p className="text-sm text-sims-text-muted leading-relaxed">{seat.detail}</p>
              </article>
            ))}
          </div>

          <div className="rounded-xl border border-sims-border bg-sims-surface-2/60 px-5 py-4">
            <p className="text-sm text-sims-text leading-relaxed">
              <span className="font-semibold text-sims-primary">Note: </span>
              {SEAT_TRANSFER_NOTE}
            </p>
          </div>
        </div>
      </section>

      {/* Additional weightage */}
      <section className={`${sectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title="Additional Weightage Criteria"
            subtitle={`Candidates may receive an extra ${WEIGHTAGE_MARKS_EACH} for each applicable criterion below.`}
            className="mb-6"
          />

          <div className="rounded-2xl border border-sims-border bg-white p-6 md:p-8 shadow-sm max-w-4xl">
            <ul className="space-y-3.5 mb-6">
              {WEIGHTAGE_CRITERIA.map((item) => (
                <li key={item} className="flex gap-3 text-sm md:text-[0.9375rem] text-sims-text leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-sims-primary-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-sims-primary text-white px-5 py-4">
              <p className="text-sm md:text-base font-semibold leading-snug">
                Maximum additional weightage allowed: {WEIGHTAGE_MAX}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 md:py-12 bg-white">
        <div className={containerPad}>
          <div className="rounded-2xl border border-sims-border bg-sims-surface-2/50 p-5 md:p-6 flex gap-3 max-w-4xl">
            <AlertCircle className="w-5 h-5 text-sims-primary-2 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h2 className="text-base font-bold text-sims-primary mb-1.5">Important Notice</h2>
              <p className="text-sm text-sims-text-muted leading-relaxed">{DISCLAIMER}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={`${sectionPad} bg-sims-surface-2 border-t border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title="Talk to Admissions"
            subtitle="Need help with eligibility, documents, or the current intake? Reach our admissions team."
            className="mb-8"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 mb-8">
            <a
              href={`tel:${primaryPhone.tel}`}
              className="group rounded-2xl border border-sims-border bg-blue-50 p-6 shadow-sm hover:shadow-md hover:border-sims-primary/20 hover:bg-blue-100 transition-all duration-200"
            >
              <Phone className="w-5 h-5 text-sims-primary-2 mb-3" aria-hidden="true" />
              <h3 className="font-bold text-sims-primary mb-1">Call Admissions</h3>
              <p className="text-sm text-sims-text-muted mb-2">{primaryPhone.display}</p>
              <p className="text-xs text-sims-text-muted">
                Also: {CONTACT_DETAILS.phones.slice(1).map((p) => p.display).join(' · ')}
              </p>
            </a>
            <a
              href={`mailto:${CONTACT_DETAILS.email}`}
              className="group rounded-2xl border border-sims-border bg-indigo-50 p-6 shadow-sm hover:shadow-md hover:border-sims-primary/20 hover:bg-indigo-100 transition-all duration-200"
            >
              <Mail className="w-5 h-5 text-sims-primary-2 mb-3" aria-hidden="true" />
              <h3 className="font-bold text-sims-primary mb-1">Email Us</h3>
              <p className="text-sm text-sims-text-muted break-all">{CONTACT_DETAILS.email}</p>
            </a>
            <a
              href={MAP_CONFIG.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-sims-border bg-amber-50 p-6 shadow-sm hover:shadow-md hover:border-sims-primary/20 hover:bg-amber-100 transition-all duration-200"
            >
              <MapPin className="w-5 h-5 text-sims-primary-2 mb-3" aria-hidden="true" />
              <h3 className="font-bold text-sims-primary mb-1">Visit Campus</h3>
              <p className="text-sm text-sims-text-muted leading-relaxed">
                Sheeshambara, Sighniwala, Chakrata Road, Dehradun
              </p>
            </a>
            <a
              href={SITE_CONTENT.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-sims-border bg-green-50 p-6 shadow-sm hover:shadow-md hover:border-sims-primary/20 hover:bg-green-100 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 text-sims-primary-2 mb-3" aria-hidden="true" />
              <h3 className="font-bold text-sims-primary mb-1">WhatsApp Us</h3>
              <p className="text-sm text-sims-text-muted">
                {SITE_CONTENT.social.whatsappNumber}
              </p>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-sims-primary hover:bg-sims-primary-2 text-white h-12 px-7 font-bold rounded-lg"
              onClick={() => setModalOpen(true)}
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-sims-primary text-sims-primary hover:bg-sims-primary hover:text-white h-12 px-7 font-semibold rounded-lg"
              asChild
            >
              <Link href="/contact-us">Go to Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
