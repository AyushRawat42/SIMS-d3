import {
  awards_blood_donation,
  awards_campus_facade,
  awards_campus_run_team,
  awards_ceremony_group,
  awards_doctors_day_collage,
  awards_tb_day_group,
  awards_tree_plantation_nursery,
  chairman,
  coo,
  director,
  hnb_umeu_logo,
  principal,
  vice_chairperson,
} from '@/lib/responsive-images.generated';
import { SITE_CONTENT } from '@/lib/site-content';
import type { ResponsiveImage } from '@/lib/responsive-image';

export const HNB_AFFILIATION = {
  name: 'Hemvati Nandan Bahuguna Medical Education University (HNBUMU)',
  shortLabel: 'HNB UTTARAKHAND MEDICAL EDUCATION UNIVERSITY',
  fullName: 'Hemvati Nandan Bahuguna Medical Education University (HNBUMU)',
  location: 'Dehradun, Uttarakhand',
  motto: 'Learn to Serve',
  logo: hnb_umeu_logo,
  logoAlt:
    'Hemvati Nandan Bahuguna Medical Education University (HNBUMU), Dehradun — official university emblem',
} as const;

/* -------------------------------------------------------------------------- */
/* About SIMS (/about) — prospectus pages 2–3                                 */
/* -------------------------------------------------------------------------- */

export const ABOUT_PAGE = {
  title: 'About SIMS',
  subtitle:
    'A leading nursing and paramedical institute in Uttarakhand — nestled in Dehradun with modern labs, experienced faculty, and real-world clinical exposure.',
  metaTitle: 'Top Medical College in Dehradun | Nursing Institute Uttarakhand | SIMS',
  metaDescription:
    'Sushila Institute of Medical Sciences (SIMS) — top medical college and nursing institute in Dehradun, Uttarakhand. Affiliated with Hemvati Nandan Bahuguna Medical Education University (HNBUMU). Explore paramedical sciences, modern labs, and clinical training at SIMS.',
};

export const ABOUT_INTRO = [
  'Nestled in the peaceful, green surroundings of Dehradun, Sushila Institute of Medical Sciences (SIMS) stands as a beacon of quality education and compassionate care. As one of the leading nursing and paramedical institutes in Uttarakhand, SIMS is committed to shaping the next generation of skilled, service-minded healthcare professionals.',
  'Our mission is to make high-quality medical education accessible to all — combining academic excellence with strong ethical values and practical training. We offer a wide range of career-oriented programs in Nursing, Physiotherapy, Radiology, Lab Technology, and other medical sciences, designed to meet the evolving demands of today’s healthcare sector.',
  'With modern laboratories, experienced faculty, and real-world hospital exposure, SIMS ensures students receive hands-on learning and mentorship that truly prepares them for the field. Scholarships, free demo classes, and flexible fee structures further support our vision of inclusive, affordable education.',
  'Affiliated with Hemvati Nandan Bahuguna Medical Education University (HNBUMU), SIMS is recognized for producing highly competent professionals who are ready to lead with skill, integrity, and compassion.',
];

export const ABOUT_INTRO_SECONDARY = [
  'Sushila Institute of Medical Sciences (SIMS), Dehradun, is committed to nurturing skilled, compassionate, and industry-ready healthcare professionals. With a focus on academic excellence and hands-on training, SIMS provides students with the tools they need to succeed in today’s dynamic medical field.',
  'Our state-of-the-art laboratories, experienced faculty, and real-world clinical exposure ensure that every student receives a holistic and practical education. From Nursing and Physiotherapy to Medical Lab Technology and Radiology, our diverse programs are tailored to meet the growing needs of the healthcare sector.',
  'SIMS is proudly affiliated with HNB Uttarakhand Medical Education University (HNBUMU), ensuring our curriculum meets the highest academic and professional standards. We combine theory with practice, values with vision, and learning with purpose — preparing our students to become leaders in healthcare.',
  'At SIMS, we don’t just teach — we inspire, support, and empower. SIMS offers a nurturing environment that promotes personal growth, clinical confidence, and a strong ethical foundation. We believe that true education goes beyond the classroom — it’s about shaping character, cultivating empathy, and building resilience.',
];

