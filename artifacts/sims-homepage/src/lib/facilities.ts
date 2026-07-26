import type { ResponsiveImage } from '@/lib/responsive-image';
import {
  DSC00273,
  DSC00450,
  DSC00484,
  DSC00555,
  DSC00603,
  DSC00646,
  DSC05124,
  DSC05126,
  DSC05143,
  DSC05150,
  DSC05222,
} from '@/lib/responsive-images.generated';

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image?: ResponsiveImage;
  imageAlt?: string;
  category: 'academic' | 'labs' | 'living' | 'support';
}

export interface LabItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image?: ResponsiveImage;
  imageAlt?: string;
}

export const FACILITIES_PAGE = {
  title: 'Facilities at SIMS',
  subtitle:
    'A practical learning campus in Dehradun — classrooms, labs, library resources, hostel living, and student support designed for healthcare education.',
  metaDescription:
    'Explore campus facilities at Sushila Institute of Medical Sciences (SIMS), Dehradun — laboratories, library, computer lab, hostel, canteen, transport, and student support spaces.',
  intro: [
    'At Sushila Institute of Medical Sciences (SIMS), infrastructure is treated as part of clinical readiness — not just campus aesthetics. The Dehradun campus is set in calm, green surroundings and is planned to support focused study, supervised practical training, and day-to-day student comfort.',
    'From academic blocks and department labs to the library, computer resources, hostels, canteen, and transport, facilities are aligned with nursing and allied health learning needs.',
    'Whether you live on campus or commute, the goal is a safe, organised environment where theory, skills practice, and student support work together.',
  ],
};

/** Primary facility blocks shown on the Facilities page */
export const FACILITIES: FacilityItem[] = [
  {
    id: 'campus',
    title: 'Campus Building & Environment',
    category: 'academic',
    description:
      'SIMS is located in the peaceful, green surroundings of Dehradun. Academic and support spaces are arranged to create a safe, comfortable setting for healthcare students — from classrooms and labs to open campus areas for everyday student life.',
    highlights: [
      'Green Dehradun campus setting',
      'Academic buildings for teaching and practical sessions',
      'Spaces planned for focused study and campus movement',
      'Environment suited to healthcare training routines',
    ],
    image: DSC05222,
    imageAlt:
      'Green lawn and outdoor seating area on the SIMS Dehradun campus with institutional buildings in the background',
  },
  {
    id: 'classrooms',
    title: 'Classrooms & Seminar Spaces',
    category: 'academic',
    description:
      'Teaching spaces support lectures, demonstrations, and interactive learning across nursing and paramedical programmes. Official SIMS materials highlight fully equipped classrooms and seminar halls, with smart boards and digital learning tools used to strengthen classroom delivery.',
    highlights: [
      'Equipped classrooms for theory and demonstration',
      'Seminar halls for group learning and presentations',
      'Smart boards and digital learning support',
      'Spaces suited to programme-wise academic schedules',
    ],
  },
  {
    id: 'laboratories',
    title: 'Laboratories',
    category: 'labs',
    description:
      'Hands-on practice is central to SIMS programmes. The institute maintains course-specific, well-ventilated labs where students work with models, instruments, and department tools under faculty guidance before and alongside clinical exposure.',
    highlights: [
      'Department-focused practical labs',
      'Well-ventilated learning spaces',
      'Models, instruments, and clinical teaching aids',
      'Preparation for hospital and diagnostic settings',
    ],
    image: DSC00450,
    imageAlt:
      'SIMS students in uniform surrounded by anatomical models and medical charts in a campus laboratory',
  },
  {
    id: 'library',
    title: 'Library & Resource Centre',
    category: 'academic',
    description:
      'The library and resource centre combines physical and digital study support. Students can access textbooks, medical journals, research papers, and reference materials, with quiet reading zones and internet-enabled systems for academic work.',
    highlights: [
      'Textbooks and medical reference collections',
      'Journals and research materials',
      'Quiet reading zones',
      'Internet-enabled systems and online journal access',
    ],
    image: DSC00603,
    imageAlt:
      'A SIMS student reading a textbook beside wooden library bookshelves filled with medical and nursing titles',
  },
  {
    id: 'computer-lab',
    title: 'Computer Lab',
    category: 'academic',
    description:
      'Computer resources support digital coursework, research, assignments, and online academic tools. Students use campus systems for collaborative study and programme-related digital learning.',
    highlights: [
      'Desktop workstations for academic use',
      'Support for research and assignments',
      'Collaborative digital study sessions',
      'Access aligned with classroom and library learning',
    ],
    image: DSC00555,
    imageAlt:
      'SIMS students in white coats collaborating at a desktop computer workstation in the computer lab',
  },
  {
    id: 'hostel',
    title: 'Hostel Facilities',
    category: 'living',
    description:
      'SIMS provides separate, comfortable hostels for boys and girls within the campus premises. Rooms are furnished for student living and study, with sharing and single-occupancy options described by the institute.',
    highlights: [
      'Separate hostels for boys and girls',
      'On-campus accommodation',
      'Furnished rooms for study and rest',
      'Sharing and single-occupancy options',
    ],
    image: DSC05124,
    imageAlt:
      'Shared SIMS student hostel room with beds, study desks, storage locker, and a window overlooking greenery',
  },
  {
    id: 'canteen',
    title: 'Canteen & Dining',
    category: 'living',
    description:
      'The on-campus canteen serves nutritious, hygienically prepared meals at student-friendly prices. A balanced menu with vegetarian and non-vegetarian options, plus beverages and snacks, is available in a clean dining environment.',
    highlights: [
      'Nutritious and hygienic meals',
      'Vegetarian and non-vegetarian options',
      'Meal combos, beverages, and snacks',
      'Student-friendly pricing on campus',
    ],
  },
  {
    id: 'transport',
    title: 'Transport',
    category: 'support',
    description:
      'SIMS runs transport services across Dehradun and nearby areas for students and staff. The fleet is described as well-maintained and GPS-enabled, with trained drivers and safety provisions such as speed governors, fire extinguishers, and first-aid kits.',
    highlights: [
      'Routes across Dehradun and nearby areas',
      'GPS-enabled buses with trained drivers',
      'Schedules aligned with academic hours',
      'Safety provisions including first-aid kits',
    ],
  },
  {
    id: 'student-activity',
    title: 'Student Activity & Campus Spaces',
    category: 'support',
    description:
      'Beyond classrooms and labs, the campus includes outdoor and shared spaces that support everyday student life — quiet breaks, informal discussion, and a calmer academic atmosphere between practical sessions.',
    highlights: [
      'Outdoor campus areas for breaks and interaction',
      'Spaces that complement academic routines',
      'Green surroundings that support focused study',
      'Everyday campus life beyond lecture hours',
    ],
    image: DSC05222,
    imageAlt:
      'Outdoor seating on the grassy SIMS campus lawn beneath trees near academic buildings',
  },
  {
    id: 'medical-support',
    title: 'Emergency & First-Aid Support',
    category: 'support',
    description:
      'Student safety is part of campus operations. Transport vehicles carry first-aid kits, and admissions teams can guide applicants on campus support protocols for routine student welfare and emergency response expectations.',
    highlights: [
      'First-aid readiness on transport services',
      'Campus focus on student safety and welfare',
      'Guidance available through admissions and campus staff',
      'Support aligned with healthcare-campus routines',
    ],
  },
  {
    id: 'accessibility',
    title: 'Accessibility Features',
    category: 'support',
    description:
      'SIMS aims to keep campus movement practical for daily academic life. Prospective students with specific accessibility needs are encouraged to speak with admissions so staff can share current campus arrangements and support options.',
    highlights: [
      'Campus planned for everyday student movement',
      'Support guidance through admissions counselling',
      'Practical access considerations for academic spaces',
      'Confirm current arrangements before joining',
    ],
  },
  {
    id: 'nursing-skills',
    title: 'Nursing Skills Centre',
    category: 'labs',
    description:
      'Nursing education at SIMS emphasises supervised skills practice. The skills learning environment supports bedside procedures, patient-care routines, and simulation-style preparation that complements classroom theory and hospital exposure.',
    highlights: [
      'Skills practice for nursing procedures',
      'Preparation for ward and bedside care',
      'Complements classroom and clinical postings',
      'Focus on safe, supervised learning',
    ],
  },
];

