import type { ResponsiveImage } from '@/lib/responsive-image';

export type LabCategoryId = 'nursing' | 'paramedical' | 'physiotherapy' | 'common';

export interface LabDetail {
  id: string;
  title: string;
  category: LabCategoryId;
  shortDescription: string;
  paragraphs: string[];
  equipment: string[];
  academicUses: string[];
  metaTitle: string;
  metaDescription: string;
  image?: ResponsiveImage;
  imageAlt?: string;
}

export const LAB_CATEGORIES: {
  id: LabCategoryId;
  title: string;
  description: string;
}[] = [
  {
    id: 'nursing',
    title: 'Nursing Labs',
    description:
      'Skill and specialty labs aligned with Indian Nursing Council expectations for supervised procedure practice before clinical postings.',
  },
  {
    id: 'paramedical',
    title: 'Paramedical & Allied Health Labs',
    description:
      'Diagnostic, OT, and imaging practice spaces that support MLT, radiology, OT technology, and related allied health programmes.',
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy Labs',
    description:
      'Exercise therapy, electrotherapy, and rehabilitation spaces used for BPT-style assessment and treatment skills training.',
  },
  {
    id: 'common',
    title: 'Common & Shared Labs',
    description:
      'Foundational anatomy, computer, and AV-aid spaces shared across nursing and allied health programmes.',
  },
];

export const LABORATORIES_PAGE = {
  title: 'Laboratories at SIMS',
  subtitle:
    'Explore department labs for nursing, paramedical sciences, physiotherapy, and shared foundational learning at Sushila Institute of Medical Sciences, Dehradun.',
  metaTitle: 'Laboratories at SIMS Dehradun | Nursing, Paramedical & Physiotherapy Labs',
  metaDescription:
    'Browse SIMS Dehradun laboratories — nursing skills labs, microbiology, pathology, radiology, physiotherapy, anatomy, computer lab, and more campus practical facilities.',
  intro: [
    'Hands-on laboratory learning is central to healthcare education at SIMS. Across nursing, paramedical, and physiotherapy programmes, students practise procedures, instruments, and clinical workflows in supervised lab settings before and alongside hospital exposure.',
    'Each lab page below outlines typical academic purpose, standard equipment used in Indian nursing and allied health colleges, and how the space supports professional readiness.',
  ],
};

