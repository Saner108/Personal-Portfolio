import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Education from './Education'

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
    category: 'Data & BI',
    skills: ['SQL', 'Excel', 'Power BI', 'Tableau', 'Microsoft Access', 'SAP Analytics Cloud', 'Dimensional modeling'],
  },
  {
    category: 'Finance',
    skills: ['Financial modeling', 'Scenario & sensitivity analysis', 'Budget variance', 'Forecasting'],
  },
  {
    category: 'Code & AI',
    skills: ['Python', 'VBA', 'React / JavaScript', 'Prompt engineering', 'AI-assisted development', 'Claude API'],
  },
  {
    category: 'People & operations',
    skills: ['Program design', 'Process documentation', 'Nutrition program management', 'Sales & customer communication'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="skills" ref={ref} className="px-6 md:px-12 lg:px-20 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-6 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Background
        </motion.p>

        <motion.h2
          className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-10"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          Toolkit & degrees.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-5">
          <Education />
          <motion.article
            className="data-card h-full min-w-0 border border-offwhite/15 bg-graphite p-6 sm:p-8"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
          >
            <h3 className="font-display font-semibold text-xl text-offwhite mb-6">Toolkit</h3>
            <dl className="space-y-5">
              {groups.map((group) => (
                <div key={group.category}>
                  <dt className="font-body text-xs uppercase tracking-[0.12em] text-accent mb-2">{group.category}</dt>
                  <dd className="font-body text-sm text-offwhite/75 leading-relaxed">{group.skills.join(' · ')}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 border-t border-offwhite/10 pt-5">
              <h4 className="font-body text-xs uppercase tracking-[0.12em] text-accent mb-2">Platforms I use</h4>
              <p className="font-body text-sm text-offwhite/75 leading-relaxed">ChatGPT · Claude / Claude Code · Vercel · Supabase</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
