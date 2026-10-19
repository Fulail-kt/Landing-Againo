import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-36 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      {/* glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(ellipse, rgba(80,90,180,0.1) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <div className="relative p-px rounded-3xl overflow-hidden">
          {/* border gradient */}
          <div className="absolute inset-0 rounded-3xl"
            style={{ background: "linear-gradient(135deg, rgba(120,130,220,0.3), rgba(100,80,180,0.15), rgba(120,130,220,0.08))" }} />

          <div className="relative rounded-[23px] px-8 py-20"
            style={{ background: "#07070f" }}>
            {/* top shimmer line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(180,190,240,0.5), transparent)" }} />

            <p className="text-[12px] font-semibold text-silver-600 uppercase tracking-[0.15em] mb-6">
              Get started today
            </p>
            <h2 className="font-display text-[38px] sm:text-[52px] font-semibold tracking-[-0.025em] text-white mb-5 text-balance">
              Your shop is losing bookings{" "}
              <span className="silver-text">right now.</span>
            </h2>
            <p className="text-[16px] text-silver-500 max-w-md mx-auto mb-10 leading-relaxed">
              Every missed WhatsApp message is a missed booking. Set up Againo today — free, no credit card, live in 5 minutes.
            </p>
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #4a5cad 0%, #7060c8 100%)",
                boxShadow: "0 0 0 1px rgba(120,130,220,0.25), 0 8px 40px rgba(70,80,180,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              Start for free — no card needed
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <p className="text-[12px] text-silver-700 mt-5">
              Join 500+ salons and studios already on Againo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
