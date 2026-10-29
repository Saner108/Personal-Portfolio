# Personal Portfolio — Cesar Sanchez

Marketing-first personal site targeting data analyst recruiters. One-page scroll, dark default with light toggle.

## Tech Stack
- React + Vite + Tailwind CSS
- Framer Motion for all animations
- No backend, no API calls, no auth

## Key Files
- `src/App.jsx` — root layout, section order, lazy imports for below-fold sections
- `src/components/Nav.jsx` — sticky nav, mobile hamburger with keyboard trap + focus management, active section tracking via IntersectionObserver
- `src/components/Projects.jsx` — project cards; edit `projects[]` array to add/update entries
- `src/components/DataVisual.jsx` — **shared component**: `StockoutDonut` (animated SVG chart) + `ProficiencyDots` (5-dot skill indicator); imported by Projects (eager) and Skills (lazy) — do NOT duplicate
- `src/index.css` — CSS custom properties for light/dark theme
- `tailwind.config.js` — token names: graphite, offwhite, clay, accent, electric
- `public/resume.pdf` — keep updated; linked from Contact section

## Conventions
- Animation: Framer Motion only — no CSS keyframes for entrance/exit
- Colors: use Tailwind tokens (graphite, offwhite, clay, accent, electric) — no raw hex in components
- Typography: `font-display` = General Sans, `font-body` = Inter
- All sections need `id` anchors matching nav hrefs
- Images: `public/images/`; `loading="lazy"` on all below-fold, `loading="eager" fetchpriority="high"` on hero
- Text contrast floor: body text `/75`, secondary metadata `/60`, hover/active states to full opacity

## Constraints
- No form submissions or backend — contact links only
- Reduced motion: `MotionConfig reducedMotion="user"` in App.jsx handles all Framer Motion globally; only use explicit `useReducedMotion()` for infinite animations or non-Framer behaviors (e.g. native scroll, CSS animations)
- Mobile: hamburger menu handles nav; headshot `hidden lg:block` is intentional; tap targets minimum 44×44px
- **Custom domain — update ALL of these together:**
  1. `og:url` + `<link rel="canonical">` in `index.html`
  2. `<loc>` in `public/sitemap.xml`
  3. `Sitemap:` directive in `public/robots.txt`

## Commands
```bash
npm run dev    # localhost:5173
npm run build  # dist/ — lazy chunks: Skills, Experience, Certifications, Education, Contact
```

## Skills
- /repo-routine: Full repo audit + AI-firstify + UX review (see .claude/skills/repo-routine/)
