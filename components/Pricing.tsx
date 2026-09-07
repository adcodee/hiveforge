import { Check, X } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type Feature = { text: string; included: boolean };

const websiteTiers = [
  {
    name: "Core Website",
    price: "£997",
    period: "one-off",
    description: "Marketing site, live in 48 hours, one round of revisions.",
    features: [
      { text: "Mobile-first site on your domain", included: true },
      { text: "Call / enquiry CTA", included: true },
      { text: "Local SEO schema", included: true },
      { text: "1 round of revisions", included: true },
      { text: "AI chatbot", included: false },
      { text: "Monthly SEO content", included: false },
    ] as Feature[],
    cta: "Ask about a website",
    popular: false,
  },
  {
    name: "Growth Retainer",
    price: "£97",
    period: "/month",
    description: "Site plus chatbot, Google Business updates and 2 SEO posts.",
    features: [
      { text: "Everything in Core Website", included: true },
      { text: "AI chatbot managed", included: true },
      { text: "2 SEO posts per month", included: true },
      { text: "Google Business updates", included: true },
      { text: "Monthly report", included: true },
    ] as Feature[],
    cta: "Ask about Growth",
    popular: true,
  },
  {
    name: "Full Retainer",
    price: "£197",
    period: "/month",
    description: "Growth plus fuller SEO, priority support and a strategy call.",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Fuller local SEO", included: true },
      { text: "Strategy call", included: true },
      { text: "Priority support", included: true },
    ] as Feature[],
    cta: "Ask about Full",
    popular: false,
  },
];

const softwareLines = [
  { name: "Customer website + booking", price: "£400", example: "patchaccess.uk" },
  { name: "Driver portal", price: "£250", example: "Driver signup / rides" },
  { name: "Admin / operator desk", price: "£350", example: "Jobs, operators, inbox" },
  { name: "Backend + infra setup", price: "£300", example: "Their Vercel, Railway, Supabase" },
  { name: "Square payments", price: "£150", example: "Payment link on complete" },
  { name: "Maps + calendar", price: "£150", example: "Booking confirm map" },
  { name: "Notifications (Telegram / SMS / WhatsApp)", price: "£200", example: "Admin alerts" },
  { name: "Android + iOS packaging", price: "£600", example: "Sideload first; store support extra" },
  { name: "Branding pass", price: "£150", example: "Logo, colours, copy" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 honeycomb-bg">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Prices
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-forge-black mb-4">
              Websites and custom software
            </h2>
            <p className="text-forge-black/50 max-w-2xl mx-auto">
              VAT extra. You only pay if you are happy. Operator software is a
              private fork of a live system, not a from-scratch rewrite.
            </p>
          </div>
        </Reveal>

        <h3 className="text-xl font-bold text-forge-black mb-6">Websites</h3>
        <div className="grid md:grid-cols-3 gap-6 items-start mb-16">
          {websiteTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80}>
              <div
                className={`relative rounded-2xl p-8 border ${
                  tier.popular
                    ? "border-hive-orange shadow-xl shadow-hive-orange/10"
                    : "border-gray-100 bg-white shadow-sm"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-hive-orange text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most used with a site
                  </span>
                )}
                <h3 className="text-xl font-bold text-forge-black mb-1">{tier.name}</h3>
                <p className="text-forge-black/40 text-sm mb-4">{tier.description}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-forge-black">{tier.price}</span>
                  <span className="text-forge-black/40 text-sm">{tier.period}</span>
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
                  className={`block text-center font-bold py-3.5 rounded-xl ${
                    tier.popular
                      ? "bg-hive-orange text-white hover:bg-hive-orange/90"
                      : "bg-forge-navy text-white hover:bg-forge-navy/90"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="text-xl font-bold text-forge-black mb-2">
            Custom software — operator system
          </h3>
          <p className="text-forge-black/50 text-sm mb-6 max-w-2xl">
            Same product as{" "}
            <a
              href="https://www.patchaccess.uk"
              className="text-hive-orange font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              patchaccess.uk
            </a>
            , on your name and accounts. Buy lines, or the bundle.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-forge-black/50">
                <tr>
                  <th className="px-5 py-3 font-medium">Line</th>
                  <th className="px-5 py-3 font-medium hidden sm:table-cell">In Patch Access</th>
                  <th className="px-5 py-3 font-medium text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {softwareLines.map((row) => (
                  <tr key={row.name} className="border-t border-gray-100">
                    <td className="px-5 py-3 font-medium text-forge-black">{row.name}</td>
                    <td className="px-5 py-3 text-forge-black/50 hidden sm:table-cell">
                      {row.example}
                    </td>
                    <td className="px-5 py-3 text-right font-bold text-forge-black">{row.price}</td>
                  </tr>
                ))}
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="px-5 py-3 font-bold">Sum of parts</td>
                  <td className="hidden sm:table-cell" />
                  <td className="px-5 py-3 text-right font-bold">£2,550</td>
                </tr>
                <tr className="border-t border-hive-orange/30 bg-hive-orange/5">
                  <td className="px-5 py-4 font-extrabold text-forge-black">
                    Full package (~20% off)
                  </td>
                  <td className="hidden sm:table-cell px-5 py-4 text-forge-black/50">
                    Everything above as one build
                  </td>
                  <td className="px-5 py-4 text-right font-extrabold text-hive-orange text-lg">
                    £2,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <h4 className="font-bold text-forge-black mb-1">Basic retainer</h4>
            <p className="text-3xl font-extrabold text-forge-black mb-2">
              £75<span className="text-base font-medium text-forge-black/40">/month</span>
            </p>
            <p className="text-sm text-forge-black/60">
              Hosting passthrough and critical bug fixes. Hosting alone can be
              £30–60/month before time.
            </p>
          </div>
          <div className="rounded-2xl border border-hive-orange/30 bg-white p-6">
            <h4 className="font-bold text-forge-black mb-1">Standard retainer</h4>
            <p className="text-3xl font-extrabold text-forge-black mb-2">
              £150<span className="text-base font-medium text-forge-black/40">/month</span>
            </p>
            <p className="text-sm text-forge-black/60">
              Basic, plus small tweaks and priority reply. New features are quoted.
            </p>
          </div>
        </div>
        <p className="text-xs text-forge-black/40 mt-4">
          Android sideload is proven. Store listings and iOS need developer
          accounts (not in the build fee). Draft until your scope is locked.
        </p>
      </div>
    </section>
  );
}
