import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-28 sm:px-6">
      <p className="spec mb-4 text-mango">Error 404 · Signal lost</p>
      <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-extrabold leading-[0.88] tracking-[-0.04em]">
        Off the map.
      </h1>
      <p className="mt-6 max-w-lg text-xl text-ink/70">
        This page drifted out past the reef. Head back to base and try another
        heading.
      </p>
      <Link to="/" className="btn-mango mt-10">
        Return to base
      </Link>
    </div>
  )
}
