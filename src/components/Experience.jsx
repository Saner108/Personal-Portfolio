import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

const roles = [
  {
    title: 'Licensed Insurance Agent (Internship)',
    org: 'New York Life · Jul 2026–Present',
    tags: ['Financial Analysis', 'Client Advisory'],
    description:
      'Applying finance fundamentals to analyze client financial positions and develop protection and wealth-building strategies. Building fluency in insurance products, investment vehicles, and the regulatory side of financial services.',
  },
  {
    title: 'Head Nutrition Coach',
    org: 'TAMUCC · Jun 2025–Present',
    tags: ['Systems Design', 'Data Tracking', 'Operations'],
    description:
      'Built and own the analytics infrastructure for the program: an Excel system tracking 50+ ingredient SKUs, session consumption rates, and reorder thresholds across weekly recurring sessions. Designed the coaching intake and progress tracking workflow from scratch, enabling 3 staff members to run sessions independently. Deliver personalized nutrition guidance to the campus community with measurable habit-change outcomes.',
  },
  {
    title: 'Group Fitness Instructor',
    org: 'TAMUCC · Sep 2024–Present',
    tags: ['Program Design'],
    description:
      'Design and lead HIIT sessions for a consistent recurring member base. Track attendance trends and member retention patterns to adjust session structure and timing.',
  },
  {
    title: 'Personal Trainer',
    org: 'TAMUCC · Aug 2023–Present',
    tags: ['Data-Driven Coaching', 'Progress Analytics'],
    description:
      'Design individualized programs using structured intake data (baseline measurements, movement assessment, goal timelines). Adjust programs based on logged progress metrics — the same hypothesis-test-adjust loop that applies to any analytical workflow.',
  },
  {
    title: 'Member Ambassador',
    org: 'Orangetheory Fitness · Oct 2022–Aug 2023',
    tags: ['Operations', 'Scheduling'],
    description:
      'Managed sales transactions and class scheduling in a high-volume studio environment. Reduced scheduling errors by standardizing the booking confirmation process.',
  },
  {
    title: 'Sales and Service Expert',
    org: '24 Hour Fitness · Dec 2021–Oct 2022',
    tags: ['Customer Advisory'],
    description:
      'Advised members on fitness products and services in a fast-paced retail environment, focusing on needs-based recommendations over volume.',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="experience" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Experience
        </motion.p>

        <motion.h2
          className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-16"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          Where I've led.
        </motion.h2>

        <div className="space-y-0 border-t border-offwhite/10">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              className="grid md:grid-cols-[280px_1fr] gap-4 md:gap-16 py-10 border-b border-offwhite/10"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 2}
            >
              <div>
                <h3 className="font-display font-semibold text-offwhite text-lg md:text-xl mb-1 leading-snug">
                  {role.title}
                </h3>
                {role.org && (
                  <p className="text-offwhite/70 font-body text-sm mb-3">{role.org}</p>
                )}
                {role.tags && (
                  <div className="flex flex-wrap gap-1.5">
                    {role.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-[0.1em] text-offwhite/40 border border-offwhite/10 px-2 py-0.5 font-body">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-offwhite/75 font-body text-sm md:text-base leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