export const LABS: LabDetail[] = [
  // —— Nursing ——
  {
    id: 'nursing-foundation-lab',
    title: 'Nursing Foundation Lab',
    category: 'nursing',
    shortDescription:
      'Core skills lab for fundamental nursing procedures, bedside care, and first clinical competencies.',
    paragraphs: [
      'The Nursing Foundation Lab is the starting point for clinical skill development at SIMS. Designed in line with Indian Nursing Council expectations for fundamentals of nursing practice, it gives students a safe, supervised space to learn bed-making, vital-sign measurement, personal hygiene care, medication preparation basics, and infection-control routines before they enter hospital wards.',
      'Typical setups in Indian nursing colleges include demonstration beds with mannequins, bedside lockers, screens, washbasins with running water, and procedure trays for injections, dressings, catheterisation practice, and basic life-support drills. Faculty use checklists and repeated demonstration–return demonstration cycles so every student builds muscle memory for safe technique.',
      'At SIMS, this lab anchors early nursing coursework for GNM and B.Sc Nursing pathways, helping learners move from classroom theory to confident bedside readiness under faculty guidance.',
    ],
    equipment: [
      'Hospital demonstration beds with mannequins/dummies',
      'BP apparatus, stethoscopes, and thermometers',
      'Dressing sets, syringes, and procedure trays',
      'Bedside lockers, screens, footstools, and washbasins',
    ],
    academicUses: [
      'Fundamental nursing procedures',
      'Vital signs and patient hygiene practice',
      'Infection control and aseptic technique drills',
    ],
    metaTitle: 'Nursing Foundation Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Explore the Nursing Foundation Lab at SIMS Dehradun — mannequins, demonstration beds, and supervised skills practice for fundamental nursing procedures.',
  },
  {
    id: 'adult-health-nursing-lab',
    title: 'Adult Health Nursing Lab',
    category: 'nursing',
    shortDescription:
      'Medical-surgical nursing practice space for adult patient assessment and ward procedures.',
    paragraphs: [
      'The Adult Health Nursing Lab supports medical-surgical nursing learning for adult patients. Students practise assessment, perioperative care concepts, wound care, IV therapy familiarisation, and monitoring routines that mirror common ward and ICU-adjacent skills taught in Indian B.Sc Nursing curricula.',
      'Equipment commonly includes adult mannequins, IV arm trainers, oxygen and suction practice setups, tracheostomy care models, and trays for advanced bedside procedures. The emphasis is on clinical judgment: recognising abnormal findings, prioritising care, and documenting interventions accurately.',
      'This lab bridges classroom pathophysiology with practical adult nursing care, preparing SIMS students for medical and surgical clinical postings in Dehradun hospital settings.',
    ],
    equipment: [
      'Adult patient mannequins and IV practice arms',
      'Oxygen administration and suction practice units',
      'Wound-care and dressing demonstration kits',
      'Monitoring charts and procedure checklists',
    ],
    academicUses: [
      'Medical-surgical nursing skills',
      'Adult patient assessment practice',
      'Pre- and post-operative care drills',
    ],
    metaTitle: 'Adult Health Nursing Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Adult Health Nursing Lab at SIMS Dehradun for medical-surgical skills, IV practice, wound care, and adult patient assessment training.',
  },
  {
    id: 'community-health-nursing-lab',
    title: 'Community Health Nursing Lab',
    category: 'nursing',
    shortDescription:
      'Public-health practice lab for home visits, family care, and community outreach skills.',
    paragraphs: [
      'Community Health Nursing is a distinctive strength of Indian nursing education. This lab prepares students for primary healthcare, home visiting, family assessment, immunisation counselling, and health education in urban and rural community settings.',
      'Standard community-health lab kits in INC-aligned colleges include bag technique equipment, midwifery and child-health field kits, weighing scales, MUAC tapes, health education charts, models for family planning counselling, and demo materials for nutrition and sanitation awareness.',
      'At SIMS, community health practice connects campus learning with real outreach expectations — so graduates can support PHCs, community clinics, and public-health programmes with confidence.',
    ],
    equipment: [
      'Community health nursing bags and field kits',
      'Weighing scales, MUAC tapes, and growth charts',
      'Family planning and health-education models',
      'Charts for sanitation, nutrition, and immunisation counselling',
    ],
    academicUses: [
      'Home-visit and bag technique practice',
      'Family and community assessment',
      'Health education and outreach drills',
    ],
    metaTitle: 'Community Health Nursing Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Community Health Nursing Lab at SIMS Dehradun for bag technique, home-visit skills, family assessment, and public-health education practice.',
  },
  {
    id: 'advanced-nursing-skills-lab',
    title: 'Advanced Nursing Skills Lab',
    category: 'nursing',
    shortDescription:
      'Simulation-focused lab for critical care, emergency, and advanced clinical nursing skills.',
    paragraphs: [
      'The Advanced Nursing Skills Lab extends foundation training into higher-complexity procedures used in critical care, emergency, and specialised nursing contexts. Students practise advanced airway support concepts, tube feeding, complex IV skills, resuscitation sequences, and monitoring workflows under faculty supervision.',
      'Indian nursing colleges typically equip such labs with BLS/ALS practice mannequins, tracheostomy and gastrostomy care models, ventilator familiarisation aids, infusion practice setups, and simulation-style scenario stations. Learning is checklist-driven so students rehearse escalation and safety steps before real clinical exposure.',
      'This lab helps SIMS nursing students build composure and technical accuracy for high-acuity care environments while reinforcing ethical, patient-safe practice.',
    ],
    equipment: [
      'BLS/ALS and advanced procedure mannequins',
      'Tracheostomy, tube-feeding, and IV skill trainers',
      'Critical-care monitoring demonstration aids',
      'Emergency cart and scenario practice stations',
    ],
    academicUses: [
      'Advanced clinical nursing procedures',
      'Emergency and critical-care drills',
      'Simulation-based scenario practice',
    ],
    metaTitle: 'Advanced Nursing Skills Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Advanced Nursing Skills Lab at SIMS Dehradun for critical care, emergency drills, BLS practice, and high-acuity nursing simulation.',
  },
  {
    id: 'paediatrics-child-health-nursing-lab',
    title: 'Paediatrics & Child Health Nursing Lab',
    category: 'nursing',
    shortDescription:
      'Child-health skills lab for paediatric assessment, newborn care, and age-appropriate nursing.',
    paragraphs: [
      'The Paediatrics & Child Health Nursing Lab focuses on the unique needs of infants, children, and adolescents. Students learn growth monitoring, paediatric medication calculation concepts, newborn care routines, and age-appropriate communication during procedures.',
      'Typical equipment includes paediatric and newborn mannequins, resuscitation models, weighing and length-measurement tools, feeding demonstration kits, and charts for developmental milestones and immunisation schedules — all standard in INC-recognised child health nursing labs.',
      'At SIMS, this lab prepares nursing students for paediatric ward postings and community child-health work with a strong emphasis on safety, gentleness, and family-centred care.',
    ],
    equipment: [
      'Paediatric and newborn mannequins',
      'Baby weighing scales and length boards',
      'Paediatric medication and feeding practice kits',
      'Growth charts and immunisation teaching aids',
    ],
    academicUses: [
      'Child health nursing procedures',
      'Newborn care and resuscitation familiarisation',
      'Growth monitoring and parent counselling practice',
    ],
    metaTitle: 'Paediatrics & Child Health Nursing Lab at SIMS Dehradun',
    metaDescription:
      'Paediatrics and Child Health Nursing Lab at SIMS Dehradun for newborn care, growth monitoring, and paediatric nursing skills practice.',
  },
  {
    id: 'nutrition-dietetics-lab',
    title: 'Nutrition & Dietetics Lab',
    category: 'nursing',
    shortDescription:
      'Food science and therapeutic diet practice space for patient nutrition education.',
    paragraphs: [
      'Nutrition is foundational to recovery and public health. The Nutrition & Dietetics Lab helps students understand balanced diets, therapeutic meal planning, food hygiene, and counselling for conditions commonly seen in Indian clinical and community practice.',
      'Labs of this type usually include cooking demonstration facilities, food models, weighing scales, charts for calorie and nutrient composition, and materials for planning diets in pregnancy, childhood, diabetes, hypertension, and convalescence.',
      'SIMS students use this lab to connect nutrition science with practical patient and family education — a core competency for nursing and community health roles.',
    ],
    equipment: [
      'Food models and therapeutic diet charts',
      'Kitchen demonstration tools and weighing scales',
      'Nutrient composition and calorie reference materials',
      'Counselling aids for clinical diet education',
    ],
    academicUses: [
      'Therapeutic diet planning',
      'Nutrition assessment and counselling practice',
      'Food hygiene and balanced-meal demonstrations',
    ],
    metaTitle: 'Nutrition & Dietetics Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Nutrition and Dietetics Lab at SIMS Dehradun for therapeutic diet planning, food models, and patient nutrition education practice.',
  },
  {
    id: 'pre-clinical-sciences-lab',
    title: 'Pre-Clinical Sciences Lab',
    category: 'nursing',
    shortDescription:
      'Foundational sciences lab supporting anatomy, physiology, and basic medical science learning.',
    paragraphs: [
      'The Pre-Clinical Sciences Lab strengthens the scientific base of nursing education — anatomy, physiology, and related biomedical concepts that underpin clinical decision-making. Students study body systems with models, charts, specimens, and guided practical exercises.',
      'In Indian nursing colleges, pre-clinical labs commonly provide skeletal and organ models, microscopes for basic histology/microbiology orientation, charts of physiological processes, and demonstration materials that make abstract theory tangible.',
      'At SIMS, this lab ensures nursing students enter clinical subjects with a clear structural and functional understanding of the human body.',
    ],
    equipment: [
      'Anatomical models, charts, and specimens',
      'Microscopes for basic science practicals',
      'Physiology demonstration aids',
      'System-based learning kits and posters',
    ],
    academicUses: [
      'Anatomy and physiology reinforcement',
      'Basic biomedical science practicals',
      'Pre-clinical foundation for clinical subjects',
    ],
    metaTitle: 'Pre-Clinical Sciences Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Pre-Clinical Sciences Lab at SIMS Dehradun for anatomy, physiology, and foundational biomedical learning for nursing students.',
  },
  {
    id: 'obstetrics-gynaecology-nursing-lab',
    title: 'Obstetrics & Gynaecology Nursing Lab',
    category: 'nursing',
    shortDescription:
      'Maternity nursing lab for antenatal, intranatal, postnatal, and newborn care skills.',
    paragraphs: [
      'The Obstetrics & Gynaecology Nursing Lab prepares students for maternity and women’s health nursing. Learners practise antenatal assessment concepts, labour-room readiness, postnatal care, and newborn handling in a controlled teaching environment.',
      'Standard OBG nursing labs in India include birthing simulators or pelvic models, fetal skull and pelvis sets, antenatal examination models, delivery kits for demonstration, and newborn care practice stations — aligned with midwifery and obstetric nursing curricula.',
      'SIMS uses this lab to build respectful, evidence-based maternity nursing skills before students join labour rooms and antenatal clinics during clinical postings.',
    ],
    equipment: [
      'Birthing and pelvic examination models',
      'Fetal skull, pelvis, and antenatal assessment aids',
      'Delivery and perineal-care demonstration kits',
      'Newborn care and postnatal teaching stations',
    ],
    academicUses: [
      'Antenatal and postnatal nursing skills',
      'Labour-room procedure familiarisation',
      'Newborn and maternity care practice',
    ],
    metaTitle: 'Obstetrics & Gynaecology Nursing Lab at SIMS Dehradun',
    metaDescription:
      'OBG Nursing Lab at SIMS Dehradun for antenatal, intranatal, postnatal, and newborn care skills with maternity nursing models.',
  },

  // —— Paramedical ——
  {
    id: 'microbiology-lab',
    title: 'Microbiology Lab',
    category: 'paramedical',
    shortDescription:
      'Microscopy and culture-oriented lab for infection science and diagnostic microbiology basics.',
    paragraphs: [
      'The Microbiology Lab introduces students to microorganisms, aseptic technique, staining methods, and diagnostic microbiology concepts used in hospitals and clinical laboratories. It is essential for nursing infection control awareness and for paramedical programmes such as MLT.',
      'Typical college microbiology labs in India are equipped with compound microscopes, autoclaves, hot-air ovens, incubators, staining racks, culture media preparation tools, and biosafety-conscious work practices for teaching purposes.',
      'At SIMS, microbiology practicals reinforce lab discipline, observation skills, and the scientific basis of infection prevention — competencies that transfer directly to clinical and diagnostic settings.',
    ],
    equipment: [
      'Compound microscopes and staining kits',
      'Autoclave, hot-air oven, and incubator',
      'Culture media and inoculation tools (teaching use)',
      'Biosafety-oriented benches and wash facilities',
    ],
    academicUses: [
      'Microscopy and staining practicals',
      'Aseptic technique training',
      'Diagnostic microbiology orientation',
    ],
    metaTitle: 'Microbiology Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Microbiology Lab at SIMS Dehradun for microscopy, staining, aseptic technique, and diagnostic microbiology learning.',
  },
  {
    id: 'clinical-research-lab',
    title: 'Clinical Research Lab',
    category: 'paramedical',
    shortDescription:
      'Research-oriented space for study design, data handling, and evidence-based healthcare practice.',
    paragraphs: [
      'The Clinical Research Lab supports evidence-based learning — helping students understand research methods, ethical consent concepts, basic biostatistics, and how clinical evidence informs care protocols. For allied health and nursing students, research literacy is increasingly important for quality improvement and postgraduate pathways.',
      'Such spaces typically provide computers or workstations, reference protocols, sample case-record formats, data-entry practice tools, and guided workshops on literature review and study appraisal rather than wet-lab experimentation alone.',
      'At SIMS, clinical research exposure encourages students to think critically about outcomes, documentation quality, and continuous improvement in healthcare delivery.',
    ],
    equipment: [
      'Workstations for literature and data practice',
      'Sample CRFs and protocol templates',
      'Basic biostatistics and charting tools',
      'Reference materials on research ethics',
    ],
    academicUses: [
      'Research methodology orientation',
      'Data handling and documentation practice',
      'Evidence-based practice workshops',
    ],
    metaTitle: 'Clinical Research Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Clinical Research Lab at SIMS Dehradun for research methods, data practice, and evidence-based healthcare learning.',
  },
  {
    id: 'blood-collection-phlebotomy-center',
    title: 'Blood Collection & Phlebotomy Center',
    category: 'paramedical',
    shortDescription:
      'Phlebotomy practice center for safe venous blood collection and sample handling skills.',
    paragraphs: [
      'Accurate diagnostics begin with correct sample collection. The Blood Collection & Phlebotomy Center trains students in venipuncture technique, patient identification, tourniquet use, tube selection, and post-collection care — skills critical for MLT and clinical support roles.',
      'Teaching centers commonly use phlebotomy practice arms, vacuum tube sets, lancets for capillary sampling demos, PPE, sharps disposal units, and checklists for labelling and chain-of-custody discipline.',
      'SIMS emphasises safety and professionalism here: calm patient communication, needle-stick prevention, and error-free sample identification before students encounter real collection environments.',
    ],
    equipment: [
      'Phlebotomy practice arms and vein trainers',
      'Vacutainer sets, tourniquets, and PPE',
      'Sharps containers and sample labelling stations',
      'Capillary sampling demonstration kits',
    ],
    academicUses: [
      'Venipuncture technique practice',
      'Sample labelling and handling drills',
      'Patient safety and PPE routines',
    ],
    metaTitle: 'Blood Collection & Phlebotomy Center at SIMS Dehradun',
    metaDescription:
      'Phlebotomy Center at SIMS Dehradun for venous blood collection practice, sample handling, and lab safety training.',
  },
  {
    id: 'operation-theater-technology-lab',
    title: 'Operation Theater Technology Lab',
    category: 'paramedical',
    shortDescription:
      'OT technology lab for surgical asepsis, instrument sets, and theatre workflow practice.',
    paragraphs: [
      'The Operation Theater Technology Lab prepares students for the structured world of surgical theatres — scrubbing, gowning, gloving, instrument identification, trolley setup, and maintenance of aseptic fields. It is central to BOTT and related OT assistant pathways.',
      'Indian OT tech labs typically include mock OT tables, instrument sets by specialty, sterilisation demonstration equipment (autoclave awareness), scrub practice stations, and models for positioning and draping concepts.',
      'At SIMS, OT lab practice builds the discipline and teamwork habits required for safe perioperative support in hospital operating rooms.',
    ],
    equipment: [
      'Mock OT table and instrument trolley setups',
      'Basic and specialty surgical instrument sets',
      'Scrub, gown, and glove practice stations',
      'Sterilisation and asepsis teaching aids',
    ],
    academicUses: [
      'OT asepsis and scrub technique',
      'Instrument identification and trolley setup',
      'Perioperative workflow familiarisation',
    ],
    metaTitle: 'Operation Theater Technology Lab at SIMS Dehradun',
    metaDescription:
      'OT Technology Lab at SIMS Dehradun for scrub technique, surgical instruments, asepsis, and operation theatre workflow training.',
  },
  {
    id: 'biochemistry-lab',
    title: 'Biochemistry Lab',
    category: 'paramedical',
    shortDescription:
      'Clinical biochemistry lab for blood chemistry concepts and analytical lab discipline.',
    paragraphs: [
      'The Biochemistry Lab introduces students to clinical chemistry — glucose, renal and liver function concepts, electrolytes, and the analytical thinking used in diagnostic laboratories. It supports MLT and foundational science learning for nursing and allied health.',
      'College biochemistry labs commonly include colorimeters/photometers (or teaching analysers), centrifuges, pipettes, reagent kits for demonstration assays, water baths, and glassware with strict lab-safety protocols.',
      'SIMS uses biochemistry practicals to train precision, calculation accuracy, and quality-awareness — habits that define trustworthy laboratory reporting.',
    ],
    equipment: [
      'Colorimeter/photometer and centrifuges',
      'Pipettes, burettes, and volumetric glassware',
      'Reagent kits for teaching assays',
      'Water bath and sample preparation tools',
    ],
    academicUses: [
      'Clinical chemistry demonstrations',
      'Pipetting and analytical technique practice',
      'Quality and safety routines in lab work',
    ],
    metaTitle: 'Biochemistry Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Biochemistry Lab at SIMS Dehradun for clinical chemistry practicals, analytical technique, and diagnostic lab training.',
  },
  {
    id: 'pathology-lab',
    title: 'Pathology Lab',
    category: 'paramedical',
    shortDescription:
      'Pathology practical lab for haematology, sample processing, and diagnostic observation skills.',
    paragraphs: [
      'The Pathology Lab supports learning in haematology, basic histopathology orientation, and diagnostic sample workflows. Students practise smear preparation concepts, staining observation, and the organisational discipline of a clinical pathology department.',
      'Typical teaching pathology labs include microscopes, haemocytometers, centrifuges, staining racks, blood cell charts, and teaching slides — forming the backbone of BMLT and pathology-related coursework in Indian paramedical colleges.',
      'At SIMS, pathology lab sessions develop careful observation and reporting habits that prepare students for hospital diagnostic laboratories.',
    ],
    equipment: [
      'Microscopes and teaching pathology slides',
      'Haemocytometers and staining kits',
      'Centrifuges and sample prep tools',
      'Blood cell morphology charts',
    ],
    academicUses: [
      'Haematology practicals',
      'Smear and staining observation',
      'Diagnostic pathology orientation',
    ],
    metaTitle: 'Pathology Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Pathology Lab at SIMS Dehradun for haematology practicals, microscopy, staining, and diagnostic laboratory training.',
  },
  {
    id: 'radiology-imaging-technology-lab',
    title: 'Radiology & Imaging Technology Lab',
    category: 'paramedical',
    shortDescription:
      'Imaging technology lab for radiographic concepts, positioning, and radiation safety orientation.',
    paragraphs: [
      'The Radiology & Imaging Technology Lab introduces students to medical imaging principles used in X-ray and related modalities. Learners study positioning concepts, image quality factors, and radiation protection — core themes in BMRIT and imaging technology programmes.',
      'Teaching labs commonly provide X-ray viewers/view boxes, anatomical positioning models, lead apron demonstrations, technique charts, and image interpretation practice sets. Where available, demonstration exposure to imaging equipment is supervised with strict safety protocols.',
      'SIMS imaging lab learning emphasises patient care during procedures, ethical radiation use, and technical accuracy for diagnostic support roles.',
    ],
    equipment: [
      'X-ray viewers and teaching radiograph sets',
      'Positioning models and technique charts',
      'Radiation protection demonstration aids (lead apron, etc.)',
      'Image quality and anatomy correlation materials',
    ],
    academicUses: [
      'Radiographic positioning concepts',
      'Image viewing and quality discussion',
      'Radiation safety orientation',
    ],
    metaTitle: 'Radiology & Imaging Technology Lab at SIMS Dehradun',
    metaDescription:
      'Radiology and Imaging Technology Lab at SIMS Dehradun for positioning practice, X-ray viewing, and radiation safety training.',
  },
  {
    id: 'medical-laboratory-technology-lab',
    title: 'Medical Laboratory Technology (MLT) Lab',
    category: 'paramedical',
    shortDescription:
      'Integrated MLT practice lab covering sample workflows across major diagnostic sections.',
    paragraphs: [
      'The Medical Laboratory Technology (MLT) Lab is an integrated practical space for students training as medical lab professionals. It connects phlebotomy, haematology, biochemistry, and microbiology concepts into end-to-end diagnostic workflows.',
      'In Indian BMLT programmes, MLT labs typically combine microscopes, centrifuges, analysers or teaching photometers, culture/staining setups, and quality-control documentation practice so students understand both technique and lab management basics.',
      'At SIMS, the MLT lab prepares students for hospital and diagnostic centre environments where accuracy, turnaround awareness, and biohazard safety are non-negotiable.',
    ],
    equipment: [
      'Integrated diagnostic workstations',
      'Microscopes, centrifuges, and teaching analysers',
      'Sample receiving and labelling stations',
      'QC logs and biohazard safety equipment',
    ],
    academicUses: [
      'End-to-end lab workflow practice',
      'Multi-section diagnostic technique drills',
      'Quality control and lab safety training',
    ],
    metaTitle: 'Medical Laboratory Technology (MLT) Lab at SIMS Dehradun',
    metaDescription:
      'MLT Lab at SIMS Dehradun for integrated diagnostic workflows, haematology-biochemistry practice, and lab quality training.',
  },

  // —— Physiotherapy ——
  {
    id: 'physiotherapy-rehabilitation-center',
    title: 'Physiotherapy Rehabilitation Center',
    category: 'physiotherapy',
    shortDescription:
      'Rehab practice center for functional recovery, gait training, and therapy planning.',
    paragraphs: [
      'The Physiotherapy Rehabilitation Center is a multi-station practice space where BPT students apply assessment findings to functional recovery plans. Students work on gait re-education, transfer training, ADL practice, and progressive exercise programmes for orthopaedic, neurological, and post-surgical case concepts.',
      'Indian physiotherapy colleges typically equip rehab centres with parallel bars, walkers and crutches, therapy mats, tilt tables, stairs for gait practice, and measurement tools such as goniometers — reflecting MSR-oriented kinesiotherapy requirements.',
      'At SIMS, the rehab centre helps students connect clinical reasoning with hands-on therapy delivery in a supervised campus setting.',
    ],
    equipment: [
      'Parallel bars, walkers, crutches, and canes',
      'Therapy mats, tilt table, and practice stairs',
      'Goniometers and functional assessment tools',
      'Treatment couches for rehab sessions',
    ],
    academicUses: [
      'Gait and transfer training',
      'Functional rehabilitation planning',
      'Supervised therapy practice sessions',
    ],
    metaTitle: 'Physiotherapy Rehabilitation Center at SIMS Dehradun',
    metaDescription:
      'Physiotherapy Rehabilitation Center at SIMS Dehradun for gait training, functional recovery practice, and BPT rehab skills.',
  },
  {
    id: 'pain-manual-therapy-lab',
    title: 'Pain & Manual Therapy Lab',
    category: 'physiotherapy',
    shortDescription:
      'Hands-on lab for soft-tissue techniques, joint mobilisation concepts, and pain assessment.',
    paragraphs: [
      'The Pain & Manual Therapy Lab focuses on assessment of musculoskeletal pain and introductory manual therapy skills. Students learn palpation, soft-tissue techniques, joint mobilisation concepts, and how to document pain intensity and functional limitation responsibly.',
      'Labs of this type commonly include adjustable therapy plinths, assessment kits, therabands, and teaching models for spinal and peripheral joint techniques, with strict emphasis on consent, indications, and contraindications.',
      'SIMS uses this lab to develop careful, patient-centred manual therapy foundations before students apply techniques in clinical placements.',
    ],
    equipment: [
      'Adjustable manual therapy plinths',
      'Pain and sensory assessment kits',
      'Therabands and soft-tissue practice tools',
      'Joint and spine teaching models',
    ],
    academicUses: [
      'Pain assessment and documentation',
      'Manual therapy technique practice',
      'Musculoskeletal clinical reasoning drills',
    ],
    metaTitle: 'Pain & Manual Therapy Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Pain and Manual Therapy Lab at SIMS Dehradun for musculoskeletal assessment, soft-tissue techniques, and mobilisation practice.',
  },
  {
    id: 'orthopaedics-sports-lab',
    title: 'Orthopaedics and Sports Lab',
    category: 'physiotherapy',
    shortDescription:
      'Ortho and sports physiotherapy lab for injury assessment, taping, and return-to-activity drills.',
    paragraphs: [
      'The Orthopaedics and Sports Lab prepares physiotherapy students for musculoskeletal injury management and sports rehabilitation concepts. Learners practise assessment of common joint injuries, therapeutic exercise progression, and supportive techniques such as taping under faculty guidance.',
      'Equipment often includes therapy couches, resistance bands, medicine balls, balance boards, taping materials, and functional testing tools used in sports physio teaching environments across Indian BPT colleges.',
      'At SIMS, this lab builds practical competence for orthopaedic OPD concepts and sports-related rehab pathways.',
    ],
    equipment: [
      'Therapy couches and sports rehab tools',
      'Resistance bands, medicine balls, and balance boards',
      'Taping and bracing demonstration kits',
      'Functional testing and measurement aids',
    ],
    academicUses: [
      'Orthopaedic assessment practice',
      'Sports injury rehab drills',
      'Taping and exercise progression training',
    ],
    metaTitle: 'Orthopaedics and Sports Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Orthopaedics and Sports Lab at SIMS Dehradun for injury assessment, sports rehab practice, and taping skills for BPT students.',
  },
  {
    id: 'exercise-therapy-lab',
    title: 'Exercise Therapy Lab',
    category: 'physiotherapy',
    shortDescription:
      'Kinesiotherapy lab for therapeutic exercise, strength, mobility, and functional training.',
    paragraphs: [
      'The Exercise Therapy Lab (kinesiotherapy) is where physiotherapy students master therapeutic exercise prescription — range of motion, strengthening, endurance, balance, and coordination. It is one of the core practical spaces mandated in physiotherapy education standards in India.',
      'Standard equipment includes parallel bars with mirrors, wall bars, suspension apparatus, dumbbells and weight cuffs, Swiss balls, shoulder wheels, finger ladders, and gait aids — matching typical MSR lists for exercise therapy laboratories.',
      'SIMS students use this lab to design progressive exercise plans and practise safe spotting and patient education during therapy.',
    ],
    equipment: [
      'Parallel bars with mirrors and wall bars',
      'Dumbbells, weight cuffs, springs, and therabands',
      'Swiss balls, shoulder wheel, and finger ladder',
      'Suspension apparatus and exercise mats',
    ],
    academicUses: [
      'Therapeutic exercise prescription',
      'Strength and mobility training practice',
      'Balance and functional exercise drills',
    ],
    metaTitle: 'Exercise Therapy Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Exercise Therapy Lab at SIMS Dehradun for kinesiotherapy, therapeutic exercise practice, and BPT functional training.',
  },
  {
    id: 'electrotherapy-lab',
    title: 'Electrotherapy Lab',
    category: 'physiotherapy',
    shortDescription:
      'Electrotherapy lab for modality practice including ultrasound, TENS, IFT, and heat-cold therapy.',
    paragraphs: [
      'The Electrotherapy Lab trains physiotherapy students in therapeutic modalities used for pain relief, inflammation management, and tissue healing support. Students learn indications, contraindications, dosing concepts, and safe application technique.',
      'As per typical Indian physiotherapy MSR equipment lists, labs include ultrasound units, TENS, interferential therapy (IFT), shortwave diathermy awareness setups, hot and cold packs, paraffin wax baths, infrared lamps, and diagnostic stimulators in earthed cubicles.',
      'At SIMS, electrotherapy practice stresses electrical safety, patient screening, and evidence-informed modality selection alongside manual and exercise approaches.',
    ],
    equipment: [
      'Ultrasound, TENS, and IFT units',
      'Hot/cold packs and paraffin wax bath',
      'Infrared/UV teaching lamps and stimulators',
      'Earthed treatment cubicles and exam couches',
    ],
    academicUses: [
      'Modality application practice',
      'Dose selection and safety screening',
      'Electrotherapy clinical reasoning',
    ],
    metaTitle: 'Electrotherapy Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Electrotherapy Lab at SIMS Dehradun for ultrasound, TENS, IFT, heat-cold therapy, and safe modality practice for BPT.',
  },
  {
    id: 'physiology-lab',
    title: 'Physiology Lab',
    category: 'physiotherapy',
    shortDescription:
      'Human physiology lab supporting exercise physiology and body-system practical learning.',
    paragraphs: [
      'The Physiology Lab supports understanding of how body systems respond to exercise, injury, and rehabilitation. Physiotherapy and allied health students use it to connect cardiovascular, respiratory, and neuromuscular physiology with clinical assessment.',
      'Teaching physiology labs commonly include BP apparatus, spirometry or peak-flow demonstration tools, pulse oximeters, weighing and height measurement devices, and charts for physiological processes — sometimes alongside basic fitness assessment equipment.',
      'At SIMS, physiology practicals ground therapy decisions in measurable human responses rather than technique alone.',
    ],
    equipment: [
      'BP apparatus, stethoscopes, and pulse oximeters',
      'Spirometry/peak-flow demonstration tools',
      'Height-weight measurement stations',
      'Exercise physiology charts and assessment kits',
    ],
    academicUses: [
      'Human physiology practicals',
      'Exercise response measurement',
      'Clinical physiology correlation workshops',
    ],
    metaTitle: 'Physiology Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Physiology Lab at SIMS Dehradun for exercise physiology practicals, vital measurements, and body-system learning.',
  },

  // —— Common ——
  {
    id: 'anatomy-lab',
    title: 'Anatomy Lab',
    category: 'common',
    shortDescription:
      'Anatomy lab with models and charts for structural study across healthcare programmes.',
    paragraphs: [
      'The Anatomy Lab is a shared foundation for nursing, physiotherapy, and paramedical students. Learners study bones, muscles, organs, and body systems using models and charts that make structural relationships clear before clinical application.',
      'Indian medical and paramedical colleges typically equip anatomy labs with articulated skeletons, individual bone sets, organ models, sectional charts, and demonstration specimens suitable for undergraduate teaching.',
      'At SIMS, anatomy lab sessions build the spatial and terminological fluency students need for assessment, imaging correlation, and bedside communication.',
    ],
    equipment: [
      'Articulated skeleton and bone sets',
      'Organ and system models',
      'Anatomical charts and posters',
      'Demonstration tables for group study',
    ],
    academicUses: [
      'Gross anatomy study with models',
      'System-based structural learning',
      'Cross-programme foundational practice',
    ],
    metaTitle: 'Anatomy Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Anatomy Lab Facilities at SIMS Dehradun — skeletons, organ models, and charts for nursing and allied health anatomy learning.',
  },
  {
    id: 'computer-lab',
    title: 'Computer Lab',
    category: 'common',
    shortDescription:
      'Digital learning lab for coursework, research, assignments, and online academic tools.',
    paragraphs: [
      'The Computer Lab supports digital literacy for healthcare students — research, assignments, online journals, presentations, and programme-related e-learning. INC norms for nursing colleges commonly expect computer access at a practical student-to-system ratio.',
      'Workstations with internet connectivity enable collaborative study, literature search practice, and documentation skills that modern hospitals increasingly expect from graduates.',
      'At SIMS, the computer lab complements classroom and library resources so students can complete academic work efficiently on campus.',
    ],
    equipment: [
      'Desktop workstations with internet access',
      'Printers/scanners for academic use (as available)',
      'Presentation and productivity software',
      'Networked study seating for group work',
    ],
    academicUses: [
      'Assignments and digital coursework',
      'Online journal and research access',
      'Collaborative academic projects',
    ],
    metaTitle: 'Computer Lab Facilities at SIMS Dehradun',
    metaDescription:
      'Computer Lab at SIMS Dehradun for digital coursework, research, online journals, and student academic computing.',
  },
  {
    id: 'av-aids-lab',
    title: 'AV Aids Lab',
    category: 'common',
    shortDescription:
      'Audio-visual aids room for teaching media, models, and instructional technology support.',
    paragraphs: [
      'The AV Aids Lab (Audio-Visual Aids Room) stores and supports instructional media used across departments — charts, models, projectors, recorded demonstrations, and other teaching aids that enrich classroom and lab sessions.',
      'As noted in Indian nursing college infrastructure guidelines, AV rooms commonly house OHPs/LCD projectors, models, specimen displays, charts and posters, and digital playback equipment kept under organised inventory control.',
      'At SIMS, AV resources help faculty deliver clearer demonstrations and help students revise complex procedures visually between practical sessions.',
    ],
    equipment: [
      'Projectors and digital display equipment',
      'Teaching models, charts, and posters',
      'Recorded demonstration and media library',
      'Secure storage racks and inventory systems',
    ],
    academicUses: [
      'Classroom and lab teaching support',
      'Visual revision of clinical procedures',
      'Faculty demonstration preparation',
    ],
    metaTitle: 'AV Aids Lab Facilities at SIMS Dehradun',
    metaDescription:
      'AV Aids Lab at SIMS Dehradun for projectors, teaching models, charts, and instructional media supporting healthcare education.',
  },
];

export function getLabById(id: string): LabDetail | undefined {
  return LABS.find((lab) => lab.id === id);
}

export function getLabsByCategory(category: LabCategoryId): LabDetail[] {
  return LABS.filter((lab) => lab.category === category);
}

export function getRelatedLabs(lab: LabDetail, limit = 3): LabDetail[] {
  return LABS.filter((item) => item.category === lab.category && item.id !== lab.id).slice(0, limit);
}
