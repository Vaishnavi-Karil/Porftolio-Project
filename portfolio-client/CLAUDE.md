# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start Vite dev server (HMR)
npm run build      # production build → dist/
npm run preview    # serve the dist/ build locally
npm run lint       # ESLint (JS/JSX only, no TypeScript)
```

No test suite is configured.

## Architecture

**Single-page portfolio** with a fixed left sidebar. All sections (`Hero`, `About`, `Resume`, `Skills`, `Portfolio`, `Certifications`, `Education`, `Services`, `Contact`, `Footer`) are rendered together in `App.jsx` as one long scrollable page. The active nav item is driven by an `IntersectionObserver` watching each `<section id="...">`. Clicking a nav item calls `scrollIntoView` — there are no separate routes for these sections.

The only true route is `/project/:slug`, which renders `ProjectDetails`. When a user navigates away from this route, `App.jsx` switches from a `<Routes>` render back to the full section stack.

**All content data lives in `src/contants.js`** (note the typo — file is named `contants.js`, not `constants.js`). This single file exports: `navbar`, `portfolioItems`, `projectDetails`, `skillCategories`, `skills`, `services`, `stats`, `resumeSummary`, `resumeStats`, `resumeExperience`, `contact`. Adding or updating portfolio projects, resume entries, or skills means editing this file only.

**`portfolioItems` uses a `slug` field** for routing to `/project/:slug`. The `ProjectDetails` page looks up the item via `portfolioItems.find(item => item.slug === slug)`.

**Styling** is CSS Modules (`.module.css`) per component/page, with `src/styles/global.css` and `src/index.css` for app-wide resets and tokens.

**Contact form** (`src/App.jsx` `ContactPage`) POSTs to `http://localhost:5000/api/contact` — requires the backend server (in `../portfolio-backend/`) to be running locally.

## Key files

| File | Purpose |
|------|---------|
| `src/contants.js` | Single source of truth for all portfolio content |
| `src/App.jsx` | Layout, sidebar, routing logic, IntersectionObserver |
| `src/main.jsx` | Entry point — wraps app in `BrowserRouter` |
| `src/pages/ProjectDetails/index.jsx` | Detail view for individual portfolio items |
| `src/components/Typewriter/` | Animated typewriter in the Hero section |

## Dependency notes

- React 19, React Router DOM 7 (latest APIs)
- `framer-motion` is installed but usage is minimal — check before adding new animation patterns
- Icons are from `react-icons` (FI prefix = Feather, FA = FontAwesome, SI = Simple Icons)
