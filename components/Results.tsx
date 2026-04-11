import { PhoneCall, TrendingUp, Clock, Star } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "5–15", label: "Extra jobs per month", sub: "within 60 days" },
  { icon: Clock, value: "48h", label: "From first call to live site", sub: "not weeks" },
  { icon: PhoneCall, value: "24/7", label: "Emergency lead capture", sub: "while you sleep" },
  { icon: Star, value: "95+", label: "Core Web Vitals score", sub: "Google loves it" },
];

export default function Results() {
  return (
    <section id="results" className="py-20 md:py-28 bg-gradient-to-br from-forge-navy via-forge-navy to-[#0d2f4f] relative overflow-hidden">
      {/* Decorative hex */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-hive-orange/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Realistic results
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            What a HiveForge Site Delivers
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            No hype. These are the realistic, achievable outcomes South West
            trades businesses can expect with a HiveForge website.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <div
              key={label}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <Icon size={28} className="text-hive-orange mx-auto mb-3" />
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-1">
                {value}
              </p>
              <p className="text-white/70 font-medium text-sm">{label}</p>
              <p className="text-white/40 text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
