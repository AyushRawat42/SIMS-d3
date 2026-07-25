import React from 'react';
import { cn } from '@/lib/utils';
import { SITE_CONTENT } from '@/lib/site-content';
import { Activity, Radio, Heart, Book, FlaskConical, Home, UtensilsCrossed, Bus } from 'lucide-react';

const FACILITY_ICONS: Record<string, React.ElementType> = {
  activity: Activity,
  radio: Radio,
  heart: Heart,
  book: Book,
  flask: FlaskConical,
  home: Home,
  utensils: UtensilsCrossed,
  bus: Bus,
};

export function SectionHeading({ 
  title, 
  subtitle,
  centered = false,
  className,
  titleClassName
}: { 
  title: string; 
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3", centered && "items-center text-center", className)}>
      <h2 className={cn(
        "font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-sims-primary tracking-tight leading-tight",
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-sims-text-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CourseCard({ course }: { course: typeof SITE_CONTENT.programs.courses[0] }) {
  return (
    <div className="group relative bg-white rounded-2xl p-6 md:p-7 border border-sims-border shadow-sm hover:shadow-lg hover:border-sims-primary/20 transition-all duration-300 flex flex-col h-full">
      <div className="mb-3">
        <span className="inline-flex items-center rounded-full bg-sims-surface-2 px-3 py-1 text-xs font-semibold tracking-wide text-sims-primary-2 ring-1 ring-inset ring-sims-primary/10">
          {course.duration}
        </span>
      </div>
      <h3 className="text-lg md:text-xl font-bold text-sims-primary mb-2 leading-snug group-hover:text-sims-primary-2 transition-colors">
        {course.name}
      </h3>
      <p className="text-sm md:text-[0.9375rem] text-sims-text-muted flex-grow leading-relaxed">
        {course.description}
      </p>
      <div className="mt-5 pt-5 border-t border-sims-border/60">
        <a href="#admissions" className="inline-flex items-center text-sm font-semibold text-sims-primary-2 group-hover:text-sims-primary transition-colors">
          Learn More <span className="ml-1.5 transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </div>
  );
}

export function FacilityCard({ facility }: { facility: typeof SITE_CONTENT.facilities.items[0] }) {
  const Icon = FACILITY_ICONS[facility.icon] ?? Activity;
  return (
    <div className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-sims-surface transition-colors group">
      <div className="w-11 h-11 rounded-xl bg-sims-surface-2 flex items-center justify-center flex-shrink-0 text-sims-primary-2 group-hover:bg-sims-primary group-hover:text-white transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0 pt-0.5">
        <h3 className="font-semibold text-sims-primary text-[0.9375rem] leading-snug mb-0.5">{facility.name}</h3>
        <p className="text-sm text-sims-text-muted leading-relaxed">{facility.desc}</p>
      </div>
    </div>
  );
}
