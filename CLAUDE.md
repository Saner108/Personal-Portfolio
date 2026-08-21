# Personal Portfolio — Cesar Sanchez

Marketing-first personal site for recruiter/hiring-manager audience. One-page scroll, dark default with light toggle.

## Tech Stack
- React + Vite + Tailwind CSS
- Framer Motion for all animations
- No backend, no API calls, no auth

## Key Files
- `src/App.jsx` — root layout, section order
- `src/components/Nav.jsx` — sticky nav with mobile hamburger + scroll-hide behavior
- `src/components/Projects.jsx` — project cards with gleam animation; edit `projects[]` array to add/update entries
- `src/index.css` — CSS custom properties for light/dark theme
- `tailwind.config.js` — token names: graphite, offwhite, clay, accent, electric
- `public/resume.pdf` — keep updated; linked from Contact section

## Conventions
- Animation: Framer Motion only — no CSS keyframes for entrance/exit
- Colors: use Tailwind tokens (graphite, offwhite, clay, accent) — no raw hex in components
- Typography: `font-display` = General Sans, `font-body` = Inter
- All sections need `id` anchors matching nav hrefs
- Images go in `public/images/`; use `loading="lazy"` on all below-fold images

## Constraints
- No form submissions or backend — contact links only
- Reduced motion: all animations wrapped with `useReducedMotion()`
- Mobile: hamburger menu handles nav; headshot `hidden lg:block` is intentional
- **Custom domain:** when a custom domain is added, update `og:url` AND `<link rel="canonical">` in `index.html` — both currently point to the auto-generated Vercel URL

## Commands
```bash
npm run dev    # localhost:5173
npm run build  # dist/
```

## Skills
- /repo-routine: Full repo audit + AI-firstify + UX review (see .claude/skills/repo-routine/)
