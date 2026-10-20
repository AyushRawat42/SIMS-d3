import { useEffect } from 'react';
import {
  isLeadTracked,
  isTelHref,
  isWhatsAppHref,
  markLeadTracked,
  phoneFromHref,
  placementFromAnchor,
  trackPhoneLeadClick,
  trackWhatsAppLeadClick,
} from '@/lib/analytics/trackLead';

/**
 * Captures tel: and WhatsApp clicks that are not already tracked by a component,
 * including footer links and anchors inside blog content.
 */
export function LeadClickListener() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (isLeadTracked(event)) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a[href]');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const href = anchor.getAttribute('href') ?? '';
      const placement = placementFromAnchor(anchor);

      if (isWhatsAppHref(href)) {
        markLeadTracked(event);
        trackWhatsAppLeadClick({
          whatsappNumber: phoneFromHref(href),
          buttonPlacement: placement,
        });
        return;
      }

      if (isTelHref(href)) {
        markLeadTracked(event);
        trackPhoneLeadClick({
          phoneNumber: phoneFromHref(href),
          buttonPlacement: placement,
        });
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
