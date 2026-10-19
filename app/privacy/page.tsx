import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Lock, Eye, Database, Bell, UserCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Againo",
  description: "How Againo collects, uses, and protects your personal data.",
};

const sections = [
  {
    id: "overview",
    icon: Shield,
    title: "Overview",
    body: "Againo ("we", "our", "us") is committed to protecting your privacy. This Policy explains what data we collect, how we use it, and your rights. By using Againo, you agree to the practices described here.",
  },
  {
    id: "data-collected",
    icon: Database,
    title: "Information We Collect",
    subsections: [
      { subtitle: "Account & Business Info", text: "Name, email, phone number, business name, address, and industry type (salon or gym) — required to create and manage your account." },
      { subtitle: "Client Data", text: "Client names, phone numbers, visit history, service notes, and photos you enter on behalf of your clients. You are the data controller; we process it on your behalf." },
      { subtitle: "WhatsApp Integration", text: "Your WhatsApp Business number and API credentials (stored encrypted). Message content is processed only to deliver bookings and reminders — we do not store personal conversation content." },
      { subtitle: "Usage Data", text: "Anonymised telemetry (page views, feature usage, errors) used to improve the product. Cannot identify individuals." },
      { subtitle: "Payment Data", text: "We do not store card details. Payments are handled by certified processors; we store only a transaction reference." },
    ],
  },
  {
    id: "how-we-use",
    icon: Eye,
    title: "How We Use Your Information",
    bullets: [
      "Provide, operate, and improve the Againo platform",
      "Send booking confirmations, reminders, and notifications via WhatsApp or SMS",
      "Process payments and manage subscriptions",
      "Respond to support requests and fix issues",
      "Send product updates (opt-out available anytime)",
      "Comply with legal obligations",
      "Detect and prevent fraud or abuse",
    ],
  },
  {
    id: "sharing",
    icon: UserCheck,
    title: "Data Sharing",
    body: "We do not sell or rent your data. We share only with:",
    bullets: [
      "Service providers operating Againo (hosting, analytics, payments) — bound by strict DPAs",
      "Meta/WhatsApp when you use the WhatsApp integration — subject to Meta's policies",
      "Law enforcement when required by applicable law",
      "Successors in a merger/acquisition under equivalent privacy commitments",
    ],
  },
  {
    id: "security",
    icon: Lock,
    title: "Data Security",
    body: "We use TLS for data in transit, AES-256 for data at rest, access controls, audit logs, and regular security reviews. No internet transmission is 100% secure, but we apply industry-standard measures throughout.",
  },
  {
    id: "retention",
    icon: Database,
    title: "Data Retention",
    body: "Account data is kept while your account is active. On account closure, personal data is deleted within 30 days (except where legally required to retain longer). Anonymised aggregate data may be kept indefinitely.",
  },
  {
    id: "rights",
    icon: UserCheck,
    title: "Your Rights",
    body: "Depending on your jurisdiction, you may:",
    bullets: [
      "Access — request a copy of data we hold about you",
      "Correction — request correction of inaccurate data",
      "Deletion — request deletion ('right to be forgotten')",
      "Portability — receive data in a machine-readable format",
      "Objection — object to certain processing",
      "Restriction — request limited use of your data",
      "Withdraw consent — where processing relies on consent",
    ],
    footer: "To exercise any right, email privacy@againo.app. We respond within 30 days.",
  },
  {
    id: "cookies",
    icon: Bell,
    title: "Cookies",
    body: "We use strictly necessary session cookies and anonymised analytics cookies (no cross-site tracking). No advertising or behavioural tracking cookies. Manage them via your browser settings.",
  },
  {
    id: "children",
    icon: Shield,
    title: "Children",
    body: "Againo is not intended for users under 16. We do not knowingly collect data from children. Contact us immediately if you believe a child has submitted data and we will delete it.",
  },
  {
    id: "changes",
    icon: Bell,
    title: "Policy Changes",
    body: "We may update this Policy. Material changes are communicated via email or in-app notice. Continued use after changes constitutes acceptance. The 'Last updated' date at the top reflects the current version.",
  },
  {
    id: "contact",
    icon: UserCheck,
    title: "Contact",
    body: "Questions or requests about this Policy:",
    contact: {
      email: "privacy@againo.app",
      address: "Againo Technologies, Kerala, India",
      response: "We aim to respond within 2 business days.",
    },
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#05050d]">

      {/* Page header */}
      <div className="relative border-b border-white/[0.05]">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(90,100,180,0.07) 0%, transparent 70%)" }} />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 relative">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-silver-600 hover:text-silver-300 transition-colors mb-10 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to Againo
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="relative w-8 h-8 rounded-xl overflow-hidden ring-1 ring-white/10">
              <Image src="/againo-icon.png" alt="Againo" fill className="object-cover" />
            </div>
            <span className="text-[15px] font-semibold silver-text tracking-[-0.01em]">Againo</span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
              style={{ background: "rgba(100,110,200,0.1)", border: "1px solid rgba(120,130,220,0.15)" }}>
              <Shield className="w-5 h-5" style={{ color: "#8899cc" }} strokeWidth={1.7} />
            </div>
            <div>
              <h1 className="font-display text-[34px] sm:text-[42px] font-semibold tracking-[-0.025em] text-white mb-2">
                Privacy Policy
              </h1>
              <p className="text-[13px] text-silver-600">
                Last updated: <span className="text-silver-400">October 19, 2026</span>
                {" · "}
                Effective: <span className="text-silver-400">October 19, 2026</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">

          {/* TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-10">
              <div className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <p className="text-[10px] font-semibold text-silver-600 uppercase tracking-[0.15em] mb-4">
                  Contents
                </p>
                <nav className="space-y-0.5">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-[12px] text-silver-600 hover:text-silver-300 py-1.5 px-2 rounded-lg hover:bg-white/[0.03] transition-all truncate"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Sections */}
          <div className="space-y-14">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(100,110,200,0.1)", border: "1px solid rgba(120,130,220,0.12)" }}>
                    <s.icon className="w-3.5 h-3.5" style={{ color: "#8899cc" }} strokeWidth={1.8} />
                  </div>
                  <h2 className="text-[18px] font-semibold text-white tracking-[-0.02em]">
                    {s.title}
                  </h2>
                </div>

                {"body" in s && s.body && (
                  <p className="text-[14px] text-silver-500 leading-relaxed mb-4">{s.body}</p>
                )}

                {"subsections" in s && s.subsections && (
                  <div className="space-y-3">
                    {s.subsections.map((sub) => (
                      <div key={sub.subtitle} className="rounded-xl p-5"
                        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                        <h3 className="text-[13px] font-semibold text-white/80 mb-2">{sub.subtitle}</h3>
                        <p className="text-[13px] text-silver-500 leading-relaxed">{sub.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {"bullets" in s && s.bullets && (
                  <ul className="space-y-2 mt-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-silver-500">
                        <span className="w-1 h-1 rounded-full bg-silver-600 mt-2.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {"footer" in s && s.footer && (
                  <p className="mt-4 text-[13px] text-silver-400 leading-relaxed px-4 py-3.5 rounded-xl"
                    style={{ background: "rgba(100,110,200,0.06)", border: "1px solid rgba(120,130,220,0.1)" }}>
                    {s.footer}
                  </p>
                )}

                {"contact" in s && s.contact && (
                  <div className="mt-4 rounded-xl p-6 space-y-3"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    {[
                      { label: "Email",   val: s.contact.email,   href: `mailto:${s.contact.email}` },
                      { label: "Address", val: s.contact.address,  href: null },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-4 text-[13px]">
                        <span className="w-16 text-silver-600 flex-shrink-0">{row.label}</span>
                        {row.href
                          ? <a href={row.href} className="text-[#8899cc] hover:text-[#aab8e8] transition-colors">{row.val}</a>
                          : <span className="text-silver-400">{row.val}</span>
                        }
                      </div>
                    ))}
                    <p className="text-[12px] text-silver-700 pt-2 border-t border-white/[0.04]">
                      {s.contact.response}
                    </p>
                  </div>
                )}
              </section>
            ))}

            <div className="pt-6 border-t border-white/[0.05]">
              <p className="text-[12px] text-silver-700 leading-relaxed">
                This policy was last reviewed October 19, 2026. Contact us before raising a complaint with a data protection authority — we are committed to resolving concerns directly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-white/[0.05] py-8">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-silver-700">
          <Link href="/" className="hover:text-silver-400 transition-colors">← Back to Againo</Link>
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Againo</span>
            <a href="#" className="hover:text-silver-400 transition-colors">Terms</a>
            <Link href="/privacy" className="text-silver-500">Privacy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
