const projects = [
  {
    id: 'nutricook-ai',
    name: 'NutriCook AI',
    status: 'In development',
    tagline:
      'An AI-powered meal planning app that generates personalized plans from user goals, dietary needs, and budget — built by integrating Claude, ChatGPT, and Base44 into one working prototype, end to end.',
    tech: 'Artificial Intelligence · Prompt Engineering · ChatGPT · Claude · Base44',
    link: 'https://github.com/Saner108/nutricook-ai',
    demo: 'https://nutricook-ai-kappa.vercel.app/',
    image: '/images/nutricook-ai-screenshot.jpg',
  },
  {
    id: 'nutrition-db',
    name: 'Animal Diet & Nutrition Tracking Database',
    status: 'Completed',
    tagline:
      'A relational database that replaced a fully manual tracking process — normalized schema, VBA interface, built for real aquarium staff to use.',
    tech: 'Microsoft Access · SQL Queries · VBA · Relational Database Design',
    link: 'https://github.com/Saner108/Excel-Business-Analytics-Portfolio',
    image: null,
  },
  {
    id: 'financial-forecast',
    name: 'Financial Forecasting Model',
    status: 'Completed',
    tagline:
      'A scenario-analysis tool that turns a static budget into a decision-support system — model out debt payoff vs. investing, before you commit.',
    tech: 'Microsoft Excel · Financial Modeling · Forecasting · Scenario Analysis',
    link: 'https://github.com/Saner108/Excel-Business-Analytics-Portfolio',
    image: '/images/financial-forecasting-screenshot.jpg',
  },
  {
    id: 'inventory-tracking',
    name: 'Inventory Tracking System',
    status: 'Completed',
    tagline:
      'The first structured inventory process for a weekly nutrition program that had none — built from scratch, not retrofitted.',
    tech: 'Microsoft Excel · Inventory Management · Process Improvement',
    link: 'https://github.com/Saner108/Excel-Business-Analytics-Portfolio',
    image: '/images/inventory-tracker-screenshot.jpg',
  },
]

function ProjectRow({ project }) {
  return (
    <div className="py-10 border-t border-offwhite/10 grid sm:grid-cols-[1fr_auto] gap-6 sm:gap-10 items-start">
      <div>
        <div className="flex items-baseline gap-3 mb-2">
          <h3 className="font-display font-semibold text-lg tracking-tight">{project.name}</h3>
          <span className="text-xs text-offwhite/35">{project.status}</span>
        </div>
        <p className="text-offwhite/60 text-sm leading-relaxed mb-3 max-w-md">
          {project.tagline}
        </p>
        <p className="text-xs text-offwhite/35 mb-3">{project.tech}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <a
            href={project.link}
            className="text-sm text-offwhite/50 hover:text-offwhite transition-colors duration-150"
          >
            GitHub →
          </a>
          {project.demo && (
            <a
              href={project.demo}
              className="text-sm text-offwhite/50 hover:text-offwhite transition-colors duration-150"
            >
              Live demo →
            </a>
          )}
        </div>
      </div>

      {project.image ? (
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          className="w-full sm:w-64 border border-offwhite/10"
        />
      ) : (
        <div className="w-full sm:w-64 h-32 border border-dashed border-offwhite/10 flex items-center justify-center">
          {/* TODO: add Aquarium DB screenshot when provided */}
          <p className="text-offwhite/25 text-xs">Screenshot pending</p>
        </div>
      )}
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="px-6 py-24 md:py-32 border-t border-offwhite/8">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-[0.15em] text-offwhite/40 mb-8">Work</p>

        <h2 className="font-display font-semibold text-2xl md:text-3xl tracking-tight mb-2">
          Things I've built.
        </h2>

        <div>
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
