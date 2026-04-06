# CLAUDE.md — Servitec Nafarroa

## Project Overview

Static website for **Servitec Nafarroa**, a multi-brand appliance repair service based in Pamplona, Navarra, Spain. The site is a marketing website with full SEO optimization, including a homepage and dynamic landing pages per appliance type and brand.

- **URL:** https://www.servitecnafarroa.com
- **Deployment:** Vercel (auto-deploy from `main` branch)
- **Language:** Spanish (UI content), English (code/variables)

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Astro | ^6.1.1 | Static site framework |
| Tailwind CSS | ^4.2.2 | Utility CSS framework |
| @tailwindcss/vite | ^4.2.2 | Vite integration for Tailwind |
| @vercel/analytics | latest | Vercel Web Analytics |
| TypeScript | strict | Type safety (via Astro config) |
| Node.js | >=22.12.0 | Runtime requirement |

---

## Repository Structure

```
servitec-nafarroa/
├── src/
│   ├── components/
│   │   └── NavBar.astro             # Navigation bar with dropdown menus
│   ├── data/
│   │   ├── electrodomesticos.ts     # Data for dynamic appliance pages
│   │   └── marcas.ts                # Data for dynamic brand pages
│   ├── layouts/
│   │   └── Layout.astro             # Base layout: all SEO metadata, analytics, favicons
│   ├── pages/
│   │   ├── index.astro              # Homepage (~830 lines)
│   │   ├── reparacion-[electrodomestico]-pamplona.astro  # Dynamic appliance pages
│   │   └── servicio-tecnico-[marca]-pamplona.astro       # Dynamic brand pages
│   └── styles/
│       └── global.css               # Global styles + Tailwind imports + CSS variables
├── public/
│   ├── logos/                       # Brand logos (PNG/WebP, 14 files)
│   │   └── aeg.png, aspes.webp, beko.png, bosch.png, cata.png,
│   │       daewoo.webp, edesa.png, electrolux.png, elica.png,
│   │       fagor.png, lg.png, miele.png, siemens.png, teka.png
│   ├── favicon.ico                  # Multi-size ICO (16, 32, 48px)
│   ├── favicon.svg                  # SVG favicon
│   ├── favicon-16.png               # 16×16 PNG
│   ├── favicon-32.png               # 32×32 PNG
│   ├── favicon-48.png               # 48×48 PNG (required by Google Search)
│   ├── favicon-180.png              # 180×180 PNG (Apple Touch)
│   ├── apple-touch-icon.png         # Apple Touch Icon (180×180)
│   ├── favicon-192.png              # 192×192 (Android Chrome)
│   ├── favicon-512.png              # 512×512 (PWA splash)
│   ├── og-image.png                 # Open Graph image (1200×630)
│   ├── tecnico-hero.webp            # Hero image (default LCP)
│   ├── lavadora.webp                # Appliance image
│   ├── horno.webp                   # Appliance image
│   ├── microondas.webp              # Appliance image
│   ├── servitec-nafarroa-logo.png   # Full logo
│   ├── servitec-nafarroa-logo-white.png  # White version for dark backgrounds
│   ├── servitec-nafarroa-logo-icon.png   # Icon-only logo
│   ├── robots.txt                   # Allows all crawlers
│   ├── sitemap.xml                  # Static sitemap
│   ├── site.webmanifest             # PWA manifest
│   └── llms.txt                     # LLM-readable site summary
├── .vscode/
│   ├── extensions.json              # Recommends astro-build.astro-vscode
│   └── launch.json
├── astro.config.mjs                 # inlineStylesheets: 'always' + Tailwind Vite plugin
├── package.json
├── tsconfig.json                    # Extends astro/tsconfigs/strict
└── vercel.json                      # Redirect (non-www → www) + security headers
```

---

## Development Commands

```bash
npm run dev       # Start dev server at http://localhost:4321
npm run build     # Build to ./dist/ (static output)
npm run preview   # Preview production build locally
npm run astro     # Direct Astro CLI access
```

Node v22.12.0+ is required. Run `npm install` before first use.

---

## Architecture & Key Conventions

### Page Structure

The site has three types of pages:

1. **Homepage** (`src/pages/index.astro`) — all main sections:
   - Hero — headline, phone + WhatsApp CTAs
   - Servicios — 6 appliance types
   - Marcas — 17 supported brands with logos
   - Zonas — 32 Navarra municipalities
   - Tarifas — pricing table
   - Reviews — testimonials carousel (7 reviews)
   - Quiénes somos — about section with trust badges
   - Footer — contact info, hours, links

2. **Appliance pages** (`reparacion-[electrodomestico]-pamplona.astro`) — dynamic, generated from `src/data/electrodomesticos.ts`

3. **Brand pages** (`servicio-tecnico-[marca]-pamplona.astro`) — dynamic, generated from `src/data/marcas.ts`

### Data Arrays (top of index.astro)

