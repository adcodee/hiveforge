"use client";

import { useState } from "react";
import Image from 'next/image';
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
          <div className="w-9 h-9 flex items-center justify-center">
            <Image
              src="/Icon-Logo.svg"
              alt="Hive Forge Logo"
              width={28}          // slightly smaller than the box for breathing room
              height={28}
             className="object-contain"
             priority            // optional but good for navbar logo
             />
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
