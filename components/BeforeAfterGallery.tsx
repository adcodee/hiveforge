"use client";

import { useState } from "react";

const examples = [
  {
    trade: "Dave's Plumbing, Exeter",
    before: {
      label: "Before HiveForge",
      bg: "bg-gray-100",
      points: [
        "No mobile layout",
        "No call button",
        "Last updated 2019",
        "Page speed: 34/100",
      ],
    },
    after: {
      label: "After HiveForge",
      bg: "bg-hive-orange/5",
      points: [
        "Mobile-first design",
        "24/7 floating call CTA",
        "Live in 48 hours",
        "Page speed: 97/100",
      ],
    },
    result: "+11 jobs in first 60 days",
  },
  {
    trade: "Bright Spark Electrical, Bristol",
    before: {
      label: "Before HiveForge",
      bg: "bg-gray-100",
      points: [
        "Facebook page only",
        "No Google ranking",
        "Missed evening calls",
        "0 online leads/month",
      ],
    },
    after: {
      label: "After HiveForge",
      bg: "bg-hive-orange/5",
      points: [
        "Full website + SEO",
        "Page 1 for Bristol electrician",
        "AI chatbot handles enquiries",
        "14 leads/month",
      ],
    },
    result: "Page 1 Google in 8 weeks",
  },
  {
    trade: "Cornwall Build Co., Truro",
    before: {
      label: "Before HiveForge",
      bg: "bg-gray-100",
      points: [
        "Word-of-mouth only",
        "No online presence",
        "Seasonal dry spells",
        "Hard to showcase work",
      ],
    },
    after: {
      label: "After HiveForge",
      bg: "bg-hive-orange/5",
      points: [
        "Portfolio + project gallery",
        "Google Business managed",
        "Enquiries year-round",
        "3 new contracts from site",
      ],
    },
    result: "3 major contracts from Google",
  },
];

export default function BeforeAfterGallery() {
  const [active, setActive] = useState(0);

  const current = examples[active];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Real transformations
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-forge-black mb-4">
            Before &amp; after
          </h2>
          <p className="text-forge-black/50 text-lg max-w-xl mx-auto">
            See what happens when a trades business gets a proper HiveForge site.
          </p>
        </div>

        {/* Trade selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {examples.map((ex, i) => (
            <button
              key={ex.trade}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active === i
                  ? "bg-hive-orange text-white shadow-md"
                  : "bg-gray-100 text-forge-black/60 hover:bg-gray-200"
              }`}
            >
              {ex.trade}
            </button>
          ))}
        </div>

        {/* Before / After cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className={`rounded-2xl p-8 border border-gray-200 ${current.before.bg}`}>
            <span className="inline-block bg-gray-300 text-gray-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              {current.before.label}
            </span>
            <ul className="space-y-3">
              {current.before.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-forge-black/60 text-sm">
                  <span className="mt-0.5 text-gray-400">✕</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded-2xl p-8 border border-hive-orange/20 ${current.after.bg}`}>
            <span className="inline-block bg-hive-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              {current.after.label}
            </span>
            <ul className="space-y-3">
              {current.after.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-forge-black/80 text-sm font-medium">
                  <span className="mt-0.5 text-hive-orange">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <span className="inline-flex items-center gap-2 bg-forge-navy text-white text-sm font-bold px-6 py-3 rounded-full">
            <span className="text-hive-amber">★</span>
            Result: {current.result}
          </span>
        </div>
      </div>
    </section>
  );
}
