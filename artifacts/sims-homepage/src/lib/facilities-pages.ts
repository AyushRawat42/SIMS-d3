import type { ResponsiveImage } from '@/lib/responsive-image';
import {
  DSC05081,
  DSC05087,
  DSC05089,
  DSC05175,
  facility_av_auditorium_lecture,
  facility_conference_room_study,
  facility_library_students,
  facility_multipurpose_hall_event,
  lab_nursing_bedside_assessment,
  sims_campus_lobby,
  transport_bus_boarding_queue,
  transport_bus_student_boarding,
  transport_bus_students,
} from '@/lib/responsive-images.generated';

export const HOSTEL_PAGE = {
  title: 'Hostel Facilities at SIMS',
  subtitle:
    'Safe, secure, and centrally located student accommodation for boys and girls at Sushila Institute of Medical Sciences, Dehradun.',
  metaTitle: 'Medical College Hostel Dehradun | SIMS Student Accommodation',
  metaDescription:
    'SIMS student accommodation in Dehradun — safe boys and girls hostels, hygienic canteen meals, 24x7 CCTV surveillance, and trained security for medical college students.',
  intro: [
    'Choosing a medical or nursing college also means choosing a place to live and study. SIMS provides separate, comfortable hostel facilities for boys and girls within a secure campus environment in Dehradun — designed to support focused academic routines and everyday student wellbeing.',
    'From furnished rooms and hygienic dining to round-the-clock surveillance and trained security staff, residential life at SIMS is planned so students can concentrate on clinical learning with peace of mind for families.',
  ],
  highlights: [
    {
      title: 'Separate hostels for boys & girls',
      text: 'Dedicated residential blocks help maintain privacy, safety, and a structured living environment for all students.',
    },
    {
      title: 'Safe & centrally located',
      text: 'On-campus / campus-linked accommodation keeps students close to classrooms, labs, and academic schedules.',
    },
    {
      title: '24×7 CCTV & trained security',
      text: 'Continuous surveillance and security staff support a monitored residential environment for student safety.',
    },
    {
      title: 'Clean, hygienic canteen',
      text: 'Nutritious meals are prepared and served with hygiene as a priority — supporting energy for long academic days.',
    },
  ],
  securityPoints: [
    '24×7 CCTV surveillance across residential and campus access points',
    'Trained security staff for entry monitoring and campus safety',
    'Separate residential arrangements for boys and girls',
    'Campus routines designed for student welfare and accountability',
  ],
  canteenPoints: [
    'Nutritious meals suited to student schedules',
    'Emphasis on clean, hygienic food preparation and service',
    'Vegetarian and non-vegetarian options as available',
    'On-campus dining that reduces daily commute friction for residents',
  ],
  roomPoints: [
    'Furnished rooms planned for study and rest',
    'Sharing and single-occupancy style options as described by the institute',
    'Study-friendly spaces within residential living',
    'Living arrangements aligned with healthcare-student routines',
  ],
};

export const HOSTEL_GALLERY: { src: ResponsiveImage; alt: string }[] = [
  {
    src: DSC05175,
    alt: 'Twin-sharing SIMS hostel room with beds, a study desk, and natural light from an open window',
  },
  {
    src: DSC05089,
    alt: 'Four-sharing SIMS hostel room with wooden beds, metal lockers, and a study corner',
  },
  {
    src: DSC05081,
    alt: 'Four-bed SIMS hostel dormitory with wooden frames, patterned bedspreads, and a study desk',
  },
  {
    src: DSC05087,
    alt: 'Four-sharing SIMS hostel room with wooden beds, a wardrobe, and metal storage',
  },
];

