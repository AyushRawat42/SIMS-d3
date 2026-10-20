import type { CourseFaq } from '@/lib/course-faqs';
import { SectionHeading } from '@/components/Shared';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function CourseFAQ({
  courseName,
  faqs,
}: {
  courseName: string;
  faqs: CourseFaq[];
}) {
  if (faqs.length === 0) return null;

  return (
    <section className="py-14 md:py-16 lg:py-20 bg-white border-t border-sims-border/60" id="course-faqs">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title={`${courseName} — questions students ask`}
          subtitle="Eligibility, Dehradun clinical training, campus living, and what graduates prepare for. Confirm the active intake notice with admissions."
          className="mb-8"
        />
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl bg-sims-bg rounded-2xl border border-sims-border px-4 md:px-6"
        >
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`course-faq-${i}`}>
              <AccordionTrigger className="text-sims-primary font-semibold text-left text-sm sm:text-base py-4 sm:py-5 hover:no-underline gap-3 items-start [&>svg]:mt-1">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sims-text-muted leading-relaxed text-sm pb-4 sm:pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
