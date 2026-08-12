import { chairman, director, hnb_umeu_logo, vice_chairperson } from '@/lib/responsive-images.generated';
import { SITE_CONTENT } from '@/lib/site-content';

export const HNB_AFFILIATION = {
  name: 'H.N.B. Uttarakhand Medical Education University',
  shortLabel: 'HNB UTTARAKHAND MEDICAL EDUCATION UNIVERSITY',
  location: 'Dehradun',
  motto: 'Learn to Serve',
  logo: hnb_umeu_logo,
  logoAlt: 'H.N.B. Uttarakhand Medical Education University, Dehradun — official university emblem',
} as const;

export const ABOUT_PAGE = {
  title: 'About SIMS',
  subtitle:
    'Quality healthcare education in Dehradun — modern labs, experienced faculty, and hands-on training for nursing and allied health careers.',
  metaDescription:
    'About Sushila Institute of Medical Sciences (SIMS), Dehradun — healthcare education with hands-on training, affiliation with HNB UTTARAKHAND MEDICAL EDUCATION UNIVERSITY, vision, mission, and leadership messages.',
};

export const ABOUT_INTRO = [
  'At Sushila Institute of Medical Sciences (SIMS), we are dedicated to shaping future healthcare professionals through quality education and hands-on training. Located in Dehradun, we offer modern labs, experienced faculty, and real-world learning to prepare students for careers in nursing, physiotherapy, medical laboratory technology, and related healthcare fields.',
  'SIMS is affiliated with HNB UTTARAKHAND MEDICAL EDUCATION UNIVERSITY, supporting programmes that meet recognised academic and professional standards. With a strong focus on practical skills and industry-ready training, SIMS helps students build a solid foundation for life in healthcare.',
];

export const ABOUT_SOCIAL = {
  title: 'Stay Connected',
  text: 'We believe in the power of connection. On our social channels, we share campus events, student moments, and institute updates — so families and students can stay close to life at SIMS, wherever they are.',
};

export const ABOUT_VISION = {
  title: 'Our Vision',
  paragraphs: [
    'At SIMS, our vision is to empower future healthcare professionals with the knowledge, skills, and ethical values needed to excel in the medical field. We strive to create a learning environment that blends theory with hands-on experience, so our students are industry-ready and prepared to make a meaningful impact in healthcare.',
    'We aspire to emerge as a premier institute in the health sciences — producing competent, ethical, and compassionate professionals dedicated to improving the quality of healthcare in society.',
  ],
};

export const ABOUT_MISSION = {
  title: 'Our Mission',
  paragraphs: [
    'Our mission is to provide high-quality education, skill-based training, and a value-driven environment for our students.',
    'Through our programmes, faculty mentorship, and clinical exposure, we aim to bridge the gap between theory and practice while serving the community.',
  ],
};

export const LEADERSHIP = [
  {
    id: 'chairman',
    role: 'Honourable Chairman Emeritus',
    title: 'Founder & Visionary',
    name: 'Mr. Sanjeev Kumar Singhal',
    quote:
      'Knowledge is Wealth, Wisdom is Treasure, Understanding is Riches, and Ignorance is a Bliss.',
    image: chairman,
    imageAlt: 'Honourable Chairman Emeritus Mr. Sanjeev Kumar Singhal',
  },
  {
    id: 'vice-chairperson',
    role: 'Chairperson',
    name: 'Mrs. Kumkum Singhal',
    quote:
      'Be the spark that kindles the light in others and illuminates the world.',
    image: vice_chairperson,
    imageAlt: 'Chairperson Mrs. Kumkum Singhal',
  },
  {
    id: 'managing-director',
    role: 'Managing Director',
    name: 'Mr. Tushar Singhal',
    quote:
      'Our Actions Will Speak Loud and Fearless, Set your Heart Ablaze and Transform Your Life.',
    image: director,
    imageAlt: 'Managing Director Mr. Tushar Singhal',
  },
] as const;

export const ABOUT_STRENGTHS = [
  {
    title: 'Practical learning',
    text: 'Hands-on labs and clinical-oriented training help students connect classroom concepts with real healthcare practice.',
  },
  {
    title: 'Experienced faculty',
    text: 'Mentorship from educators who guide students through theory, skills practice, and professional growth.',
  },
  {
    title: 'Modern labs',
    text: 'Purpose-built learning spaces support nursing and allied health programmes with relevant teaching aids and equipment.',
  },
  {
    title: 'Healthcare focus',
    text: 'A campus environment shaped around nursing, physiotherapy, diagnostics, and related healthcare pathways.',
  },
];

export const ABOUT_SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: SITE_CONTENT.social.facebook,
  },
  {
    label: 'Instagram',
    href: SITE_CONTENT.social.instagram,
  },
  {
    label: 'YouTube',
    href: SITE_CONTENT.social.youtube,
  },
] as const;
