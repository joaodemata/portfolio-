# Joao Da Mata — Backend & Automation Portfolio

Personal portfolio of Joao Da Mata, electrical engineer working on backends,
payment gateways and BIW production-line automation. Visual identity: jungle greens,
mango and lagoon accents, blueprint grid paper, spec-sheet typography and
telemetry readouts.

## Pages

- **Index (`/`)** — full-bleed hero, spec-sheet readout, disciplines, featured work and a gallery strip.
- **Work (`/projects`)** — projects presented as engineering spec sheets with key metrics and expandable notes.
- **Gallery (`/gallery`)** — filterable masonry grid of field photographs with a keyboard-navigable lightbox.
- **About (`/about`)** — bio, operating principles, a "bill of materials" toolkit and a service-log timeline.
- **Contact (`/contact`)** — social channels plus a Netlify Forms contact form.

## Tech

- TanStack Start + React 19, file-based routes in `src/routes/`
- Tailwind CSS v4 with a custom theme in `src/styles.css`
- Content Collections for Markdown projects, jobs and education in `content/`
- Netlify Image CDN for every image (resized WebP with responsive `srcset`)
- Netlify Forms for contact submissions

## Editing content

- Identity, availability and social links: `src/lib/site.ts`
- Gallery photos: add a file to `public/img/` and an entry in `src/lib/gallery.ts`
- Projects: Markdown files in `content/projects/` (supports `code`, `year`, `role`, `order`, `stats`)
- Experience and education: `content/jobs/` and `content/education/`

## Run locally

```bash
pnpm install
netlify dev
```

`netlify dev` is recommended so the Image CDN (`/.netlify/images`) and Forms
behave as they do in production.
