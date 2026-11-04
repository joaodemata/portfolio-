import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, AtSign } from 'lucide-react'
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from '../components/BrandIcons'
import { ContactForm } from '../components/ContactForm'
import { SectionHead } from '../components/SectionHead'
import { pageMeta, site, socials } from '../lib/site'

export const Route = createFileRoute('/contact')({
  component: Contact,
  head: () =>
    pageMeta(
      'Contact',
      'Start a field project, ask a question, or just say hi from the tropics.',
    ),
})

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  email: AtSign,
} as const

function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHead
        as="h1"
        n="04"
        kicker="Contact"
        title={
          <>
            Send a signal. I’ll <span className="hl">radio back</span>.
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <section aria-labelledby="channels">
          <p className="max-w-lg text-xl text-ink/80">
            Tell me about the site, the problem and how much rain it gets. I
            take on a handful of field projects each year — sensors, solar
            structures, or the software that ties them together.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 border-2 border-jungle bg-lagoon/20 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-fern" />
            <span className="spec">{site.availability}</span>
          </div>

          <h2 id="channels" className="spec mb-4 mt-14 text-ink/50">
            Other frequencies
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
                        {s.handle} — {s.note}
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
              <dt className="spec text-ink/50">Base</dt>
              <dd className="mt-1 text-lg">{site.location}</dd>
            </div>
            <div>
              <dt className="spec text-ink/50">Time zone</dt>
              <dd className="mt-1 text-lg">UTC −06:00</dd>
            </div>
          </dl>
        </section>

        <ContactForm />
      </div>
    </div>
  )
}
