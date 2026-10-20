import { Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { markLeadTracked, trackPhoneLeadClick, trackWhatsAppLeadClick } from '@/lib/analytics/trackLead';
import { courseWhatsAppHref } from '@/lib/lead-tracking';
import { WHATSAPP_CONTACT } from '@/lib/site-content';

export function MobileStickyCTA({
  courseName,
  onBrochureClick,
}: {
  courseName: string;
  onBrochureClick: () => void;
}) {
  return (
    <nav
      aria-label="Admissions actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-sims-border bg-white/95 backdrop-blur-sm shadow-[0_-8px_24px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-3 gap-1.5 p-2">
        <a
          href={WHATSAPP_CONTACT.tel}
          data-lead-placement="sticky_mobile_bar"
          className="flex flex-col items-center justify-center gap-1 min-h-12 rounded-lg bg-sims-primary text-white text-[11px] font-bold leading-tight text-center px-1"
          onClick={(event) => {
            trackPhoneLeadClick({
              phoneNumber: WHATSAPP_CONTACT.number,
              buttonPlacement: 'sticky_mobile_bar',
            });
            markLeadTracked(event);
          }}
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Call Now
        </a>
        <a
          href={courseWhatsAppHref(courseName)}
          target="_blank"
          rel="noreferrer"
          data-lead-placement="sticky_mobile_bar"
          className="flex flex-col items-center justify-center gap-1 min-h-12 rounded-lg bg-[#25D366] text-white text-[11px] font-bold leading-tight text-center px-1"
          onClick={(event) => {
            trackWhatsAppLeadClick({
              whatsappNumber: WHATSAPP_CONTACT.number,
              buttonPlacement: 'sticky_mobile_bar',
            });
            markLeadTracked(event);
          }}
        >
          <WhatsAppIcon className="w-4 h-4" />
          WhatsApp Fee Details
        </a>
        <button
          type="button"
          className="flex flex-col items-center justify-center gap-1 min-h-12 rounded-lg bg-amber-500 text-white text-[11px] font-bold leading-tight text-center px-1"
          onClick={onBrochureClick}
        >
          Apply / Brochure
        </button>
      </div>
    </nav>
  );
}
