export default function Footer() {
  return (
    <footer className="bg-forge-black py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-bold text-white tracking-tight">
              Hive<span className="text-hive-orange">Forge</span>
            </span>
            <p className="text-white/30 text-sm mt-1">
              Fast websites for South West trades businesses.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/40">
            <a href="#how-it-works" className="hover:text-white/70 transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-white/70 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white/70 transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} HiveForge. All rights reserved.</p>
          <p>
            Serving Exeter, Devon, Cornwall, Bristol & Somerset.{" "}
            <a href="#" className="underline hover:text-white/50">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}