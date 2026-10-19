import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      {/* glow */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-600/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="relative p-px rounded-3xl overflow-hidden">
          {/* gradient border */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/50 via-accent-500/30 to-brand-500/20 rounded-3xl" />
          <div className="relative bg-[#0b0b16] rounded-3xl px-8 py-16">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent" />

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
              Your shop is losing bookings{" "}
              <span className="gradient-text-brand">right now.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
              Every missed WhatsApp message is a missed booking. Set up NestPro today — free, no credit card, live in 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#pricing"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold text-base hover:from-brand-500 hover:to-accent-500 transition-all shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5"
              >
                Get started free — no card needed
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
            <p className="text-slate-600 text-sm mt-5">
              Join 500+ salons and studios already running on NestPro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
