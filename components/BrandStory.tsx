import { Brain, Hammer, Zap } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-forge-navy relative overflow-hidden noise-overlay">
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Our simple approach
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Practical websites that get you more jobs without you managing marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Fast delivery",
              subtitle: "48 hours",
              body: "We research your trade and area then build and launch your site in 48 hours.",
              color: "from-hive-orange to-hive-amber",
            },
            {
              icon: Hammer,
              title: "Mobile-first design",
              subtitle: "Works on any phone",
              body: "Customers can call or request a quote instantly while you're on the job.",
              color: "from-hive-amber to-yellow-400",
            },
            {
              icon: Zap,
              title: "Built-in leads",
              subtitle: "24/7 tools",
              body: "Emergency forms, call buttons and local SEO bring jobs in even when you're working.",
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