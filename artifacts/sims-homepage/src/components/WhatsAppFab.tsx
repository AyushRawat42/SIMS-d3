import { useLocation } from 'wouter';
import { WHATSAPP_CONTACT } from '@/lib/site-content';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { markLeadTracked, trackWhatsAppLeadClick } from '@/lib/analytics/trackLead';
import { cn } from '@/lib/utils';

/** Fixed WhatsApp chat FAB shown site-wide. */
export function WhatsAppFab() {
  const [location] = useLocation();
  const onProgramPage = location.startsWith('/programs/');

  return (
    <a
      href={WHATSAPP_CONTACT.href}
      target="_blank"
      rel="noreferrer"
      data-whatsapp-fab=""
      data-lead-placement="floating_widget"
      aria-label={`Chat on WhatsApp (${WHATSAPP_CONTACT.display})`}
      onClick={(event) => {
        trackWhatsAppLeadClick({
          whatsappNumber: WHATSAPP_CONTACT.number,
          buttonPlacement: 'floating_widget',
        });
        markLeadTracked(event);
      }}
      className={cn(
        'fixed right-6 z-50 flex items-center justify-center w-14 h-14 p-0 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:bg-[#1fb855] hover:-translate-y-1 transition-all duration-300 md:bottom-6 md:w-auto md:h-auto md:px-6 md:py-3 md:rounded-full md:flex-row md:gap-2.5',
        onProgramPage ? 'bottom-24' : 'bottom-6',
      )}
    >
      <WhatsAppIcon className="w-7 h-7 md:w-5 md:h-5 shrink-0" />
      <span className="hidden md:inline font-semibold text-sm whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
}
