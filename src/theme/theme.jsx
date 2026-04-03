import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

const mq = window.matchMedia("(prefers-color-scheme: dark)");

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(mq.matches ? "dark" : "light");

  useEffect(() => {
    // Apply theme attribute on mount and whenever it changes
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    // Keep in sync if the user changes OS preference at runtime
    function handleChange(e) {
      setTheme(e.matches ? "dark" : "light");
    }
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}