Business data is stored as TypeScript arrays at the top of `index.astro`:

```typescript
const SERVICIOS = [...] // 6 appliance types with icon SVG paths
const REVIEWS = [...]   // 7 testimonials with name, city, rating, text
const ZONAS = [...]     // 32 municipalities in Navarra
const MARCAS = [...]    // 17 brands with name and logo path
```

When adding/updating business content, modify these arrays — do not hardcode values inline.

### Layout.astro — SEO Metadata & Analytics

`Layout.astro` handles all meta tags, structured data, scripts, and fonts.

**Head element order (must be maintained):**
1. `<meta charset="UTF-8">` — MUST be first (within first 1024 bytes)
2. `<meta name="viewport">`
3. `<title>`
4. `<meta name="description">` — critical for SEO score
5. Google Tag Manager script (`is:inline`)
6. Microsoft Clarity script (`is:inline`)
7. `<Analytics />` (Vercel Web Analytics)
8. Favicon links
9. LCP image preload (`media="(min-width: 769px)"`)
10. Canonical URL
11. Robots, author, geo meta tags
12. Open Graph tags
13. Twitter Card tags
14. JSON-LD structured data
15. Theme color, sitemap link

**Props:**
```typescript
interface Props {
  title?: string       // Page title (has default)
  description?: string // Meta description (has default)
  canonical?: string   // Canonical URL (default: homepage)
  lcpImage?: string    // LCP image path (default: /tecnico-hero.webp)
}
```

**Structured data in Layout.astro:**
- `LocalBusiness` — business info, hours, area served, aggregate rating
- `WebSite` — site identity

**FAQPage JSON-LD** is in `index.astro` only, NOT in Layout.astro. This avoids Google Search Console flagging duplicate FAQ schemas across all pages.

When updating business information (phone, hours, address, ratings), update both the visible HTML in `index.astro` AND the JSON-LD in `Layout.astro`.

### Analytics Setup

Three analytics tools are active — all configured in `Layout.astro`:

| Tool | Purpose | ID |
|------|---------|---|
| Google Tag Manager | GA4 + conversion tracking | GTM-MPRN8F5V |
| Microsoft Clarity | Heatmaps + Bing SEO | w7d4je4guu |
| Vercel Analytics | Traffic overview | (auto-configured) |

**IMPORTANT:** GTM manages GA4. Do NOT add a direct GA4 script — it causes double-counting. All GA4 configuration (events, conversions) is done inside Google Tag Manager.

**IMPORTANT:** Inline scripts in Astro MUST use the `is:inline` directive, otherwise Astro converts them to `type="module"` (deferred), which breaks GTM and analytics initialization.

### CSS Conventions

**CSS variables defined in `global.css`:**
```css
--orange: #f97316   /* Primary CTA color */
--blue:   #1d4ed8   /* Brand/accent color */
--dark:   #0a0f1e   /* Page background */
--mid:    #111827   /* Section background */
```

**Hardcoded accent colors (WCAG AA compliant):**
- Section labels, "A consultar" text: `#c2410c` (darker orange, 4.5:1+ contrast)
- WhatsApp buttons and FAB: `#15803d` (darker green, WCAG AA compliant)
- WA contact icon background and label: `#15803d`

**Responsive breakpoint:** 768px (mobile-first, `@media (min-width: 768px)` for desktop).

**Use `style is:global` for mobile overrides** when Astro scoped styles conflict with responsive styles.

### Performance: CSS Inlining

`astro.config.mjs` sets `build: { inlineStylesheets: 'always' }`. This inlines all CSS into `<style>` tags in the HTML, eliminating render-blocking `<link rel="stylesheet">` requests. This is appropriate for this site because the total CSS footprint is small.

### LCP Image Preload

The hero image is preloaded with a `media` query to avoid preloading on mobile where the image may be hidden:

```html
<link rel="preload" as="image" href={lcpImage} fetchpriority="high" media="(min-width: 769px)" />
```

The `lcpImage` prop allows each page type to specify its own LCP image.

### Naming Conventions

- **Data arrays:** `SCREAMING_SNAKE_CASE` in Spanish (SERVICIOS, ZONAS, MARCAS, REVIEWS)
- **CSS classes:** `kebab-case` (`.hero-section`, `.review-card`)
- **JavaScript variables:** `camelCase`
- **File names:** `kebab-case.astro`

---

## Content Management

### Business Info (hardcoded)

All content is hardcoded — no CMS or environment variables.

Key values to keep in sync across `index.astro` and `Layout.astro`:

| Field | Locations |
|-------|----------|
| Phone number | Hero CTA, footer, JSON-LD `telephone` |
| Hours (8:00–20:00, 365 days) | Services section badge, footer, JSON-LD `openingHoursSpecification` |
| Address (Pamplona, Navarra) | Footer, JSON-LD `address` + `geo` |
| Ratings (4.7 ⭐, 207 reviews) | Reviews section, JSON-LD `aggregateRating` |
| Service areas (32 zones) | `ZONAS` array, JSON-LD `areaServed` |
| Supported brands (17) | `MARCAS` array |

