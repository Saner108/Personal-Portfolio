import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

const groups = [
  {
    category: 'Programming',
    skills: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Data Analytics',
    skills: [
      'Microsoft Excel',
      'Tableau',
      'Microsoft Access',
      'VBA',
      'Data Analysis',
      'Database Design',
      'Business Analytics',
    ],
  },
  {
    category: 'Finance',
    skills: [
      'Financial Modeling',
      'Financial Forecasting',
      'Investment Analysis',
      'Business Analysis',
      'Finance',
    ],
  },
  {
    category: 'Artificial Intelligence',
    skills: [
      'Artificial Intelligence',
      'Prompt Engineering',
      'Claude',
      'ChatGPT',
      'Base44',
      'AI Product Development',
    ],
  },
  {
    category: 'Professional',
    skills: ['Project Management', 'Problem Solving', 'Analytical Thinking'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="skills" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/30 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Skills
        </motion.p>

        <motion.h2
          className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-16"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          What I work with.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-offwhite/10 border-t border-offwhite/10">
          {groups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="py-10 px-6 sm:px-8 bg-graphite"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={gi + 2}
            >
              <h3 className="font-body font-medium text-xs uppercase tracking-[0.18em] text-offwhite/35 mb-6">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="font-body text-offwhite/70 text-sm leading-snug">
                    {skill}
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
