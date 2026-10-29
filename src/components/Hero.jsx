import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import HeroAmbient from './HeroAmbient'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  // As the user scrolls past, the hero settles back and dims behind the
  // incoming About section rather than sliding away as a static block.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96])
  const y = useTransform(scrollYProgress, [0, 1], [0, -40])
  const recede = reduceMotion ? {} : { opacity, scale, y }

  return (
    <section
      ref={ref}
      id="hero"
      className="relative overflow-hidden min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgb(var(--color-accent) / 0.10), transparent 65%)',
        }}
      />

      {/* Ambient shapes fade with the same scroll recede as the content */}
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { opacity }}
      >
        <HeroAmbient />
      </motion.div>

      <motion.div style={recede} className="relative mx-auto w-full max-w-6xl">
        <div className="hero-banner mx-auto mb-8 flex max-w-2xl items-center justify-center gap-3 border border-accent/30 px-5 py-3">
          <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
          <span className="min-w-0 font-body text-xs uppercase tracking-[0.16em] text-accent">Data-driven thinking. People-focused work.</span>
          <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
        </div>
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-6 font-body"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Cesar Sanchez
        </motion.p>

        <motion.h1
          className="font-display font-bold text-offwhite leading-[0.98] tracking-[-0.02em] mb-8"
          style={{ fontSize: 'clamp(2.6rem, 7.5vw, 6.5rem)' }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Business Analytics.
          <br />
          <span className="text-gradient">Finance & AI.</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl font-body text-offwhite/75 text-lg md:text-xl leading-relaxed mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Turning raw data into decisions — through analytics, financial modeling, and AI-powered tools.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a
            href="#projects"
            className="inline-block border border-accent/50 bg-accent/10 px-8 py-3.5 text-sm font-body font-medium tracking-wide text-offwhite hover:bg-accent/20 active:scale-[0.98] transition duration-200"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="inline-block border border-offwhite/20 px-8 py-3.5 text-sm font-body font-medium tracking-wide text-offwhite/75 hover:border-accent/50 hover:text-offwhite active:scale-[0.98] transition duration-200"
          >
            Get in touch →
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle scroll indicator */}
      <motion.div
        className="absolute bottom-6 inset-x-0 flex items-center justify-center gap-3 text-offwhite/60 text-xs tracking-widest uppercase font-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <motion.div
          className="w-px h-8 bg-offwhite/20"
          animate={reduceMotion ? undefined : { scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originY: 0 }}
        />
        Scroll
      </motion.div>
    </section>
  )
}
