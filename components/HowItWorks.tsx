import { Store, MessageCircle, CalendarCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Store,
    title: "Set up your shop",
    desc: "Add your services, chairs/stations, working hours, and staff in minutes. No training needed.",
    color: "from-brand-600 to-brand-400",
  },
  {
    n: "02",
    icon: MessageCircle,
    title: "Connect WhatsApp",
    desc: "Link your WhatsApp Business number. Clients book, confirm, and get reminders — all in chat.",
    color: "from-green-600 to-emerald-400",
  },
  {
    n: "03",
    icon: CalendarCheck,
    title: "Manage your day",
    desc: "See your full day at a glance. Approve walk-ins, reschedule on the fly, track no-shows.",
    color: "from-accent-600 to-accent-400",
  },
  {
    n: "04",
    icon: TrendingUp,
    title: "Watch it grow",
    desc: "Analytics show you exactly what's working. Retain more clients, fill more slots, earn more.",
    color: "from-pink-600 to-rose-400",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* subtle separator line at top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-xs font-medium text-accent-400 mb-4">
            Simple setup
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Up and running in{" "}
            <span className="gradient-text-brand">5 minutes</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            No IT team. No onboarding calls. Just open it and go.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.n} className="relative text-center">
                {/* Number badge */}
                <div className="relative inline-flex mb-6">
                  <div
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${s.color} p-0.5`}
                  >
                    <div className="w-full h-full rounded-2xl bg-[#080810] flex flex-col items-center justify-center gap-1">
                      <span className="text-xs font-mono text-slate-500">{s.n}</span>
                      <s.icon className="w-7 h-7 text-white" strokeWidth={1.6} />
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2 text-base">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp demo strip */}
        <div className="mt-20 relative max-w-2xl mx-auto">
          <div className="glass-strong rounded-2xl border border-white/10 overflow-hidden p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              <div>
                <div className="text-sm font-medium text-white">NestPro Bot</div>
                <div className="text-xs text-green-400">WhatsApp · Online</div>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { side: "left", msg: "Hi! I&apos;d like to book a haircut for tomorrow." },
                {
                  side: "right",
                  msg: "Sure! We have slots at 10:00 AM, 12:30 PM, and 3:00 PM. Which works for you? 🗓️",
                },
                { side: "left", msg: "12:30 PM please!" },
                {
                  side: "right",
                  msg: "Booked ✅ — Haircut at 12:30 PM tomorrow. We&apos;ll remind you an hour before. See you soon!",
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.side === "right" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.side === "right"
                        ? "bg-green-600/25 text-green-100 rounded-tr-sm border border-green-500/20"
                        : "bg-white/6 text-slate-300 rounded-tl-sm border border-white/5"
                    }`}
                    dangerouslySetInnerHTML={{ __html: m.msg }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
