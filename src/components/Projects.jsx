import { useRef } from 'react'
import { StockoutDonut } from './DataVisual'
import { projects } from '../data/projects'
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

function ProjectCard({ project, index, inView }) {
  const cardRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 0.9', 'center 0.35'],
  })
  const sweepX = useTransform(scrollYProgress, [0.15, 0.95], ['-130%', '130%'])

  if (project.flagship) {
    return (
      <motion.div
        ref={cardRef}
        className="relative overflow-hidden border border-offwhite/10 bg-offwhite/[0.02]"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={index}
      >
        {/* Light sweep */}
        {!reduceMotion && (
          <motion.div
            className="pointer-events-none absolute inset-y-0 w-1/3"
            style={{
              x: sweepX,
              background:
                'linear-gradient(90deg, transparent, rgb(var(--color-text)/0.04), transparent)',
            }}
          />
        )}

        <div className="grid lg:grid-cols-2 gap-0">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-body border border-accent/30 px-2 py-1">
                {project.label}
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-offwhite/40 font-body">
                {project.status}
              </span>
            </div>

            <h3
              className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
            >
              {project.name}
            </h3>

            {/* Key finding callout */}
            {project.highlight && (
              <div className="border-l-2 border-electric pl-4 mb-6">
                <p className="text-sm font-body text-electric/90 font-medium leading-snug">
                  {project.highlight}
                </p>
              </div>
            )}

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-offwhite/40 font-body mb-1">Problem</p>
                <p className="text-offwhite/75 font-body text-sm leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-offwhite/40 font-body mb-1">Method</p>
                <p className="text-offwhite/75 font-body text-sm leading-relaxed">{project.method}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-offwhite/40 font-body mb-1">Value & scope</p>
                <p className="text-offwhite/80 font-body text-sm leading-relaxed">{project.value}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] uppercase tracking-[0.12em] text-offwhite/50 font-body border border-offwhite/10 px-2.5 py-1">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-5">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-body text-offwhite/70 hover:text-offwhite transition-colors duration-200 tracking-wide">
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-body text-offwhite/70 hover:text-offwhite transition-colors duration-200 tracking-wide">
                  Live Demo →
                </a>
              )}
            </div>
          </div>

          {project.image && (
            <div className="relative border-t lg:border-t-0 lg:border-l border-offwhite/10 overflow-hidden bg-offwhite/[0.02] flex flex-col items-center justify-start gap-0">
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                loading="lazy"
                width="1200"
                height="750"
                className="w-full object-cover"
              />
              {/* Inline data visualization — the key finding, made visual */}
              {project.id === 'northstar' && (
                <div className="w-full border-t border-offwhite/10 bg-offwhite/[0.02]">
                  <StockoutDonut />
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`border border-offwhite/10 p-8 md:p-10 bg-offwhite/[0.01] hover:bg-offwhite/[0.03] transition-colors duration-300 ${project.id === 'nutricook-ai' ? 'md:col-span-2 md:grid md:grid-cols-2 md:items-center md:gap-10' : ''}`}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
    >
      {project.image && (
        <div className={`overflow-hidden border border-offwhite/10 ${project.id === 'nutricook-ai' ? 'mb-6 md:mb-0' : 'mb-6'}`}>
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            width="1200"
            height="750"
            className="w-full h-auto"
          />
        </div>
      )}

      <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="text-[10px] uppercase tracking-[0.2em] text-offwhite/50 font-body border border-offwhite/15 px-2 py-1">
          {project.label}
        </span>
        <span className="text-[10px] uppercase tracking-[0.15em] text-offwhite/30 font-body">
          {project.status}
        </span>
      </div>

      <h3 className="font-display font-semibold text-offwhite text-xl md:text-2xl leading-tight tracking-tight mb-5">
        {project.name}
      </h3>

      {project.images && (
        <div className="space-y-5 mb-6">
          {project.images.map((image) => (
            <figure key={image.src}>
              <a href={image.src} target="_blank" rel="noopener noreferrer"
                className="block border border-offwhite/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                aria-label={`Open full-size image: ${image.caption}`}>
                <img src={image.src} alt={image.caption} loading="lazy" className="w-full h-auto" />
              </a>
              <figcaption className="mt-2 text-xs font-body leading-relaxed text-offwhite/75">
                {image.caption} · Open image for full size ↗
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {project.imagePlaceholder && (
        <div className="mb-6 aspect-video border border-dashed border-offwhite/25 bg-offwhite/[0.02] flex flex-col items-center justify-center gap-2 p-6 text-center">
          <p className="font-body text-sm text-offwhite/75">{project.imagePlaceholder}</p>
          <p className="font-body text-xs text-offwhite/60">Image placeholder</p>
        </div>
      )}

      {project.highlight && (
        <div className="border-l-2 border-offwhite/20 pl-4 mb-5">
          <p className="text-sm font-body text-offwhite/85 font-medium leading-snug">{project.highlight}</p>
        </div>
      )}

      {project.contents ? (
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.15em] text-offwhite/60 font-body mb-3">What's inside</p>
          <ul className="list-disc pl-5 space-y-3 text-offwhite/75 font-body text-sm leading-relaxed">
            {project.contents.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      ) : (
      <div className="space-y-3 mb-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-offwhite/40 font-body mb-1">Problem</p>
          <p className="text-offwhite/75 font-body text-sm leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-offwhite/40 font-body mb-1">Method</p>
          <p className="text-offwhite/75 font-body text-sm leading-relaxed">{project.method}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-offwhite/40 font-body mb-1">Value & scope</p>
          <p className="text-offwhite/80 font-body text-sm leading-relaxed">{project.value}</p>
        </div>
      </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="text-[10px] uppercase tracking-[0.12em] text-offwhite/40 font-body border border-offwhite/8 px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5 mt-6">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="text-sm font-body text-offwhite/70 hover:text-offwhite transition-colors duration-200 tracking-wide">
            GitHub →
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            className="text-sm font-body text-offwhite/70 hover:text-offwhite transition-colors duration-200 tracking-wide">
            Live Demo →
          </a>
        )}
      </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <section id="projects" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Projects
        </motion.p>

        <motion.h2
          className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-16"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          Analytics, databases & applications.
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 [&>*:first-child]:md:col-span-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 2} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