export const ABOUT_SOCIAL = {
  title: 'Stay Connected',
  text: 'We believe in the power of connection. On our social channels, we share campus events, student moments, and institute updates — so families and students can stay close to life at SIMS, wherever they are.',
};

export const ABOUT_STRENGTHS = [
  {
    title: 'Modern laboratories',
    text: 'Purpose-built labs and clinical simulation spaces support nursing and allied health programmes with relevant teaching aids and equipment.',
  },
  {
    title: 'Experienced faculty',
    text: 'Mentorship from educators who guide students through theory, skills practice, and professional growth.',
  },
  {
    title: 'Real-world clinical exposure',
    text: 'Hospital tie-ups and hands-on training help students connect classroom learning with live patient-care environments.',
  },
  {
    title: 'Healthcare focus',
    text: 'A campus environment shaped around nursing, physiotherapy, diagnostics, radiology, and related healthcare pathways.',
  },
];

export const ABOUT_SOCIAL_LINKS = [
  { label: 'Facebook', href: SITE_CONTENT.social.facebook },
  { label: 'Instagram', href: SITE_CONTENT.social.instagram },
  { label: 'YouTube', href: SITE_CONTENT.social.youtube },
] as const;

/* -------------------------------------------------------------------------- */
/* Vision & Mission (/vision-mission) — prospectus page 17                    */
/* -------------------------------------------------------------------------- */

export const VISION_MISSION_PAGE = {
  title: 'Vision & Mission',
  subtitle:
    'The foundation of our academic philosophy — shaping every student’s journey from classroom learning to serving in clinics and communities.',
  metaTitle: 'Vision & Mission | Medical Education Excellence | SIMS Dehradun',
  metaDescription:
    'Explore the vision and mission of Sushila Institute of Medical Sciences (SIMS), Dehradun — premier health sciences education, ethical healthcare values, skill-based training, and institutional goals for medical education excellence.',
};

export const ABOUT_VISION = {
  title: 'Our Vision',
  lead: 'To emerge as a premier institute in health sciences, committed to producing competent, ethical, and compassionate professionals who contribute meaningfully to the quality of healthcare in society.',
  paragraphs: [
    'At SIMS, we envision a future where every student is empowered with the knowledge, skills, and values necessary to thrive in the medical field. We aim to foster a learning environment that blends academic rigor with real-world experience — ensuring our graduates are industry-ready and capable of making a lasting impact in healthcare.',
  ],
};

export const ABOUT_MISSION = {
  title: 'Our Mission',
  lead: 'To deliver world-class education, skill-based training, and a value-driven environment that nurtures the next generation of healthcare professionals.',
  paragraphs: [
    'Through expert faculty, practical clinical exposure, and community-focused initiatives, we strive to bridge the gap between theory and practice. Our mission is to prepare students not just for jobs, but for meaningful careers rooted in compassion, excellence, and service to society.',
  ],
};

export const VISION_MISSION_CLOSING =
  'At Sushila Institute of Medical Sciences, our mission and vision define who we are and where we are headed. They serve as the foundation of our academic philosophy, shaping every student’s journey from learning in classrooms to serving in clinics and communities.';

/* -------------------------------------------------------------------------- */
/* Leadership Talk (/leadership) — prospectus pages 11–15                     */
/* -------------------------------------------------------------------------- */

export const LEADERSHIP_PAGE = {
  title: 'Leadership Talk',
  subtitle:
    'Messages from the founders and academic leaders guiding SIMS’s culture of learning, service, and excellence in Uttarakhand.',
  metaTitle: 'SIMS Leadership | Medical Institute Founders & Visionaries | Dehradun',
  metaDescription:
    'Read leadership messages from SIMS founders and educational visionaries in Uttarakhand — Chairman Mr. Sanjeev Kumar Singhal, Chairperson Mrs. Kumkum Singhal, Managing Director Mr. Tushar Singhal, Principal Dr. R. Mayil Vanan, and C.O.O. Dr. Jyoti Juyal Pant.',
};

