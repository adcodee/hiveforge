"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#results", label: "Results" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Get Started" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-hive-orange to-hive-amber flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.39 8 12 11.82 5.61 8 12 4.18zM5 9.5l6 3.33V19.5l-6-3.33V9.5zm8 10v-6.67l6-3.33v6.67l-6 3.33z"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-forge-black tracking-tight">
            Hive<span className="text-hive-orange">Forge</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-forge-black/70 hover:text-hive-orange transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-hive-orange text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-hive-orange/90 transition-colors"
          >
            Talk to Adule
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-forge-black"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 pb-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-forge-black/80 font-medium border-b border-gray-50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center bg-hive-orange text-white font-semibold py-3 rounded-lg"
          >
            Talk to Adule
          </a>
        </div>
      )}
    </nav>
  );
}
