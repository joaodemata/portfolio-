export function sortProjects<T extends { order: number; title: string }>(
  projects: readonly T[],
) {
  return [...projects].sort(
    (a, b) => a.order - b.order || a.title.localeCompare(b.title),
  )
}
