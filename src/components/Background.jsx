const roles = [
  {
    title: 'Head Nutrition Coach',
    org: 'TAMUCC',
    dates: 'Jun 2025–Present',
    description:
      'Oversee personalized nutrition coaching and cooking classes for the campus community, designing individualized guidance around sustainable, realistic habits rather than one-size-fits-all plans.',
  },
  {
    title: 'Group Fitness Instructor',
    org: 'TAMUCC',
    dates: 'Sep 2024–Present',
    description:
      'Lead high-energy HIIT classes focused on functional movement and cardio conditioning for a recurring member base.',
  },
  {
    title: 'Personal Trainer',
    org: 'TAMUCC',
    dates: 'Aug 2023–Present',
    description:
      'Design individualized training programs tailored to client goals — fat loss, muscle gain, and general performance — with ongoing program adjustments based on progress.',
  },
  {
    title: 'Member Ambassador',
    org: 'Orangetheory Fitness',
    dates: 'Oct 2022–Aug 2023',
    description:
      'Managed sales transactions and class scheduling logistics, improving accuracy in a high-volume environment and contributing to fewer no-shows.',
  },
  {
    title: 'Sales and Service Expert',
    org: '24 Hour Fitness',
    dates: 'Dec 2021–Oct 2022',
    description:
      'Advised customers on fitness products and services, supporting informed purchasing decisions in a fast-paced retail environment.',
  },
]

const skills = [
  {
    category: 'Data Analytics & Business Systems',
    items: 'Microsoft Excel · Microsoft Access & VBA · Tableau · SAP Analytics Cloud',
  },
  {
    category: 'Finance',
    items: 'Financial Modeling · Scenario / Forecasting Analysis · Personal Financial Systems Design',
  },
  {
    category: 'Artificial Intelligence',
    items: 'Claude · Prompt Engineering · AI-Assisted Product Development',
  },
  {
    category: 'Programming',
    items: 'Python · VBA',
  },
  {
    category: 'Professional',
    items: 'Client-Facing Program Design · Nutrition Coaching · Group Instruction',
  },
]

const education = [
  {
    name: 'Texas A&M University–Corpus Christi',
    degree: 'Dual BBA — Finance; Business Analytics & Information Systems',
    dates: 'Expected Spring 2027',
  },
  {
    name: 'Tarrant County College',
    degree: 'Associate of Arts, Management Information Systems',
    dates: 'Aug 2021 – Apr 2023',
  },
]

const certifications = [
  { name: 'Claude Code 101 — Anthropic', dates: '2026' },
  { name: 'Claude 101 — Anthropic', dates: '2026' },
  { name: 'AI Fluency: Framework & Foundations — Anthropic', dates: '2026' },
  { name: 'Mining Quality Prediction Using Machine & Deep Learning — Coursera', dates: '2026' },
  { name: 'Tableau Essential Training — LinkedIn Learning', dates: '2023' },
  { name: 'Learning SAP Analytics Cloud — LinkedIn Learning', dates: '2023' },
  { name: 'GitHub Foundations', dates: null, inProgress: true },
  { name: 'NASM Nutrition Coach Certification', dates: '2025–2027' },
  { name: 'NASM Personal Trainer Certification', dates: 'expires Jan 2028' },
  { name: 'CPR & AED — American Red Cross', dates: null },
  { name: 'Texas Insurance Broker License', dates: '2026–2028' },
]

function SubSection({ label, children }) {
  return (
    <div className="mb-14 last:mb-0">
      <h3 className="text-xs uppercase tracking-[0.15em] text-offwhite/35 mb-5">{label}</h3>
      {children}
    </div>
  )
}

export default function Background() {
  return (
    <section id="background" className="px-6 py-24 md:py-32 border-t border-offwhite/8">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-[0.15em] text-offwhite/40 mb-8">Background</p>

        <h2 className="font-display font-semibold text-2xl md:text-3xl tracking-tight mb-14">
          Where I've been.
        </h2>

        <SubSection label="Experience">
          <div className="space-y-7">
            {roles.map((role) => (
              <div key={role.title}>
                <div className="flex flex-wrap items-baseline gap-x-2 mb-1">
                  <span className="font-medium text-sm">{role.title}</span>
                  <span className="text-offwhite/35 text-xs">
                    {role.org} · {role.dates}
                  </span>
                </div>
                <p className="text-offwhite/55 text-sm leading-relaxed max-w-md">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </SubSection>

        <SubSection label="Skills">
          <div className="space-y-3">
            {skills.map((group) => (
              <div key={group.category} className="text-sm">
                <span className="text-offwhite/85 font-medium">{group.category}</span>
                <span className="text-offwhite/45"> — {group.items}</span>
              </div>
            ))}
          </div>
        </SubSection>

        <SubSection label="Education">
          <div className="space-y-5">
            {education.map((school) => (
              <div key={school.name}>
                <div className="font-medium text-sm mb-0.5">{school.name}</div>
                <div className="text-offwhite/55 text-sm">{school.degree}</div>
                <div className="text-offwhite/35 text-xs">{school.dates}</div>
              </div>
            ))}
          </div>
        </SubSection>

        <SubSection label="Certifications">
          <ul className="text-sm text-offwhite/55 space-y-2">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex flex-wrap items-baseline gap-x-2">
                <span className={cert.inProgress ? 'text-offwhite/35' : ''}>{cert.name}</span>
                {cert.inProgress && (
                  <span className="text-[10px] uppercase tracking-wide text-clay/80 border border-clay/30 px-1.5 py-0.5">
                    In progress
                  </span>
                )}
                {cert.dates && <span className="text-offwhite/30 text-xs">({cert.dates})</span>}
              </li>
            ))}
          </ul>
        </SubSection>
      </div>
    </section>
  )
}
