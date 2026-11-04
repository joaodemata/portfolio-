# Agent notes

Personal portfolio for a tropical field engineer. TanStack Start (React 19) on
Netlify, Tailwind v4, Content Collections. No database or auth — content is
local Markdown and TypeScript data.

## Layout

- `src/routes/` — `index` (home), `projects`, `gallery`, `about`, `contact`, `__root` (shell, fonts, header/footer).
- `src/components/` — `SiteHeader` (nav + telemetry marquee), `SiteFooter`, `SectionHead` (§-numbered headings), `CdnImage`, `BrandIcons`, `ContactForm`, `NotFoundPage`, shadcn `ui/` primitives (mostly unused).
- `src/lib/site.ts` — identity, availability, social links, `pageMeta`.
- `src/lib/gallery.ts` — gallery items (src, caption, category, coords, intrinsic width/height).
- `src/lib/images.ts` — Netlify Image CDN URL/srcset helpers.
- `src/lib/content.ts` + `content-collections.ts` — Zod schemas (projects add `code`, `year`, `role`, `order`, `stats`) and sanitized Markdown.
- `content/` — projects, jobs, education Markdown.
- `public/img/` — AI-generated source photos (JPG). Never reference these directly in markup.

## Conventions

- **Images:** always render through `CdnImage` (or `cdn()`), which emits `/.netlify/images?url=…&fm=webp` with a `srcset` and a tiny blurred placeholder. Pass `width`/`height` when known to avoid layout shift.
- **Design system:** colors are Tailwind tokens `jungle`, `canopy`, `fern`, `paper`, `sand`, `mango`, `hibiscus`, `lagoon`, `ink`. Fonts: Bricolage Grotesque (display/body) and JetBrains Mono (`.spec` labels). Reusable classes in `styles.css`: `.grid-paper`, `.grid-dark`, `.spec`, `.ticks` (corner registration marks), `.dim` (dimension line), `.hl` (mango highlighter), `.tag`, and `@utility` buttons `btn`, `btn-mango`, `btn-ghost`. Square corners, 2px jungle borders, hard offset shadows — keep it.
- Buttons are Tailwind `@utility` definitions (Tailwind v4 cannot `@apply` plain classes); override their colors with `!` modifiers.
- Section headings use `SectionHead` with a § number matching the nav index.

## Contact form

`ContactForm` POSTs URL-encoded `form-name`, `name`, `email`, `message`, `bot-field` to `/contact.html`. Keep field names in sync with `public/contact.html` (the static Netlify Forms registration) and `ContactForm.test.tsx`. Netlify Forms is enabled for the site.

## Removed from the starter

The template's blog and résumé routes were removed; experience/education now render on `/about`. Blog helpers in `src/lib/content.ts` / `chronology.ts` remain because unit tests cover them.

## Deploy workaround

`plugins/skip-emails-function` (registered in `netlify.toml`) deletes `.netlify/functions-internal/emails` during `onBuild`. The dashboard-installed Netlify Emails plugin generates that function, and uploading it made deploys fail with a 500 error. Dashboard plugins run before `netlify.toml` plugins, so the deletion happens after the function is created and before bundling. Remove this plugin once Emails is uninstalled from the site.
