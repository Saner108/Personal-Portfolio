import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ProficiencyDots } from './DataVisual'
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
    category: 'Data Analytics & Business Systems',
    skills: [
      { name: 'SQL (schema design, CTEs, window functions, validation)', level: 4 },
      { name: 'Microsoft Excel (financial modeling, scenario analysis, pivot tables)', level: 5 },
      { name: 'Power BI (dashboard design, DAX, executive reporting)', level: 4 },
      { name: 'Star Schema / Dimensional Data Modeling', level: 4 },
      { name: 'Microsoft Access (relational databases, VBA)', level: 4 },
      { name: 'Tableau (Essential Training certified)', level: 3 },
      { name: 'SAP Analytics Cloud', level: 3 },
    ],
  },
  {
    category: 'Finance',
    skills: [
      { name: 'Financial Modeling', level: 5 },
      { name: 'Scenario & Sensitivity Analysis', level: 5 },
      { name: 'Budget vs. Actual Variance Analysis', level: 4 },
      { name: 'Forecasting', level: 4 },
    ],
  },
  {
    category: 'Technical & AI',
    tools: ['ChatGPT', 'Claude', 'Vercel (hosting & deployment)', 'Supabase (database & authentication)'],
    skills: [
      { name: 'Python (pandas, data manipulation, ML coursework)', level: 3 },
      { name: 'VBA (Excel & Access automation)', level: 4 },
      { name: 'React / JavaScript (front-end for data products)', level: 3 },
      { name: 'Prompt Engineering & AI Workflow Design', level: 5 },
      { name: 'AI-Assisted Product Development', level: 5 },
      { name: 'Claude API, Claude Code (certified)', level: 4 },
    ],
  },
  {
    category: 'Professional',
    skills: [
      { name: 'Client-Facing Program Design', level: 5 },
      { name: 'Operational Process Documentation', level: 4 },
      { name: 'Nutrition Coaching & Program Management', level: 5 },
      { name: 'Sales & Customer Communication', level: 4 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="skills" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-6xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Toolkit & Degrees
        </motion.p>

        <motion.h2
          className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-16"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          The toolkit & degrees.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:auto-rows-fr gap-5">
          <Education />
          {groups.map((group, gi) => (
            <motion.article
              key={group.category}
              className="h-full min-w-0 border border-offwhite/15 bg-graphite p-6 sm:p-8"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={gi + 2}
            >
              <p className="font-body text-xs uppercase tracking-[0.18em] text-offwhite/60 mb-3">Toolkit</p>
              <h3 className="font-display font-semibold text-lg text-offwhite leading-tight sm:min-h-[2.5em] mb-6">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="font-body text-offwhite/75 text-sm leading-snug">
                    {skill.name}
                    <ProficiencyDots level={skill.level} />
                  </li>
                ))}
              </ul>
              {group.tools && (
                <div className="mt-8">
                  <h4 className="font-body text-xs uppercase tracking-[0.15em] text-offwhite/60 mb-4">
                    AI & Development Platforms
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <li key={tool} className="border border-offwhite/15 px-3 py-2 font-body text-sm text-offwhite/75">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
