import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Background from './components/Background'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-graphite text-offwhite min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Background />
        <Contact />
      </main>
    </div>
  )
}
