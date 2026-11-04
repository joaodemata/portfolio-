import { Link } from '@tanstack/react-router'
import { site } from '../lib/site'

const links = [
  { to: '/', label: 'Index', n: '00' },
  { to: '/projects', label: 'Work', n: '01' },
  { to: '/gallery', label: 'Gallery', n: '02' },
  { to: '/about', label: 'About', n: '03' },
  { to: '/contact', label: 'Contact', n: '04' },
] as const

const telemetry = [
  'STATUS ● OPEN TO WORK',
  `LOC ${site.coordinates}`,
  'STACK NODE.JS · GO · TYPESCRIPT',
  'DB POSTGRESQL · MONGODB',
  'PROTO REST · SOAP · WEBSOCKETS',
  'PLC STUDIO 5000 · TIA PORTAL',
  'OEM JLR · VOLVO',
  'LANG ES · PT · EN',
  'COFFEE 3 / ∞',
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-jungle text-paper">
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
            <span className="spec block text-paper/55">
              Backend · Automation · rev 26.11
            </span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === '/' }}
              activeProps={{ className: '!bg-mango !text-jungle' }}
              className="spec flex items-baseline gap-1.5 px-3 py-2 text-paper/80 transition-colors hover:bg-paper/10 hover:text-paper focus-visible:outline-2 focus-visible:outline-mango"
            >
              <span className="text-[9px] opacity-60">{link.n}</span>
              {link.label}
            </Link>
          ))}
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
