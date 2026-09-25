import { WHATSAPP_CONTACT } from '@/lib/site-content';
import type { ResponsiveImage } from '@/lib/responsive-image';
import {
  DSC00177_scaled,
  DSC00287,
  DSC00484,
  DSC05175,
  facility_av_auditorium_lecture,
  facility_conference_room_study,
  facility_library_students,
  facility_multipurpose_hall_event,
  lab_pathology_microscope_examination,
  lab_radiology_xray_film_review,
  sims_campus_entrance,
} from '@/lib/responsive-images.generated';

export type BlogFaq = {
  question: string;
  answer: string;
};

export type FeeComparisonRow = {
  courseName: string;
  duration: string;
  approxAnnualTuition: string;
  clinicalLabDetails: string;
  eligibility: string;
};

export type AdditionalCostBlock = {
  title: string;
  summary: string;
  budgetNote: string;
};

export type ChecklistRow = {
  lookFor: string;
  redFlag: string;
};

export type QualityParameter = {
  title: string;
  summary: string;
};

export type RichPart =
  | { type: 'text'; value: string }
  | { type: 'link'; href: string; value: string };

export type BlogPostBase = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /**
   * Visibility control. `false` = draft — hidden from /blog index, sitemap,
   * footer/featured widgets; direct URL shows Coming Soon (not full article).
   * Flip to `true` when ready to publish.
   */
  published: boolean;
  publishedAt: string;
  updatedAt: string;
  author: string;
  readingTime: string;
  keywords: string[];
  excerpt: string;
  breadcrumbLabel: string;
  /** Direct-answer opening for featured snippet / above-the-fold clarity. */
  directAnswer: string;
  faqs: BlogFaq[];
  faqSectionSubtitle: string;
  whatsappCtaLabel: string;
  whatsappPrefill: string;
  closingCtaTitle: string;
  closingCtaBody: string;
};

export type FeeStructurePost = BlogPostBase & {
  template: 'fee-structure';
  audienceIntroTitle: string;
  audienceIntro: string;
  comparisonIntro: string;
  comparisonRows: FeeComparisonRow[];
  feeDisclaimer: string;
  additionalCostsIntro: string;
  additionalCosts: AdditionalCostBlock[];
  clinicalJustificationTitle: string;
  clinicalJustification: string[];
  /** Absolute path under public/ when the PDF is uploaded; null = WhatsApp fallback. */
  feePdfPath: string | null;
  pdfCtaLabel: string;
  relatedProgramLinks: { href: string; label: string }[];
};

export type CollegeGuidePost = BlogPostBase & {
  template: 'college-guide';
  parametersTitle: string;
  parameters: QualityParameter[];
  caseStudyTitle: string;
  caseStudyParagraphs: string[];
  checklistTitle: string;
  checklistIntro: string;
  checklistRows: ChecklistRow[];
  admissionTitle: string;
  admissionParagraphs: RichPart[][];
  exploreLinks: { href: string; label: string }[];
};

export type DegreePhase = {
  title: string;
  duration: string;
  summary: string;
  topics: string[];
};

export type SalaryRow = {
  sector: string;
  roleFocus: string;
  startingPay: string;
  growthNote: string;
};

export type AdmissionStep = {
  step: string;
  detail: string;
};

export type CareerGuidePost = BlogPostBase & {
  template: 'career-guide';
  demandIntro: string;
  degreeTitle: string;
  degreeIntro: string;
  degreePhases: DegreePhase[];
  salaryTitle: string;
  salaryIntro: string;
  salaryDisclaimer: string;
  salaryRows: SalaryRow[];
  campusTitle: string;
  campusParagraphs: string[];
  campusLabLinks: { href: string; label: string }[];
  admissionTitle: string;
  admissionIntro: string;
  admissionSteps: AdmissionStep[];
  exploreLinks: { href: string; label: string }[];
};

export type TourFigure = {
  /** Canonical public path for CMS / markdown placeholders. */
  srcPath: string;
  alt: string;
  caption: string;
  image: ResponsiveImage;
  href?: string;
  hrefLabel?: string;
};

export type TourStop = {
  id: string;
  title: string;
  paragraphs: string[];
  figures: TourFigure[];
};

export type CommuteRow = {
  from: string;
  distance: string;
  time: string;
  options: string;
};

export type VisitStep = {
  title: string;
  detail: string;
};

export type CampusTourPost = BlogPostBase & {
  template: 'campus-tour';
  introTitle: string;
  intro: string[];
  heroFigure: TourFigure;
  stops: TourStop[];
  locationTitle: string;
  locationIntro: string;
  commuteIntro: string;
  commuteRows: CommuteRow[];
  visitTitle: string;
  visitingHours: string;
  visitingHoursNote: string;
  appointmentHref: string;
  appointmentLabel: string;
  visitSteps: VisitStep[];
  exploreLinks: { href: string; label: string }[];
};

export type UpgradeCompareRow = {
  criterion: string;
  postBasic: string;
  msc: string;
};

export type TrainingBlock = {
  title: string;
  summary: string;
};

export type NursingUpgradePost = BlogPostBase & {
  template: 'nursing-upgrade';
  audienceIntroTitle: string;
  audienceIntro: string;
  comparisonIntro: string;
  comparisonRows: UpgradeCompareRow[];
  comparisonDisclaimer: string;
  registrationTitle: string;
  registrationIntro: string;
  registrationPoints: string[];
  trainingTitle: string;
  trainingIntro: string;
  trainingBlocks: TrainingBlock[];
  chooseTitle: string;
  chooseParagraphs: RichPart[][];
  applyHref: string;
  applyCtaLabel: string;
  exploreLinks: { href: string; label: string }[];
};

export type BlogPost =
  | FeeStructurePost
  | CollegeGuidePost
  | CareerGuidePost
  | CampusTourPost
  | NursingUpgradePost;

const FEE_PDF_WHATSAPP_TEXT =
  'Hello SIMS Admissions, I would like the complete 2026–27 B.Sc Nursing / GNM fee structure PDF (tuition, hostel, clinical & exam charges).';

export function whatsappHrefWithText(text: string): string {
  return `${WHATSAPP_CONTACT.href}?text=${encodeURIComponent(text)}`;
}

export function isFeeStructurePost(post: BlogPost): post is FeeStructurePost {
  return post.template === 'fee-structure';
}

export function isCollegeGuidePost(post: BlogPost): post is CollegeGuidePost {
  return post.template === 'college-guide';
}

export function isCareerGuidePost(post: BlogPost): post is CareerGuidePost {
  return post.template === 'career-guide';
}

export function isCampusTourPost(post: BlogPost): post is CampusTourPost {
  return post.template === 'campus-tour';
}

export function isNursingUpgradePost(post: BlogPost): post is NursingUpgradePost {
  return post.template === 'nursing-upgrade';
}

