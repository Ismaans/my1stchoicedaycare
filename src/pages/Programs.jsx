import PageHero from '../components/PageHero'
import { Button, Eyebrow, Section } from '../components/ui'
import { Heart, Sprout, Book, Cap, Users, Arrow, Sun, Clock } from '../components/icons'

const ageGroups = [
  {
    icon: Heart,
    name: 'Infants',
    age: '0–11 months',
    text: 'Gentle, responsive care that follows your baby’s own rhythm — feeding, sleeping, and plenty of one-on-one bonding.',
  },
  {
    icon: Sprout,
    name: 'Toddlers',
    age: '1–3 years',
    text: 'Safe space to move, explore, and build early language, motor skills, and confident independence.',
  },
  {
    icon: Book,
    name: 'Preschool',
    age: '4–5 years',
    text: 'School-readiness through early literacy, numbers, and social skills — all guided by a structured curriculum.',
  },
  {
    icon: Cap,
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

const curriculum = [
  {
    name: 'STREAMin3',
    text: 'A research-based early learning curriculum that weaves together Science, Technology, Reading, Engineering, Arts, and Math with social-emotional skills. In plain terms: children learn through hands-on, connected activities that build both knowledge and the confidence to use it.',
  },
  {
    name: 'Learning Beyond Paper',
    text: 'A play-focused curriculum designed to make learning active and engaging rather than worksheet-driven. It gives each day purpose and structure while keeping learning joyful, age-appropriate, and rooted in real exploration.',
  },
]

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Thoughtful care for every age and schedule"
        intro="From a baby's very first months to the busy school-age years, we offer flexible, attentive care built around a real curriculum — and around your family's needs."
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
                <g.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">{g.name}</h3>
              <p className="text-sm font-medium uppercase tracking-wide text-maroon">{g.age}</p>
              <p className="mt-3 flex-1 text-sm text-ink/75">{g.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 rounded-[12px] border border-sand bg-mist/40 px-6 py-5">
          <Users className="h-6 w-6 shrink-0 text-maroon" />
          <p className="text-ink/85">
            <strong className="font-semibold text-ink">Twins and multiples are welcome.</strong> We're
            happy to care for siblings together.
          </p>
        </div>
      </Section>

      {/* ------------------------------------------------- CARE OPTIONS */}
      <Section tone="mist" className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow>Care options</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Flexible schedules that fit real life
            </h2>
            <p className="mt-5 text-ink/80">
              Work schedules change, and so do family needs. We offer a range of options — from
              full-time enrollment to occasional drop-in and emergency backup care.
            </p>
            <div className="mt-7 flex flex-wrap gap-4 text-sm text-ink/70">
              <span className="inline-flex items-center gap-2">
                <Sun className="h-5 w-5 text-maroon" /> Summer care available
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-5 w-5 text-maroon" /> Before &amp; after school
              </span>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {careOptions.map((opt) => (
              <li
                key={opt}
                className="flex items-center gap-3 rounded-[12px] border border-sand bg-cream px-5 py-4 text-ink/85"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4 10-10" />
                  </svg>
                </span>
                <span className="text-[0.97rem] font-medium">{opt}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* -------------------------------------------------- CURRICULUM */}
      <Section tone="cream" className="py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Curriculum</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Real learning, made joyful
          </h2>
          <p className="mt-5 text-ink/80">
            We follow two trusted early-childhood curricula. Together, they give every day structure
            and purpose while keeping learning hands-on and fun.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {curriculum.map((c) => (
            <article
              key={c.name}
              className="rounded-[14px] border border-sand bg-mist/30 p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-maroon text-blush">
                <Book className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-maroon">{c.name}</h3>
              <p className="mt-3 text-ink/80">{c.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ----------------------------------------------------- CTA */}
      <Section tone="maroon" className="py-16 lg:py-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-2xl font-bold text-blush sm:text-3xl">
            Wondering what's available for your child?
          </h2>
          <p className="max-w-xl text-blush/85">
            Spaces and schedules vary by age group. Reach out and we'll walk you through current
            availability.
          </p>
          <Button to="/contact" variant="light">
            Contact us to learn more about availability
            <Arrow className="h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  )
}
