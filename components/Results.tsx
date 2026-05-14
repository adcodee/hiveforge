import { PhoneCall, TrendingUp, Clock, Star, MessageSquare, Search, BarChart2 } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "5–15", label: "Extra jobs per month", sub: "within 60 days" },
  { icon: Clock, value: "48h", label: "From enquiry to live site", sub: "not weeks" },
  { icon: PhoneCall, value: "24/7", label: "Emergency lead capture", sub: "while you work" },
  { icon: Star, value: "95+", label: "Core Web Vitals score", sub: "fast and reliable" },
];

const reportRows = [
  { icon: Search, label: "Google ranking", value: "#1 — plumber Exeter", change: "+4 positions" },
  { icon: PhoneCall, label: "Phone calls from site", value: "23 this month", change: "+8 vs last month" },
  { icon: MessageSquare, label: "Chatbot conversations", value: "41 enquiries", change: "9 converted to jobs" },
  { icon: BarChart2, label: "Organic traffic", value: "612 visitors", change: "+34%" },
];

export default function Results() {
  return (
    <section id="results" className="py-20 md:py-28 bg-gradient-to-br from-forge-navy via-forge-navy to-[#0d2f4f] relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Realistic results
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            What your new site delivers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
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

        {/* Sample monthly report — Full Retainer */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <p className="text-hive-orange font-semibold text-xs uppercase tracking-wider mb-1">
                Full Retainer — sample report
              </p>
              <h3 className="text-white font-bold text-xl">Monthly Performance Report</h3>
              <p className="text-white/40 text-sm">Dave's Plumbing, Exeter — April 2025</p>
            </div>
            <span className="bg-hive-orange/20 text-hive-orange text-xs font-bold px-3 py-1.5 rounded-full border border-hive-orange/30">
              Full Retainer client
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reportRows.map(({ icon: Icon, label, value, change }) => (
              <div key={label} className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-hive-orange/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-hive-orange" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/50 text-xs">{label}</p>
                  <p className="text-white font-bold text-sm truncate">{value}</p>
                </div>
                <span className="text-green-400 text-xs font-semibold shrink-0">{change}</span>
              </div>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-5 text-center">
            Full Retainer clients receive this report monthly — plus a 15-minute strategy call.
          </p>
        </div>
      </div>
    </section>
  );
}