export const FEE_STRUCTURE_POST: FeeStructurePost = {
  template: 'fee-structure',
  slug: 'bsc-nursing-gnm-fee-structure-dehradun-2026-27',
  published: true,
  title:
    'B.Sc Nursing & GNM Fee Structure in Dehradun (2026–27): Tuition, Hostel & Clinical Training Charges',
  metaTitle: 'B.Sc Nursing & GNM Fee Structure in Dehradun (2026–27) | SIMS',
  metaDescription:
    'Official SIMS College of Nursing 2026–27 fees: B.Sc Nursing ₹1,68,000/year, GNM ₹90,000/year, plus application, admission & uniform. Download the PDF.',
  publishedAt: '2026-09-25',
  updatedAt: '2026-09-25',
  author: 'SIMS Admissions',
  readingTime: '8 min read',
  breadcrumbLabel: 'Fee Structure 2026–27',
  keywords: [
    'sims bsc nursing fees',
    'bsc nursing colleges in dehradun with fee structure',
    'sushila institute of medical sciences fees structure',
    'sims college of nursing dehradun fee structure',
  ],
  excerpt:
    'Official SIMS College of Nursing Batch 2026 academic fees for B.Sc Nursing and GNM, with application, admission, uniform, and exam-fee notes from the institute PDF.',
  directAnswer:
    'For Batch 2026 at SIMS College of Nursing, Dehradun, official academic fees are ₹1,68,000 per year for B.Sc Nursing (all four years) and ₹90,000 per year for GNM (all three years). Application is ₹1,000, admission ₹10,000, and uniform ₹9,000. Exam fees are not included in those figures, and fees are not refundable once submitted. Hostel and mess are not listed on this academic sheet—confirm living costs with admissions. Download the official PDF below.',
  audienceIntroTitle: 'Who this fee guide is for',
  audienceIntro:
    'This guide is written for 12th-grade PCB students and parents in Uttarakhand, Uttar Pradesh, and Bihar who are comparing B.Sc Nursing colleges in Dehradun with fee structure clarity before they pay a counselling or admission fee. If you have searched for SIMS B.Sc Nursing fees, Sushila Institute of Medical Sciences fees structure, or SIMS College of Nursing Dehradun fee structure, the amounts below are taken from the official SIMS College of Nursing Batch 2026 fee sheet—not from third-party listing sites.',
  comparisonIntro:
    'Academic (tuition) heads below are from the official SIMS College of Nursing fee sheet for Batch 2026. Application, admission, and uniform are listed once on that sheet; university/board exam fees are explicitly excluded. Skills-lab and hospital training are part of the programme—they are not given as a separate rupee line on this PDF.',
  comparisonRows: [
    {
      courseName: 'B.Sc Nursing',
      duration: '4 Years',
      approxAnnualTuition: '₹1,68,000 academic fee each year (1st–4th)',
      clinicalLabDetails:
        'Nursing skills labs and hospital postings are part of the course. Exam fees are not included in the academic figure. First-year extras on the sheet: application ₹1,000, admission ₹10,000, uniform ₹9,000.',
      eligibility: '10+2 with Physics, Chemistry, Biology & English (as per university norms)',
    },
    {
      courseName: 'GNM',
      duration: '3 Years',
      approxAnnualTuition: '₹90,000 academic fee each year (1st–3rd)',
      clinicalLabDetails:
        'Foundational nursing labs, midwifery practice, and supervised clinical postings are part of the diploma pathway. Exam fees are not included. Same application ₹1,000, admission ₹10,000, and uniform ₹9,000 as listed for nursing programmes.',
      eligibility: '10+2 or equivalent (as per admission guidelines)',
    },
    {
      courseName: 'Post Basic B.Sc Nursing',
      duration: '2 Years',
      approxAnnualTuition: '₹1,05,000 (1st year); ₹1,10,000 (2nd year)',
      clinicalLabDetails:
        'Academic fees as listed on the same College of Nursing sheet. Application ₹1,000, admission ₹10,000, uniform ₹9,000; exam fees not included.',
      eligibility: 'Registered GNM (as per programme / council norms)',
    },
    {
      courseName: 'M.Sc Nursing',
      duration: '2 Years',
      approxAnnualTuition: '₹1,25,000 (1st year); ₹1,10,000 (2nd year)',
      clinicalLabDetails:
        'Academic fees as listed on the same College of Nursing sheet. Application ₹1,000, admission ₹10,000, uniform ₹9,000; exam fees not included.',
      eligibility: 'B.Sc / Post Basic B.Sc Nursing with required registration (as per norms)',
    },
  ],
  feeDisclaimer:
    'Figures are from the official SIMS College of Nursing Batch 2026 fee sheet (Sushila Institute of Medical Sciences). They apply to the academic heads printed on that PDF. Exam fees are not included. Fees are not refundable once submitted. Hostel, mess, and any other living costs are not printed on this sheet—confirm those with an admissions counselor. Always match a payment demand against the downloaded PDF.',
  additionalCostsIntro:
    'Academic fees are only part of the first-year budget. The official nursing sheet also lists application, admission, and uniform. Hostel and mess must be confirmed separately because they are not on this PDF.',
  additionalCosts: [
    {
      title: 'Application, admission & uniform',
      summary:
        'On the SIMS College of Nursing Batch 2026 sheet, application is ₹1,000, admission is ₹10,000, and uniform is ₹9,000. These sit alongside the yearly academic fee rather than inside it.',
      budgetNote:
        'For B.Sc Nursing, first-year academic plus these three heads totals ₹1,88,000 before exam fees. For GNM, the same extras on ₹90,000 academic fee total ₹1,10,000 before exam fees. Later years are listed as academic fee only on this sheet.',
    },
    {
      title: 'Hostel & Mess',
      summary:
        'Separate boys’ and girls’ hostels with mess/canteen meals are available for outstation students from UP, Bihar, and other Uttarakhand districts. Campus security, CCTV, and a study-friendly routine matter as much as the monthly rent.',
      budgetNote:
        'Hostel and mess rupee amounts are not printed on the Batch 2026 academic fee PDF. Ask admissions for current room-sharing options and what mess includes before you budget living costs.',
    },
    {
      title: 'Examination fees',
      summary:
        'The official sheet states that exam fees are not included in the academic figures above. University or board examination charges are therefore a separate head at exam time.',
      budgetNote:
        'Do not treat ₹1,68,000 (B.Sc) or ₹90,000 (GNM) as an all-in annual cost. Confirm the current exam-fee amount with admissions or the examining body when the exam notice is issued.',
    },
  ],
  clinicalJustificationTitle: 'Why practical clinical exposure at SIMS justifies the investment',
  clinicalJustification: [
    'A low sticker price from a coaching-style or theory-heavy setup often hides the real cost: weak bedside readiness. Nursing careers are built on supervised practice—vital signs, wound care concepts, midwifery skills, community health visits, and confident communication with patients and teams.',
    'At SIMS Dehradun, learning is anchored in purpose-built nursing labs (foundation, adult health, child health, OBG, community health, and advanced skills), experienced faculty, and hospital internship exposure through the institute’s clinical tie-up network—so classroom theory turns into ward-ready competence.',
    'SIMS is affiliated with Hemvati Nandan Bahuguna Medical Education University (HNBUMU), aligning curriculum expectations with recognised nursing and paramedical standards in Uttarakhand. Scholarships, demo classes, and flexible fee structures further support families who want quality without opaque “donation” culture.',
    'When you compare B.Sc Nursing colleges in Dehradun with fee structure side by side, weigh what you get per rupee: simulation labs, real clinical postings, and mentorship—not just a brochure. That is how the SIMS College of Nursing Dehradun fee structure is meant to be evaluated: transparent cost, measurable clinical value.',
  ],
  faqs: [
    {
      question: 'Are there installment payment options?',
      answer:
        'SIMS supports flexible fee structures for eligible students. The Batch 2026 academic PDF lists yearly academic heads, not a month-by-month installment calendar. Confirm payment timelines with admissions before you enrol—use the contact form or WhatsApp counselor CTA on this page.',
    },
    {
      question: 'What is the fee difference between GNM and B.Sc Nursing?',
      answer:
        'On the official SIMS College of Nursing Batch 2026 sheet, B.Sc Nursing academic fee is ₹1,68,000 per year for four years; GNM is ₹90,000 per year for three years. Application (₹1,000), admission (₹10,000), and uniform (₹9,000) are listed the same way for both. Exam fees are extra. Hostel is not on this sheet.',
    },
    {
      question: 'What is included in the academic fee versus charged separately?',
      answer:
        'The printed academic fee is the yearly course fee on the College of Nursing sheet. Application, admission, and uniform are listed as separate heads. Exam fees are not included. Skills-lab and clinical training are part of the programme but are not given a separate rupee line on this PDF. Hostel and mess are not listed here.',
    },
    {
      question: 'Is hostel mandatory for B.Sc Nursing and GNM at SIMS?',
      answer:
        'Hostel is strongly recommended for outstation students from UP, Bihar, and other districts, but local day scholars may have different options. Hostel rupee amounts are not on the Batch 2026 academic PDF. Availability, room type, and mess charges are confirmed with admissions.',
    },
  ],
  faqSectionSubtitle:
    'Answers parents ask most when comparing official SIMS B.Sc Nursing fees and GNM costs for 2026–27.',
  feePdfPath: '/downloads/sims-fee-structure-2026-27.pdf',
  pdfCtaLabel: 'Download Complete 2026–27 Fee PDF',
  whatsappCtaLabel: 'Speak to an Admissions Counselor on WhatsApp',
  whatsappPrefill:
    'Hello SIMS Admissions, I want to speak with a counselor about B.Sc Nursing / GNM fees and admission for 2026–27.',
  relatedProgramLinks: [
    { href: '/nursing', label: 'Nursing programmes hub' },
    { href: '/programs/bsc-nursing', label: 'B.Sc Nursing program' },
    { href: '/programs/gnm', label: 'GNM program' },
    { href: '/programs/post-basic-bsc-nursing', label: 'Post Basic B.Sc Nursing' },
    { href: '/programs/msc-nursing', label: 'M.Sc Nursing' },
    { href: '/facilities/laboratories', label: 'Explore labs' },
  ],
  closingCtaTitle: 'Get your exact 2026–27 fee schedule',
  closingCtaBody:
    'Download the official Batch 2026 fee PDF, or speak with an admissions counselor about B.Sc Nursing, GNM, installments, hostel, and examination charges.',
};

