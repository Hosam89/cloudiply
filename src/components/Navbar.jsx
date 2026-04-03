import { useState } from "react";
import { useI18n } from "../i18n/useI18n";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    /* Stitch: bg-slate-950/70 backdrop-blur-3xl, no bottom border */
    <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-3xl">
      <div className="mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo — text only, matching Stitch exactly */}
        <a
          href="#home"
          className="text-2xl font-black tracking-tighter text-slate-100"
        >
          Cloudiply
        </a>

        {/* Desktop nav links — tracking-tight, normal case, slate-400 */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="tracking-tight leading-none text-slate-400 hover:text-slate-100 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — direct child like Stitch, always visible on desktop, hidden on mobile (hamburger handles it) */}
        <a
          href="#contact"
          className="hidden md:inline-flex primary-gradient text-on-primary font-bold px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-95 active:scale-90"
        >
          {t.nav.cta}
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-400 hover:text-slate-100 p-2 transition-colors"
          aria-label="Menü öffnen"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu — same glass surface */}
      {open && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-3xl border-t border-slate-800/50">
          <ul className="flex flex-col px-8 py-6 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 tracking-tight text-slate-400 hover:text-slate-100 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-slate-800/50">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center primary-gradient text-on-primary font-bold px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-95 active:scale-90"
              >
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
