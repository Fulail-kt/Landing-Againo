import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: null,
    desc: "For solo operators just getting started.",
    highlight: false,
    features: ["1 chair / station", "50 bookings/month", "WhatsApp booking", "Client profiles", "Basic scheduling"],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/month",
    desc: "For growing shops that need more power.",
    highlight: true,
    badge: "Most popular",
    features: [
      "Unlimited chairs / stations",
      "Unlimited bookings",
      "WhatsApp reminders & automation",
      "Full client history & notes",
      "Revenue analytics",
      "Streak & heatmap views",
      "Multi-staff management",
      "Priority support",
    ],
    cta: "Get Pro",
  },
  {
    name: "Business",
    price: "₹2,499",
    period: "/month",
    desc: "Multi-location, custom branding, SLA support.",
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
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-36 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      {/* center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(90,100,180,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[12px] font-semibold text-silver-500 uppercase tracking-[0.15em] mb-4">
            Pricing
          </p>
          <h2 className="font-display text-[40px] sm:text-[52px] font-semibold tracking-[-0.025em] text-white mb-5">
            Simple,{" "}
            <span className="silver-text">transparent pricing</span>
          </h2>
          <p className="max-w-sm mx-auto text-[16px] text-silver-500 leading-relaxed">
            Start free, upgrade when ready. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${plan.highlight ? "md:-translate-y-4" : ""}`}
              style={plan.highlight
                ? {
                    background: "rgba(80,90,180,0.1)",
                    border: "1px solid rgba(120,130,220,0.25)",
                    boxShadow: "0 0 0 1px rgba(120,130,220,0.15), 0 20px 60px rgba(60,70,160,0.2)",
                  }
                : {
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }
              }
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #4a5cad, #7060c8)" }}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-7">
                <div className="text-[12px] font-semibold text-silver-600 uppercase tracking-[0.12em] mb-3">
                  {plan.name}
                </div>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-[36px] font-bold text-white tracking-[-0.03em] leading-none">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-silver-600 text-[14px] mb-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-[13px] text-silver-600">{plan.desc}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-silver-400">
                    <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-silver-500" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center px-5 py-3 rounded-xl text-[13.5px] font-semibold transition-all ${
                  plan.highlight
                    ? "text-white hover:-translate-y-0.5"
                    : "text-silver-300 hover:text-white hover:bg-white/[0.05]"
                }`}
                style={plan.highlight
                  ? {
                      background: "linear-gradient(135deg, #4a5cad, #7060c8)",
                      boxShadow: "0 4px 20px rgba(70,90,180,0.3)",
                    }
                  : { border: "1px solid rgba(255,255,255,0.08)" }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-[12px] text-silver-700 mt-8">
          All prices in INR · GST applicable · Cancel anytime
        </p>
      </div>
    </section>
  );
}
