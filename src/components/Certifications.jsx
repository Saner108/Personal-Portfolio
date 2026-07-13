import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

const certifications = [
  'GitHub Foundations (In Progress)',
  'Claude Code 101',
  'Claude 101',
  'AI Fluency: Framework & Foundations',
  'Mining Quality Prediction Using Machine & Deep Learning',
  'Tableau Essential Training',
  'Learning SAP Analytics Cloud',
  'Texas Insurance Broker License',
  'NASM Nutrition Coach',
  'NASM Certified Personal Trainer',
  'CPR & AED',
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="certifications" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/30 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Certifications
        </motion.p>

        <motion.h2
          className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-16"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          Credentials.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0 border-t border-offwhite/10">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              className="py-5 border-b border-offwhite/10 font-body text-offwhite/65 text-sm md:text-base"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 2}
            >
              {cert}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
