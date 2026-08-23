import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

// Animated donut chart showing the NorthStar 79.7% / 20.3% finding.
// Pure SVG — no chart library dependency.
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
    const ease = t => 1 - Math.pow(1 - t, 3) // ease-out-cubic
    const frame = ts => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setProgress(ease(p))
      if (p < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [inView, reduceMotion])

  const r = 54
  const cx = 70
  const cy = 70
  const circ = 2 * Math.PI * r
  const dist = 0.797
  const distOff = circ * (1 - dist * progress)
  const otherOff = circ * (1 - (1 - dist) * progress)

  return (
    <div ref={ref} className="flex flex-col items-center gap-6 py-6">
      <div className="relative">
        <svg width="140" height="140" viewBox="0 0 140 140" role="img" aria-label="Donut chart: 79.7% distribution failures, 20.3% true supply shortages">
          {/* Track */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
          {/* Other: 20.3% */}
          <circle
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="14"
            strokeDasharray={circ}
            strokeDashoffset={otherOff}
            strokeLinecap="butt"
            transform={`rotate(-90 ${cx} ${cy})`}
            style={{ transition: reduceMotion ? 'none' : undefined }}
          />
          {/* Primary: 79.7% */}
          <circle
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke="#3EC98A"
            strokeWidth="14"
            strokeDasharray={circ}
            strokeDashoffset={distOff}
            strokeLinecap="butt"
            transform={`rotate(${-90 + 360 * (1 - dist) * progress} ${cx} ${cy})`}
            style={{ transition: reduceMotion ? 'none' : undefined }}
          />
          {/* Centre label */}
          <text x={cx} y={cy - 6} textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="system-ui">
            79.7%
          </text>
          <text x={cx} y={cy + 12} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="system-ui" letterSpacing="0.05em">
            DISTRIBUTION
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-center w-full max-w-[260px]">
        <div>
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
            <span className="text-[10px] uppercase tracking-[0.12em] text-offwhite/50 font-body">Distribution</span>
          </div>
          <p className="text-offwhite font-display font-semibold text-xl">79.7%</p>
          <p className="text-offwhite/50 font-body text-[11px] leading-snug mt-0.5">routing & allocation<br />failures</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-offwhite/30 shrink-0" />
            <span className="text-[10px] uppercase tracking-[0.12em] text-offwhite/50 font-body">True Gap</span>
          </div>
          <p className="text-offwhite/60 font-display font-semibold text-xl">20.3%</p>
          <p className="text-offwhite/50 font-body text-[11px] leading-snug mt-0.5">actual supply<br />shortages</p>
        </div>
      </div>

      <p className="text-[11px] text-offwhite/35 font-body text-center max-w-[240px] leading-snug">
        Finding from ~1.6M rows · NorthStar Retail Pilot
      </p>
    </div>
  )
}

// Horizontal bar chart for skills proficiency
export function SkillBars({ skills }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduceMotion = useReducedMotion()

  return (
    <div ref={ref} className="space-y-3">
      {skills.map(({ label, pct }, i) => (
        <div key={label}>
          <div className="flex justify-between mb-1">
            <span className="text-xs font-body text-offwhite/70">{label}</span>
            <span className="text-xs font-body text-offwhite/40">{pct}%</span>
          </div>
          <div className="h-1 bg-offwhite/8 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent/70 rounded-full"
              style={{
                width: inView ? `${pct}%` : '0%',
                transition: reduceMotion ? 'none' : `width ${0.6 + i * 0.1}s cubic-bezier(.22,.68,0,1) ${i * 0.07}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
