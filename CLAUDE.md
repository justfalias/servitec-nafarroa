# CLAUDE.md — Servitec Nafarroa

## Project Overview

Static website for **Servitec Nafarroa**, a multi-brand appliance repair service based in Pamplona, Navarra, Spain. The site is a single-page marketing website with full SEO optimization.

- **URL:** https://www.servitecnafarroa.com
- **Deployment:** Vercel (static generation)
- **Language:** Spanish (UI content), English (code/variables)

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Astro | ^6.1.1 | Static site framework |
| Tailwind CSS | ^4.2.2 | Utility CSS framework |
| @tailwindcss/vite | ^4.2.2 | Vite integration |
| TypeScript | strict | Type safety (via Astro config) |
| Node.js | >=22.12.0 | Runtime requirement |

---

## Repository Structure

```
servitec-nafarroa/
├── src/
│   ├── pages/
│   │   └── index.astro          # Main homepage (~823 lines)
│   ├── layouts/
│   │   └── Layout.astro         # Base layout with all SEO metadata
│   └── styles/
│       └── global.css           # Global styles + Tailwind imports
├── public/
│   ├── logos/                   # Brand SVG logos (siemens, bosch, balay)
│   ├── favicon* (multiple)      # Complete favicon set for all platforms
│   ├── og-image.png             # Open Graph image (1200x630)
│   ├── tecnico-hero.webp        # Hero section image
│   ├── robots.txt
│   ├── site.webmanifest
│   └── sitemap.xml
├── .vscode/
│   ├── extensions.json          # Recommends astro-build.astro-vscode
│   └── launch.json
├── astro.config.mjs
├── package.json
├── tsconfig.json                # Extends astro/tsconfigs/strict
└── vercel.json                  # Redirect + security headers config
```

---

## Development Commands

```bash
npm run dev       # Start dev server at http://localhost:4321
npm run build     # Build to ./dist/ (static output)
npm run preview   # Preview production build locally
npm run astro     # Direct Astro CLI access
```

Node v22.12.0+ is required. Use `npm install` before first run.

---

## Architecture & Key Conventions

### Single-Page Structure

The entire website is one page (`src/pages/index.astro`). All sections live in this file:

1. **Hero** — headline, CTA buttons (phone + WhatsApp)
2. **Servicios** — appliance types (6 services)
3. **Marcas** — supported brands (17 brands with logos)
4. **Zonas** — service areas (32 Navarra municipalities)
5. **Tarifas** — pricing table (hardcoded)
6. **Reviews** — customer testimonials carousel (7 reviews)
7. **Quiénes somos** — about section
8. **Footer** — contact info, hours

### Data Arrays (top of index.astro)

Business data is stored as TypeScript arrays at the top of `index.astro`:

```typescript
const SERVICIOS = [...] // 6 appliance types with icon SVG paths
const REVIEWS = [...]   // 7 testimonials with name, city, rating, text
const ZONAS = [...]     // 32 municipalities in Navarra
const MARCAS = [...]    // 17 brands with name and logo URL
```

When adding/updating business content, modify these arrays — do not hardcode values inline.

### Layout.astro — SEO Metadata

`Layout.astro` handles all meta tags, structured data, and font loading:

- OpenGraph + Twitter Card tags
- JSON-LD schemas: `LocalBusiness`, `FAQPage`, `WebSite`
- Geo-location meta tags (Pamplona, Navarra, Spain)
- Canonical URL enforcement (www)
- Complete favicon set

When updating business information (phone, hours, address, ratings), update both the visible HTML in `index.astro` AND the JSON-LD structured data in `Layout.astro`.

### CSS Conventions

**CSS variables defined in `global.css`:**
```css
--orange: #f97316   /* Primary CTA color */
--blue:   #1d4ed8   /* Brand/accent color */
--dark:   #0a0f1e   /* Page background */
--mid:    #111827   /* Section background */
```

**Responsive breakpoint:** 768px (mobile-first, `@media (min-width: 768px)` for desktop).

