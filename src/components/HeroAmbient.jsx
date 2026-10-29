import { motion, useReducedMotion } from 'framer-motion'

const CLAY = '#E8785A'
const ELECTRIC = '#3D8BFF'

// Ambient background shapes echoing the analytics work:
// a ring (data cycle / progress tracking), a bar cluster (chart output),
// and a grid fragment (spreadsheet / database schema).
// Low-opacity texture — visible but never competing with content.
export default function HeroAmbient() {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 0.3, duration: reduceMotion ? 0 : 1.2, ease: 'easeOut' }}
      >
        {/* Macro ring — slow rotation */}
        <motion.svg
          viewBox="0 0 240 240"
          fill="none"
          className="absolute -right-12 top-[12%] w-40 md:right-[2%] md:w-56 lg:w-64 opacity-25"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
        >
          <defs>
            <linearGradient id="ambient-ring" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={CLAY} />
              <stop offset="100%" stopColor={ELECTRIC} />
            </linearGradient>
          </defs>
          <circle
            cx="120"
            cy="120"
            r="104"
            stroke="url(#ambient-ring)"
            strokeWidth="10"
            opacity="0.35"
          />
          <circle
            cx="120"
            cy="120"
            r="104"
            stroke="url(#ambient-ring)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="490 653"
          />
        </motion.svg>

        {/* Bar cluster — gentle vertical bob */}
        <motion.svg
          viewBox="0 0 160 140"
          fill="none"
          className="absolute right-[5%] bottom-[8%] w-24 md:w-36 opacity-20"
          animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <defs>
            <linearGradient id="ambient-bars" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={CLAY} />
              <stop offset="100%" stopColor={ELECTRIC} />
            </linearGradient>
          </defs>
          <rect x="0" y="76" width="24" height="64" rx="2" fill="url(#ambient-bars)" />
          <rect x="44" y="36" width="24" height="104" rx="2" fill="url(#ambient-bars)" />
          <rect x="88" y="58" width="24" height="82" rx="2" fill="url(#ambient-bars)" />
          <rect x="132" y="8" width="24" height="132" rx="2" fill="url(#ambient-bars)" />
        </motion.svg>

        {/* Grid fragment — slow diagonal drift */}
        <motion.svg
          viewBox="0 0 240 180"
          fill="none"
          className="absolute -left-12 top-[12%] w-40 md:left-[2%] md:w-56 opacity-20"
          animate={reduceMotion ? undefined : { x: [0, 26, 0], y: [0, 20, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        >
          <defs>
            <linearGradient id="ambient-grid" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={CLAY} />
              <stop offset="100%" stopColor={ELECTRIC} />
            </linearGradient>
          </defs>
          <path
            stroke="url(#ambient-grid)"
            strokeWidth="1"
            d="M0 .5h240M0 45.5h240M0 90.5h240M0 135.5h240M0 179.5h240M.5 0v180M60.5 0v180M120.5 0v180M180.5 0v180M239.5 0v180"
          />
        </motion.svg>

        <svg viewBox="0 0 160 180" fill="none" className="absolute left-[3%] bottom-[10%] hidden w-32 text-accent opacity-25 md:block lg:w-40">
          <ellipse cx="80" cy="35" rx="56" ry="22" stroke="currentColor" strokeWidth="2" />
          <path d="M24 35v84c0 12 25 22 56 22s56-10 56-22V35M24 77c0 12 25 22 56 22s56-10 56-22M24 119c0 12 25 22 56 22s56-10 56-22" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="71" r="3" fill="currentColor" />
          <circle cx="50" cy="113" r="3" fill="currentColor" />
          <path d="M80 150v16m-30 0h60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <div className="absolute left-[8%] top-[42%] hidden border border-accent/30 px-3 py-2 font-mono text-sm text-accent/60 lg:block">SQL</div>
        <div className="absolute right-[8%] top-[55%] hidden border border-electric/30 px-3 py-2 font-mono text-sm text-electric/60 lg:block">{'{ data }'}</div>
        <span className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-accent/50" />
        <span className="absolute right-[20%] bottom-[20%] h-3 w-3 rounded-full border border-electric/50" />
        <span className="absolute left-[38%] bottom-[8%] h-2 w-2 rounded-full bg-electric/40" />
      </motion.div>
    </div>
  )
}
