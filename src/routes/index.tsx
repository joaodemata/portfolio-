import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { CdnImage } from '../components/CdnImage'
import { SectionHead } from '../components/SectionHead'
import { gallery } from '../lib/gallery'
import { site, pageMeta } from '../lib/site'
import { sortProjects } from '../lib/projects'

export const Route = createFileRoute('/')({
  component: PortfolioHome,
  head: () => pageMeta('Field engineer', site.description),
})

const readouts = [
  { label: 'Years in the field', value: '08' },
  { label: 'Devices deployed', value: '310+' },
  { label: 'Countries', value: '06' },
  { label: 'Salt-spray failures', value: '0*' },
]

function PortfolioHome() {
  const projects = sortProjects(allProjects).slice(0, 2)
  const strip = gallery.slice(1, 6)

  return (
    <>
      {/* ——— Hero ——— */}
      <section className="relative isolate overflow-hidden bg-jungle text-paper">
        <CdnImage
          src="/img/hero.jpg"
          alt=""
          priority
          sizes="100vw"
          widths={[800, 1200, 1600, 2000]}
          baseWidth={1600}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-jungle via-jungle/55 to-jungle/10" />
        <div className="grid-dark absolute inset-0 -z-10 opacity-40 mix-blend-overlay" />

        <div className="mx-auto grid min-h-[86vh] max-w-7xl content-end gap-10 px-4 pb-12 pt-24 sm:px-6 lg:grid-cols-[1fr_340px] lg:items-end">
          <div className="rise">
            <p className="spec mb-5 flex flex-wrap items-center gap-3 text-lagoon">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-lagoon" />
              {site.role} · {site.location}
            </p>
            <h1 className="font-display text-[clamp(3rem,9vw,8.5rem)] font-extrabold leading-[0.86] tracking-[-0.04em]">
              Engineering
              <br />
              for <span className="italic text-mango">warm</span>
              <br />
              latitudes.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-paper/80 sm:text-xl">
              {site.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/projects" className="btn-mango">
                View the work <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                to="/gallery"
                className="btn-ghost !border-paper !text-paper hover:!bg-paper hover:!text-jungle"
              >
                Field gallery
              </Link>
            </div>
          </div>

          <aside
            className="ticks rise border border-paper/25 bg-jungle/70 p-5 text-paper backdrop-blur-md [animation-delay:200ms]"
            aria-label="Quick facts"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="spec text-paper/60">Spec sheet</p>
              <p className="spec text-mango">FIG. 00</p>
            </div>
            <dl className="grid grid-cols-2 gap-px bg-paper/15">
              {readouts.map((r) => (
                <div key={r.label} className="bg-jungle/90 p-3">
                  <dt className="spec text-[9px] text-paper/50">{r.label}</dt>
                  <dd className="mt-1 font-mono text-3xl font-semibold text-paper">
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="spec mt-4 text-[9px] text-paper/40">
              * that we talk about publicly
            </p>
            <p className="spec mt-4 border-t border-paper/15 pt-3 text-lagoon">
              ◉ {site.availability}
            </p>
          </aside>
        </div>
        <p className="spec absolute right-4 top-6 hidden text-paper/50 sm:block">
          IMG 0001 — Lagoon Station 03 · {gallery[0].coords}
        </p>
      </section>

      {/* ——— Disciplines ——— */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHead
          n="01"
          kicker="Disciplines"
          title="Three trades, one toolbelt."
        />
        <div className="grid gap-px border border-jungle/20 bg-jungle/20 md:grid-cols-3">
          {[
            {
              code: 'HW',
              title: 'Rugged hardware',
              text: 'Sensor nodes, PCBs and enclosures specified for IP68, UV and the occasional crab.',
              color: 'bg-lagoon',
            },
            {
              code: 'ST',
              title: 'Light structures',
              text: 'Bamboo, aluminium and steel — solar canopies and walkways that move with the wind.',
              color: 'bg-mango',
            },
            {
              code: 'SW',
              title: 'Offline-first software',
              text: 'Telemetry, dashboards and data pipelines that keep working when the signal doesn’t.',
              color: 'bg-hibiscus',
            },
          ].map((d, i) => (
            <article
              key={d.code}
              className="group relative bg-paper p-8 transition-colors hover:bg-[#fbf6ea]"
            >
              <div className="mb-10 flex items-center justify-between">
                <span
                  className={`grid h-12 w-12 place-items-center font-mono text-sm font-bold text-jungle ${d.color}`}
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
            kicker="Selected work"
            title="Deployed, not just designed."
            action={
              <Link to="/projects" className="btn-ghost">
                All projects <ArrowRight size={14} aria-hidden="true" />
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
                  {project.image && (
                    <CdnImage
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
                  <span className="spec absolute left-0 top-0 bg-jungle px-3 py-2 text-mango">
                    {project.code} · {project.year}
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

      {/* ——— Gallery strip ——— */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHead
          n="03"
          kicker="Field log"
          title="Notes from the humid edge."
          action={
            <Link to="/gallery" className="btn-ghost">
              Open gallery <ArrowRight size={14} aria-hidden="true" />
            </Link>
          }
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {strip.map((item, i) => (
            <Link
              key={item.id}
              to="/gallery"
              className={`group relative block overflow-hidden border border-jungle/30 ${i % 2 ? 'md:mt-10' : ''}`}
            >
              <CdnImage
                src={item.src}
                alt={item.title}
                sizes="(min-width: 768px) 20vw, 50vw"
                widths={[320, 480, 640]}
                baseWidth={480}
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="spec absolute bottom-0 left-0 right-0 bg-jungle/85 px-2 py-1.5 text-[9px] text-paper">
                FIG. {String(i + 1).padStart(2, '0')} — {item.title}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ——— Manifesto band ——— */}
      <section className="bg-mango text-jungle">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-20 sm:px-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-4xl font-display text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            “If it works at 34 °C and 95% humidity, it works anywhere.”
          </p>
          <Link
            to="/about"
            className="btn shrink-0 bg-jungle text-paper hover:bg-canopy"
          >
            Read the about page <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
