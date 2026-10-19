import {
  CalendarDays,
  MessageCircle,
  Users,
  BarChart3,
  Scissors,
  Dumbbell,
  BellRing,
  CreditCard,
  Clock,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Smart Scheduling",
    desc: "Drag-and-drop appointment board with real-time chair/station availability. Never double-book again.",
    color: "from-brand-600 to-brand-400",
    glow: "shadow-brand-500/20",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Booking",
    desc: "Clients book directly via WhatsApp. Auto-confirmations, reminders, and rescheduling — zero friction.",
    color: "from-green-600 to-emerald-400",
    glow: "shadow-green-500/20",
  },
  {
    icon: Users,
    title: "Client Profiles",
    desc: "Full history: services, notes, photos, visit frequency, and lifetime spend per client.",
    color: "from-accent-600 to-accent-400",
    glow: "shadow-accent-500/20",
  },
  {
    icon: BellRing,
    title: "Smart Reminders",
    desc: "Automated reminders reduce no-shows by up to 60%. Sent via WhatsApp at the right time.",
    color: "from-orange-600 to-amber-400",
    glow: "shadow-orange-500/20",
  },
  {
    icon: BarChart3,
    title: "Revenue Analytics",
    desc: "Daily, weekly, and monthly breakdowns. See your top services, peak hours, and busiest staff.",
    color: "from-pink-600 to-rose-400",
    glow: "shadow-pink-500/20",
  },
  {
    icon: Clock,
    title: "Streak & Heatmap",
    desc: "Visualize client engagement over time with a GitHub-style heatmap. Spot drop-off before it happens.",
    color: "from-cyan-600 to-sky-400",
    glow: "shadow-cyan-500/20",
  },
];

const industries = [
  {
    icon: Scissors,
    title: "Salons & Barbershops",
    bullets: [
      "Per-chair scheduling",
      "Service menu with durations",
      "Stylist availability management",
      "Walk-in + pre-booked slots",
    ],
    color: "brand",
  },
  {
    icon: Dumbbell,
    title: "Fitness Studios & Gyms",
    bullets: [
      "Membership & programme tracking",
      "Class/session scheduling",
      "Member workout history",
      "Attendance streaks",
    ],
    color: "accent",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* bg accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-400 mb-4">
            Everything you need
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built for the way you{" "}
            <span className="gradient-text-brand">actually work</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            No bloated features you&apos;ll never use. Just the right tools, done right.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative p-6 rounded-2xl glass border border-white/6 hover:border-white/12 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-lg ${f.glow} group-hover:scale-110 transition-transform`}
              >
                <f.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Industry cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="relative p-8 rounded-2xl overflow-hidden glass border border-white/6 hover:border-white/10 transition-all"
            >
              <div
                className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
                  ind.color === "brand" ? "bg-brand-600/12" : "bg-accent-500/12"
                }`}
              />
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    ind.color === "brand"
                      ? "bg-brand-500/15 text-brand-400"
                      : "bg-accent-500/15 text-accent-400"
                  }`}
                >
                  <ind.icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{ind.title}</h3>
                <ul className="space-y-2.5">
                  {ind.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-slate-400 text-sm">
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          ind.color === "brand" ? "bg-brand-400" : "bg-accent-400"
                        }`}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
