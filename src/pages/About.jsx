import PageHero from '../components/PageHero'
import { Button, Eyebrow, Section } from '../components/ui'
import { ShieldCheck, Cross, Book, Heart, Cap, Arrow, Sprout } from '../components/icons'
import { business } from '../data/site'

const credentials = [
  {
    icon: Cap,
    title: "Bachelor's Degree",
    text: 'In Psychology and Islamic History — a foundation in how children think, feel, and learn.',
  },
  {
    icon: Book,
    title: 'CDA Credential',
    text: 'Holds a nationally recognized Child Development Associate (CDA) credential.',
  },
  {
    icon: Sprout,
    title: 'VQB5 Participant',
    text: "Participates in Virginia's Quality Birth to Five (VQB5) measurement and improvement system.",
  },
  {
    icon: Heart,
    title: 'Mother of Four',
    text: 'Brings real, everyday parenting experience and genuine warmth to her care.',
  },
]

const philosophyPoints = [
  {
    title: 'Safe & nurturing first',
    text: 'A calm, secure environment where every child feels loved, settled, and confident enough to explore.',
  },
  {
    title: 'Play-based, with structure',
    text: 'Hands-on play is paired with an intentional daily rhythm so learning feels natural, not forced.',
  },
  {
    title: 'Research-based curriculum',
    text: 'We use STREAMin3 and Learning Beyond Paper to guide meaningful, age-appropriate growth.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Caring leadership you can trust"
        intro="My 1st Choice Family Daycare is a single-home program led, day in and day out, by its owner. That means consistency, accountability, and a familiar face your child can count on."
      />

      {/* ----------------------------------------------------- OWNER BIO */}
      <Section tone="cream" className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <div>
            <Eyebrow>Owner &amp; Lead Caregiver</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Meet Farrah Deeba</h2>
            <p className="mt-5 text-ink/80">
              Farrah Deeba is the heart of My 1st Choice Family Daycare. A mother of four, she
              understands firsthand what families look for when choosing care: safety, warmth, and
              someone who treats their child as an individual.
            </p>
            <p className="mt-4 text-ink/80">
              She holds a Bachelor's degree in Psychology and Islamic History, and a Child
              Development Associate (CDA) credential — a nationally recognized standard in early
              childhood education. She also participates in Virginia's Quality Birth to Five (VQB5)
              program, a statewide effort to measure and continually improve the quality of early
              learning.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {credentials.map((c) => (
                <div
                  key={c.title}
                  className="rounded-[12px] border border-sand bg-cream p-5 transition-shadow hover:shadow-[0_18px_40px_-30px_rgba(44,64,71,0.5)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-maroon">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-ink/75">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------- PHILOSOPHY */}
      <Section tone="mist" className="py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Our Philosophy</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            A place where every child feels loved and encouraged to grow
          </h2>
          <p className="mt-5 text-ink/80">
            We believe children learn best when they feel safe and valued. Our days balance the joy
            of play-based discovery with the reassurance of a consistent routine and a structured,
            research-informed curriculum.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {philosophyPoints.map((p, i) => (
            <div
              key={p.title}
              className="relative rounded-[12px] border border-sand bg-cream p-7 shadow-[0_18px_40px_-32px_rgba(44,64,71,0.5)]"
            >
              <span className="font-display text-4xl font-bold text-sand">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-ink/75">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------ TRUST & SAFETY */}
      <Section tone="cream" className="py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Trust &amp; Safety</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Held to Virginia's standards — and verifiable by you
          </h2>
          <p className="mt-5 text-ink/80">
            Choosing childcare is an act of trust. We want that trust to be informed, so here is
            exactly what our licensing means and how you can confirm it yourself.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="rounded-[14px] border border-sand bg-mist/40 p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon text-blush">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-semibold text-ink">
                Licensed Virginia Family Child Care Provider
              </h3>
            </div>
            <p className="mt-5 text-ink/80">
              Virginia licensing isn't a one-time formality — it's an ongoing commitment. As a
              licensed family child care provider, this home is required to:
            </p>
            <ul className="mt-5 space-y-3">
              {[
                'Meet regular safety and health inspections',
                'Complete required caregiver training',
                'Maintain a state-mandated caregiver-to-child ratio',
                'Meet other state-defined health, safety, and program standards',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/85">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon">
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
                  <span className="text-[0.97rem]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[14px] border border-maroon/20 bg-cream p-7">
              <p className="text-sm font-medium uppercase tracking-wider text-maroon">
                Verified &amp; current
              </p>
              <p className="mt-3 text-ink/85">
                Our license has been verified as current and in good standing. You don't have to
                take our word for it — Virginia publishes inspection records publicly so you can
                review them yourself.
              </p>
              <Button
                href={business.licensingSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="mt-5 w-full"
              >
                Look up our license
                <Arrow className="h-4 w-4" />
              </Button>
              <p className="mt-3 text-xs text-ink/55">
                Opens Virginia's official child care licensing search.
              </p>
            </div>

            <div className="rounded-[14px] border border-sand bg-mist/40 p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-maroon">
                <Cross className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">Prepared for the unexpected</h3>
              <p className="mt-2 text-sm text-ink/75">
                CPR and First Aid certified, with early childhood development coursework completed —
                so your child is in capable, prepared hands every day.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ----------------------------------------------------- CTA */}
      <Section tone="maroon" className="py-16 lg:py-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-2xl font-bold text-blush sm:text-3xl">
            Have questions about our home, routine, or approach?
          </h2>
          <Button to="/contact" variant="light">
            Contact Us
            <Arrow className="h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  )
}