**Use `style is:global` for mobile overrides** when Astro scoped styles conflict with responsive styles.

### Naming Conventions

- **Data arrays:** `SCREAMING_SNAKE_CASE` in Spanish (SERVICIOS, ZONAS, MARCAS, REVIEWS)
- **CSS classes:** `kebab-case` (`.hero-section`, `.review-card`)
- **JavaScript variables:** `camelCase`
- **File names:** `kebab-case.astro`

---

## Content Management

### Business Info (hardcoded)

All content is hardcoded — no CMS or environment variables are used.

Key values to keep in sync across both `index.astro` and `Layout.astro`:

| Field | Location |
|-------|----------|
| Phone number | Hero CTA, footer, JSON-LD |
| Hours (8:00-20:00, 365 days) | Services section, JSON-LD |
| Address (Pamplona, Navarra) | Footer, JSON-LD geo coords |
| Ratings (4.7 ⭐, 207 reviews) | Reviews section, JSON-LD |
| Service areas (32 zones) | `ZONAS` array |
| Supported brands (17) | `MARCAS` array |

### Pricing Table

Located in the Tarifas section of `index.astro`:
- Desplazamiento + Diagnóstico: **40€ + IVA**
- Mano de obra: **20€ + IVA**
- Piezas: varies by manufacturer

### Supported Brands

SVG logos stored in `public/logos/` for: `siemens.svg`, `bosch.svg`, `balay.svg`

Other brands (14) use external favicon-sized logos from brand domains in the `MARCAS` array.

---

## SEO & Structured Data

The site has comprehensive SEO implementation. When making changes:

1. **Sitemap:** `public/sitemap.xml` is static. Update `lastmod` if significant content changes.
2. **Robots.txt:** `public/robots.txt` allows all crawlers.
3. **JSON-LD:** Three schemas in `Layout.astro` — `LocalBusiness`, `FAQPage`, `WebSite`. Keep FAQ answers in sync with visible content.
4. **Canonical URLs:** Vercel redirects non-www → www (defined in `vercel.json`).

---

## Deployment

**Platform:** Vercel (automatic deployments from `main` branch)

**`vercel.json` configuration:**
- Permanent redirect: `servitecnafarroa.com` → `www.servitecnafarroa.com`
- Security headers on all routes:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `X-XSS-Protection: 1; mode=block`

No environment variables are required for deployment.

---

## Git Conventions

**Commit messages:** Written in Spanish, imperative mood, describing the user-visible change.

Examples from history:
```
Zonas: toda Navarra (32 localidades). Horario: lunes a domingo 8-20, festivos incluidos
SEO: favicon completo (SVG+PNG 16/32/180/192/512), apple-touch-icon, webmanifest, sitemap.xml
Tarifas: quitar asterisco IVA
```

**Branch strategy:**
- `main` — production branch (auto-deploys to Vercel)
- Feature branches for Claude-assisted work: `claude/<description>-<id>`

---

## VS Code Setup

Recommended extension: `astro-build.astro-vscode` (Astro language support)

The `.vscode/extensions.json` file will prompt installation automatically.

---

## Common Tasks

### Add a new service zone (municipality)

Edit the `ZONAS` array in `src/pages/index.astro`.

### Add a new supported brand

Edit the `MARCAS` array in `src/pages/index.astro`. Add an SVG to `public/logos/` if a high-quality logo is available, otherwise use the brand's favicon URL.

### Add a new customer review

Edit the `REVIEWS` array in `src/pages/index.astro`. Keep `rating: 5` and include `name`, `city`, and `text` fields.

### Update contact phone number

Search for the phone number string and update in:
1. `src/pages/index.astro` (hero CTA, footer)
2. `src/layouts/Layout.astro` (JSON-LD telephone field)

### Update business hours

Update in:
1. `src/pages/index.astro` (services section badge and footer)
2. `src/layouts/Layout.astro` (JSON-LD `openingHours` field)
