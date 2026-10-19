"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Scissors } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/5 shadow-2xl shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-shadow">
              <Scissors className="w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              Nest<span className="gradient-text-brand">Pro</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-150"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              Sign in
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-brand-600 to-accent-600 text-white hover:from-brand-500 hover:to-accent-500 transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40"
            >
              Get started free
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-white/5 flex flex-col gap-2">
              <a
                href="#pricing"
                className="text-sm font-medium px-4 py-3 rounded-lg bg-gradient-to-r from-brand-600 to-accent-600 text-white text-center"
              >
                Get started free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
