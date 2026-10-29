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
  return (
    <article id="education" aria-labelledby="education-heading" className="data-card h-full min-w-0 border border-offwhite/15 bg-graphite p-6 sm:p-8">
      <h3 id="education-heading" className="font-display font-semibold text-xl text-offwhite mb-6">Degrees</h3>
      <div className="divide-y divide-offwhite/10">
        {schools.map((school, index) => (
          <section
            key={school.name}
            aria-labelledby={`degree-${index}`}
            className="py-5 first:pt-0 last:pb-0"
          >
            <h4
              id={`degree-${index}`}
              className="font-display font-semibold text-base text-offwhite leading-snug mb-2"
            >
              {school.name}
            </h4>
            <p className="text-offwhite/75 font-body text-sm leading-relaxed mb-1">
              {school.degree}
            </p>
            <p className="text-offwhite/60 font-body text-xs leading-relaxed">{school.detail} · {school.dates}</p>

            {school.coursework && (
              <details className="mt-2">
                <summary className="mx-auto min-h-[44px] w-fit cursor-pointer py-3 font-body text-xs text-accent hover:text-offwhite">View coursework<span className="sr-only"> for {school.name}</span></summary>
                <p className="font-body text-sm text-offwhite/75 leading-relaxed">{school.coursework.join(' · ')}</p>
              </details>
            )}
          </section>
        ))}
      </div>
    </article>
  )
}
