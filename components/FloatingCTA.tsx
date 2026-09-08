"use client";

import { Phone } from "lucide-react";

export default function FloatingCTA() {
  return (
    <a
      href="tel:+447340499769"
      aria-label="Call Adule now"
      // Sits left of ChatWidget's trigger, which owns bottom-6 right-6 - both
      // fixed bottom-right previously, so only one was ever visible before
      // this component got wired back into app/page.tsx.
      className="fixed bottom-6 right-24 z-50 flex items-center gap-2 bg-forge-navy text-white font-bold px-5 py-3.5 rounded-full shadow-lg hover:scale-105 hover:bg-forge-navy/90 transition-transform"
    >
      <Phone size={20} />
      <span className="hidden sm:inline">Call now</span>
    </a>
  );
}
