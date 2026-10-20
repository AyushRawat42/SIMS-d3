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

const COUNSELING: RelatedGuide = {
  href: blogPostPath('hnbumu-nursing-paramedical-counseling-guide-uttarakhand'),
  label: 'HNBUMU counseling guide',
  blurb: 'Documents, choice filling, and how to select SIMS Dehradun.',
};

const COMPARE: RelatedGuide = {
  href: blogPostPath('bsc-nursing-vs-gnm-vs-bpt-scope-salary-uttarakhand'),
  label: 'B.Sc Nursing vs GNM vs BPT',
  blurb: 'Duration, hospital scope, and higher study after 12th PCB.',
};

const PARAMEDICAL: RelatedGuide = {
  href: blogPostPath('paramedical-career-scope-bmlt-bsc-mrit-uttarakhand'),
  label: 'BMLT and B.Sc MRIT career scope',
  blurb: 'Hospital lab and radiology demand, eligibility, and starting-pay planning bands after 12th.',
};

const HOSTEL: RelatedGuide = {
  href: blogPostPath('hostel-life-campus-safety-medical-college-dehradun'),
  label: 'Hostel life and campus safety',
  blurb: 'Separate hostels, mess, CCTV, security, and what parents should confirm on a Dehradun visit.',
};

const BSC_VS_GNM: RelatedGuide = {
  href: blogPostPath('bsc-nursing-vs-gnm-salary-scope-eligibility-uttarakhand'),
  label: 'B.Sc Nursing vs GNM: salary and eligibility',
  blurb: 'Four years vs three, PCB eligibility, hospital scope, and starting-pay planning in Uttarakhand.',
};

function onlyPublished(guides: RelatedGuide[]): RelatedGuide[] {
  return guides.filter((g) => isPublicSiteHref(g.href));
}

export const NURSING_HUB_GUIDES: RelatedGuide[] = onlyPublished([
  BSC_VS_GNM,
  COUNSELING,
  COMPARE,
  CHECKLIST,
  UPGRADE,
  CAMPUS,
]);

export const FACILITIES_HUB_GUIDES: RelatedGuide[] = onlyPublished([HOSTEL, CAMPUS]);

export function guidesForProgram(slug: string): RelatedGuide[] {
  switch (slug) {
    case 'bsc-nursing':
    case 'gnm':
      return onlyPublished([BSC_VS_GNM, COMPARE, COUNSELING, CHECKLIST, CAMPUS]);
    case 'post-basic-bsc-nursing':
    case 'msc-nursing':
      return onlyPublished([UPGRADE, COUNSELING, CAMPUS, CHECKLIST]);
    case 'bpt':
      return onlyPublished([COMPARE, BPT, CAMPUS]);
    case 'bmlt':
    case 'bmrit':
      return onlyPublished([PARAMEDICAL, HOSTEL, COUNSELING, CAMPUS]);
    default:
      return onlyPublished([COUNSELING, CAMPUS]);
  }
}
