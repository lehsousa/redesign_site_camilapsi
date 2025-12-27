# Copilot Instructions for Camila PSI Redesign

## Architecture Overview
This is a **React + Vite + Tailwind CSS** portfolio/landing page for a psychology professional specializing in ACT (Acceptance and Commitment Therapy). It's a single-page application with scroll-based navigation.

**Key architectural pattern:**
- Main app structure in [src/App.jsx](src/App.jsx) imports reusable layout components
- Each section (Hero, About, Services, Contact) is a standalone component
- Layout utilities: `Container` (max-width wrapper), `Section` (section styling)
- Animations via Framer Motion throughout

## Tech Stack & Build Workflow
- **Build tool:** Vite (commands: `dev`, `build`, `preview` in package.json)
- **CSS framework:** Tailwind CSS with custom color theme (see [tailwind.config.js](tailwind.config.js))
- **Animation:** Framer Motion for scroll-triggered and interactive animations
- **Icons:** Lucide React (e.g., Menu, X in Header)
- **Fonts:** Inter (sans-serif) and Playfair Display (serif) from Google Fonts

**Development:** `npm run dev` starts Vite dev server on localhost:5173

## Design & Tailwind Conventions
**Custom color palette** (defined in tailwind.config.js):
- `primary: #A2CEEF` (bright blue) - headings, accents, buttons
- `secondary: #1A1A1A` (dark gray) - body text
- `accent: #DAEEFA` (light blue) - subtle backgrounds
- `background: #FFFFFF` (white) - main background
- `surface: #F9FAFB` (off-white) - card backgrounds
- `muted: #6B7280` (gray) - secondary text

**Typography:**
- Headings use `font-serif italic` (Playfair Display) with `text-primary`
- Body text uses `font-sans` (Inter) with `text-muted` or `text-secondary`
- Buttons consistently use `rounded-full` (see [src/components/Button.jsx](src/components/Button.jsx))

## Component Patterns
**Reusable components** emphasize composition over page-specific logic:
- [Container.jsx](src/components/Container.jsx): `max-w-7xl mx-auto` wrapper with responsive padding
- [Section.jsx](src/components/Section.jsx): Section background and spacing, accepts `id` for navigation links
- [Button.jsx](src/components/Button.jsx): Accepts `variant` prop (primary, secondary, outline, ghost) with Framer Motion hover/tap effects
- Full-height layout sections use `md:grid-cols-2` for desktop two-column layouts with `gap-12`

**Motion patterns** (Framer Motion):
- Scroll-triggered animations: `initial={{ opacity: 0, x: ±50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}`
- Button interactions: `whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}`
- See [src/components/About.jsx](src/components/About.jsx) for reference

## Portuguese Content & SEO
The site is in **Portuguese** (Brazilian Portuguese). Meta description in [index.html](index.html) targets ACT therapy and anxiety treatment. Preserve Portuguese terminology: "Terapia de Aceitação e Compromisso (ACT)", "psicóloga", "ansiedade".

## State Management
No global state library (Redux, Zustand, etc.) currently used. State is local:
- Header scroll detection via `useState` and `useEffect` with scroll listener
- Mobile menu toggle via `useState`

For future complex state, recommend lightweight solutions (Context API or Zustand) to avoid over-engineering.

## New Component Guidelines
When adding components:
1. Use functional components with props-based configuration
2. Wrap motion elements from Framer Motion for animations
3. Use Tailwind utility classes; avoid inline styles
4. Leverage `Container` and `Section` for consistent layout
5. Reference custom colors by name (e.g., `text-primary`, `bg-accent`)
6. Responsive design: mobile-first with `md:` breakpoints for desktop
7. Export as default: `export default ComponentName;`
