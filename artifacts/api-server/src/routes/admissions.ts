import { randomUUID } from "node:crypto";
import { Router, type IRouter, type Request, type Response } from "express";
import { saveAdmissionEnquiry } from "../lib/dynamodb.js";
import { sendAdmissionNotification } from "../lib/mail.js";
import { logger } from "../lib/logger.js";

const router: IRouter = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/;

type AdmissionBody = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  courseInterested?: unknown;
};

type ValidatedAdmission = {
  fullName: string;
  email: string;
  phone: string;
  courseInterested: string;
};

function asTrimmedString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function validateAdmissionBody(body: AdmissionBody):
  | { ok: true; data: ValidatedAdmission }
  | { ok: false; errors: string[] } {
  const errors: string[] = [];

  const fullName = asTrimmedString(body.fullName);
  const email = asTrimmedString(body.email);
  const phone = asTrimmedString(body.phone);
  const courseInterested = asTrimmedString(body.courseInterested);

  if (!fullName || fullName.length > 120) {
    errors.push("fullName is required and must be at most 120 characters");
  }
  if (email && (!EMAIL_RE.test(email) || email.length > 254)) {
    errors.push("email must be a valid email address");
  }
  if (!phone || !PHONE_RE.test(phone)) {
    errors.push("phone is required and must be a valid phone number");
  }
  if (!courseInterested || courseInterested.length > 200) {
    errors.push("courseInterested is required and must be at most 200 characters");
  }

  if (errors.length > 0 || !fullName || !phone || !courseInterested) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      fullName,
      email: email ?? "",
      phone,
      courseInterested,
    },
  };
}

router.post("/", async (req: Request, res: Response) => {
  const validation = validateAdmissionBody(req.body ?? {});

  if (!validation.ok) {
    res.status(400).json({
      error: "Validation failed",
      details: validation.errors,
    });
    return;
  }

  const enquiryId = randomUUID();
  const createdAt = new Date().toISOString();
  const enquiry = {
    enquiryId,
    createdAt,
    ...validation.data,
  };

  try {
    await saveAdmissionEnquiry(enquiry);
  } catch (err) {
    logger.error({ err, enquiryId }, "Failed to save admissions enquiry");
    res.status(500).json({ error: "Failed to save admissions enquiry" });
    return;
  }

  try {
    await sendAdmissionNotification(enquiry);
  } catch (err) {
    logger.error({ err, enquiryId }, "Enquiry saved but email notification failed");
    res.status(502).json({
      error: "Enquiry saved but email notification failed",
      enquiryId,
    });
    return;
  }

  res.status(201).json({
    ok: true,
    enquiryId,
    createdAt,
  });
});

export default router;
