import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/Shared';
import { getComplementaryCourses, relatedCourseHref } from '@/lib/related-courses';

export function RelatedCoursesGrid({ currentCourseSlug }: { currentCourseSlug?: string }) {
  const courses = getComplementaryCourses(currentCourseSlug);
  if (courses.length === 0) return null;

  return (
    <section className="py-14 md:py-16 lg:py-20 bg-sims-bg border-t border-sims-border/60">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Explore other nursing and paramedical programs"
          subtitle="Compare duration, eligibility, and HNBUMU affiliation before you shortlist a course."
          className="mb-8"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={relatedCourseHref(course.slug)}
              className="group flex min-h-[48px] flex-col rounded-2xl border border-sims-border bg-white p-5 md:p-6 hover:shadow-md hover:border-sims-primary/20 transition-all"
            >
              <p className="text-xs font-semibold text-sims-primary-2 mb-2">{course.duration}</p>
              <h3 className="font-bold text-sims-primary group-hover:text-sims-primary-2 transition-colors leading-snug mb-3">
                {course.anchor}
              </h3>
              <dl className="space-y-1.5 text-sm text-sims-text-muted">
                <div>
                  <dt className="inline font-semibold text-sims-text">Eligibility: </dt>
                  <dd className="inline">{course.eligibility}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-sims-text">Affiliation: </dt>
                  <dd className="inline">{course.affiliation}</dd>
                </div>
              </dl>
              <ArrowRight
                className="w-4 h-4 mt-4 text-sims-primary-2 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
