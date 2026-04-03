import { Link } from "react-router";
import { useI18n } from "../i18n/useI18n";

const tierLabels = ["Tier 01", "Tier 02", "Tier 03"];
const planHighlighted = [false, true, false];

function PricingCard({ plan, highlighted, tierLabel, t }) {
  return (
    <div
      className={`p-10 flex flex-col justify-between relative transition-shadow duration-300 ${
        highlighted
          ? "bg-surface-high ring-1 ring-accent/30 z-10"
          : "bg-base hover:bg-surface-high"
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 right-0 bg-accent px-4 py-1">
          <span className="text-[0.6rem] font-black uppercase tracking-tighter text-on-primary">
            {t.pricing.recommended}
          </span>
        </div>
      )}

      <div>
        <div className="mb-8">
          <p
            className={`text-[0.6875rem] uppercase tracking-[0.15em] font-bold mb-2 ${
              highlighted ? "text-accent" : "text-muted"
            }`}
          >
            {tierLabel}
          </p>
          <h3 className="text-2xl font-bold text-heading uppercase tracking-tight">
            {plan.name}
          </h3>
        </div>

        <div className="mb-10">
          <span className="text-4xl font-black text-heading">{plan.price}</span>
          <div className="mt-2 text-sm text-accent font-medium">
            + {plan.monthly} {t.pricing.monthly}
          </div>
        </div>

        <ul className="space-y-5 mb-10">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-accent text-lg leading-none shrink-0 mt-0.5">
                check_circle
              </span>
              <span className="text-sm font-medium text-body-text">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/contact"
        className={`block text-center w-full py-4 text-[0.6875rem] font-bold uppercase tracking-widest transition-all duration-300 ${
          highlighted
            ? "bg-accent text-on-primary shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
            : "border border-outline-variant text-body-text hover:bg-accent hover:text-on-primary hover:border-accent"
        }`}
      >
        {t.pricing.choosePlan}
      </Link>
    </div>
  );
}

function Pricing() {
  const { t } = useI18n();

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <header className="mb-20">
          <div className="inline-block py-1 px-3 bg-surface-high border-l-2 border-accent mb-6">
            <span className="text-[0.6875rem] uppercase tracking-widest text-accent font-bold">
              {t.pricing.badge}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-heading mb-8 leading-[0.9] uppercase">
            {t.pricing.titleStart}
            <br />
            <span className="text-accent">{t.pricing.titleHighlight}</span>
          </h2>
          <p className="max-w-2xl text-muted text-lg font-light leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </header>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
          {t.pricing.plans.map((plan, i) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              highlighted={planHighlighted[i]}
              tierLabel={tierLabels[i]}
              t={t}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/20">
          {t.pricing.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-base p-6 border-l-2 border-accent/40"
            >
              <p className="text-[0.6875rem] uppercase tracking-widest text-muted mb-2">
                {stat.label}
              </p>
              <p className="text-3xl font-black text-heading">{stat.value}</p>
              <p className="text-[0.6rem] text-muted mt-1 uppercase">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-px bg-surface-high p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-accent/20">
          <div>
            <h3 className="text-3xl font-bold text-heading uppercase tracking-tight mb-2">
              {t.pricing.ctaTitle}
            </h3>
            <p className="text-muted text-sm">{t.pricing.ctaSubtitle}</p>
          </div>
          <Link
            to="/contact"
            className="px-10 py-5 bg-transparent border-2 border-heading text-heading font-black uppercase tracking-widest hover:bg-heading hover:text-base transition-all duration-300 whitespace-nowrap"
          >
            {t.pricing.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
