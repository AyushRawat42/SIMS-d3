import { Link, useParams } from 'wouter';
import { ArrowRight, CheckCircle2, FlaskConical } from 'lucide-react';
import { SectionHeading } from '@/components/Shared';
import { FacilitiesPageShell, facilitiesContainerPad, facilitiesSectionPad } from '@/components/FacilitiesPageShell';
import { facilitiesLabPath } from '@/lib/facilities-nav';
import { LAB_CATEGORIES, getLabById, getRelatedLabs } from '@/lib/labs';
import NotFound from '@/pages/not-found';

function LabDetailContent({ labId }: { labId: string }) {
  const lab = getLabById(labId);

  if (!lab) {
    return <NotFound />;
  }

  const categoryLabel =
    LAB_CATEGORIES.find((category) => category.id === lab.category)?.title ?? 'Laboratories';
  const related = getRelatedLabs(lab);

  return (
    <FacilitiesPageShell
      metaTitle={lab.metaTitle}
      metaDescription={lab.metaDescription}
      title={lab.title}
      subtitle={lab.shortDescription}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Facilities', href: '/facilities' },
        { label: 'Laboratories', href: '/facilities/laboratories' },
        { label: lab.title },
      ]}
      heroImage={lab.image}
      heroImageAlt={lab.imageAlt}
      ctaTitle={`Learn more about ${lab.title}`}
      ctaText="Speak with admissions about practical training, programme options, and campus visits at SIMS Dehradun."
    >
      <section className={`${facilitiesSectionPad} bg-white`}>
        <div className={facilitiesContainerPad}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-sims-primary-2 mb-3">
                {categoryLabel}
              </p>
              <SectionHeading title={`About the ${lab.title}`} className="mb-6" />
              <div className="space-y-4 text-sims-text-muted leading-relaxed text-[0.975rem] md:text-base">
                {lab.paragraphs.map((para) => (
                  <p key={para.slice(0, 48)}>{para}</p>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-2xl border border-sims-border bg-sims-bg p-6 shadow-sm lg:sticky lg:top-28">
                <div className="w-11 h-11 rounded-xl bg-sims-surface flex items-center justify-center text-sims-primary-2 mb-4">
                  <FlaskConical className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-bold text-sims-primary mb-3">Academic uses</h2>
                <ul className="space-y-2.5 mb-6">
                  {lab.academicUses.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-sims-text">
                      <CheckCircle2 className="w-4 h-4 text-sims-primary-2 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/facilities/laboratories"
                  className="inline-flex items-center text-sm font-semibold text-sims-primary-2 hover:text-sims-primary transition-colors"
                >
                  All laboratories
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={`${facilitiesSectionPad} bg-sims-bg border-y border-sims-border/60`}>
        <div className={facilitiesContainerPad}>
          <SectionHeading
            title="Standard Equipment & Teaching Aids"
            subtitle="Typical tools used in Indian nursing and allied health college labs for this specialty — supporting supervised skill practice at SIMS."
            className="mb-8 md:mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {lab.equipment.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-sims-border bg-white p-5 shadow-sm flex gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-sims-primary-2 shrink-0 mt-0.5" />
                <p className="text-sm md:text-[0.9375rem] text-sims-text font-medium leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className={`${facilitiesSectionPad} bg-white`}>
          <div className={facilitiesContainerPad}>
            <SectionHeading
              title="Related Labs"
              subtitle={`More ${categoryLabel.toLowerCase()} at SIMS.`}
              className="mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={facilitiesLabPath(item.id)}
                  className="rounded-2xl border border-sims-border bg-sims-bg p-6 shadow-sm hover:shadow-md hover:border-sims-primary/15 transition-all block h-full"
                >
                  <h3 className="text-lg font-bold text-sims-primary mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-sims-text-muted leading-relaxed mb-4">
                    {item.shortDescription}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-sims-primary-2">
                    View details
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </FacilitiesPageShell>
  );
}

export function LaboratoryDetailPage() {
  const params = useParams<{ labId?: string }>();
  const labId = params.labId;

  if (!labId) {
    return <NotFound />;
  }

  return <LabDetailContent key={labId} labId={labId} />;
}
