import { useRef } from 'react'
import { StockoutDonut } from './DataVisual'
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

const projects = [
  {
    id: 'northstar',
    label: 'Analytics Project',
    name: 'NorthStar Retail Group — Inventory Visibility Pilot',
    problem:
      'A regional retailer\'s stockouts look like a supply shortage on the surface — but is the real issue supply, or inventory sitting in the wrong warehouse?',
    method:
      'Built a full analytics pipeline on ~1.6M rows of synthetic, deterministic data: star-schema modeling in SQL, an end-to-end load → validate → analyze workflow with 17 automated data quality checks, and an executive Power BI dashboard. Python handled data generation and validation scripting.',
    value:
      '79.7% of stockouts traced back to distribution routing issues, not true supply shortages. That finding flips the recommended fix from "buy more inventory" to "redistribute what already exists" — a materially different (and cheaper) business decision. Demonstrates the full analyst cycle: frame the business question, build the data model, run the analysis, tell the story.',
    highlight: '79.7% of stockouts = distribution failure, not supply shortage',
    tech: [
      'SQL',
      'Star Schema / Dimensional Modeling',
      'Power BI',
      'Python',
      'Data Validation (17 automated checks)',
      'Synthetic Data Generation',
    ],
    status: 'Completed',
    link: 'https://github.com/Saner108/NorthStar-Enterprise-Analytics',
    demo: 'https://north-star-enterprise-analytics.vercel.app/',
    image: '/images/northstar-dashboard.jpg',
    flagship: true,
  },
  {
    id: 'nutricook-ai',
    label: 'AI Product',
    name: 'NutriCook AI',
    highlight: 'Weight-aware generation — input "8 oz chicken" and per-serving macros calculate from actual portions, not estimates',
    problem:
      'Personalized meal planning that accounts for a user\'s goals, dietary constraints, and exact ingredient weights takes expertise most people don\'t have on demand.',
    method:
      'Full-stack web app: React frontend, Node.js serverless API, Supabase for auth and data, Stripe for payments. Claude Sonnet generates recipes via a streaming API — prompts include ingredient weights, serving counts, and goal context so macro calculations are per-serving accurate. Fridge scanning uses Claude\'s vision to extract ingredient names and quantities from photos.',
    value:
      'Demonstrates end-to-end product development — from data model design and API architecture through UX, deployment, and production monitoring. Shows that the analytics thinking (macro validation, sanitization logic, quota tracking) extends into how the product is built, not just what it analyzes.',
    tech: ['React', 'Node.js', 'Supabase', 'Claude API', 'Stripe', 'Vercel'],
    status: 'In Development',
    link: 'https://github.com/Saner108/nutricook-ai',
    demo: 'https://nutricook-ai-kappa.vercel.app/',
    image: '/images/nutricook-ai-screenshot.jpg',
    flagship: false,
  },
  {
    id: 'financial-forecast',
    label: 'Financial Model',
    name: 'Financial Forecasting & Scenario Model',
    problem:
      'A static budget shows where money goes today but can\'t answer "what if?" — how does accelerating debt payoff, changing a savings rate, or making a major purchase change your financial position 5 years out?',
    method:
      'Built a scenario-analysis model in Excel with dynamic input controls: adjust savings rate, debt payoff pace, or income growth and all projections update automatically. Includes sensitivity tables, a net-worth trajectory chart, and a break-even analysis for major purchases.',
    value:
      'Demonstrates financial modeling fundamentals — scenario analysis, sensitivity tables, dynamic assumption inputs — applied to a real decision-support problem. The model is actively used, which means it\'s been stress-tested against real data and real decisions, not a class assignment that was turned in and forgotten.',
    tech: ['Excel', 'Scenario Analysis', 'Sensitivity Tables', 'Financial Forecasting', 'Dynamic Modeling'],
    status: 'Completed',
    link: 'https://github.com/Saner108/Excel-Business-Analytics-Portfolio',
    image: '/images/financial-forecasting-screenshot.jpg',
    flagship: false,
  },
  {
    id: 'inventory-tracking',
    label: 'Operations Analytics',
    name: 'Nutrition Program Inventory System',
    problem:
      'A weekly nutrition coaching program had no formal inventory process — ingredients and supplies were tracked by memory, which meant shortages went undetected until sessions were already underway.',
    method:
      'Designed and built the first structured inventory system from scratch: defined what to track (SKU-level ingredient quantities, session consumption rates, reorder thresholds), built variance tracking in Excel with pivot tables to surface which categories ran short most often, and set up a reorder alert framework based on trailing 4-week usage.',
    value:
      'Shows the ability to structure ambiguous operational data into a repeatable analytics workflow — not just "built a spreadsheet" but defined the measurement framework, chose the right granularity, and connected the output to an actual operational decision (when to reorder). Covers 50+ SKUs across recurring weekly sessions.',
    tech: ['Excel', 'Pivot Tables', 'Variance Analysis', 'Process Design', 'Operational Metrics'],
    status: 'Completed',
    link: 'https://github.com/Saner108/Excel-Business-Analytics-Portfolio',
    image: '/images/inventory-tracker-screenshot.jpg',
    flagship: false,
  },
  {
    id: 'nutrition-db',
    label: 'Database Design',
    name: 'Animal Diet & Nutrition Tracking Database',
    problem:
      'Texas State Aquarium staff tracked animal diet and nutrition data informally — no schema, no query interface, high error risk for a real institutional client.',
    method:
      'Designed and built a normalized relational database in Microsoft Access (3NF): entity-relationship modeling, table design with proper primary/foreign key constraints, and a VBA-driven interface so staff could enter and retrieve records without writing SQL.',
    value:
      'Real client, real schema design, real constraints — not a classroom exercise with a clean problem statement. Demonstrates database fundamentals (normalization, referential integrity, query design) applied under institutional requirements.',
    tech: ['Microsoft Access', 'VBA', 'Relational Database Design (3NF)', 'ER Modeling', 'Data Normalization'],
    status: 'Completed',
    link: null,
    image: null,
    noScreenshot: true,
    flagship: false,
  },
]

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
            <div className="flex items-center gap-3 mb-8">
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
                <p className="text-[10px] uppercase tracking-[0.15em] text-offwhite/40 font-body mb-1">Impact</p>
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
      className="border border-offwhite/10 p-8 md:p-10 bg-offwhite/[0.01] hover:bg-offwhite/[0.03] transition-colors duration-300"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[10px] uppercase tracking-[0.2em] text-offwhite/50 font-body border border-offwhite/15 px-2 py-1">
          {project.label}
        </span>
        <span className="text-[10px] uppercase tracking-[0.15em] text-offwhite/30 font-body">
          {project.status}
        </span>
      </div>

      {project.image && (
        <div className="mb-6 overflow-hidden border border-offwhite/10">
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            width="1200"
            height="750"
            className="w-full object-cover"
          />
        </div>
      )}

      <h3 className="font-display font-semibold text-offwhite text-xl md:text-2xl leading-tight tracking-tight mb-5">
        {project.name}
      </h3>

      {project.highlight && (
        <div className="border-l-2 border-offwhite/20 pl-4 mb-5">
          <p className="text-sm font-body text-offwhite/85 font-medium leading-snug">{project.highlight}</p>
        </div>
      )}

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
          <p className="text-[10px] uppercase tracking-[0.15em] text-offwhite/40 font-body mb-1">Impact</p>
          <p className="text-offwhite/80 font-body text-sm leading-relaxed">{project.value}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="text-[10px] uppercase tracking-[0.12em] text-offwhite/40 font-body border border-offwhite/8 px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>

      {!project.flagship && !project.image && (
        <div className="mt-6 border border-dashed border-offwhite/10 py-10 flex items-center justify-center">
          <p className="text-offwhite/75 font-body text-sm tracking-wide">
            {project.noScreenshot ? 'Screenshot pending client approval' : 'Screenshot coming soon'}
          </p>
        </div>
      )}

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
          The work.
        </motion.h2>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 2} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
