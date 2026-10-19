import { Store, MessageCircle, CalendarCheck, TrendingUp } from "lucide-react";

const steps = [
  { n: "01", icon: Store,          title: "Set up your shop",    desc: "Add services, chairs, working hours, and staff in minutes.",             accent: "#7c8fd4" },
  { n: "02", icon: MessageCircle,  title: "Connect WhatsApp",    desc: "Clients book, confirm, and get reminders — all inside their chat.",       accent: "#5dbd8a" },
  { n: "03", icon: CalendarCheck,  title: "Manage your day",     desc: "Full day view. Approve walk-ins, reschedule on the fly, track no-shows.", accent: "#a07dd4" },
  { n: "04", icon: TrendingUp,     title: "Watch it grow",       desc: "Analytics show what's working. Retain more, fill more slots.",            accent: "#d4835d" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-36 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[12px] font-semibold text-silver-500 uppercase tracking-[0.15em] mb-4">
            Simple setup
          </p>
          <h2 className="font-display text-[40px] sm:text-[52px] font-semibold tracking-[-0.025em] text-white mb-5">
            Up and running in{" "}
            <span className="silver-text">5 minutes</span>
          </h2>
          <p className="max-w-sm mx-auto text-[16px] text-silver-500 leading-relaxed">
            No IT team. No onboarding calls. Just open it and go.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {/* connector (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px"
                  style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.06), transparent)" }} />
              )}

              <div className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${s.accent}15`, border: `1px solid ${s.accent}25` }}>
                    <s.icon className="w-5 h-5" style={{ color: s.accent }} strokeWidth={1.7} />
                  </div>
                  <span className="text-[11px] font-mono text-silver-600">{s.n}</span>
                </div>
                <h3 className="text-[15px] font-semibold text-white/90 mb-2 tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="text-[13px] text-silver-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp chat mockup */}
        <div className="max-w-lg mx-auto">
          <div className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10,12,20,0.9)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            {/* chat header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.05]"
              style={{ background: "rgba(255,255,255,0.025)" }}>
              <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-white/90">Againo Assistant</div>
                <div className="text-[11px] text-emerald-400">WhatsApp · online</div>
              </div>
            </div>

            {/* messages */}
            <div className="px-4 py-5 space-y-3">
              {[
                { side: "left",  text: "Hi! I'd like to book a haircut for tomorrow." },
                { side: "right", text: "Sure! Available slots tomorrow:\n• 10:00 AM\n• 12:30 PM\n• 3:00 PM\nWhich works for you? 🗓️" },
                { side: "left",  text: "12:30 PM please!" },
                { side: "right", text: "✅ Booked — Haircut at 12:30 PM tomorrow.\nWe'll remind you 1 hour before. See you soon!" },
              ].map((m, i) => (
                <div key={i} className={`flex ${m.side === "right" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[78%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed whitespace-pre-line"
                    style={m.side === "right"
                      ? { background: "rgba(70,120,80,0.25)", border: "1px solid rgba(70,150,90,0.2)", color: "#b8dbc0", borderTopRightRadius: 4 }
                      : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)", color: "#c8d4e0", borderTopLeftRadius: 4 }
                    }
                  >
                    {m.text}
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
