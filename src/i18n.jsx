import { createContext, useContext, useState } from "react";

const translations = {
  de: {
    nav: {
      home: "Home",
      about: "Über uns",
      services: "Services",
      pricing: "Preise",
      contact: "Kontakt",
      cta: "Jetzt starten",
    },
    hero: {
      badge: "Digitalagentur für modernes Webdesign",
      titleStart: "Ihre digitale Präsenz, ",
      titleHighlight: "professionell umgesetzt",
      subtitle:
        "Cloudiply bietet maßgeschneiderte Weblösungen für Unternehmen aller Größen, um Ihre Online-Präsenz effektiv zu steigern und den Geschäftserfolg zu maximieren.",
      ctaPricing: "Preise ansehen",
      ctaLearnMore: "Mehr erfahren",
      trustGdpr: "DSGVO-konform",
      trustSpeed: "Schnelle Ladezeiten",
      trustResponsive: "100% Responsive",
    },
    about: {
      badge: "Über uns",
      titleStart: "Wir bringen Ihr Unternehmen ",
      titleHighlight: "ins digitale Zeitalter",
      p1: "Cloudiply ist eine Digitalagentur mit Fokus auf maßgeschneiderte Weblösungen. Wir kombinieren modernes Design mit technischer Exzellenz, um Websites zu erstellen, die nicht nur gut aussehen, sondern auch messbare Ergebnisse liefern.",
      p2: "Unser Team besteht aus erfahrenen Entwicklern und Designern, die eng mit Ihnen zusammenarbeiten, um Ihre Vision in eine leistungsstarke Online-Präsenz zu verwandeln.",
      card1Title: "Strategische Planung",
      card1Desc:
        "Jedes Projekt beginnt mit einer klaren Strategie und definierten Zielen.",
      card2Title: "Moderne Technologie",
      card2Desc:
        "Wir setzen auf modernste Technologien für perfekte Performance.",
      card3Title: "Persönliche Betreuung",
      card3Desc:
        "Direkter Kontakt und transparente Kommunikation während des gesamten Projekts.",
    },
    services: {
      badge: "Unsere Leistungen",
      titleStart: "Alles was Sie für Ihren ",
      titleHighlight: "Online-Erfolg",
      titleEnd: " brauchen",
      subtitle:
        "Von der Konzeption bis zur Umsetzung — wir bieten Ihnen alles aus einer Hand.",
      items: [
        {
          title: "Webdesign & Entwicklung",
          description:
            "Individuelle, responsive Websites, die Ihre Marke widerspiegeln und Kunden begeistern.",
        },
        {
          title: "SEO-Optimierung",
          description:
            "Bessere Sichtbarkeit bei Google durch technische und inhaltliche Suchmaschinenoptimierung.",
        },
        {
          title: "Performance-Optimierung",
          description:
            "Schnelle Ladezeiten durch optimierten Code, Bildkompression und modernes Hosting.",
        },
        {
          title: "Google Business & Analytics",
          description:
            "Professionelle Einrichtung und Verknüpfung Ihrer Google-Dienste für maximale Reichweite.",
        },
        {
          title: "Conversion-Optimierung",
          description:
            "Strategisch aufgebaute Seiten, die Besucher in zahlende Kunden verwandeln.",
        },
        {
          title: "DSGVO & Datenschutz",
          description:
            "Rechtssichere Websites mit Cookie-Consent, Impressum und Datenschutzerklärung.",
        },
      ],
    },
    pricing: {
      badge: "Preise",
      titleStart: "Transparente ",
      titleHighlight: "Preisgestaltung",
      subtitle:
        "Wählen Sie den Plan, der am besten zu Ihrem Unternehmen passt.",
      recommended: "Empfohlen",
      choosePlan: "Plan wählen",
      monthly: "monatlich",
      plans: [
        {
          name: "Startup",
          price: "500€",
          monthly: "50€",
          description: "Ideal für Gründer & kleine Unternehmen",
          features: [
            "Bis zu 5 Seiten",
            "Responsive Design",
            "Basis SEO-Struktur",
            "Kontaktformular",
            "DSGVO-konforme Struktur",
          ],
        },
        {
          name: "Middle",
          price: "700€",
          monthly: "70€",
          description: "Für aktive Kundengewinnung",
          features: [
            "Bis zu 10 Seiten",
            "Conversion-orientierte Struktur",
            "Performance-Optimierung",
            "Google Business Integration",
            "Analytics Einrichtung",
          ],
        },
        {
          name: "Business",
          price: "1200€",
          monthly: "120€",
          description: "Strategische Website als Wachstumstool",
          features: [
            "Strategische Planung",
            "Landingpages",
            "Erweiterte SEO-Struktur",
            "Lead- / Buchungssysteme",
            "Conversion-Optimierung",
          ],
        },
      ],
    },
    contact: {
      title: "Kontakt",
      subtitle:
        "Haben Sie Fragen oder möchten Sie ein Projekt starten? Kontaktieren Sie uns!",
      nameLabel: "Name",
      namePlaceholder: "Ihr Name",
      emailLabel: "E-Mail",
      emailPlaceholder: "ihre@email.de",
      messageLabel: "Nachricht",
      messagePlaceholder: "Ihre Nachricht...",
      submit: "Nachricht senden",
      successTitle: "Nachricht gesendet!",
      successText: "Wir melden uns so schnell wie möglich bei Ihnen.",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      pricing: "Pricing",
      contact: "Contact",
      cta: "Get Started",
    },
    hero: {
      badge: "Digital Agency for Modern Web Design",
      titleStart: "Your digital presence, ",
      titleHighlight: "professionally delivered",
      subtitle:
        "Cloudiply offers tailored web solutions for businesses of all sizes to effectively boost your online presence and maximize business success.",
      ctaPricing: "View Pricing",
      ctaLearnMore: "Learn More",
      trustGdpr: "GDPR Compliant",
      trustSpeed: "Fast Loading Times",
      trustResponsive: "100% Responsive",
    },
    about: {
      badge: "About Us",
      titleStart: "We bring your business ",
      titleHighlight: "into the digital age",
      p1: "Cloudiply is a digital agency focused on tailored web solutions. We combine modern design with technical excellence to create websites that not only look great but also deliver measurable results.",
      p2: "Our team consists of experienced developers and designers who work closely with you to turn your vision into a powerful online presence.",
      card1Title: "Strategic Planning",
      card1Desc:
        "Every project starts with a clear strategy and defined goals.",
      card2Title: "Modern Technology",
      card2Desc: "We use cutting-edge technologies for perfect performance.",
      card3Title: "Personal Support",
      card3Desc:
        "Direct contact and transparent communication throughout the entire project.",
    },
    services: {
      badge: "Our Services",
      titleStart: "Everything you need for your ",
      titleHighlight: "online success",
      titleEnd: "",
      subtitle:
        "From concept to implementation — we offer you everything from a single source.",
      items: [
        {
          title: "Web Design & Development",
          description:
            "Custom, responsive websites that reflect your brand and delight customers.",
        },
        {
          title: "SEO Optimization",
          description:
            "Better visibility on Google through technical and content-driven search engine optimization.",
        },
        {
          title: "Performance Optimization",
          description:
            "Fast loading times through optimized code, image compression, and modern hosting.",
        },
        {
          title: "Google Business & Analytics",
          description:
            "Professional setup and integration of your Google services for maximum reach.",
        },
        {
          title: "Conversion Optimization",
          description:
            "Strategically built pages that turn visitors into paying customers.",
        },
        {
          title: "GDPR & Data Privacy",
          description:
            "Legally compliant websites with cookie consent, imprint, and privacy policy.",
        },
      ],
    },
    pricing: {
      badge: "Pricing",
      titleStart: "Transparent ",
      titleHighlight: "Pricing",
      subtitle: "Choose the plan that best fits your business.",
      recommended: "Recommended",
      choosePlan: "Choose Plan",
      monthly: "monthly",
      plans: [
        {
          name: "Startup",
          price: "€500",
          monthly: "€50",
          description: "Ideal for founders & small businesses",
          features: [
            "Up to 5 pages",
            "Responsive Design",
            "Basic SEO structure",
            "Contact form",
            "GDPR-compliant structure",
          ],
        },
        {
          name: "Middle",
          price: "€700",
          monthly: "€70",
          description: "For active customer acquisition",
          features: [
            "Up to 10 pages",
            "Conversion-oriented structure",
            "Performance optimization",
            "Google Business integration",
            "Analytics setup",
          ],
        },
        {
          name: "Business",
          price: "€1,200",
          monthly: "€120",
          description: "Strategic website as a growth tool",
          features: [
            "Strategic planning",
            "Landing pages",
            "Advanced SEO structure",
            "Lead / booking systems",
            "Conversion optimization",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle:
        "Have questions or want to start a project? Get in touch with us!",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Your message...",
      submit: "Send Message",
      successTitle: "Message sent!",
      successText: "We'll get back to you as soon as possible.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("de");

  function toggleLang() {
    setLang((prev) => (prev === "de" ? "en" : "de"));
  }

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
