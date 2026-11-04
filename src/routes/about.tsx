import { createFileRoute, Link } from '@tanstack/react-router'
import { allEducations, allJobs } from 'content-collections'
import { ArrowRight } from 'lucide-react'
import { CdnImage } from '../components/CdnImage'
import { SectionHead } from '../components/SectionHead'
import { chronologicalEntries, formatDate } from '../lib/chronology'
import { pageMeta, site } from '../lib/site'

export const Route = createFileRoute('/about')({
  component: About,
  head: () =>
    pageMeta(
      'About',
      'Who I am, how I work, and where I have worked — a field engineer in the tropics.',
    ),
})

const principles = [
  {
    k: 'P-01',
    title: 'Design for the worst week',
    text: 'Monsoon, brownout, no boat for nine days. If it survives that, the average week takes care of itself.',
  },
  {
    k: 'P-02',
    title: 'Repairable beats clever',
    text: 'Every part should be swappable with a screwdriver and whatever the local hardware store stocks.',
  },
  {
    k: 'P-03',
    title: 'Measure, then argue',
    text: 'A cheap sensor in the field beats an expensive model on a laptop. Data settles debates.',
  },
  {
    k: 'P-04',
    title: 'Build with the people who stay',
    text: 'The best installations are maintained by the community that uses them, not by me.',
  },
]

const toolkit = [
  ['Hardware', 'KiCad · STM32 · ESP32 · LoRaWAN · conformal coating'],
  ['Structures', 'Fusion 360 · bamboo joinery · FEA · wind loading'],
  ['Software', 'TypeScript · React · Rust · Python · PostgreSQL'],
  ['Field kit', 'Multimeter · drone · dive cert · machete (for the vines)'],
]

function About() {
  const jobs = chronologicalEntries(allJobs)
  const schools = chronologicalEntries(allEducations)
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHead
        as="h1"
        n="03"
        kicker="About the engineer"
        title={
          <>
            Half lab, half <span className="hl">jungle</span>.
          </>
        }
      />

      {/* ——— Intro ——— */}
      <section className="grid gap-12 lg:grid-cols-[minmax(0,420px)_1fr]">
        <figure className="ticks relative text-jungle">
          <CdnImage
            src="/img/about.jpg"
            alt="An engineer in a wide-brimmed hat overlooking a misty jungle valley"
            width={928}
            height={1152}
            sizes="(min-width: 1024px) 420px, 100vw"
            widths={[420, 640, 840]}
            baseWidth={840}
            priority
            className="h-auto w-full border-2 border-jungle"
          />
          <figcaption className="spec mt-3 flex justify-between text-ink/50">
            <span>Self-portrait, ridge line</span>
            <span>{site.coordinates}</span>
          </figcaption>
          <div className="sway absolute -right-6 -top-8 hidden select-none text-7xl lg:block" aria-hidden="true">
            🌴
          </div>
        </figure>

        <div className="space-y-6 text-xl leading-relaxed text-ink/85">
          <p className="font-display text-3xl font-bold leading-snug tracking-tight text-ink">
            I’m {site.name.split(' ')[0]} — an electrical engineer who swapped
            the server room for the rainforest.
          </p>
          <p>
            For eight years I’ve built things that live outdoors in the
            tropics: water-quality sensors in mangroves, solar canopies over
            fruit markets, and offline-first dashboards for research boats that
            spend weeks out of signal.
          </p>
          <p>
            My work sits where hardware, light structures and software overlap.
            I sketch on paper, prototype on a beach-hut bench, and test where it
            matters — in the salt, sun and humidity the thing will actually
            face.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/contact" className="btn-mango">
              Work with me <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/projects" className="btn-ghost">
              See projects
            </Link>
          </div>
        </div>
      </section>

      {/* ——— Principles ——— */}
      <section className="mt-28" aria-labelledby="principles">
        <div className="dim mb-8 text-ink/60">
          <span id="principles">Operating parameters</span>
        </div>
        <ol className="grid gap-px border-2 border-jungle bg-jungle sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <li key={p.k} className="bg-paper p-6">
              <p className="spec text-mango">{p.k}</p>
              <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-ink/70">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ——— Toolkit ——— */}
      <section className="mt-28 grid gap-10 lg:grid-cols-[1fr_2fr]" aria-labelledby="toolkit">
        <h2
          id="toolkit"
          className="font-display text-4xl font-extrabold tracking-tight"
        >
          Bill of materials
        </h2>
        <table className="w-full border-collapse font-mono text-sm">
          <thead>
            <tr className="spec border-b-2 border-jungle text-left text-ink/50">
              <th className="py-2 pr-4 font-normal">Item</th>
              <th className="py-2 pr-4 font-normal">Category</th>
              <th className="py-2 font-normal">Components</th>
            </tr>
          </thead>
          <tbody>
            {toolkit.map(([cat, items], i) => (
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
          Service log
        </h2>
        <ol className="relative border-l-2 border-jungle">
          {[...jobs, ...schools].map((entry) => {
            const isJob = 'jobTitle' in entry
            return (
              <li key={entry._meta.path} className="relative mb-12 pl-8 last:mb-0">
                <span
                  className={`absolute -left-[9px] top-1.5 h-4 w-4 border-2 border-jungle ${
                    entry.endDate ? 'bg-paper' : 'bg-mango'
                  }`}
                  aria-hidden="true"
                />
                <p className="spec text-ink/55">
                  <time dateTime={entry.startDate}>
                    {formatDate(entry.startDate)}
                  </time>{' '}
                  →{' '}
                  {entry.endDate ? (
                    <time dateTime={entry.endDate}>
                      {formatDate(entry.endDate)}
                    </time>
                  ) : (
                    <span className="text-fern">Present</span>
                  )}
                  {!isJob && <span className="ml-3 text-mango">Education</span>}
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
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
                  {entry.tags.map((t) => (
                    <li key={t} className="tag text-fern">
                      {t}
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
