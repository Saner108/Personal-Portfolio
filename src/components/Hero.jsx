import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/projects'

// ─── Ambient gradient blob ────────────────────────────────────────────────────
function GradientBlob({ className }) {
  return (
    <div
      aria-hidden="true"
      className={['pointer-events-none absolute rounded-full blur-3xl', className].join(' ')}
    />
  )
}

// ─── Single project card ──────────────────────────────────────────────────────
// Cards are visual — the image (or a placeholder icon when none exists yet)
// does the talking, with the project name as a hover/focus-revealed caption.
// Every card scrolls to the full Problem → Method → Value writeup below.
function ProjectCard({ project, index, shouldAnimate }) {
  return (
    <motion.a
      href="#projects"
      onClick={(e) => {
        e.preventDefault()
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
      }}
      initial={shouldAnimate ? { opacity: 0, y: 24 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: 'easeOut' }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-offwhite/5 border border-offwhite/10 hover:border-offwhite/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image area */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-offwhite/10 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          /* Placeholder */
          <div className="flex flex-col items-center gap-2 text-offwhite/25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        )}

        {/* Name caption — hidden at rest, revealed on hover/focus */}
        <div className="absolute inset-x-0 bottom-0 px-3 py-3 bg-gradient-to-t from-graphite/90 via-graphite/40 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
          <p className="text-offwhite text-xs font-body font-medium leading-snug line-clamp-2">
            {project.name}
          </p>
        </div>
      </div>
    </motion.a>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const reduceMotion = useReducedMotion()
  const shouldAnimate = !reduceMotion

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-graphite flex flex-col"
    >
      {/* Ambient blobs */}
      <GradientBlob className="left-[-15%] top-[10%] w-[45vw] h-[60vh] bg-emerald-500/20" />
      <GradientBlob className="right-[-15%] top-[5%]  w-[40vw] h-[55vh] bg-emerald-400/15" />
      <GradientBlob className="left-[20%]  bottom-0   w-[30vw] h-[30vh] bg-emerald-300/10" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col flex-1 px-6 md:px-10 pt-28 pb-12">
        <motion.p
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-6 font-body"
        >
          Cesar Sanchez
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-display font-bold leading-[1.05] tracking-tight text-offwhite mb-3"
        >
          Finance. Business Analytics. AI.
        </motion.h1>

        <motion.p
          initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="max-w-xl font-body text-offwhite/75 text-base md:text-lg leading-relaxed mb-12"
        >
          Building data-driven applications that combine finance, analytics, and AI.
        </motion.p>

        {/* Project card grid — real project data, links down to the full writeups */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 flex-1">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              shouldAnimate={shouldAnimate}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 flex items-center gap-2 text-xs text-offwhite/40 font-body uppercase tracking-widest"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={shouldAnimate ? { y: [0, 4, 0] } : {}}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-4 bg-current"
          />
        </motion.div>
      </div>
    </section>
  )
}
