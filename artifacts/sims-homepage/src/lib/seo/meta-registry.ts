/**
 * Background SEO / CTR copy. Visible page headings are not read from this file.
 * `lastUpdated` is the date a title was last tuned for search CTR tests.
 */

export const SEO_TUNED_AT = '2026-10-20';

export const FALLBACK_KEYWORDS = ['SIMS Dehradun', 'HNBUMU', 'Chakrata Road Dehradun'];

export const OG_TRUST_SUMMARY =
  'INC & HNBUMU approved campus on Chakrata Road, Dehradun. Clinical training and a secure campus for students and parents. Admissions open.';

export type SeoEntry = {
  path: string;
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
  keywords: string[];
  lastUpdated: string;
};

type SeoInput = {
  path: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  lastUpdated?: string;
};

export function contentSeo(input: SeoInput): SeoEntry {
  return {
    path: input.path,
    seoTitle: input.seoTitle,
    seoDescription: input.seoDescription,
    ogTitle: input.ogTitle ?? input.seoTitle,
    ogDescription: input.ogDescription ?? OG_TRUST_SUMMARY,
    keywords: input.keywords,
    lastUpdated: input.lastUpdated ?? SEO_TUNED_AT,
  };
}

export function programSeo(program: {
  slug: string;
  name: string;
  metaDescription: string;
}): SeoEntry {
  return contentSeo({
    path: `/programs/${program.slug}`,
    seoTitle: `${program.name} in Dehradun | SIMS`,
    seoDescription: program.metaDescription,
    keywords: [
      `${program.name} Dehradun`,
      `${program.name} Uttarakhand`,
      'SIMS Dehradun',
      'HNBUMU affiliated college',
    ],
  });
}

export function blogPostSeo(post: {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}): SeoEntry {
  return contentSeo({
    path: `/blog/${post.slug}`,
    seoTitle: post.metaTitle,
    seoDescription: post.metaDescription,
    ogTitle: post.metaTitle,
    ogDescription: post.metaDescription,
    keywords: post.keywords,
  });
}

const DEHRADUN_CORE = [
  'SIMS Dehradun',
  'nursing college Dehradun',
  'HNBUMU affiliated college',
  'paramedical college Uttarakhand',
  'Chakrata Road Dehradun',
];

