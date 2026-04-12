// app/actions.ts
'use server';

import { Resend } from 'resend';

export async function sendContact(formData: FormData) {
  const name = formData.get("name") as string;
  const contact = formData.get("contact") as string;
  const business = formData.get("business") as string;
  const message = formData.get("message") as string || "—";

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "HiveForge <proposals@hiveforge.co.uk>",
      to: ["adulegrant@hiveforge.co.uk"], // ← CHANGE THIS to your real email (hello@ or proposals@)
      subject: `New HiveForge lead: ${business || name}`,
      html: `
        <h2>New lead from hiveforge.co.uk</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Trade & Area:</strong> ${business}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr>
        <p><small>Sent via HiveForge website • ${new Date().toLocaleString("en-GB")}</small></p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false };
  }
}