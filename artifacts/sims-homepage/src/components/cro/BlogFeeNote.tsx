import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { BrochureModal } from '@/components/cro/BrochureModal';
import { markLeadTracked, phoneFromHref, trackWhatsAppLeadClick } from '@/lib/analytics/trackLead';
import { whatsappHrefWithText } from '@/lib/blog-posts';
import { PROGRAMS } from '@/lib/programs';

export const BLOG_FEE_NOTE =
  'Note: Fee structures are updated as per HNBUMU and state government guidelines for the current academic session. To get the exact fee breakdown for this course, please connect with our admissions team on WhatsApp or request the official fee brochure.';

const FEE_WHATSAPP = whatsappHrefWithText(
  'Hi SIMS Admissions Team, I would like the official fee breakdown and fee brochure for the current academic session.',
);

export function BlogFeeNote({ defaultCourse }: { defaultCourse?: string }) {
  const [open, setOpen] = useState(false);
  const course = defaultCourse ?? PROGRAMS[0]?.name ?? 'B.Sc Nursing';

  return (
    <aside className="my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
      <p className="text-sm sm:text-base text-sims-text leading-relaxed mb-4">{BLOG_FEE_NOTE}</p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <Button asChild className="bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold rounded-lg">
          <a
            href={FEE_WHATSAPP}
            target="_blank"
            rel="noreferrer"
            data-lead-placement="blog_fee_note"
            className="gap-2"
            onClick={(event) => {
              trackWhatsAppLeadClick({
                whatsappNumber: phoneFromHref(FEE_WHATSAPP),
                buttonPlacement: 'blog_fee_note',
              });
              markLeadTracked(event);
            }}
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp admissions
          </a>
        </Button>
        <Button
          type="button"
          variant="outline"
          className="border-sims-primary text-sims-primary hover:bg-sims-primary hover:text-white font-semibold rounded-lg"
          onClick={() => setOpen(true)}
        >
          Request the fee brochure
        </Button>
      </div>
      <BrochureModal isOpen={open} onOpenChange={setOpen} defaultCourse={course} />
    </aside>
  );
}
