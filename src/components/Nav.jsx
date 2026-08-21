import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious()
    setHidden(latest > prev && latest > 80 && !menuOpen)
    setAtTop(latest < 40)
  })

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        animate={hidden ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between transition-colors duration-500 ${
            atTop && !menuOpen ? 'bg-transparent' : 'bg-graphite/90 backdrop-blur-sm border-b border-offwhite/5'
          }`}
        >
          <a
            href="#hero"
            className="font-display font-semibold text-offwhite text-sm tracking-wide"
            onClick={closeMenu}
          >
            Cesar Sanchez
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs uppercase tracking-[0.15em] text-offwhite/60 hover:text-offwhite transition-colors duration-200 font-body"
              >
                {label}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-5">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="relative w-6 h-4 flex flex-col justify-between"
            >
              <motion.span
                className="block w-full h-px bg-offwhite/80 origin-center"
                animate={menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block w-full h-px bg-offwhite/80"
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-full h-px bg-offwhite/80 origin-center"
                animate={menuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-graphite/60 backdrop-blur-sm"
              onClick={closeMenu}
            />

            {/* Slide-in panel */}
            <motion.nav
              className="absolute top-16 left-0 right-0 bg-graphite/95 border-b border-offwhite/10 backdrop-blur-md"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {navLinks.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="flex items-center px-8 py-5 text-sm uppercase tracking-[0.18em] text-offwhite/70 hover:text-offwhite border-b border-offwhite/5 font-body transition-colors duration-150"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  {label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
