import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-graphite/80 backdrop-blur-md border-b border-offwhite/8">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-sm tracking-tight">
          Cesar Sanchez
        </a>

        <nav className="hidden sm:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs uppercase tracking-[0.12em] text-offwhite/45 hover:text-offwhite transition-colors duration-150"
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="sm:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
