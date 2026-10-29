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
    <>
      {schools.map((school, index) => (
        <article
          key={school.name}
          id={index === 0 ? 'education' : undefined}
          aria-labelledby={`degree-${index}`}
          className="h-full min-w-0 border border-offwhite/15 bg-graphite p-6 sm:p-8"
        >
          <p className="font-body text-xs uppercase tracking-[0.18em] text-offwhite/60 mb-3">Degree</p>
          <div className="space-y-3 mb-6">
            <div>
              <h3
                id={`degree-${index}`}
                className="font-display font-semibold text-lg text-offwhite leading-tight sm:min-h-[2.5em] mb-6"
              >
                {school.name}
              </h3>
              <p className="text-offwhite/75 font-body text-sm leading-relaxed mb-1">
                {school.degree}
              </p>
              <p className="text-offwhite/50 font-body text-sm tracking-wide">{school.detail}</p>
            </div>
            <div>
              <span className="text-offwhite/50 font-body text-sm tracking-wide whitespace-nowrap">
                {school.dates}
              </span>
            </div>
          </div>

          {school.coursework && (
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-offwhite/40 font-body mb-3">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {school.coursework.map(course => (
                  <span
                    key={course}
                    className="text-xs font-body text-offwhite/75 border border-offwhite/15 px-3 py-1.5 leading-none"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      ))}
    </>
  )
}
