import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle2,
  Loader2,
  ArrowRight,
  MessageCircle,
  Compass,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { SectionHeading } from '@/components/Shared';
import { SocialFeedGrid } from '@/components/SocialFeedGrid';
import { Button } from '@/components/ui/button';
import { SITE_CONTENT } from '@/lib/site-content';
import {
  CAREER_COUNSELLING,
  CONTACT_DETAILS,
  CONTACT_HELP_NOTES,
  CONTACT_PAGE,
  MAP_CONFIG,
} from '@/lib/contact';

const sectionPad = 'py-14 md:py-16 lg:py-20';
const containerPad = 'container mx-auto px-4 md:px-6';

const fieldClassName =
  'w-full h-11 px-4 rounded-lg border border-sims-border bg-sims-bg text-sims-text placeholder:text-sims-text-muted/60 focus:outline-none focus:ring-2 focus:ring-sims-primary/40 focus:border-sims-primary/40 transition-shadow';

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

export function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useDocumentMeta(
    'Contact Us | Sushila Institute of Medical Sciences',
    CONTACT_PAGE.metaDescription,
  );

  const primaryPhone = CONTACT_DETAILS.phones[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = String(formData.get('fullName') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const course = String(formData.get('courseInterested') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!fullName || !phone || !course) {
      setSubmitError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Existing admissions API accepts courseInterested (max 200). Append message when present.
    const courseInterested = message
      ? `${course} | ${message}`.slice(0, 200)
      : course;

    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL;
      if (!apiBase) {
        throw new Error('Admissions service is temporarily unavailable. Please try again later.');
      }

      const response = await fetch(`${apiBase}/api/admissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, phone, courseInterested }),
      });

      if (!response.ok) {
        let errMessage = 'Submission failed. Please try again.';
        try {
          const data = (await response.json()) as { error?: string; details?: string[] };
          if (data.details?.length) errMessage = data.details.join('. ');
          else if (data.error) errMessage = data.error;
        } catch {
          // keep default
        }
        throw new Error(errMessage);
      }

      setIsSuccess(true);
      form.reset();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-sims-bg font-sans selection:bg-sims-primary/20">
      <Header onApplyClick={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onOpenChange={setModalOpen} />

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-16 overflow-hidden bg-sims-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-sims-primary via-sims-primary to-sims-primary-2 opacity-95" />
        <div className={`${containerPad} relative z-10`}>
          <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-4">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-amber-300 font-medium">Contact Us</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              {CONTACT_PAGE.title}
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-7 max-w-2xl">
              {CONTACT_PAGE.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white h-12 px-7 font-bold rounded-lg"
                asChild
              >
                <a href={`tel:${primaryPhone.tel}`}>Call Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white bg-white/10 hover:bg-white hover:text-sims-primary h-12 px-7 font-semibold backdrop-blur-sm rounded-lg"
                asChild
              >
                <a href={`mailto:${CONTACT_DETAILS.email}`}>Email Us</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white bg-transparent hover:bg-white/10 h-12 px-7 font-semibold rounded-lg"
                asChild
              >
                <a href={MAP_CONFIG.directionsUrl} target="_blank" rel="noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main contact details */}
      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-5">
              <SectionHeading title="Get in Touch" className="mb-4" />
              <p className="text-sims-text-muted leading-relaxed mb-6 text-[0.975rem]">
                {CONTACT_DETAILS.inquiryNote}. Our counsellors can help with programme options,
                documentation, and campus visits.
              </p>
              <div className="rounded-2xl border border-sims-border bg-sims-bg p-6 md:p-7 shadow-sm space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sims-primary-2 mb-1">
                    College
                  </p>
                  <p className="font-bold text-sims-primary text-lg leading-snug">
                    {CONTACT_DETAILS.collegeName}
                  </p>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sims-text-muted mb-1">
                      Address
                    </p>
                    <address className="not-italic text-sm text-sims-text leading-relaxed">
                      {CONTACT_DETAILS.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sims-text-muted mb-1">
                      Phone
                    </p>
                    <ul className="space-y-1">
                      {CONTACT_DETAILS.phones.map((phone) => (
                        <li key={phone.tel}>
                          <a
                            href={`tel:${phone.tel}`}
                            className="text-sm font-semibold text-sims-primary hover:text-sims-primary-2 transition-colors"
                          >
                            {phone.display}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sims-text-muted mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT_DETAILS.email}`}
                      className="text-sm font-semibold text-sims-primary hover:text-sims-primary-2 transition-colors break-all"
                    >
                      {CONTACT_DETAILS.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sims-text-muted mb-1">
                      Office Hours
                    </p>
                    <p className="text-sm font-semibold text-sims-text">
                      {CONTACT_DETAILS.officeHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Method cards */}
            <div className="lg:col-span-7">
              <SectionHeading title="Contact Methods" className="mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <a
                  href={`tel:${primaryPhone.tel}`}
                  className="group rounded-2xl border border-sims-border bg-blue-50 p-6 shadow-sm hover:shadow-md hover:border-sims-primary/20 hover:bg-blue-100 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-sims-surface text-sims-primary-2 flex items-center justify-center mb-4 group-hover:bg-sims-primary group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-sims-primary mb-1">Call Admissions</h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed mb-3">
                    Speak with our team on {primaryPhone.display} or alternate lines.
                  </p>
                  <span className="text-sm font-semibold text-sims-primary-2 inline-flex items-center">
                    Call now <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </a>

                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="group rounded-2xl border border-sims-border bg-indigo-50 p-6 shadow-sm hover:shadow-md hover:border-sims-primary/20 hover:bg-indigo-100 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-sims-surface text-sims-primary-2 flex items-center justify-center mb-4 group-hover:bg-sims-primary group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-sims-primary mb-1">Email Inquiry</h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed mb-3">
                    Write to {CONTACT_DETAILS.email} for admissions and general queries.
                  </p>
                  <span className="text-sm font-semibold text-sims-primary-2 inline-flex items-center">
                    Send email <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </a>

                <a
                  href={MAP_CONFIG.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-sims-border bg-amber-50 p-6 shadow-sm hover:shadow-md hover:border-sims-primary/20 hover:bg-amber-100 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-sims-surface text-sims-primary-2 flex items-center justify-center mb-4 group-hover:bg-sims-primary group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-sims-primary mb-1">Visit Campus</h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed mb-3">
                    Find us on Chakrata Road, Sheeshambara / Sighniwala, Dehradun.
                  </p>
                  <span className="text-sm font-semibold text-sims-primary-2 inline-flex items-center">
                    Get directions <ExternalLink className="w-4 h-4 ml-1" />
                  </span>
                </a>

                <a
                  href={SITE_CONTENT.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-sims-border bg-green-50 p-6 shadow-sm hover:shadow-md hover:border-sims-primary/20 hover:bg-green-100 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-sims-surface text-sims-primary-2 flex items-center justify-center mb-4 group-hover:bg-sims-primary group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-sims-primary mb-1">WhatsApp Us</h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed mb-3">
                    Message admissions on {SITE_CONTENT.social.whatsappNumber} for quick guidance.
                  </p>
                  <span className="text-sm font-semibold text-sims-primary-2 inline-flex items-center">
                    Chat now <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </a>
              </div>

              <div className="mt-5 rounded-xl bg-sims-surface border border-sims-border/70 px-4 py-3.5 sm:px-5 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4">
                <div className="flex items-center gap-2.5 shrink-0">
                  <Clock className="w-4 h-4 text-sims-primary-2" aria-hidden="true" />
                  <p className="text-sm font-semibold text-sims-primary">
                    {CONTACT_DETAILS.officeHours}
                  </p>
                </div>
                <p className="text-sm text-sims-text-muted leading-snug sm:border-l sm:border-sims-border sm:pl-4">
                  {CONTACT_DETAILS.officeHoursNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Counselling — after contact methods, before map */}
      <section className={`${sectionPad} bg-sims-bg border-t border-sims-border/60`}>
        <div className={containerPad}>
          <div className="rounded-2xl border border-sims-border bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 p-5 sm:p-6 md:p-8 lg:p-9">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sims-surface text-sims-primary-2 flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1.5">
                      {CAREER_COUNSELLING.eyebrow}
                    </p>
                    <h2 className="font-display text-xl sm:text-2xl md:text-[1.75rem] font-bold text-sims-primary leading-tight mb-3">
                      {CAREER_COUNSELLING.title}
                    </h2>
                    <p className="text-sm md:text-[0.9375rem] text-sims-text-muted leading-relaxed mb-5 max-w-2xl">
                      {CAREER_COUNSELLING.description}
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {CAREER_COUNSELLING.points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-sm text-sims-text">
                          <CheckCircle2
                            className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="min-w-0 break-words">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white h-11 px-5 sm:px-6 font-bold rounded-lg text-sm sm:text-base whitespace-normal"
                        onClick={() => setModalOpen(true)}
                      >
                        {CAREER_COUNSELLING.cta}
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto border-sims-primary text-sims-primary hover:bg-sims-primary hover:text-white h-11 px-5 sm:px-6 font-semibold rounded-lg"
                        asChild
                      >
                        <a href={SITE_CONTENT.social.whatsapp} target="_blank" rel="noreferrer">
                          Talk to an Expert
                          <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" aria-hidden="true" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 bg-sims-primary text-white p-5 sm:p-6 md:p-8 flex flex-col justify-center gap-3 sm:gap-4 border-t lg:border-t-0 lg:border-l border-sims-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Who it’s for
                </p>
                <p className="text-sm text-white/90 leading-relaxed">
                  Students and families choosing between B.Sc Nursing, BPT, BMLT, imaging,
                  optometry, and related SIMS programmes — based on aptitude and career goals, not
                  guesswork.
                </p>
                <p className="text-sm font-semibold text-white leading-snug">
                  Available during office hours · Free for prospective students
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social — live embeds (Facebook · Instagram · YouTube) */}
      <section className={`${sectionPad} bg-white`}>
        <div className={containerPad}>
          <SectionHeading
            title="Connect With Us"
            subtitle="Follow official SIMS channels for campus updates and programme news."
            className="mb-8"
          />
          <SocialFeedGrid />
        </div>
      </section>

      {/* Inquiry form */}
      <section className={`${sectionPad} bg-sims-surface-2 border-y border-sims-border/60`}>
        <div className={containerPad}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeading title="Send an Inquiry" className="mb-4" />
              <p className="text-sims-text-muted leading-relaxed text-[0.975rem] mb-6">
                Share your details and our admissions team will get back to you. This form uses the
                same enquiry pathway as the Apply Now flow on the site.
              </p>
              <ul className="space-y-4">
                {CONTACT_HELP_NOTES.map((note) => (
                  <li key={note.title} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sims-primary-2 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sims-primary text-sm mb-0.5">{note.title}</p>
                      <p className="text-sm text-sims-text-muted leading-relaxed">{note.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-sims-border bg-white p-6 md:p-8 shadow-sm">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="w-14 h-14 bg-sims-success/10 text-sims-success rounded-full flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-sims-text mb-2">Thank you!</h3>
                    <p className="text-sims-text-muted mb-6 max-w-sm text-sm leading-relaxed">
                      Your inquiry was submitted. Our admissions team will contact you shortly.
                    </p>
                    <Button
                      className="h-11 px-6 bg-sims-primary hover:bg-sims-primary-2 text-white rounded-lg"
                      onClick={() => setIsSuccess(false)}
                    >
                      Send another inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-sm font-medium text-sims-text">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="fullName"
                        required
                        className={fieldClassName}
                        placeholder="e.g. Rahul Sharma"
                        autoComplete="name"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="text-sm font-medium text-sims-text">
                        Phone *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        className={fieldClassName}
                        placeholder="+91 00000 00000"
                        autoComplete="tel"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-course" className="text-sm font-medium text-sims-text">
                        Course / Subject *
                      </label>
                      <select
                        id="contact-course"
                        name="courseInterested"
                        required
                        defaultValue=""
                        className={`${fieldClassName} appearance-none`}
                      >
                        <option value="" disabled>
                          Select a course or topic
                        </option>
                        {SITE_CONTENT.programs.courses.map((c) => (
                          <option key={c.name} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                        <option value="Campus Visit">Campus Visit</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-sm font-medium text-sims-text">
                        Email{' '}
                        <span className="font-normal text-sims-text-muted">(optional)</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className={fieldClassName}
                        placeholder="name@example.com"
                        autoComplete="email"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="text-sm font-medium text-sims-text">
                        Message{' '}
                        <span className="font-normal text-sims-text-muted">(optional)</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        className={`${fieldClassName} h-auto py-3 resize-y min-h-[110px]`}
                        placeholder="Tell us briefly how we can help…"
                      />
                    </div>

                    {submitError ? (
                      <p className="text-sm text-red-600" role="alert">
                        {submitError}
                      </p>
                    ) : null}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 text-base font-semibold bg-sims-primary hover:bg-sims-primary-2 text-white rounded-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        'Submit Inquiry'
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 md:py-16 bg-sims-primary text-white">
        <div className={`${containerPad} text-center max-w-3xl mx-auto`}>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Ready to take the next step?
          </h2>
          <p className="text-white/85 mb-7 leading-relaxed">
            Apply for the current intake, explore programmes, or talk to admissions about your goals.
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
              <a href="/#programs">Explore Programs</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 h-12 px-7 font-semibold rounded-lg"
              asChild
            >
              <Link href="/facilities">View Facilities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Map — bottom of page */}
      <section className={`${sectionPad} bg-sims-bg border-t border-sims-border/60`}>
        <div className={containerPad}>
          <SectionHeading
            title="Where to Find Us"
            subtitle="Campus location on Chakrata Road, Dehradun — open the map for directions."
            className="mb-8"
          />

          <div className="rounded-2xl overflow-hidden border border-sims-border shadow-md bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] relative bg-sims-surface">
                <iframe
                  title={MAP_CONFIG.iframeTitle}
                  src={MAP_CONFIG.embedSrc}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-sims-border">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sims-primary-2 mb-2">
                    Campus address
                  </p>
                  <h3 className="font-bold text-sims-primary text-lg mb-3 leading-snug">
                    {CONTACT_DETAILS.collegeName}
                  </h3>
                  <address className="not-italic text-sm text-sims-text-muted leading-relaxed mb-4">
                    {CONTACT_DETAILS.addressSingle}
                  </address>
                  <p className="text-sm text-sims-text">
                    <span className="font-semibold">Hours:</span> {CONTACT_DETAILS.officeHours}
                  </p>
                </div>
                <Button
                  className="w-full h-11 bg-sims-primary hover:bg-sims-primary-2 text-white rounded-lg font-semibold"
                  asChild
                >
                  <a href={MAP_CONFIG.directionsUrl} target="_blank" rel="noreferrer">
                    Get Directions
                    <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
