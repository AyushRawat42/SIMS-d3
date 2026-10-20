export type CourseFaq = {
  question: string;
  answer: string;
};

const hostelAndCampus = (courseName: string) =>
  `${courseName} students at SIMS can use separate boys’ and girls’ hostels with furnished rooms, a hygienic mess and canteen, 24×7 CCTV, and trained security staff. Hostel living is available for outstation students; it is not listed as a compulsory fee on the academic sheet, so confirm room type and mess charges with admissions. Day scholars can use college buses on Dehradun routes that include Sahastradhara, Prem Nagar, Clock Tower, and ISBT, with GPS-tracked buses, trained drivers, and first-aid readiness. The campus is at Sheeshambara, Sighniwala, Central Hope Town, Chakrata Road, Dehradun – 248197.`;

const hnbumuRoute =
  'SIMS follows a merit-based route: about 75% of seats are filled through an All India entrance examination plus an institute interview, and a notified share of NRI/sponsored seats may use qualifying marks plus an interview. Age limits are not published as one number on this page — follow the age rule on the current HNBUMU and institute notice for your category. Carry original mark sheets for document verification and reconfirm the active intake on the admissions page.';

export const COURSE_FAQS: Record<string, CourseFaq[]> = {
  'bsc-nursing': [
    {
      question: 'What is the eligibility for B.Sc Nursing admission at SIMS Dehradun?',
      answer: `B.Sc Nursing at SIMS is a 4-year undergraduate degree. The published baseline is a recognised 10+2 with Physics, Chemistry, Biology, and English, generally with a minimum 45% aggregate in PCB/PCM and category relaxation as per norms. ${hnbumuRoute}`,
    },
    {
      question: 'Where do B.Sc Nursing students complete clinical postings in Dehradun?',
      answer:
        'B.Sc Nursing training combines classroom teaching with nursing skills labs (foundation, adult health, child health, OBG, community health, and advanced skills) and hospital postings through the institute’s clinical tie-up network in Dehradun. Students practise procedures on campus first, then apply them in supervised hospital and community settings. Ask admissions for the current posting plan for your batch.',
    },
    {
      question: 'What are the hostel, security, mess, and transport arrangements for B.Sc Nursing?',
      answer: hostelAndCampus('B.Sc Nursing'),
    },
    {
      question: 'What is the career scope and starting salary after B.Sc Nursing from SIMS?',
      answer:
        'Graduates typically prepare for staff nurse and registered nurse roles, community health nursing, specialty ward support, and later M.Sc Nursing or teaching pathways. SIMS provides career counselling and placement assistance through its hospital and healthcare partner network. The institute does not publish a guaranteed starting salary — confirm current hospital pay bands during counselling.',
    },
  ],
  gnm: [
    {
      question: 'What is the eligibility for GNM at SIMS Dehradun?',
      answer: `GNM (General Nursing and Midwifery) is a 3-year diploma. Admission expects 10+2 or equivalent as per the current guidelines. Undergraduate science pathways at SIMS are generally discussed around a 45% aggregate in PCB/PCM where that bar applies, with category relaxation as per norms. ${hnbumuRoute}`,
    },
    {
      question: 'Where do GNM students get hospital training in Dehradun?',
      answer:
        'GNM students train in foundational nursing labs and midwifery practice on campus, then move into supervised clinical postings and later internship blocks in hospitals, maternity settings, and community health through the SIMS clinical tie-up network in Dehradun. Confirm ward rotation details for the intake year with admissions.',
    },
    {
      question: 'What hostel rules, campus security, mess, and transport apply to GNM students?',
      answer: hostelAndCampus('GNM'),
    },
    {
      question: 'What jobs and salary can I expect after GNM, and can I upgrade later?',
      answer:
        'GNM prepares students for diploma-pathway staff nurse roles, maternity and labour-room support, community health centres, and nursing homes. A common next step is Post Basic B.Sc Nursing. SIMS offers placement support through its healthcare partner network. Starting pay is not published as a fixed package — compare government and private hospital bands with admissions before you enrol.',
    },
  ],
  'post-basic-bsc-nursing': [
    {
      question: 'Who can apply for Post Basic B.Sc Nursing at SIMS?',
      answer:
        'Post Basic B.Sc Nursing is a 2-year programme for GNM (or equivalent) holders who already have nursing registration, as recognised for admission. Bring your GNM diploma, mark sheets, and State Nursing Council RN/RM certificates. Seat allocation follows the current HNBUMU and institute notice, including entrance or counselling steps published for that intake. Age criteria, if any, are those printed on the active notice — they are not a single campus-wide number.',
    },
    {
      question: 'Do Post Basic students still get clinical postings in Dehradun?',
      answer:
        'Yes. The programme builds on GNM ward experience with advanced practice, nursing education, research, and administration, plus specialty clinical exposure through the institute’s Dehradun hospital tie-up network and campus skills labs. Working nurses should confirm the theory and posting timetable for 2026–27 in counselling.',
    },
    {
      question: 'Is hostel, mess, and transport available for Post Basic B.Sc Nursing?',
      answer: hostelAndCampus('Post Basic B.Sc Nursing'),
    },
    {
      question: 'How does Post Basic B.Sc Nursing change career scope and pay?',
      answer:
        'A recognised Post Basic degree is the usual route from GNM into bachelor-level hospital grades, many nursing-officer advertisements, and later M.Sc Nursing. SIMS supports that path with career counselling and placement assistance. It does not publish a guaranteed salary increase — read the current advertisement for the post you want, and confirm clinical roles with admissions.',
    },
  ],
  bpt: [
    {
      question: 'What is the eligibility for BPT after 12th PCB at SIMS Dehradun?',
      answer: `Bachelor of Physiotherapy at SIMS is 4 years of academic and lab instruction plus a 6-month compulsory internship. Eligibility is 10+2 with Physics, Chemistry, and Biology, generally with a minimum 45% aggregate in PCB/PCM and category relaxation as per norms. ${hnbumuRoute}`,
    },
    {
      question: 'Where do BPT students complete clinical rotations and internship?',
      answer:
        'BPT students use exercise therapy, electrotherapy, orthopaedics and sports, and rehabilitation labs on campus, then complete supervised clinical rotations and the compulsory internship in hospitals, rehabilitation settings, and related care in and around Dehradun through the institute’s clinical network. Ask admissions which posting sites are active for your batch.',
    },
    {
      question: 'What are hostel, security, mess, and bus facilities for BPT students?',
      answer: hostelAndCampus('BPT'),
    },
    {
      question: 'What is the career scope and starting salary after BPT?',
      answer:
        'Graduates prepare for hospital and clinic physiotherapy, rehabilitation centres, sports-support roles, and community or home-care practice, subject to registration norms. Early-career private-sector planning bands discussed for India — not a guaranteed SIMS package — run about ₹18,000–₹45,000 per month depending on sports, ICU rehab, neuro, or geriatric settings. SIMS offers placement assistance; confirm current offers in counselling.',
    },
  ],
  bmlt: [
    {
      question: 'What eligibility is required for BMLT at SIMS Dehradun?',
      answer: `BMLT (Bachelor of Medical Laboratory Technology) is 3 years plus a 6-month internship. Admission expects 10+2 with science subjects (PCB/PCM as applicable). Where the undergraduate bar applies, SIMS generally cites a minimum 45% aggregate in PCB/PCM with category relaxation as per norms. ${hnbumuRoute}`,
    },
    {
      question: 'How do BMLT students get practical hospital and lab training?',
      answer:
        'Training covers clinical biochemistry, pathology, microbiology, hematology, and laboratory instrumentation in campus labs, followed by a six-month internship in hospitals, diagnostic labs, and related settings through the Dehradun clinical tie-up network. Sample-handling and quality-practice hours are part of the programme, not a separate add-on.',
    },
    {
      question: 'Are hostel, campus security, mess, and transport available for BMLT?',
      answer: hostelAndCampus('BMLT'),
    },
    {
      question: 'What is the placement scope and starting salary after BMLT?',
      answer:
        'Graduates typically look at medical laboratory technologist roles, pathology and diagnostic labs, blood-bank support, and public-health or research lab roles. SIMS provides placement support through its healthcare partner network. A fixed starting salary is not published — hospital and diagnostic-centre bands differ by city, so confirm recent conversations with admissions.',
    },
  ],
  bmrit: [
    {
      question: 'What is the eligibility for B.Sc MRIT (BMRIT) at SIMS Dehradun?',
      answer: `BMRIT — Bachelor of Medical Radiology and Imaging Technology — runs for 3 years plus a 6-month internship. Eligibility is 10+2 with science subjects as per admission norms. Undergraduate pathways at SIMS are generally aligned to a minimum 45% aggregate in PCB/PCM where that rule applies, with category relaxation as per norms. ${hnbumuRoute}`,
    },
    {
      question: 'Where do BMRIT students practise imaging and hospital rotations?',
      answer:
        'Students learn X-ray, CT, MRI, and ultrasound foundations, radiation safety, and patient positioning in campus imaging labs, then complete clinical imaging practice and internship in hospitals and diagnostic centres through the institute’s Dehradun tie-up network. Confirm which modalities your batch will rotate through before you pay a counselling fee.',
    },
    {
      question: 'What hostel, security, mess, and transport support does SIMS provide?',
      answer: hostelAndCampus('BMRIT'),
    },
    {
      question: 'What careers and starting pay follow B.Sc MRIT?',
      answer:
        'The degree prepares students for radiology and imaging technologist roles, CT/MRI support, diagnostic-centre work, and hospital radiology departments. SIMS offers career counselling and placement assistance. Starting salary is not published as a guaranteed figure and depends on the centre, shift pattern, and city — ask admissions for current placement context.',
    },
  ],
};

export function getCourseFaqs(slug: string): CourseFaq[] | undefined {
  const faqs = COURSE_FAQS[slug];
  return faqs?.length ? faqs : undefined;
}
