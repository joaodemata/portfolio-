import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { CdnImage } from '../components/CdnImage'
import { SectionHead } from '../components/SectionHead'
import {
  gallery,
  galleryCategories,
  type GalleryCategory,
} from '../lib/gallery'
import { pageMeta } from '../lib/site'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
  head: () =>
    pageMeta(
      'Gallery',
      'Field photographs from research stations, reefs, rainforests and workbenches.',
    ),
})

type Filter = 'All' | GalleryCategory

function Gallery() {
  const [filter, setFilter] = useState<Filter>('All')
  const [open, setOpen] = useState<number | null>(null)

  const items = useMemo(
    () =>
      filter === 'All' ? gallery : gallery.filter((g) => g.category === filter),
    [filter],
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHead
        as="h1"
        n="02"
        kicker="Field gallery"
        title={
          <>
            Photographs, taken between <span className="hl">soldering</span>{' '}
            and swimming.
          </>
        }
      />

      <div
        role="toolbar"
        aria-label="Filter photographs"
        className="mb-10 flex flex-wrap items-center gap-2 border-b-2 border-jungle pb-4"
      >
        <span className="spec mr-2 text-ink/50">Filter /</span>
        {(['All', ...galleryCategories] as Filter[]).map((c) => {
          const count =
            c === 'All'
              ? gallery.length
              : gallery.filter((g) => g.category === c).length
          const active = filter === c
          return (
            <button
              key={c}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(c)}
              className={`spec border-2 px-3 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mango ${
                active
                  ? 'border-jungle bg-jungle text-mango'
                  : 'border-jungle/25 hover:border-jungle'
              }`}
            >
              {c} <span className="opacity-50">[{count}]</span>
            </button>
          )
        })}
        <span className="spec ml-auto hidden text-ink/40 sm:inline">
          Served as WebP via Image CDN
        </span>
      </div>

      <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <li key={item.id} className="mb-5 break-inside-avoid">
            <figure className="group">
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="relative block w-full overflow-hidden border-2 border-jungle focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mango"
                aria-label={`Open ${item.title} full size`}
              >
                <CdnImage
                  src={item.src}
                  alt={item.caption}
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  widths={[400, 600, 800, 1200]}
                  baseWidth={800}
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute right-2 top-2 grid h-8 w-8 place-items-center bg-paper/90 text-jungle opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                  <Maximize2 size={14} aria-hidden="true" />
                </span>
                <span className="spec absolute left-0 top-0 bg-jungle px-2 py-1 text-[9px] text-lagoon">
                  {item.category}
                </span>
              </button>
              <figcaption className="mt-3 flex items-start justify-between gap-4">
                <span>
                  <span className="spec block text-[10px] text-mango">
                    FIG. {String(gallery.indexOf(item) + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-lg font-bold leading-tight">
                    {item.title}
                  </span>
                </span>
                <span className="spec shrink-0 pt-0.5 text-[9px] text-ink/45">
                  {item.coords}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {open !== null && (
        <Lightbox
          items={items}
          index={open}
          onIndex={setOpen}
          onClose={() => setOpen(null)}
        />
      )}
    </div>
  )
}

function Lightbox({
  items,
  index,
  onIndex,
  onClose,
}: {
  items: typeof gallery
  index: number
  onIndex: (i: number) => void
  onClose: () => void
}) {
  const item = items[index]
  const closeRef = useRef<HTMLButtonElement>(null)
  const step = useCallback(
    (d: number) => onIndex((index + d + items.length) % items.length),
    [index, items.length, onIndex],
  )

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
      previous?.focus()
    }
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, step])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="grid-dark fixed inset-0 z-50 flex flex-col text-paper"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="flex items-center justify-between border-b border-paper/15 px-4 py-3">
        <p className="spec text-lagoon">
          {String(index + 1).padStart(2, '0')} /{' '}
          {String(items.length).padStart(2, '0')} · {item.category}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="spec flex items-center gap-2 border border-paper/30 px-3 py-1.5 hover:bg-paper hover:text-jungle focus-visible:outline-2 focus-visible:outline-mango"
        >
          Close <X size={14} aria-hidden="true" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center p-4 sm:p-10"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <CdnImage
          key={item.id}
          src={item.src}
          alt={item.caption}
          width={item.width}
          height={item.height}
          priority
          sizes="90vw"
          widths={[800, 1200, 1600, 2000]}
          baseWidth={1600}
          className="rise max-h-full w-auto max-w-full border-2 border-paper/20 object-contain"
        />
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous photograph"
          className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-mango text-jungle hover:bg-paper focus-visible:outline-2 focus-visible:outline-paper sm:left-6"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next photograph"
          className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-mango text-jungle hover:bg-paper focus-visible:outline-2 focus-visible:outline-paper sm:right-6"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4 border-t border-paper/15 px-4 py-4 sm:px-6">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight">
            {item.title}
          </p>
          <p className="text-paper/70">{item.caption}</p>
        </div>
        <p className="spec text-paper/50">
          {item.coords} · {item.width}×{item.height}
        </p>
      </div>
    </div>
  )
}
