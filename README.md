# 💼 Personal Brand Website

A modern, animated personal portfolio website showcasing expertise in **finance**, **business analytics**, and **artificial intelligence**. Built with React, Vite, Tailwind CSS, and Framer Motion, and designed for responsive, storytelling-first presentation.

**[View Live Site →](https://personal-brand-six-coral.vercel.app)**

## Featured Projects

The site showcases five projects, each framed as Problem → Method → Value.

| Project | Summary | Link |
|---|---|---|
| **NutriCook AI** *(flagship)* | Full-stack AI meal-planning app with real macro and nutrition tracking, built with Claude and Base44 | [Repo](https://github.com/Saner108/nutricook-ai) · [Demo](https://nutricook-ai-kappa.vercel.app/) |
| **NorthStar Retail Group** | Retail analytics pilot — star-schema modeling and SQL over ~1.6M synthetic rows, finding 79.7% of stockouts trace to distribution, not shortage | [Repo](https://github.com/Saner108/NorthStar-Enterprise-Analytics) |
| **Animal Diet & Nutrition Database** | Normalized Access database with VBA, built for Texas State Aquarium | — |
| **Financial Forecasting Model** | Excel scenario-analysis model for income, expenses, and net worth | [Repo](https://github.com/Saner108/Excel-Business-Analytics-Portfolio) |
| **Inventory Tracking System** | First structured inventory process for a weekly nutrition program | [Repo](https://github.com/Saner108/Excel-Business-Analytics-Portfolio) |

## Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion
- **Deployment:** Vercel (auto-deploys on push to `main`)

## Project Structure

```
├── public/                    # Static assets
├── src/
│   ├── components/
│   │   ├── Nav.jsx            # Navigation header with scroll behavior
│   │   ├── Hero.jsx           # Landing section
│   │   ├── About.jsx
│   │   ├── Projects.jsx       # Portfolio showcase
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── GradientThread.jsx # Decorative scroll effect
│   │   └── ThemeToggle.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Getting Started

```bash
git clone https://github.com/Saner108/Personal-Portfolio.git
cd Personal-Portfolio
npm install
npm run dev        # http://localhost:5173
```

**Other scripts:** `npm run build` · `npm run preview` · `npm run lint`

## Customization

- **Content:** edit the components in `src/components/` — name/title in `Nav.jsx`/`Hero.jsx`, projects in `Projects.jsx`, skills in `Skills.jsx`
- **Styling:** colors in `tailwind.config.js`, global styles in `src/index.css`
- **Animations:** adjust `duration`/`delay` props on Framer Motion elements in `src/components/`

## About

**Cesar Sanchez** — Finance | Business Analytics | AI Developer

Building data-driven applications at the intersection of finance, analytics, and AI.

- Website: [personal-brand-six-coral.vercel.app](https://personal-brand-six-coral.vercel.app)
- GitHub: [@Saner108](https://github.com/Saner108)
