import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import { useI18n } from "./i18n/useI18n";
import { useTheme } from "./theme/useTheme";
import logoDark from "./assets/logo_dark.svg";
import logoLight from "./assets/logo.svg";

function App() {
  const { t } = useI18n();
  const { theme } = useTheme();
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-linear-to-r from-transparent via-divider to-transparent" />
      </div>

      <About />

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-linear-to-r from-transparent via-divider to-transparent" />
      </div>

      <Services />

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-linear-to-r from-transparent via-divider to-transparent" />
      </div>

      <Pricing />

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-linear-to-r from-transparent via-divider to-transparent" />
      </div>

      <Contact />

      {/* Footer */}
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

export default App;
