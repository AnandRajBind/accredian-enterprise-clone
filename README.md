# Accredian Enterprise Clone

A full-stack landing page clone of **[Accredian Enterprise](https://enterprise.accredian.com/)** built using **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **Zod**.

[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-success?style=flat-square)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## 📋 Assignment Requirement Checklist

- [x] **Setup Instructions** (Mandatory)
- [x] **Approach Taken** (Mandatory)
- [x] **AI Usage Explanation** (Mandatory)
- [x] **Improvements I Would Make With More Time** (Mandatory)
- [x] **Project Overview** (Bonus)
- [x] **Features** (Bonus)
- [x] **Tech Stack** (Bonus)
- [x] **Folder Structure** (Bonus)
- [x] **Available Scripts** (Bonus)
- [x] **Live Demo** (Bonus)
- [x] **GitHub Repository** (Bonus)
- [x] **Deployment** (Bonus)
- [x] **Author** (Bonus)

---

## 📌 Project Overview

This project is a functional clone of the **Accredian Enterprise Landing Page**, developed as part of a Full Stack Developer Internship assignment. The primary objective is to build a responsive, structured, and accessible web application that replicates the core visual layout and user interactions of the reference website.

The application is built using **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **Zod**. Key features include an upskilling program catalog with category filtering, a multi-step referral reward modal with runtime form validation, a corporate lead inquiry form, feature comparison tables, and custom Next.js Route Handlers to process API submissions asynchronously.

---

## ✨ Key Features

- **Design System & Styling**: Tokenized color palette (`tokens.css`) mapped to Tailwind utility layers, supporting primary navy (`#1A365D`), emerald accents (`#10B981`), amber gold (`#F59E0B`), and dark-mode styling.
- **Universal Viewport Support**: Layout tested across **320px**, **375px**, **425px**, **768px**, **1024px**, **1280px**, and **1536px** viewports without horizontal scroll overflow.
- **Accessibility (WCAG 2.1 AA)**: Keyboard "Skip to main content" link, focus trap loop inside `ModalOverlay`, screen reader ARIA attribute bindings (`aria-expanded`, `aria-modal`, `aria-live="polite"`), and explicit focus rings (`focus-ring`).
- **Interactive Referral Modal**: 2-step referral flow (Referrer Details $\rightarrow$ Referee Details $\rightarrow$ POST `/api/referral` $\rightarrow$ Payout confirmation screen) validated runtime with Zod.
- **Corporate Lead Capture Form**: Inquiry form using `react-hook-form` and `zod` validation schema (`enquireSchema`) for enterprise demo requests.
- **Next.js 15 Route Handlers**: RESTful API endpoints (`/api/programs`, `/api/faqs`, `/api/referral`, `/api/enquire`) backed by a type-safe `fetch()` client layer (`api-client.js`).
- **Performance & Font Loading**: Zero Cumulative Layout Shift (CLS = 0) with `next/font/google` (`Inter` & `Plus Jakarta Sans`), Next.js AVIF/WebP image optimization, `next/dynamic` code splitting, and `React.memo` component memoization.

---

## 🛠 Tech Stack

| Category | Technology | Usage Description |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15 (App Router)** | Full-stack framework with Server and Client Component separation |
| **UI Library** | **React 19** | Functional UI components and state hooks |
| **Styling** | **Tailwind CSS v3** & **CSS Tokens** | Custom design tokens (`tokens.css`) and responsive utility classes |
| **Forms** | **React Hook Form** | Uncontrolled form state management |
| **Validation** | **Zod** | Schema validation with string trimming (`.trim()`) |
| **API Client** | **Fetch API** | Asynchronous HTTP client with `AbortController` timeout handling |
| **Deployment** | **Vercel** | Edge deployment platform |

---

## 📁 Project Structure

```
accredian-enterprise-clone/
├── src/
│   ├── app/                         # Next.js 15 App Router Pages & API Routes
│   │   ├── api/                     # RESTful Route Handlers
│   │   │   ├── enquire/route.js     # Corporate inquiry POST endpoint
│   │   │   ├── faqs/route.js        # Categorized FAQ GET endpoint
│   │   │   ├── programs/route.js    # Program catalog GET endpoint
│   │   │   └── referral/route.js    # Multi-step referral POST endpoint
│   │   ├── error.js                 # Global error boundary component
│   │   ├── globals.css              # Base Tailwind directives & component utility layers
│   │   ├── layout.js                # Root layout with font optimization & skip-link
│   │   ├── not-found.js            # Custom 404 page
│   │   ├── page.js                  # Landing page section composition root
│   │   ├── robots.js                # Dynamic SEO robots.txt route
│   │   └── sitemap.js               # Dynamic SEO sitemap.xml route
│   ├── components/                  # Atomic Component Hierarchy
│   │   ├── composite/               # Multi-element molecules (ProgramCard.jsx)
│   │   └── ui/                      # Atomic UI controls (Button, InputField, SelectField, Badge, ModalOverlay, AccordionItem)
│   ├── constants/                   # Navigation, catalog, metric & FAQ data maps
│   ├── layouts/                     # Multi-column Footer layout
│   ├── lib/
│   │   └── validations/             # Zod schema validation rules (referral, enquire)
│   ├── modals/                      # Stateful ReferralModal overlay dialog
│   ├── sections/                    # Landing page section organisms (13 sections)
│   ├── services/                    # Data Access Layer & fetch API client (api-client.js)
│   ├── styles/                      # CSS design tokens (tokens.css)
│   └── utils/                       # Class merger helper (cn.js)
├── .env.example
├── .env.local
├── jsconfig.json                    # Path alias mapping (@/* -> ./src/*)
├── next.config.mjs                  # Image remote patterns & HTTP security headers
├── package.json                     # Core dependencies & npm scripts
├── README.md                        # Project documentation
└── tailwind.config.js               # Responsive screens & brand color tokens
```

---

## 🚀 Setup Instructions

### 1. Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher

### 2. Installation & Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/AnandRajBind/accredian-enterprise-clone.git

# 2. Navigate into directory
cd accredian-enterprise-clone

# 3. Install dependencies
npm install

# 4. Set up environment variables
cp .env.example .env.local

# 5. Start the local development server
npm run dev
```

Open **`http://localhost:3000`** in your browser.

### 3. Production Build

```bash
# Build production bundle
npm run build

# Start production server locally
npm start
```

---

## 💻 Available Scripts

| Command | Description |
| :--- | :--- |
| **`npm install`** | Installs project dependencies listed in `package.json`. |
| **`npm run dev`** | Runs Next.js development server at `http://localhost:3000` with hot reloading. |
| **`npm run build`** | Compiles and optimizes the app for production. |
| **`npm start`** | Starts the Next.js production server locally using compiled build output. |
| **`npm run lint`** | Runs ESLint to check for syntax issues and Next.js guidelines. |
| **`npm run format`** | Formats JavaScript, JSX, and CSS source files using Prettier. |

---

## 💡 Approach Taken

1. **Requirement Analysis**: Analyzed the Accredian Enterprise website to map out color tokens, typography scale, layout boundaries, and form workflows.
2. **Atomic Component Structure**: Grouped UI elements into **Primitives** (`Button`, `InputField`, `SelectField`, `Badge`, `ModalOverlay`), **Molecules** (`ProgramCard`), and **Organisms** (`Sections`).
3. **Responsive Grid**: Defined custom screen breakpoints (`xxs: 320px` $\rightarrow$ `2xl: 1536px`) and added horizontal touch-scroll containers for comparison tables to prevent mobile layout clipping.
4. **Data Access Layer**: Abstracted data fetching into `services/` (`programs.service.js`, `referral.service.js`, `enquire.service.js`) wrapping a central `api-client.js`.
5. **Performance Engineering**: Used `next/font/google` for CLS = 0, dynamic import code-splitting (`next/dynamic`), and component memoization with `React.memo`.
6. **Accessibility**: Added a keyboard skip link, focus trap loop inside `ModalOverlay`, high-contrast focus indicators (`focus-ring`), and ARIA attribute bindings (`aria-expanded`, `aria-modal`, `aria-live`).

---

## 🤖 AI Usage Explanation

AI tools were used as pair-programming assistants during development to speed up repetitive boilerplate writing and check for potential bugs. All generated code was reviewed, refactored, and tested manually.

### 1. AI Tools Used
- **Antigravity AI**: Assisted with pair programming, architectural planning, and code review.
- **ChatGPT (GPT-4o)**: Used for initial SRS document structuring and section planning.
- **GitHub Copilot**: Provided inline autocompletion during component scaffolding and constant data array mapping.

### 2. Where AI Assisted
- Drafting the initial SRS outline and reference section breakdowns.
- Setting up the initial folder structure (`components/ui`, `components/composite`, `sections`).
- Generating baseline JSX layouts and prop interfaces for section components.
- Structuring Markdown documentation templates and setup instructions.

### 3. Manual Engineering Work
All core application logic, state flows, and production tuning were written and audited manually:
- **Design System**: Authored CSS token properties (`tokens.css`), custom screen breakpoints (`320px` $\rightarrow$ `1536px`), and theme colors.
- **Responsive Layout**: Added touch-scroll containers with `min-w-[550px]` column constraints for comparison tables on small viewports.
- **Accessibility**: Built custom keyboard focus trapping (`Tab` and `Shift+Tab` cycling) and focus restoration in `ModalOverlay.jsx`.
- **Services & API Routes**: Implemented Next.js 15 Route Handlers (`/api/programs`, `/api/referral`) and the generic `fetch()` wrapper (`api-client.js`).
- **Debugging & Fixing**: Corrected PostCSS import order, cleaned up unused linter parameters, and aligned export object interfaces (`FOOTER_SECTIONS`).
- **Performance Tuning**: Configured `next/font/google` for zero CLS, added `next/dynamic` lazy loading, wrapped UI primitives with `React.memo`, and implemented `AbortController` cancellation in `useEffect` hooks.
- **Testing**: Tested layout rendering across mobile and desktop viewports and verified production builds via `npm run build`.

---

## 🔧 Manual Improvements

The following technical refactorings were performed manually after initial code scaffolding:

- **PostCSS Import Order**: Reordered CSS token imports (`@import '../styles/tokens.css'`) above `@tailwind base` in `globals.css` to fix PostCSS `@layer base` compilation warnings.
- **WCAG 2.1 AA Focus Trapping**: Implemented keyboard focus trapping (`Tab` / `Shift+Tab` focus loops) and focus restoration (`previousFocusRef.current.focus()`) in `ModalOverlay.jsx`.
- **Mobile Overflow Fixes**: Set `overflow-x: hidden` on root elements and wrapped comparison matrix tables in horizontal touch-scroll containers with `min-w-[550px]` column constraints.
- **HTTP Security Headers**: Extended `next.config.mjs` with production HTTP security headers (`Strict-Transport-Security`, `X-Frame-Options DENY`, `X-Content-Type-Options nosniff`, `Referrer-Policy`) and suppressed `X-Powered-By`.
- **Catalog Empty State**: Built a fallback card component in `ProgramCatalogSection.jsx` to handle zero-result filter queries gracefully.
- **Memory Safety**: Replaced static fetch flags with native `AbortController` cancellation in `useEffect` hooks to prevent race conditions during rapid tab switching.

---

## 🔮 Improvements I Would Make With More Time

- **Database Persistence**: Connect Route Handlers to Supabase or PostgreSQL via Prisma ORM for permanent data storage.
- **Rate Limiting**: Implement `@upstash/ratelimit` on POST endpoints `/api/referral` and `/api/enquire` to prevent bot spam.
- **Multi-Region Currency Switcher**: Add dynamic currency conversion (USD `$`, EUR `€`, INR `₹`) for international users.
- **Real-Time HR Analytics**: Add an admin dashboard for corporate HR teams to track employee referral payouts live.

---

## ☁️ Deployment

### Deploying to Vercel
1. Push the code repository to GitHub / GitLab.
2. Import the repository in [Vercel Dashboard](https://vercel.com/new).
3. Vercel automatically detects Next.js 15 App Router settings.
4. Click **Deploy**.

---

## 🔗 Links

- **Live Demo**: [https://accredian-enterprise-clone.vercel.app](https://accredian-enterprise-clone.vercel.app)
- **GitHub Repository**: [https://github.com/AnandRajBind/accredian-enterprise-clone](https://github.com/AnandRajBind/accredian-enterprise-clone)

---

## 👤 Author

- **Name**: Anand Raj Bind
- **Role**: Full Stack / Frontend Developer Candidate
- **GitHub**: [@AnandRajBind](https://github.com/AnandRajBind)
- **LinkedIn**: [Anand Raj Bind](https://www.linkedin.com/in/anandrajbind/)

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for details.
