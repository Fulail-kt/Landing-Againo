"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Features",    href: "#features" },
  { label: "How It Works",href: "#how-it-works" },
  { label: "Pricing",     href: "#pricing" },
  { label: "Reviews",     href: "#testimonials" },
];

export function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/[0.05] shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-white/20 transition-all shadow-lg shadow-black/40">
              <Image src="/againo-icon.png" alt="Againo" fill className="object-cover" />
            </div>
            <span className="text-[17px] font-semibold tracking-[-0.01em] silver-text">
              Againo
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-[13.5px] font-medium text-silver-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-200 tracking-[-0.01em]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#"
              className="px-4 py-2 text-[13.5px] font-medium text-silver-500 hover:text-silver-300 transition-colors"
            >
              Sign in
            </a>
            <a
              href="#pricing"
              className="px-5 py-2.5 text-[13.5px] font-semibold rounded-xl text-ink-50 transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #5a6bbf 0%, #7c6dcc 100%)",
                boxShadow: "0 0 0 1px rgba(120,130,220,0.3), 0 4px 20px rgba(80,90,180,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 0 1px rgba(140,150,230,0.5), 0 4px 28px rgba(100,110,200,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 0 1px rgba(120,130,220,0.3), 0 4px 20px rgba(80,90,180,0.25)";
              }}
            >
              Get started free
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-silver-500 hover:text-white hover:bg-white/[0.05] transition-all"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/[0.05]">
          <div className="max-w-6xl mx-auto px-5 py-4 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-silver-400 hover:text-white rounded-xl hover:bg-white/[0.04] transition-all"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 mt-3 border-t border-white/[0.05]">
              <a
                href="#pricing"
                className="block text-center px-5 py-3 text-sm font-semibold rounded-xl text-white"
                style={{ background: "linear-gradient(135deg, #5a6bbf 0%, #7c6dcc 100%)" }}
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
