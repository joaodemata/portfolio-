import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, AtSign } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { ContactForm } from '../components/ContactForm'
import { SectionHead } from '../components/SectionHead'
import { useT } from '../lib/i18n'
import { pageMeta, site, socials } from '../lib/site'

export const Route = createFileRoute('/contact')({
  component: Contact,
  head: () =>
    pageMeta(
      'Contact',
      'Talk about a backend, payments or automation role or project — or just say hi.',
    ),
})

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: AtSign,
} as const

function Contact() {
  const t = useT()
  const [titleStart, titleHl, titleEnd] = t.contact.title
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHead
        as="h1"
        n="04"
        kicker={t.nav.contact}
        title={
          <>
            {titleStart}
            <span className="hl">{titleHl}</span>
            {titleEnd}
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <section aria-labelledby="channels">
          <p className="max-w-lg text-xl text-ink/80">{t.contact.intro}</p>

          <div className="mt-8 inline-flex items-center gap-3 border-2 border-jungle bg-lagoon/20 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-fern" />
            <span className="spec">{t.availability}</span>
          </div>

          <h2 id="channels" className="spec mb-4 mt-14 text-ink/50">
            {t.contact.channels}
          </h2>
          <ul className="border-t-2 border-jungle">
            {socials.map((s, i) => {
              const Icon = icons[s.id]
              return (
                <li key={s.id} className="border-b-2 border-jungle">
                  <a
                    href={s.href}
                    target={s.id === 'email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 py-5 transition-colors hover:bg-jungle hover:px-4 hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mango"
                  >
                    <span className="spec w-8 text-ink/40 group-hover:text-mango">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-fern group-hover:text-lagoon"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-2xl font-extrabold tracking-tight">
                        {s.label}
                      </span>
                      <span className="spec block truncate text-[10px] text-ink/50 group-hover:text-paper/60">
                        {s.handle} — {t.contact.socialNotes[s.id]}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-mango"
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <dl className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <dt className="spec text-ink/50">{t.contact.base}</dt>
              <dd className="mt-1 text-lg">{t.location}</dd>
            </div>
            <div>
              <dt className="spec text-ink/50">{t.contact.timeZone}</dt>
              <dd className="mt-1 text-lg">{site.timeZone}</dd>
            </div>
          </dl>
        </section>

        <ContactForm />
      </div>
    </div>
  )
}
