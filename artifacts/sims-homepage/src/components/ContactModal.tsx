import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { SITE_CONTENT } from '@/lib/site-content';
import { CheckCircle2, Loader2 } from 'lucide-react';

export function ContactModal({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: (open: boolean) => void }) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("[admissions] handleSubmit fired");
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
      console.log("[admissions] client validation failed", payload);
      setSubmitError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL ?? "";
      const url = `${apiBase}/api/admissions`;
      console.log("[admissions] before fetch", url, payload);
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log("[admissions] after fetch", response.status, response.ok);

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
      console.log("[admissions] catch", err);
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
    }, 300); // Reset after animation
  };

  return (
    <Dialog open={isOpen} onOpenChange={isSuccess ? handleClose : onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-white border-sims-border rounded-2xl">
        <div className="bg-sims-primary px-6 py-8 text-center text-white">
          <DialogTitle className="text-2xl font-display font-bold">Apply for Admission 2025–26</DialogTitle>
          <DialogDescription className="text-sims-border mt-2">
            Fill out the form below and our admissions team will contact you shortly.
          </DialogDescription>
        </div>

        <div className="p-6 md:p-8">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-sims-success/10 text-sims-success rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-sims-text mb-2">Thank you!</h3>
              <p className="text-sims-text-muted mb-8 max-w-[300px]">
                Our admissions team will contact you within 24 hours.
              </p>
              <Button onClick={handleClose} className="w-full bg-sims-primary hover:bg-sims-primary-2 text-white">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-sims-text">Full Name *</label>
                <input 
                  id="name"
                  name="fullName"
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-sims-border bg-sims-bg focus:outline-none focus:ring-2 focus:ring-sims-primary/50 transition-shadow" 
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-sims-text">Email Address *</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-sims-border bg-sims-bg focus:outline-none focus:ring-2 focus:ring-sims-primary/50 transition-shadow" 
                    placeholder="name@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-sims-text">Phone Number *</label>
                  <input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-sims-border bg-sims-bg focus:outline-none focus:ring-2 focus:ring-sims-primary/50 transition-shadow" 
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="course" className="text-sm font-medium text-sims-text">Course of Interest *</label>
                <select 
                  id="course"
                  name="courseInterested"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl border border-sims-border bg-sims-bg focus:outline-none focus:ring-2 focus:ring-sims-primary/50 transition-shadow appearance-none"
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
                className="w-full py-6 text-base font-semibold bg-sims-primary hover:bg-sims-primary-2 text-white rounded-xl mt-4"
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