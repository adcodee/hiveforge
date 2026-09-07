import { Brain, Hammer, Zap } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-forge-navy relative overflow-hidden noise-overlay">
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Four things, one shop
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Software, web, design and AI. Same person builds the public face and the system behind it.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Software",
              subtitle: "Apps and backends",
              body: "Booking systems, admin desks, driver apps, APIs. Forked from a live product, not a slide deck.",
              color: "from-hive-orange to-hive-amber",
              delay: 0,
            },
            {
              icon: Hammer,
              title: "Web & design",
              subtitle: "Sites and brand",
              body: "Marketing sites live in 48 hours. Custom product UI when a brochure site is the wrong tool.",
              color: "from-hive-amber to-yellow-400",
              delay: 100,
            },
            {
              icon: Zap,
              title: "AI",
              subtitle: "Chat and automation",
              body: "Assistants on the site, quote handling, and the same stack we use to ship work quickly.",
              color: "from-yellow-400 to-hive-orange",
              delay: 200,
            },
          ].map(({ icon: Icon, title, subtitle, body, color, delay }) => (
            <Reveal key={title} delay={delay}>
            <div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-hive-orange/30 hover:-translate-y-1 transition-all duration-300"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}