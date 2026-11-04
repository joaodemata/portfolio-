import type { ReactNode } from 'react'

export function SectionHead({
  n,
  kicker,
  title,
  action,
  as: Heading = 'h2',
}: {
  n: string
  kicker: string
  title: ReactNode
  action?: ReactNode
  as?: 'h1' | 'h2'
}) {
  return (
    <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="spec mb-4 flex items-center gap-3 text-fern">
          <span className="bg-jungle px-1.5 py-0.5 text-mango">§ {n}</span>
          {kicker}
          <span className="hidden h-px w-24 bg-jungle/30 sm:block" />
        </p>
        <Heading className="max-w-3xl font-display text-[clamp(2.25rem,5vw,4.25rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
          {title}
        </Heading>
      </div>
      {action}
    </div>
  )
}
