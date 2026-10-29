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
    org: 'TAMUCC · Jun 2025–Aug 2026',
    tags: ['Inventory Management', 'Operations', 'Team Development'],
    description:
      'Oversaw personalized nutrition coaching and cooking classes to promote sustainable health strategies. Managed inventory and organized wellness events. Trained and enabled 3 staff members to independently run coaching workflows.',
  },
  {
    title: 'Group Fitness Instructor',
    org: 'TAMUCC · Sep 2024–Aug 2026',
    tags: ['Program Design'],
    description:
      'Led high-energy HIIT classes focused on functional movement, cardio, and strength training.',
  },
  {
    title: 'Kids Camp Instructor',
    org: 'TAMUCC · Jun 2024–Aug 2026 · Seasonal',
    tags: ['Activity Planning', 'Youth Development'],
    description:
      'Served as a seasonal Physical Education Instructor, leading engaging sports and fitness activities for children.',
  },
  {
    title: 'Personal Trainer',
    org: 'TAMUCC · Aug 2023–Aug 2026',
    tags: ['Fitness Training', 'Customer Communication'],
    description:
      'Designed individualized training programs focused on fat loss, muscle building, and functional fitness. Helped clients develop sustainable fitness habits for long-term success.',
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
