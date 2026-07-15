const links = [
  { label: 'Email', value: 'sanchezcesar106@gmail.com', href: 'mailto:sanchezcesar106@gmail.com' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/csanchez65',
    href: 'https://www.linkedin.com/in/csanchez65',
  },
  { label: 'GitHub', value: 'github.com/Saner108', href: 'https://github.com/Saner108' },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32 border-t border-offwhite/8">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-[0.15em] text-offwhite/40 mb-8">Contact</p>

        <h2 className="font-display font-semibold text-2xl md:text-3xl tracking-tight mb-4">
          Let's talk.
        </h2>

        <p className="text-offwhite/60 leading-relaxed max-w-md mb-10">
          Open to internships, freelance analytics work, and conversations about AI, data, or
          anything at the intersection of health and tech.
        </p>

        <div className="space-y-4 mb-10">
          {links.map(({ label, value, href }) => (
            <div key={label} className="flex items-baseline gap-5">
              <span className="text-xs uppercase tracking-[0.12em] text-offwhite/35 w-16 shrink-0">
                {label}
              </span>
              <a
                href={href}
                className="text-sm text-offwhite/70 hover:text-offwhite transition-colors duration-150"
              >
                {value}
              </a>
            </div>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download="Cesar_Sanchez_Resume.pdf"
          className="inline-block text-sm font-medium border-b border-offwhite/30 pb-0.5 hover:border-offwhite transition-colors duration-150"
        >
          Download resume →
        </a>

        <div className="mt-24 pt-8 border-t border-offwhite/10 flex flex-wrap justify-between gap-4 text-xs text-offwhite/25">
          <span>Cesar Sanchez © {new Date().getFullYear()}</span>
          <span>Built with React + Vite</span>
        </div>
      </div>
    </section>
  )
}
