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
    price: "£997",
    period: "one-off",
    description: "Full AI build, live in 48 hours, 1 round of revisions.",
    features: [
      { text: "Mobile-first design", included: true },
      { text: "24/7 emergency CTA & floating call button", included: true },
      { text: "Local SEO schema markup", included: true },
      { text: "Core Web Vitals 95+ optimised", included: true },
      { text: "1 round of revisions", included: true },
      { text: "AI chatbot", included: false },
      { text: "Monthly SEO content", included: false },
      { text: "Google Business updates", included: false },
    ],
    cta: "Get your Core Website",
  },
  {
    name: "Growth Retainer",
    price: "£97",
    period: "/month",
    description: "Core website plus AI chatbot, Google updates and 2 SEO posts per month.",
    features: [
      { text: "Everything in Core Website", included: true },
      { text: "AI chatbot installed & managed", included: true },
      { text: "2 SEO posts per month", included: true },
      { text: "Google Business Profile updates", included: true },
      { text: "Monthly performance report", included: true },
    ],
    cta: "Start Growth Retainer",
    popular: true,
  },
  {
    name: "Full Retainer",
    price: "£197",
    period: "/month",
    description: "Everything above plus full local SEO, reports and a 15-minute call.",
    features: [
      { text: "Everything in Growth Retainer", included: true },
      { text: "Full local SEO", included: true },
      { text: "Quarterly strategy call", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Start Full Retainer",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 honeycomb-bg">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Clear pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-forge-black mb-4">
            Simple packages
          </h2>
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
                    ? "bg-hive-orange text-white hover:bg-hive-orange/90"
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