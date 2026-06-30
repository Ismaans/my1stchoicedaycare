import { Link } from 'react-router-dom'
import { asset } from '../data/site'

// Shared, lightweight primitives so every page stays visually consistent.

const baseButton =
  'inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-[0.95rem] font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'

export function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const styles = {
    primary:
      'bg-maroon text-blush shadow-[0_8px_24px_-12px_rgba(124,42,53,0.7)] hover:bg-maroon-deep hover:-translate-y-0.5',
    outline:
      'border border-maroon/40 text-maroon bg-transparent hover:bg-maroon hover:text-blush hover:border-maroon',
    light:
      'bg-cream text-maroon hover:bg-blush hover:-translate-y-0.5 shadow-[0_8px_24px_-14px_rgba(0,0,0,0.4)]',
  }
  const cls = `${baseButton} ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={cls} {...props}>
      {children}
    </a>
  )
}

export function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-[0.22em] text-maroon ${className}`}
    >
      {children}
    </span>
  )
}

// A full-bleed section wrapper with optional alternating background tones.
export function Section({ tone = 'cream', className = '', children, id }) {
  const tones = {
    cream: 'bg-cream',
    mist: 'bg-mist',
    maroon: 'bg-maroon text-blush',
    sand: 'bg-sand/30',
  }
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  )
}

// Photo block. Pass a real `src` path; falls back to a placeholder when omitted.
export function Photo({ ratio = '4 / 3', src, label, className = '', alt }) {
  const imgSrc = src
    ? asset(src)
    : `https://placehold.co/1200x900/cbd7dd/2c4047?text=${encodeURIComponent(label || 'Photo')}`
  return (
    <figure
      className={`group relative overflow-hidden rounded-[12px] border border-sand bg-mist ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <img
        src={imgSrc}
        alt={alt || label || 'Photo of the daycare space'}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </figure>
  )
}
