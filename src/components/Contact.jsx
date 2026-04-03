import { useState } from "react";
import { useI18n } from "../i18n/useI18n";

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
    <section id="contact" className="px-4 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-heading text-center mb-4">
          {t.contact.title}
        </h2>
        <p className="text-muted text-center mb-12 max-w-lg mx-auto">
          {t.contact.subtitle}
        </p>

        {/* Contact info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl bg-glass border border-glass-border backdrop-blur-md p-6">
            <p className="text-heading font-semibold mb-1">Hosam Othman</p>
            <a
              href="https://hosam.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              hosam.info
            </a>
          </div>
          <div className="rounded-2xl bg-glass border border-glass-border backdrop-blur-md p-6">
            <p className="text-heading font-semibold mb-1">Ari Razab</p>
            <a
              href="tel:+491794335167"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              +49 179 4335167
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-2xl bg-glass border border-glass-border backdrop-blur-md p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">
                {t.contact.successTitle}
              </h3>
              <p className="text-muted">{t.contact.successText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-body-text mb-2"
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
                  className="w-full px-4 py-3 rounded-xl bg-input border border-surface-border text-heading placeholder-faint focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-body-text mb-2"
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
                  className="w-full px-4 py-3 rounded-xl bg-input border border-surface-border text-heading placeholder-faint focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-body-text mb-2"
                >
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-input border border-surface-border text-heading placeholder-faint focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/30 hover:shadow-accent/50 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (t.contact.sending ?? "Sending…") : t.contact.submit}
              </button>
              {error && (
                <p className="text-red-500 text-sm text-center">
                  {t.contact.errorText ??
                    "Something went wrong. Please try again."}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
