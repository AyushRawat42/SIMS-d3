import type { ResponsiveImage } from '@/lib/responsive-image';
import {
  DSC00080,
  DSC00096,
  DSC00116,
  DSC00123,
  DSC00159,
  DSC00161,
  DSC00171,
  DSC00188,
  DSC00259,
  DSC00317,
  DSC00382,
  DSC00408,
  DSC00413,
  DSC00434,
  DSC00446,
  DSC00456,
  DSC00578,
  DSC00697,
  DSC00738,
  DSC00836,
} from '@/lib/responsive-images.generated';

export const LIFE_PAGE = {
  title: 'Life at SIMS',
  subtitle:
    'Classroom focus, cultural energy, community service, and campus friendships — student life built around healthcare learning.',
  metaDescription:
    'Explore life at Sushila Institute of Medical Sciences (SIMS), Dehradun — cultural events, community outreach, workshops, campus activities, and student experience.',
  intro: [
    'At SIMS, student life is shaped by more than lectures and labs. Official campus programmes encourage leadership, creativity, cultural awareness, community service, and personal wellness alongside nursing and allied health studies.',
    'From health camps and blood donation drives to workshops, cultural gatherings, and milestone celebrations like fresher’s and farewell functions, activities are woven into the academic year so students can participate, collaborate, and grow.',
    'The result is a campus rhythm that balances discipline with belonging — helping future healthcare professionals build confidence, empathy, and teamwork.',
  ],
};

export const LIFE_HERO = {
  src: DSC00317,
  alt: 'SIMS students performing a group dance on stage during a Freshers Party cultural event',
};

export interface LifeActivity {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image: ResponsiveImage;
  imageAlt: string;
}

export const LIFE_ACTIVITIES: LifeActivity[] = [
  {
    id: 'academic',
    title: 'Academic Enrichment',
    description:
      'Seminars, quizzes, poster work, and skills workshops help students sharpen clinical thinking and professional communication beyond routine lectures.',
    highlights: [
      'Guest talks and skill-focused workshops',
      'Clinical skills, first aid, and soft-skills sessions',
      'Quiz, poster, and model exhibition opportunities',
    ],
    image: DSC00259,
    imageAlt: 'SIMS students taking detailed handwritten notes during a classroom learning session',
  },
  {
    id: 'cultural',
    title: 'Cultural Events',
    description:
      'Annual cultural programmes, festival celebrations, ethnic days, fresher’s events, and farewells give students space to perform, celebrate, and build batch camaraderie.',
    highlights: [
      'Dance, music, and talent showcases',
      'Fresher’s, farewell, and festival gatherings',
      'Inter-departmental participation and celebration',
    ],
    image: DSC00738,
    imageAlt: 'Two SIMS students dancing in red sarees on a decorated Freshers Party stage',
  },
  {
    id: 'outreach',
    title: 'Community Outreach',
    description:
      'Students take part in community-facing health work such as medical camps, blood donation drives, and public awareness initiatives that reinforce social responsibility.',
    highlights: [
      'Health check-up and awareness initiatives',
      'Blood donation drives with partner centres',
      'Campaigns on hygiene, nutrition, and first aid',
    ],
    image: DSC00096,
    imageAlt: 'A SIMS student donating blood during a campus blood donation drive',
  },
  {
    id: 'wellness',
    title: 'Sports & Wellness',
    description:
      'Sports meets, fitness challenges, and wellness practices such as yoga and meditation support physical stamina and mental balance for demanding healthcare programmes.',
    highlights: [
      'Annual sports participation opportunities',
      'Yoga and meditation for stress relief',
      'Team spirit through friendly competition',
    ],
    image: DSC00116,
    imageAlt: 'A cheerful group of SIMS students in uniform posing together on campus steps',
  },
  {
    id: 'workshops',
    title: 'Workshops & Seminars',
    description:
      'Interactive sessions with clinicians, researchers, and industry voices help students connect classroom theory with real healthcare practice and professionalism.',
    highlights: [
      'Seminars and panel-style learning',
      'CPR, lab safety, and clinical skills workshops',
      'Communication and professional readiness',
    ],
    image: DSC00434,
    imageAlt: 'A faculty member presenting from a wooden lectern during a classroom seminar session',
  },
  {
    id: 'exposure',
    title: 'Practical Exposure',
    description:
      'Educational visits and field exposure complement campus learning, helping students understand healthcare delivery across community and clinical settings.',
    highlights: [
      'Visits linked to healthcare learning',
      'Exposure beyond the classroom',
      'Preparation for real patient-care environments',
    ],
    image: DSC00578,
    imageAlt: 'Two smiling SIMS students in uniform posing at the door of a campus transport bus',
  },
];

export const LIFE_GALLERY = [
  {
    src: DSC00836,
    alt: 'SIMS Freshers Party award winners and faculty posing on a decorated stage',
    large: true,
  },
  {
    src: DSC00408,
    alt: 'SIMS students celebrating together under a festive balloon arch marked 2024',
    large: false,
  },
  {
    src: DSC00446,
    alt: 'Students performing on stage at the SIMS Freshers Party with balloon decorations',
    large: false,
  },
  {
    src: DSC00382,
    alt: 'Students and guests smiling during a festive campus celebration at SIMS',
    large: false,
  },
  {
    src: DSC00456,
    alt: 'Male SIMS students performing an energetic group dance at a cultural function',
    large: true,
  },
  {
    src: DSC00413,
    alt: 'SIMS students holding certificates of recognition and trophies during a campus celebration',
    large: false,
  },
  {
    src: DSC00080,
    alt: 'SIMS students planting a sapling near the campus canteen during a green initiative',
    large: false,
  },
  {
    src: DSC00697,
    alt: 'A large group of SIMS students and faculty posing outdoors after a campus event',
    large: false,
  },
  {
    src: DSC00159,
    alt: 'Students receiving certificates and trophies on stage during an Independence Day programme',
    large: false,
  },
  {
    src: DSC00171,
    alt: 'SIMS students and staff during a blood donation or health camp session on campus',
    large: false,
  },
];

/** Faculty presence photos only — no names, titles, or profile text */
export const FACULTY_SHOWCASE = [
  {
    src: DSC00123,
    alt: 'Faculty and staff of SIMS gathered for a group photograph during a campus celebration',
  },
  {
    src: DSC00161,
    alt: 'A SIMS faculty member teaching clinical concepts at a classroom whiteboard',
  },
  {
    src: DSC00188,
    alt: 'A SIMS instructor leading a health assessment lecture for nursing students',
  },
  {
    src: DSC00434,
    alt: 'A SIMS educator presenting from the lectern during an academic session',
  },
];

export const LIFE_VALUES = [
  {
    title: 'Discipline with purpose',
    text: 'Uniforms, schedules, and skills practice build habits that transfer into clinical settings.',
  },
  {
    title: 'Compassion in action',
    text: 'Outreach camps and donation drives connect classroom ethics with service to the community.',
  },
  {
    title: 'Confidence through participation',
    text: 'Stage events, seminars, and teamwork moments help students speak up, lead, and collaborate.',
  },
  {
    title: 'Growth beyond the syllabus',
    text: 'Cultural, wellness, and practical exposures widen perspective while healthcare training stays central.',
  },
];