export const COLLEGE_SELECTION_POST: CollegeGuidePost = {
  template: 'college-guide',
  slug: 'top-private-bsc-nursing-colleges-dehradun-affiliation-eligibility-checklist',
  published: true,
  title:
    'Top Private B.Sc Nursing Colleges in Dehradun: Affiliation, Eligibility, and Campus Selection Checklist',
  metaTitle: 'Top Private B.Sc Nursing Colleges in Dehradun | Checklist | SIMS',
  metaDescription:
    'Compare private B.Sc Nursing colleges in Dehradun: INC/State Council recognition, HNBUMU affiliation, hospital tie-ups, faculty ratio, eligibility, and a campus checklist.',
  publishedAt: '2026-09-09',
  updatedAt: '2026-09-09',
  author: 'SIMS Academic Guidance',
  readingTime: '9 min read',
  breadcrumbLabel: 'College Selection Checklist',
  keywords: [
    'bsc nursing colleges in dehradun',
    'sims nursing college dehradun',
    'sushila college of nursing dehradun',
    'private nursing college in dehradun',
  ],
  excerpt:
    'A commercial-investigation guide for students comparing private B.Sc Nursing colleges in Dehradun—recognition, affiliation, clinical beds, faculty, eligibility, and red flags.',
  directAnswer:
    'Before you pay any admission fee at a private nursing college in Dehradun, verify four non-negotiables: INC / State Nursing Council recognition, HNBUMU (or equivalent) university affiliation, hospital tie-ups with adequate clinical bed exposure, and a workable faculty-to-student ratio. Skip campuses that cannot document all four in writing.',
  parametersTitle: 'Four checks before you pay admission fees',
  parameters: [
    {
      title: '1. INC / State Nursing Council recognition',
      summary:
        'Ask for the college’s Indian Nursing Council and/or Uttarakhand State Nursing & Midwives Council recognition status for B.Sc Nursing. Without valid recognition, registration as a nurse after graduation can become difficult—regardless of how polished the campus tour looks.',
    },
    {
      title: '2. HNBUMU university affiliation',
      summary:
        'For degree-level B.Sc Nursing in Uttarakhand, confirm affiliation with Hemvati Nandan Bahuguna Medical Education University (HNBUMU) or the university named on the prospectus. Affiliation governs curriculum, examinations, and the legitimacy of your degree certificate.',
    },
    {
      title: '3. Hospital tie-ups and clinical bed count',
      summary:
        'Theory alone does not create ward-ready nurses. Request the list of parent/associated hospitals, typical posting wards, and how clinical bed strength supports batch size. Vague “tie-up soon” answers are a warning sign for any private nursing college in Dehradun.',
    },
    {
      title: '4. Faculty ratio and teaching continuity',
      summary:
        'Ask about sanctioned vs filled nursing faculty posts, specialty teachers (medical-surgical, OBG, paediatric, community health), and who supervises skills labs. High student loads with rotating guest lecturers often mean weak bedside mentorship.',
    },
  ],
  caseStudyTitle: 'How a quality private campus looks in practice: SIMS Dehradun as a case study',
  caseStudyParagraphs: [
    'When families shortlist B.Sc Nursing colleges in Dehradun, the useful question is not “which brochure is brightest?” but “which institute can prove recognition, affiliation, clinical exposure, and faculty depth on the same visit?” Sushila Institute of Medical Sciences—often searched as SIMS nursing college Dehradun or Sushila College of Nursing Dehradun—is a useful reference point because those four pillars are built into how the campus describes its nursing pathway.',
    'SIMS is affiliated with Hemvati Nandan Bahuguna Medical Education University (HNBUMU) and positions nursing education around modern skills laboratories, experienced faculty, and hospital internship exposure through its clinical tie-up network. That combination matters more than a discounted first-semester fee: clinical hours and supervised practice decide whether graduates are confident on day one of staffing.',
    'Use SIMS the same way a careful investigator would use any serious private nursing college in Dehradun—ask for documents, walk the labs, confirm posting hospitals, and compare faculty availability. Treat every campus, including this one, as a checklist exercise rather than a brand decision made under counselling pressure.',
  ],
  checklistTitle: 'Campus selection checklist: what to look for vs red flags',
  checklistIntro:
    'Carry this table on campus visits. Tick the left column only when staff can show evidence—approval letters, affiliation letters, hospital MOUs, lab inventories, or faculty lists—not verbal assurances.',
  checklistRows: [
    {
      lookFor:
        'Valid INC / State Nursing Council recognition displayed or shared as an official letter for the B.Sc Nursing intake year',
      redFlag:
        '“Approval is under process,” expired letters, or refusal to share recognition details before fee payment',
    },
    {
      lookFor:
        'Clear HNBUMU (or named university) affiliation for B.Sc Nursing with exam and degree awarding clarity',
      redFlag:
        'Ambiguous “affiliated college” claims without the university name, or multiple conflicting prospectus statements',
    },
    {
      lookFor:
        'Named parent/associated hospitals, typical clinical wards, and a realistic bed-to-student clinical plan',
      redFlag:
        'No parent/associated hospital, “tie-ups coming soon,” or clinical postings that exist only on paper',
    },
    {
      lookFor:
        'Functional nursing foundation, adult health, child health, OBG, and community health labs with maintained simulation equipment',
      redFlag:
        'Outdated or unused simulation mannequins, locked labs shown only in photos, or theory-only skills teaching',
    },
    {
      lookFor:
        'Documented faculty strength across specialties and visible clinical supervisors during lab/hospital hours',
      redFlag:
        'One coordinator covering every specialty, frequent faculty vacancies, or no named clinical preceptors',
    },
    {
      lookFor:
        'Transparent eligibility, seat categories, and fee heads shared before counselling deposits',
      redFlag:
        'Pressure to pay the same day, hidden “development” charges, or refusal to itemise hostel/clinical/exam fees',
    },
  ],
  admissionTitle: 'Admission route for B.Sc Nursing: PCB percentage, entrance, and counselling seats',
  admissionParagraphs: [
    [
      {
        type: 'text',
        value:
          'Most private B.Sc Nursing pathways in Dehradun expect 10+2 with Physics, Chemistry, Biology (and typically English). At SIMS, undergraduate eligibility generally requires a recognised 10+2 pathway with PCB/PCM and a minimum 45% aggregate in PCB/PCM, with category relaxation as per norms. Always reconfirm the current year’s cut-offs on the ',
      },
      { type: 'link', href: '/admissions', value: 'SIMS admissions page' },
      {
        type: 'text',
        value: ' before you travel for counselling.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Selection is not only a board-percentage story. SIMS follows a merit-based process built around an All India entrance examination followed by an institute interview for the majority of seats. About 75% of seats are filled through that entrance-plus-interview route, while a defined share is reserved for NRI/sponsored candidates who may receive direct admission based on qualifying examination marks and an interview. Document verification with original mark sheets is mandatory at interview time.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Seat planning also includes institutional reservations (for example, economically weaker sections within the entrance pool, bona fide Uttarakhand candidates, and other notified categories). If you are comparing multiple campuses, ask each college for the same breakdown: entrance seats vs direct/counselling categories, required documents, and whether any seat can move to general if reserved seats remain vacant. For nursing program details—B.Sc Nursing, GNM, Post Basic, and M.Sc Nursing—start from the ',
      },
      { type: 'link', href: '/nursing', value: 'SIMS nursing programs hub' },
      {
        type: 'text',
        value: ' and then match eligibility to the exact course you want.',
      },
    ],
  ],
  exploreLinks: [
    { href: '/nursing', label: 'Explore nursing programs' },
    { href: '/programs/bsc-nursing', label: 'B.Sc Nursing program' },
    { href: '/admissions', label: 'Read admission procedure' },
    { href: '/facilities/laboratories', label: 'Tour nursing labs' },
    {
      href: '/blog/bsc-nursing-gnm-fee-structure-dehradun-2026-27',
      label: 'Compare fee structure guide',
    },
  ],
  faqs: [
    {
      question: 'Is HNBUMU affiliation enough, or do I still need INC / State Council recognition?',
      answer:
        'You need both layers clarified. University affiliation governs your degree pathway and examinations; nursing council recognition is critical for professional registration and practice. When comparing B.Sc Nursing colleges in Dehradun, ask for written proof of each—do not treat one document as a substitute for the other.',
    },
    {
      question: 'What 12th PCB percentage is typically required for private B.Sc Nursing in Dehradun?',
      answer:
        'Requirements vary by institute and category, but a common private-college baseline is 10+2 with PCB (and English as applicable) around 45% aggregate, with relaxation for reserved categories as per norms. SIMS publishes undergraduate eligibility on its admissions page; always confirm the active intake year’s notice before applying.',
    },
    {
      question: 'Do all seats go through an entrance test?',
      answer:
        'Not necessarily. At SIMS, most seats are filled through an All India entrance examination plus interview, while a notified share of NRI/sponsored seats may follow a direct route based on qualifying marks and an interview. Other colleges may label leftover or management seats differently—ask for the exact seat matrix in writing.',
    },
    {
      question: 'How is SIMS nursing college Dehradun different from a low-cost theory-heavy campus?',
      answer:
        'The practical difference is supervised clinical learning: skills labs, hospital postings through tie-ups, and faculty who can mentor at the bedside—not only classroom lectures. Use the checklist in this article on every campus visit, including Sushila College of Nursing Dehradun / SIMS, and compare evidence rather than brochure claims alone.',
    },
  ],
  faqSectionSubtitle:
    'Common questions from students comparing private nursing colleges in Dehradun before counselling.',
  whatsappCtaLabel: 'Speak to an Admissions Counselor on WhatsApp',
  whatsappPrefill:
    'Hello SIMS Admissions, I am comparing private B.Sc Nursing colleges in Dehradun and want guidance on affiliation, eligibility, and clinical training at SIMS.',
  closingCtaTitle: 'Ready to verify SIMS against your checklist?',
  closingCtaBody:
    'Talk to an admissions counselor about recognition documents, HNBUMU affiliation, clinical postings, and the current B.Sc Nursing admission route—or explore nursing programs and the official admissions procedure on sims.college.',
};

