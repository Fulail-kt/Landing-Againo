import Link from "next/link";
import { Scissors, ArrowLeft, Shield, Lock, Eye, Database, Bell, UserCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — NestPro",
  description: "How NestPro collects, uses, and protects your personal data.",
};

const sections = [
  {
    id: "overview",
    icon: Shield,
    title: "Overview",
    content: `NestPro ("we", "our", "us") is committed to protecting the privacy of salon owners, studio managers, staff members, and their clients. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data. By using NestPro, you agree to the practices described here. If you do not agree, please discontinue use of the platform.`,
  },
  {
    id: "data-collected",
    icon: Database,
    title: "Information We Collect",
    content: null,
    subsections: [
      {
        subtitle: "Account & Business Information",
        text: "When you create a NestPro account we collect your name, email address, phone number, business name, business address, and industry type (salon or gym). This is necessary to create and manage your account.",
      },
      {
        subtitle: "Client Data",
        text: "You may enter client names, phone numbers, visit history, service notes, and photos into NestPro on behalf of your clients. You are the data controller for this information. We process it on your behalf as a data processor.",
      },
      {
        subtitle: "WhatsApp Integration",
        text: "When you connect a WhatsApp Business account, we store your WhatsApp Business number and API credentials (encrypted). Message content sent through our automation flows is processed to deliver booking confirmations and reminders — we do not read or store the body of personal conversations.",
      },
      {
        subtitle: "Usage Data",
        text: "We collect anonymised telemetry data (page views, feature usage, error logs) to improve the product. This data does not identify individuals.",
      },
      {
        subtitle: "Payment Data",
        text: "We do not store your full card details. Payments are processed by our certified payment processors. We only store a transaction reference for billing purposes.",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: Eye,
    title: "How We Use Your Information",
    content: null,
    bullets: [
      "Provide, operate, and improve the NestPro platform",
      "Send booking confirmations, reminders, and service notifications via WhatsApp or SMS",
      "Process payments and manage subscriptions",
      "Respond to support requests and troubleshoot issues",
      "Send product updates and feature announcements (opt-out available at any time)",
      "Comply with legal obligations",
      "Detect and prevent fraud, abuse, or misuse of the platform",
    ],
  },
  {
    id: "data-sharing",
    icon: UserCheck,
    title: "Data Sharing & Third Parties",
    content: `We do not sell, rent, or trade your personal information to third parties. We share data only as follows:`,
    bullets: [
      "Service providers who help us operate NestPro (cloud hosting, analytics, payment processing) — bound by strict data processing agreements",
      "WhatsApp / Meta, when you use the WhatsApp integration — subject to Meta's own privacy policies",
      "Law enforcement or regulators, when required by applicable law",
      "In the event of a merger or acquisition, your data would be transferred to the successor entity subject to equivalent privacy commitments",
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    content: `We take security seriously and implement industry-standard technical and organisational measures to protect your data. These include: TLS encryption for all data in transit, AES-256 encryption for sensitive data at rest, access controls and audit logs, regular security reviews, and penetration testing. No method of transmission over the internet is 100% secure — while we strive to protect your data, we cannot guarantee absolute security.`,
  },
  {
    id: "data-retention",
    icon: Database,
    title: "Data Retention",
    content: `We retain your account data for as long as your account is active or as needed to provide services. If you close your account, we delete your personal data within 30 days, except where we are required to retain it for legal or regulatory purposes. Anonymised, aggregated analytics data may be retained indefinitely as it cannot identify you.`,
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:`,
    bullets: [
      "Access — request a copy of the data we hold about you",
      "Correction — request correction of inaccurate data",
      "Deletion — request deletion of your data ('right to be forgotten')",
      "Portability — receive your data in a structured, machine-readable format",
      "Objection — object to certain types of processing",
      "Restriction — request we limit how we use your data",
      "Withdraw consent — where processing is based on consent, withdraw it at any time",
    ],
    footer: "To exercise any of these rights, contact us at privacy@nestpro.app. We will respond within 30 days.",
  },
  {
    id: "cookies",
    icon: Bell,
    title: "Cookies & Tracking",
    content: `NestPro uses strictly necessary cookies to keep you logged in and maintain session state. We use anonymised analytics cookies (with no cross-site tracking) to understand how the product is used. We do not use advertising or behavioural tracking cookies. You can manage cookies through your browser settings at any time.`,
  },
  {
    id: "children",
    icon: Shield,
    title: "Children's Privacy",
    content: `NestPro is not intended for use by children under 16 years of age. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us immediately and we will delete it.`,
  },
  {
    id: "changes",
    icon: Bell,
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page and notify you via email or in-app notification for material changes. Your continued use of NestPro after changes constitutes acceptance of the updated policy.`,
  },
  {
    id: "contact",
    icon: UserCheck,
    title: "Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:`,
    contact: {
      email: "privacy@nestpro.app",
      address: "NestPro Technologies, Kerala, India",
      response: "We aim to respond within 2 business days.",
    },
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080810]">
      {/* Header */}
      <div className="relative border-b border-white/5">
        <div className="absolute inset-0 bg-hero-glow opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-lg shadow-brand-500/20">
              <Scissors className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Nest<span className="gradient-text-brand">Pro</span>
            </span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-500/15 border border-brand-500/20 flex items-center justify-center flex-shrink-0 mt-1">
              <Shield className="w-6 h-6 text-brand-400" strokeWidth={1.8} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                Privacy Policy
              </h1>
              <p className="text-slate-400">
                Last updated: <span className="text-slate-300">October 19, 2026</span>
                {" · "}
                Effective: <span className="text-slate-300">October 19, 2026</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <div className="glass border border-white/6 rounded-2xl p-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                  Contents
                </p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-xs text-slate-500 hover:text-white py-1 px-2 rounded-lg hover:bg-white/5 transition-all truncate"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3 space-y-12">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/15 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-4 h-4 text-brand-400" strokeWidth={1.8} />
                  </div>
                  <h2 className="text-xl font-bold text-white">{s.title}</h2>
                </div>

                {s.content && (
                  <p className="text-slate-400 leading-relaxed text-sm mb-4">{s.content}</p>
                )}

                {"subsections" in s && s.subsections && (
                  <div className="space-y-4">
                    {s.subsections.map((sub) => (
                      <div
                        key={sub.subtitle}
                        className="glass border border-white/5 rounded-xl p-5"
                      >
                        <h3 className="text-sm font-semibold text-white mb-2">{sub.subtitle}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{sub.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {"bullets" in s && s.bullets && (
                  <ul className="space-y-2 mt-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {"footer" in s && s.footer && (
                  <p className="text-sm text-slate-400 leading-relaxed mt-4 p-4 glass rounded-xl border border-brand-500/10">
                    {s.footer}
                  </p>
                )}

                {"contact" in s && s.contact && (
                  <div className="glass border border-white/6 rounded-xl p-6 mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-slate-500 w-20">Email</span>
                      <a
                        href={`mailto:${s.contact.email}`}
                        className="text-brand-400 hover:text-brand-300 transition-colors"
                      >
                        {s.contact.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-slate-500 w-20">Address</span>
                      <span className="text-slate-300">{s.contact.address}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-white/5">
                      {s.contact.response}
                    </p>
                  </div>
                )}
              </section>
            ))}

            {/* Footer note */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-xs text-slate-600 leading-relaxed">
                This privacy policy was last reviewed by our legal team on October 19, 2026. If you
                have questions about how we handle your data, we encourage you to contact us before
                raising a complaint with a data protection authority — we are committed to resolving
                concerns directly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <Link href="/" className="hover:text-slate-400 transition-colors">
            ← Back to NestPro
          </Link>
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} NestPro</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            <Link href="/privacy" className="text-slate-400">Privacy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
