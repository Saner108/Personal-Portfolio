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
  { label: 'Data, analytics & AI projects shipped to production', value: '5+' },
  { label: 'Dual BBA degrees — Finance + Business Analytics', value: '2' },
  { label: 'Years designing systems and coaching real clients', value: '3+' },
]

const photos = [
  {
    src: '/images/fitness-studio.jpeg',
    alt: 'Seated mirror photo in a purple-lit fitness studio',
    caption: 'Fitness',
    width: 2520,
    height: 3360,
  },
  {
    src: '/images/prepared-meal.jpeg',
    alt: 'A prepared meal with cucumber and watermelon in a kitchen',
    caption: 'In the kitchen',
    width: 3024,
    height: 4032,
  },
  {
    src: '/images/training-group.jpg',
    alt: 'A group posing together in a gym mirror',
    caption: 'Training together',
    width: 1320,
    height: 2184,
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section id="about" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-10 font-body"
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
              className="space-y-5 text-offwhite/80 font-body leading-relaxed text-base md:text-lg mb-10"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={2}
            >
              <p>
                I'm a double major in Finance and Business Analytics at Texas A&M
                University–Corpus Christi. My focus is applied analytics — taking messy data
                and turning it into decisions that change what someone actually does next. That
                means SQL pipelines, financial models, dashboards, and increasingly, AI-powered
                tools that make the analysis accessible to people who don't live in spreadsheets.
              </p>
              <p>
                Outside of school, fitness became both a personal interest and three years of
                campus work. From August 2023 through August 2026, I worked in personal training,
                group fitness, seasonal kids camps, and nutrition coaching at TAMUCC. As Head
                Nutrition Coach, I oversaw personalized coaching and cooking classes, managed
                inventory and wellness events, and trained three staff members to run coaching
                workflows independently.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={3}
            >
              <img
                src="/images/team-photo.jpg"
                alt="TAMUCC Recreational Sports staff team"
                loading="lazy"
                width="1200"
                height="800"
                className="w-full border border-offwhite/10"
              />
            </motion.div>
          </div>

          <motion.div
            className="space-y-8 pt-2"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={4}
          >
            {stats.map(({ label, value }) => (
              <div key={label} className="border-t border-offwhite/10 pt-6">
                <div
                  className="font-display font-semibold text-offwhite mb-1"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
                >
                  {value}
                </div>
                <div className="text-sm text-offwhite/60 font-body tracking-wide">{label}</div>
              </div>
            ))}

            <div className="border-t border-offwhite/10 pt-6">
              <div className="text-sm text-offwhite/60 font-body tracking-wide mb-3">Currently</div>
              <div className="text-offwhite/75 font-body text-sm leading-relaxed">
                Texas A&M University–Corpus Christi
                <br />
                Expected graduation: Spring 2027
              </div>
            </div>
          </motion.div>
        </div>

        <section aria-labelledby="personal-photos-heading" className="mt-16 border-t border-offwhite/10 pt-10">
          <h3 id="personal-photos-heading" className="font-display text-2xl font-semibold tracking-tight text-offwhite mb-3">
            Beyond the spreadsheets.
          </h3>
          <p className="font-body text-sm text-offwhite/70 mb-6">
            A few moments from fitness, cooking, and training together. Select a photo to view it in full.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <figure key={photo.src}>
                <a
                  href={photo.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open full-size photo: ${photo.caption} (opens in a new tab)`}
                  className="block border border-offwhite/10 hover:border-offwhite/40 transition-colors"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </a>
                <figcaption className="mt-3 font-body text-sm text-offwhite/70">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