export const BPT_CAREER_POST: CareerGuidePost = {
  template: 'career-guide',
  slug: 'bpt-uttarakhand-eligibility-career-scope-salary-after-12th-pcb',
  published: true,
  title:
    'Bachelor of Physiotherapy (BPT) in Uttarakhand: Eligibility, Career Scope, and Salary After 12th PCB',
  metaTitle: 'BPT in Uttarakhand After 12th PCB | Eligibility, Career & Salary | SIMS',
  metaDescription:
    'BPT course eligibility in Dehradun, career scope, and starting salary paths after 12th PCB—plus how SIMS labs and clinical exposure prepare licensed physiotherapists.',
  publishedAt: '2026-09-09',
  updatedAt: '2026-09-09',
  author: 'SIMS Career Guidance',
  readingTime: '9 min read',
  breadcrumbLabel: 'BPT Career Guide',
  keywords: [
    'bpt colleges in uttarakhand',
    'medical colleges in dehradun',
    'bpt course eligibility dehradun',
    'physiotherapy admission uttarakhand',
  ],
  excerpt:
    'A high-intent guide for PCB students comparing BPT colleges in Uttarakhand—degree structure, salary sectors, SIMS lab training, and admission checklist without NEET dependency.',
  directAnswer:
    'Demand for licensed physiotherapists is rising across multispecialty hospitals, sports complexes, rehabilitation clinics, and private practice. For 12th PCB students who want a clinical healthcare career without NEET-dependent MBBS, Bachelor of Physiotherapy (BPT) in Uttarakhand is a structured 4-year academic pathway plus a 6-month compulsory rotatory internship.',
  demandIntro:
    'If you are scanning medical colleges in Dehradun for a lucrative clinical alternative to MBBS, start with labour-market reality: ageing populations, sports injury loads, post-surgical rehab protocols, and ICU step-down care all need physiotherapists who can assess movement, reduce pain, and restore function. That demand sits in hospitals, sports medicine units, neuro and ortho clinics, geriatric centres, and independent practice—not only in one “government job” track.',
  degreeTitle: 'How the 4.5-year BPT pathway is structured',
  degreeIntro:
    'At SIMS and peer BPT colleges in Uttarakhand, the degree is designed as four years of academic and laboratory instruction followed by a compulsory rotatory clinical internship. Treat the internship as the bridge from lab competence to ward-ready practice—not an optional add-on.',
  degreePhases: [
    {
      title: 'Years 1–4: Academic & lab instruction',
      duration: '4 Years',
      summary:
        'Classroom science plus supervised skills labs build the clinical reasoning you will use on every patient. Core themes include anatomy, physiology, kinesiology/biomechanics, electrotherapy, orthopaedics, and neurology—alongside exercise therapy and rehabilitation sciences.',
      topics: [
        'Anatomy & physiology for physiotherapy',
        'Kinesiology / biomechanics & exercise therapy',
        'Electrotherapy and physical agents',
        'Orthopaedics & musculoskeletal rehab foundations',
        'Neurology & cardiopulmonary rehab concepts',
      ],
    },
    {
      title: 'Compulsory rotatory clinical internship',
      duration: '6 Months',
      summary:
        'A mandatory internship rotates you through real clinical environments—hospitals, rehabilitation centres, and related care settings—so assessment, treatment planning, and documentation become habit under supervision.',
      topics: [
        'Supervised patient assessment & treatment planning',
        'Ortho, neuro, and cardiopulmonary case exposure',
        'Clinical documentation & professional ethics',
        'Team communication with doctors and rehab staff',
      ],
    },
  ],
  salaryTitle: 'Career pathways & starting salary matrix',
  salaryIntro:
    'Starting pay for fresh BPT graduates varies by city, employer type, and shift load. Use the matrix below as an India private-sector planning band for early-career roles—not a guaranteed SIMS placement package. Confirm current offers during counselling and campus placements conversations.',
  salaryDisclaimer:
    'Figures are approximate early-career monthly ranges commonly discussed in Indian private hospitals, clinics, and sports setups. Actual packages differ by city (Dehradun vs metros), experience, certifications, and whether the role is full-time, contractual, or private-practice based.',
  salaryRows: [
    {
      sector: 'Sports Medicine',
      roleFocus: 'Injury assessment, taping, return-to-play drills, athlete conditioning support',
      startingPay: '₹25,000 – ₹45,000 / month',
      growthNote: 'Rises with sports certifications, team attachments, and performance outcomes',
    },
    {
      sector: 'ICU / Hospital Rehabilitation',
      roleFocus: 'Post-op mobility, chest physiotherapy support, early mobilisation protocols',
      startingPay: '₹22,000 – ₹40,000 / month',
      growthNote: 'Senior rehab posts and ICU-specialist tracks after hospital experience',
    },
    {
      sector: 'Neuro Clinics',
      roleFocus: 'Stroke, Parkinson’s, spinal, and neuro-rehab exercise programmes',
      startingPay: '₹20,000 – ₹40,000 / month',
      growthNote: 'Higher bands with neuro-rehab fellowships and specialty clinic roles',
    },
    {
      sector: 'Geriatric Care',
      roleFocus: 'Fall prevention, pain management, home/community mobility programmes',
      startingPay: '₹18,000 – ₹35,000 / month',
      growthNote: 'Strong private and home-care demand as senior-care services expand',
    },
  ],
  campusTitle: 'Why practical labs at SIMS Dehradun matter for BPT',
  campusParagraphs: [
    'Brochure photos do not restore a knee or retrain a gait pattern—supervised practice does. Among medical colleges in Dehradun offering physiotherapy, prioritise campuses that can show exercise therapy, electrotherapy, orthopaedics & sports, pain/manual therapy, and rehabilitation centre spaces in active use.',
    'At Sushila Institute of Medical Sciences (SIMS), BPT learning is anchored in purpose-built physiotherapy labs: exercise therapy (kinesiotherapy) for therapeutic exercise prescription; electrotherapy for safe modality practice (ultrasound, TENS, IFT, heat-cold concepts); orthopaedics and sports labs for injury assessment and taping; and a physiotherapy rehabilitation centre for gait, transfers, and functional recovery drills.',
    'Anatomy and physiology foundations sit alongside these therapy labs, and clinical exposure through hospital and rehab postings—plus the compulsory internship—helps convert lab hours into patient-facing confidence. That is the practical filter to use when you compare BPT colleges in Uttarakhand.',
  ],
  campusLabLinks: [
    { href: '/programs/bpt', label: 'BPT program overview' },
    { href: '/facilities/laboratories/exercise-therapy-lab', label: 'Exercise Therapy Lab' },
    { href: '/facilities/laboratories/electrotherapy-lab', label: 'Electrotherapy Lab' },
    {
      href: '/facilities/laboratories/physiotherapy-rehabilitation-center',
      label: 'Rehab Center',
    },
    { href: '/facilities/laboratories', label: 'All laboratories' },
  ],
  admissionTitle: 'Eligibility & admission checklist (Uttarakhand + out-of-state)',
  admissionIntro:
    'Physiotherapy admission in Uttarakhand is typically open to 12th PCB students who meet institute and university norms. SIMS undergraduate eligibility generally expects a recognised 10+2 pathway with science subjects and a minimum 45% aggregate in PCB/PCM (category relaxation as per norms). Always reconfirm the active intake notice on the admissions page before you travel.',
  admissionSteps: [
    {
      step: 'Confirm PCB eligibility',
      detail:
        'Pass 10+2 with Physics, Chemistry, and Biology (English as applicable). Keep mark sheets ready for verification. Out-of-state CBSE/ISC/state-board students follow the same academic bar unless a year’s notice states otherwise.',
    },
    {
      step: 'Shortlist documented BPT colleges',
      detail:
        'Compare affiliation, lab inventory, clinical postings, and fee transparency—not only city fame. Visit or video-tour SIMS labs if you cannot travel immediately.',
    },
    {
      step: 'Entrance / interview route',
      detail:
        'SIMS follows a merit-based process: an All India entrance examination plus interview fills most seats; a notified share of NRI/sponsored seats may use qualifying marks + interview. Carry originals for document verification.',
    },
    {
      step: 'Seat category & counselling deposit',
      detail:
        'Ask for the written seat matrix (entrance vs direct categories, Uttarakhand reservations where applicable). Pay only after you receive a clear fee head list and admission letter terms.',
    },
    {
      step: 'Lock hostel, kit, and joining date',
      detail:
        'Out-of-state families should confirm hostel/mess availability and first-semester kit requirements early—especially before peak counselling weeks.',
    },
  ],
  exploreLinks: [
    { href: '/programs/bpt', label: 'Open BPT program page' },
    { href: '/facilities/laboratories', label: 'Physiotherapy & campus labs' },
    { href: '/admissions', label: 'Admissions procedure' },
    { href: '/contact-us', label: 'Contact admissions' },
  ],
  faqs: [
    {
      question: 'Is NEET required for BPT admission in Uttarakhand?',
      answer:
        'BPT is generally positioned as a healthcare degree pathway that does not depend on NEET-UG the way MBBS does. Institutes may still run their own entrance test and interview. Confirm the current SIMS physiotherapy admission notice for the exact selection mode in your intake year.',
    },
    {
      question: 'What is the BPT course eligibility in Dehradun after 12th PCB?',
      answer:
        'Typical eligibility is 10+2 with Physics, Chemistry, and Biology, meeting the institute’s minimum aggregate (commonly around 45% in PCB/PCM with reserved-category relaxation as per norms). Always verify the active year’s cut-off on the SIMS admissions page before applying.',
    },
    {
      question: 'How long is BPT, and is the internship compulsory?',
      answer:
        'Plan for four years of academic and laboratory instruction plus a six-month compulsory rotatory clinical internship. The internship is mandatory for converting classroom and lab skills into supervised clinical competence.',
    },
    {
      question: 'Can out-of-state students take physiotherapy admission in Uttarakhand?',
      answer:
        'Yes. Many BPT colleges in Uttarakhand, including campuses in Dehradun, admit students from other states who meet eligibility and selection criteria. Ask admissions about any domicile-linked seat shares, hostel options, and document lists for out-of-state applicants.',
    },
  ],
  faqSectionSubtitle:
    'Quick answers for PCB students comparing BPT colleges in Uttarakhand and physiotherapy admission routes in Dehradun.',
  whatsappCtaLabel: 'Ask about BPT seats on WhatsApp',
  whatsappPrefill:
    'Hello SIMS Admissions, I am a 12th PCB student interested in Bachelor of Physiotherapy (BPT) seats at SIMS Dehradun. Please share eligibility, admission steps, and seat availability for 2026–27.',
  closingCtaTitle: 'Check BPT seat availability at SIMS Dehradun',
  closingCtaBody:
    'Message admissions on WhatsApp for direct seat inquiries, eligibility confirmation, and the next counselling steps—or open the BPT program and admissions pages on sims.college.',
};