export const TRANSPORT_PAGE = {
  title: 'Transport Facility at SIMS',
  subtitle:
    'College bus services across Dehradun with safety-first operations, fixed schedules, and affordable student options.',
  metaTitle: 'Medical College Transport Facility Dehradun | SIMS Bus Routes',
  metaDescription:
    'SIMS bus routes in Dehradun — Sahastradhara, Vikas Nagar, Prem Nagar, Clock Tower, ISBT and more. GPS-enabled college transport with trained drivers and safety systems.',
  intro: [
    'Reliable transport keeps academic life predictable. SIMS operates student and staff transport across Dehradun so day scholars can reach campus on time for lectures, labs, and clinical schedules without depending on irregular local options.',
    'The institute prioritises a modern, spacious bus fleet with GPS tracking, trained drivers, speed governors, fire extinguishers, and first-aid readiness — safety systems families expect from a medical college transport facility in Dehradun.',
  ],
  routes: [
    'Sahastradhara',
    'Vikas Nagar',
    'Herbetpur',
    'Swami Vivekanad Hospital',
    'Mussorie Diversion',
    'Prem Nagar',
    'Rispana Pul',
    'Buddha Chowk',
    'Raipur',
    'Clock Tower',
    'Patelnagar ISBT',
  ],
  safetyPoints: [
    'GPS-enabled monitoring for route visibility',
    'Trained and responsible drivers',
    'Speed governors for controlled driving',
    'Fire extinguishers on buses',
    'First-aid kits for emergency readiness',
  ],
  servicePoints: [
    {
      title: 'Wide route coverage',
      text: 'Pickup and drop connectivity across major Dehradun localities used by SIMS students and staff.',
    },
    {
      title: 'Modern, spacious fleet',
      text: 'Well-maintained buses planned for comfortable daily commuting during academic terms.',
    },
    {
      title: 'Fixed schedules',
      text: 'Transport timings aligned with college hours so students can plan lectures and practicals reliably.',
    },
    {
      title: 'Affordable options',
      text: 'Student-oriented transport arrangements that support consistent attendance without excessive daily travel stress.',
    },
  ],
};

export const TRANSPORT_GALLERY: { src: ResponsiveImage; alt: string }[] = [
  {
    src: transport_bus_students,
    alt: 'Four SIMS students in uniform posing in front of a yellow Sushila Institute of Medical Sciences transport bus',
  },
  {
    src: transport_bus_boarding_queue,
    alt: 'SIMS nursing students with backpacks boarding a yellow campus transport bus',
  },
  {
    src: transport_bus_student_boarding,
    alt: 'A SIMS student in uniform smiling while boarding a yellow Sushila Institute of Medical Sciences bus',
  },
];

export const MORE_FACILITIES_PAGE = {
  title: 'More Campus Facilities',
  subtitle:
    'Library, conference rooms, common rooms, medical room, AV auditorium, and multipurpose hall supporting academic and campus life at SIMS.',
  metaTitle: 'Campus Facilities at SIMS Dehradun | Library, Auditorium & Student Spaces',
  metaDescription:
    'Explore more facilities at SIMS Dehradun — library and resource centre, conference rooms, common rooms, medical room, AV auditorium, and multipurpose hall.',
  intro: [
    'Beyond laboratories and hostels, a healthcare campus needs shared academic and student-life spaces. SIMS maintains facilities that support quiet study, group learning, events, first-aid readiness, and everyday student interaction.',
    'These spaces complement classroom teaching and clinical preparation — helping students revise, present, collaborate, and participate in institutional activities throughout the year.',
  ],
};

export interface MoreFacilityItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  image?: ResponsiveImage;
  imageAlt?: string;
}

