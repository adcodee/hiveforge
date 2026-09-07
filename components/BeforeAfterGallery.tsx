import Reveal from "@/components/ui/Reveal";

export default function BeforeAfterGallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
              What changes
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-forge-black mb-4">
              Brochure site vs a working system
            </h2>
            <p className="text-forge-black/50 text-lg max-w-xl mx-auto">
              A brochure site versus the operator system we actually ship.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-8 border border-gray-200 bg-gray-100">
              <span className="inline-block bg-gray-300 text-gray-700 text-xs font-bold px-3 py-1 rounded-full mb-5">
                Typical starting point
              </span>
              <ul className="space-y-3 text-sm text-forge-black/60">
                {[
                  "A page that looks fine on a laptop and dies on a phone",
                  "No way to book or ping while you are out",
                  "Jobs logged in a notebook or someone else's radio sheet",
                  "Chatbot theatre with no backend",
                ].map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-gray-400">✕</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8 border border-hive-orange/20 bg-hive-orange/5">
              <span className="inline-block bg-hive-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-5">
                What HiveForge builds
              </span>
              <ul className="space-y-3 text-sm text-forge-black/80 font-medium">
                {[
                  "Mobile-first site, live in 48 hours if that is the job",
                  "Booking, ping, or a full customer app",
                  "Admin desk, driver tools, payments, maps",
                  "AI that sits on the same stack as the rest of the product",
                ].map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-hive-orange">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