export const CAMPUS_TOUR_POST: CampusTourPost = {
  template: 'campus-tour',
  slug: 'inside-sims-dehradun-photo-facility-tour-nursing-labs-campus',
  published: true,
  title:
    'Inside SIMS Dehradun: A Photo & Facility Tour of Our Nursing Labs, Paramedical Setup, and Campus',
  metaTitle: 'SIMS Dehradun Photos, Labs & Location | Campus Tour | SIMS',
  metaDescription:
    'See Sushila Institute of Medical Sciences photos: nursing labs, paramedical setup, hostel, and the SIMS College of Nursing Dehradun location on Chakrata Road with commute tips.',
  publishedAt: '2026-09-09',
  updatedAt: '2026-09-09',
  author: 'SIMS Campus Life',
  readingTime: '8 min read',
  breadcrumbLabel: 'Campus Photo Tour',
  keywords: [
    'sushila institute of medical sciences photos',
    'sims college of nursing dehradun location',
    'sims labs',
    'sushila institute of medical sciences location',
  ],
  excerpt:
    'Walk the SIMS Dehradun campus through photos—nursing simulation labs, anatomy and pathology rooms, library, hostel, and exact Chakrata Road directions before you visit.',
  directAnswer:
    'Sushila Institute of Medical Sciences (SIMS) is on Chakrata Road at Sheeshambara, Sighniwala, Central Hope Town, Dehradun – 248197. Families searching Sushila Institute of Medical Sciences photos or SIMS College of Nursing Dehradun location can verify labs, classrooms, and hostel life in person Monday–Saturday, 9 AM–5 PM, after a short appointment with the admissions cell.',
  introTitle: 'Why a photo tour matters before you travel',
  intro: [
    'Parents and applicants from Uttarakhand, Uttar Pradesh, and Bihar rarely enrol on a brochure alone. They want to see whether the campus looks like a working healthcare college: demonstration beds, microscopes, a library that students actually use, and a hostel they would trust. This guide is a virtual walkthrough of SIMS Dehradun—built around Sushila Institute of Medical Sciences photos of SIMS labs and student spaces—so you can check infrastructure before you book a train or taxi.',
    'What follows is not a marketing collage. Each stop names the facility, what students practise there, and what you should look for on a live visit. Use it as a checklist: if a college cannot show the same rooms in person that it shows online, keep looking.',
  ],
  heroFigure: {
    srcPath: '/images/blogs/sims-campus-entrance.webp',
    alt: 'Sushila Institute of Medical Sciences campus entrance on Chakrata Road, Dehradun',
    caption:
      'Campus arrival: the SIMS Dehradun entrance on Chakrata Road—the first landmark families use to confirm Sushila Institute of Medical Sciences location before a lab tour.',
    image: sims_campus_entrance,
    href: '/contact-us',
    hrefLabel: 'Open campus map & contact',
  },
  stops: [
    {
      id: 'nursing-simulation',
      title: 'Nursing Foundation & Advance Simulation Lab',
      paragraphs: [
        'The first rooms most families ask to see are the nursing skills labs. At SIMS, the Nursing Foundation Lab is where GNM and B.Sc Nursing students learn bed-making, vital signs, hygiene care, dressings, and infection-control routines on demonstration beds and mannequins—before they step into hospital wards. Faculty run demonstration–return-demonstration cycles so technique is practised, not only lectured.',
        'Next door in spirit (and usually on the same academic visit) is the Advanced Nursing Skills Lab: BLS/ALS-style mannequins, emergency-cart drills, and higher-acuity procedures such as airway and IV skill trainers. If you are comparing SIMS labs with other private campuses, watch whether mannequins are in active use, trays are complete, and a teacher can walk you through a typical practical class—not only a locked-door photo.',
      ],
      figures: [
        {
          srcPath: '/images/blogs/nursing-lab.webp',
          alt: 'SIMS Nursing Foundation Lab - Advance Mannequins',
          caption:
            'Nursing Foundation Lab: supervised bedside practice on mannequins and demonstration beds—the core of early clinical competence at SIMS College of Nursing, Dehradun.',
          image: DSC00177_scaled,
          href: '/facilities/laboratories/nursing-foundation-lab',
          hrefLabel: 'Nursing Foundation Lab details',
        },
        {
          srcPath: '/images/blogs/advanced-simulation-lab.webp',
          alt: 'SIMS Advanced Nursing Skills Lab simulation with monitoring equipment',
          caption:
            'Advance simulation: critical-care and emergency drills in the Advanced Nursing Skills Lab, so high-acuity steps are rehearsed on campus before hospital postings.',
          image: DSC00287,
          href: '/facilities/laboratories/advanced-nursing-skills-lab',
          hrefLabel: 'Advanced skills lab',
        },
      ],
    },
    {
      id: 'anatomy-pathology',
      title: 'Anatomy & Pathology Laboratories',
      paragraphs: [
        'Paramedical and nursing programmes share a scientific backbone: structure and diagnosis. The Anatomy Lab is a common teaching floor for nursing, BPT, and allied health students—articulated skeletons, organ models, and system charts that make body landmarks usable at the bedside and in imaging rooms.',
        'The Pathology Lab (and related diagnostic spaces) is where BMLT-track students practise microscopy, haematology orientation, staining observation, and sample-handling discipline. Radiology teaching adds X-ray viewing and radiation-safety concepts for imaging technology students. Together these rooms are the paramedical setup families should photograph in their own notes: microscopes on benches, teaching slides, and faculty who can explain a practical, not a empty glass cabinet.',
      ],
      figures: [
        {
          srcPath: '/images/blogs/anatomy-lab.webp',
          alt: 'SIMS Anatomy Lab with bone and organ models for nursing and paramedical students',
          caption:
            'Anatomy Lab: models and charts used across nursing and paramedical programmes—foundational SIMS labs learning before clinical and imaging correlation.',
          image: DSC00484,
          href: '/facilities/laboratories/anatomy-lab',
          hrefLabel: 'Anatomy Lab',
        },
        {
          srcPath: '/images/blogs/pathology-lab.webp',
          alt: 'SIMS Pathology Lab student examining a slide under a microscope',
          caption:
            'Pathology Lab: microscopy and diagnostic observation for paramedical training—one of the rooms to verify when you search Sushila Institute of Medical Sciences photos of SIMS labs.',
          image: lab_pathology_microscope_examination,
          href: '/facilities/laboratories/pathology-lab',
          hrefLabel: 'Pathology Lab',
        },
        {
          srcPath: '/images/blogs/radiology-lab.webp',
          alt: 'SIMS Radiology and Imaging Technology Lab X-ray film review with faculty',
          caption:
            'Paramedical imaging setup: faculty-led radiograph review and positioning concepts in the Radiology & Imaging Technology Lab.',
          image: lab_radiology_xray_film_review,
          href: '/facilities/laboratories/radiology-imaging-technology-lab',
          hrefLabel: 'Radiology lab',
        },
      ],
    },
    {
      id: 'library-classrooms',
      title: 'Library, Seminar Halls, and Smart Classrooms',
      paragraphs: [
        'A healthcare campus is more than labs. The library and resource centre is where students revise anatomy atlases, nursing procedure manuals, and journals between practicals. Look for quiet reading tables, current textbooks, and internet-enabled study—not a locked cupboard labelled “library.”',
        'Seminar and AV spaces host guest lectures, orientation, and department briefings; conference-style rooms and smart classrooms support presentations, counselling interactions, and smaller academic groups. On a visit, ask to sit in a classroom and see projection or display use. That is how you confirm the academic block matches the SIMS College of Nursing Dehradun location you found on the map—not a rented floor elsewhere.',
      ],
      figures: [
        {
          srcPath: '/images/blogs/library-resource-centre.webp',
          alt: 'SIMS library and resource centre with students studying nursing and anatomy textbooks',
          caption:
            'Library & Resource Centre: supervised study space for nursing and allied health references—part of daily campus life, not a brochure-only room.',
          image: facility_library_students,
          href: '/facilities/more',
          hrefLabel: 'More campus facilities',
        },
        {
          srcPath: '/images/blogs/seminar-av-auditorium.webp',
          alt: 'SIMS AV auditorium and seminar hall during an academic lecture',
          caption:
            'Seminar hall / AV auditorium: lectures, orientation, and institute sessions with projection—useful to see in person when you verify campus scale.',
          image: facility_av_auditorium_lecture,
        },
        {
          srcPath: '/images/blogs/smart-classroom.webp',
          alt: 'SIMS smart classroom and conference-style learning space',
          caption:
            'Smart classroom & conference setting: group learning and presentation practice that complements SIMS labs with structured academic discussion.',
          image: facility_conference_room_study,
        },
      ],
    },
    {
      id: 'hostel-life',
      title: 'Hostel, Mess, and Student Recreation Areas',
      paragraphs: [
        'Outstation families judge a college by where a student sleeps and eats. SIMS maintains separate boys’ and girls’ hostel arrangements with furnished rooms, campus-linked access to classes, 24×7 CCTV, and trained security. Mess and canteen service is planned around long academic days—hygiene and routine matter as much as the room photograph.',
        'Recreation is not an afterthought on a healthcare campus: common rooms, a multipurpose hall for events, and informal gathering spaces help students recover between labs and clinical schedules. On your tour, ask about warden contact, visitor rules, and mess inclusions for 2026–27—then walk the route from hostel to the academic block so commute on campus feels real.',
      ],
      figures: [
        {
          srcPath: '/images/blogs/hostel-room.webp',
          alt: 'SIMS student hostel room with study desk and natural light',
          caption:
            'Hostel living: study-friendly rooms on or linked to campus—ask admissions about sharing options, security, and current mess charges when you visit.',
          image: DSC05175,
          href: '/facilities/hostel',
          hrefLabel: 'Hostel facilities',
        },
        {
          srcPath: '/images/blogs/student-recreation-hall.webp',
          alt: 'SIMS multipurpose hall and student recreation space during a campus gathering',
          caption:
            'Student recreation: the multipurpose hall and campus gathering spaces that sit alongside classrooms—part of everyday life at SIMS Dehradun.',
          image: facility_multipurpose_hall_event,
          href: '/life-at-sims',
          hrefLabel: 'Life at SIMS',
        },
      ],
    },
  ],
  locationTitle: 'SIMS College of Nursing Dehradun location & how to reach campus',
  locationIntro:
    'The official Sushila Institute of Medical Sciences location is Sheeshambara, Sighniwala, Chakrata Road, Central Hope Town, Dehradun, Uttarakhand – 248197, India. Chakrata Road is the main westbound corridor from Dehradun towards Vikas Nagar; the campus is a roadside, visitable address—not a hidden inner-lane plot. Pin the name “Sushila Institute of Medical Sciences” in Google Maps before you leave the city, and keep the admissions cell number handy for last-mile guidance.',
  commuteIntro:
    'Times below are typical private-vehicle ranges in mixed Dehradun traffic. Monsoon, tourist weekends, and airport peak hours can add 15–30 minutes. Confirm live ETAs in Google Maps on the day you travel.',
  commuteRows: [
    {
      from: 'ISBT Dehradun (Patel Nagar)',
      distance: 'About 18–25 km',
      time: '40–60 minutes',
      options:
        'App taxi or prepaid cab is the simplest for families with luggage. Local buses and shared autos run along Chakrata Road corridors; SIMS college buses also list Patelnagar ISBT on student routes during term. Ask admissions if a counsellor can meet you at ISBT for a first visit.',
    },
    {
      from: 'Dehradun Railway Station (Dehradun Junction)',
      distance: 'About 20–28 km',
      time: '45–70 minutes',
      options:
        'Station prepaid taxis, Ola/Uber, and auto-rickshaw plus a taxi for the Chakrata Road stretch are common. Direct city buses towards Vikas Nagar / Chakrata Road can work for light luggage. Allow extra time if your train arrives in the evening.',
    },
    {
      from: 'Jolly Grant Airport (DED)',
      distance: 'About 45–60 km',
      time: '90–120 minutes',
      options:
        'The airport sits south-east of the city; SIMS is west on Chakrata Road, so the drive crosses Dehradun rather than a short hop. Pre-book a taxi to Sheeshambara / Sighniwala, Chakrata Road. There is no direct rail link from the airport—do not plan a tight same-day lab tour after a late landing.',
    },
  ],
  visitTitle: 'Plan your campus visit',
  visitingHours: 'Monday to Saturday, 9 AM – 5 PM',
  visitingHoursNote:
    'Closed on Sundays and public holidays unless admissions confirms an exception. Lab walkthroughs are smoother on weekdays when practical classes are running—call ahead so a counsellor can open SIMS labs and hostel areas you want to see.',
  appointmentHref: '/contact-us',
  appointmentLabel: 'Book a campus visit',
  visitSteps: [
    {
      title: 'Book a slot',
      detail:
        'Use the campus visit form on Contact Us, tap Apply Now on the website, or message the admissions cell on WhatsApp with your preferred date, number of visitors, and programmes of interest (nursing, BPT, or paramedical).',
    },
    {
      title: 'Carry documents',
      detail:
        'Bring 10+2 mark sheets (or a photocopy) if you want eligibility guidance the same day. You do not need to pay any fee to walk the campus.',
    },
    {
      title: 'Ask to see these rooms',
      detail:
        'Nursing Foundation and Advanced Skills labs, Anatomy and Pathology (plus Radiology if you are considering imaging), library, a classroom, and hostel/mess if the student will stay on campus.',
    },
  ],
  faqs: [
    {
      question: 'Where exactly is SIMS College of Nursing in Dehradun?',
      answer:
        'Sushila Institute of Medical Sciences is at Sheeshambara, Sighniwala, Chakrata Road, Central Hope Town, Dehradun, Uttarakhand – 248197. Search Google Maps for Sushila Institute of Medical Sciences or use the embedded map on this page and on sims.college/contact-us.',
    },
    {
      question: 'Can we visit SIMS labs before taking admission?',
      answer:
        'Yes. Campus visits during office hours are the right way to verify Sushila Institute of Medical Sciences photos against real rooms. Book an appointment so faculty or admissions can walk you through nursing and paramedical labs rather than a reception-only stop.',
    },
    {
      question: 'How long does it take from Jolly Grant Airport?',
      answer:
        'Plan 90–120 minutes by road (about 45–60 km), because the airport and Chakrata Road campus sit on opposite sides of Dehradun. Pre-book a taxi and avoid stacking a late flight with a same-evening tour.',
    },
    {
      question: 'Who should we call for directions on the day of the visit?',
      answer:
        'The admissions cell: +91 9759761244, +91 9759761243, or +91 9759761241 (Monday–Saturday, 9 AM–5 PM). Email Info@sims.college or WhatsApp the same primary number if you are delayed on Chakrata Road.',
    },
  ],
  faqSectionSubtitle:
    'Location, visiting hours, and lab-tour questions from parents verifying SIMS Dehradun before they travel.',
  whatsappCtaLabel: 'WhatsApp to book a campus tour',
  whatsappPrefill:
    'Hello SIMS Admissions, I would like to book a campus visit to see nursing labs, paramedical labs, and hostel facilities at Sushila Institute of Medical Sciences, Chakrata Road, Dehradun.',
  exploreLinks: [
    { href: '/nursing', label: 'Nursing programmes' },
    { href: '/programs/bsc-nursing', label: 'B.Sc Nursing program' },
    { href: '/facilities/laboratories', label: 'All laboratories' },
    { href: '/facilities', label: 'Facilities overview' },
    { href: '/admissions', label: 'Admissions procedure' },
  ],
  closingCtaTitle: 'See the campus in person',
  closingCtaBody:
    'Book a weekday visit, walk SIMS labs with a counsellor, and confirm the Chakrata Road location on the map—then decide with photos and rooms that match.',
};

