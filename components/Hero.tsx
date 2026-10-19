"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

      {/* ── Ambient background ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* top radial */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(ellipse, #7c8fcc 0%, transparent 70%)" }} />
        {/* left orb */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #6070b0 0%, transparent 70%)" }} />
        {/* right orb */}
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #9060c0 0%, transparent 70%)" }} />
        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(200,212,235,0.3) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 40%, black 20%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full text-[12.5px] font-medium text-silver-400 tracking-wide"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 20px rgba(100,110,200,0.08)",
          }}
        >
          <Sparkles className="w-3 h-3 text-silver-300" />
          WhatsApp-native · No app download needed
        </div>

        {/* Logo mark */}
        <div className="animate-fade-up d-100 mb-8 relative">
          <div className="w-24 h-24 rounded-3xl overflow-hidden mx-auto relative"
            style={{
              boxShadow: "0 0 0 1px rgba(200,212,235,0.12), 0 20px 60px rgba(0,0,0,0.6), 0 0 80px rgba(100,120,200,0.12)",
            }}
          >
            <Image src="/againo-icon.png" alt="Againo" fill className="object-cover" />
          </div>
          {/* glow ring */}
          <div className="absolute inset-0 rounded-3xl animate-pulse-slow"
            style={{ boxShadow: "0 0 60px rgba(100,120,200,0.15)" }} />
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up d-200 font-display text-[52px] sm:text-[68px] lg:text-[80px] font-semibold leading-[1.02] tracking-[-0.03em] text-balance mb-6">
          <span className="silver-text">Your business,</span>
          <br />
          <span className="text-white/90">running itself.</span>
        </h1>

        {/* Sub */}
        <p className="animate-fade-up d-300 max-w-[520px] text-[17px] sm:text-[18px] text-silver-500 leading-[1.65] mb-10 text-balance">
          Againo handles bookings, schedules, client history, and WhatsApp reminders—so you focus on
          the craft, not the calendar.
        </p>

        {/* Industry tags */}
        <div className="animate-fade-up d-400 flex items-center gap-2.5 mb-10">
          {["Salons & Barbershops", "Fitness Studios"].map((t) => (
            <span key={t} className="px-3.5 py-1.5 rounded-full text-[12px] font-medium text-silver-400 tracking-wide"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              {t}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="animate-fade-up d-500 flex flex-col sm:flex-row items-center gap-3 mb-14">
          <a
            href="#pricing"
            className="group flex items-center gap-2 px-7 py-4 rounded-2xl text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #4a5cad 0%, #7060c8 100%)",
              boxShadow: "0 0 0 1px rgba(120,130,220,0.25), 0 8px 32px rgba(70,85,180,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            Start for free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 px-7 py-4 rounded-2xl text-[15px] font-medium text-silver-400 hover:text-white transition-all duration-200 hover:bg-white/[0.04]"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            See how it works
          </a>
        </div>

        {/* Trust row */}
        <div className="animate-fade-up d-600 flex flex-wrap items-center justify-center gap-6 text-[12.5px] text-silver-600">
          {["No credit card required", "Setup in 5 minutes", "Cancel anytime"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-emerald-500/70" />
              {t}
            </span>
          ))}
        </div>

        {/* ── Dashboard mockup ───────────────────────────────── */}
        <div className="animate-fade-up d-600 mt-24 w-full max-w-[780px] mx-auto">
          <div className="relative">
            {/* outer glow */}
            <div className="absolute -inset-6 rounded-[32px] opacity-40 blur-3xl"
              style={{ background: "radial-gradient(ellipse, rgba(80,90,180,0.4) 0%, transparent 70%)" }} />

            {/* card */}
            <div className="relative rounded-[20px] overflow-hidden"
              style={{
                background: "rgba(10,10,20,0.85)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.05]"
                style={{ background: "rgba(255,255,255,0.02)" }}>
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                <div className="ml-4 flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] text-silver-600 font-mono"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  againo.app/dashboard
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 p-5 pb-3">
                {[
                  { label: "Today's bookings", val: "14", delta: "+3",  color: "#7c8fd4" },
                  { label: "Active clients",   val: "67", delta: "+12", color: "#9b7fd4" },
                  { label: "Revenue MTD",      val: "₹28k", delta: "+8%", color: "#5d9fd4" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-4"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="text-[22px] font-semibold mb-0.5" style={{ color: s.color }}>
                      {s.val}
                    </div>
                    <div className="text-[11px] text-silver-600">{s.label}</div>
                    <div className="text-[10px] text-emerald-400 mt-1">{s.delta} this week</div>
                  </div>
                ))}
              </div>

              {/* Appointment list */}
              <div className="px-5 pb-5 space-y-2">
                <div className="text-[11px] text-silver-600 font-medium uppercase tracking-wider mb-3">
                  Today · 3 upcoming
                </div>
                {[
                  { name: "Rahul M.",  service: "Haircut + Beard",  time: "10:00", tag: "confirmed" },
                  { name: "Priya K.", service: "Color Treatment",   time: "11:30", tag: "pending" },
                  { name: "Arjun S.", service: "Hair Spa",          time: "13:00", tag: "confirmed" },
                ].map((a) => (
                  <div key={a.name}
                    className="flex items-center justify-between px-4 py-3 rounded-xl transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #5a6bbf, #8060b0)" }}>
                        {a.name[0]}
                      </div>
                      <div>
                        <div className="text-[13px] font-medium text-white/90">{a.name}</div>
                        <div className="text-[11px] text-silver-600">{a.service}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] font-mono text-silver-500">{a.time}</span>
                      <span className={`text-[10px] px-2.5 py-1 rounded-full font-medium ${
                        a.tag === "confirmed"
                          ? "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20"
                      }`}>
                        {a.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
