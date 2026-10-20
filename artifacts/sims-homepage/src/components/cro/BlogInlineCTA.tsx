import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { markLeadTracked, phoneFromHref, trackWhatsAppLeadClick } from '@/lib/analytics/trackLead';

export function BlogInlineCTA({
  title,
  body,
  whatsappHref,
  courseLinks,
}: {
  title: string;
  body: string;
  whatsappHref: string;
  courseLinks?: { href: string; label: string }[];
}) {
  const links =
    courseLinks && courseLinks.length > 0
      ? courseLinks
      : [
          { href: '/admissions', label: 'Seat availability and fees' },
          { href: '/nursing', label: 'Nursing programmes' },
        ];
  return (
    <aside className="my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
      <h2 className="font-display text-lg sm:text-xl font-bold text-sims-primary leading-snug mb-2">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-sims-text-muted leading-relaxed mb-4">{body}</p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        {links.map((link, index) => (
          <Button
            key={link.href}
            asChild
            variant={index === 0 ? 'default' : 'outline'}
            className={
              index === 0
                ? 'bg-sims-primary hover:bg-sims-primary-2 text-white font-semibold rounded-lg'
                : 'border-sims-primary text-sims-primary hover:bg-sims-primary hover:text-white font-semibold rounded-lg'
            }
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
        <Button asChild className="bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold rounded-lg">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            data-lead-placement="blog_inline"
            className="gap-2"
            onClick={(event) => {
              trackWhatsAppLeadClick({
                whatsappNumber: phoneFromHref(whatsappHref),
                buttonPlacement: 'blog_inline',
              });
              markLeadTracked(event);
            }}
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp admissions
          </a>
        </Button>
      </div>
    </aside>
  );
}