/** Resolve PDF download href: static file when present, else WhatsApp request. */
export function feePdfHref(post: FeeStructurePost): string {
  if (post.feePdfPath) return post.feePdfPath;
  return whatsappHrefWithText(FEE_PDF_WHATSAPP_TEXT);
}

export function counselorWhatsappHref(post: BlogPost): string {
  return whatsappHrefWithText(post.whatsappPrefill);
}

export const NURSING_UPGRADE_POST: NursingUpgradePost = {
  template: 'nursing-upgrade',
  slug: 'post-basic-bsc-nursing-vs-msc-nursing-career-upgrade',
  published: true,
  title:
    'Post Basic B.Sc Nursing vs. M.Sc Nursing: Which Program Best Elevates Your Nursing Career?',
  metaTitle: 'Post Basic B.Sc vs M.Sc Nursing Career Upgrade | SIMS',
  metaDescription:
    'Compare Post Basic B.Sc Nursing in Dehradun with M.Sc Nursing colleges in Uttarakhand—eligibility, NORCET, UK/Gulf licensing, faculty pathways, and SIMS training.',
  publishedAt: '2026-09-09',
  updatedAt: '2026-09-09',
  author: 'SIMS Academic Guidance',
  readingTime: '8 min read',
  breadcrumbLabel: 'PB B.Sc vs M.Sc Nursing',
  keywords: [
    'msc nursing colleges',
    'msc nursing colleges in uttarakhand',
    'post basic bsc nursing dehradun',
    'nursing career upgrade india',
  ],
  excerpt:
    'A side-by-side guide for GNM and B.Sc nurses comparing Post Basic B.Sc Nursing and M.Sc Nursing—pay-band upgrades, faculty routes, NORCET, and international licensing.',
  directAnswer:
    'Choose Post Basic B.Sc Nursing if you are a GNM with RN/RM registration and need a recognised bachelor’s degree for hospital pay bands and NORCET-style recruitment. Choose M.Sc Nursing if you already hold B.Sc or Post Basic B.Sc Nursing plus required experience and want clinical specialisation, nurse-educator posts, or professorship tracks. Both pathways at SIMS Dehradun are two years; neither replaces a live State Nursing Council registration.',
  audienceIntroTitle: 'Who this comparison is for',
  audienceIntro:
    'This guide is written for working Staff Nurses, GNM diploma holders, and B.Sc graduates who are searching M.Sc Nursing colleges, M.Sc Nursing colleges in Uttarakhand, or Post Basic B.Sc Nursing Dehradun options because they want a nursing career upgrade in India—higher hospital pay bands, Nursing Superintendent pathways, or faculty roles. If you cannot document INC-aligned education plus a current RN/RM licence, pause the application until registration is in order.',
  comparisonIntro:
    'Both programmes are typically two academic years. The split is entry qualification and destination role—not “which degree is shorter.” Confirm the active HNBUMU / INC notice with SIMS admissions before you resign a ward post or take study leave.',
  comparisonRows: [
    {
      criterion: 'Duration',
      postBasic: '2 years (Post-Basic undergraduate degree for GNM holders)',
      msc: '2 years (postgraduate degree after B.Sc / Post Basic B.Sc Nursing)',
    },
    {
      criterion: 'Eligibility',
      postBasic:
        'GNM from a recognised nursing school, plus live RN and RM registration with a State Nursing Council (and any experience the current INC/university notice requires).',
      msc: 'B.Sc Nursing or Post Basic B.Sc Nursing from a recognised college, live RN/RM registration, and typically at least one year of clinical experience after the bachelor’s—as specified by INC / HNBUMU for the intake year.',
    },
    {
      criterion: 'Career scope',
      postBasic:
        'Staff Nurse upgrade toward Ward In-charge, Clinical Supervisor, and Nursing Superintendent / nursing-services leadership pathways; also the academic bridge into M.Sc Nursing.',
      msc: 'Clinical specialisation, nurse-educator and college faculty (tutor / assistant professor) routes, research and quality roles, and senior administrative posts that list a postgraduate nursing degree.',
    },
    {
      criterion: 'Government & international mobility',
      postBasic:
        'A recognised Post Basic B.Sc is the usual degree bar for NORCET and many state nursing-officer advertisements that ask for B.Sc / P.B. B.Sc Nursing. For UK NMC or Gulf (Dataflow + Prometric/DHA/SCFHS-type) licensing, a bachelor-level Indian nursing qualification plus a valid home-country RN licence is the standard starting file—English tests and country exams still apply.',
      msc: 'M.Sc Nursing does not skip NORCET, UK CBT/OSCE, or Gulf Prometric steps, but it strengthens faculty recruitment, specialist job descriptions, and some senior pay matrices. Foreign regulators still verify the underlying B.Sc/P.B. B.Sc, INC recognition, and State Council registration first.',
    },
  ],
  comparisonDisclaimer:
    'Eligibility, experience years, and specialty seats follow Indian Nursing Council and Hemvati Nandan Bahuguna Medical Education University (HNBUMU) notifications for the admission year. NORCET and overseas licensing rules change with each advertisement or regulator update—always match documents to the current official notice, not a third-party listing.',
  registrationTitle: 'Why State Nursing Council registration is non-negotiable',
  registrationIntro:
    'A nursing career upgrade in India fails quietly when the degree is real but the licence is not. Hospitals, NORCET cells, and UK/Gulf credential checkers (Dataflow and similar) look for a live RN/RM entry with a recognised State Nursing Council—often Uttarakhand SNC if you will practise in the state, or your home-state council if that is where you are registered—together with INC-aligned college recognition.',
  registrationPoints: [
    'Keep RN and RM (or equivalent midwifery registration where required) active and renewable. Lapsed registration blocks government recruitment and most international Dataflow files even if your mark sheet is in hand.',
    'Verify that the college you join—whether for Post Basic B.Sc Nursing in Dehradun or among M.Sc Nursing colleges in Uttarakhand—can show INC / State Council recognition and HNBUMU (or named university) affiliation in writing.',
    'After you graduate, complete additional qualification registration with your State Nursing Council so the new degree appears on the licence record. Superintendents and faculty selection boards check this, not only the university certificate.',
    'Do not enrol in an unrecognised “bridge” that cannot support council registration. That is the most expensive delay in a nursing career upgrade in India.',
  ],
  trainingTitle: 'How SIMS Dehradun structures class time and hospital training for post-basic learners',
  trainingIntro:
    'Post Basic B.Sc Nursing at SIMS is built for GNM-qualified nurses who already know the ward—and now need degree-level theory, research, education, and administration alongside supervised clinical hours. Working nurses should treat the timetable as a professional roster: theory and skills labs on campus, then hospital postings through the institute’s clinical tie-up network. Exact lecture hours and posting blocks for 2026–27 are confirmed in counselling; do not assume an evening-only batch unless admissions states it in writing for your intake.',
  trainingBlocks: [
    {
      title: 'Campus theory & skills labs',
      summary:
        'Classroom blocks cover advanced nursing practice, nursing education, psychology, research, and health administration. Practicals run in SIMS nursing labs (foundation, adult health, child health, OBG, community health, and advanced skills) so procedures are re-checked against degree-level checklists—not assumed from diploma memory.',
    },
    {
      title: 'Hospital clinical postings',
      summary:
        'Supervised hospital training sits beside campus teaching. Post-basic learners are posted into clinical areas aligned with the university scheme so Staff Nurse experience is upgraded into documented, assessed clinical hours—the evidence hospitals and councils expect when you later apply for in-charge or superintendent tracks.',
    },
    {
      title: 'Planning around existing duty',
      summary:
        'If you currently hold a hospital post, use SIMS counselling to map study-leave, night-duty swaps, and posting weeks before you pay fees. Admissions and the nursing office share the current academic calendar during Post Basic counselling so you can negotiate with your employer on facts, not rumours.',
    },
    {
      title: 'Progression into M.Sc Nursing',
      summary:
        'SIMS also offers M.Sc Nursing for graduates who already hold B.Sc or Post Basic B.Sc Nursing. Completing Post Basic at a recognised Dehradun campus is the cleanest route from GNM into the M.Sc Nursing colleges conversation in Uttarakhand—once experience and RN/RM records meet the PG notice.',
    },
  ],
  chooseTitle: 'Which programme should you apply for now?',
  chooseParagraphs: [
    [
      {
        type: 'text',
        value:
          'If your highest nursing qualification is GNM, apply for ',
      },
      { type: 'link', href: '/programs/post-basic-bsc-nursing', value: 'Post Basic B.Sc Nursing' },
      {
        type: 'text',
        value:
          ' first. Direct entry to M.Sc Nursing is not the INC-aligned route from a diploma alone. A recognised Post Basic degree is what unlocks bachelor-level hospital grades, many NORCET-style advertisements, and later PG seats.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'If you already hold B.Sc Nursing or Post Basic B.Sc Nursing with the required experience and a live RN/RM licence, compare ',
      },
      { type: 'link', href: '/programs/msc-nursing', value: 'M.Sc Nursing at SIMS' },
      {
        type: 'text',
        value:
          ' with other M.Sc Nursing colleges in Uttarakhand on specialty seats, faculty strength, and clinical postings—not on brochure adjectives. M.Sc is the degree faculty selection and clinical specialisation usually list.',
      },
    ],
    [
      {
        type: 'text',
        value:
          'Either way, start with documents: GNM or B.Sc mark sheets, INC/university affiliation proof of your previous college, and State Nursing Council RN/RM certificates. Then use the SIMS application portal for counselling so eligibility is checked against the current HNBUMU notice. See the ',
      },
      { type: 'link', href: '/admissions', value: 'admissions procedure' },
      { type: 'text', value: ' and the ' },
      { type: 'link', href: '/nursing', value: 'nursing programmes hub' },
      { type: 'text', value: ' before you travel to Dehradun.' },
    ],
  ],
  applyHref: '/contact-us',
  applyCtaLabel: 'Apply for Post Basic Nursing Counseling',
  faqs: [
    {
      question: 'Can a GNM nurse apply directly to M.Sc Nursing colleges in Uttarakhand?',
      answer:
        'No. M.Sc Nursing typically requires B.Sc Nursing or Post Basic B.Sc Nursing, live RN/RM registration, and the experience years named in that year’s INC/university notice. GNM holders should complete Post Basic B.Sc Nursing in Dehradun (or another recognised college) first, then apply for M.Sc.',
    },
    {
      question: 'Is State Nursing Council RN/RM registration mandatory for Post Basic and M.Sc admission?',
      answer:
        'Yes in practice. Recognised M.Sc Nursing colleges and Post Basic programmes expect you to be a registered nurse and registered midwife (or to hold the midwifery registration your council requires). Keep the licence current; lapsed registration delays admission, NORCET document checks, and UK/Gulf Dataflow.',
    },
    {
      question: 'Does Post Basic B.Sc Nursing help with NORCET and government nursing-officer posts?',
      answer:
        'A recognised B.Sc or Post Basic B.Sc Nursing is the academic qualification most recent NORCET and similar nursing-officer advertisements use. GNM-only files are often ineligible unless a specific advertisement still lists diploma-plus-experience. Always read the current AIIMS/state notification. M.Sc Nursing is additional; it does not replace the bachelor’s requirement.',
    },
    {
      question: 'What should I bring to Post Basic Nursing counselling at SIMS Dehradun?',
      answer:
        'Carry GNM mark sheets and diploma, State Nursing Council RN/RM certificates, photo ID, and experience letters if you have been working. For M.Sc counselling, add B.Sc or Post Basic degree certificates, internship/experience proof, and registration showing the additional qualification where already entered. SIMS will match these against the live HNBUMU/INC eligibility list for 2026–27.',
    },
  ],
  faqSectionSubtitle:
    'Admission doubts GNM and B.Sc nurses raise when comparing Post Basic B.Sc Nursing in Dehradun with M.Sc Nursing colleges.',
  whatsappCtaLabel: 'WhatsApp a nursing counsellor',
  whatsappPrefill:
    'Hello SIMS Admissions, I want Post Basic Nursing counseling. I am a GNM / B.Sc nurse considering Post Basic B.Sc Nursing vs M.Sc Nursing at SIMS Dehradun. Please share eligibility, seats, and the next counselling step.',
  exploreLinks: [
    { href: '/nursing', label: 'All nursing programmes' },
    { href: '/programs/post-basic-bsc-nursing', label: 'Post Basic B.Sc Nursing' },
    { href: '/programs/msc-nursing', label: 'M.Sc Nursing' },
    { href: '/admissions', label: 'Admissions procedure' },
  ],
  closingCtaTitle: 'Ready to upgrade from GNM or B.Sc Nursing?',
  closingCtaBody:
    'Apply for Post Basic Nursing counseling on the SIMS application portal—or message a counsellor—to match your RN/RM documents to Post Basic B.Sc or M.Sc Nursing seats for 2026–27.',
};

