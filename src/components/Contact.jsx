import { useState, useEffect, useRef } from "react";
import { animate, stagger } from "motion";
import { useI18n } from "../i18n/useI18n";
import hosamImg from "../assets/hosam.jpg";

function Contact() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".contact-card");
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
        repeatDelay: (cards.length - 1) * DURATION,
        ease: "ease-in-out",
      },
    );

    return () => controls.stop();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        setError(true);
      }
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="px-8 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto">
        {/* ── Company Section ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Company Text */}
          <div>
            <div className="inline-block py-1 px-3 bg-surface-high ghost-border mb-6">
              <span className="label-tag">{t.about.badge}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-heading uppercase leading-[0.95] mb-8">
              {t.about.titleStart}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #00e5ff" }}
              >
                {t.about.titleHighlight}
              </span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">{t.about.p1}</p>
            <p className="text-muted leading-relaxed">{t.about.p2}</p>
          </div>

          {/* Feature Tiles */}
          <div ref={cardsRef} className="space-y-4">
            {/* Card 1 */}
            <div className="contact-card bg-surface-high ghost-border p-6 flex items-start gap-5">
              <div className="w-10 h-10 bg-surface-lowest ghost-border flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-xl text-accent">
                  lightbulb
                </span>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[0.6875rem] text-heading mb-1">
                  {t.about.card1Title}
                </h4>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {t.about.card1Desc}
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="contact-card bg-surface-high ghost-border p-6 flex items-start gap-5">
              <div className="w-10 h-10 bg-surface-lowest ghost-border flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-xl text-accent">
                  code
                </span>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[0.6875rem] text-heading mb-1">
                  {t.about.card2Title}
                </h4>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {t.about.card2Desc}
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="contact-card bg-surface-high ghost-border p-6 flex items-start gap-5">
              <div className="w-10 h-10 bg-surface-lowest ghost-border flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-xl text-accent">
                  groups
                </span>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[0.6875rem] text-heading mb-1">
                  {t.about.card3Title}
                </h4>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {t.about.card3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mb-20 h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />

        {/* ── Contact Header ── */}
        <header className="mb-20">
          <div className="inline-block py-1 px-3 bg-surface-high ghost-border mb-4">
            <span className="label-tag">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-heading uppercase leading-[0.95] mb-6">
            {t.contact.title}
          </h2>
          <p className="text-muted max-w-2xl text-lg font-light leading-relaxed">
            {t.contact.subtitle}
          </p>
        </header>

        {/* ── Main Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <section className="lg:col-span-7 bg-surface-high ghost-border relative overflow-hidden p-8 flex flex-col">
            {/* Decorative terminal icon */}
            <div className="absolute top-0 right-0 p-4 pointer-events-none select-none">
              <span className="material-symbols-outlined text-6xl text-accent/20">
                terminal
              </span>
            </div>

            <h3 className="text-xl font-bold uppercase tracking-widest mb-8 border-l-2 border-accent pl-4">
              Contact Protocol
            </h3>

            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 ghost-border flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-accent">
                    check_circle
                  </span>
                </div>
                <h4 className="text-xl font-bold text-heading uppercase tracking-widest mb-2">
                  {t.contact.successTitle}
                </h4>
                <p className="text-muted">{t.contact.successText}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 flex flex-col flex-1"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block font-bold text-[0.6875rem] uppercase tracking-widest text-muted"
                    >
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full bg-surface-lowest border border-outline-variant/20 px-4 py-3 text-heading placeholder:text-faint focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block font-bold text-[0.6875rem] uppercase tracking-widest text-muted"
                    >
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full bg-surface-lowest border border-outline-variant/20 px-4 py-3 text-heading placeholder:text-faint focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block font-bold text-[0.6875rem] uppercase tracking-widest text-muted"
                  >
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full bg-surface-lowest border border-outline-variant/20 px-4 py-3 text-heading placeholder:text-faint focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="label-tag text-red-400">
                    {t.contact.errorText ??
                      "Something went wrong. Please try again."}
                  </p>
                )}

                <div className="pt-2 mt-auto">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary monolith-glow inline-flex items-center gap-2 px-10 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading
                      ? (t.contact.sending ?? "Sending…")
                      : t.contact.submit}
                    <span className="material-symbols-outlined text-sm leading-none">
                      send
                    </span>
                  </button>
                </div>
              </form>
            )}
          </section>

          {/* Team + Status */}
          <aside className="lg:col-span-5 space-y-8">
            {/* Lead Engineers */}
            <div className="bg-surface-high ghost-border p-8">
              <h3 className="text-xl font-bold uppercase tracking-widest mb-10 border-l-2 border-accent pl-4">
                Lead Engineers
              </h3>
              <div className="space-y-12">
                {/* Hosam Othman */}
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-surface-lowest ghost-border flex-shrink-0 relative overflow-hidden">
                    <img
                      src={hosamImg}
                      alt="Hosam Othman"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent" />
                  </div>
                  <div className="space-y-1">
                    <span className="label-tag block mb-1">CO-FOUNDER</span>
                    <h4 className="text-2xl font-bold tracking-tight text-heading">
                      Hosam Othman
                    </h4>
                    <p className="text-sm text-muted font-light leading-relaxed">
                      Full-stack systems architect specializing in distributed
                      high-concurrency cloud environments and backend precision.
                    </p>
                    <a
                      href="https://hosam.info"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-widest hover:opacity-75 transition-opacity mt-1"
                    >
                      hosam.info
                      <span className="material-symbols-outlined text-sm leading-none">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>

                {/* Ari Razab */}
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-surface-lowest ghost-border flex-shrink-0 relative flex items-center justify-center">
                    <span className="text-2xl font-black text-accent select-none">
                      AR
                    </span>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent" />
                  </div>
                  <div className="space-y-1">
                    <span className="label-tag block mb-1">CO-FOUNDER</span>
                    <h4 className="text-2xl font-bold tracking-tight text-heading">
                      Ari Razab
                    </h4>
                    <p className="text-sm text-muted font-light leading-relaxed">
                      Frontend engineering specialist focused on technical
                      visualization, precision UX, and architectural
                      scalability.
                    </p>
                    <a
                      href="tel:+491794335167"
                      className="inline-flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-widest hover:opacity-75 transition-opacity mt-1"
                    >
                      +49 179 4335167
                      <span className="material-symbols-outlined text-sm leading-none">
                        call
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-surface-lowest p-6 border-l-2 border-accent/30">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-[0.625rem] uppercase tracking-[0.3em] text-muted">
                  SYSTEM STATUS
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  <span className="label-tag">OPERATIONAL</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="block font-bold text-[0.55rem] uppercase tracking-widest text-faint">
                    RESPONSE LATENCY
                  </span>
                  <span className="block font-mono text-sm text-heading font-semibold">
                    &lt; 120MS
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="block font-bold text-[0.55rem] uppercase tracking-widest text-faint">
                    UPTIME TARGET
                  </span>
                  <span className="block font-mono text-sm text-heading font-semibold">
                    99.999%
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
