import { programPath } from '@/lib/programs';

export type RelatedCourseCard = {
  slug: string;
  anchor: string;
  duration: string;
  eligibility: string;
  affiliation: string;
};

export const RELATED_COURSE_CARDS: RelatedCourseCard[] = [
  {
    slug: 'bsc-nursing',
    anchor: 'B.Sc Nursing Admission in Dehradun',
    duration: '4 Years',
    eligibility: '10+2 with PCB & English',
    affiliation: 'HNBUMU',
  },
  {
    slug: 'gnm',
    anchor: 'GNM Nursing Diploma in Dehradun',
    duration: '3 Years',
    eligibility: '10+2 or equivalent',
    affiliation: 'HNBUMU',
  },
  {
    slug: 'post-basic-bsc-nursing',
    anchor: 'Post Basic B.Sc Nursing Course Details',
    duration: '2 Years',
    eligibility: 'GNM with nursing registration',
    affiliation: 'HNBUMU',
  },
  {
    slug: 'bpt',
    anchor: 'Bachelor of Physiotherapy (BPT) Course Details',
    duration: '4.5 Years incl. internship',
    eligibility: '10+2 with PCB',
    affiliation: 'HNBUMU',
  },
  {
    slug: 'bmlt',
    anchor: 'BMLT Lab Technology Program',
    duration: '3 Years + 6 Months internship',
    eligibility: '10+2 science stream',
    affiliation: 'HNBUMU',
  },
  {
    slug: 'bmrit',
    anchor: 'B.Sc MRIT Imaging Technology Program',
    duration: '3 Years + 6 Months internship',
    eligibility: '10+2 science stream',
    affiliation: 'HNBUMU',
  },
];

const NURSING = new Set(['bsc-nursing', 'gnm', 'post-basic-bsc-nursing']);

const ARTICLE_PRIMARY_SLUG: Record<string, string> = {
  'hnbumu-nursing-paramedical-counseling-guide-uttarakhand': 'bsc-nursing',
  'bsc-nursing-vs-gnm-salary-scope-eligibility-uttarakhand': 'bsc-nursing',
  'bsc-nursing-vs-gnm-vs-bpt-scope-salary-uttarakhand': 'bsc-nursing',
  'top-private-bsc-nursing-colleges-dehradun-affiliation-eligibility-checklist': 'bsc-nursing',
  'bsc-nursing-gnm-fee-structure-dehradun-2026-27': 'bsc-nursing',
  'post-basic-bsc-nursing-vs-msc-nursing-career-upgrade': 'post-basic-bsc-nursing',
  'bpt-uttarakhand-eligibility-career-scope-salary-after-12th-pcb': 'bpt',
};

export function primaryProgramSlugForArticle(articleSlug: string): string | undefined {
  return ARTICLE_PRIMARY_SLUG[articleSlug];
}

export function relatedCourseHref(slug: string): string {
  return programPath(slug);
}

/** Complementary programmes. With no current slug, returns the full core set. */
export function getComplementaryCourses(currentSlug?: string): RelatedCourseCard[] {
  const pool = RELATED_COURSE_CARDS.filter((card) => card.slug !== currentSlug);
  if (!currentSlug) return pool;

  const currentIsNursing = NURSING.has(currentSlug);
  const otherTrack = pool.filter((card) => NURSING.has(card.slug) !== currentIsNursing);
  const sameTrack = pool.filter((card) => NURSING.has(card.slug) === currentIsNursing);
  return [...otherTrack, ...sameTrack].slice(0, 4);
}
