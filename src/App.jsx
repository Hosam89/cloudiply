import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import { useI18n } from "./i18n";

function App() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-divider to-transparent" />
      </div>

      <About />

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-divider to-transparent" />
      </div>

      <Services />

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-divider to-transparent" />
      </div>

      <Pricing />

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-divider to-transparent" />
      </div>

      <Contact />

      {/* Footer */}
      <footer className="border-t border-nav-border px-4 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-400 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-accent/25">
              C
            </div>
            <span className="text-lg font-bold text-heading">Cloudiply</span>
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
