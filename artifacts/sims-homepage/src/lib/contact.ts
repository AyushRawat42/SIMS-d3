import { SITE_CONTENT } from '@/lib/site-content';

export const CONTACT_PAGE = {
  title: 'Contact Us',
  subtitle:
    'Reach the SIMS admissions team for programme guidance, campus visits, and student support — we’re here Monday to Saturday.',
  metaDescription:
    'Contact Sushila Institute of Medical Sciences (SIMS), Dehradun — phone, email, office hours, campus map, and social channels for admissions and campus visits.',
};

/** Official contact details prioritized from sims.college/contact-us and verified public listings */
export const CONTACT_DETAILS = {
  collegeName: 'Sushila Institute of Medical Sciences (SIMS)',
  addressLines: [
    'Sheeshambara, Sighniwala, Chakrata Road',
    'Central Hope Town, Dehradun',
    'Uttarakhand – 248197, India',
  ],
  addressSingle:
    'Sushila Institute of Medical Sciences (SIMS), Sheeshambara, Sighniwala, Chakrata Road, Central Hope Town, Dehradun, Uttarakhand – 248197, India',
  phones: [
    { display: '9759761244', tel: '+919759761244', label: 'Admissions' },
    { display: '9759761243', tel: '+919759761243', label: 'Admissions' },
    { display: '9759761241', tel: '+919759761241', label: 'Admissions' },
  ],
  /** Primary email listed on the official SIMS Contact Us page */
  email: 'info@simsdehradun.com',
  /** Email already used across this site and listed on public college directories */
  emailAlt: 'Info@sims.college',
  officeHours: 'Monday to Saturday, 9 AM – 5 PM',
  officeHoursNote: 'Closed on Sundays and public holidays (confirm with admissions for exceptions).',
  website: 'https://sims.college',
  inquiryNote: 'For admissions and general inquiries',
};

export const MAP_CONFIG = {
  embedSrc:
    'https://maps.google.com/maps?q=Sushila%20Institute%20of%20Medical%20Sciences%20Sheeshambara%20Sighniwala%20Chakrata%20Road%20Dehradun&z=15&output=embed',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      'Sushila Institute of Medical Sciences, Sheeshambara, Sighniwala, Chakrata Road, Dehradun',
    ),
  iframeTitle: 'Map showing location of Sushila Institute of Medical Sciences, Dehradun',
};

export const SOCIAL_LINKS = [
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'Sushila Institute of Medical Sciences',
    description: 'Campus updates, events, and institute announcements.',
    href: SITE_CONTENT.social.facebook,
    cta: 'Open Facebook',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@simscollegedehradun',
    description: 'Student life, campus moments, and programme highlights.',
    href: SITE_CONTENT.social.instagram,
    cta: 'Open Instagram',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@SIMSDEHRADUN',
    description: 'Videos and campus stories from SIMS Dehradun.',
    href: SITE_CONTENT.social.youtube,
    cta: 'Open YouTube',
  },
] as const;

export const CONTACT_HELP_NOTES = [
  {
    title: 'Admissions questions',
    text: 'Ask about eligibility, documents, counselling, and the current intake for nursing and allied health programmes.',
  },
  {
    title: 'Campus visit guidance',
    text: 'Plan a visit during office hours or request directions — our team can help you reach Sheeshambara, Chakrata Road.',
  },
  {
    title: 'Programme-related inquiries',
    text: 'Share the course you’re interested in and we’ll connect you with the right admissions counsellor.',
  },
];
