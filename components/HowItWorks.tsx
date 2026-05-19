import { Search, Code, Rocket, BarChart3, Video } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Research",
    body: "We look at your trade, your area and what customers need right now.",
  },
  {
    icon: Code,
    num: "02",
    title: "Build",
    body: "We create your full website with all the right tools for leads.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Go live",
    body: "Your site is live in 48 hours on fast, reliable hosting.",
  },
  {
    icon: Video,
    num: "04",
    title: "Onboarding call",
    body: "A 30-minute call plus a personalised Loom video showing you exactly how to update your site, swap photos, and use your AI chatbot.",
  },
  {
    icon: BarChart3,
    num: "05",
    title: "Keep growing",
    body: "Optional monthly support adds chatbots, SEO posts and updates.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 honeycomb-bg">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Simple process
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-forge-black mb-4">
              How we build your site
            </h2>
            <p className="text-forge-black/50 text-lg max-w-xl mx-auto">
              Your site is live in 48 hours. No long waits.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, num, title, body }, i) => (
            <Reveal key={num} delay={i * 100}>
            <div
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-hive-orange/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-gray-100 group-hover:text-hive-orange/10 transition-colors select-none">
                {num}
              </span>
              <div className="w-11 h-11 rounded-lg bg-hive-orange/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <Icon size={22} className="text-hive-orange" />
              </div>
              <h3 className="text-xl font-bold text-forge-black mb-1">
                {title}
              </h3>
              <p className="text-forge-black/50 leading-relaxed">{body}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}