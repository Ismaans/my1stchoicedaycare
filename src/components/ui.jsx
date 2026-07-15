import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { asset, cta } from '../data/site'

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
    white: 'bg-white',
  }
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  )
}

// Standardized closing call-to-action band. Used identically across pages so
// every "closing CTA" section shares one headline + button style. The button
// copy is always "Contact Us" for consistency; only the headline/subtext vary.
export function CtaBand({ headline, subtext }) {
  return (
    <section className="grain relative overflow-hidden bg-maroon text-blush">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-maroon-deep/60 blur-3xl"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-5 py-16 text-center sm:px-8 lg:py-20">
        <h2 className="max-w-2xl text-3xl font-bold text-blush sm:text-4xl">{headline}</h2>
        {subtext && <p className="max-w-xl text-blush/85">{subtext}</p>}
        <Button to="/contact" variant="light">
          {cta.closing.button}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
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
