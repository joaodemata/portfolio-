/** Blueprint-style cover for projects that have no photograph. */
export function ProjectPlaceholder({
  code,
  title,
  className = '',
}: {
  code?: string
  title: string
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`grid-dark flex flex-col justify-end bg-jungle p-6 text-paper ${className}`}
    >
      <span className="font-mono text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-none text-mango">
        {code}
      </span>
      <span className="spec mt-3 text-lagoon">{title}</span>
    </div>
  )
}
