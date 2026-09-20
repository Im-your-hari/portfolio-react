# Harikrishnan KB — Portfolio

A dark, glassmorphic, AI-inspired portfolio built with Vite + React + TypeScript.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Editing content (no JSX digging required)

All real content lives in `src/data/`:

| File | What it controls |
|---|---|
| `profile.ts` | Name, rotating hero roles, bio paragraphs, email, social links |
| `techStack.ts` | Tech stack orbs - name, proficiency %, category |
| `projects.ts` | Project cards + case-study modal content (problem/approach/impact/stack) |
| `experience.ts` | Timeline entries and the "2.5+ years" highlight stats |

Update those files and the UI reflects it automatically - no component code needs to change for routine content edits.

## Structure

```
src/
  components/
    layout/       Navbar, Footer, AmbientBackground (canvas particles + grid)
    hero/         Hero section with rotating role text
    about/        Bio + highlight stat cards
    techstack/    Tech grid + circular proficiency orb
    projects/     Project cards, expandable case-study modal
    experience/   Vertical timeline
    contact/      Contact CTA card
    ui/           Shared primitives (Reveal - scroll-in animation wrapper)
  data/           Editable content (see table above)
  hooks/          useReveal, usePointerGlow, useRotatingWord
  styles/         tokens.css (design tokens), globals.css (resets + shared classes)
  types/          Shared TypeScript interfaces for content
```

Each section is a self-contained folder with its own `.tsx` + `.css`, so you can restyle or extend one section without touching the rest.

## Design system

- **Palette:** deep navy/black base (`--bg-base`) with a warm amber (`--accent-amber`) and cool cyan (`--accent-cyan`) dual accent, used consistently for glow, gradients, and interactive states.
- **Type:** Space Grotesk for display/headings, Inter for body copy, JetBrains Mono for small tech labels and tags.
- **Motion:** a single orchestrated hero entrance, scroll-triggered reveals per section (`Reveal` component), and cursor-reactive glow on project cards. All motion respects `prefers-reduced-motion`.

## Adding a new project

Add an entry to the `projects` array in `src/data/projects.ts` - it will automatically appear in the grid and get a working case-study modal. Set `featured: true` on at most one project to give it the larger card treatment.
