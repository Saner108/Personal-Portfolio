# 💼 Personal Brand Website

A modern, animated single-page React portfolio for Cesar Sanchez, showcasing work in finance, business analytics, and artificial intelligence.

**Live demo:** https://personal-brand-six-coral.vercel.app

---

## Table of contents

- <a>Features</a>
- <a>Tech stack</a>
- <a>Project structure</a>
- <a>Featured projects</a>
- <a>Getting started</a>
- <a>Available scripts</a>
- <a>Customization</a>
- <a>Deployment</a>
- <a>Contributing</a>
- <a>About &amp; contact</a>
- <a>License</a>

---

## 🎨 Features

- ✨ Smooth Framer Motion animations for engaging UI
- 🎭 Dark / Light theme with localStorage persistence
- 📱 Fully responsive — mobile-first design
- ⚡ Fast development and optimized production builds (Vite)
- 🎯 Smooth scrolling and smart header show/hide behavior
- ♿ Accessibility-minded markup and ARIA where appropriate
- 🔍 SEO-friendly semantic structure

---

## 🛠️ Tech stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- JavaScript (JSX)

---

## 📁 Project structure

```
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── GradientThread.jsx
│   │   └── ThemeToggle.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 📌 Featured projects

The site highlights five projects presented as Problem → Method → Value.

- NutriCook AI — Full-stack AI meal-planning app with real macro and nutrition tracking. <a href="https://github.com/Saner108/nutricook-ai">Repo</a> · <a href="https://nutricook-ai-kappa.vercel.app/">Demo</a>
- NorthStar Retail Group — Retail analytics pilot (star-schema modeling, SQL, dashboard over ~1.6M synthetic rows). <a href="https://github.com/Saner108/NorthStar-Enterprise-Analytics">Repo</a>
- Animal Diet &amp; Nutrition Database — Normalized Access database with VBA for the Texas State Aquarium (client work).
- Financial Forecasting Model — Excel scenario-analysis model for forecasting income, expenses, and net worth. <a href="https://github.com/Saner108/Excel-Business-Analytics-Portfolio">Repo</a>
- Inventory Tracking System — Inventory process and tracking for a weekly nutrition program. <a href="https://github.com/Saner108/Excel-Business-Analytics-Portfolio">Repo</a>

&gt; Note: The NorthStar project uses synthetic data for a scoped pilot — disclosure is shown on the project card on the site.

---

## 🚀 Getting started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Install and run locally

1. Clone the repository
```bash
git clone https://github.com/Saner108/Personal-Portfolio.git
cd Personal-Portfolio
```

2. Install dependencies
```bash
npm install
# or
# yarn
```

3. Start development server
```bash
npm run dev
# The site will be available at http://localhost:5173
```

---

## 📦 Available scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint (if configured)
npm run lint
```

---

## ✏️ Customization

- Edit text and content in `src/components/` (e.g., `Nav.jsx`, `Hero.jsx`, `About.jsx`, `Projects.jsx`).
- Change colors and tokens in `tailwind.config.js`.
- Global styles: `src/index.css`.
- Adjust Framer Motion timings and easing inside the animated components.

---

## 🌐 Deployment

This site is deployed on Vercel and auto-deploys on pushes to the default branch. To deploy your own copy:

1. Push the repo to GitHub
2. Connect the repo in Vercel
3. Configure a custom domain in Vercel if desired

---

## 🤝 Contributing

This is a personal portfolio project. Feedback, issues, and pull requests are welcome — open an issue or submit a PR if you have suggestions.

---

## 📄 License

Open for personal use. Please contact me for reuse or commercial questions.

---

## 👤 About &amp; contact

**Cesar Sanchez** — Finance | Business Analytics | AI Developer

- Website: https://personal-brand-six-coral.vercel.app
- GitHub: https://github.com/Saner108

Contact via the contact section of the site or GitHub.
