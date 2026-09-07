import Reveal from "@/components/ui/Reveal";

export default function TrustBadges() {
  const badges = [
    { label: "Software", color: "#0A2540", abbr: "SW", sub: "Apps & backends" },
    { label: "Web", color: "#FF851B", abbr: "WEB", sub: "Sites in 48 hours" },
    { label: "Design", color: "#FFAA00", abbr: "UI", sub: "Brand & product" },
    { label: "AI", color: "#1C1C1C", abbr: "AI", sub: "Chat & automation" },
  ];

  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-center text-forge-black/40 text-xs uppercase tracking-widest font-semibold mb-6">
            What HiveForge actually does
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {badges.map(({ label, color, abbr, sub }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 hover:scale-110 hover:-translate-y-1 transition-transform duration-200 cursor-default"
                title={label}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-extrabold text-white text-xs text-center leading-tight px-1"
                  style={{ backgroundColor: color }}
                >
                  {abbr}
                </div>
                <span className="text-forge-black/50 text-xs font-medium text-center leading-tight max-w-[64px]">
                  {sub}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