export const MORE_FACILITIES: MoreFacilityItem[] = [
  {
    id: 'library',
    title: 'Library & Resource Centre',
    description:
      'The SIMS library and resource centre is a quiet academic hub for nursing and allied health study. Students access textbooks, medical and nursing reference titles, journals, and research materials that support coursework, assignments, and exam preparation. Reading zones encourage focused study, while internet-enabled systems help learners explore online journals and digital academic tools. In Indian medical and nursing colleges, a well-stocked library is essential for building evidence-aware professionals — and SIMS treats the resource centre as part of clinical readiness, not just a book room.',
    highlights: [
      'Medical, nursing, and allied health reference collections',
      'Quiet reading zones for focused study',
      'Journals and research support materials',
      'Internet-enabled academic access',
    ],
    image: facility_library_students,
    imageAlt:
      'SIMS students in uniform studying anatomy textbooks at a library table with bookshelves behind them',
  },
  {
    id: 'conference-rooms',
    title: 'Conference Rooms',
    description:
      'Conference rooms provide formal spaces for faculty meetings, student presentations, counselling interactions, and academic discussions. In a professional healthcare institute, these rooms support structured communication — from programme briefings and viva-style practice to committee work and guest interactions. Equipped for seated discussion and presentation delivery, conference rooms help SIMS maintain organised academic administration and give students exposure to professional meeting culture they will encounter in hospitals and clinics.',
    highlights: [
      'Spaces for faculty and academic meetings',
      'Student presentation and discussion support',
      'Suitable for counselling and programme briefings',
      'Professional setting for institutional interactions',
    ],
    image: facility_conference_room_study,
    imageAlt:
      'Medical students in white coats studying around a conference table with a wall-mounted display',
  },
  {
    id: 'common-rooms',
    title: 'Common Rooms',
    description:
      'Separate or shared common rooms give students a place to pause between lectures and practicals. Indian nursing college norms commonly expect male and female common-room provision as part of campus welfare infrastructure. These spaces support informal peer learning, short breaks, and everyday social interaction in a supervised institutional environment — helping students manage long academic days without losing focus or comfort.',
    highlights: [
      'Break spaces between academic sessions',
      'Peer interaction and informal discussion',
      'Support for everyday student wellbeing',
      'Campus life beyond classrooms and labs',
    ],
    image: sims_campus_lobby,
    imageAlt:
      'SIMS campus lobby and common area with seating space, reception counter, and open indoor gathering room',
  },
  {
    id: 'medical-room',
    title: 'Medical Room',
    description:
      'A campus medical room provides first-response readiness for minor illnesses and injuries during college hours. For healthcare students, it also models professional first-aid organisation — stocked basic supplies, clear escalation pathways, and a calm space for initial assessment before referral when needed. SIMS maintains medical-room support as part of student welfare and campus safety culture, complementing transport first-aid readiness and security protocols.',
    highlights: [
      'First-aid and minor-care readiness on campus',
      'Support during college hours for student welfare',
      'Clear escalation for further medical attention',
      'Aligned with healthcare-campus safety routines',
    ],
    image: lab_nursing_bedside_assessment,
    imageAlt:
      'SIMS students practising bedside assessment in the campus medical room, with a hospital bed, trolley, and CPR guide',
  },
  {
    id: 'av-auditorium',
    title: 'AV Auditorium',
    description:
      'The AV auditorium hosts larger academic gatherings — guest lectures, orientation programmes, seminars, and institutional events that need projection, sound, and seated capacity beyond a classroom. Audio-visual enabled auditoriums are standard in professional colleges because they allow consistent delivery of demonstrations, awareness sessions, and ceremonial academic events. At SIMS, the auditorium helps bring departments together for shared learning experiences and campus communications.',
    highlights: [
      'AV-enabled space for lectures and seminars',
      'Orientation and institutional event capacity',
      'Projection and sound support for presentations',
      'Shared academic gatherings across programmes',
    ],
    image: facility_av_auditorium_lecture,
    imageAlt:
      'A speaker presenting on epidemiology at the SIMS AV auditorium podium with a projection screen behind her',
  },
  {
    id: 'multipurpose-hall',
    title: 'Multipurpose Hall',
    description:
      'The multipurpose hall is a flexible campus venue for cultural programmes, workshops, indoor assemblies, and large-group academic activities. INC infrastructure guidelines for nursing colleges commonly include a multipurpose hall as part of constructed academic area — recognising that student development includes co-curricular engagement as well as clinical skill. At SIMS, the hall supports events that build confidence, teamwork, and campus community alongside rigorous healthcare training.',
    highlights: [
      'Flexible venue for academic and cultural events',
      'Workshop and assembly capacity',
      'Supports co-curricular student life',
      'Complements classrooms and specialised labs',
    ],
    image: facility_multipurpose_hall_event,
    imageAlt:
      'Students and faculty gathered on the SIMS multipurpose hall stage for a campus cultural event',
  },
];
