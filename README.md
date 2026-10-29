# VYRO — AI Productivity

VYRO is a next-generation AI productivity web application concept built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Project Status: Stage 11 — Footer Section

- **Section 01: Hero & Navbar** with transparent header, minimal geometric brand mark, centered typography, and bottom metadata row with productivity logos.
- **Section 02: About** with pure white background, bold editorial headline, and focused copy.
- **Section 03: Our Process** with edge-to-edge dark canvas and balanced Problem & Solution panels (`min-h-[420px]`).
- **Section 04: Product Showcase** featuring centered brand statement, selective text colors, square showcase cards, and wide banner.
- **Section 05: User Flow & Workflow** featuring minimal editorial header, two vertical starting blocks (`VYRO WORKSPACE` and `CAPTURE`), tree connector lines, 6 cyan-blue primary action cards, and 3 columns of process outcome cards.
- **Section 06: Brand Presence & Product Ecosystem** featuring full-screen deep black background (`#030405`), ambient radial glow, and three vertically centered floating mockups: high-resolution Twitter channel banner profile, app listing card, and social profile card.
- **Section 07: App Screens Showcase** featuring pure white background (`#FFFFFF`), centered cyan logo, two-line headline with `real progress.` in cyan, two balanced supporting text columns, and a 2x2 grid of four large rounded showcase cards (Splash Screen, Dashboard Screen, Team Members, Assets Workspace).
- **Section 08: Platforms & Cross-Device Experience** featuring pure white background (`#FFFFFF`), minimal editorial layout, centered smartwatch showcase, and three device cards (Mobile, Tablet, Desktop).
- **Section 09: VYRO Design Language** featuring pure white background (`#FFFFFF`), typography specimen layout with drafting guides and oversized headline.
- **Section 10: Tablet Experience Showcase** featuring the high-resolution VYRO tablet and stylus lifestyle mockup (`public/assets/image copy 2.png`) framed cleanly with responsive corner radii, border outline, subtle shadow, and generous whitespace.
- **Footer Section**: Full-width, near-black footer with background artwork (`public/assets/footer-bg.png`) featuring glowing cyan light rays and the large translucent VYRO wordmark. Foreground content includes the VYRO brand mark, tagline, four monochrome social icons (Instagram, LinkedIn, X, YouTube), brand description, three navigation columns (Explore, Resources, Legal), and copyright notice.

## Directory Structure

```text
vyro/
├── public/
│   ├── assets/
│   │   ├── image.png (hero background wallpaper)
│   │   └── vyro-app-mockup.png (mobile app UI)
│   ├── images/
│   │   ├── vyro-identity.jpg
│   │   ├── vyro-focus-dashboard.jpg
│   │   ├── vyro-workspace-lifestyle.jpg
│   │   ├── vyro-twitter-banner.jpg
│   │   └── vyro-smartwatch.jpg
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── AppScreensShowcase.tsx
│   │   ├── BrandPresenceSection.tsx
│   │   ├── DesignLanguageSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── PlatformsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── TabletShowcaseSection.tsx
│   │   └── WorkflowSection.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
npm install
```

### Development
Start the local development server (runs on `http://localhost:3000`):
```bash
npm run dev
```

### Production Build
Type-check and compile the production bundle:
```bash
npm run build
```

### Linting
Run ESLint code quality checks:
```bash
npm run lint
```
