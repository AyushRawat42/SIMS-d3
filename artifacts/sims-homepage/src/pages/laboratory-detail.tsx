import { Link, useParams } from 'wouter';
import { ArrowRight, CheckCircle2, FlaskConical, Images } from 'lucide-react';
import { SectionHeading } from '@/components/Shared';
import { FacilitiesPageShell, facilitiesContainerPad, facilitiesSectionPad } from '@/components/FacilitiesPageShell';
import { facilitiesLabPath } from '@/lib/facilities-nav';
import { LAB_CATEGORIES, getLabById, getRelatedLabs } from '@/lib/labs';
import { AutoLinkText } from '@/components/AutoLinkText';
import NotFound from '@/pages/not-found';

function LabDetailContent({ labId }: { labId: string }) {
  const lab = getLabById(labId);

  if (!lab) {
    return <NotFound />;
  }

  const categoryLabel =
    LAB_CATEGORIES.find((category) => category.id === lab.category)?.title ?? 'Laboratories';
  const related = getRelatedLabs(lab);
  const galleryPhotos = lab.gallery ?? lab.photos;
  const isTwoItemGallery = galleryPhotos && galleryPhotos.length === 2;
  const isFourItemGallery = galleryPhotos && galleryPhotos.length === 4;

  return (
    <FacilitiesPageShell
      metaTitle={lab.metaTitle}
      metaDescription={lab.metaDescription}
      canonicalPath={facilitiesLabPath(lab.id)}
      title={lab.title}
      subtitle={lab.shortDescription}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Facilities', href: '/facilities' },
        { label: 'Laboratories', href: '/facilities/laboratories' },
        { label: lab.title },
      ]}
      heroImage={lab.thumbnail ?? lab.image}
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
                  <p key={para.slice(0, 48)}>
                    <AutoLinkText excludePath={facilitiesLabPath(lab.id)}>{para}</AutoLinkText>
                  </p>
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

      {/* Lab Photo Gallery Grid */}
      {galleryPhotos && galleryPhotos.length > 0 ? (
        <section className={`${facilitiesSectionPad} bg-white border-b border-sims-border/60`}>
          <div className={facilitiesContainerPad}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-sims-surface flex items-center justify-center text-sims-primary-2 shrink-0">
                <Images className="w-5 h-5" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-sims-primary-2">
                Campus Photography
              </p>
            </div>
            <SectionHeading
              title="Laboratory Gallery"
              subtitle={`Demonstrations, clinical simulators, and learning spaces inside the ${lab.title}.`}
              className="mb-8 md:mb-10"
            />
            <div
              className={`grid gap-6 ${
                isTwoItemGallery
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl'
                  : isFourItemGallery
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {galleryPhotos.map((photo, idx) => (
                <figure
                  key={photo.src + idx}
                  className="group overflow-hidden rounded-xl border border-sims-border bg-white shadow-sm hover:shadow-md hover:border-sims-primary/25 transition-all flex flex-col h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-sims-surface">
                    <picture>
                      <source srcSet={photo.src} type="image/webp" />
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        sizes={
                          isTwoItemGallery
                            ? '(max-width: 768px) 100vw, 50vw'
                            : isFourItemGallery
                            ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                            : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        }
                        width={photo.width ?? 1024}
                        height={photo.height ?? 768}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </picture>
                  </div>
                  <figcaption className="p-4 text-xs sm:text-sm text-sims-text-muted leading-relaxed flex-1 flex items-start border-t border-sims-border/60">
                    {photo.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className={`${facilitiesSectionPad} bg-sims-bg`}>
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
                  className="rounded-2xl border border-sims-border bg-white p-6 shadow-sm hover:shadow-md hover:border-sims-primary/15 transition-all block h-full"
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
