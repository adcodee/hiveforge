import Reveal from "@/components/ui/Reveal";

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Live work
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-forge-black mb-4">
              Patch Access
            </h2>
            <p className="text-forge-black/50 text-lg max-w-2xl mx-auto">
              A Wiltshire taxi operator system HiveForge built and still runs.
              Booking, staff desk, drivers, payments — click it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mb-8">
            <p className="text-forge-black/70 leading-relaxed mb-6 max-w-3xl">
              Customer booking on the web, a staff desk for jobs and operators,
              driver tools, payments, maps and calendar. Same stack we would
              fork onto another operator&apos;s name.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-forge-black/70 mb-8">
              {[
                "Customer website and online booking",
                "One-tap ping for a pickup",
                "Admin desk and operator reconciliation",
                "Driver portal",
                "Android test apps (sideload, not store listings yet)",
                "AI chat on the site",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-hive-orange">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.patchaccess.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-hive-orange text-white font-bold px-5 py-3 rounded-xl hover:bg-hive-orange/90"
              >
                Open the live site
              </a>
              <a
                href="https://www.patchaccess.uk/ping"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-forge-navy text-white font-semibold px-5 py-3 rounded-xl hover:bg-forge-navy/90"
              >
                Try ping
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl bg-forge-navy text-white p-8 md:p-10">
            <p className="text-hive-orange font-semibold text-sm mb-2">
              The HiveForge guarantee
            </p>
            <p className="text-xl md:text-2xl font-bold leading-snug mb-4">
              I build it first. You only pay if you are happy. No deposit, no
              lock-in — if it is not right, you walk away owing nothing.
            </p>
            <p className="text-white/50 text-sm">Adule, HiveForge</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
