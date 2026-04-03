import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { useI18n } from "../i18n/useI18n";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  const navLinks = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.work, to: "/work" },
    { label: t.nav.services, to: "/services" },
    { label: t.nav.pricing, to: "/pricing" },
    { label: t.nav.company, to: "/contact" },
  ];

  return (
    /* Stitch: bg-[#0F172A]/60 backdrop-blur-xl, border-b */
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 bg-[#0F172A]/60 backdrop-blur-xl border-b border-[#3b494c]/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
    >
      <div className="mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo — text only, matching Stitch exactly */}
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-slate-100"
        >
          Cloudiply
        </Link>

        {/* Desktop nav links — tracking-tight, normal case, slate-400 */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="tracking-tight leading-none text-slate-400 hover:text-slate-100 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA — direct child like Stitch, always visible on desktop, hidden on mobile (hamburger handles it) */}
        <Link
          to="/contact"
          className="hidden md:inline-flex primary-gradient text-on-primary font-bold px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-95 active:scale-90"
        >
          {t.nav.cta}
        </Link>

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
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 tracking-tight text-slate-400 hover:text-slate-100 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-slate-800/50">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center primary-gradient text-on-primary font-bold px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-95 active:scale-90"
              >
                {t.nav.cta}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
