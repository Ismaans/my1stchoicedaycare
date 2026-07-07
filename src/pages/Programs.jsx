import PageHero from '../components/PageHero'
import { Button, Eyebrow, Section, CtaBand } from '../components/ui'
import {
  Baby,
  Blocks,
  Pencil,
  Backpack,
  Users,
  Sun,
  Clock,
  Check,
  FlaskConical,
  Palette,
} from 'lucide-react'
import { asset } from '../data/site'

const ageGroups = [
  {
    icon: Baby,
    name: 'Infants',
    age: '0–11 months',
    text: 'Gentle, responsive care that follows your baby’s own rhythm — feeding, sleeping, and plenty of one-on-one bonding.',
  },
  {
    icon: Blocks,
    name: 'Toddlers',
    age: '1–3 years',
    text: 'Safe space to move, explore, and build early language, motor skills, and confident independence.',
  },
  {
    icon: Pencil,
    name: 'Preschool',
    age: '4–5 years',
    text: 'School-readiness through early literacy, numbers, and social skills — all guided by a structured curriculum.',
  },
  {
    icon: Backpack,
    name: 'School-age',
    age: '6–11 years',
    text: 'Before/after-school support, homework help, and enriching activities in a calm, supervised setting.',
  },
]

const careOptions = [
  'Full-time (5 days/week)',
  'Part-time (1–4 days/week)',
  'Drop-in care',
  'Full-day care',
  'Half-day (morning or afternoon)',
  'Before & after school care',
  'Summer care',
  'Emergency backup care',
]

// Two clearly distinct curricula. "emphasizes" lists are drawn only from the
// existing descriptive copy — no new claims.
const curriculum = [
  {
    icon: FlaskConical,
    name: 'STREAMin3',
    tagline: 'Structured, connected learning',
    text: 'A research-based early learning curriculum that weaves together Science, Technology, Reading, Engineering, Arts, and Math with social-emotional skills. In plain terms: children learn through hands-on, connected activities that build both knowledge and the confidence to use it.',
    emphasizes: [
      'Science, Technology & Engineering',
      'Reading, Arts & Math',
      'Social-emotional skills',
      'Confidence to apply what they learn',
    ],
  },
  {
    icon: Palette,
    name: 'Learning Beyond Paper',
    tagline: 'Active, play-focused learning',
    text: 'A play-focused curriculum designed to make learning active and engaging rather than worksheet-driven. It gives each day purpose and structure while keeping learning joyful, age-appropriate, and rooted in real exploration.',
    emphasizes: [
      'Active, hands-on play',
      'Real exploration over worksheets',
      'Purposeful daily structure',
      'Joyful, age-appropriate growth',
    ],
  },
]

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Care and learning for every age and stage"
        intro="From a baby's very first months to the busy school-age years, we offer flexible, attentive care built around a research-based curriculum — and around your family's schedule."
      />

      {/* --------------------------------------------------- AGE GROUPS */}
      <Section tone="cream" className="py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Ages served</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Infants through school-age, all welcome
          </h2>
          <p className="mt-5 text-ink/80">
            Care is tailored to each stage of development, so children get exactly what they need —
            whether that's a nap on schedule or help with first-grade reading.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ageGroups.map((g) => (
            <article
              key={g.name}
              className="flex flex-col rounded-[14px] border border-sand bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-32px_rgba(44,64,71,0.55)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-mist text-maroon">
                <g.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">{g.name}</h3>
              <p className="text-sm font-medium uppercase tracking-wide text-maroon">{g.age}</p>
              <p className="mt-3 flex-1 text-sm text-ink/75">{g.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 rounded-[12px] border border-sand bg-mist/40 px-6 py-5">
          <Users className="h-6 w-6 shrink-0 text-maroon" strokeWidth={1.75} />
          <p className="text-ink/85">
            <strong className="font-semibold text-ink">Twins and multiples are welcome.</strong>{' '}
            We're happy to care for siblings together.
          </p>
        </div>
      </Section>

      {/* ------------------- CARE OPTIONS (full-bleed image + scrim) ------ */}
      <section className="relative overflow-hidden">
        {/* Background image with dark scrim; bg-ink is the flat-color fallback. */}
        <div aria-hidden="true" className="absolute inset-0 bg-ink">
          <img
            src={asset('/photos/play-area.png')}
            alt=""
            className="h-full w-full object-cover opacity-45"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/60" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-blush">
              Care options
            </span>
            <h2 className="mt-3 text-3xl font-bold text-cream sm:text-4xl">
              Flexible schedules that fit real life
            </h2>
            <p className="mt-5 text-cream/85">
              Work schedules change, and so do family needs. We offer a range of options — from
              full-time enrollment to occasional drop-in and emergency backup care.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-cream/80">
              <span className="inline-flex items-center gap-2">
                <Sun className="h-5 w-5 text-blush" strokeWidth={1.75} /> Summer care available
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-5 w-5 text-blush" strokeWidth={1.75} /> Before &amp; after school
              </span>
            </div>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {careOptions.map((opt) => (
              <li
                key={opt}
                className="flex items-center gap-3 rounded-[12px] border border-cream/20 bg-cream/10 px-4 py-4 text-cream backdrop-blur-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blush/20 text-blush">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-[0.95rem] font-medium">{opt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------- CURRICULUM (comparison layout) ------ */}
      <Section tone="cream" className="py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Curriculum</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Two approaches, one goal</h2>
          <p className="mt-5 text-ink/80">
            We follow two trusted early-childhood curricula that complement each other — one brings
            structured, connected learning; the other keeps every day active and play-focused.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[16px] border border-sand md:grid-cols-2">
          {curriculum.map((c, i) => (
            <article
              key={c.name}
              className={`bg-cream p-8 lg:p-10 ${
                i === 0 ? 'border-b border-sand md:border-b-0 md:border-r' : ''
              }`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-maroon text-blush">
                <c.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-maroon">
                {c.tagline}
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold text-ink">{c.name}</h3>
              <p className="mt-3 text-ink/80">{c.text}</p>

              <p className="mt-6 text-sm font-semibold text-ink">What it emphasizes</p>
              <ul className="mt-3 space-y-2.5">
                {c.emphasizes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/85">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[0.95rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* ----------------------------------------------------- CTA */}
      <CtaBand
        headline="Wondering what's available for your child?"
        subtext="Spaces and schedules vary by age group. Reach out and we'll walk you through current availability."
      />
    </>
  )
}
