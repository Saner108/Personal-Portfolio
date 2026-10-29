# Cesar Sanchez — Personal Portfolio

A dark, responsive single-page portfolio for Cesar Sanchez, focused on business analytics, finance, databases, and AI-powered applications.

**Live site:** [cesarsanchez1.me](https://cesarsanchez1.me/)

**GitHub:** [Saner108](https://github.com/Saner108)

The site presents Cesar's academic background, leadership experience, analytics and database projects, toolkit, contact links, and downloadable resume.

## Features

- Responsive React single-page layout with smooth section navigation
- Dark-only graphite visual system with General Sans and Inter typography
- Framer Motion entrance, scroll, hover, and ambient background animations
- Reduced-motion support through Framer Motion and CSS media queries
- Mobile navigation drawer with focus management, keyboard trapping, and Escape-to-close behavior
- Lazy-loaded Toolkit & Degrees and Contact sections
- Project cards with GitHub links, live demos, screenshots, image placeholders, and project-scope disclosures
- Accessible labels, semantic sections, focus-visible states, and descriptive image text
- SEO metadata, Open Graph/Twitter preview metadata, favicon, sitemap, and robots file
- Vercel deployment configuration with SPA rewrites, security headers, immutable asset caching, and resume download headers

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion 11
- JavaScript and JSX
- Vercel Speed Insights

## Project content

The Projects section is driven by the single source of truth in [`src/data/projects.js`](src/data/projects.js):

1. [NorthStar Enterprise Analytics](https://github.com/Saner108/NorthStar-Enterprise-Analytics) — synthetic-data retail inventory analytics pilot using Python, SQL, SQLite, dimensional modeling, and validation checks. Includes a live dashboard.
2. [Excel Business Analytics Portfolio](https://github.com/Saner108/Excel-Business-Analytics-Portfolio) — financial modeling, budgeting, and kitchen inventory workbooks.
3. [SLP Inventory Demo](https://github.com/Saner108/slp-inventory-demo) — coursework data-preparation demo using Excel and CSV files.
4. [WaveWare Access Database Demo](https://github.com/Saner108/waveware-access-demo) — representative Microsoft Access workflows for diet, inventory, weight tracking, and reporting.
5. [Python Projects](https://github.com/Saner108/Python-Projects) — rental calculator, credit payment schedule, and Lucky Sevens simulation.
6. [NutriCook AI](https://github.com/Saner108/nutricook-ai) — React meal-planning application using Claude, with optional Supabase and Stripe integrations. Includes a live demo.

Project descriptions intentionally identify synthetic, coursework, representative, demo, and AI-estimated content where applicable.

## Repository structure

```text
├── public/
│   ├── images/             # Portfolio and project screenshots
│   ├── resume.pdf          # Downloadable resume
│   ├── og-image.png        # Social sharing image
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/         # Page sections and shared UI
│   ├── data/projects.js    # Project catalog
│   ├── App.jsx             # Root layout and section order
│   ├── main.jsx            # React entry point
│   └── index.css           # Tailwind layers and global styles
├── index.html              # Document metadata and font loading
├── tailwind.config.js      # Design tokens and font families
├── vercel.json             # Deployment, headers, rewrites, and caching
├── vite.config.js
└── package.json
```

`src/components/Experience.jsx` and `src/components/Certifications.jsx` remain in the repository as reference components but are not currently rendered by `App.jsx`.

## Getting started

### Prerequisites

- Node.js 16 or newer
- npm

### Install and run locally

```bash
git clone https://github.com/Saner108/Personal-Portfolio.git
cd Personal-Portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in a browser.

## Available scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Create the production build in dist/
npm run preview  # Preview the production build locally
```

There is currently no `lint` script in `package.json`.

## Customization

- Update project entries, links, screenshots, and disclosures in `src/data/projects.js`.
- Update page copy and section markup in `src/components/`.
- Add or replace static images in `public/images/`.
- Keep `public/resume.pdf` current; it is linked from the Contact section and served as a download.
- Adjust colors, typography, and shared card styles in `src/index.css` and `tailwind.config.js`.
- Keep section IDs synchronized with the navigation links in `src/components/Nav.jsx`.
- Update the canonical URL, Open Graph metadata, sitemap, and robots file together when changing domains.

## Deployment

The project is configured for Vercel:

- Build command: `npm run build`
- Output directory: `dist`
- SPA fallback: all routes rewrite to `/index.html`
- Production metadata currently references `https://cesarsanchez1.me/`

To deploy a copy, import the repository into Vercel or connect it to a Vercel project. Vercel will build the site from the default branch using the settings in `vercel.json`.

## Contributing

This is a personal portfolio, but focused feedback and improvements are welcome. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the contribution workflow and reporting guidelines.

## Contact

- Email: [sanchezcesar106@gmail.com](mailto:sanchezcesar106@gmail.com)
- LinkedIn: [linkedin.com/in/csanchez65](https://www.linkedin.com/in/csanchez65)
- GitHub: [github.com/Saner108](https://github.com/Saner108)

## License

No license file is currently included. Contact Cesar before reusing or redistributing the site's content, design, or assets.
