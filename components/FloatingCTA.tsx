"use client";

import { Phone } from "lucide-react";

export default function FloatingCTA() {
  return (
    <a
      href="tel:+447340499769"
      aria-label="Call Me"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-hive-orange text-white font-bold px-5 py-3.5 rounded-full shadow-lg animate-pulse-glow hover:scale-105 transition-transform"
    >
      <Phone size={20} />
      <span className="hidden sm:inline">Talk to Adule</span>
    </a>
  );
}
