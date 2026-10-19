import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arun Menon",
    role: "Blade & Brush Barbershop",
    avatar: "AM",
    body: "Againo cut my no-shows by half in the first month. The WhatsApp reminders just work — my guys don't even think about it anymore.",
    accent: "#7c8fd4",
  },
  {
    name: "Sneha Pillai",
    role: "GlowUp Salon, Kochi",
    avatar: "SP",
    body: "Setting up took 10 minutes. Now clients book their own slots on WhatsApp at midnight and it shows up on my board instantly.",
    accent: "#b07dd4",
  },
  {
    name: "Vikram Nair",
    role: "IronZone Gym",
    avatar: "VN",
    body: "The member tracking is brilliant. I can see who's dropping off before they actually cancel — and reach out just in time.",
    accent: "#5dabd4",
  },
  {
    name: "Divya Krishnan",
    role: "Zen Wellness Studio",
    avatar: "DK",
    body: "I was on spreadsheets before this. Againo is like having an admin person who never sleeps and never makes mistakes.",
    accent: "#5dbd8a",
  },
  {
    name: "Rohan Varma",
    role: "The Sharp Edge",
    avatar: "RV",
    body: "Analytics showed my 3 PM slot was always empty. I turned it into a discounted walk-in slot. Fully booked now.",
    accent: "#d4835d",
  },
  {
    name: "Ananya Suresh",
    role: "FitPulse Studio",
    avatar: "AS",
    body: "Members love that everything happens on WhatsApp. No app to download — that was honestly the deciding factor for us.",
    accent: "#d45d8a",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-36 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[12px] font-semibold text-silver-500 uppercase tracking-[0.15em] mb-4">
            Customer stories
          </p>
          <h2 className="font-display text-[40px] sm:text-[52px] font-semibold tracking-[-0.025em] text-white mb-5">
            Loved by <span className="silver-text">real businesses</span>
          </h2>
          <p className="max-w-sm mx-auto text-[16px] text-silver-500 leading-relaxed">
            Salons and studios across India trust Againo every day.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="break-inside-avoid p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {/* stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400/80 text-amber-400/80" />
                ))}
              </div>

              <p className="text-[13.5px] text-silver-400 leading-relaxed mb-5">
                &ldquo;{t.body}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                  style={{ background: `${t.accent}30`, border: `1px solid ${t.accent}40`, color: t.accent }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[13px] font-medium text-white/90">{t.name}</div>
                  <div className="text-[11px] text-silver-600">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
