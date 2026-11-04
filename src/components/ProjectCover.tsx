import { CdnImage } from './CdnImage'

type Project = {
  title: string
  code?: string
  role?: string
  image?: string
  imageAlt?: string
}

/**
 * A project's cover: its photo, its logo (SVG, shown whole on paper), or a
 * blueprint panel with the project code when there is no image at all.
 */
export function ProjectCover({
  project,
  sizes,
  className = '',
  hoverZoom = false,
}: {
  project: Project
  sizes: string
  className?: string
  hoverZoom?: boolean
}) {
  const zoom = hoverZoom
    ? 'transition-transform duration-700 group-hover:scale-[1.04]'
    : ''

  if (!project.image)
    return (
      <div
        aria-hidden="true"
        className={`grid-dark flex flex-col justify-end bg-jungle p-6 text-paper ${className}`}
      >
        <span className="font-mono text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-none text-mango">
          {project.code}
        </span>
        <span className="spec mt-3 text-lagoon">
          {project.role ?? project.title}
        </span>
      </div>
    )

  if (project.image.endsWith('.svg'))
    return (
      <div
        className={`grid-paper grid place-items-center bg-paper p-10 ${className}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt ?? project.title}
          className={`h-auto max-h-32 w-full max-w-md object-contain ${zoom}`}
        />
      </div>
    )

  return (
    <CdnImage
      src={project.image}
      alt={project.imageAlt ?? project.title}
      sizes={sizes}
      className={`object-cover ${zoom} ${className}`}
    />
  )
}
