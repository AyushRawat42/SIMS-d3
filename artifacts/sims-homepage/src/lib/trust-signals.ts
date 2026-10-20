export type RecognitionBadge = {
  id: string;
  title: string;
  detail: string;
};

export type TrustCard = {
  title: string;
  text: string;
};

const HNBUMU: RecognitionBadge = {
  id: 'hnbumu',
  title: 'HNBUMU affiliation',
  detail:
    'Hemwati Nandan Bahuguna Uttarakhand Medical Education University — curriculum, examinations, and the degree or diploma pathway.',
};

const INC: RecognitionBadge = {
  id: 'inc',
  title: 'Indian Nursing Council',
  detail:
    'Nursing programmes are planned against INC norms. Ask admissions for the recognition letter that covers your intake year.',
};

const UK_NURSING: RecognitionBadge = {
  id: 'uk-nursing-council',
  title: 'Uttarakhand Nurses & Midwives Council',
  detail:
    'State council recognition is what supports RN/RM registration after a nursing qualification. Confirm the current letter with admissions.',
};

const UK_PARAMEDICAL: RecognitionBadge = {
  id: 'uk-paramedical',
  title: 'Uttarakhand Paramedical Council',
  detail:
    'Paramedical programmes follow council norms for allied health training. Ask for the approval that applies to your course and batch.',
};

const NURSING_SLUGS = new Set(['bsc-nursing', 'gnm', 'post-basic-bsc-nursing', 'msc-nursing']);

export function recognitionBadgesFor(slug: string): RecognitionBadge[] {
  if (NURSING_SLUGS.has(slug)) {
    return [INC, UK_NURSING, HNBUMU, UK_PARAMEDICAL];
  }
  return [HNBUMU, UK_PARAMEDICAL, INC, UK_NURSING];
}

export function clinicalSettingsFor(slug: string): TrustCard[] {
  const shared: TrustCard[] = [
    {
      title: 'Dehradun hospital rotations',
      text: 'Supervised clinical postings run through the institute’s hospital tie-up network so students move from lab practice into real care settings.',
    },
    {
      title: 'Campus skills labs first',
      text: 'Procedures are demonstrated and return-demonstrated on campus before students are posted, so the first ward day is not the first time they hold the skill.',
    },
    {
      title: 'Internship block',
      text: 'Later training years include practical or internship hours under clinical supervisors. Confirm the posting calendar for your batch in counselling.',
    },
  ];

  if (slug === 'bpt') {
    return [
      {
        title: 'Rehab and hospital physiotherapy',
        text: 'Clinical rotations and the compulsory internship use hospitals and rehabilitation settings around Dehradun, alongside exercise therapy and electrotherapy labs.',
      },
      ...shared.slice(1),
    ];
  }

  if (slug === 'bmlt') {
    return [
      {
        title: 'Diagnostic laboratory exposure',
        text: 'Biochemistry, pathology, microbiology, and hematology practice on campus is followed by internship time in hospital and diagnostic labs.',
      },
      ...shared.slice(0, 2),
    ];
  }

  if (slug === 'bmrit') {
    return [
      {
        title: 'Imaging department rotations',
        text: 'Students learn X-ray, CT, MRI, and ultrasound foundations on campus, then practise positioning, radiation safety, and workflow in hospital imaging settings.',
      },
      ...shared.slice(0, 2),
    ];
  }

  return shared;
}

export function facultyHighlightsFor(slug: string): TrustCard {
  if (slug === 'bpt') {
    return {
      title: 'MPT faculty and clinical instructors',
      text: 'Physiotherapy teaching is led by postgraduate-qualified faculty, including MPT-level instructors, who supervise exercise therapy, electrotherapy, and rehabilitation practice.',
    };
  }
  if (slug === 'bmlt' || slug === 'bmrit') {
    return {
      title: 'Clinical instructors for lab and imaging',
      text: 'Paramedical practicals are supervised by qualified instructors in laboratory and imaging settings, with faculty who teach both the science and the safety checks.',
    };
  }
  return {
    title: 'M.Sc Nursing faculty and clinical instructors',
    text: 'Nursing theory and skills labs are taught by qualified faculty, including M.Sc Nursing educators and clinical instructors, who supervise demonstration and hospital postings.',
  };
}

export const CAMPUS_EXPERIENCE: TrustCard[] = [
  {
    title: 'Practical labs before the ward',
    text: 'Foundation labs, demonstration beds, and modality rooms give students repetitions on campus so clinical postings start from a practised skill, not a diagram.',
  },
  {
    title: 'Smart classrooms',
    text: 'Teaching spaces support demonstration and discussion, so anatomy, procedure steps, and case discussion stay connected to what students later do in labs.',
  },
  {
    title: 'Clinical confidence',
    text: 'The campus experience families describe is supervised practice — return demonstration, posting support, and faculty who are present during lab hours — not a lecture-only timetable.',
  },
];
