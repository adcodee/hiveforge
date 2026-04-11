import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "James R.",
    trade: "Plumber — Exeter",
    text: "Had my site up in a day and a half. Started getting calls the same week. Wish I'd done this years ago.",
    stars: 5,
  },
  {
    name: "Sarah T.",
    trade: "Electrician — Bristol",
    text: "The emergency call button alone has paid for the site three times over. Customers love how easy it is to reach me.",
    stars: 5,
  },
  {
    name: "Mike D.",
    trade: "Builder — Cornwall",
    text: "Adule explained everything, no jargon. Site looks better than competitors who paid ten times more. Getting steady work from Google now.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Social proof
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-forge-black mb-4">
            Trades That Trust the Hive
          </h2>
          <p className="text-forge-black/50 text-sm">
            Placeholder testimonials — real client quotes coming soon.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <Quote size={28} className="text-hive-orange/20 mb-4" />
              <p className="text-forge-black/60 leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-hive-amber fill-hive-amber"
                  />
                ))}
              </div>
              <p className="font-bold text-forge-black text-sm">{t.name}</p>
              <p className="text-forge-black/40 text-xs">{t.trade}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
