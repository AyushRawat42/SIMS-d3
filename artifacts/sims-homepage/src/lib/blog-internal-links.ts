import { blogPostPath, isPublicSiteHref } from '@/lib/blog-posts';

export type RelatedGuide = {
  href: string;
  label: string;
  blurb: string;
};

const CHECKLIST: RelatedGuide = {
  href: blogPostPath('top-private-bsc-nursing-colleges-dehradun-affiliation-eligibility-checklist'),
  label: 'Private B.Sc Nursing college checklist',
  blurb: 'Affiliation, recognition, clinical beds, and red flags before you pay a counselling fee.',
};

const CAMPUS: RelatedGuide = {
  href: blogPostPath('inside-sims-dehradun-photo-facility-tour-nursing-labs-campus'),
  label: 'Campus photo & facility tour',
  blurb: 'Nursing labs, paramedical setup, hostel, and Chakrata Road location with commute notes.',
};

const UPGRADE: RelatedGuide = {
  href: blogPostPath('post-basic-bsc-nursing-vs-msc-nursing-career-upgrade'),
  label: 'Post Basic B.Sc vs M.Sc Nursing',
  blurb: 'Which qualification lifts pay bands, NORCET files, and faculty pathways.',
};

const BPT: RelatedGuide = {
  href: blogPostPath('bpt-uttarakhand-eligibility-career-scope-salary-after-12th-pcb'),
  label: 'BPT career, eligibility & salary guide',
  blurb: '4.5-year pathway, lab training, and physiotherapy admission steps after 12th PCB.',
};

function onlyPublished(guides: RelatedGuide[]): RelatedGuide[] {
  return guides.filter((g) => isPublicSiteHref(g.href));
}

export const NURSING_HUB_GUIDES: RelatedGuide[] = onlyPublished([
  CHECKLIST,
  UPGRADE,
  CAMPUS,
]);

export const FACILITIES_HUB_GUIDES: RelatedGuide[] = onlyPublished([CAMPUS]);

export function guidesForProgram(slug: string): RelatedGuide[] {
  switch (slug) {
    case 'bsc-nursing':
    case 'gnm':
      return onlyPublished([CHECKLIST, CAMPUS]);
    case 'post-basic-bsc-nursing':
    case 'msc-nursing':
      return onlyPublished([UPGRADE, CAMPUS, CHECKLIST]);
    case 'bpt':
      return onlyPublished([BPT, CAMPUS]);
    default:
      return onlyPublished([CAMPUS]);
  }
}
