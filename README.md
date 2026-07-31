# 💼 Personal Brand Website

A modern, animated personal portfolio website showcasing expertise in **finance**, **business analytics**, and **artificial intelligence**. Built with cutting-edge web technologies and designed for[...]

**[View Live Site →](https://personal-brand-six-coral.vercel.app)**

---

## 🎨 Features

- ✨ **Smooth Animations** - Framer Motion animations for engaging user interactions
- 🎭 **Dark/Light Theme** - Seamless theme toggle with local storage persistence
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- ⚡ **Fast Performance** - Built with Vite for optimized development and production builds
- 🎯 **Smooth Scrolling** - Smart navigation with hide/show header on scroll
- ♿ **Accessible** - Semantic HTML and proper ARIA labels
- 🔍 **SEO Friendly** - Clean structure and semantic markup

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **JavaScript/JSX** - Modern JavaScript

---

## 📁 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Nav.jsx       # Navigation header with scroll behavior
│   │   ├── Hero.jsx      # Landing section with call-to-action
│   │   ├── About.jsx     # About me section
│   │   ├── Projects.jsx  # Portfolio projects showcase
│   │   ├── Skills.jsx    # Skills organized by category
│   │   ├── Experience.jsx # Work experience
│   │   ├── Certifications.jsx # Credentials
│   │   ├── Education.jsx # Educational background
│   │   ├── Contact.jsx   # Contact/footer section
│   │   ├── GradientThread.jsx # Decorative scroll effect
│   │   └── ThemeToggle.jsx    # Dark/light theme toggle
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── index.html            # HTML entry point
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Project dependencies
```

---

## 🧩 Project Highlights

### Personal Brand Website (This Repository)
This project is a polished single-page React portfolio that presents your background in finance, business analytics, and AI through animated storytelling and structured personal sections. It includes responsive navigation, scroll-based motion, dark/light theming, and contact pathways so visitors can quickly understand your profile and reach out.

The five projects below are featured on the site in this order, each framed as
Problem → Method → Value.

### 1. NutriCook AI — flagship
An AI-powered meal planning app built end-to-end with Claude, ChatGPT, and Base44,
generating personalized plans with real macro and nutrition tracking. Demonstrates
full-stack AI product development: prompt engineering, workflow design, and shipping
a usable tool rather than a proof-of-concept.
[Repo](https://github.com/Saner108/nutricook-ai) ·
[Live demo](https://nutricook-ai-kappa.vercel.app/)

### 2. NorthStar Retail Group — Inventory Visibility Pilot
A retail analytics pipeline testing whether stockouts stem from true supply shortages
or from inventory sitting in the wrong place. Star-schema modeling, SQL from schema
through analysis, and an executive dashboard over ~1.6M rows with 17 automated
validation checks — finding that 79.7% of stockouts traced to distribution rather
than shortage.

> **Note:** Synthetic data pilot — a scoped practice exercise modeling a fictional
> retailer, not a client engagement. This disclosure is also displayed directly on
> the project card on the site.

[Repo](https://github.com/Saner108/NorthStar-Enterprise-Analytics)

### 3. Animal Diet & Nutrition Tracking Database — Texas State Aquarium
A normalized Microsoft Access relational database with VBA interface elements, built
for a real institutional client that had no formal system for tracking animal diet
and nutrition data. Applies database design fundamentals — normalization,
relationships, and queries — to an actual operational need.

### 4. Financial Forecasting Model
An Excel scenario-analysis model projecting income, expenses, and net worth under
different assumptions, turning a static budget into a dynamic decision-support tool.
Covers forecasting, sensitivity analysis, and financial modeling.
[Repo](https://github.com/Saner108/Excel-Business-Analytics-Portfolio)

### 5. Inventory Tracking System
The first structured inventory process for a weekly nutrition program that previously
tracked supplies from memory, with category organization, variance tracking, and
stock-level visibility. Shows designing a system where none existed.
[Repo](https://github.com/Saner108/Excel-Business-Analytics-Portfolio)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saner108/Personal-Brand-.git
   cd Personal-Brand-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

---

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code (if configured)
npm run lint
```

---

## 🎯 Key Sections

### Hero Section
Compelling introduction highlighting focus areas:
- Finance
- Business Analytics
- Artificial Intelligence

### Skills
Organized skill categories:
- **Data Analytics & Business Systems** - Microsoft Excel (financial modeling, scenario
  analysis), Microsoft Access (relational databases, VBA), Tableau, SAP Analytics Cloud,
  SQL, Power BI, dimensional/star-schema data modeling
- **Finance** - Financial modeling, scenario/forecasting analysis, personal financial
  systems design
- **Artificial Intelligence** - Claude, prompt engineering, AI-assisted product development
- **Programming** - Python (coursework — machine learning applications), VBA
- **Professional** - Client-facing program design, nutrition coaching, group instruction,
  sales & customer communication

### Portfolio Features
- Projects showcase
- Experience timeline
- Certifications and credentials
- Educational background
- Contact information

---

## 🎨 Customization

### Update Personal Information
Edit the components in `src/components/` to personalize:
- Name and title in `Nav.jsx` and `Hero.jsx`
- About content in `About.jsx`
- Projects in `Projects.jsx`
- Experience in `Experience.jsx`
- Skills in `Skills.jsx`

### Styling
The site uses **Tailwind CSS** for styling. Customize:
- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes

### Animations
Adjust animation timings and effects in `src/components/` files using Framer Motion's `duration` and `delay` properties.

---

## 🌐 Deployment

The site is deployed on **Vercel** and automatically updates with each push to the main branch.

**Deploy your own:**
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys on push
4. Custom domain setup available in Vercel settings

---

## 📊 Performance

- **Optimized Build** - Vite provides minimal bundle size
- **Code Splitting** - Lazy loading with React
- **Image Optimization** - Responsive images where used
- **CSS Optimization** - Tailwind's purging removes unused styles

---

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, feel free to open an issue or submit a pull request.

---

## 📄 License

This project is open source and available for personal use.

---

## 👤 About

**Cesar Sanchez** - Finance | Business Analytics | AI Developer

Building data-driven applications that solve real-world problems through the intersection of finance, business analytics, and artificial intelligence.

- **Website:** [https://personal-brand-six-coral.vercel.app](https://personal-brand-six-coral.vercel.app)
- **GitHub:** [@Saner108](https://github.com/Saner108)

---

## 📞 Contact

Have a project in mind or want to collaborate? Get in touch through the contact section on the website or reach out via GitHub.

---

**Made with ❤️ using React, Vite, and Tailwind CSS**
