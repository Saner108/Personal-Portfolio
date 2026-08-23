import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const preferred =
      stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    setTheme(preferred)
    document.documentElement.classList.toggle('light', preferred === 'light')
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('light', next === 'light')
  }

  const label = theme === 'dark' ? 'Light' : 'Dark'

  return (
    // min-h/w of 44px gives a comfortable tap target on mobile.
    // The visible text area (h-4 w-12) is kept inside a child span
    // so the overflow-hidden clip only applies to the text animation,
    // not to the full button surface — taps near the edges still register.
    <button
      onClick={toggle}
      aria-label={`Switch to ${label.toLowerCase()} mode`}
      className="relative flex items-center justify-center min-h-[44px] min-w-[44px] text-offwhite/60 hover:text-offwhite transition-colors duration-200"
    >
      <span className="relative overflow-hidden inline-block h-4 w-12 text-xs uppercase tracking-[0.15em] font-body">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={label}
            className="absolute inset-0 flex items-center justify-end"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            {label}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  )
}
