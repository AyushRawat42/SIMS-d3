export const FACILITIES_NAV_LINKS = [
  {
    label: 'Overview',
    href: '/facilities',
    description: 'Campus facilities at a glance',
  },
  {
    label: 'Laboratories',
    href: '/facilities/laboratories',
    description: 'Nursing, paramedical, and physiotherapy labs',
  },
  {
    label: 'Hostel',
    href: '/facilities/hostel',
    description: 'Safe on-campus student accommodation',
  },
  {
    label: 'Transport',
    href: '/facilities/transport',
    description: 'College bus routes across Dehradun',
  },
  {
    label: 'More Facilities',
    href: '/facilities/more',
    description: 'Library, auditorium, and campus spaces',
  },
] as const;

export type FacilitiesNavHref = (typeof FACILITIES_NAV_LINKS)[number]['href'];

export function isFacilitiesSectionPath(pathname: string): boolean {
  return pathname === '/facilities' || pathname.startsWith('/facilities/');
}

export function facilitiesLabPath(labId: string): string {
  return `/facilities/laboratories/${labId}`;
}
