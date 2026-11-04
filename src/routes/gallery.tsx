import { createFileRoute } from '@tanstack/react-router'
import { CdnImage } from '../components/CdnImage'
import { SectionHead } from '../components/SectionHead'
import { gallery } from '../lib/gallery'
import { useLocale, useT } from '../lib/i18n'
import { pageMeta } from '../lib/site'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
  head: () =>
    pageMeta(
      'Field log',
      'Photos from the field — generator commissioning, control engineering and the milestones in between.',
    ),
})

function Gallery() {
  const { locale } = useLocale()
  const t = useT()
  const [titleStart, titleHl, titleEnd] = t.gallery.title

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHead
        as="h1"
        n="02"
        kicker={t.gallery.kicker}
        title={
          <>
            {titleStart}
            <span className="hl">{titleHl}</span>
            {titleEnd}
          </>
        }
      />
      <p className="-mt-4 mb-16 max-w-2xl text-xl text-ink/75">
        {t.gallery.intro}
      </p>

      <ol className="space-y-24">
        {gallery.map((item, i) => (
          <li
            key={item.id}
            id={item.id}
            className={`grid scroll-mt-32 items-center gap-10 lg:grid-cols-[minmax(0,420px)_1fr] ${
              i % 2
                ? 'lg:grid-cols-[1fr_minmax(0,420px)] lg:[&>*:first-child]:order-2'
                : ''
            }`}
          >
            <figure className="ticks text-jungle">
              <CdnImage
                src={item.src}
                alt={item.alt[locale]}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 420px, 100vw"
                widths={[420, 640, 800]}
                baseWidth={800}
                className="h-auto w-full border-2 border-jungle"
              />
            </figure>
            <div>
              <p className="spec text-mango">
                FIG. {String(i + 1).padStart(2, '0')} · {item.tag[locale]}
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">
                {item.title[locale]}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
                {item.story[locale]}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
