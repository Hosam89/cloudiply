import { useI18n } from "../i18n";

function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pt-28 pb-24 sm:pt-36 sm:pb-32"
    >
      {/* Background glows */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
          {t.hero.badge}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-heading mb-6 leading-tight">
          {t.hero.titleStart}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">
            {t.hero.titleHighlight}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-body-text max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl text-lg transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5"
          >
            {t.hero.ctaPricing}
          </a>
          <a
            href="#about"
            className="inline-block px-8 py-4 bg-surface hover:bg-surface-hover text-heading font-semibold rounded-xl text-lg transition-all duration-300 border border-surface-border"
          >
            {t.hero.ctaLearnMore}
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-faint text-sm">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {t.hero.trustGdpr}
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            {t.hero.trustSpeed}
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            {t.hero.trustResponsive}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
