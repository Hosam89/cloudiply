import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import { useI18n } from "./i18n/useI18n";
import { useTheme } from "./theme/useTheme";
import logoDark from "./assets/logo_dark.svg";
import logoLight from "./assets/logo.svg";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  const { t } = useI18n();
  const { theme } = useTheme();
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="border-t border-nav-border px-4 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img
              src={theme === "dark" ? logoDark : logoLight}
              alt="Cloudiply logo"
              className="w-9 h-9"
            />
          </div>
          <p className="text-faint text-sm">
            © {new Date().getFullYear()} Cloudiply. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return <Layout />;
}

export default App;
