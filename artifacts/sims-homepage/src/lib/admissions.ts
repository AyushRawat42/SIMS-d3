export const ADMISSIONS_PAGE = {
  title: 'Admissions at SIMS',
  subtitle:
    'A transparent, merit-based process with clear eligibility guidelines, seat allocation details, and admissions support for applicants.',
  metaDescription:
    'Admissions at Sushila Institute of Medical Sciences (SIMS), Dehradun — admission procedure, eligibility criteria, seat distribution, additional weightage, and contact guidance.',
};

export const LEGAL_NOTE =
  'Admissions at Sushila Institute of Medical Sciences (SIMS) follow the guidelines set by the Hon’ble Supreme Court of India (T.M.A. Pai Foundation & Others vs. State of Karnataka, Writ Petition No. 517 of 1995, judgment dated 31st October 2002).';

export const PROCEDURE_STEPS = [
  {
    id: 'merit',
    title: 'Merit-Based Selection',
    description:
      'Admissions are based on an All India entrance examination followed by an interview conducted by the institute.',
  },
  {
    id: 'nri',
    title: 'NRI / Sponsored Seats',
    description:
      '25% of seats in all courses are reserved for NRI/sponsored candidates, who may receive direct admission based on qualifying examination marks and an interview.',
  },
  {
    id: 'documents',
    title: 'Document Verification',
    description:
      'Candidates must bring their original mark sheets and certificates, along with photocopies, at the time of the interview.',
  },
] as const;

export const UG_ELIGIBILITY = [
  'Must have passed 10+2 (SSCE – 2 Years / CBSE / ISCE / Intermediate Board / Pre-University Examination – 2 Years) with PCB / PCM.',
  'Candidates with a 2-year diploma after 10th (Matriculation) from a recognised board/university can apply for respective courses.',
  'Minimum 45% aggregate marks in PCB/PCM (relaxation for SC/ST/OBC as per norms).',
];

export const PG_DIPLOMA_ELIGIBILITY = {
  intro:
    'Must have completed 10+2+3 education with 50% aggregate marks in relevant subjects from one of the following (or equivalent medical sciences degrees):',
  subjects: [
    'Microbiology',
    'Medical Lab Technology',
    'Medical Microbiology',
    'B.V.Sc.',
    'B.P.T.',
    'B.Sc. (Medical group)',
    'B.Sc. (Radio & Imaging Technology)',
    'B.Sc. (Nursing)',
    'M.B.B.S.',
  ],
};

export const SEAT_DISTRIBUTION = [
  {
    value: '75%',
    label: 'Entrance + Interview',
    detail: 'Of total seats are filled through a common entrance test and interview conducted by SIMS.',
  },
  {
    value: '10%',
    label: 'Economically Weaker Sections',
    detail: 'Of these seats are reserved for students from economically weaker sections, including SC/ST/OBC.',
  },
  {
    value: '50%',
    label: 'Uttarakhand Candidates',
    detail: 'Of these seats are reserved for bona fide candidates of Uttarakhand.',
  },
  {
    value: '2%',
    label: 'Physically Challenged',
    detail: 'Seats reserved for physically challenged students.',
  },
  {
    value: '1%',
    label: 'Jammu & Kashmir',
    detail: 'Seat reserved for candidates from Jammu & Kashmir.',
  },
] as const;

export const SEAT_TRANSFER_NOTE =
  'If reserved category seats remain vacant, they will be transferred to the general category.';

export const WEIGHTAGE_CRITERIA = [
  'Have received the National Talent Award from NCERT.',
  'Are NCC cadets with a ‘B’ or ‘C’ certificate, or NSS/MFIP certificate holders.',
  'Have secured first or second position at State/National-level youth festivals, sports events, or tournaments.',
  'Are wives, sons, or daughters of military/paramilitary personnel killed in action, or defence personnel permanently disabled in action.',
] as const;

export const WEIGHTAGE_MARKS_EACH = '2 marks';
export const WEIGHTAGE_MAX = '5 marks';

export const DISCLAIMER =
  'Admission rules, seat reservations, and eligibility conditions may be subject to institutional and regulatory updates. Applicants should contact the admissions office for the latest official guidance before applying.';
