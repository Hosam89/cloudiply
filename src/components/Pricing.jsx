import { useI18n } from "../i18n";

const planHighlighted = [false, false, true];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-accent shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PricingCard({ plan, highlighted, t }) {
  return (
    <div
      className={`
        relative flex flex-col rounded-2xl p-8
        backdrop-blur-md border transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl
        ${
          highlighted
            ? "bg-surface border-accent/50 shadow-lg shadow-accent/20 scale-[1.02]"
            : "bg-glass border-glass-border shadow-lg shadow-black/20"
        }
      `}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-sm font-semibold rounded-full shadow-md">
          {t.pricing.recommended}
        </div>
      )}

      <h3 className="text-xl font-bold text-heading mb-1">{plan.name}</h3>
      <p className="text-muted text-sm mb-6">{plan.description}</p>

      <div className="mb-6">
        <span className="text-4xl font-extrabold text-heading">
          {plan.price}
        </span>
        <span className="block text-sm text-accent font-medium mt-1">
          + {plan.monthly} {t.pricing.monthly}
        </span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-body-text">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`
          block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300
          ${
            highlighted
              ? "bg-accent hover:bg-accent-hover text-white shadow-md shadow-accent/30"
              : "bg-surface hover:bg-surface-hover text-heading border border-surface-border"
          }
        `}
      >
        {t.pricing.choosePlan}
      </a>
    </div>
  );
}

function Pricing() {
  const { t } = useI18n();

  return (
    <section id="pricing" className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
            {t.pricing.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading mb-4">
            {t.pricing.titleStart}
            <span className="text-accent">{t.pricing.titleHighlight}</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {t.pricing.plans.map((plan, i) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              highlighted={planHighlighted[i]}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
