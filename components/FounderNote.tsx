import { Wrench } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function FounderNote() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-5">
        <Reveal>
          <div className="flex items-start gap-5">
            <div className="w-11 h-11 rounded-xl bg-hive-orange/10 flex items-center justify-center shrink-0">
              <Wrench size={20} className="text-hive-orange" />
            </div>
            <div>
              <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-2">
                Who&apos;s actually doing this
              </p>
              <p className="text-forge-black/70 leading-relaxed">
                No agency team, no computer science degree — just me. I&apos;ve been
                coding as a hobbyist since 2020, building real sites and using AI
                to move faster. Most of what I know now came from that: learning
                how to prompt properly, how to say what you actually want so the
                AI gives you a usable answer instead of a guess, and which model
                is actually good at which job. Patch Access is what that looks
                like when it&apos;s not a side project — a real business running
                on it, every day.
              </p>
              <p className="text-forge-black/40 text-sm mt-3">— Adule, HiveForge</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
