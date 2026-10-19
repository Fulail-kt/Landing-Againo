"use client";

import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background glows */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-600/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-accent-500/8 blur-3xl pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-500/30 text-sm text-brand-300 mb-8 animate-fade-up">
          <Sparkles className="w-3.5 h-3.5" />
          <span>WhatsApp-native booking · No app install needed</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance leading-[1.05] mb-6 animate-fade-up animate-delay-100">
          <span className="text-white">Your salon.</span>
          <br />
          <span className="gradient-text">Running itself.</span>
        </h1>

        {/* Sub */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 animate-fade-up animate-delay-200">
          NestPro handles bookings, schedules, client history, and WhatsApp
          reminders — so you focus on the craft, not the calendar.
          Built for <strong className="text-slate-200 font-medium">salons</strong> and{" "}
          <strong className="text-slate-200 font-medium">fitness studios</strong>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16 animate-fade-up animate-delay-300">
          <a
            href="#pricing"
            className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold text-base hover:from-brand-500 hover:to-accent-500 transition-all shadow-xl shadow-brand-500/25 hover:shadow-brand-500/45 hover:-translate-y-0.5"
          >
            Start for free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass text-slate-300 font-medium text-base hover:text-white hover:bg-white/8 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-green-400" />
            See WhatsApp demo
          </a>
        </div>

        {/* Social proof bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 animate-fade-up animate-delay-400">
          {[
            "No credit card required",
            "Setup in 5 minutes",
            "Cancel anytime",
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              {t}
            </span>
          ))}
        </div>

        {/* Mock UI card */}
        <div className="mt-20 relative max-w-3xl mx-auto animate-fade-up animate-delay-500">
          {/* glow behind card */}
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-600/20 to-accent-500/20 rounded-3xl blur-2xl" />
          <div className="relative glass-strong rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Fake window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/2">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-4 text-xs text-slate-500 font-mono">nestpro.app / dashboard</span>
            </div>

            {/* Mock dashboard content */}
            <div className="p-6 grid grid-cols-3 gap-4">
              {[
                { label: "Today's bookings", val: "14", color: "from-brand-600 to-brand-500" },
                { label: "Clients this week", val: "67", color: "from-accent-600 to-accent-400" },
                { label: "Revenue MTD", val: "₹28k", color: "from-emerald-600 to-emerald-400" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-white/4 border border-white/6 p-4">
                  <div
                    className={`text-2xl font-bold bg-gradient-to-br ${s.color} bg-clip-text text-transparent mb-1`}
                  >
                    {s.val}
                  </div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Appointment rows */}
            <div className="px-6 pb-6 space-y-2">
              {[
                { name: "Rahul M.", service: "Haircut + Beard", time: "10:00", status: "confirmed" },
                { name: "Priya K.", service: "Color Treatment", time: "11:30", status: "pending" },
                { name: "Arjun S.", service: "Hair Spa", time: "13:00", status: "confirmed" },
              ].map((a) => (
                <div
                  key={a.name}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/3 border border-white/5 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-xs font-bold text-white">
                      {a.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{a.name}</div>
                      <div className="text-xs text-slate-500">{a.service}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-400 font-mono">{a.time}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        a.status === "confirmed"
                          ? "bg-green-500/15 text-green-400"
                          : "bg-yellow-500/15 text-yellow-400"
                      }`}
                    >
                      {a.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
