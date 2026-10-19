import Link from "next/link";
import Image from "next/image";

const cols = {
  Product: [
    { label: "Features",      href: "#features" },
    { label: "How It Works",  href: "#how-it-works" },
    { label: "Pricing",       href: "#pricing" },
    { label: "Reviews",       href: "#testimonials" },
  ],
  Company: [
    { label: "About",    href: "#" },
    { label: "Blog",     href: "#" },
    { label: "Careers",  href: "#" },
    { label: "Contact",  href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy",  href: "/privacy" },
    { label: "Terms of Service",href: "#" },
    { label: "Cookie Policy",   href: "#" },
    { label: "Refund Policy",   href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="relative w-8 h-8 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                <Image src="/againo-icon.png" alt="Againo" fill className="object-cover" />
              </div>
              <span className="text-[16px] font-semibold tracking-[-0.01em] silver-text">
                Againo
              </span>
            </Link>
            <p className="text-[13px] text-silver-600 leading-relaxed max-w-[200px] mb-5">
              The all-in-one platform for salons and fitness studios. Built in India.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-[11px] font-semibold text-silver-600 uppercase tracking-[0.12em] mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-silver-600 hover:text-silver-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-silver-700">
          <p>© {new Date().getFullYear()} Againo. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-silver-400 transition-colors">Privacy</Link>
            <a href="#" className="hover:text-silver-400 transition-colors">Terms</a>
            <span className="flex items-center gap-1">
              Made with <span className="text-red-500/70 mx-0.5">♥</span> in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
