import { WHATSAPP_CONTACT } from '@/lib/site-content';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

/** Fixed WhatsApp chat FAB shown site-wide. */
export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_CONTACT.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat on WhatsApp (${WHATSAPP_CONTACT.display})`}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 p-0 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:bg-[#1fb855] hover:-translate-y-1 transition-all duration-300 md:w-auto md:h-auto md:px-6 md:py-3 md:rounded-full md:flex-row md:gap-2.5"
    >
      <WhatsAppIcon className="w-7 h-7 md:w-5 md:h-5 shrink-0" />
      <span className="hidden md:inline font-semibold text-sm whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
}
