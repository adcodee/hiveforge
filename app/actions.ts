// app/actions.ts
'use server';

import { Resend } from 'resend';

const BUSINESS_TYPES: Record<string, string> = {
  "sole-trader": "Sole trader",
  limited: "Limited company",
  partnership: "Partnership",
  starting: "Just starting out",
};

const BUDGETS: Record<string, string> = {
  "under-1k": "Under £1,000",
  "1k-2.5k": "£1,000 – £2,500",
  "2.5k-5k": "£2,500 – £5,000",
  "5k-plus": "£5,000+",
  monthly: "Monthly plan (from £97/month)",
};

type Result = { success: true } | { success: false; error: string };

function field(formData: FormData, key: string, max = 200): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContact(formData: FormData): Promise<Result> {
  // Honeypot: real people never see this field. Pretend success so bots don't retry.
  if (field(formData, "website_url")) return { success: true };

  const name = field(formData, "name", 100);
  const businessName = field(formData, "businessName", 150);
  const phone = field(formData, "phone", 30);
  const email = field(formData, "email", 200);
  const businessType = field(formData, "businessType", 30);
  const budget = field(formData, "budget", 30);
  const companyNumber = field(formData, "companyNumber", 10).toUpperCase().replace(/\s/g, "");
  const currentWebsite = field(formData, "currentWebsite", 200);
  const message = field(formData, "message", 2000);

  // Server-side checks, so the required fields can't be skipped by bypassing the form.
  if (!name || !businessName || !message) {
    return { success: false, error: "Please fill in your name, business name and what you need." };
  }
  if (phone.replace(/\D/g, "").length < 10) {
    return { success: false, error: "Please add a phone number we can call you on." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please add a valid email address." };
  }
  if (!(businessType in BUSINESS_TYPES)) {
    return { success: false, error: "Please choose your business type." };
  }
  if (!(budget in BUDGETS)) {
    return { success: false, error: "Please choose a budget range." };
  }

  // Company number only applies to limited companies. UK format: 8 characters, e.g. 12345678 or SC123456.
  const validCompanyNumber =
    businessType === "limited" && /^([0-9]{8}|[A-Z]{2}[0-9]{6})$/.test(companyNumber)
      ? companyNumber
      : "";

  const companiesHouseLink = validCompanyNumber
    ? `https://find-and-update.company-information.service.gov.uk/company/${validCompanyNumber}`
    : `https://find-and-update.company-information.service.gov.uk/search?q=${encodeURIComponent(businessName)}`;

  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#666"><strong>${label}</strong></td><td style="padding:4px 0">${value}</td></tr>`;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "HiveForge <proposals@hiveforge.co.uk>",
      to: ["adulegrant@hiveforge.co.uk"],
      replyTo: email,
      subject: `New HiveForge lead: ${businessName} (${BUDGETS[budget]})`,
      html: `
        <h2>New lead from hiveforge.co.uk</h2>
        <table>
          ${row("Name", escapeHtml(name))}
          ${row("Business", escapeHtml(businessName))}
          ${row("Type", BUSINESS_TYPES[businessType])}
          ${businessType === "limited" ? row("Company no.", validCompanyNumber ? escapeHtml(validCompanyNumber) : (companyNumber ? `${escapeHtml(companyNumber)} (invalid format)` : "Not given")) : ""}
          ${row("Budget", BUDGETS[budget])}
          ${row("Phone", escapeHtml(phone))}
          ${row("Email", escapeHtml(email))}
          ${row("Website", currentWebsite ? escapeHtml(currentWebsite) : "None given")}
        </table>
        <p><strong>What they need:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        <p><a href="${companiesHouseLink}">Check on Companies House</a></p>
        <hr>
        <p><small>Sent via HiveForge website • ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}</small></p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Something went wrong. Try again or email me directly." };
  }
}
