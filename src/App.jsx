import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { lazy, Suspense } from 'react'
import Nav from './components/Nav'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import About from './components/About'
import GradientThread from './components/GradientThread'
import Projects from './components/Projects'
import Section from './components/Section'

// Below-fold sections lazy-loaded — deferred until after first paint
const Skills         = lazy(() => import('./components/Skills'))
const Certifications = lazy(() => import('./components/Certifications'))
const Contact        = lazy(() => import('./components/Contact'))

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <div className="bg-graphite text-offwhite min-h-screen">
          <Nav />
          <main>
            <Hero />
            <Section>
              <About />
            </Section>
            <GradientThread />
            <Section>
              <Projects />
            </Section>
            <Suspense fallback={null}>
              <Section>
                <Skills />
              </Section>
              <Section>
                <Certifications />
              </Section>
              <Section>
                <Contact />
              </Section>
            </Suspense>
          </main>
          <SpeedInsights />
          <ScrollToTop />
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}
