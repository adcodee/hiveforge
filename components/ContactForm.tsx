// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { sendContact } from "@/app/actions";
import Reveal from "@/components/ui/Reveal";

const inputClass =
  "w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-hive-orange transition-colors";
const labelClass = "block text-white/60 text-sm font-medium mb-1.5";
const optional = <span className="text-white/30 font-normal">(optional)</span>;

const BUSINESS_TYPES = [
  { value: "sole-trader", label: "Sole trader" },
  { value: "limited", label: "Limited company" },
  { value: "partnership", label: "Partnership" },
  { value: "starting", label: "Just starting out" },
];

const BUDGETS = [
  { value: "under-1k", label: "Under £1,000" },
  { value: "1k-2.5k", label: "£1,000 – £2,500" },
  { value: "2.5k-5k", label: "£2,500 – £5,000" },
  { value: "5k-plus", label: "£5,000+" },
  { value: "monthly", label: "Monthly plan (from £97/month)" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [businessType, setBusinessType] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = async (formData: FormData) => {
    setPending(true);
    setError(null);
    const result = await sendContact(formData);
    setPending(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error ?? "Something went wrong. Try again or email me directly.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-forge-navy relative overflow-hidden noise-overlay"
    >
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-hive-orange/5 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-2xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Tell us what you need built
            </h2>
            <p className="text-white/50 text-lg">
              Website, app, backend, or the lot. Reply within 4 hours. No obligation.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
        {submitted ? (
          <div className="text-center bg-white/10 rounded-2xl p-10 border border-white/10">
            <CheckCircle size={48} className="text-hive-amber mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Message received!</h3>
            <p className="text-white/50">
              Adule will reply within 4 hours. Check your inbox (and spam folder).
            </p>
          </div>
        ) : (
          <form action={handleSubmit} className="space-y-5">
            {/* Honeypot: hidden from people, bots fill it in */}
            <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
              <label htmlFor="cf-website-url">Leave this empty</label>
              <input id="cf-website-url" name="website_url" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cf-name" className={labelClass}>Your name</label>
                <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="cf-business-name" className={labelClass}>Business name</label>
                <input id="cf-business-name" name="businessName" type="text" required autoComplete="organization" placeholder="e.g. Smith Roofing" className={inputClass} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cf-phone" className={labelClass}>Phone</label>
                <input id="cf-phone" name="phone" type="tel" required autoComplete="tel" placeholder="07… or 01…" pattern="[0-9+()\s-]{10,20}" title="A UK phone number, e.g. 07700 900123" className={inputClass} />
              </div>
              <div>
                <label htmlFor="cf-email" className={labelClass}>Email</label>
                <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="you@business.co.uk" className={inputClass} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cf-business-type" className={labelClass}>Business type</label>
                <select
                  id="cf-business-type"
                  name="businessType"
                  required
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className={`${inputClass} ${businessType ? "" : "text-white/30"}`}
                >
                  <option value="" disabled>Choose one</option>
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t.value} value={t.value} className="text-forge-black">{t.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cf-budget" className={labelClass}>Budget</label>
                <select
                  id="cf-budget"
                  name="budget"
                  required
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className={`${inputClass} ${budget ? "" : "text-white/30"}`}
                >
                  <option value="" disabled>Choose a range</option>
                  {BUDGETS.map((b) => (
                    <option key={b.value} value={b.value} className="text-forge-black">{b.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {businessType === "limited" && (
              <div>
                <label htmlFor="cf-company-number" className={labelClass}>Company number {optional}</label>
                <input id="cf-company-number" name="companyNumber" type="text" placeholder="8 characters, e.g. 12345678" maxLength={10} className={inputClass} />
              </div>
            )}

            <div>
              <label htmlFor="cf-site" className={labelClass}>Current website {optional}</label>
              <input id="cf-site" name="currentWebsite" type="text" inputMode="url" placeholder="yourbusiness.co.uk" className={inputClass} />
            </div>

            <div>
              <label htmlFor="cf-need" className={labelClass}>What do you need?</label>
              <textarea id="cf-need" name="message" rows={3} required placeholder="e.g. a new website, a booking app for my taxi firm, or both" className={`${inputClass} resize-none`} />
            </div>

            {error && (
              <p role="alert" className="text-center text-red-300 text-sm">{error}</p>
            )}

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
                  Get my free proposal
                </>
              )}
            </button>

            <p className="text-center text-white/30 text-xs">
              No spam. No obligation. GDPR compliant. We'll only use your details to send your proposal.
            </p>
          </form>
        )}
        </Reveal>
      </div>
    </section>
  );
}
