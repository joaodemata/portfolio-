import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ArrowUpRight } from 'lucide-react'
import { CdnImage } from '../components/CdnImage'
import { ProjectPlaceholder } from '../components/ProjectPlaceholder'
import { SectionHead } from '../components/SectionHead'
import { pageMeta } from '../lib/site'
import { sortProjects } from '../lib/projects'

export const Route = createFileRoute('/projects')({
  component: Projects,
  head: () =>
    pageMeta(
      'Work',
      'Payment gateways, production-line automation and side projects — with the numbers to back them up.',
    ),
})

function Projects() {
  const projects = sortProjects(allProjects)
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHead
        as="h1"
        n="01"
        kicker={`Project register · ${projects.length} entries`}
        title={
          <>
            Built to run <span className="hl">in production</span>.
          </>
        }
      />

      {projects.length ? (
        <div className="space-y-24">
          {projects.map((project, i) => (
            <article
              key={project._meta.path}
              id={project._meta.path}
              className="scroll-mt-32"
            >
              <div className="dim mb-4 text-ink/60">
                <span>
                  Sheet {String(i + 1).padStart(2, '0')} of{' '}
                  {String(projects.length).padStart(2, '0')}
                </span>
              </div>
              <div
                className={`grid gap-0 border-2 border-jungle bg-[#fbf6ea] lg:grid-cols-[1.25fr_1fr] ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="relative min-h-72 overflow-hidden border-b-2 border-jungle lg:border-b-0">
                  {project.image ? (
                    <CdnImage
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <ProjectPlaceholder
                      code={project.code}
                      title={project.title}
                      className="absolute inset-0 h-full w-full"
                    />
                  )}
                  <span className="spec absolute left-0 top-0 bg-mango px-3 py-2 font-semibold text-jungle">
                    {project.code ?? `PRJ-${i + 1}`}
                  </span>
                </div>

                <div
                  className={`flex flex-col p-6 sm:p-10 ${i % 2 ? 'lg:border-r-2' : 'lg:border-l-2'} border-jungle`}
                >
                  <div className="spec mb-6 flex flex-wrap justify-between gap-2 text-ink/50">
                    <span>{project.role}</span>
                    {project.year && <span>Rev {project.year}</span>}
                  </div>
                  <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-lg text-ink/75">
                    {project.description}
                  </p>

                  {project.stats.length > 0 && (
                    <dl className="mt-8 grid grid-cols-3 border-y border-jungle/25">
                      {project.stats.map((s, j) => (
                        <div
                          key={s.label}
                          className={`py-4 ${j ? 'border-l border-jungle/25 pl-4' : ''}`}
                        >
                          <dt className="spec text-[9px] text-ink/50">
                            {s.label}
                          </dt>
                          <dd className="mt-1 font-mono text-xl font-semibold sm:text-2xl">
                            {s.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                    {project.tags.map((tag) => (
                      <li key={tag} className="tag text-fern">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <details className="group mt-8 border-t border-dashed border-jungle/30 pt-4">
                    <summary className="spec flex cursor-pointer list-none items-center justify-between text-ink/70 hover:text-ink">
                      Engineering notes
                      <span className="text-lg transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <div
                      className="prose prose-sm mt-4 max-w-none prose-headings:font-display prose-headings:tracking-tight prose-strong:text-ink prose-li:marker:text-mango"
                      dangerouslySetInnerHTML={{ __html: project.html }}
                    />
                  </details>

                  {(project.github || project.liveUrl) && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost"
                        >
                          Source <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-mango"
                        >
                          Live <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p>No projects published yet.</p>
      )}

      <div className="mt-24 flex flex-col items-start justify-between gap-6 border-2 border-dashed border-jungle/40 p-8 sm:flex-row sm:items-center">
        <p className="font-display text-2xl font-bold tracking-tight">
          Have a system that can’t afford to go down?
        </p>
        <Link to="/contact" className="btn-mango">
          Start a project
        </Link>
      </div>
    </div>
  )
}
