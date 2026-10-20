import {
  courseContextFromPath,
  trackAdmissionFormSubmit,
  trackPhoneLeadClick,
  trackWhatsAppLeadClick,
  type ButtonPlacement,
} from '@/lib/analytics/trackLead';
import { WHATSAPP_CONTACT } from '@/lib/site-content';

export type LeadType = 'whatsapp' | 'call' | 'brochure_modal';

/** @deprecated Prefer trackWhatsAppLeadClick / trackPhoneLeadClick / trackAdmissionFormSubmit. */
export function pushGenerateLead(
  leadType: LeadType,
  coursePage?: string,
  placement: ButtonPlacement = 'general_inquiry',
) {
  const courseContext = courseContextFromPath(coursePage ?? window.location.pathname);
  if (leadType === 'whatsapp') {
    trackWhatsAppLeadClick({
      whatsappNumber: WHATSAPP_CONTACT.number,
      buttonPlacement: placement,
      courseContext,
    });
    return;
  }
  if (leadType === 'call') {
    trackPhoneLeadClick({
      phoneNumber: WHATSAPP_CONTACT.number,
      buttonPlacement: placement,
      courseContext,
    });
    return;
  }
  trackAdmissionFormSubmit({
    formType: 'brochure_download',
    selectedCourse: courseContext ?? '',
  });
}

export function courseWhatsAppHref(courseName: string): string {
  const text = `Hi SIMS Admissions Team, I am viewing the ${courseName} page on sims.college and want details on fees, eligibility, and admission.`;
  return `${WHATSAPP_CONTACT.href}?text=${encodeURIComponent(text)}`;
}

export function brochureWhatsAppHref(input: {
  name: string;
  phone: string;
  course: string;
}): string {
  const text = `Hi SIMS Admissions Team, I am ${input.name} (${input.phone}). I am viewing the ${input.course} page on sims.college and want the brochure and fee details.`;
  return `${WHATSAPP_CONTACT.href}?text=${encodeURIComponent(text)}`;
}
