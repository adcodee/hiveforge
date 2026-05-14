"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "I'm not tech-savvy — will I be able to manage my own site?",
    a: "You won't need to touch a line of code. We hand over your site with a short Loom video walkthrough showing you exactly how to update your phone number, photos, or text. Most clients never need to log in at all — that's what your Growth Retainer is for.",
  },
  {
    q: "Will Google actually find my business?",
    a: "Yes, and faster than you'd expect. Every HiveForge site includes local SEO schema markup, Core Web Vitals optimisation, and a Google Business Profile setup. Growth and Full Retainer clients also get regular SEO blog posts targeting your trade + area — so Google keeps finding you month after month.",
  },
  {
    q: "What if I want changes after the site is live?",
    a: "The Core Website includes one round of revisions. For ongoing changes — seasonal offers, new services, updated photos — the Growth Retainer covers unlimited small updates. Larger redesigns are quoted separately at a fair hourly rate.",
  },
  {
    q: "Is £97/month actually worth it?",
    a: "One extra job from your website pays for 3–6 months of the Growth Retainer. Most clients see 5–15 additional enquiries per month within 60 days. If it's not working, you can cancel with 30 days' notice — no lock-in contracts.",
  },
  {
    q: "How is this different from a standard web agency?",
    a: "Most agencies take 6–12 weeks and charge £3,000–£10,000 for a similar result. HiveForge uses AI-assisted builds and a trades-specific template system to go live in 48 hours at a fraction of the cost — without cutting corners on quality or SEO.",
  },
  {
    q: "What trades do you work with?",
    a: "We specialise in South West UK trades: plumbers, electricians, gas engineers, builders, roofers, landscapers, painters & decorators, and HVAC engineers. If you work with your hands and need more customers, we can help.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Common questions
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-forge-black mb-4">
            Answers before you ask
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-forge-black text-sm md:text-base leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-hive-orange shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-forge-black/60 text-sm leading-relaxed border-t border-gray-100">
                  <p className="pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