export const LABS: LabItem[] = [
  {
    id: 'anatomy-physiology',
    title: 'Anatomy & Physiology Lab',
    description:
      'Used for foundational study of body systems with anatomical models, charts, and related teaching aids that support nursing and allied health coursework.',
    highlights: [
      'Anatomical models and study materials',
      'Charts for system-based learning',
      'Bone and organ model practice',
    ],
    image: DSC00484,
    imageAlt:
      'SIMS students examining anatomical bone and heart models in the anatomy and physiology laboratory',
  },
  {
    id: 'microbiology',
    title: 'Microbiology Lab',
    description:
      'Supports practical learning related to microorganisms and lab discipline needed in diagnostic and life-science pathways.',
    highlights: ['Microscopy-oriented practical work', 'Lab technique foundations', 'Course-linked experiments'],
  },
  {
    id: 'pathology-clinical',
    title: 'Pathology & Clinical Lab',
    description:
      'Helps students understand diagnostic sample workflows and clinical laboratory practice relevant to medical lab technology and related programmes.',
    highlights: [
      'Clinical lab orientation',
      'Diagnostic testing foundations',
      'Practice aligned to lab technology learning',
    ],
  },
  {
    id: 'radiology-imaging',
    title: 'Radiology & Imaging Lab',
    description:
      'Introduces imaging concepts and related teaching tools used in radiology and imaging technology training, including viewer-based demonstration support.',
    highlights: [
      'Imaging concept demonstrations',
      'X-ray viewer and teaching aids',
      'Safety-aware imaging orientation',
    ],
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy Practice Lab',
    description:
      'Provides space for exercise therapy, electrotherapy familiarisation, and rehabilitation practice using therapy beds and related apparatus.',
    highlights: [
      'Therapy beds and practice stations',
      'Therapeutic apparatus exposure',
      'Rehab-focused practical sessions',
    ],
    image: DSC00646,
    imageAlt:
      'Physiotherapy practice lab at SIMS with treatment beds, therapy equipment, and instructional medical posters',
  },
];

export const LAB_TOOLS_NOTE =
  'Tools and equipment commonly referenced by SIMS for lab learning include basic diagnostic kits, ultrasound machines, BP instruments, bone models, X-ray viewer boxes, microscopes, and therapeutic apparatus.';

export const HOSTEL_GALLERY = [
  {
    src: DSC05124,
    alt: 'SIMS hostel room with twin beds, study desks, metal locker, and open window to campus greenery',
  },
  {
    src: DSC05126,
    alt: 'Twin-sharing SIMS hostel room with wooden desks, chairs, and natural light from open shutters',
  },
  {
    src: DSC05143,
    alt: 'Shared SIMS dormitory room with multiple beds, study corner, and personal student belongings',
  },
  {
    src: DSC05150,
    alt: 'Furnished SIMS hostel room with two beds, desks, and study materials for residential students',
  },
];

export const FACILITIES_HERO_IMAGE = {
  src: DSC00273,
  alt: 'Main entrance of Sushila Institute of Medical Sciences (SIMS) in Dehradun with campus gate, building signage, and college bus',
};
