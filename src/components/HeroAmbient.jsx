import { motion, useReducedMotion } from 'framer-motion'

const CLAY = '#E8785A'
const ELECTRIC = '#3D8BFF'

// Ambient background shapes for the hero: a macro ring (NutriCook AI's kcal
// ring), a bar cluster (Financial Forecasting Model charts), and a grid
// fragment (Inventory Tracker spreadsheet). Low-opacity texture only — the
// gradient at full strength belongs to GradientThread.
export default function HeroAmbient() {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1.6, ease: 'easeOut' }}
      >
        {/* Macro ring — slow rotation */}
        <motion.svg
          viewBox="0 0 240 240"
          fill="none"
          className="absolute -right-10 top-[8%] w-52 md:w-72 lg:w-80 opacity-[0.16]"
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
          className="absolute left-[58%] bottom-[7%] w-28 md:w-40 opacity-[0.15]"
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
          className="absolute left-[2%] top-[12%] w-44 md:w-60 opacity-[0.13]"
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
      </motion.div>
    </div>
  )
}
