# 🧠 The Deep Work Blueprint — Landing Page

> A pixel-perfect, responsive, and theme-aware landing page built from a Figma design as a **frontend assessment task**.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Vercel-black?style=for-the-badge)](https://task-frontend-rho-two.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

---

## 🔗 Live Preview

**[https://task-frontend-rho-two.vercel.app/](https://task-frontend-rho-two.vercel.app/)**

---

## ⚠️ Disclaimer

This project was developed as a **frontend assessment task** for a company evaluation. It is a single-page landing page implementation based on a provided Figma design. The project is intended for demonstration and evaluation purposes only and does not represent a production application.

---

## 📖 About

"The Deep Work Blueprint" is a course landing page designed to showcase a productivity training program. The page features a modern, premium dark/light theme design with smooth interactions, animated components, and a fully responsive layout that adapts seamlessly across all device sizes.

The implementation focuses on:
- **Pixel-perfect Figma reproduction** — Every section is meticulously crafted to match the provided design
- **Dark & Light mode support** — Full theme awareness with `next-themes` and class-based toggling
- **Smooth user experience** — CSS transitions, animated accordions, and smooth scroll navigation
- **Performance** — Static site generation (SSG), optimized images via `next/image`, and Turbopack builds

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16.2.2 | React framework with App Router, SSG, and Turbopack |
| **React** | 19.2.4 | UI component library |
| **TypeScript** | 5.x | Type-safe development |
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **next-themes** | 0.4.6 | Dark/Light mode theme management |
| **Radix UI** | 1.4.3 | Accessible, unstyled UI primitives |
| **shadcn/ui** | 4.1.2 | Pre-built component system (Button, Dropdown) |
| **class-variance-authority** | 0.7.1 | Component variant management |
| **clsx** + **tailwind-merge** | Latest | Conditional className utilities |
| **react-icons** | 5.6.0 | Icon library (HiMenuAlt3, IoClose) |
| **Lucide React** | 1.7.0 | Additional icon set |
| **tw-animate-css** | 1.4.0 | Animation utilities for Tailwind |
| **Vercel** | — | Deployment & hosting platform |

---

## 🚀 Getting Started (Local Setup)

### Prerequisites

- **Node.js** — v18.17 or later ([Download](https://nodejs.org/))
- **npm** — v9+ (comes with Node.js) or **yarn** / **pnpm**
- **Git** — For cloning the repository

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/wm-consultency.git

# 2. Navigate into the project directory
cd wm-consultency

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at **[http://localhost:3000](http://localhost:3000)**.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🏗️ Project Structure

```
wm-consultency/
├── public/                     # Static assets (images, icons, SVGs)
│   ├── hero.png                # Hero section background image
│   ├── logo.png                # Brand logo (PPA)
│   ├── playbutton.png          # Video play button icon
│   ├── section_1_*.jpg         # Problem statement section images
│   ├── test_*.png/jpg          # Testimonial card images
│   └── icon_*.png              # Feature step icons
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles, design tokens, theme variables
│   │   ├── icon.png            # Favicon (auto-detected by Next.js)
│   │   ├── layout.tsx          # Root layout (fonts, ThemeProvider, metadata)
│   │   └── page.tsx            # Main landing page (section composition)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Fixed navigation bar with mobile menu
│   │   │   ├── Footer.tsx      # Footer with CTA card and avatar cluster
│   │   │   ├── Container.tsx   # Max-width content wrapper
│   │   │   ├── Section.tsx     # Reusable section wrapper
│   │   │   └── ThemeToggle.tsx # Dark/Light mode toggle switch
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero with video frame & blue scanlines
│   │   │   ├── ProblemStatement.tsx  # Pain points with image grid
│   │   │   ├── SolutionSection.tsx   # Solution cards with icons
│   │   │   ├── FeatureSteps.tsx      # Step-by-step feature highlights
│   │   │   ├── ModuleList.tsx        # Interactive course accordion
│   │   │   ├── Testimonials.tsx      # Horizontal scroll carousel
│   │   │   └── Pricing.tsx           # Two-column pricing cards
│   │   ├── ui/
│   │   │   ├── Button.tsx      # CVA-powered button component
│   │   │   └── dropdown-menu.tsx  # Radix dropdown menu
│   │   ├── MoodToggle.tsx      # Mood/theme dropdown selector
│   │   └── theme-provider.tsx  # next-themes ThemeProvider wrapper
│   ├── lib/
│   │   └── utils.ts            # Utility functions (cn helper)
│   └── styles/                 # Additional style modules
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration (Tailwind)
├── components.json             # shadcn/ui configuration
└── package.json                # Dependencies and scripts
```

---

## 📱 Responsive Breakpoints

The landing page is fully responsive, adapting across all screen sizes using Tailwind CSS breakpoints:

| Breakpoint | Width | Target Device | Layout Behavior |
|---|---|---|---|
| **Default** | `< 640px` | Mobile phones | Single column, stacked layouts. Hamburger menu. Compact typography. Full-width cards. |
| **`sm`** | `≥ 640px` | Large phones / Small tablets | Slightly larger text. Side-by-side buttons in Hero. Minor spacing increases. |
| **`md`** | `≥ 768px` | Tablets (portrait) | Two-column grids begin. Increased section padding (`py-32`). Testimonial card widths expand. |
| **`lg`** | `≥ 1024px` | Tablets (landscape) / Laptops | Desktop navigation visible. Full two-column layouts (Pricing, ModuleList). Carousel shows multiple cards. Hamburger menu hidden. |
| **`xl`** | `≥ 1280px` | Desktops | Max-width containers kick in. Generous whitespace. Full-size typography (up to `8xl` headings). |

### Component-Specific Responsive Behavior

| Component | Mobile (`< 640px`) | Tablet (`md`) | Desktop (`lg+`) |
|---|---|---|---|
| **Navbar** | Hamburger menu with full-screen overlay | Hamburger + "Enroll now" button visible | Full horizontal nav links centered |
| **Hero** | Stacked buttons, compact heading | Larger heading, side-by-side buttons | Full `8xl` typography, wide video frame |
| **Problem Statement** | Stacked image grid (1 col) | 3-column image grid | 3-column with larger spacing |
| **Module List** | Full-width accordion only | Accordion only | Accordion + sticky pitch sidebar card |
| **Testimonials** | Single card scroll, swipe-friendly | Multi-card visible in carousel | Full carousel with arrow controls |
| **Pricing** | Stacked cards (1 col) | Stacked cards | Side-by-side 2-column grid |
| **Footer** | Stacked layout, vertical links | Horizontal link row | Full footer with floating CTA card |

### Custom Breakpoint

| Breakpoint | Width | Purpose |
|---|---|---|
| `@media(min-width:681px)` | `≥ 681px` | Controls mobile menu visibility and "Enroll now" button display |
| `@media(min-width:900px)` | `≥ 900px` | Controls hamburger toggle visibility |

---

## 🎨 Design Features

- **Dark / Light Theme** — Seamless toggling via `next-themes` with system preference detection
- **Glassmorphism Effects** — Frosted glass backgrounds with `backdrop-blur` on navbar and cards
- **Blue Scanline Hero** — Intense `#2466F2` gradient with horizontal scanline pattern behind the hero video
- **Interactive Accordion** — Smooth `grid-rows-[1fr]` CSS Grid animation for course modules
- **Horizontal Carousel** — Snap-scroll testimonial cards with arrow navigation
- **Smooth Scroll Navigation** — Anchor-based smooth scrolling between sections
- **Optimized Images** — All images use `next/image` with blur placeholders and priority loading

---

## 🧩 Key Sections

1. **Hero** — Bold headline, countdown badge, CTA buttons, and a video preview frame with blue-tinted scanline effects
2. **Problem Statement** — Pain-point messaging with a 3-column image grid
3. **Solution Section** — Feature cards presenting the course methodology
4. **Feature Steps** — Step-by-step breakdown of the learning process
5. **Course Curriculum** — Interactive accordion with lesson lists, durations, and a sticky enrollment sidebar
6. **Testimonials** — Horizontally scrolling carousel with video and text review cards
7. **Pricing** — Two-column comparison with discount badges and enrollment CTA
8. **Footer** — Brand identity, overlapping avatar cluster, blue CTA card, and legal links

---

## 📦 Deployment

This project is deployed on **[Vercel](https://vercel.com/)** with automatic deployments from the Git repository.

To deploy your own instance:

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy
vercel
```

Or simply connect your GitHub repository to Vercel for automatic CI/CD.

---

## 📄 License

This project is part of a frontend assessment. All rights reserved by the respective parties.

---

<p align="center">
  Built with ❤️ using Next.js, React, TypeScript & Tailwind CSS
</p>
