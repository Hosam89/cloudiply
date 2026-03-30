import { useState } from "react";
import { I18nContext } from "./context";
import de from "./locales/de";
import en from "./locales/en";

const translations = { de, en };

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
