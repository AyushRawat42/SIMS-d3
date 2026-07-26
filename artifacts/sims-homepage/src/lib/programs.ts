import type { ResponsiveImage } from '@/lib/responsive-image';
import {
  DSC00007,
  DSC00009,
  DSC00050,
  DSC00051,
  DSC00066,
  DSC00114,
  DSC00287,
  DSC00312,
  DSC00338,
  DSC00365,
  DSC00503,
} from '@/lib/responsive-images.generated';

// Reserved (not used on program heroes): DSC00030, DSC00074, DSC00085, DSC00447

export type ProgramCategoryId = 'nursing' | 'allied' | 'life-sciences';

export interface ProgramCategory {
  id: ProgramCategoryId;
  label: string;
}

export interface Program {
  slug: string;
  name: string;
  shortName: string;
  category: ProgramCategoryId;
  subtitle: string;
  duration: string;
  level: string;
  eligibility: string;
  learningFocus: string;
  cardDescription: string;
  overview: string[];
  curriculum: string[];
  careers: string[];
  highlights: { label: string; value: string }[];
  metaDescription: string;
  image: ResponsiveImage;
  imageAlt: string;
}

export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  { id: 'nursing', label: 'Nursing' },
  { id: 'allied', label: 'Allied and Healthcare' },
  { id: 'life-sciences', label: 'Life Sciences' },
];

