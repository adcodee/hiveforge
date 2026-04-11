import { Check, X } from "lucide-react";

type Feature = { text: string; included: boolean };

interface Tier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: Feature[];
  cta: string;
  popular?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Core Website",
    price: "£497",
    period: "one-off",
    description: "A high-converting trades website, live in 48 hours.",
    features: [
      { text: "Mobile-first, responsive design", included: true },
      { text: "Emergency 24/7 CTA & floating call button", included: true },
      { text: "Local SEO schema markup", included: true },
      { text: "Core Web Vitals 95+ optimised", included: true },
      { text: "Deployed on Vercel (SSL, CDN)", included: true },
      { text: "AI chatbot integration", included: false },
      { text: "Monthly SEO content", included: false },
      { text: "Google Business Profile management", included: false },
    ],
    cta: "Get Started — £497",
  },
  {
    name: "Growth Retainer",
    price: "£97",
    period: "/month",
    description: "Core Website + ongoing growth tools to keep jobs flowing.",
    features: [
      { text: "Everything in Core Website", included: true },
      { text: "AI chatbot (Tidio) installed & managed", included: true },
      { text: "Monthly blog post (AI + human edit)", included: true },
      { text: "Google Business Profile updates", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Dedicated account manager", included: false },
      { text: "Quarterly strategy call", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Start Growing — £97/mo",
    popular: true,
  },
  {
    name: "Full Retainer",
    price: "£197",
    period: "/month",
    description: "The complete package. We handle everything — you handle jobs.",
    features: [
      { text: "Everything in Growth Retainer", included: true },
      { text: "4× monthly SEO content pieces", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Quarterly strategy & conversion call", included: true },
      { text: "Priority support (same-day response)", included: true },
      { text: "A/B testing & conversion optimisation", included: true },
      { text: "Social media content templates", included: true },
      { text: "Competitor monitoring", included: true },
    ],
    cta: "Go Full Forge — £197/mo",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 honeycomb-bg">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Transparent pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-forge-black mb-4">
            No Hidden Fees. No Hype.
          </h2>
          <p className="text-forge-black/50 text-lg max-w-xl mx-auto">
            Pick the package that fits your business. Every plan includes a
            site that's live in 48 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 border transition-all ${
                tier.popular
                  ? "border-hive-orange shadow-xl shadow-hive-orange/10 scale-[1.03]"
                  : "border-gray-100 bg-white shadow-sm"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-hive-orange text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-forge-black mb-1">
                {tier.name}
              </h3>
              <p className="text-forge-black/40 text-sm mb-4">
                {tier.description}
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-forge-black">
                  {tier.price}
                </span>
                <span className="text-forge-black/40 text-sm">
                  {tier.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map(({ text, included }) => (
                  <li key={text} className="flex items-start gap-2 text-sm">
                    {included ? (
                      <Check size={16} className="text-hive-orange mt-0.5 shrink-0" />
                    ) : (
                      <X size={16} className="text-gray-300 mt-0.5 shrink-0" />
                    )}
                    <span className={included ? "text-forge-black/70" : "text-forge-black/30"}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-bold py-3.5 rounded-xl transition-colors ${
                  tier.popular
                    ? "bg-hive-orange text-white hover:bg-hive-orange/90 forge-glow"
                    : "bg-forge-navy text-white hover:bg-forge-navy/90"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