export type LeadershipProfile = {
  id: string;
  role: string;
  title?: string;
  name: string;
  quote: string;
  message: string[];
  image?: ResponsiveImage;
  imageAlt?: string;
};

export const LEADERSHIP: LeadershipProfile[] = [
  {
    id: 'chairman',
    role: 'Honourable Chairman Emeritus',
    title: 'Founder & Visionary',
    name: 'Mr. Sanjeev Kumar Singhal',
    quote:
      'Knowledge is Wealth, Wisdom is Treasure, Understanding is Riches, and Ignorance is a Bliss.',
    message: [
      'It gives me great pride to welcome you to Sushila Institute of Medical Sciences (SIMS) — an institution built with a vision to nurture capable, ethical, and compassionate healthcare professionals. From the beginning, our mission has been to provide quality education that prepares students not just for a career, but for a life of service.',
      'Today’s healthcare sector demands individuals who are skilled, sincere, and sensitive to the needs of others. At SIMS, we combine technical education with empathy, discipline, and a strong sense of responsibility — ensuring our students are prepared to serve with both competence and compassion.',
      'Our teaching approach emphasizes academic excellence, hands-on training, and character-building. With exposure to real-world healthcare environments and continuous mentorship from experienced faculty, students develop the confidence and conscience needed to meet modern healthcare challenges.',
      'At SIMS, education goes beyond textbooks. We create a space where integrity is valued, curiosity is encouraged, and students are supported in their personal and professional growth.',
      'As Chairperson, I see every student as a future leader in healthcare. My commitment is to ensure each learner receives the foundation needed to succeed and make a meaningful impact.',
      'If you’re looking for an institution where education is rooted in values, purpose, and real-world relevance — SIMS welcomes you. I invite you to be part of this journey of learning, growth, and contribution.',
    ],
    image: chairman,
    imageAlt: 'Honourable Chairman Emeritus Mr. Sanjeev Kumar Singhal',
  },
  {
    id: 'vice-chairperson',
    role: 'Chairperson',
    name: 'Mrs. Kumkum Singhal',
    quote: 'Be the spark that kindles the light in others and illuminates the world.',
    message: [
      'At Sushila Institute of Medical Sciences (SIMS), our foremost priority is to create a nurturing, inclusive, and student-centered environment where every learner feels seen, supported, and inspired to grow into the best version of themselves.',
      'We believe that each student holds a unique potential, and it is our privilege to help them discover it. Through the right blend of guidance, encouragement, and challenge, we empower students to reach their goals and become confident individuals ready to contribute meaningfully to society.',
      'Our dedicated faculty, modern infrastructure, and dynamic learning spaces come together to offer a well-rounded educational experience. But beyond academics, SIMS is a place where students learn values, build lasting relationships, and develop the resilience needed to navigate life’s challenges.',
      'We are committed to holistic development — nurturing not just the mind, but the heart. Through community service, cultural events, and co-curricular activities, our students gain not only knowledge but also empathy, compassion, and a strong sense of purpose.',
      'As Chairperson, I am personally invested in ensuring SIMS continues to be a place of growth, inspiration, and support. I warmly welcome you to our community and invite you to be part of a journey that will shape your future in the most meaningful way.',
    ],
    image: vice_chairperson,
    imageAlt: 'Chairperson Mrs. Kumkum Singhal',
  },
  {
    id: 'managing-director',
    role: 'Managing Director',
    name: 'Mr. Tushar Singhal',
    quote:
      'Our Actions Will Speak Loud and Fearless, Set your Heart Ablaze and Transform Your Life.',
    message: [
      'At Sushila Institute of Medical Sciences (SIMS), we believe that true medical education goes beyond textbooks and exams. It is a thoughtful balance of academic excellence, ethical values, and a forward-thinking vision. In today’s evolving healthcare landscape, our mission is not just to build skilled professionals, but to shape individuals who lead with empathy, purpose, and integrity.',
      'We offer a dynamic, student-focused learning environment with modern infrastructure, simulation labs, and real-world clinical exposure. But what truly sets SIMS apart is our emphasis on character and values — ensuring our students pair technical competence with compassion and a strong sense of social responsibility.',
      'At SIMS, education is not just about what you learn — it’s about who you become. Our experienced faculty serve as mentors, guiding students in both academic and personal growth through co-curricular activities, mentorship, and community outreach.',
      'Our support systems and culture are centered around one goal: nurturing future healthcare professionals who are knowledgeable, ethical, and resilient. The success of our graduates is measured not only by their qualifications but by the lives they touch.',
      'As Managing Director, I assure you that SIMS is dedicated to building a strong foundation for a meaningful career in healthcare. Join us in shaping a future where excellence meets compassion, and knowledge is paired with service.',
    ],
    image: director,
    imageAlt: 'Managing Director Mr. Tushar Singhal',
  },
  {
    id: 'principal',
    role: 'Principal, SIMS College of Nursing',
    name: 'Dr. R. Mayil Vanan',
    quote: 'No one ever lost anything by sharing what they know.',
    message: [],
    image: principal,
    imageAlt: 'Principal Dr. R. Mayil Vanan, SIMS College of Nursing',
  },
  {
    id: 'coo',
    role: 'C.O.O. & Principal, SIMS College of Healthcare & Allied Sciences',
    name: 'Dr. Jyoti Juyal Pant',
    quote:
      'If you give a student the answer, you help them for a moment; but if you teach them how to learn, you empower them for a lifetime.',
    message: [],
    image: coo,
    imageAlt: 'C.O.O. Dr. Jyoti Juyal Pant, SIMS College of Healthcare & Allied Sciences',
  },
];

