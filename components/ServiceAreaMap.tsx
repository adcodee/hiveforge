import Reveal from "@/components/ui/Reveal";

const areas = [
  { name: "Codford", x: 72, y: 32 },
  { name: "Salisbury", x: 78, y: 38 },
  { name: "Bath", x: 68, y: 28 },
];

export default function ServiceAreaMap() {
  return (
    <section id="area" className="py-20 md:py-28 honeycomb-bg">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Where we work
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-forge-black mb-4">
              Based in Wiltshire
            </h2>
            <p className="text-forge-black/50 text-lg max-w-xl mx-auto">
              HiveForge is run from Codford. Work is remote across the UK. The live operator example is Patch Access, Wiltshire.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* SVG map */}
          <div className="relative bg-white rounded-3xl border border-gray-100 shadow-sm p-6 overflow-hidden">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-auto max-h-80"
              aria-label="Map of South West UK service area"
            >
              {/* Rough outline of SW England peninsula */}
              <path
                d="M 80 10 L 85 20 L 80 30 L 75 25 L 70 35 L 75 40 L 70 50 L 65 45 L 60 55 L 65 65 L 60 70 L 55 65 L 50 75 L 45 70 L 40 80 L 35 75 L 25 85 L 15 90 L 10 85 L 20 75 L 25 65 L 35 60 L 30 50 L 40 45 L 45 35 L 50 30 L 55 20 L 60 15 L 70 12 Z"
                fill="#EFF6FF"
                stroke="#CBD5E1"
                strokeWidth="0.5"
              />
              {/* Highlight service region */}
              <path
                d="M 75 25 L 70 35 L 75 40 L 70 50 L 65 45 L 60 55 L 65 65 L 60 70 L 55 65 L 50 75 L 45 70 L 40 80 L 35 75 L 25 85 L 20 75 L 25 65 L 35 60 L 30 50 L 40 45 L 45 35 L 50 30 L 55 20 L 65 18 Z"
                fill="#FF851B"
                opacity="0.12"
              />
              {/* Area dots */}
              {areas.map(({ name, x, y }) => (
                <g key={name}>
                  <circle
                    cx={x}
                    cy={y}
                    r="2.2"
                    fill="#FF851B"
                    opacity="0.9"
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#FF851B"
                    opacity="0.15"
                  />
                  <text
                    x={x + 3}
                    y={y + 1}
                    fontSize="3.5"
                    fill="#0A2540"
                    fontWeight="600"
                  >
                    {name}
                  </text>
                </g>
              ))}
            </svg>
            <p className="text-center text-forge-black/30 text-xs mt-2">
              Home base. Software and web work is remote across the UK.
            </p>
          </div>

          {/* Area list */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { area: "Wiltshire", note: "Home base — Patch Access is live here" },
                { area: "United Kingdom", note: "Remote software, web, design and AI" },
                { area: "Your accounts", note: "Private fork — not a shared tenancy" },
              ].map(({ area, note }) => (
                <div key={area} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <p className="font-bold text-forge-black text-sm">{area}</p>
                  <p className="text-forge-black/40 text-xs mt-0.5">{note}</p>
                </div>
              ))}
            </div>
            <p className="text-forge-black/50 text-sm leading-relaxed">
              Not in the South West?{" "}
              <a href="#contact" className="text-hive-orange font-semibold hover:underline">
                Get in touch anyway
              </a>{" "}
              — we work remotely across the UK.
            </p>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
