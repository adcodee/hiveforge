import { Brain, Hammer, Zap } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-forge-navy relative overflow-hidden noise-overlay">
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            The <span className="text-hive-orange">Hive</span> +{" "}
            <span className="text-hive-amber">Forge</span> Method
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Instinctive AI intelligence meets rock-solid craftsmanship. Your
            website works like a hive — sensing, capturing and converting
            leads 24/7 — while you're out forging real work on site.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "The Hive",
              subtitle: "Instinctive AI intelligence",
              body: "Our AI system researches your trade, your area, your competitors — then generates conversion-optimised copy, local SEO schema, and emergency CTAs automatically. Like a hive mind sensing every opportunity.",
              color: "from-hive-orange to-hive-amber",
            },
            {
              icon: Hammer,
              title: "The Forge",
              subtitle: "Rock-solid craftsmanship",
              body: "Every site is hand-checked, mobile-first, and deployed on enterprise-grade infrastructure. Fast, reliable, built to last — like quality trade work, no corners cut.",
              color: "from-hive-amber to-yellow-400",
            },
            {
              icon: Zap,
              title: "The Result",
              subtitle: "Jobs while you sleep",
              body: "Your site captures leads at 2 AM when someone's boiler breaks. Floating call buttons, 24/7 emergency CTAs, and Google-optimised pages bring customers to you — not your competitor.",
              color: "from-yellow-400 to-hive-orange",
            },
          ].map(({ icon: Icon, title, subtitle, body, color }) => (
            <div
              key={title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-hive-orange/30 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5`}
              >
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <p className="text-hive-orange text-sm font-medium mb-3">
                {subtitle}
              </p>
              <p className="text-white/50 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
