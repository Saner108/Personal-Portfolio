const stats = [
  { value: '3+', label: 'Years coaching/training' },
  { value: '4', label: 'Systems built, zero to production' },
  { value: '2', label: 'Business degrees' },
]

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32 border-t border-offwhite/8">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-[0.15em] text-offwhite/40 mb-8">About</p>

        <h2 className="font-display font-semibold text-2xl md:text-3xl tracking-tight leading-snug mb-8">
          The through-line is always optimization.
        </h2>

        <div className="space-y-5 text-offwhite/65 leading-relaxed mb-12">
          <p>
            I'm a double major in Finance and Business Analytics at Texas A&M
            University–Corpus Christi — and outside of that, fitness has always been a genuine
            hobby, not just a resume line. That hobby turned into real jobs: three years as a
            personal trainer, group fitness instructor, and now Head Nutrition Coach, designing
            individualized programs and coaching clients through nutrition change.
          </p>
          <p>
            As I've continued through school, I've gotten to develop the nutrition coaching
            program at TAMUCC, build a database for the Texas State Aquarium as a business
            project, earn certifications along the way, and build working Excel systems for my
            everyday job.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-4 mb-12 border-t border-offwhite/10 pt-8">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="font-display font-semibold text-2xl mb-0.5">{value}</div>
              <div className="text-xs text-offwhite/40 tracking-wide max-w-[10rem]">{label}</div>
            </div>
          ))}
        </div>

        <img
          src="/images/team-photo.jpg"
          alt="TAMUCC Recreational Sports staff team"
          loading="lazy"
          className="w-full border border-offwhite/10"
        />
      </div>
    </section>
  )
}
