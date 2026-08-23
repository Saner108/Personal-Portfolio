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

// Data & analytics certs lead — most relevant to the target role.
// AI & coding certs second — differentiator for modern DA roles.
// Professional and fitness last — context, not the hook.
const groups = [
  {
    category: 'Data & Analytics',
    note: 'Core credentials',
    items: [
      { name: 'Tableau Essential Training — LinkedIn Learning (2023)' },
      { name: 'Learning SAP Analytics Cloud — LinkedIn Learning (2023)' },
      { name: 'Mining Quality Prediction Using Machine & Deep Learning — Coursera (2026)' },
      { name: 'GitHub Foundations', inProgress: true },
    ],
  },
  {
    category: 'AI & Technical',
    note: 'Applied AI skills',
    items: [
      { name: 'Claude Code 101 — Anthropic (2026)' },
      { name: 'Claude 101 — Anthropic (2026)' },
      { name: 'AI Fluency: Framework & Foundations — Anthropic (2026)' },
    ],
  },
  {
    category: 'Fitness & Professional',
    note: null,
    items: [
      { name: 'NASM Nutrition Coach Certification (2025–2027)' },
      { name: 'NASM Personal Trainer Certification (expires Jan 2028)' },
      { name: 'Texas Insurance Broker License (2026–2028)' },
      { name: 'CPR & AED — American Red Cross' },
    ],
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="certifications" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-10 font-body"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 border-t border-offwhite/10 pt-10">
          {groups.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={gi + 2}
            >
              <div className="mb-5">
                <h3 className="font-body font-medium text-xs uppercase tracking-[0.18em] text-offwhite/70 mb-1">
                  {group.category}
                </h3>
                {group.note && (
                  <p className="text-[10px] text-offwhite/35 font-body tracking-wide">{group.note}</p>
                )}
              </div>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="font-body text-sm leading-snug flex items-start gap-2"
                  >
                    <span className={item.inProgress ? 'text-offwhite/50' : 'text-offwhite/80'}>
                      {item.name}
                    </span>
                    {item.inProgress && (
                      <span className="shrink-0 text-[10px] uppercase tracking-wide text-accent border border-accent/30 px-1.5 py-0.5 mt-0.5">
                        In Progress
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
