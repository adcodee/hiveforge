import { Search, Code, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "AI Research",
    tool: "Grok deep-dives",
    body: "Our AI researches your trade, local area, competitors, and customer pain points. It builds a Master Prompt — a blueprint for every word and element on your site.",
  },
  {
    icon: Code,
    num: "02",
    title: "Code Generation",
    tool: "Claude builds",
    body: "The Master Prompt feeds into Claude, which generates production-ready Next.js code — mobile-first design, emergency CTAs, trust signals, local SEO schema — all in under 2 hours.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Live Deploy",
    tool: "Vercel ships",
    body: "Your finished site is deployed to Vercel — enterprise-grade hosting with 99.99% uptime, global CDN, and automatic SSL. Live and ranking within 48 hours of first contact.",
  },
  {
    icon: BarChart3,
    num: "04",
    title: "Growth & Optimisation",
    tool: "Optional retainer",
    body: "Choose a Growth or Full retainer and we add AI chatbots, monthly SEO content, Google Business Profile management, and conversion tracking. Your site keeps getting better.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 honeycomb-bg">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Full transparency
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-forge-black mb-4">
            How We Build Your Site
          </h2>
          <p className="text-forge-black/50 text-lg max-w-xl mx-auto">
            No black boxes. Here's exactly how HiveForge creates a
            high-converting trades website in under 48 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map(({ icon: Icon, num, title, tool, body }) => (
            <div
              key={num}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-hive-orange/30 shadow-sm hover:shadow-lg transition-all"
            >
              {/* Step number */}
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-gray-100 group-hover:text-hive-orange/10 transition-colors select-none">
                {num}
              </span>
              <div className="w-11 h-11 rounded-lg bg-hive-orange/10 flex items-center justify-center mb-4">
                <Icon size={22} className="text-hive-orange" />
              </div>
              <h3 className="text-xl font-bold text-forge-black mb-1">
                {title}
              </h3>
              <p className="text-xs font-semibold text-hive-orange uppercase tracking-wider mb-3">
                {tool}
              </p>
              <p className="text-forge-black/50 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
