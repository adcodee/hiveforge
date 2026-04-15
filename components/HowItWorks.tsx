import { Search, Code, Rocket, BarChart3 } from "lucide-react";

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
    icon: BarChart3,
    num: "04",
    title: "Keep growing",
    body: "Optional monthly support adds chatbots, SEO posts and updates.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 honeycomb-bg">
      <div className="max-w-6xl mx-auto px-5">
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

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map(({ icon: Icon, num, title, body }) => (
            <div
              key={num}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-hive-orange/30 shadow-sm hover:shadow-lg transition-all"
            >
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-gray-100 group-hover:text-hive-orange/10 transition-colors select-none">
                {num}
              </span>
              <div className="w-11 h-11 rounded-lg bg-hive-orange/10 flex items-center justify-center mb-4">
                <Icon size={22} className="text-hive-orange" />
              </div>
              <h3 className="text-xl font-bold text-forge-black mb-1">
                {title}
              </h3>
              <p className="text-forge-black/50 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}