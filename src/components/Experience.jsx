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
    title: 'Head Nutrition Coach',
    org: 'Texas A&M University–Corpus Christi',
    description:
      'Lead nutrition coaching, inventory management, and wellness programming while using operational data to improve client outcomes. Coordinate nutrition education initiatives, oversee inventory systems, and organize wellness events that promote healthier lifestyles.',
  },
  {
    title: 'Group Fitness Instructor',
    org: null,
    description:
      'Design and lead scalable HIIT and strength-focused group fitness classes. Develop structured training programs that emphasize safety, performance, motivation, and measurable progress for participants of all fitness levels.',
  },
  {
    title: 'Personal Trainer',
    org: null,
    description:
      'Create personalized fitness and nutrition programs tailored to client goals while tracking progress through data-driven coaching methods. Focus on sustainable habit development, functional movement, and long-term health outcomes.',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="experience" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/30 mb-10 font-body"
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
                <h3 className="font-display font-semibold text-offwhite text-lg md:text-xl mb-1">
                  {role.title}
                </h3>
                {role.org && (
                  <p className="text-offwhite/40 font-body text-sm">{role.org}</p>
                )}
              </div>
              <p className="text-offwhite/55 font-body text-sm md:text-base leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
