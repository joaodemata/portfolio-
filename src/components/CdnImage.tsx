import type { ImgHTMLAttributes } from 'react'
import { cdn, cdnPlaceholder, cdnSrcSet } from '../lib/images'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  src: string
  alt: string
  /** Fallback width used for `src` when srcset is unsupported. */
  baseWidth?: number
  widths?: readonly number[]
  priority?: boolean
}

/** An <img> that always goes through the Netlify Image CDN as WebP. */
export function CdnImage({
  src,
  alt,
  baseWidth = 1200,
  widths,
  sizes = '100vw',
  priority = false,
  style,
  ...rest
}: Props) {
  return (
    <img
      src={cdn(src, baseWidth)}
      srcSet={cdnSrcSet(src, widths)}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      style={{
        backgroundImage: cdnPlaceholder(src),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...style,
      }}
      {...rest}
    />
  )
}
