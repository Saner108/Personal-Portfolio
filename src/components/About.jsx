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

const stats = [
  { label: 'Years Coaching & Leadership', value: '3+' },
  { label: 'Technical Projects', value: '4+' },
  { label: 'Business Degrees', value: '2' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section id="about" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/30 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          About
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_340px] gap-16 lg:gap-24">
          <div>
            <motion.h2
              className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={1}
            >
              The through-line is
              <br />
              always optimization.
            </motion.h2>

            <motion.div
              className="space-y-5 text-offwhite/65 font-body leading-relaxed text-base md:text-lg"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={2}
            >
              <p>
                I'm a Finance and Business Analytics student at Texas A&M University–Corpus
                Christi with interests in quantitative finance, artificial intelligence,
                financial modeling, and business analytics.
              </p>
              <p>
                My projects range from AI-powered applications and financial forecasting models
                to relational databases and Python-based analytics tools. I enjoy solving business
                problems by combining programming, finance, and data analysis to create practical,
                scalable solutions.
              </p>
              <p>
                Outside of technology, I've spent several years leading nutrition coaching,
                personal training, and group fitness programs. These experiences strengthened my
                leadership, communication, and project management skills while reinforcing the
                importance of using data to guide decision-making and improve outcomes.
              </p>
              <p>
                I'm currently building a portfolio of finance, analytics, and AI projects while
                seeking opportunities in finance, business analytics, data analytics, AI, and
                fintech.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="space-y-8 pt-2"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={3}
          >
            {stats.map(({ label, value }) => (
              <div key={label} className="border-t border-offwhite/10 pt-6">
                <div
                  className="font-display font-semibold text-offwhite mb-1"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
                >
                  {value}
                </div>
                <div className="text-sm text-offwhite/40 font-body tracking-wide">{label}</div>
              </div>
            ))}

            <div className="border-t border-offwhite/10 pt-6">
              <div className="text-sm text-offwhite/40 font-body tracking-wide mb-3">Currently</div>
              <div className="text-offwhite/70 font-body text-sm leading-relaxed">
                Texas A&M University–Corpus Christi
                <br />
                Expected graduation: December 2026
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
