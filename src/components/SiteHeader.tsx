import { Link } from '@tanstack/react-router'
import { locales, useLocale, useT } from '../lib/i18n'
import { site } from '../lib/site'

const links = [
  { to: '/', key: 'index', n: '00' },
  { to: '/projects', key: 'work', n: '01' },
  { to: '/gallery', key: 'gallery', n: '02' },
  { to: '/about', key: 'about', n: '03' },
  { to: '/contact', key: 'contact', n: '04' },
] as const

export function SiteHeader() {
  const { locale, setLocale } = useLocale()
  const t = useT()
  const [status, ...readings] = t.telemetry
  const telemetry = [status, `LOC ${site.coordinates}`, ...readings]
  // Pinned only from md up: on phones the wrapped nav is ~190px tall.
  return (
    <header className="relative z-40 bg-jungle text-paper md:sticky md:top-0">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mango"
        >
          <span className="grid h-10 w-10 place-items-center border-2 border-mango font-mono text-sm font-bold text-mango transition-colors group-hover:bg-mango group-hover:text-jungle">
            {site.shortName}
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-extrabold tracking-tight">
              {site.name}
            </span>
            <span className="spec block text-paper/55">{t.nav.subtitle}</span>
          </span>
        </Link>
        <nav
          aria-label={t.nav.label}
          className="flex flex-wrap items-center gap-1"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === '/' }}
              activeProps={{ className: '!bg-mango !text-jungle' }}
              className="spec flex items-baseline gap-1.5 px-3 py-2 text-paper/80 transition-colors hover:bg-paper/10 hover:text-paper focus-visible:outline-2 focus-visible:outline-mango"
            >
              <span className="text-[9px] opacity-60">{link.n}</span>
              {t.nav[link.key]}
            </Link>
          ))}
          <div
            role="group"
            aria-label={t.nav.language}
            className="ml-2 flex border border-paper/30"
          >
            {locales.map((l) => (
              <button
                key={l}
                type="button"
                lang={l}
                aria-pressed={locale === l}
                onClick={() => setLocale(l)}
                className={`spec px-2.5 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-mango ${
                  locale === l
                    ? 'bg-paper text-jungle'
                    : 'text-paper/70 hover:bg-paper/10 hover:text-paper'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </div>
      <div
        className="overflow-hidden border-y border-paper/10 bg-canopy py-1.5"
        aria-hidden="true"
      >
        <div className="marquee flex w-max gap-10 whitespace-nowrap">
          {[...telemetry, ...telemetry].map((item, i) => (
            <span key={i} className="spec text-[10px] text-lagoon/90">
              {item}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
