import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arun Menon",
    role: "Owner, Blade & Brush Barbershop",
    avatar: "AM",
    color: "from-brand-600 to-brand-400",
    body: "NestPro cut my no-shows by half in the first month. The WhatsApp reminders just work. My guys don't even have to think about it.",
    stars: 5,
  },
  {
    name: "Sneha Pillai",
    role: "Manager, GlowUp Salon",
    avatar: "SP",
    color: "from-pink-600 to-rose-400",
    body: "Setting up took 10 minutes. Now my clients book their own slots on WhatsApp at midnight and it all just shows up on the board.",
    stars: 5,
  },
  {
    name: "Vikram Nair",
    role: "Owner, IronZone Gym",
    avatar: "VN",
    color: "from-accent-600 to-accent-400",
    body: "The member tracking is brilliant. I can see who&apos;s dropping off before they actually cancel, and reach out just in time.",
    stars: 5,
  },
  {
    name: "Divya Krishnan",
    role: "Founder, Zen Wellness Studio",
    avatar: "DK",
    color: "from-emerald-600 to-emerald-400",
    body: "I was on spreadsheets before this. NestPro is like having an admin person who never sleeps and never makes mistakes.",
    stars: 5,
  },
  {
    name: "Rohan Varma",
    role: "Owner, The Sharp Edge",
    avatar: "RV",
    color: "from-orange-600 to-amber-400",
    body: "Revenue analytics showed me my 3 PM slot was always empty. I turned it into a discounted walk-in slot. Fully booked now.",
    stars: 5,
  },
  {
    name: "Ananya Suresh",
    role: "Co-founder, FitPulse Studio",
    avatar: "AS",
    color: "from-cyan-600 to-sky-400",
    body: "Members love that everything happens on WhatsApp. They don&apos;t need to download anything. Honestly that was the deciding factor for us.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs font-medium text-yellow-400 mb-4">
            ★★★★★ Loved by owners
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Real results,{" "}
            <span className="gradient-text-brand">real businesses</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            Salons and studios across India trust NestPro to run their operations.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="break-inside-avoid glass border border-white/6 rounded-2xl p-6 hover:border-white/10 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              {/* Quote */}
              <p
                className="text-sm text-slate-300 leading-relaxed mb-5"
                dangerouslySetInnerHTML={{ __html: `"${t.body}"` }}
              />
              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
