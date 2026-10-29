import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

const links = [
  {
    label: 'Email',
    value: 'sanchezcesar106@gmail.com',
    href: 'mailto:sanchezcesar106@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/csanchez65',
    href: 'https://www.linkedin.com/in/csanchez65',
  },
  { label: 'GitHub', value: 'github.com/Saner108', href: 'https://github.com/Saner108' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="contact" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36 border-t border-offwhite/8">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Contact
        </motion.p>

        <div className="space-y-10">
          <div>
            <motion.h2
              className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={1}
            >
              Open to work.
            </motion.h2>

            <motion.p
              className="mx-auto font-body text-offwhite/70 text-base md:text-lg max-w-2xl leading-relaxed mb-12"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={2}
            >
              Open to data analyst internships, analytics roles, and conversations about
              turning messy data into decisions that matter.
            </motion.p>

            <motion.div
              className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={3}
            >
              {links.map(({ label, value, href }) => (
                <div key={label} className="data-card flex min-w-0 flex-col items-center justify-center gap-3 border border-offwhite/15 p-6">
                  <span className="text-xs uppercase tracking-[0.15em] text-offwhite/60 font-body">
                    {label}
                  </span>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="break-all font-body text-offwhite/75 hover:text-offwhite transition-colors duration-200 text-sm"
                  >
                    {value}
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={4}
          >
            <a
              href="/resume.pdf"
              download="Cesar_Sanchez_Resume.pdf"
              className="inline-flex items-center gap-3 border border-offwhite/20 px-7 py-4 text-sm font-body font-medium text-offwhite hover:border-offwhite/40 active:scale-[0.98] transition duration-200 group"
            >
              <span>Download Resume</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="group-hover:translate-y-0.5 transition-transform duration-200"
              >
                <path
                  d="M7 1v8M3 9l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 border-t border-offwhite/10 pt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-xs text-offwhite/60 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={5}
        >
          <span>Cesar Sanchez © {new Date().getFullYear()}</span>
          <span className="text-offwhite/40">SQL · Excel · Power BI · Python · React</span>
        </motion.div>
      </div>
    </section>
  )
}
