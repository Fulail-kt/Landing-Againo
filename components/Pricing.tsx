import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    desc: "Perfect for solo operators just getting started.",
    highlight: false,
    features: [
      "1 chair / station",
      "Up to 50 bookings/month",
      "WhatsApp booking",
      "Client profiles",
      "Basic scheduling board",
    ],
    cta: "Start free",
    ctaHref: "#",
  },
  {
    name: "Pro",
    price: "₹999",
    period: "per month",
    desc: "For growing shops that need more power and insights.",
    highlight: true,
    badge: "Most popular",
    features: [
      "Unlimited chairs / stations",
      "Unlimited bookings",
      "WhatsApp reminders & automation",
      "Full client history & notes",
      "Revenue analytics dashboard",
      "Streak & heatmap views",
      "Multi-staff management",
      "Priority support",
    ],
    cta: "Get Pro — ₹999/mo",
    ctaHref: "#",
  },
  {
    name: "Business",
    price: "₹2,499",
    period: "per month",
    desc: "Multi-location, custom branding, and dedicated support.",
    highlight: false,
    features: [
      "Everything in Pro",
      "Up to 5 locations",
      "Custom WhatsApp sender name",
      "Bulk client messaging",
      "Advanced reports & exports",
      "Dedicated onboarding",
      "SLA-backed support",
    ],
    cta: "Talk to us",
    ctaHref: "#",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-medium text-green-400 mb-4">
            <Zap className="w-3 h-3" />
            Simple pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Pay for what you{" "}
            <span className="gradient-text-brand">actually use</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg">
            No hidden fees. Cancel anytime. Start free, upgrade when ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all ${
                plan.highlight
                  ? "bg-gradient-to-b from-brand-600/20 to-accent-600/10 border border-brand-500/40 shadow-2xl shadow-brand-500/15 md:-translate-y-4"
                  : "glass border border-white/6 hover:border-white/10"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-600 to-accent-600 text-white text-xs font-semibold shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <div className="text-sm font-medium text-slate-400 mb-1">{plan.name}</div>
                <div className="flex items-end gap-1.5 mb-2">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  {plan.price !== "Free" && (
                    <span className="text-slate-500 text-sm mb-1.5">/ {plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-slate-500">{plan.desc}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-brand-400" : "text-slate-500"
                      }`}
                      strokeWidth={2.5}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`block text-center px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-r from-brand-600 to-accent-600 text-white hover:from-brand-500 hover:to-accent-500 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40"
                    : "glass border border-white/10 text-white hover:bg-white/8"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-600 mt-8">
          All prices in INR. GST applicable. Cancel anytime, no questions asked.
        </p>
      </div>
    </section>
  );
}