### Pricing (verified correct)

Located in the **Tarifas** section of `index.astro`:
- Desplazamiento + Diagnóstico: **40€ + IVA**
- Mano de obra: **20€ + IVA**
- Piezas: varies by manufacturer

**Trust badge text** (in the "Quiénes somos" section): reflects the actual pricing model — "Intervención mínima: desplazamiento + diagnóstico + presupuesto". This is NOT free — the minimum intervention (travel + diagnosis + quote) is billed at 40€ + IVA.

### Brand Logos

All 14 logos are stored locally in `public/logos/` as PNG or WebP files. Cards display the logo image above the brand name. Balay uses the Bosch logo (same group).

### Google Reviews Link

The reviews section links to: `https://share.google/Biny3xUlWGCq6u7vh`

---

## SEO & Structured Data

Comprehensive SEO implementation. When making changes:

1. **Sitemap:** `public/sitemap.xml` is static. Update `lastmod` if significant content changes are deployed.
2. **Robots.txt:** `public/robots.txt` allows all crawlers.
3. **JSON-LD:**
   - `LocalBusiness` + `WebSite` → in `Layout.astro` (all pages)
   - `FAQPage` → in `index.astro` only (avoids duplicate schema warnings in Google Search Console)
4. **Canonical URLs:** Vercel redirects non-www → www (defined in `vercel.json`).
5. **Favicons:** Google Search requires minimum 48×48px. `favicon-48.png` and `<link rel="shortcut icon">` satisfy this requirement.

---

## Deployment

**Platform:** Vercel (automatic deployments from `main` branch)

**`vercel.json` configuration:**
- Permanent redirect: `servitecnafarroa.com` → `www.servitecnafarroa.com`
- Security headers on all routes:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `X-XSS-Protection: 1; mode=block`

No environment variables are required.

---

## Git Conventions

**Commit messages:** Written in Spanish, imperative mood, describing the user-visible change.

Examples:
```
Corregir texto de diagnóstico: cobro por intervención mínima, no gratuito
Accesibilidad: contraste WCAG AA y touch targets mínimos
Nav: corregir hover del dropdown — eliminar gap que rompía el hover
SEO: corregir FAQPage duplicado en todas las páginas
Build: inlinear CSS para eliminar render-blocking stylesheets
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

1. Add an entry to the `MARCAS` array in `src/pages/index.astro`.
2. Add the logo file to `public/logos/` (PNG or WebP preferred).
3. Add SEO data to `src/data/marcas.ts` to generate a brand landing page.

### Add a new customer review

Edit the `REVIEWS` array in `src/pages/index.astro`. Include `name`, `city`, `rating` (use 5), and `text` fields.

### Update contact phone number

Search for the phone number string and update in:
1. `src/pages/index.astro` (hero CTA, footer)
2. `src/layouts/Layout.astro` (JSON-LD `telephone` field)

### Update business hours

Update in:
1. `src/pages/index.astro` (services section badge and footer)
2. `src/layouts/Layout.astro` (JSON-LD `openingHoursSpecification`)

### Update aggregate rating (reviews count/score)

Update in:
1. `src/pages/index.astro` (reviews section header)
2. `src/layouts/Layout.astro` (JSON-LD `aggregateRating`)

### Add a new appliance type page

Add an entry to the `ELECTRODOMESTICOS` array in `src/data/electrodomesticos.ts`. The dynamic route `reparacion-[electrodomestico]-pamplona.astro` will generate the page automatically.

### Add a new brand landing page

Add an entry to the `MARCAS_SEO` array in `src/data/marcas.ts`. The dynamic route `servicio-tecnico-[marca]-pamplona.astro` will generate the page automatically.

---

## Known Technical Decisions

| Decision | Reason |
|----------|--------|
| `is:inline` on all analytics scripts | Without it, Astro wraps scripts as `type="module"` (deferred), breaking GTM initialization |
| `inlineStylesheets: 'always'` | Eliminates render-blocking CSS link tags; valid for small CSS footprint |
| FAQPage JSON-LD only in index.astro | Avoids duplicate schema warnings in Google Search Console for 27+ pages |
| `<meta charset>` first in `<head>` | Must appear within first 1024 bytes of HTML; placing it first ensures browser encoding is set before any content |
| LCP preload with `media="(min-width: 769px)"` | Avoids preloading desktop hero image on mobile where it is hidden |
| `#c2410c` for orange labels (not `var(--orange)`) | `#f97316` orange fails WCAG AA contrast ratio on white backgrounds |
| `#15803d` for WhatsApp elements (not `#22c55e`) | `#22c55e` green on white = 2.27:1 contrast (WCAG fail); `#15803d` = 5.1:1 (pass) |
| No direct GA4 script | GTM already injects GA4; a duplicate script causes double-counting in Analytics |
