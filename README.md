# Accredian Enterprise Clone 🚀

> An enterprise-grade, high-performance landing page clone of **[Accredian Enterprise](https://enterprise.accredian.com/)** built using **Next.js 15 App Router**, **React 19**, **Tailwind CSS**, **Zod**, and **Component-Driven Atomic Architecture**.

---

## 📖 Project Overview

**Accredian Enterprise Clone** is a production-ready, pixel-perfect, accessible (WCAG 2.1 AA compliant), and responsive enterprise web application. It features a complete B2B learning catalog, dynamic referral reward calculator & 2-step modal flow, capability comparison matrices, corporate lead capture forms, and Next.js 15 Route Handlers with an asynchronous service data-access layer.

---

## ✨ Features

- **🎨 Modern Design System & Aesthetics**: Custom brand color tokens (Navy `#1A365D`, Emerald `#10B981`, Amber Gold `#F59E0B`), micro-animations, glassmorphism card surfaces, and dark-mode readiness.
- **📱 Universal Viewport Responsiveness**: Pixel-perfect layout adaptation supporting **320px**, **375px**, **425px**, **768px**, **1024px**, **1280px**, and **1536px** screens with zero horizontal scroll overflow.
- **♿ WCAG 2.1 AA Accessibility**: Skip to main content keyboard link, full focus trap loop in modal overlays, screen reader ARIA attribute bindings (`aria-expanded`, `aria-invalid`, `aria-modal`), and high-contrast focus rings (`focus-ring`).
- **🤝 Dynamic Referral Modal Flow**: 2-Step interactive referral modal (Referrer Details $\rightarrow$ Referee Details $\rightarrow$ Payout confirmation) with Zod runtime validation and POST Route Handlers.
- **🏢 Corporate Lead Capture Form**: React Hook Form integration with Zod schema validation for enterprise training inquiries.
- **⚡ Next.js 15 Route Handlers & Mock API**: Mock GET and POST endpoints (`/api/programs`, `/api/faqs`, `/api/referral`, `/api/enquire`) backed by a type-safe `fetch()` service client wrapper.
- **🚀 Performance Optimized**: Zero-CLS Google Font loading (`Inter` & `Plus_Jakarta_Sans`), Next.js AVIF/WebP image optimization engine, `next/dynamic` code splitting, and `React.memo` component memoization.

---

## 🏗 Architecture

The project adheres to **Atomic Design Principles** and clean **Separation of Concerns (SoC)**:

```
┌──────────────────────────────────────────────────────────────────────────┐
│                            App / Layout Layer                            │
│  - src/app/layout.js (Fonts, Metadata, Skip-Link)                       │
│  - src/app/page.js   (Section Composition & Dynamic Imports)             │
└────────────────────────────────────┬─────────────────────────────────────┘
                                     │
                                     ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                        Organisms / Sections Layer                        │
│  - HeaderBanner, Navbar, HeroSection, LogoTickerSection                 │
│  - ReferralSpotlight, ProgramCatalog, ComparisonMatrix                   │
│  - Methodology, MetricsBar, Testimonials, FAQSection, CorporateEnquire   │
└────────────────────────────────────┬─────────────────────────────────────┘
                                     │
                                     ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                   Molecules & Primitives Component Layer                 │
│  - ProgramCard, Button, InputField, SelectField, Badge, ModalOverlay     │
└────────────────────────────────────┬─────────────────────────────────────┘
                                     │
                                     ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                     Services Layer & Route Handlers                      │
│  - api-client.js (Fetch wrapper) ──► GET /api/programs, GET /api/faqs    │
│  - referral.service.js           ──► POST /api/referral                  │
│  - enquire.service.js            ──► POST /api/enquire                   │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 Folder Structure

```
accredian-enterprise-clone/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── enquire/route.js     # Corporate inquiry POST route handler
│   │   │   ├── faqs/route.js        # Categorized FAQ GET route handler
│   │   │   ├── programs/route.js    # Program catalog GET route handler
│   │   │   └── referral/route.js    # Multi-step referral POST route handler
│   │   ├── globals.css              # Base Tailwind directives & utility classes
│   │   ├── layout.js                # Root layout with next/font & skip-link
│   │   └── page.js                  # Landing page section composition root
│   ├── components/
│   │   ├── composite/               # Multi-element molecules (ProgramCard.jsx)
│   │   └── ui/                      # Atomic UI controls (Button, InputField, ModalOverlay)
│   ├── constants/                   # Navigation, course, metric & FAQ data maps
│   ├── layouts/                     # Multi-column Footer layout
│   ├── lib/
│   │   └── validations/             # Zod schema validation rules
│   ├── modals/                      # Stateful ReferralModal overlay dialog
│   ├── sections/                    # Landing page section organisms
│   ├── services/                    # Data Access Layer & fetch API client
│   ├── styles/                      # CSS design tokens (tokens.css)
│   └── utils/                       # Class merger helper (cn.js)
├── .env.example
├── .env.local
├── jsconfig.json                    # Path alias (@/* -> ./src/*)
├── next.config.mjs                  # Image remote patterns & Next.js config
├── package.json                     # Core dependencies & npm scripts
├── postcss.config.js
└── tailwind.config.js               # Responsive screens & brand color tokens
```

---

## 🛠 Installation

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AnandRajBind/accredian-enterprise-clone.git
   cd accredian-enterprise-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

---

## 🚀 Running Locally

### Development Server
Launch the Next.js development server on `http://localhost:3000`:
```bash
npm run dev
```

### Production Build
Compile and verify the optimized static/dynamic production build:
```bash
npm run build
```

### Production Preview
Start the compiled production server:
```bash
npm start
```

---

## ☁️ Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub / GitLab.
2. Import the repository in [Vercel Dashboard](https://vercel.com/new).
3. Vercel automatically detects Next.js 15 App Router settings. Click **Deploy**.

---

## 🤖 AI Usage & Pair Programming

This project was built with **Antigravity AI** operating as a **Senior Frontend Architect**:
- **System Architecture & SRS**: Drafted full 20-section Software Requirements Specification and atomic component breakdown.
- **Design System Extraction**: Built custom CSS custom properties (`tokens.css`) mapping brand color palettes, font scale ratios, and radii.
- **Component Engineering**: Developed accessible, memoized React 19 components with zero hardcoded UI values.

---

## 🔧 Manual Refinements & Quality Audit

The following manual engineering enhancements were made during development:
- **PostCSS Syntax Resolution**: Ordered `@import '../styles/tokens.css'` above `@tailwind base` in `globals.css` for clean Tailwind v3 PostCSS compilation.
- **Modal Focus Lock & Trapping**: Implemented custom keyboard focus trap loops in `ModalOverlay.jsx` to prevent keyboard focus leakage outside active dialogs.
- **Touch Table Protection**: Wrapped matrix tables in responsive touch-scroll wrappers with minimum column constraints (`min-w-[550px]`) to protect text legibility on 320px/375px screens.

---

## 🔮 Future Improvements

- [ ] **Internationalization (i18n)**: Add multi-region currency toggles (USD `$`, EUR `€`, INR `₹`).
- [ ] **Real-time Analytics Dashboard**: Add live referral tracking analytics for corporate HR portals.
- [ ] **E2E Testing Suite**: Implement Playwright / Cypress automation testing for multi-step modal workflows.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for details.
