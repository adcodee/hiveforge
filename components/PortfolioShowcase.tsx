const projects = [
  {
    name: "Dave's Plumbing",
    location: "Exeter, Devon",
    trade: "Plumber",
    color: "bg-blue-50",
    accent: "border-blue-200",
    tag: "bg-blue-100 text-blue-700",
    stats: [
      { label: "Monthly calls", value: "+11" },
      { label: "Google rank", value: "#2" },
      { label: "Page speed", value: "97" },
    ],
    features: ["Emergency CTA", "AI chatbot", "Local SEO"],
    initials: "DP",
    iconBg: "bg-blue-600",
  },
  {
    name: "Bright Spark Electrical",
    location: "Bristol",
    trade: "Electrician",
    color: "bg-yellow-50",
    accent: "border-yellow-200",
    tag: "bg-yellow-100 text-yellow-700",
    stats: [
      { label: "Monthly leads", value: "14" },
      { label: "Google rank", value: "#1" },
      { label: "Page speed", value: "99" },
    ],
    features: ["NICEIC badges", "Before/after gallery", "Blog SEO"],
    initials: "BS",
    iconBg: "bg-yellow-500",
  },
  {
    name: "Cornwall Build Co.",
    location: "Truro, Cornwall",
    trade: "Builder",
    color: "bg-orange-50",
    accent: "border-orange-200",
    tag: "bg-orange-100 text-orange-700",
    stats: [
      { label: "New contracts", value: "3" },
      { label: "Google rank", value: "#3" },
      { label: "Page speed", value: "96" },
    ],
    features: ["Project portfolio", "Google Business", "Testimonials"],
    initials: "CB",
    iconBg: "bg-orange-500",
  },
];

export default function PortfolioShowcase() {
  return (
    <section id="portfolio" className="py-20 md:py-28 honeycomb-bg">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Our work
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-forge-black mb-4">
            Sites we've built
          </h2>
          <p className="text-forge-black/50 text-lg max-w-xl mx-auto">
            Every HiveForge site is built to rank, convert and capture leads — not just look good.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 ${p.color} ${p.accent} hover:shadow-lg transition-shadow`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl ${p.iconBg} flex items-center justify-center text-white font-extrabold text-sm shrink-0`}
                >
                  {p.initials}
                </div>
                <div>
                  <p className="font-bold text-forge-black text-sm leading-tight">
                    {p.name}
                  </p>
                  <p className="text-forge-black/50 text-xs">{p.location}</p>
                </div>
                <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${p.tag}`}>
                  {p.trade}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {p.stats.map(({ label, value }) => (
                  <div key={label} className="bg-white/70 rounded-xl p-3 text-center border border-white">
                    <p className="text-2xl font-extrabold text-forge-black leading-none">
                      {value}
                    </p>
                    <p className="text-forge-black/40 text-xs mt-1 leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs bg-white/80 text-forge-black/60 px-2.5 py-1 rounded-full border border-white font-medium"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-forge-navy text-white font-bold px-7 py-3.5 rounded-xl hover:bg-forge-navy/90 transition-colors"
          >
            Get your own HiveForge site →
          </a>
        </div>
      </div>
    </section>
  );
}
