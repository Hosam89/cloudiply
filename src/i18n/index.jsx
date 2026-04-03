import { I18nContext } from "./context";
import de from "./locales/de";
import en from "./locales/en";

const translations = { de, en };

// Resolve to "de" or "en" based on the browser's preferred language
function getBrowserLang() {
  const browserLang = navigator.language || navigator.languages?.[0] || "de";
  return browserLang.toLowerCase().startsWith("de") ? "de" : "en";
}

const lang = getBrowserLang();

export function I18nProvider({ children }) {
  return (
    <I18nContext.Provider value={{ lang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}
