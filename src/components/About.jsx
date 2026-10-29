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

const photos = [
  {
    src: '/images/headshot.jpg',
    alt: 'Cesar Sanchez',
    caption: 'Cesar Sanchez',
    width: 1200,
    height: 2133,
    featured: true,
    frame: 'flex-1',
  },
  {
    src: '/images/team-photo.jpg',
    alt: 'TAMUCC Recreational Sports staff team',
    caption: 'Campus team',
    width: 1600,
    height: 1200,
    frame: 'aspect-[4/3]',
  },
  {
    src: '/images/prepared-meal.jpeg',
    alt: 'A prepared meal with cucumber and watermelon in a kitchen',
    caption: 'In the kitchen',
    width: 3024,
    height: 4032,
    frame: 'aspect-[4/3]',
  },
  {
    src: '/images/fitness-studio.jpeg',
    alt: 'Seated mirror photo in a purple-lit fitness studio',
    caption: 'Fitness',
    width: 2520,
    height: 3360,
    frame: 'aspect-[4/5]',
  },
  {
    src: '/images/training-group.jpg',
    alt: 'A group posing together in a gym mirror',
    caption: 'Training together',
    width: 1320,
    height: 2184,
    frame: 'aspect-[4/5]',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section id="about" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-6xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          About
        </motion.p>

        <motion.h2
          className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-12"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          Learning through data.
          <br />
          Leading through people.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <section aria-labelledby="personal-photos-heading">
            <h3 id="personal-photos-heading" className="sr-only">Personal photos</h3>
            <div className="grid grid-cols-2 gap-4">
              {photos.map((photo) => (
                <figure key={photo.src} className={photo.featured ? 'row-span-2 flex min-h-0 flex-col' : ''}>
                  <a
                    href={photo.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open full-size photo: ${photo.caption} (opens in a new tab)`}
                    className={`relative block min-h-0 overflow-hidden border border-offwhite/10 hover:border-offwhite/40 transition-colors ${photo.frame}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </a>
                  <figcaption className="mt-2 font-body text-xs text-offwhite/70">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 font-body text-xs text-offwhite/60">Select a photo to view it in full.</p>
          </section>

          <div className="space-y-8">
            <section aria-labelledby="academic-focus-heading" className="border-t border-offwhite/10 pt-6">
              <h3 id="academic-focus-heading" className="font-display text-xl font-semibold text-offwhite mb-4">
                School & academic focus
              </h3>
              <ul className="list-disc pl-5 space-y-3 font-body text-sm md:text-base text-offwhite/80 leading-relaxed">
                <li>Dual BBA in Finance and Business Analytics & Information Systems at Texas A&M University–Corpus Christi. Expected graduation: Spring 2027.</li>
                <li>Coursework includes database management, financial modeling, business intelligence, and data mining & analysis.</li>
                <li>Associate of Arts, Management Information Systems — Tarrant County College, August 2021–April 2023.</li>
              </ul>
              <a href="#education" className="inline-block mt-4 py-3 font-body text-sm text-offwhite/75 underline underline-offset-4 hover:text-offwhite">
                View education & coursework
              </a>
            </section>

            <section aria-labelledby="leadership-heading" className="border-t border-offwhite/10 pt-6">
              <h3 id="leadership-heading" className="font-display text-xl font-semibold text-offwhite mb-2">
                Teams, events & operations
              </h3>
              <p className="font-body text-xs text-offwhite/60 mb-4">TAMUCC campus roles · August 2023–August 2026</p>
              <ul className="list-disc pl-5 space-y-3 font-body text-sm md:text-base text-offwhite/80 leading-relaxed">
                <li><strong className="font-medium text-offwhite">Team development:</strong> Trained three staff members to run nutrition-coaching workflows independently.</li>
                <li><strong className="font-medium text-offwhite">Events & classes:</strong> Organized wellness events, oversaw cooking classes, and led HIIT sessions.</li>
                <li><strong className="font-medium text-offwhite">Inventory:</strong> Managed inventory as part of the nutrition-coaching program.</li>
                <li><strong className="font-medium text-offwhite">Coaching & youth activities:</strong> Designed individualized training programs and led seasonal sports and fitness activities for children.</li>
              </ul>
              <a href="#experience" className="inline-block mt-4 py-3 font-body text-sm text-offwhite/75 underline underline-offset-4 hover:text-offwhite">
                View roles & experience
              </a>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
