"use client";

import { ArrowRight, Clock, Smartphone, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden honeycomb-bg">
      {/* Gradient orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-hive-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-hive-amber/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-hive-orange/10 text-hive-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in">
            <Clock size={14} />
            Live in 48 hours
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-forge-black mb-6 animate-fade-up">
            Get more booked jobs {" "}
            <span className="text-gradient-orange">
              without handling your own marketing.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-forge-black/60 leading-relaxed mb-8 max-w-xl animate-fade-up stagger-2">
            Modern, mobile-first sites with local SEO and lead tools.
            Delivered fast at a fair price for sole traders.
            Your site goes live in 48&nbsp;hours. You get 5–15 extra jobs a
            month.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up stagger-3">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-hive-orange text-white text-lg font-bold px-8 py-4 rounded-xl forge-glow hover:scale-[1.02] transition-transform"
            >
              Get Your Site in 48 Hours
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-forge-navy text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-forge-navy/90 transition-colors"
            >
              See How It Works
            </a>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-4 animate-fade-up stagger-4">
            {[
              { icon: Smartphone, text: "Mobile-first design" },
              { icon: TrendingUp, text: "5–15 extra jobs/month" },
              { icon: Clock, text: "Live in 48 hours" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-sm text-forge-black/50 font-medium"
              >
                <Icon size={16} className="text-hive-orange" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
