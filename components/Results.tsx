import { Clock, Globe, Smartphone, Shield } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { icon: Globe, value: "Live", label: "Patch Access", sub: "patchaccess.uk" },
  { icon: Clock, value: "48h", label: "Website builds", sub: "from enquiry to live" },
  { icon: Smartphone, value: "2", label: "Product faces", sub: "customer app and staff app" },
  { icon: Shield, value: "£0", label: "Until you are happy", sub: "no deposit" },
];

export default function Results() {
  return (
    <section id="results" className="py-20 md:py-28 bg-gradient-to-br from-forge-navy via-forge-navy to-[#0d2f4f]">
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Facts, not filler
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              What is actually running
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label, sub }) => (
              <div
                key={label}
                className="text-center bg-white/5 rounded-2xl p-6 border border-white/10"
              >
                <Icon size={28} className="text-hive-orange mx-auto mb-3" />
                <p className="text-4xl font-extrabold text-white mb-1">{value}</p>
                <p className="text-white/70 font-medium text-sm">{label}</p>
                <p className="text-white/40 text-xs mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
