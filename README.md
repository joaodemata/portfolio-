# Joao Da Mata — Backend & Automation Portfolio

Personal portfolio of Joao Da Mata, electrical engineer working on backends,
payment gateways and BIW production-line automation. Visual identity: jungle greens,
mango and lagoon accents, blueprint grid paper, spec-sheet typography and
telemetry readouts.

## Pages

- **Index (`/`)** — full-bleed hero, spec-sheet readout, disciplines, featured work and a field-log strip. English/Spanish switch in the header.
- **Work (`/projects`)** — projects presented as engineering spec sheets with key metrics and expandable notes.
- **Field log (`/gallery`)** — photos from my own posts, each with the story behind it.
- **About (`/about`)** — bio, operating principles, a "bill of materials" toolkit and a service-log timeline.
- **Contact (`/contact`)** — social channels plus a Netlify Forms contact form.

## Tech

- TanStack Start + React 19, file-based routes in `src/routes/`
- Tailwind CSS v4 with a custom theme in `src/styles.css`
- Content Collections for Markdown projects, jobs and education in `content/`
- Netlify Image CDN for every image (resized WebP with responsive `srcset`)
- Netlify Forms for contact submissions

## Editing content

- Identity and social links: `src/lib/site.ts`; translated page copy: `src/lib/messages.ts`
- Field-log photos: add a file to `public/img/` and an entry in `src/lib/gallery.ts`
- Spanish content: add a `name.es.md` next to each Markdown file with `locale: es`
- Projects: Markdown files in `content/projects/` (supports `code`, `year`, `role`, `order`, `stats`)
- Experience and education: `content/jobs/` and `content/education/`

## Run locally

```bash
pnpm install
netlify dev
```

`netlify dev` is recommended so the Image CDN (`/.netlify/images`) and Forms
behave as they do in production.
