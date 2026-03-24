import { useState } from "react";
import { useI18n } from "../i18n";
import { useTheme } from "../theme";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-nav border-b border-nav-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-purple-400 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-accent/30">
            C
          </div>
          <span className="text-xl font-bold tracking-tight text-heading">
            Cloudiply
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted hover:text-heading transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-surface border border-surface-border text-muted hover:text-heading hover:bg-surface-hover transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-lg bg-surface border border-surface-border text-sm font-medium text-muted hover:text-heading hover:bg-surface-hover transition-all"
          >
            {lang === "de" ? "EN" : "DE"}
          </button>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="px-5 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-md shadow-accent/25"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-heading p-2"
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-nav-border bg-nav backdrop-blur-lg">
          <ul className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-muted hover:text-heading hover:bg-surface transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 flex gap-2">
              <button
                onClick={toggleTheme}
                className="py-2.5 px-3 rounded-lg bg-surface border border-surface-border text-muted font-medium"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
              <button
                onClick={toggleLang}
                className="flex-1 text-center py-2.5 px-3 rounded-lg bg-surface border border-surface-border text-muted font-medium"
              >
                {lang === "de" ? "EN" : "DE"}
              </button>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-2.5 px-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-all"
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
