import React from 'react';
import { cn } from '@/lib/utils';
import { SITE_CONTENT } from '@/lib/site-content';
import { Activity, Radio, Heart, Book, FlaskConical } from 'lucide-react';

const FACILITY_ICONS: Record<string, React.ElementType> = {
  activity: Activity,
  radio: Radio,
  heart: Heart,
  book: Book,
  flask: FlaskConical,
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
    <div className={cn("flex flex-col gap-4", centered && "items-center text-center", className)}>
      <h2 className={cn("font-display text-4xl md:text-5xl font-bold text-sims-primary tracking-tight", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-sims-text-muted max-w-[800px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CourseCard({ course }: { course: typeof SITE_CONTENT.programs.courses[0] }) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 border border-sims-border shadow-sm hover:shadow-xl hover:border-sims-primary/20 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      <div className="mb-4">
        <span className="inline-flex items-center rounded-full bg-sims-surface-2 px-3 py-1 text-sm font-medium text-sims-primary-2 ring-1 ring-inset ring-sims-primary/10">
          {course.duration}
        </span>
      </div>
      <h3 className="text-xl font-bold text-sims-primary mb-3 leading-tight group-hover:text-sims-primary-2 transition-colors">
        {course.name}
      </h3>
      <p className="text-sims-text-muted flex-grow leading-relaxed">
        {course.description}
      </p>
      <div className="mt-6 pt-6 border-t border-sims-border/50">
        <a href="#admissions" className="inline-flex items-center text-sm font-semibold text-sims-primary-2 group-hover:text-sims-primary transition-colors">
          Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}

export function FacilityCard({ facility }: { facility: typeof SITE_CONTENT.facilities.items[0] }) {
  const Icon = FACILITY_ICONS[facility.icon] ?? Activity;
  return (
    <div className="flex items-start gap-4 p-5 rounded-xl hover:bg-sims-surface transition-colors group border border-transparent hover:border-sims-border/50">
      <div className="w-12 h-12 rounded-full bg-sims-surface-2 flex items-center justify-center flex-shrink-0 text-sims-primary-2 group-hover:bg-sims-primary group-hover:text-white transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-bold text-sims-primary mb-1">{facility.name}</h3>
        <p className="text-sm text-sims-text-muted">{facility.desc}</p>
      </div>
    </div>
  );
}
