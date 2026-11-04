import { Link } from '@tanstack/react-router'
import { useT } from '../lib/i18n'

export function NotFoundPage() {
  const t = useT()
  return (
    <div className="mx-auto max-w-4xl px-4 py-28 sm:px-6">
      <p className="spec mb-4 text-mango">{t.notFound.kicker}</p>
      <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-extrabold leading-[0.88] tracking-[-0.04em]">
        {t.notFound.title}
      </h1>
      <p className="mt-6 max-w-lg text-xl text-ink/70">{t.notFound.text}</p>
      <Link to="/" className="btn-mango mt-10">
        {t.notFound.back}
      </Link>
    </div>
  )
}
