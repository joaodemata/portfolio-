import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { site, socials } from '../lib/site'

export function SiteFooter() {
  return (
    <footer className="grid-dark relative overflow-hidden text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="spec mb-4 text-lagoon">§ End of document</p>
          <p className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
            Got a high-stakes,
            <br />
            <span className="text-mango">hard problem?</span>
          </p>
          <Link to="/contact" className="btn-mango mt-8">
            Open a ticket <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <div>
          <p className="spec mb-4 text-paper/50">Channels</p>
          <ul className="space-y-2">
            {socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target={s.id === 'email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg hover:text-mango"
                >
                  {s.label}
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="spec text-paper/50">Base of operations</p>
          <p className="text-lg">{site.location}</p>
          <p className="spec text-lagoon">{site.coordinates}</p>
          <p className="spec pt-6 text-paper/40">
            © {new Date().getFullYear()} {site.name}
            <br />
            Designed, built &amp; commissioned on site
          </p>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap px-4 pb-2 font-display text-[18vw] font-extrabold leading-[0.8] tracking-tighter text-paper/[0.04]"
      >
        BACKEND/PLC
      </p>
    </footer>
  )
}
