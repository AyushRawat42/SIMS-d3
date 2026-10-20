import { SITE_CONTENT } from '@/lib/site-content';

/**
 * Official social and directory profiles for CollegeOrUniversity.sameAs.
 * Shiksha lists SIMS on Dehradun college results but does not publish a stable
 * college URL we can verify, so it stays out of sameAs until admissions confirms the slug.
 */
export const SOCIAL_DIRECTORY_PROFILES = [
  { network: 'Instagram', url: SITE_CONTENT.social.instagram },
  { network: 'Facebook', url: SITE_CONTENT.social.facebook },
  { network: 'YouTube', url: SITE_CONTENT.social.youtube },
  {
    network: 'Collegedunia',
    url: 'https://collegedunia.com/college/63800-sushila-institute-of-medical-sciences-dehradun',
  },
] as const;

export const SAME_AS_URLS: string[] = SOCIAL_DIRECTORY_PROFILES.map((profile) => profile.url);