export const BLOG_POSTS: BlogPost[] = [
  NURSING_UPGRADE_POST,
  CAMPUS_TOUR_POST,
  BPT_CAREER_POST,
  COLLEGE_SELECTION_POST,
  FEE_STRUCTURE_POST,
];

/** True when the post is live on /blog, sitemap, and public widgets. */
export function isBlogPostPublished(post: BlogPost): boolean {
  return post.published === true;
}

/** Posts visible on the blog index and in featured / footer widgets. */
export function getPublishedBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter(isBlogPostPublished).sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}

/**
 * Resolve a post by slug (includes drafts so the article route can show Coming Soon).
 * Use `getPublishedBlogPosts` / `isBlogPostPublished` for public listings.
 */
export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Hide footer / in-article links that point at unpublished blog URLs. */
export function isPublicSiteHref(href: string): boolean {
  if (!href.startsWith('/blog/')) return true;
  const slug = href.slice('/blog/'.length).split(/[?#]/)[0];
  if (!slug) return true;
  const post = getBlogPost(slug);
  return !post || isBlogPostPublished(post);
}

export function blogPostPath(slug: string): string {
  return `/blog/${slug}`;
}

export function buildFaqPageJsonLd(faqs: BlogFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBlogPostingJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: 'Sushila Institute of Medical Sciences',
      url: 'https://sims.college',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sushila Institute of Medical Sciences',
      url: 'https://sims.college',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://sims.college/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
  };
}
