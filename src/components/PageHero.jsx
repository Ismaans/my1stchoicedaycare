import { Eyebrow } from './ui'

// Consistent page header for the inner pages.
export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="grain relative overflow-hidden border-b border-sand/70 bg-mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-cream/60 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        {eyebrow && <Eyebrow className="reveal">{eyebrow}</Eyebrow>}
        <h1
          className="reveal mt-3 max-w-3xl text-4xl font-bold leading-[1.08] text-ink sm:text-5xl"
          style={{ animationDelay: '60ms' }}
        >
          {title}
        </h1>
        {intro && (
          <p
            className="reveal mt-5 max-w-2xl text-lg text-ink/80"
            style={{ animationDelay: '140ms' }}
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  )
}
