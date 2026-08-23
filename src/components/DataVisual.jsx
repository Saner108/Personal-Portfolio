import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

// Animated donut chart for the NorthStar 79.7% / 20.3% finding.
// Pure SVG — no chart library. Uses portfolio electric blue (#3D8BFF)
// so it reads as a data element, consistent with the gradient system.
export function StockoutDonut() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduceMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) { setProgress(1); return }
    let start = null
    const duration = 1400
    const ease = t => 1 - Math.pow(1 - t, 3)
    const frame = ts => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setProgress(ease(p))
      if (p < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [inView, reduceMotion])

  const r = 54, cx = 70, cy = 70
  const circ = 2 * Math.PI * r
  const dist = 0.797
  const distDash = circ * (1 - dist * progress)
  const otherDash = circ * (1 - (1 - dist) * progress)

  return (
    <div ref={ref} className="flex flex-col items-center gap-5 py-8 px-4">
      <div className="relative">
        <svg width="140" height="140" viewBox="0 0 140 140"
          role="img"
          aria-label="Donut chart: 79.7% distribution failures, 20.3% true supply shortages">
          {/* Track */}
          <circle cx={cx} cy={cy} r={r} fill="none"
            stroke="rgba(255,255,255,0.06)" strokeWidth="13" />
          {/* Other segment: 20.3% */}
          <circle cx={cx} cy={cy} r={r} fill="none"
            stroke="rgba(255,255,255,0.16)" strokeWidth="13"
            strokeDasharray={circ} strokeDashoffset={otherDash}
            transform={`rotate(-90 ${cx} ${cy})`} />
          {/* Primary segment: 79.7% — electric blue */}
          <circle cx={cx} cy={cy} r={r} fill="none"
            stroke="#3D8BFF" strokeWidth="13"
            strokeDasharray={circ} strokeDashoffset={distDash}
            transform={`rotate(${-90 + 360 * (1 - dist) * progress} ${cx} ${cy})`} />
          {/* Centre */}
          <text x={cx} y={cy - 7} textAnchor="middle"
            fill="white" fontSize="18" fontWeight="700" fontFamily="system-ui">
            79.7%
          </text>
          <text x={cx} y={cy + 11} textAnchor="middle"
            fill="rgba(255,255,255,0.4)" fontSize="9"
            fontFamily="system-ui" letterSpacing="0.06em">
            DISTRIBUTION
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-3 w-full max-w-[260px]">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#3D8BFF' }} />
            <span className="text-[10px] uppercase tracking-[0.12em] text-offwhite/45 font-body">Distribution</span>
          </div>
          <p className="text-offwhite font-display font-semibold text-xl">79.7%</p>
          <p className="text-offwhite/45 font-body text-[11px] leading-snug mt-0.5">routing &<br />allocation failures</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-offwhite/25 shrink-0" />
            <span className="text-[10px] uppercase tracking-[0.12em] text-offwhite/45 font-body">True Gap</span>
          </div>
          <p className="text-offwhite/55 font-display font-semibold text-xl">20.3%</p>
          <p className="text-offwhite/45 font-body text-[11px] leading-snug mt-0.5">actual supply<br />shortages</p>
        </div>
      </div>

      <p className="text-[10px] text-offwhite/30 font-body text-center leading-snug">
        ~1.6M rows · NorthStar Retail Analytics Pilot
      </p>
    </div>
  )
}

// Five-dot proficiency indicator used in Skills
export function ProficiencyDots({ level }) {
  return (
    <div className="flex gap-0.5 mt-1.5" aria-label={`Proficiency ${level} of 5`}>
      {[1,2,3,4,5].map(i => (
        <span key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i <= level ? 'bg-accent/80' : 'bg-offwhite/10'
          }`} />
      ))}
    </div>
  )
}