/* -------------------------------------------------------------------------- */
/* Awards & Highlights (/awards-highlights) — prospectus pages 10, 52–54      */
/* -------------------------------------------------------------------------- */

export const AWARDS_PAGE = {
  title: 'Awards & Highlights',
  subtitle:
    'AI-driven innovation on campus and community outreach that turns learning into real-world impact.',
  metaTitle: 'Medical College Awards & AI in Education Dehradun | SIMS Highlights',
  metaDescription:
    'Discover SIMS awards and highlights — AI-driven medical college in Dehradun, first AI-powered billboard, and community impact: World TB Day Awareness Camp, Tree Plantation, Blood Donation Camp, and Doctor’s Day with RG Medical Hospitals.',
};

export const AI_HIGHLIGHT = {
  title: 'SIMS — An AI-Driven Medical College',
  eyebrow: 'Innovation at SIMS',
  paragraphs: [
    'At Sushila Institute of Medical Sciences, we prepare the future caregivers — and that’s why our students don’t just prepare through books but also through innovative, interactive mediums. We strongly believe in the use of emerging technologies from AV (Audio-Visual) methods, computers, the internet, and most importantly, Artificial Intelligence (AI).',
    'By integrating AI into student learning, we guide them on their journey towards an advanced, digital future while keeping them grounded in their roots. To ensure this balance, along with modern tools, our students also have access to a vast library — a treasure trove of timeless books handpicked by our Founder that connect them to the wisdom of the past.',
    'We were the 1st college in Dehradun to introduce an AI-powered billboard with an AI model as our face for that campaign. We have well-equipped computer labs and conduct hands-on workshops on AI and digital healthcare tools.',
    'SIMS has a blend of heritage and technology that creates a unique ecosystem where the science of healing meets the art of innovation, preparing our students to lead the medical world of tomorrow. Our strong commitment towards the integration of AI in our practices is evident.',
  ],
  badges: [
    'AI-Driven Medical College',
    '1st AI-powered billboard in Dehradun',
    'Hands-on AI & digital healthcare workshops',
  ],
};

