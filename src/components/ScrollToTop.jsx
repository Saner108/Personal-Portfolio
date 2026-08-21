import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useReducedMotion } from 'framer-motion'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()
  const reduceMotion = useReducedMotion()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 400)
  })

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={handleClick}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-6 md:right-10 z-40 w-10 h-10 border border-offwhite/20 bg-graphite/80 backdrop-blur-sm text-offwhite/60 hover:text-offwhite hover:border-offwhite/40 transition-colors duration-200 flex items-center justify-center"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          whileHover={reduceMotion ? {} : { scale: 1.05 }}
          whileTap={reduceMotion ? {} : { scale: 0.95 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 11V3M3 7l4-4 4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
