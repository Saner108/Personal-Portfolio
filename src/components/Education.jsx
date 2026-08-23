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
    <section id="education" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Education
        </motion.p>

        <motion.h2
          className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-16"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          Where I studied.
        </motion.h2>

        <div className="space-y-16">
          {schools.map((school, i) => (
            <motion.div
              key={school.name}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 2}
              className="border-t border-offwhite/10 pt-10"
            >
              <div className="grid md:grid-cols-[1fr_auto] gap-4 md:gap-16 mb-6">
                <div>
                  <h2
                    className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-2"
                    style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}
                  >
                    {school.name}
                  </h2>
                  <p className="text-offwhite/75 font-body text-base md:text-lg mb-1">
                    {school.degree}
                  </p>
                  <p className="text-offwhite/50 font-body text-sm tracking-wide">{school.detail}</p>
                </div>
                <div className="text-right">
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
      </div>
    </section>
  )
}