const REGISTRY_LIST: SeoEntry[] = [
  contentSeo({
    path: '/',
    seoTitle: 'Nursing College in Dehradun | SIMS Admissions',
    seoDescription:
      'INC & HNBUMU approved nursing and paramedical college on Chakrata Road, Dehradun. Compare courses and clinical training. Book a counselling call.',
    ogTitle: 'SIMS Dehradun — Admissions for Students & Parents',
    ogDescription:
      'INC and HNBUMU approved nursing college on Chakrata Road. Clinical training, campus safety, and counselling for families. Admissions open.',
    keywords: DEHRADUN_CORE,
  }),
  contentSeo({
    path: '/about',
    seoTitle: 'About SIMS Dehradun | INC & HNBUMU College',
    seoDescription:
      'Sushila Institute of Medical Sciences, Dehradun — HNBUMU-affiliated nursing and paramedical education with labs and clinical training. Plan a campus visit.',
    ogTitle: 'About SIMS Dehradun for Students & Parents',
    ogDescription:
      'An INC and HNBUMU approved college on Chakrata Road. Families can review clinical training, labs, and campus safety before applying.',
    keywords: [
      'about SIMS Dehradun',
      'Sushila Institute of Medical Sciences',
      'nursing institute Uttarakhand',
      'HNBUMU Dehradun',
      'medical college Chakrata Road',
    ],
  }),
  contentSeo({
    path: '/nursing',
    seoTitle: 'Nursing Courses in Dehradun | B.Sc, GNM | SIMS',
    seoDescription:
      'Compare B.Sc Nursing, GNM, Post Basic, and M.Sc Nursing at SIMS Dehradun. INC-aligned labs and HNBUMU affiliation. Talk to admissions today.',
    ogTitle: 'Nursing Courses at SIMS Dehradun',
    ogDescription:
      'B.Sc Nursing, GNM, Post Basic, and M.Sc on an INC and HNBUMU approved campus. Clinical training and a secure Chakrata Road college. Admissions open.',
    keywords: [
      'nursing courses Dehradun',
      'B.Sc Nursing Dehradun',
      'GNM college Dehradun',
      'M.Sc Nursing Uttarakhand',
      'SIMS nursing admissions',
    ],
  }),
  contentSeo({
    path: '/admissions',
    seoTitle: 'SIMS Dehradun Admissions 2026 | Apply Now',
    seoDescription:
      'See eligibility, seats, and admission steps for nursing and paramedical courses at SIMS Dehradun. Apply or book a counselling call today.',
    ogTitle: 'SIMS Dehradun Admissions — Apply with Your Family',
    ogDescription:
      'Clear admission steps at an INC and HNBUMU approved college. Ask about clinical training, campus safety, and the next counselling date.',
    keywords: [
      'SIMS admissions Dehradun',
      'nursing admission Uttarakhand',
      'HNBUMU counselling',
      'paramedical admission Dehradun',
      'apply SIMS college',
    ],
  }),
  contentSeo({
    path: '/facilities',
    seoTitle: 'SIMS Dehradun Campus | Labs, Hostel & Transport',
    seoDescription:
      'See SIMS Dehradun labs, hostel, library, and Chakrata Road transport. A supervised campus built for clinical training. Schedule a visit.',
    ogTitle: 'SIMS Campus — Labs, Hostel & Safe Transport',
    ogDescription:
      'Tour labs, hostel, and buses at our INC and HNBUMU approved Chakrata Road campus. Clinical training spaces parents can verify in person.',
    keywords: [
      'SIMS campus facilities',
      'nursing labs Dehradun',
      'medical college hostel Dehradun',
      'college bus Chakrata Road',
      'SIMS Dehradun infrastructure',
    ],
  }),
  contentSeo({
    path: '/contact-us',
    seoTitle: 'Contact SIMS Dehradun Admissions | Chakrata Road',
    seoDescription:
      'Call SIMS admissions on Chakrata Road, Dehradun for courses, fees, and campus visits. Open Monday to Saturday. Message the team today.',
    ogTitle: 'Contact SIMS Admissions on Chakrata Road',
    ogDescription:
      'Talk to SIMS Dehradun about INC and HNBUMU approved courses, clinical training, and campus safety. Admissions is open Monday to Saturday.',
    keywords: [
      'SIMS contact number',
      'SIMS Dehradun address',
      'Chakrata Road college admissions',
      'nursing college phone Dehradun',
      'SIMS campus visit',
    ],
  }),
  contentSeo({
    path: '/programs/bsc-nursing',
    seoTitle: 'B.Sc Nursing in Dehradun | SIMS | Apply 2026',
    seoDescription:
      '4-year B.Sc Nursing at SIMS Dehradun with skills labs and hospital training. INC & HNBUMU approved. Check eligibility and apply now.',
    ogTitle: 'B.Sc Nursing at SIMS Dehradun',
    ogDescription:
      'A 4-year B.Sc Nursing seat on an INC and HNBUMU approved campus. Skills labs, hospital training, and a secure Chakrata Road college.',
    keywords: [
      'B.Sc Nursing Dehradun',
      'B.Sc Nursing admission Uttarakhand',
      'INC nursing college Dehradun',
      'HNBUMU B.Sc Nursing',
      'SIMS B.Sc Nursing fees',
    ],
  }),
  contentSeo({
    path: '/programs/gnm',
    seoTitle: 'GNM Nursing College in Dehradun | SIMS',
    seoDescription:
      '3-year GNM at SIMS Dehradun with bedside skills and clinical postings. HNBUMU guidance and INC-aligned training. Ask about the next intake.',
    ogTitle: 'GNM Nursing at SIMS Dehradun',
    ogDescription:
      'GNM training at an INC and HNBUMU approved college on Chakrata Road. Clinical postings and a campus families can visit. Admissions open.',
    keywords: [
      'GNM college Dehradun',
      'GNM admission Uttarakhand',
      'general nursing midwifery Dehradun',
      'SIMS GNM',
      'HNBUMU GNM',
    ],
  }),
  contentSeo({
    path: '/programs/post-basic-bsc-nursing',
    seoTitle: 'Post Basic B.Sc Nursing in Dehradun | SIMS',
    seoDescription:
      'Upgrade GNM to a bachelor’s degree at SIMS Dehradun. HNBUMU-affiliated Post Basic B.Sc Nursing with clinical training. Book a counselling call.',
    ogTitle: 'Post Basic B.Sc Nursing at SIMS',
    ogDescription:
      'GNM nurses can upgrade at an INC and HNBUMU approved Dehradun campus. Clinical training on Chakrata Road. Talk with admissions.',
    keywords: [
      'Post Basic B.Sc Nursing Dehradun',
      'GNM to B.Sc Nursing Uttarakhand',
      'Post Basic nursing admission',
      'SIMS Post Basic',
      'HNBUMU nursing upgrade',
    ],
  }),
  contentSeo({
    path: '/programs/bpt',
    seoTitle: 'BPT College in Dehradun | Physiotherapy | SIMS',
    seoDescription:
      'Study Bachelor of Physiotherapy at SIMS Dehradun — rehab labs and clinical postings. HNBUMU affiliated. Apply for the next batch.',
    ogTitle: 'BPT Physiotherapy at SIMS Dehradun',
    ogDescription:
      'Physiotherapy training on an HNBUMU affiliated, INC-recognised health campus. Rehab labs, clinical postings, and a secure Dehradun college.',
    keywords: [
      'BPT college Dehradun',
      'physiotherapy admission Uttarakhand',
      'Bachelor of Physiotherapy Dehradun',
      'SIMS BPT',
      'HNBUMU physiotherapy',
    ],
  }),
  contentSeo({
    path: '/programs/bmlt',
    seoTitle: 'BMLT College in Dehradun | Lab Technology | SIMS',
    seoDescription:
      'BMLT at SIMS Dehradun covers pathology, biochemistry, and diagnostics in campus labs. HNBUMU affiliated. Talk to admissions today.',
    ogTitle: 'BMLT Lab Technology at SIMS Dehradun',
    ogDescription:
      'Diagnostic lab training at an HNBUMU affiliated college on Chakrata Road. Clinical practice and a campus parents can inspect. Admissions open.',
    keywords: [
      'BMLT college Dehradun',
      'medical lab technology Uttarakhand',
      'BMLT admission Dehradun',
      'SIMS BMLT',
      'HNBUMU lab technology',
    ],
  }),
  contentSeo({
    path: '/programs/bmrit',
    seoTitle: 'BMRIT in Dehradun | Radiology Course | SIMS',
    seoDescription:
      'BMRIT at SIMS Dehradun covers imaging labs and clinical radiology training. HNBUMU affiliated. Check eligibility and apply now.',
    ogTitle: 'BMRIT Radiology at SIMS Dehradun',
    ogDescription:
      'Radiology and imaging training at an HNBUMU affiliated Chakrata Road campus. Supervised labs, clinical exposure, and admissions support.',
    keywords: [
      'BMRIT Dehradun',
      'radiology course Uttarakhand',
      'medical imaging technology Dehradun',
      'SIMS BMRIT',
      'HNBUMU radiology',
    ],
  }),
  contentSeo({
    path: '/vision-mission',
    seoTitle: 'Vision & Mission | Medical Education Excellence | SIMS Dehradun',
    seoDescription:
      'Explore the vision and mission of Sushila Institute of Medical Sciences (SIMS), Dehradun — premier health sciences education, ethical healthcare values, skill-based training, and institutional goals for medical education excellence.',
    keywords: ['SIMS vision mission', 'medical education Dehradun', 'SIMS values'],
  }),
  contentSeo({
    path: '/leadership',
    seoTitle: 'SIMS Leadership | Medical Institute Founders & Visionaries | Dehradun',
    seoDescription:
      'Read leadership messages from SIMS founders and educational visionaries in Uttarakhand — Chairman Mr. Sanjeev Kumar Singhal, Chairperson Mrs. Kumkum Singhal, Managing Director Mr. Tushar Singhal, Principal Dr. R. Mayil Vanan, and C.O.O. Dr. Jyoti Juyal Pant.',
    keywords: ['SIMS leadership', 'SIMS founders Dehradun', 'SIMS principal'],
  }),
  contentSeo({
    path: '/awards-highlights',
    seoTitle: 'Medical College Awards & AI in Education Dehradun | SIMS Highlights',
    seoDescription:
      'Discover SIMS awards and highlights — AI-driven medical college in Dehradun, first AI-powered billboard, and community impact: World TB Day Awareness Camp, Tree Plantation, Blood Donation Camp, and Doctor’s Day with RG Medical Hospitals.',
    keywords: ['SIMS awards', 'AI medical college Dehradun', 'SIMS community outreach'],
  }),
  contentSeo({
    path: '/life-at-sims',
    seoTitle: 'Life at SIMS | Sushila Institute of Medical Sciences',
    seoDescription:
      'Explore life at Sushila Institute of Medical Sciences (SIMS), Dehradun — cultural events, community outreach, workshops, campus activities, and student experience.',
    keywords: ['life at SIMS', 'SIMS campus events', 'nursing college life Dehradun'],
  }),
  contentSeo({
    path: '/blog',
    seoTitle: 'SIMS Blog | Nursing & Admissions Guides | Dehradun',
    seoDescription:
      'Guides for BPT, B.Sc Nursing, GNM, Post Basic vs M.Sc, fees, and admissions at Sushila Institute of Medical Sciences (SIMS), Dehradun — clear advice for students and parents.',
    keywords: ['SIMS blog', 'nursing admission guide Dehradun', 'BPT vs nursing Uttarakhand'],
  }),
];

const BY_PATH = new Map(REGISTRY_LIST.map((entry) => [entry.path, entry]));

export function getSeoEntry(path: string): SeoEntry | undefined {
  return BY_PATH.get(path);
}

/** Explicit registry rows. Build-time catalog adds remaining programs, labs, and posts. */
export function registeredSeoEntries(): SeoEntry[] {
  return REGISTRY_LIST;
}
