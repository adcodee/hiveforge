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

const operatorTiers = [
  {
    name: "Operator",
    price: "£99",
    setup: "£795 setup",
    period: "/month",
    description:
      "Spreadsheet and WhatsApp firms. Desk + drivers on the phone. No public booking site required.",
    features: [
      { text: "Admin desk in the browser", included: true },
      { text: "Driver portal (phone browser / PWA)", included: true },
      { text: "Type-in jobs from a call, text or email", included: true },
      { text: "SMS on the booking", included: true },
      { text: "Booking record (who, when, pickup, drop, driver, vehicle)", included: true },
      { text: "First 5 drivers included, then £8 / driver / month", included: true },
      { text: "Passenger booking website", included: false },
      { text: "Native apps / store listings", included: false },
    ] as Feature[],
    cta: "Ask about Operator",
    popular: true,
  },
  {
    name: "Growth Enterprise",
    price: "£229",
    setup: "£1,995 setup",
    period: "/month",
    description:
      "Same chassis, public face on. Branded booking site + desk + drivers. For firms that want to look bigger than the group chat.",
    features: [
      { text: "Everything in Operator", included: true },
      { text: "Passenger website + online booking on your domain", included: true },
      { text: "Maps, quotes and calendar", included: true },
      { text: "Apply-your-brand pass (colours, name, existing logo)", included: true },
      { text: "First 10 drivers included, then £8 / driver / month", included: true },
      { text: "Payments (Square) as an add-on", included: false },
      { text: "Native apps / store listings as add-ons", included: false },
    ] as Feature[],
    cta: "Ask about Growth Enterprise",
    popular: false,
  },
];

const addOns = [
  { name: "Wire-in (keep your existing site)", price: "£1,495 setup", note: "Growth Enterprise monthly, no new brochure site" },
  { name: "Admin app on your phone (Android sideload)", price: "£295", note: "Staff shell, not a store listing" },
  { name: "iOS staff shell + your Apple account", price: "£495", note: "On top of Android if you want both" },
  { name: "Passenger or driver store listing", price: "Quoted", note: "Developer accounts and review are yours" },
  { name: "Square payments", price: "£150 setup", note: "Their Square fees on top" },
  { name: "Maps + quotes if not in the package", price: "£150", note: "Included in Growth Enterprise" },
  { name: "Apply existing logo / colours", price: "£150", note: "Not a new brand identity" },
  { name: "New logo / identity", price: "£400–£800", note: "Separate design job, not dispatch" },
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
              Websites and operator software
            </h2>
            <p className="text-forge-black/50 max-w-2xl mx-auto">
              Prices as shown. Not VAT registered. Websites: pay if you are
              happy. Operator software: 50% setup deposit, monthly by direct
              debit, 30 days&apos; notice. One chassis — your name, not a private
              fork per firm.
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
            Operator software
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
            . One system, your name and drivers. Tick add-ons or strip a line if
            you already have a site. More than two add-ons on Operator and it is
            Growth Enterprise.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 items-start mb-10">
          {operatorTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80}>
              <div
                className={`relative rounded-2xl p-8 border h-full ${
                  tier.popular
                    ? "border-hive-orange shadow-xl shadow-hive-orange/10 bg-white"
                    : "border-gray-100 bg-white shadow-sm"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-hive-orange text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most firms start here
                  </span>
                )}
                <h3 className="text-xl font-bold text-forge-black mb-1">{tier.name}</h3>
                <p className="text-forge-black/40 text-sm mb-4">{tier.description}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-forge-black">{tier.price}</span>
                  <span className="text-forge-black/40 text-sm">{tier.period}</span>
                </div>
                <p className="text-sm font-semibold text-forge-black/60 mb-6">{tier.setup}</p>
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
          <h4 className="font-bold text-forge-black mb-3">Add-ons and wire-in</h4>
        </Reveal>
        <Reveal delay={40}>
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-forge-black/50">
                <tr>
                  <th className="px-5 py-3 font-medium">Line</th>
                  <th className="px-5 py-3 font-medium hidden sm:table-cell">Note</th>
                  <th className="px-5 py-3 font-medium text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {addOns.map((row) => (
                  <tr key={row.name} className="border-t border-gray-100">
                    <td className="px-5 py-3 font-medium text-forge-black">{row.name}</td>
                    <td className="px-5 py-3 text-forge-black/50 hidden sm:table-cell">
                      {row.note}
                    </td>
                    <td className="px-5 py-3 text-right font-bold text-forge-black whitespace-nowrap">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <p className="text-xs text-forge-black/40 mt-2">
          SMS and maps on your keys where possible, so usage is your bill.
          Android sideload is proven. Store listings need your developer
          accounts and are quoted. New features outside the card are quoted.
        </p>
      </div>
    </section>
  );
}
