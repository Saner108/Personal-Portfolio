# 💼 Personal Brand Website

A modern, animated single-page React portfolio for Cesar Sanchez, created to showcase my past projects, skills, and experience to recruiters, employers, and collaborators.

**Live website:** [www.cesarsanchez1.me](https://www.cesarsanchez1.me/)

[cesarsanchez1.me](https://cesarsanchez1.me/) redirects to the `www` address.

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
- 📷 One personal photo collage in About, with education and team/event experience alongside it on desktop and stacked on mobile

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

The projects section highlights six project repositories on [Saner108's GitHub profile](https://github.com/Saner108), reviewed on October 28, 2026. NorthStar leads the section; supporting cards use a responsive two-column layout, followed by a full-width NutriCook card with its screenshot on the left and details on the right. On mobile, NutriCook stacks vertically. Python lists its three scripts directly; the other cards describe the problem, method, value and scope.

- [NorthStar Enterprise Analytics](https://github.com/Saner108/NorthStar-Enterprise-Analytics) — Python and SQLite retail inventory pilot with approximately 1.6 million synthetic rows, 17 integrity checks, and an executive web dashboard. Results describe simulated data, not real company performance.
- [Excel Business Analytics Portfolio](https://github.com/Saner108/Excel-Business-Analytics-Portfolio) — Financial solver and capital budgeting workbooks, kitchen inventory tracking, and monthly/yearly budget reporting on the `Personal-Budgeting` branch.
- [SLP Inventory Demo](https://github.com/Saner108/slp-inventory-demo) — v1 coursework data preparation: 27 categories, 273 source model groupings, and 700 item rows in Excel and CSV. Sample serial placeholders and unverified inventory; no finished Access application.
- [WaveWare Access Database Demo](https://github.com/Saner108/waveware-access-demo) — Near-final representative Access application with diet, inventory, weight, and reporting workflows. Not a current aquarium system or animal-care guidance; native Access workflows were not re-tested after the sharing edit.
- [Python Projects](https://github.com/Saner108/Python-Projects) — Rental calculator, credit payment schedule, and Lucky Sevens simulation on the `Python_Based_Assignments` default branch.
- [NutriCook AI](https://github.com/Saner108/nutricook-ai) — React meal-planning application with Claude recipe generation and optional service integrations. Nutrition values are AI estimates; unconfigured services use demo data.

Descriptions are based on each repository's README. Listings are maintained in `src/components/Projects.jsx`; they do not update automatically. Representative/coursework demos are labeled explicitly. The profile README is intentionally excluded.

Excel includes the existing yearly budget and cooking inventory screenshots, with captions and full-size image links. WaveWare displays its main-menu screenshot directly from the public repository README asset; loading that image requires GitHub's raw-content host. SLP has an explicit image placeholder. NorthStar and NutriCook retain their screenshots. Add more screenshots to a card's `images` array using `src` and `caption`; use local assets in `public/images/` or verified project image URLs.

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

- The toolkit lists ChatGPT, Claude, Vercel (hosting and deployment), and Supabase (database and authentication) under AI & Development Platforms, without assigning proficiency ratings to those tools.
- Edit text and content in `src/components/` (e.g., `Nav.jsx`, `Hero.jsx`, `About.jsx`, `Projects.jsx`).
- Change colors and tokens in `tailwind.config.js`.
- Global styles: `src/index.css`.
- The introductory photo collage in `src/components/About.jsx` combines the headshot, campus team photo, fitness, cooking, and group-training photos from `public/images/`. Images load lazily and open the original photo in a new tab. All five personal photos appear once in this section, rather than being split across the hero and separate galleries. School/coursework and supported team-development, event, inventory, and coaching highlights sit beside the collage on desktop and below it on mobile. Project screenshots remain in Projects.
- TAMUCC experience dates and descriptions in `src/components/Experience.jsx` follow the LinkedIn excerpt supplied on October 29, 2026: Head Nutrition Coach, Group Fitness Instructor, seasonal Kids Camp Instructor, and Personal Trainer all ended in August 2026. The About introduction uses past tense for these roles.
- Adjust Framer Motion timings and easing inside the animated components.

---

## 🌐 Deployment

This site is deployed on Vercel and auto-deploys on pushes to the default branch. To deploy your own copy:

1. Push the repo to GitHub
2. Connect the repo in Vercel
3. Configure a custom domain in Vercel if desired

### Portfolio domain setup

| Setting | Current configuration |
| --- | --- |
| Production website | [https://www.cesarsanchez1.me/](https://www.cesarsanchez1.me/) |
| Bare domain | `https://cesarsanchez1.me/` redirects to the production website with HTTP 308 |
| Hosting | Vercel project `personal-brand` |
| DNS provider | Namecheap BasicDNS |
| Alternate website address | [personal-brand-six-coral.vercel.app](https://personal-brand-six-coral.vercel.app/) |

The website's DNS records point to Vercel, not GitHub Pages. Domain assignment and the redirect are configured in Vercel; the website A/CNAME records are managed in Namecheap. Use the DNS values recommended for the project in Vercel when making future changes, and preserve unrelated email records and nameserver settings.

**Verified October 29, 2026:** HTTPS certificate validation passed against both configured Vercel addresses for each hostname. The bare domain returned HTTP 308 to `www`, which returned HTTP 200. The portfolio HTML and its JavaScript/CSS assets loaded successfully, and Chrome displayed all six project entries. This verifies the live website at that time, not every visitor's DNS cache or every application interaction.

After DNS changes, a device may temporarily retain the previous hosting address. Compare its cached address with authoritative DNS before diagnosing an HTTPS error as a deployment problem. Do not disable certificate validation to work around a stale DNS cache.

---

## 🤝 Contributing

This is a personal portfolio project. Feedback, issues, and pull requests are welcome — open an issue or submit a PR if you have suggestions.

---

## 📄 License

Open for personal use. Please contact me for reuse or commercial questions.

---

## 👤 About &amp; contact

**Cesar Sanchez** — Finance | Business Analytics | AI Developer

- Website: [https://www.cesarsanchez1.me/](https://www.cesarsanchez1.me/)
- GitHub: https://github.com/Saner108

Contact via the contact section of the site or GitHub.
