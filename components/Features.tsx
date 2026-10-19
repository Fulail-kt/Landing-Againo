import { CalendarDays, MessageCircle, Users, BarChart3, BellRing, Clock, Scissors, Dumbbell } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Smart Scheduling",
    desc: "Drag-and-drop appointment board with real-time chair availability. Never double-book again.",
    accent: "#7c8fd4",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Booking",
    desc: "Clients book directly in WhatsApp. Confirmations, reminders, rescheduling — all automated.",
    accent: "#5dbd8a",
  },
  {
    icon: Users,
    title: "Client Profiles",
    desc: "Full history: services, notes, visit frequency, and lifetime spend — per client.",
    accent: "#a07dd4",
  },
  {
    icon: BellRing,
    title: "Smart Reminders",
    desc: "Automated WhatsApp reminders cut no-shows by up to 60% with zero manual effort.",
    accent: "#d48a5d",
  },
  {
    icon: BarChart3,
    title: "Revenue Analytics",
    desc: "Daily and monthly breakdowns. Top services, peak hours, and staff performance at a glance.",
    accent: "#d45d8a",
  },
  {
    icon: Clock,
    title: "Engagement Heatmap",
    desc: "GitHub-style heatmap shows client visit patterns. Spot drop-off before it costs you.",
    accent: "#5dabd4",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-36 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[12px] font-semibold text-silver-500 uppercase tracking-[0.15em] mb-4">
            Everything you need
          </p>
          <h2 className="font-display text-[40px] sm:text-[52px] font-semibold tracking-[-0.025em] text-white mb-5 text-balance">
            Built for the way you{" "}
            <span className="silver-text">actually work</span>
          </h2>
          <p className="max-w-md mx-auto text-[16px] text-silver-500 leading-relaxed">
            No bloat. Just the right tools, executed perfectly.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.09)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.038)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.025)";
              }}
            >
              {/* top accent line */}
              <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${f.accent}60, transparent)` }} />

              <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                style={{ background: `${f.accent}15`, border: `1px solid ${f.accent}25` }}>
                <f.icon className="w-5 h-5" style={{ color: f.accent }} strokeWidth={1.7} />
              </div>
              <h3 className="text-[15px] font-semibold text-white/90 mb-2.5 tracking-[-0.01em]">
                {f.title}
              </h3>
              <p className="text-[13.5px] text-silver-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Industry split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              icon: Scissors,
              label: "Salons & Barbershops",
              items: ["Per-chair scheduling", "Service menu with durations", "Stylist availability", "Walk-ins + pre-booked slots"],
              accent: "#7c8fd4",
            },
            {
              icon: Dumbbell,
              label: "Fitness Studios & Gyms",
              items: ["Membership & programme tracking", "Class / session scheduling", "Member workout history", "Attendance streaks"],
              accent: "#a07dd4",
            },
          ].map((ind) => (
            <div key={ind.label} className="relative p-8 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* corner glow */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                style={{ background: `${ind.accent}0f`, transform: "translate(30%, -30%)" }} />

              <div className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center"
                style={{ background: `${ind.accent}12`, border: `1px solid ${ind.accent}20` }}>
                <ind.icon className="w-6 h-6" style={{ color: ind.accent }} strokeWidth={1.6} />
              </div>
              <h3 className="text-[18px] font-semibold text-white/90 mb-5 tracking-[-0.02em]">
                {ind.label}
              </h3>
              <ul className="space-y-3">
                {ind.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[13.5px] text-silver-500">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: ind.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
