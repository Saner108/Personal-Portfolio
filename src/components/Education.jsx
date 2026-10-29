import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

const schools = [
  {
    name: 'Texas A&M University–Corpus Christi',
    degree: 'Dual BBA — Finance; Business Analytics & Information Systems',
    dates: 'Expected Spring 2027',
    detail: 'Corpus Christi, TX',
    coursework: [
      'Database Management',
      'Business Statistics',
      'Data Mining & Analysis',
      'Financial Analysis',
      'Financial Modeling',
      'Management Information Systems',
      'Operations Management',
      'Business Intelligence',
    ],
  },
  {
    name: 'Tarrant County College',
    degree: 'Associate of Arts, Management Information Systems',
    dates: 'Aug 2021 – Apr 2023',
    detail: 'Fort Worth, TX',
    coursework: [
      'Introduction to Programming',
      'Systems Analysis & Design',
      'Principles of Accounting',
      'Business Communications',
    ],
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="education" ref={ref} aria-labelledby="degrees-heading" className="min-w-0 border-t border-offwhite/10 pt-8">
      <motion.h3
        id="degrees-heading"
        className="font-display font-semibold text-xl text-offwhite leading-tight tracking-tight mb-8"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={1}
      >
        Academic foundation
      </motion.h3>

      <div className="space-y-10">
        {schools.map((school, i) => (
          <motion.div
            key={school.name}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={i + 2}
            className="border-t border-offwhite/10 pt-6"
          >
            <div className="space-y-3 mb-6">
              <div>
                <h4
                  className="font-display font-semibold text-lg text-offwhite leading-tight tracking-tight mb-2"
                >
                  {school.name}
                </h4>
                <p className="text-offwhite/75 font-body text-sm leading-relaxed mb-1">
                  {school.degree}
                </p>
                <p className="text-offwhite/50 font-body text-sm tracking-wide">{school.detail}</p>
              </div>
              <div>
                <span className="text-offwhite/50 font-body text-sm tracking-wide whitespace-nowrap">
                  {school.dates}
                </span>
              </div>
            </div>

            {school.coursework && (
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-offwhite/40 font-body mb-3">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {school.coursework.map(course => (
                    <span
                      key={course}
                      className="text-xs font-body text-offwhite/75 border border-offwhite/15 px-3 py-1.5 leading-none"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
