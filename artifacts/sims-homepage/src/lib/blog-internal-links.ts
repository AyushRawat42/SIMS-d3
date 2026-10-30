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

const ENTRANCE_PREPARATION: RelatedGuide = {
  href: blogPostPath('hnbumu-nursing-paramedical-entrance-exam-preparation-syllabus'),
  label: 'HNBUMU entrance syllabus and study plan',
  blurb: 'Subject-wise nursing and paramedical preparation alongside Class 12 boards.',
};

const BPT_VS_NURSING: RelatedGuide = {
  href: blogPostPath('bpt-vs-bsc-nursing-career-scope-comparison'),
  label: 'BPT vs B.Sc Nursing career comparison',
  blurb: 'Compare rehabilitation practice, hospital nursing roles, programme duration, and career fit.',
};

const CLINICAL_POSTINGS: RelatedGuide = {
  href: blogPostPath('hospital-clinical-postings-practical-training-sims-dehradun'),
  label: 'Clinical postings and practical training',
  blurb: 'How nursing labs, diagnostics practice, and supervised rotations connect with classroom learning.',
};

const SCHOLARSHIPS: RelatedGuide = {
  href: blogPostPath('scholarships-education-loan-guide-nursing-paramedical-uttarakhand'),
  label: 'Scholarships and education-loan checklist',
  blurb: 'Organize bank documents and check current NSP and Uttarakhand scholarship requirements.',
};

function onlyPublished(guides: RelatedGuide[]): RelatedGuide[] {
  return guides.filter((g) => isPublicSiteHref(g.href));
}

export const NURSING_HUB_GUIDES: RelatedGuide[] = onlyPublished([
  BSC_VS_GNM,
  COUNSELING,
  ENTRANCE_PREPARATION,
  BPT_VS_NURSING,
  SCHOLARSHIPS,
  COMPARE,
  CHECKLIST,
  UPGRADE,
  CAMPUS,
]);

export const FACILITIES_HUB_GUIDES: RelatedGuide[] = onlyPublished([
  HOSTEL,
  CAMPUS,
  CLINICAL_POSTINGS,
]);

export function guidesForProgram(slug: string): RelatedGuide[] {
  switch (slug) {
    case 'bsc-nursing':
    case 'gnm':
      return onlyPublished([
        BSC_VS_GNM,
        COMPARE,
        COUNSELING,
        ENTRANCE_PREPARATION,
        SCHOLARSHIPS,
        CHECKLIST,
        CAMPUS,
      ]);
    case 'post-basic-bsc-nursing':
    case 'msc-nursing':
      return onlyPublished([UPGRADE, COUNSELING, SCHOLARSHIPS, CLINICAL_POSTINGS, CAMPUS, CHECKLIST]);
    case 'bpt':
      return onlyPublished([BPT_VS_NURSING, COMPARE, BPT, CLINICAL_POSTINGS, CAMPUS]);
    case 'bmlt':
    case 'bmrit':
      return onlyPublished([PARAMEDICAL, CLINICAL_POSTINGS, SCHOLARSHIPS, HOSTEL, COUNSELING, CAMPUS]);
    default:
      return onlyPublished([COUNSELING, CAMPUS]);
  }
}
