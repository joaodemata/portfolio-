import { createFileRoute, Link } from '@tanstack/react-router'
import { allEducations, allJobs } from 'content-collections'
import { ArrowRight } from 'lucide-react'
import { CdnImage } from '../components/CdnImage'
import { SectionHead } from '../components/SectionHead'
import { chronologicalEntries } from '../lib/chronology'
import { inLocale, useLocale, useT } from '../lib/i18n'
import { pageMeta, site } from '../lib/site'

export const Route = createFileRoute('/about')({
  component: About,
  head: () =>
    pageMeta(
      'About',
      'Who I am, how I work, and where I have worked — backend engineering and industrial automation.',
    ),
})

function About() {
  const { locale } = useLocale()
  const t = useT()
  const jobs = chronologicalEntries(inLocale(allJobs, locale))
  const schools = chronologicalEntries(inLocale(allEducations, locale))
  const [titleStart, titleHl, titleEnd] = t.about.title
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHead
        as="h1"
        n="03"
        kicker={t.about.kicker}
        title={
          <>
            {titleStart}
            <span className="hl">{titleHl}</span>
            {titleEnd}
          </>
        }
      />

      {/* ——— Intro ——— */}
      <section className="grid gap-12 lg:grid-cols-[minmax(0,420px)_1fr]">
        <figure className="ticks relative text-jungle">
          <CdnImage
            src="/img/thesis-approval.jpg"
            alt={t.about.imageAlt}
            width={800}
            height={1066}
            sizes="(min-width: 1024px) 420px, 100vw"
            widths={[420, 640, 800]}
            baseWidth={800}
            priority
            className="h-auto w-full border-2 border-jungle"
          />
          <figcaption className="spec mt-3 flex justify-between gap-4 text-ink/50">
            <span>{t.about.figcaption}</span>
            <span>{site.coordinates}</span>
          </figcaption>
        </figure>

        <div className="space-y-6 text-xl leading-relaxed text-ink/85">
          <p className="font-display text-3xl font-bold leading-snug tracking-tight text-ink">
            {t.about.intro(site.name.split(' ')[0])}
          </p>
          <p>{t.about.p1}</p>
          <p>{t.about.p2(t.location)}</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/contact" className="btn-mango">
              {t.about.workWithMe} <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/projects" className="btn-ghost">
              {t.about.seeProjects}
            </Link>
          </div>
        </div>
      </section>

      {/* ——— Principles ——— */}
      <section className="mt-28" aria-labelledby="principles">
        <div className="dim mb-8 text-ink/60">
          <span id="principles">{t.about.principlesLabel}</span>
        </div>
        <ol className="grid gap-px border-2 border-jungle bg-jungle sm:grid-cols-2 lg:grid-cols-4">
          {t.about.principles.map((p, i) => (
            <li key={p.title} className="bg-paper p-6">
              <p className="spec text-mango">P-0{i + 1}</p>
              <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-ink/70">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ——— Toolkit ——— */}
      <section
        className="mt-28 grid gap-10 lg:grid-cols-[1fr_2fr]"
        aria-labelledby="toolkit"
      >
        <h2
          id="toolkit"
          className="font-display text-4xl font-extrabold tracking-tight"
        >
          {t.about.toolkitTitle}
        </h2>
        <table className="w-full border-collapse font-mono text-sm">
          <thead>
            <tr className="spec border-b-2 border-jungle text-left text-ink/50">
              {t.about.toolkitHead.map((h, i) => (
                <th
                  key={h}
                  className={`py-2 font-normal ${i < 2 ? 'pr-4' : ''}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.about.toolkit.map(([cat, items], i) => (
              <tr key={cat} className="border-b border-jungle/20 align-top">
                <td className="py-4 pr-4 text-mango">
                  {String(i + 1).padStart(3, '0')}
                </td>
                <td className="py-4 pr-4 font-semibold">{cat}</td>
                <td className="py-4 text-ink/75">{items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ——— Experience ——— */}
      <section className="mt-28" aria-labelledby="experience">
        <h2
          id="experience"
          className="mb-10 font-display text-4xl font-extrabold tracking-tight"
        >
          {t.about.serviceLog}
        </h2>
        <ol className="relative border-l-2 border-jungle">
          {[...jobs, ...schools].map((entry) => {
            const isJob = 'jobTitle' in entry
            return (
              <li
                key={entry._meta.path}
                className="relative mb-12 pl-8 last:mb-0"
              >
                <span
                  className={`absolute -left-[9px] top-1.5 h-4 w-4 border-2 border-jungle ${
                    entry.endDate ? 'bg-paper' : 'bg-mango'
                  }`}
                  aria-hidden="true"
                />
                <p className="spec text-ink/55">
                  <time dateTime={entry.startDate}>
                    {entry.startDate.slice(0, 4)}
                  </time>{' '}
                  →{' '}
                  {entry.endDate ? (
                    <time dateTime={entry.endDate}>
                      {entry.endDate.slice(0, 4)}
                    </time>
                  ) : (
                    <span className="text-fern">{t.about.present}</span>
                  )}
                  {!isJob && (
                    <span className="ml-3 text-mango">{t.about.education}</span>
                  )}
                </p>
                <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">
                  {isJob ? entry.jobTitle : entry.school}
                </h3>
                {isJob && (
                  <p className="text-ink/70">
                    {entry.company}
                    {entry.location ? ` · ${entry.location}` : ''}
                  </p>
                )}
                <p className="mt-3 max-w-2xl text-ink/80">{entry.summary}</p>
                <div
                  className="prose prose-sm mt-2 max-w-2xl text-ink/70"
                  dangerouslySetInnerHTML={{ __html: entry.html }}
                />
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label={t.about.skills}
                >
                  {entry.tags.map((tag) => (
                    <li key={tag} className="tag text-fern">
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ol>
      </section>
    </div>
  )
}
