import { Link } from "react-router";
import { useI18n } from "../i18n/useI18n";

function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-6 overflow-hidden">
      {/* Background Monolith Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Skewed panel — top-right architectural accent */}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[120%] bg-surface-lowest border-l border-outline-variant/10 -skew-x-12" />
        {/* Vertical precision line */}
        <div className="absolute bottom-0 left-[10%] w-px h-1/2 bg-gradient-to-t from-accent/20 to-transparent" />
        {/* Horizontal precision line */}
        <div className="absolute top-1/4 right-1/4 w-32 h-px bg-accent/10" />
      </div>

      {/* Decorative image panel — xl screens only, sits behind content */}
      <div className="hidden xl:block absolute top-1/2 right-[-2rem] -translate-y-1/2 w-[32rem] h-[32rem] ghost-border bg-[#131b2e] p-4 z-0 pointer-events-none">
        <div className="w-full h-full relative border border-outline-variant/10 overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgWqQFRiBLEtbwlyMKJtZnu-G01N3l3UZvdKJaDMS4J_WPdBDvLVxWqeImMDGjLnR9worrKJOkFpDN_gQjlmy9nWC1BqgSfMwxVEiYaGW7UI4EjJBkyT_4ihrDcsi04i3vYeamxW0QWpeGYBgK4T8EddSN7hYTrvAkLeX4WtVRiFJGTfGu35mTIEkv_2frAPgPjplusAbTgcVBZN6xJwhVd8OnITpM79Q-hkd8mlWhMsU9LeKSVf7dxnLnIU3QJvsAdSz5cJzFE33a"
            alt="abstract architectural geometry of a modern glass skyscraper"
            className="w-full h-full object-cover grayscale opacity-40 mix-blend-screen"
          />
          {/* Left-to-transparent fade — blends panel into the dark bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-transparent to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-start lg:items-center text-left lg:text-center">
        {/* Technical tag */}
        <div className="mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-accent" />
          <span className="label-tag">{t.hero.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-white text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-6 w-full">
          {t.hero.titleStart}
          <br className="hidden lg:block" />
          <span className="text-accent">{t.hero.titleHighlight}</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-muted text-lg md:text-xl font-medium leading-relaxed mb-12 lg:mx-auto">
          {t.hero.subtitle}
        </p>

        {/* CTA cluster */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:justify-center">
          <Link
            to="/pricing"
            className="btn-primary monolith-glow w-full sm:w-auto px-10 py-5 text-center"
          >
            {t.hero.ctaPricing}
          </Link>
          <Link
            to="/services"
            className="btn-ghost w-full sm:w-auto px-10 py-5 flex items-center justify-center gap-2"
          >
            {t.hero.ctaLearnMore}
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Stats bar — gap-1 + p-px so parent bg bleeds through as hairline separators */}
        <div className="mt-24 w-full grid grid-cols-1 md:grid-cols-3 gap-px p-px border border-outline-variant/20 bg-outline-variant/10">
          {/* Stat 1 */}
          <div className="bg-[#0b1326] p-8">
            <div className="label-tag mb-2">Build Stability</div>
            <div className="text-4xl font-bold text-white tracking-tighter">
              99.9%
            </div>
            <div className="mt-4 w-full h-1 bg-surface-high">
              <div className="w-[99.9%] h-full bg-accent" />
            </div>
          </div>
          {/* Stat 2 */}
          <div className="bg-[#0b1326] p-8">
            <div className="label-tag mb-2">Global Nodes</div>
            <div className="text-4xl font-bold text-white tracking-tighter">
              24/7
            </div>
            <div className="mt-4 flex gap-1">
              <div className="w-2 h-2 bg-accent" />
              <div className="w-2 h-2 bg-accent" />
              <div className="w-2 h-2 bg-accent" />
              <div className="w-2 h-2 bg-outline-variant/40" />
            </div>
          </div>
          {/* Stat 3 */}
          <div className="bg-[#0b1326] p-8">
            <div className="label-tag mb-2">Core Tech Stack</div>
            <div className="text-4xl font-bold text-white tracking-tighter">
              NEXT.GEN
            </div>
            <div className="mt-4 text-[0.625rem] font-mono text-accent/60 tracking-widest">
              PRCSN_ENGINE_V4.0.12
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
