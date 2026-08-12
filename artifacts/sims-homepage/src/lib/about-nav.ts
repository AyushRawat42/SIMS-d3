export const ABOUT_NAV_LINKS = [
  {
    label: 'About SIMS',
    href: '/about',
    description: 'Institute overview, affiliation, and campus strengths',
  },
  {
    label: 'Vision & Mission',
    href: '/vision-mission',
    description: 'Our goals for healthcare education and service',
  },
  {
    label: 'Leadership Talk',
    href: '/leadership',
    description: 'Messages from SIMS founders and academic leaders',
  },
  {
    label: 'Awards & Highlights',
    href: '/awards-highlights',
    description: 'AI innovation and community impact initiatives',
  },
] as const;

export type AboutNavHref = (typeof ABOUT_NAV_LINKS)[number]['href'];

export function isAboutSectionPath(pathname: string): boolean {
  return ABOUT_NAV_LINKS.some((link) => link.href === pathname);
}
