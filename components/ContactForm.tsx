"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

// ← Server Action lives here (or move to a separate actions.ts file)
async function sendContact(formData: FormData) {
  "use server";   // ← this is the magic line

  const name = formData.get("name") as string;
  const contact = formData.get("contact") as string;   // phone or email
  const business = formData.get("business") as string;
  const message = formData.get("message") as string;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "HiveForge <proposals@hiveforge.co.uk>",
      to: ["your@hiveforge.co.uk"], // change to hello@ or whatever you use
      subject: `New HiveForge lead: ${business || name}`,
      html: `
        <h2>New lead from hiveforge.co.uk</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Trade & Area:</strong> ${business}</p>
        <p><strong>Message:</strong> ${message || "—"}</p>
        <hr>
        <p><small>Sent via HiveForge website • ${new Date().toLocaleString("en-GB")}</small></p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setPending(true);
    const result = await sendContact(formData);
    setPending(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      alert("Something went wrong — try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-forge-navy relative overflow-hidden noise-overlay">
      {/* your existing background blob */}
      <div className="relative z-10 max-w-2xl mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Forge Your Site?
          </h2>
          <p className="text-white/50 text-lg">
            Tell us your trade and area. We'll reply within 4 hours with a free proposal — no obligation, no hard sell.
          </p>
        </div>

        {submitted ? (
          <div className="text-center bg-white/10 rounded-2xl p-10 border border-white/10">
            <CheckCircle size={48} className="text-hive-amber mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Message received!</h3>
            <p className="text-white/50">Adule will reply within 4 hours. Check your inbox (and spam folder).</p>
          </div>
        ) : (
          <form action={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/60 text-sm font-medium mb-1.5">Your name</label>
                <input name="name" type="text" required placeholder="e.g. Dave" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-hive-orange transition-colors" />
              </div>
              <div>
                <label className="block text-white/60 text-sm font-medium mb-1.5">Phone or email</label>
                <input name="contact" type="text" required placeholder="Best way to reach you" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-hive-orange transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-white/60 text-sm font-medium mb-1.5">Your trade & area</label>
              <input name="business" type="text" required placeholder="e.g. Plumber in Exeter" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-hive-orange transition-colors" />
            </div>

            <div>
              <label className="block text-white/60 text-sm font-medium mb-1.5">Anything else? (optional)</label>
              <textarea name="message" rows={3} placeholder="Got a current site? Need emergency CTAs? Tell us anything." className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-hive-orange transition-colors resize-none" />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full flex items-center justify-center gap-2 bg-hive-orange text-white text-lg font-bold py-4 rounded-xl forge-glow hover:scale-[1.01] transition-transform disabled:opacity-70"
            >
              {pending ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={20} />
                  Reply YES — Get My Free Proposal
                </>
              )}
            </button>

            <p className="text-center text-white/30 text-xs">
              No spam. No obligation. GDPR compliant. We'll only use your details to send your proposal.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
