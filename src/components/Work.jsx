import { useState } from "react";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "../i18n/useI18n";
import EcommersImage from "../assets/1.png";
import StatsImage from "../assets/2.png";
import NetworkImage from "../assets/3.png";
import LuxueryImage from "../assets/4.png";
const projectImages = [EcommersImage, StatsImage, NetworkImage, LuxueryImage];

function TechTag({ label }) {
  return (
    <span className="bg-surface-high/90 px-3 py-1 text-[0.6rem] font-bold tracking-widest uppercase border border-outline-variant/30 backdrop-blur-md text-accent">
      {label}
    </span>
  );
}

function CaseStudyLink({ label }) {
  return (
    <Link
      to="/contact"
      className="inline-flex items-center gap-2 label-tag hover:gap-4 transition-all duration-200"
    >
      {label}
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

/* Pulse: a single slow cyan glow breath, pausing 6s between each cycle */
const pulseVariants = {
  idle: {
    boxShadow: "0 0 0px rgba(0,229,255,0)",
  },
  pulse: {
    boxShadow: [
      "0 0 0px rgba(0,229,255,0)",
      "0 0 16px rgba(0,229,255,0.22)",
      "0 0 0px rgba(0,229,255,0)",
    ],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 6,
    },
  },
};

function ProjectCard({
  index,
  project,
  image,
  colSpan,
  imgHeight,
  tagsOverlay,
  extra,
  onOpen,
}) {
  return (
    <motion.div
      layoutId={`card-${index}`}
      className={`${colSpan} group bg-[#131b2e] ghost-border flex flex-col overflow-hidden cursor-pointer`}
      variants={pulseVariants}
      initial="idle"
      animate="pulse"
      whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
      onClick={() => onOpen(index)}
    >
      <motion.div
        layoutId={`card-img-${index}`}
        className={`relative ${imgHeight} overflow-hidden`}
      >
        <img
          src={image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {tagsOverlay}
      </motion.div>

      <motion.div
        layoutId={`card-body-${index}`}
        className="p-8 flex-1 flex flex-col justify-between"
      >
        {extra ? (
          <div className="flex justify-between items-start">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                {project.title}
              </h3>
              <p className="text-muted mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0 ml-4">
              <span className="text-[0.6rem] text-muted font-bold tracking-widest uppercase">
                Stack
              </span>
              <span className="text-xs font-mono text-accent">
                {project.stack}
              </span>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
              {project.title}
            </h3>
            <p className="text-muted mb-6 leading-relaxed">
              {project.description}
            </p>
          </div>
        )}
        <CaseStudyLink label={project.cta} />
      </motion.div>
    </motion.div>
  );
}

function Work() {
  const { t } = useI18n();
  const { projects } = t.work;
  const [selected, setSelected] = useState(null);

  const cardConfigs = [
    {
      colSpan: "md:col-span-8",
      imgHeight: "h-[260px] md:h-[400px]",
      tagsOverlay: (
        <div className="absolute top-6 left-6 flex gap-2">
          {projects[0].tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      ),
    },
    {
      colSpan: "md:col-span-4",
      imgHeight: "h-[260px] md:h-[240px]",
      tagsOverlay: (
        <div className="absolute top-4 left-4 flex gap-2">
          {projects[1].tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      ),
    },
    {
      colSpan: "md:col-span-5",
      imgHeight: "h-[260px] md:h-[300px]",
      tagsOverlay: (
        <div className="absolute bottom-4 left-4 flex gap-2">
          {projects[2].tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      ),
    },
    {
      colSpan: "md:col-span-7",
      imgHeight: "h-[260px] md:h-[300px]",
      extra: true,
      tagsOverlay: (
        <div className="absolute top-4 right-4">
          <span className="bg-black/40 px-4 py-2 text-[0.6rem] font-bold tracking-[0.3em] uppercase border border-white/10 backdrop-blur-lg text-white">
            Editorial Design
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <header className="mb-20 section-header">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-accent" />
            <span className="label-tag">{t.work.badge}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-none">
            {t.work.titleStart}
            <br />
            <span className="text-accent">{t.work.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl font-light leading-relaxed">
            {t.work.subtitle}
          </p>
        </header>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {cardConfigs.map((cfg, i) => (
            <ProjectCard
              key={i}
              index={i}
              project={projects[i]}
              image={projectImages[i]}
              colSpan={cfg.colSpan}
              imgHeight={cfg.imgHeight}
              tagsOverlay={cfg.tagsOverlay}
              extra={cfg.extra}
              onOpen={setSelected}
            />
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-16 p-12 bg-surface-lowest ghost-border flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              {t.work.ctaTitle}
            </h3>
            <p className="text-muted leading-relaxed">{t.work.ctaSubtitle}</p>
          </div>
          <Link
            to="/contact"
            className="btn-primary monolith-glow px-8 py-4 shrink-0"
          >
            {t.work.ctaButton}
          </Link>
        </div>
      </div>

      {/* ── Expanded card overlay ── */}
      <AnimatePresence>
        {selected !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Expanded card */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none">
              <motion.div
                layoutId={`card-${selected}`}
                className="bg-[#131b2e] ghost-border w-full max-w-3xl max-h-[90vh] overflow-y-auto pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  layoutId={`card-img-${selected}`}
                  className="relative h-[280px] sm:h-[400px] overflow-hidden"
                >
                  <img
                    src={projectImages[selected]}
                    alt={projects[selected].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-transparent to-transparent" />
                  {/* Close */}
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-black/60 ghost-border text-white hover:border-accent/60 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="absolute bottom-6 left-6 flex gap-2">
                    {projects[selected].tags.map((tag) => (
                      <TechTag key={tag} label={tag} />
                    ))}
                  </div>
                </motion.div>

                <motion.div layoutId={`card-body-${selected}`} className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                    {projects[selected].title}
                  </h3>
                  <p className="text-muted text-lg leading-relaxed mb-8">
                    {projects[selected].description}
                  </p>
                  <Link
                    to="/contact"
                    className="btn-primary monolith-glow px-8 py-4"
                    onClick={() => setSelected(null)}
                  >
                    {projects[selected].cta}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Work;
