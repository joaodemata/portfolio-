/**
 * Netlify Image CDN helpers. Every raster image on the site is served through
 * /.netlify/images so visitors get resized WebP instead of full-size originals.
 * SVGs are already resolution-independent and are served as-is.
 */
const passthrough = (src: string) =>
  !src.startsWith('/') || src.endsWith('.svg')

export function cdn(src: string, width: number, quality = 72) {
  if (passthrough(src)) return src
  return `/.netlify/images?url=${src}&w=${width}&fm=webp&q=${quality}`
}

export function cdnSrcSet(
  src: string,
  widths: readonly number[] = [480, 800, 1200, 1600],
) {
  if (passthrough(src)) return undefined
  return widths.map((w) => `${cdn(src, w)} ${w}w`).join(', ')
}

/** Tiny blurred preview used as a background while the real image loads. */
export function cdnPlaceholder(src: string) {
  if (passthrough(src)) return undefined
  return `url("/.netlify/images?url=${src}&w=24&fm=webp&q=30")`
}
