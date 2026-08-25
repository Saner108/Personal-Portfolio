// Single source of truth for project data — used by both the Hero's project
// grid and the full Projects section, so the two never drift apart.
export const projects = [
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
