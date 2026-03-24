import { useI18n } from "../i18n";

function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              {t.about.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading mb-6 leading-tight">
              {t.about.titleStart}
              <span className="text-accent">{t.about.titleHighlight}</span>
            </h2>
            <p className="text-body-text leading-relaxed mb-6">{t.about.p1}</p>
            <p className="text-body-text leading-relaxed mb-8">{t.about.p2}</p>
          </div>

          {/* Visual side */}
          <div className="relative">
            <div className="rounded-2xl bg-glass border border-glass-border backdrop-blur-md p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/15 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-heading font-semibold mb-1">
                    {t.about.card1Title}
                  </h3>
                  <p className="text-muted text-sm">{t.about.card1Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/15 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-heading font-semibold mb-1">
                    {t.about.card2Title}
                  </h3>
                  <p className="text-muted text-sm">{t.about.card2Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/15 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-heading font-semibold mb-1">
                    {t.about.card3Title}
                  </h3>
                  <p className="text-muted text-sm">{t.about.card3Desc}</p>
                </div>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -bottom-8 -right-8 w-[200px] h-[200px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
