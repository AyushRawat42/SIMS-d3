import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { SITE_CONTENT } from '@/lib/site-content';
import { CheckCircle2, Loader2 } from 'lucide-react';

const fieldClassName =
  "w-full h-11 px-4 rounded-lg border border-sims-border bg-sims-bg text-sims-text placeholder:text-sims-text-muted/60 focus:outline-none focus:ring-2 focus:ring-sims-primary/40 focus:border-sims-primary/40 transition-shadow";

export function ContactModal({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: (open: boolean) => void }) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get("fullName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      courseInterested: String(formData.get("courseInterested") ?? "").trim(),
    };

    if (!payload.fullName || !payload.email || !payload.phone || !payload.courseInterested) {
      setSubmitError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL;
      if (!apiBase) {
        throw new Error("Admissions service is temporarily unavailable. Please try again later.");
      }

      const response = await fetch(`${apiBase}/api/admissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let message = "Submission failed. Please try again.";
        try {
          const data = (await response.json()) as { error?: string; details?: string[] };
          if (data.details?.length) message = data.details.join(". ");
          else if (data.error) message = data.error;
        } catch {
          // keep default message
        }
        throw new Error(message);
      }

      setIsSuccess(true);
      form.reset();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setIsSuccess(false);
      setSubmitError(null);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={isSuccess ? handleClose : onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden bg-white border-sims-border rounded-2xl">
        <div className="bg-sims-primary px-6 py-6 md:py-7 text-center text-white">
          <DialogTitle className="text-xl md:text-2xl font-display font-bold leading-snug">Apply for Admission 2025–26</DialogTitle>
          <DialogDescription className="text-white/75 mt-2 text-sm leading-relaxed">
            Fill out the form below and our admissions team will contact you shortly.
          </DialogDescription>
        </div>

        <div className="p-5 md:p-6">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-14 h-14 bg-sims-success/10 text-sims-success rounded-full flex items-center justify-center mb-5">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-sims-text mb-2">Thank you!</h3>
              <p className="text-sims-text-muted mb-6 max-w-[280px] text-sm leading-relaxed">
                Our admissions team will contact you within 24 hours.
              </p>
              <Button onClick={handleClose} className="w-full h-11 bg-sims-primary hover:bg-sims-primary-2 text-white rounded-lg">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-sims-text">Full Name *</label>
                <input 
                  id="name"
                  name="fullName"
                  required 
                  className={fieldClassName}
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-sims-text">Email Address *</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required 
                    className={fieldClassName}
                    placeholder="name@example.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-sims-text">Phone Number *</label>
                  <input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    required 
                    className={fieldClassName}
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="course" className="text-sm font-medium text-sims-text">Course of Interest *</label>
                <select 
                  id="course"
                  name="courseInterested"
                  required
                  defaultValue=""
                  className={`${fieldClassName} appearance-none`}
                >
                  <option value="" disabled>Select a course</option>
                  {SITE_CONTENT.programs.courses.map(c => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              {submitError ? (
                <p className="text-sm text-red-600" role="alert">{submitError}</p>
              ) : null}

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-11 text-base font-semibold bg-sims-primary hover:bg-sims-primary-2 text-white rounded-lg mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : "Submit Application"}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
