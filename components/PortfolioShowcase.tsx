import Reveal from "@/components/ui/Reveal";

export default function PortfolioShowcase() {
  return (
    <section id="portfolio" className="py-20 md:py-28 honeycomb-bg">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
              What we ship
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-forge-black mb-4">
              Products, not filler clients
            </h2>
            <p className="text-forge-black/50 text-lg max-w-xl mx-auto">
              HiveForge does not invent testimonials. The work you can click is Patch Access.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Websites",
              body: "Marketing sites with booking or enquiry, live in 48 hours. Local SEO and a call button that actually works on a phone.",
            },
            {
              name: "Software",
              body: "Customer apps, staff desks, backends. Private fork onto your accounts — not a shared SaaS tenancy.",
            },
            {
              name: "Design & AI",
              body: "Brand on the product, not a logo sticker. Chat and automation where it saves a real job, not a gimmick widget.",
            },
          ].map((card, i) => (
            <Reveal key={card.name} delay={i * 80}>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-forge-black mb-2">{card.name}</h3>
                <p className="text-forge-black/60 text-sm leading-relaxed">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
