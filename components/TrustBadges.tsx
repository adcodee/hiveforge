export default function TrustBadges() {
  const badges = [
    {
      label: "Gas Safe Registered",
      color: "#003087",
      abbr: "GAS SAFE",
      sub: "Registered",
    },
    {
      label: "NICEIC Approved",
      color: "#D4002A",
      abbr: "NICEIC",
      sub: "Approved Contractor",
    },
    {
      label: "NAPIT Registered",
      color: "#FF6B00",
      abbr: "NAPIT",
      sub: "Registered",
    },
    {
      label: "Which? Trusted Trader",
      color: "#00A0A0",
      abbr: "Which?",
      sub: "Trusted Trader",
    },
    {
      label: "CHAS Accredited",
      color: "#1A1A1A",
      abbr: "CHAS",
      sub: "Accredited",
    },
  ];

  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-center text-forge-black/40 text-xs uppercase tracking-widest font-semibold mb-6">
          We build sites for accredited, trusted tradespeople
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map(({ label, color, abbr, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5"
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
      </div>
    </section>
  );
}
