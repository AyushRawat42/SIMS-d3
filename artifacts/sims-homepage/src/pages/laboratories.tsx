import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, FlaskConical } from 'lucide-react';
import { SectionHeading } from '@/components/Shared';
import { FacilitiesPageShell, facilitiesContainerPad, facilitiesSectionPad } from '@/components/FacilitiesPageShell';
import { OptimizedImage } from '@/components/OptimizedImage';
import { IMAGE_SIZES } from '@/lib/responsive-image';
import { facilitiesLabPath } from '@/lib/facilities-nav';
import { LAB_CATEGORIES, LABORATORIES_PAGE, getLabsByCategory } from '@/lib/labs';

import { AutoLinkText } from '@/components/AutoLinkText';

export function LaboratoriesPage() {
  return (
    <FacilitiesPageShell
      metaTitle={LABORATORIES_PAGE.metaTitle}
      metaDescription={LABORATORIES_PAGE.metaDescription}
      canonicalPath="/facilities/laboratories"
      title={LABORATORIES_PAGE.title}
      subtitle={LABORATORIES_PAGE.subtitle}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Facilities', href: '/facilities' },
        { label: 'Laboratories' },
      ]}
      heroImage="/images/laboratories/pathology-lab-workstation-overview.webp"
      heroImageAlt="Students conducting clinical diagnostics and practical training across laboratory workstations at Sushila Institute of Medical Sciences"
      heroImageClassName="w-full h-full object-cover object-center"
      ctaTitle="Train where practice comes first"
      ctaText="Ask admissions about lab-based learning across nursing, paramedical, and physiotherapy programmes at SIMS Dehradun."
    >
      <section className={`${facilitiesSectionPad} bg-white`}>
        <div className={`${facilitiesContainerPad} max-w-3xl`}>
          <SectionHeading title="Hands-on Learning Across Departments" className="mb-6" />
          <div className="space-y-4 text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base">
            {LABORATORIES_PAGE.intro.map((para) => (
              <p key={para.slice(0, 40)}>
                <AutoLinkText excludePath="/facilities/laboratories">{para}</AutoLinkText>
              </p>
            ))}
            <p>
              For a parent-facing walkthrough of nursing and paramedical labs on Chakrata Road, read the{' '}
              <Link
                href="/blog/inside-sims-dehradun-photo-facility-tour-nursing-labs-campus"
                className="text-sims-primary font-semibold underline underline-offset-2 hover:text-sims-primary-2"
              >
                SIMS campus photo and facility tour
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {LAB_CATEGORIES.map((category, categoryIndex) => {
        const labs = getLabsByCategory(category.id);
        return (
          <section
            key={category.id}
            id={category.id}
            className={`${facilitiesSectionPad} scroll-mt-28 ${
              categoryIndex % 2 === 0 ? 'bg-sims-bg border-y border-sims-border/60' : 'bg-white'
            }`}
          >
            <div className={facilitiesContainerPad}>
              <SectionHeading
                title={category.title}
                subtitle={category.description}
                className="mb-8 md:mb-10"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                {labs.map((lab) => {
                  const cardImage = lab.thumbnail ?? lab.image;
                  return (
                    <Link
                      key={lab.id}
                      href={facilitiesLabPath(lab.id)}
                      className="group rounded-2xl border border-sims-border bg-white shadow-sm hover:shadow-md hover:border-sims-primary/30 hover:-translate-y-0.5 transition-all duration-200 h-full overflow-hidden flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sims-primary focus-visible:ring-offset-2"
                      aria-label={`View lab details for ${lab.title}`}
                    >
                      {cardImage ? (
                        <div className="aspect-[16/10] overflow-hidden bg-sims-surface">
                          <OptimizedImage
                            image={cardImage}
                            alt={lab.imageAlt ?? lab.title}
                            sizes={IMAGE_SIZES.third}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          />
                        </div>
                      ) : (
                        <div className="px-6 pt-6">
                          <div className="w-11 h-11 rounded-xl bg-sims-surface flex items-center justify-center text-sims-primary-2">
                            <FlaskConical className="w-5 h-5" aria-hidden="true" />
                          </div>
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-lg font-bold text-sims-primary mb-2 leading-snug">
                          {lab.title}
                        </h3>
                        <p className="text-sm text-sims-text-muted leading-relaxed mb-4 flex-1">
                          {lab.shortDescription}
                        </p>
                        <ul className="space-y-2 mb-5">
                          {lab.academicUses.slice(0, 2).map((item) => (
                            <li key={item} className="flex gap-2 text-sm text-sims-text">
                              <CheckCircle2 className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <span
                          className="inline-flex items-center text-sm font-semibold text-sims-primary-2 group-hover:text-sims-primary transition-colors mt-auto"
                          aria-hidden="true"
                        >
                          View lab details
                          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </FacilitiesPageShell>
  );
}
