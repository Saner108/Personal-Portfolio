import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Toolkit & Degrees', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { scrollY } = useScroll()
  const hamburgerRef = useRef(null)
  const drawerRef = useRef(null)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious()
    setHidden(latest > prev && latest > 80 && !menuOpen)
    setAtTop(latest < 40)
  })

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1))
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-10% 0px -62% 0px', threshold: 0 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Keyboard trap for mobile drawer:
  // - Escape closes the menu and returns focus to the hamburger button
  // - Tab cycles only within the drawer's focusable elements
  useEffect(() => {
    if (!menuOpen) return

    // Move focus into the drawer on open
    const firstLink = drawerRef.current?.querySelector('a')
    firstLink?.focus()

    const handleKey = e => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setMenuOpen(false)
        hamburgerRef.current?.focus()
        return
      }

      if (e.key !== 'Tab') return

      const focusable = Array.from(
        drawerRef.current?.querySelectorAll('a[href], button, [tabindex="0"]') || []
      ).filter(el => !el.disabled)

      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKey)
    // Prevent scrolling body while menu is open
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    hamburgerRef.current?.focus()
  }

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
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1)
              return (
                <a
                  key={label}
                  href={href}
                  className={`relative text-xs uppercase tracking-[0.15em] font-body transition-colors duration-200 ${
                    isActive ? 'text-offwhite' : 'text-offwhite/50 hover:text-offwhite'
                  }`}
                >
                  {label}
                  {/* Underline dot for active section */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  )}
                </a>
              )
            })}
            <ThemeToggle />
          </nav>

          {/* Mobile: theme toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-5">
            <ThemeToggle />
            <button
              ref={hamburgerRef}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
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
            className="fixed inset-0 z-40 lg:hidden"
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
              ref={drawerRef}
              id="mobile-nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="absolute top-16 left-0 right-0 bg-graphite/95 border-b border-offwhite/10 backdrop-blur-md"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {navLinks.map(({ label, href }, i) => {
                const isActive = activeSection === href.slice(1)
                return (
                  <motion.a
                    key={label}
                    href={href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between px-8 py-5 text-sm uppercase tracking-[0.18em] border-b border-offwhite/5 font-body transition-colors duration-150 ${
                      isActive ? 'text-offwhite' : 'text-offwhite/60 hover:text-offwhite'
                    }`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    {label}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    )}
                  </motion.a>
                )
              })}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
