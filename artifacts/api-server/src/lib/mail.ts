import nodemailer from "nodemailer";
import { getSmtpConfig } from "./env.js";
import type { AdmissionEnquiry } from "./dynamodb.js";

export async function sendAdmissionNotification(enquiry: AdmissionEnquiry): Promise<void> {
  const smtp = getSmtpConfig();

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  const subject = `New admissions enquiry: ${enquiry.fullName}`;
  const text = [
    "A new admissions enquiry was submitted.",
    "",
    `Enquiry ID: ${enquiry.enquiryId}`,
    `Submitted at: ${enquiry.createdAt}`,
    `Full name: ${enquiry.fullName}`,
    `Email: ${enquiry.email || "(not provided)"}`,
    `Phone: ${enquiry.phone || "(not provided)"}`,
    `Course interested: ${enquiry.courseInterested}`,
  ].join("\n");

  const html = `
    <h2>New admissions enquiry</h2>
    <p>A new admissions enquiry was submitted.</p>
    <ul>
      <li><strong>Enquiry ID:</strong> ${escapeHtml(enquiry.enquiryId)}</li>
      <li><strong>Submitted at:</strong> ${escapeHtml(enquiry.createdAt)}</li>
      <li><strong>Full name:</strong> ${escapeHtml(enquiry.fullName)}</li>
      <li><strong>Email:</strong> ${escapeHtml(enquiry.email || "(not provided)")}</li>
      <li><strong>Phone:</strong> ${escapeHtml(enquiry.phone || "(not provided)")}</li>
      <li><strong>Course interested:</strong> ${escapeHtml(enquiry.courseInterested)}</li>
    </ul>
  `;

  await transporter.sendMail({
    from: smtp.from,
    to: smtp.to,
    ...(enquiry.email ? { replyTo: enquiry.email } : {}),
    subject,
    text,
    html,
  });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
