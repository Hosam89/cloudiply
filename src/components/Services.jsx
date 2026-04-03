import { useEffect, useRef } from "react";
import { animate, stagger } from "motion";
import { useI18n } from "../i18n/useI18n";
import servicesBg from "../assets/services.png";

const serviceConfig = [
  { icon: "terminal", status: "System Status: Active" },
  { icon: "query_stats", status: "Metric: Authority" },
  { icon: "speed", status: "Execution: < 100ms" },
  { icon: "insights", status: "Data Level: Precise" },
  { icon: "ads_click", status: "Goal: Max ROI" },
  { icon: "gavel", status: "Standard: GDPR Compliance" },
];

function Services() {
  const { t } = useI18n();
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".service-card");
    if (!cards?.length) return;

    const DURATION = 2.4;
    const controls = animate(
      cards,
      {
        borderColor: [
          "rgba(59,73,76,0.15)",
          "#00e5ff",
          "#00e5ff",
          "rgba(59,73,76,0.15)",
        ],
        boxShadow: [
          "0 0 0px 0px rgba(0,229,255,0)",
          "0 0 28px 8px rgba(0,229,255,0.6)",
          "0 0 28px 8px rgba(0,229,255,0.6)",
          "0 0 0px 0px rgba(0,229,255,0)",
        ],
      },
      {
        duration: DURATION,
        delay: stagger(DURATION),
        repeat: Infinity,
        // wait for all remaining cards to finish before looping back
        repeatDelay: (cards.length - 1) * DURATION,
        ease: "ease-in-out",
      },
    );

    return () => controls.stop();
  }, []);

  return (
    <section className="px-8 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <header className="mb-20 border-l-2 border-accent pl-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-accent">
              {t.services.badge}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-heading mb-6 uppercase leading-[0.9]">
            {t.services.titleStart}
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px #00e5ff" }}
            >
              {t.services.titleHighlight}
            </span>
            {t.services.titleEnd || ""}
          </h2>
          <p className="max-w-xl text-muted text-lg leading-relaxed">
            {t.services.subtitle}
          </p>
        </header>

        {/* ── Bento grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
        >
          {t.services.items.map((service, i) => (
            <div
              key={service.title}
              className="service-card group bg-glass border border-surface-border/50 p-10 hover:bg-surface transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated left accent line */}
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-accent group-hover:h-full transition-all duration-500" />

              <div className="mb-8">
                <span className="material-symbols-outlined text-accent text-[2rem] leading-none select-none">
                  {serviceConfig[i].icon}
                </span>
              </div>

              <h3 className="text-heading font-bold text-xl mb-4 tracking-tight uppercase">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="flex items-center gap-2 mt-auto">
                <span className="text-[0.625rem] font-bold uppercase tracking-widest text-accent">
                  {serviceConfig[i].status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Featured tech stack ── */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 items-stretch gap-0 border border-surface-border">
          <div className="lg:col-span-7 bg-glass p-12 lg:p-20">
            <h3 className="text-3xl font-black text-heading mb-8 tracking-tight uppercase leading-none">
              Technology Stack &amp; Innovation
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-accent mb-2">
                  Frameworks
                </div>
                <p className="text-muted text-sm">
                  Next.js, Tailwind CSS, Headless Architectures
                </p>
              </div>
              <div>
                <div className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-accent mb-2">
                  Cloud
                </div>
                <p className="text-muted text-sm">
                  AWS, Vercel, Edge Computing
                </p>
              </div>
            </div>
            <div className="mt-12">
              <button className="group/btn flex items-center gap-4 cursor-pointer">
                <span className="h-px w-12 bg-accent group-hover/btn:w-20 transition-all duration-300" />
                <span className="text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-heading">
                  Full Stack Overview
                </span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[260px] bg-surface-lowest overflow-hidden">
            {/* Background image */}
            <img
              src={servicesBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 contrast-125"
            />
            {/* Cyan tint overlay */}
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
            <div className="absolute bottom-8 left-8 p-6 bg-glass backdrop-blur-md border-l-2 border-accent">
              <div className="text-2xl font-black text-heading tracking-tight">
                99.9%
              </div>
              <div className="text-[0.625rem] font-bold uppercase tracking-widest text-accent">
                Uptime Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
