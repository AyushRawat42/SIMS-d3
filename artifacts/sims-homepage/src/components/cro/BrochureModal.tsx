import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PROGRAMS } from '@/lib/programs';
import { trackAdmissionFormSubmit } from '@/lib/analytics/trackLead';
import { brochureWhatsAppHref } from '@/lib/lead-tracking';

const fieldClassName =
  'w-full h-11 px-4 rounded-lg border border-sims-border bg-sims-bg text-sims-text placeholder:text-sims-text-muted/60 focus:outline-none focus:ring-2 focus:ring-sims-primary/40 focus:border-sims-primary/40';

export function BrochureModal({
  isOpen,
  onOpenChange,
  defaultCourse,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  defaultCourse: string;
}) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [course, setCourse] = React.useState(defaultCourse);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (isOpen) setCourse(defaultCourse);
  }, [isOpen, defaultCourse]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const digits = phone.replace(/\D/g, '');
    const local = digits.length > 10 ? digits.slice(-10) : digits;

    if (trimmedName.length < 2) {
      setError('Enter the student name.');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(local)) {
      setError('Enter a valid 10-digit mobile number.');
      return;
    }
    if (!course) {
      setError('Select a course.');
      return;
    }

    setError(null);
    trackAdmissionFormSubmit({ formType: 'brochure_download', selectedCourse: course });
    const href = brochureWhatsAppHref({
      name: trimmedName,
      phone: local,
      course,
    });
    window.open(href, '_blank', 'noopener,noreferrer');
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogTitle className="font-display text-xl text-sims-primary">
          Brochure and fee details
        </DialogTitle>
        <DialogDescription className="text-sims-text-muted">
          Share your name, phone, and course. We open WhatsApp with those details so admissions can send the fee structure.
        </DialogDescription>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <label className="block text-sm font-semibold text-sims-text">
            Student name
            <input
              className={`${fieldClassName} mt-1.5`}
              name="studentName"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
          <label className="block text-sm font-semibold text-sims-text">
            Phone number
            <input
              className={`${fieldClassName} mt-1.5`}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </label>
          <label className="block text-sm font-semibold text-sims-text">
            Selected course
            <select
              className={`${fieldClassName} mt-1.5`}
              name="course"
              value={course}
              onChange={(event) => setCourse(event.target.value)}
              required
            >
              {PROGRAMS.map((program) => (
                <option key={program.slug} value={program.name}>
                  {program.name}
                </option>
              ))}
            </select>
          </label>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <Button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold h-11 rounded-lg"
          >
            Get details on WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