export const AWARDS_FEATURED = {
  facade: {
    image: awards_campus_facade,
    alt: 'Entrance facade of Sushila Institute of Medical Sciences (SIMS), Dehradun',
  },
  ceremony: {
    image: awards_ceremony_group,
    alt: 'SIMS students and faculty on stage with certificates and trophies at an awards ceremony',
    caption: 'Recognition on campus — students celebrated for academic and co-curricular excellence.',
  },
  campusSpirit: {
    image: awards_campus_run_team,
    alt: 'SIMS students and staff in matching event T-shirts posing together after a campus run',
    caption: 'Campus spirit — students coming together for community and wellness events.',
  },
} as const;

export const IMPACT_INTRO =
  'At SIMS, we believe in learning beyond the classroom. Our students actively participate in community outreach programs to promote health awareness and make a positive difference in society.';

export const IMPACT_ACTIVITIES = [
  {
    id: 'tb-day',
    title: 'World TB Day Awareness Camp',
    summary:
      'To spread awareness about Tuberculosis, SIMS organized a camp on the occasion of World TB Day. The camp helped reduce the stigma around TB, encouraged early diagnosis, and gave students a chance to contribute to real-world health education — with first-hand experience of patient treatment, hospital protocols, professional ethics, and workplace culture.',
    highlights: [
      'Awareness rally with posters and slogans',
      'Educational session on symptoms, prevention & treatment',
      'First-hand exposure to patient care protocols',
    ],
    image: awards_tb_day_group,
    imageAlt:
      'SIMS College of Nursing students and faculty with a World TB Day awareness banner on campus, 24 March 2025',
  },
  {
    id: 'tree-plantation',
    title: 'Tree Plantation Drive — Harela Celebration',
    summary:
      'On the occasion of Harela, SIMS students and faculty joined hands to plant trees, spreading awareness about sustainability and eco-friendly living. The drive encouraged environmental responsibility and reinforced SIMS’s dedication to nurturing a healthier, greener future.',
    highlights: [
      'Tree plantation across the campus',
      'Participation by students, teachers, and staff',
      'Creating a lasting green legacy for generations to come',
    ],
    image: awards_tree_plantation_nursery,
    imageAlt:
      'SIMS students and faculty at a nursery during a tree plantation and environmental outreach visit',
  },
  {
    id: 'blood-donation',
    title: 'Blood Donation Camp',
    summary:
      'SIMS conducted a Blood Donation Camp in collaboration with a certified blood bank. The camp promoted the life-saving importance of blood donation, built social responsibility among students, and supported patients in need.',
    highlights: [
      'Proper screening and safety protocols followed',
      'Students actively volunteered in managing the event',
      'Awareness created about the importance of regular donation',
      'Record number of first-time donors participated',
    ],
    image: awards_blood_donation,
    imageAlt:
      'Blood donation camp at SIMS — a donor seated with medical staff during the donation process',
  },
  {
    id: 'doctors-day',
    title: 'Doctor’s Day Celebration with RG Medical Hospitals',
    summary:
      'To honour the dedication of medical professionals, SIMS collaborated with RG Medical Hospitals for a meaningful Doctor’s Day celebration. The event fostered gratitude, strengthened academic–industry bonds, and reminded future healthcare professionals of the values that define this noble profession.',
    highlights: [
      'Felicitation of doctors and healthcare staff',
      'Awareness session on the evolving role of doctors in modern healthcare',
      'Cultural performances and student-led tributes',
      'Interactive Q&A with senior doctors and inspiring case studies',
    ],
    image: awards_doctors_day_collage,
    imageAlt:
      'Doctor’s Day at SIMS — speakers at the podium and felicitation of healthcare professionals with certificates',
  },
] as const;

