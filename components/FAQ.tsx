"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    q: "What does HiveForge actually do?",
    a: "Software, web development, design and AI. Websites in 48 hours. Operator software when a brochure site is not enough. Patch Access is the live example — your firm runs as a tenant on the same chassis, not a one-off rewrite.",
  },
  {
    q: "Are the prices on this page real?",
    a: "Yes. Websites: £997 Core, then £97 or £197 a month if you want a retainer. Operator software: Operator is £795 setup + £99/month. Growth Enterprise is £1,995 setup + £229/month. Add-ons are on the card. Not VAT registered. Scope can change a quote.",
  },
  {
    q: "Can I click a real example?",
    a: "https://www.patchaccess.uk — booking, ping, driver tools. A live Wiltshire taxi system HiveForge built and still runs.",
  },
  {
    q: "Do I have to use the Play Store or App Store?",
    a: "No. Start on the browser / PWA. Android staff sideload is an add-on. Store submission is quoted separately. Developer accounts are yours.",
  },
  {
    q: "Is this a shared SaaS or a private fork?",
    a: "One product, separate tenant. Your name, drivers, number and booking records. Not a git fork per firm, and not a from-scratch rebuild. HiveForge keeps access so we can support it.",
  },
  {
    q: "What if I am not happy?",
    a: "Websites: you only pay if you are happy, no deposit. Operator software: 50% setup deposit, monthly by direct debit, cancel with 30 days' notice.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Questions
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-forge-black mb-4">
              Straight answers
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden ${
                  open === i ? "border-hive-orange/40" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50"
                >
                  <span className="font-semibold text-forge-black text-sm md:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-hive-orange shrink-0 transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div className={`overflow-hidden ${open === i ? "max-h-96" : "max-h-0"}`}>
                  <div className="px-6 pb-5 text-forge-black/60 text-sm leading-relaxed border-t border-gray-100">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