export const PROGRAMS: Program[] = [
  {
    slug: 'bsc-nursing',
    name: 'B.Sc Nursing',
    shortName: 'B.Sc Nursing',
    category: 'nursing',
    subtitle: 'A four-year undergraduate pathway into professional nursing practice.',
    duration: '4 Years',
    level: 'Undergraduate',
    eligibility: '10+2 with Physics, Chemistry, Biology, and English (as per university norms)',
    learningFocus: 'Clinical nursing, patient care, community health, and midwifery',
    cardDescription:
      'Nursing fundamentals, patient care, and clinical training in hospitals and healthcare settings.',
    overview: [
      'The B.Sc Nursing program at Sushila Institute of Medical Sciences (SIMS), Dehradun, is designed to prepare professional nurses who can deliver quality care across hospitals, community settings, and specialized healthcare units.',
      'Students build a strong foundation in anatomy, physiology, microbiology, psychology, and nursing foundations, then progress into medical-surgical, child health, mental health, community health nursing, and midwifery.',
      'Learning combines classroom instruction, simulation labs, hospital postings, and community exposure so graduates are ready for clinical roles and further study in nursing specialties.',
    ],
    curriculum: [
      'Anatomy, physiology, microbiology, and nursing foundations',
      'Medical-surgical and community health nursing',
      'Child health and mental health nursing',
      'Midwifery and obstetric nursing',
      'Nutrition, pharmacology, and nursing ethics',
      'Hospital training, community postings, and skills-lab practice',
    ],
    careers: [
      'Staff Nurse / Registered Nurse',
      'Community Health Nurse',
      'Clinical Nurse in specialty wards',
      'Nursing roles in military / NGO healthcare settings',
      'Pathway to M.Sc Nursing and teaching roles',
    ],
    highlights: [
      { label: 'Duration', value: '4 Years' },
      { label: 'Level', value: 'Undergraduate Degree' },
      { label: 'Eligibility', value: '10+2 with PCB & English' },
      { label: 'Learning Focus', value: 'Clinical care & midwifery' },
      { label: 'Career Pathways', value: 'Hospitals, community, higher studies' },
    ],
    metaDescription:
      'B.Sc Nursing at Sushila Institute of Medical Sciences (SIMS), Dehradun — a 4-year undergraduate nursing program with clinical training and hospital exposure.',
    image: DSC00007,
    imageAlt:
      'Instructor in a white lab coat guiding SIMS students during a classroom session for B.Sc Nursing.',
  },
  {
    slug: 'post-basic-bsc-nursing',
    name: 'Post Basic B.Sc Nursing',
    shortName: 'Post Basic B.Sc Nursing',
    category: 'nursing',
    subtitle: 'Upgrade your GNM qualification to a bachelor’s degree in nursing.',
    duration: '2 Years',
    level: 'Undergraduate (Post-Basic)',
    eligibility: 'GNM (General Nursing and Midwifery) or equivalent as recognized for admission',
    learningFocus: 'Advanced clinical skills, nursing education, research, and administration',
    cardDescription:
      'For GNM graduates — upgrade qualifications and expand career opportunities.',
    overview: [
      'Post Basic B.Sc Nursing at SIMS is designed for GNM holders who want to advance to a bachelor’s degree and broaden clinical, educational, and leadership opportunities.',
      'The program builds on diploma-level nursing experience and introduces subjects such as nursing research, nursing education, psychology, and health administration.',
      'Graduates are better prepared for senior clinical roles, teaching pathways, and postgraduate nursing education.',
    ],
    curriculum: [
      'Advanced nursing practice and clinical decision-making',
      'Nursing education and psychology',
      'Nursing research and evidence-based practice',
      'Health administration and leadership foundations',
      'Specialty clinical exposure building on GNM experience',
    ],
    careers: [
      'Senior Staff Nurse / Ward In-charge pathways',
      'Nurse Educator (with further preparation)',
      'Clinical Supervisor roles',
      'Eligibility progression toward M.Sc Nursing',
      'Leadership roles in nursing services',
    ],
    highlights: [
      { label: 'Duration', value: '2 Years' },
      { label: 'Level', value: 'Post-Basic Undergraduate' },
      { label: 'Eligibility', value: 'GNM or equivalent' },
      { label: 'Learning Focus', value: 'Advanced practice & leadership' },
      { label: 'Career Pathways', value: 'Clinical leadership & education' },
    ],
    metaDescription:
      'Post Basic B.Sc Nursing at SIMS Dehradun — a 2-year program for GNM graduates seeking a bachelor’s degree and advanced nursing roles.',
    image: DSC00009,
    imageAlt:
      'SIMS faculty member reviewing coursework with nursing students in a bright classroom.',
  },
  {
    slug: 'gnm',
    name: 'GNM',
    shortName: 'GNM',
    category: 'nursing',
    subtitle: 'General Nursing and Midwifery — practical preparation for hospital and community care.',
    duration: '3 Years',
    level: 'Diploma',
    eligibility: '10+2 or equivalent as per admission guidelines',
    learningFocus: 'General nursing, midwifery, and primary patient care',
    cardDescription:
      'In-depth nursing, midwifery, and primary care for hospital and community roles.',
    overview: [
      'The GNM (General Nursing and Midwifery) program at SIMS trains students in foundational nursing practice and maternal care for hospitals, maternity homes, and community health settings.',
      'Coursework typically includes anatomy, physiology, community health, nutrition, and child health nursing, supported by rigorous practical training.',
      'Internship components in later training years help students apply bedside skills under supervised clinical conditions.',
    ],
    curriculum: [
      'Anatomy, physiology, and fundamentals of nursing',
      'Community health and nutrition',
      'Child health nursing',
      'Midwifery and maternal care skills',
      'Practical nursing procedures and clinical postings',
    ],
    careers: [
      'Staff Nurse (diploma pathway)',
      'Maternity / labour room nursing support roles',
      'Community health centre nursing roles',
      'Nursing home and clinic positions',
      'Pathway to Post Basic B.Sc Nursing',
    ],
    highlights: [
      { label: 'Duration', value: '3 Years' },
      { label: 'Level', value: 'Diploma' },
      { label: 'Eligibility', value: '10+2 or equivalent' },
      { label: 'Learning Focus', value: 'Nursing & midwifery practice' },
      { label: 'Career Pathways', value: 'Hospitals & community care' },
    ],
    metaDescription:
      'GNM at Sushila Institute of Medical Sciences, Dehradun — a 3-year General Nursing and Midwifery diploma with practical clinical training.',
    image: DSC00066,
    imageAlt:
      'GNM nursing students in white uniforms attending a theory class at SIMS.',
  },
  {
    slug: 'msc-nursing',
    name: 'M.Sc Nursing',
    shortName: 'M.Sc Nursing',
    category: 'nursing',
    subtitle: 'Postgraduate nursing education focused on specialty practice, leadership, and research.',
    duration: '2 Years',
    level: 'Postgraduate',
    eligibility: 'B.Sc Nursing / Post Basic B.Sc Nursing (as per university norms)',
    learningFocus: 'Advanced clinical nursing, research, teaching, and healthcare management',
    cardDescription:
      'Postgraduate program advancing clinical expertise, leadership, and research capabilities.',
    overview: [
      'M.Sc Nursing at SIMS is a two-year postgraduate program aimed at advancing clinical expertise, leadership skills, and research capabilities in nursing practice.',
      'The curriculum blends advanced theory with in-depth clinical training, emphasizing nursing research, patient-centered care, healthcare management, and teaching.',
      'It prepares nurses for specialized practice, academic roles, and evidence-based leadership across diverse healthcare settings.',
    ],
    curriculum: [
      'Advanced nursing practice in chosen specialty areas',
      'Nursing research and evidence-based care',
      'Healthcare management and leadership',
      'Nursing education and mentorship skills',
      'Clinical practicum and scholarly project work',
    ],
    careers: [
      'Nurse Specialist / Advanced clinical roles',
      'Nurse Educator / Academic faculty pathways',
      'Nursing Supervisor / Administrator roles',
      'Clinical research and quality roles',
      'Pathway toward doctoral studies',
    ],
    highlights: [
      { label: 'Duration', value: '2 Years' },
      { label: 'Level', value: 'Postgraduate Degree' },
      { label: 'Eligibility', value: 'B.Sc / Post Basic B.Sc Nursing' },
      { label: 'Learning Focus', value: 'Specialty practice & research' },
      { label: 'Career Pathways', value: 'Clinical leadership & academia' },
    ],
    metaDescription:
      'M.Sc Nursing at SIMS Dehradun — a 2-year postgraduate program for advanced clinical practice, research, and nursing leadership.',
    image: DSC00338,
    imageAlt:
      'SIMS nursing students in lab coats observing bedside clinical teaching with an instructor.',
  },
  {
    slug: 'bpt',
    name: 'BPT',
    shortName: 'BPT',
    category: 'allied',
    subtitle: 'Bachelor of Physiotherapy — movement science, rehabilitation, and clinical therapy.',
    duration: '4.5 Years + 6 Months Internship',
    level: 'Undergraduate',
    eligibility: '10+2 with Physics, Chemistry, and Biology (as per admission norms)',
    learningFocus: 'Assessment, exercise therapy, electrotherapy, and rehabilitation',
    cardDescription: 'Physical therapy, rehabilitation, and movement sciences.',
    overview: [
      'The BPT program at SIMS aims to develop physiotherapists who can assess, diagnose, and treat patients with physical impairments, injuries, and movement disorders.',
      'Students study anatomy, physiology, exercise therapy, electrotherapy, and rehabilitation sciences, with clinical rotations for hands-on learning.',
      'A mandatory internship helps graduates apply therapeutic skills in real clinical environments such as hospitals, sports settings, and rehabilitation centres.',
    ],
    curriculum: [
      'Human anatomy and physiology for physiotherapy',
      'Exercise therapy and biomechanics',
      'Electrotherapy and physical agents',
      'Orthopaedic, neurological, and cardiopulmonary rehabilitation foundations',
      'Clinical practice and supervised internship',
    ],
    careers: [
      'Physiotherapist in hospitals and clinics',
      'Rehabilitation centre therapist',
      'Sports physiotherapy support roles',
      'Community / home-care physiotherapy',
      'Private practice (as regulations allow)',
    ],
    highlights: [
      { label: 'Duration', value: '4.5 Years + 6 Months Internship' },
      { label: 'Level', value: 'Undergraduate Degree' },
      { label: 'Eligibility', value: '10+2 with PCB' },
      { label: 'Learning Focus', value: 'Rehab & movement science' },
      { label: 'Career Pathways', value: 'Clinics, hospitals, sports rehab' },
    ],
    metaDescription:
      'BPT at Sushila Institute of Medical Sciences, Dehradun — Bachelor of Physiotherapy with clinical training and a mandatory internship.',
    image: DSC00365,
    imageAlt:
      'SIMS students examining anatomical bone and organ models during physiotherapy-related practical learning.',
  },
  {
    slug: 'bmlt',
    name: 'BMLT',
    shortName: 'BMLT',
    category: 'allied',
    subtitle: 'Bachelor of Medical Laboratory Technology — diagnostics that guide patient care.',
    duration: '3 Years + 6 Months Internship',
    level: 'Undergraduate',
    eligibility: '10+2 with science subjects (PCB/PCM as applicable per norms)',
    learningFocus: 'Clinical biochemistry, pathology, microbiology, hematology, and lab practice',
    cardDescription:
      'Advanced lab techniques, diagnostic testing, and disease analysis.',
    overview: [
      'BMLT at SIMS prepares students to work as medical laboratory technologists supporting disease diagnosis through accurate laboratory testing.',
      'The curriculum covers clinical biochemistry, pathology, microbiology, hematology, and immunology, with hands-on practice using diagnostic equipment.',
      'A six-month internship strengthens industry readiness for hospitals, diagnostic labs, blood banks, and research settings.',
    ],
    curriculum: [
      'Clinical biochemistry and pathology',
      'Medical microbiology and immunology',
      'Hematology and blood banking foundations',
      'Laboratory instrumentation and quality practices',
      'Diagnostic sample analysis and internship training',
    ],
    careers: [
      'Medical Laboratory Technologist',
      'Pathology / diagnostic lab technician roles',
      'Blood bank laboratory roles',
      'Research or public-health lab support roles',
      'Lab supervisor pathways with experience',
    ],
    highlights: [
      { label: 'Duration', value: '3 Years + 6 Months Internship' },
      { label: 'Level', value: 'Undergraduate Degree' },
      { label: 'Eligibility', value: '10+2 science stream' },
      { label: 'Learning Focus', value: 'Diagnostic laboratory science' },
      { label: 'Career Pathways', value: 'Hospitals, labs, research' },
    ],
    metaDescription:
      'BMLT at SIMS Dehradun — Bachelor of Medical Laboratory Technology with diagnostic lab training and a mandatory internship.',
    image: DSC00503,
    imageAlt:
      'SIMS students in lab coats measuring and mixing liquids during a medical laboratory practical.',
  },
  {
    slug: 'bmrit',
    name: 'BMRIT',
    shortName: 'BMRIT',
    category: 'allied',
    subtitle: 'Bachelor of Medical Radiology & Imaging Technology — imaging for accurate diagnosis.',
    duration: '3 Years + 6 Months Internship',
    level: 'Undergraduate',
    eligibility: '10+2 with science subjects (as per admission norms)',
    learningFocus: 'X-ray, CT, MRI, ultrasound fundamentals, radiation safety, and patient care',
    cardDescription: 'X-rays, MRIs, CT scans, and medical imaging.',
    overview: [
      'BMRIT at SIMS trains students to become radiology and imaging professionals capable of supporting diagnostic imaging workflows.',
      'Students learn radiological sciences alongside patient care, radiation safety, and imaging procedures used with modalities such as X-ray, CT, MRI, and ultrasound.',
      'Practical focus and internship training help graduates assist clinicians with image-based diagnosis in hospitals and imaging centres.',
    ],
    curriculum: [
      'Radiological physics and imaging principles',
      'X-ray, CT, MRI, and ultrasound foundations',
      'Radiation protection and patient positioning',
      'Dark-room / digital imaging workflow basics',
      'Clinical imaging practice and internship',
    ],
    careers: [
      'Radiology / Imaging Technologist',
      'CT / MRI technologist support roles',
      'Diagnostic centre imaging technician',
      'Hospital radiology department roles',
      'Application / equipment support pathways (with experience)',
    ],
    highlights: [
      { label: 'Duration', value: '3 Years + 6 Months Internship' },
      { label: 'Level', value: 'Undergraduate Degree' },
      { label: 'Eligibility', value: '10+2 science stream' },
      { label: 'Learning Focus', value: 'Medical imaging & safety' },
      { label: 'Career Pathways', value: 'Hospitals & imaging centres' },
    ],
    metaDescription:
      'BMRIT at Sushila Institute of Medical Sciences — radiology and imaging technology training with clinical internship support.',
    image: DSC00050,
    imageAlt:
      'SIMS instructor teaching medical theory at a whiteboard during an imaging and healthcare sciences class.',
  },
  {
    slug: 'b-optometry',
    name: 'B.Optometry',
    shortName: 'B.Optometry',
    category: 'allied',
    subtitle: 'Primary eye care education combining vision science with clinical training.',
    duration: '4 Years',
    level: 'Undergraduate',
    eligibility: '10+2 with science subjects (as per program admission norms)',
    learningFocus: 'Ocular anatomy, visual optics, refraction, and clinical eye care',
    cardDescription:
      'Academic theory with clinical training to develop skilled primary eye care professionals.',
    overview: [
      'B.Optometry at SIMS is a four-year undergraduate healthcare program that blends academic theory with intensive clinical training for primary eye care.',
      'Students study foundational medical sciences, ocular anatomy, visual optics, contact lens practice, pediatric optometry, and ocular disease concepts.',
      'Clinical internship experience helps graduates perform eye examinations, support vision disorder management, and work in eye hospitals, optical settings, and healthcare facilities.',
    ],
    curriculum: [
      'Ocular anatomy, physiology, and visual optics',
      'Refraction and binocular vision foundations',
      'Contact lens fitting basics',
      'Pediatric optometry and ocular disease concepts',
      'Clinical eye examination practice and internship',
    ],
    careers: [
      'Optometrist / primary eye care roles',
      'Eye hospital / clinic optometry support',
      'Optical retail clinical roles',
      'Vision screening and community eye care',
      'Further specialization in optometry fields',
    ],
    highlights: [
      { label: 'Duration', value: '4 Years' },
      { label: 'Level', value: 'Undergraduate Degree' },
      { label: 'Eligibility', value: '10+2 science stream' },
      { label: 'Learning Focus', value: 'Vision science & clinical eye care' },
      { label: 'Career Pathways', value: 'Clinics, hospitals, optical care' },
    ],
    metaDescription:
      'B.Optometry at SIMS Dehradun — a 4-year primary eye care program combining classroom learning with clinical training.',
    image: DSC00114,
    imageAlt:
      'SIMS students in uniform engaged in focused classroom learning related to healthcare sciences.',
  },
  {
    slug: 'bott',
    name: 'BOTT — Bachelor of Operation Theatre Technology',
    shortName: 'BOTT',
    category: 'allied',
    subtitle: 'Train for the technical and clinical environment of surgical suites.',
    duration: '3–4 Years',
    level: 'Undergraduate',
    eligibility: '10+2 with science subjects (as per admission norms)',
    learningFocus: 'OT management, sterilization, anesthesia support, and surgical assistance',
    cardDescription:
      'Specialized allied health training to manage the critical environment of surgical suites.',
    overview: [
      'BOTT (Bachelor of Operation Theatre Technology) at SIMS prepares allied health professionals to support safe, efficient surgical environments.',
      'The program covers pre-operative, intra-operative, and post-operative patient care along with sterilization, infection control, and handling of surgical equipment.',
      'Students also study applied anatomy, principles of anesthesia, surgical pharmacology, and emergency infrastructure concepts, culminating in clinical internship exposure in operating rooms.',
    ],
    curriculum: [
      'Applied anatomy and surgical pharmacology foundations',
      'Principles of anesthesia and OT equipment handling',
      'Sterilization and infection control',
      'Pre-, intra-, and post-operative patient care support',
      'Clinical OT internship and theater workflow practice',
    ],
    careers: [
      'Operation Theatre Technologist',
      'Surgical / anesthesia technician support roles',
      'Trauma centre OT support roles',
      'Hospital central sterile supply pathways',
      'OT coordinator pathways with experience',
    ],
    highlights: [
      { label: 'Duration', value: '3–4 Years' },
      { label: 'Level', value: 'Undergraduate Degree' },
      { label: 'Eligibility', value: '10+2 science stream' },
      { label: 'Learning Focus', value: 'OT technology & surgical support' },
      { label: 'Career Pathways', value: 'Hospitals & trauma centres' },
    ],
    metaDescription:
      'BOTT — Bachelor of Operation Theatre Technology at SIMS Dehradun, training students for surgical suite support and OT workflows.',
    image: DSC00287,
    imageAlt:
      'SIMS students in white lab coats practicing a clinical procedure during hands-on OT-related training.',
  },
  {
    slug: 'msc-microbiology',
    name: 'M.Sc Medical Microbiology',
    shortName: 'M.Sc Medical Microbiology',
    category: 'life-sciences',
    subtitle: 'Postgraduate study of microorganisms with intensive laboratory learning.',
    duration: '2 Years',
    level: 'Postgraduate',
    eligibility: 'Relevant bachelor’s degree in science / life sciences (as per university norms)',
    learningFocus: 'Microbial genetics, immunology, molecular biology, and lab research skills',
    cardDescription:
      'In-depth study of microbes with theory and lab work in genetics, immunology, and biotechnology.',
    overview: [
      'M.Sc Medical Microbiology at SIMS offers postgraduate training in the biology of bacteria, viruses, fungi, and parasites, with a strong laboratory emphasis.',
      'Students typically engage with microbial genetics, immunology, molecular biology, and industrial biotechnology concepts while strengthening experimental skills.',
      'The program supports careers in diagnostics, research, quality control, and further academic study in the life sciences.',
    ],
    curriculum: [
      'General and medical microbiology foundations',
      'Microbial genetics and molecular biology',
      'Immunology and host–pathogen interactions',
      'Industrial / applied microbiology concepts',
      'Laboratory methods, instrumentation, and project work',
    ],
    careers: [
      'Microbiologist in diagnostic or research labs',
      'Quality control / quality assurance roles',
      'Pharmaceutical or biotech lab roles',
      'Academic / teaching pathways',
      'Research associate roles',
    ],
    highlights: [
      { label: 'Duration', value: '2 Years' },
      { label: 'Level', value: 'Postgraduate Degree' },
      { label: 'Eligibility', value: 'Relevant B.Sc / life sciences degree' },
      { label: 'Learning Focus', value: 'Lab-based microbial science' },
      { label: 'Career Pathways', value: 'Labs, research, biotech' },
    ],
    metaDescription:
      'M.Sc Medical Microbiology at Sushila Institute of Medical Sciences, Dehradun — postgraduate microbiology with strong laboratory focus.',
    image: DSC00312,
    imageAlt:
      'SIMS students in uniform observing an anatomy demonstration in a medical laboratory classroom.',
  },
  {
    slug: 'baslp',
    name: 'BASLP — Bachelor of Audiology and Speech-Language Pathology',
    shortName: 'BASLP',
    category: 'life-sciences',
    subtitle: 'Diagnose and treat hearing, balance, speech, and language disorders.',
    duration: '4 Years',
    level: 'Undergraduate',
    eligibility: '10+2 or equivalent (as per admission and regulatory norms)',
    learningFocus: 'Audiology, speech-language pathology, and rehabilitation practice',
    cardDescription:
      'Dual-focused training to evaluate and treat hearing, speech, and language disorders.',
    overview: [
      'BASLP at SIMS is a four-year undergraduate allied health program focused on hearing, balance, speech, and language disorders across pediatric and adult populations. The official SIMS program page describes it as dual-focused training aligned with professional practice expectations in audiology and speech-language pathology.',
      'The curriculum typically spans academic and practical coursework followed by a clinical internship in hospitals and rehabilitation settings.',
      'Students study areas such as head and neck anatomy, acoustics, linguistics, neurological communication disorders, and rehabilitation approaches involving hearing aids and related therapies. Licensing and registration requirements should be confirmed with admissions and the relevant regulatory body.',
    ],
    curriculum: [
      'Anatomy of speech and hearing mechanisms',
      'Acoustics, audiology, and hearing assessment foundations',
      'Speech-language pathology and linguistics basics',
      'Pediatric and adult communication disorder management',
      'Clinical practicum / internship in rehabilitation settings',
    ],
    careers: [
      'Audiologist (subject to registration norms)',
      'Speech-Language Pathologist / Therapist roles',
      'ENT / hospital rehabilitation support roles',
      'Special education and hearing-care centre roles',
      'Private clinical practice pathways (as regulations allow)',
    ],
    highlights: [
      { label: 'Duration', value: '4 Years' },
      { label: 'Level', value: 'Undergraduate Degree' },
      { label: 'Eligibility', value: '10+2 or equivalent' },
      { label: 'Learning Focus', value: 'Audiology & speech-language care' },
      { label: 'Career Pathways', value: 'Clinics, hospitals, rehab centres' },
    ],
    metaDescription:
      'BASLP — Bachelor of Audiology and Speech-Language Pathology at SIMS Dehradun, preparing students for hearing and communication care roles.',
    image: DSC00051,
    imageAlt:
      'SIMS students in formal uniforms collaborating around a study table in a classroom with audio-aids teaching materials.',
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}

export function getProgramsByCategory(categoryId: ProgramCategoryId): Program[] {
  return PROGRAMS.filter((p) => p.category === categoryId);
}

export function getRelatedPrograms(program: Program, limit = 3): Program[] {
  return getProgramsByCategory(program.category)
    .filter((p) => p.slug !== program.slug)
    .slice(0, limit);
}

export function programPath(slug: string): string {
  return `/programs/${slug}`;
}
