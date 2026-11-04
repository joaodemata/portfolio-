import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { CdnImage } from '../components/CdnImage'
import { ProjectCover } from '../components/ProjectCover'
import { SectionHead } from '../components/SectionHead'
import { gallery } from '../lib/gallery'
import { inLocale, useLocale, useT } from '../lib/i18n'
import { site, pageMeta } from '../lib/site'
import { sortProjects } from '../lib/projects'

export const Route = createFileRoute('/')({
  component: PortfolioHome,
  head: () => pageMeta(site.role, site.description),
})

const disciplineColors = ['bg-lagoon', 'bg-mango', 'bg-hibiscus']

function PortfolioHome() {
  const { locale } = useLocale()
  const t = useT()
  const projects = sortProjects(inLocale(allProjects, locale)).slice(0, 2)
  const [l1, l2, l2em, l3] = t.home.title

  return (
    <>
      {/* ——— Hero ——— */}
      <section className="relative isolate overflow-hidden bg-jungle text-paper">
        <CdnImage
          src="/img/hero-blueprint.svg"
          alt=""
          priority
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-jungle via-jungle/80 to-jungle/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-jungle via-jungle/30 to-transparent" />

        <div className="mx-auto grid min-h-[86vh] max-w-7xl content-end gap-10 px-4 pb-12 pt-24 sm:px-6 lg:grid-cols-[1fr_340px] lg:items-end">
          <div className="rise">
            <p className="spec mb-5 flex flex-wrap items-center gap-3 text-lagoon">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-lagoon" />
              {t.role} · {t.location}
            </p>
            <h1 className="font-display text-[clamp(3rem,9vw,8.5rem)] font-extrabold leading-[0.86] tracking-[-0.04em]">
              {l1}
              <br />
              {l2} <span className="italic text-mango">{l2em}</span>
              <br />
              {l3}
            </h1>
            <p className="mt-8 max-w-xl text-lg text-paper/80 sm:text-xl">
              {t.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/projects" className="btn-mango">
                {t.home.viewWork} <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                to="/about"
                className="btn-ghost !border-paper !text-paper hover:!bg-paper hover:!text-jungle"
              >
                {t.home.experience}
              </Link>
            </div>
          </div>

          <aside
            className="ticks rise border border-paper/25 bg-jungle/70 p-5 text-paper backdrop-blur-md [animation-delay:200ms]"
            aria-label={t.home.quickFacts}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="spec text-paper/60">{t.home.specSheet}</p>
              <p className="spec text-mango">FIG. 00</p>
            </div>
            <dl className="grid grid-cols-2 gap-px bg-paper/15">
              {t.home.readouts.map((r) => (
                <div key={r.label} className="bg-jungle/90 p-3">
                  <dt className="spec text-[9px] text-paper/50">{r.label}</dt>
                  <dd className="mt-1 font-mono text-3xl font-semibold text-paper">
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="spec mt-4 text-[9px] text-paper/40">
              {t.home.footnote}
            </p>
            <p className="spec mt-4 border-t border-paper/15 pt-3 text-lagoon">
              ◉ {t.availability}
            </p>
          </aside>
        </div>
        <p className="spec absolute right-4 top-6 hidden text-paper/50 sm:block">
          {t.home.heroCaption}
        </p>
      </section>

      {/* ——— Disciplines ——— */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHead
          n="01"
          kicker={t.home.disciplinesKicker}
          title={t.home.disciplinesTitle}
        />
        <div className="grid gap-px border border-jungle/20 bg-jungle/20 md:grid-cols-3">
          {t.home.disciplines.map((d, i) => (
            <article
              key={d.code}
              className="group relative bg-paper p-8 transition-colors hover:bg-[#fbf6ea]"
            >
              <div className="mb-10 flex items-center justify-between">
                <span
                  className={`grid h-12 w-12 place-items-center font-mono text-sm font-bold text-jungle ${disciplineColors[i]}`}
                >
                  {d.code}
                </span>
                <span className="spec text-ink/40">0{i + 1} / 03</span>
              </div>
              <h3 className="font-display text-3xl font-extrabold tracking-tight">
                {d.title}
              </h3>
              <p className="mt-3 text-ink/70">{d.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ——— Featured work ——— */}
      <section className="border-y-2 border-jungle bg-sand/60">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <SectionHead
            n="02"
            kicker={t.home.workKicker}
            title={t.home.workTitle}
            action={
              <Link to="/projects" className="btn-ghost">
                {t.home.allProjects} <ArrowRight size={14} aria-hidden="true" />
              </Link>
            }
          />
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project._meta.path}
                to="/projects"
                hash={project._meta.path}
                className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mango"
              >
                <div className="relative overflow-hidden border-2 border-jungle">
                  <ProjectCover
                    project={project}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-[16/10] w-full"
                    hoverZoom
                  />
                  <span className="spec absolute left-0 top-0 bg-jungle px-3 py-2 text-mango">
                    {[project.code, project.year].filter(Boolean).join(' · ')}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-3xl font-extrabold tracking-tight group-hover:underline group-hover:decoration-mango group-hover:decoration-4 group-hover:underline-offset-4">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-md text-ink/70">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 h-8 w-8 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Field log strip ——— */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHead
          n="03"
          kicker={t.home.galleryKicker}
          title={t.home.galleryTitle}
          action={
            <Link to="/gallery" className="btn-ghost">
              {t.home.openGallery} <ArrowRight size={14} aria-hidden="true" />
            </Link>
          }
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {gallery.map((item, i) => (
            <Link
              key={item.id}
              to="/gallery"
              hash={item.id}
              className="group grid grid-cols-[120px_1fr] items-center gap-5 border-2 border-jungle bg-[#fbf6ea] p-3 sm:grid-cols-[160px_1fr]"
            >
              <CdnImage
                src={item.src}
                alt={item.alt[locale]}
                width={item.width}
                height={item.height}
                sizes="160px"
                widths={[160, 320]}
                baseWidth={320}
                className="aspect-[3/4] w-full object-cover"
              />
              <span>
                <span className="spec block text-mango">
                  FIG. {String(i + 1).padStart(2, '0')} · {item.tag[locale]}
                </span>
                <span className="mt-2 block font-display text-2xl font-extrabold leading-tight tracking-tight group-hover:underline group-hover:decoration-mango group-hover:decoration-4 group-hover:underline-offset-4">
                  {item.title[locale]}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ——— Manifesto band ——— */}
      <section className="bg-mango text-jungle">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-20 sm:px-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-4xl font-display text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            {t.home.quote}
          </p>
          <Link
            to="/about"
            className="btn shrink-0 bg-jungle text-paper hover:bg-canopy"
          >
            {t.home.readAbout} <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
