import React, { useState, type ReactNode } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { FacilitiesSectionNav } from '@/components/FacilitiesSectionNav';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { IMAGE_SIZES, type ResponsiveImage } from '@/lib/responsive-image';
import { usePreloadHeroImage } from '@/hooks/usePreloadHeroImage';
import { useDocumentMeta } from '@/lib/seo';
import { FACILITIES_HERO_IMAGE } from '@/lib/facilities';

export const facilitiesSectionPad = 'py-14 md:py-16 lg:py-20';
export const facilitiesContainerPad = 'container mx-auto px-4 md:px-6';

type BreadcrumbItem = { label: string; href?: string };

export function FacilitiesPageShell({
  metaTitle,
  metaDescription,
  title,
  subtitle,
  breadcrumbs,
  heroImage,
  heroImageAlt,
  heroImageClassName = 'w-full h-full object-contain object-center',
  children,
  ctaTitle = 'See the campus for yourself',
  ctaText = 'Speak with admissions about programmes, campus facilities, and the next intake — or explore courses that match your career path.',
}: {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  heroImage?: ResponsiveImage;
  heroImageAlt?: string;
  heroImageClassName?: string;
  children: ReactNode;
  ctaTitle?: string;
  ctaText?: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const image = heroImage ?? FACILITIES_HERO_IMAGE.src;
  const imageAlt = heroImageAlt ?? FACILITIES_HERO_IMAGE.alt;

  useDocumentMeta(metaTitle, metaDescription);
  usePreloadHeroImage(image);

  return (
    <div className="min-h-[100dvh] bg-sims-bg font-sans selection:bg-sims-primary/20">
      <Header onApplyClick={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onOpenChange={setModalOpen} />

      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            image={image}
            alt=""
            aria-hidden="true"
            sizes={IMAGE_SIZES.hero}
            priority
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sims-primary/94 via-sims-primary/80 to-sims-primary/40" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className={`${facilitiesContainerPad} relative z-10`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5">
              <nav aria-label="Breadcrumb" className="text-sm text-white/70">
                <ol className="flex flex-wrap items-center gap-1.5">
                  {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={`${crumb.label}-${index}`}>
                      {index > 0 ? <li aria-hidden="true">/</li> : null}
                      <li
                        className={
                          index === breadcrumbs.length - 1
                            ? 'text-amber-300 font-medium'
                            : undefined
                        }
                      >
                        {crumb.href ? (
                          <Link href={crumb.href} className="hover:text-white transition-colors">
                            {crumb.label}
                          </Link>
                        ) : (
                          crumb.label
                        )}
                      </li>
                    </React.Fragment>
                  ))}
                </ol>
              </nav>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                {title}
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
                {subtitle}
              </p>

              <FacilitiesSectionNav className="pt-1" />

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
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
                  onClick={() => setModalOpen(true)}
                >
                  Contact Admissions
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

            <div className="lg:col-span-5">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/10"
                style={{ aspectRatio: `${image.width} / ${image.height}` }}
              >
                <OptimizedImage
                  image={image}
                  alt={imageAlt}
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  priority
                  className={heroImageClassName}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {children}

      <section className="py-14 md:py-16 bg-sims-primary text-white">
        <div className={`${facilitiesContainerPad} text-center max-w-3xl mx-auto`}>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
            {ctaTitle}
          </h2>
          <p className="text-white/85 mb-7 leading-relaxed">{ctaText}</p>
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
              onClick={() => setModalOpen(true)}
            >
              Contact Admissions
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
          <div className="mt-6">
            <Link
              href="/facilities"
              className="inline-flex items-center text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors"
            >
              Back to Facilities overview
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
