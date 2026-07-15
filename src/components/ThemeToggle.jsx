import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const preferred =
      stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    setTheme(preferred)
    document.documentElement.classList.toggle('light', preferred === 'light')
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('light', next === 'light')
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="text-xs uppercase tracking-[0.12em] text-offwhite/45 hover:text-offwhite transition-colors duration-150"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
