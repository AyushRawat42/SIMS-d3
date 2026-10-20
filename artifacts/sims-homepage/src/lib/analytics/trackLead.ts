export type ButtonPlacement =
  | 'sticky_mobile_bar'
  | 'hero_cta'
  | 'floating_widget'
  | 'general_inquiry'
  | 'footer'
  | 'blog_inline';

export type FormType = 'apply_now' | 'brochure_download' | 'contact_inquiry';

type LeadClickEvent = MouseEvent & { __simsLeadTracked?: boolean };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function push(payload: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}

export function courseContextFromPath(pathname: string): string | null {
  const match = /^\/programs\/([^/]+)/.exec(pathname);
  return match?.[1] ?? null;
}

/** E.164-style number, e.g. +919759761244. */
export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (!digits) return '';
  if (digits.startsWith('91') && digits.length >= 12) return `+${digits.slice(0, 12)}`;
  if (digits.length === 10) return `+91${digits}`;
  if (digits.startsWith('0') && digits.length === 11) return `+91${digits.slice(1)}`;
  return `+${digits}`;
}

export function phoneFromHref(href: string): string {
  try {
    const url = new URL(href, 'https://www.sims.college');
    if (url.protocol === 'tel:') return normalizePhone(decodeURIComponent(url.pathname));
    if (url.hostname === 'wa.me') return normalizePhone(url.pathname.replace(/^\//, ''));
    if (url.hostname.endsWith('whatsapp.com')) {
      return normalizePhone(url.searchParams.get('phone') ?? '');
    }
  } catch {
    return normalizePhone(href);
  }
  return '';
}

export function isWhatsAppHref(href: string): boolean {
  return /wa\.me|api\.whatsapp\.com|whatsapp\.com/i.test(href);
}

export function isTelHref(href: string): boolean {
  return href.trim().toLowerCase().startsWith('tel:');
}

export function markLeadTracked(event: { nativeEvent: Event } | Event) {
  const native = 'nativeEvent' in event ? event.nativeEvent : event;
  (native as LeadClickEvent).__simsLeadTracked = true;
}

export function isLeadTracked(event: Event): boolean {
  return Boolean((event as LeadClickEvent).__simsLeadTracked);
}

function pageFields() {
  return {
    page_location: window.location.href,
    page_path: window.location.pathname,
    course_context: courseContextFromPath(window.location.pathname),
  };
}

export function trackWhatsAppLeadClick(input: {
  whatsappNumber: string;
  buttonPlacement: ButtonPlacement;
  courseContext?: string | null;
}) {
  const page = pageFields();
  push({
    event: 'whatsapp_lead_click',
    whatsapp_number: normalizePhone(input.whatsappNumber),
    button_placement: input.buttonPlacement,
    course_context: input.courseContext === undefined ? page.course_context : input.courseContext,
    page_location: page.page_location,
    page_path: page.page_path,
  });
}

export function trackPhoneLeadClick(input: {
  phoneNumber: string;
  buttonPlacement: ButtonPlacement;
  courseContext?: string | null;
}) {
  const page = pageFields();
  push({
    event: 'phone_lead_click',
    phone_number: normalizePhone(input.phoneNumber),
    button_placement: input.buttonPlacement,
    course_context: input.courseContext === undefined ? page.course_context : input.courseContext,
    page_location: page.page_location,
    page_path: page.page_path,
  });
}

export function trackAdmissionFormSubmit(input: {
  formType: FormType;
  selectedCourse: string;
}) {
  const page = pageFields();
  push({
    event: 'admission_form_submit',
    form_type: input.formType,
    selected_course: input.selectedCourse,
    page_location: page.page_location,
    page_path: page.page_path,
  });
}

export function placementFromAnchor(anchor: Element): ButtonPlacement {
  const explicit =
    anchor.getAttribute('data-lead-placement') ??
    anchor.closest('[data-lead-placement]')?.getAttribute('data-lead-placement');
  if (
    explicit === 'sticky_mobile_bar' ||
    explicit === 'hero_cta' ||
    explicit === 'floating_widget' ||
    explicit === 'general_inquiry' ||
    explicit === 'footer' ||
    explicit === 'blog_inline'
  ) {
    return explicit;
  }
  if (anchor.closest('nav[aria-label="Admissions actions"]')) return 'sticky_mobile_bar';
  if (anchor.closest('[data-whatsapp-fab]')) return 'floating_widget';
  if (anchor.closest('footer')) return 'footer';
  if (anchor.closest('header')) return 'hero_cta';
  return 'general_inquiry';
}
