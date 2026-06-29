import { Button, Eyebrow, Section, Photo } from '../components/ui'
import { ShieldCheck, Cross, Cap, Users, Star, Arrow, Heart } from '../components/icons'
import { trustPoints, business } from '../data/site'

const trustIcons = [ShieldCheck, Cross, Cap, Users]

const testimonials = [
  {
    quote:
      'Wonderful, clean and modern! We are very happy and would recommend to everyone!',
    name: 'Olgica I.',
  },
  {
    quote:
      'We loved Farrah so much! Both of my kids started there at 3 months and just recently departed for pre-school. Both of my kids thrived under her care and loved going each day. Farrah provides a clean and safe environment. I could not have asked for a better daycare for my babies.',
    name: 'Natalie S.',
  },
  {
    quote:
      'My son has grown exponentially in the years he has been with Farrah — we could not recommend her more highly. Farrah will support your parenting style, foster your baby\u2019s development and will add more love to your child\u2019s life.',
    name: 'Adele C.',
  },
]

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------- HERO */}
      <section className="grain relative overflow-hidden bg-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-mist/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-sand/40 blur-3xl"
        />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24 lg:pt-20">
          <div>
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-sand bg-cream/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-maroon">
              <ShieldCheck className="h-4 w-4" />
              {business.licensing}
            </div>

            <h1
              className="reveal mt-6 text-4xl font-bold leading-[1.05] text-ink sm:text-5xl lg:text-[3.5rem]"
              style={{ animationDelay: '80ms' }}
            >
              {business.name.split('Family Daycare')[0].trim()}{' '}
              <span className="text-maroon">Family Daycare</span>
            </h1>

            <p
              className="reveal mt-5 max-w-xl text-lg text-ink/80"
              style={{ animationDelay: '160ms' }}
            >
              {business.tagline} A small, licensed home learning environment in Alexandria where
              children are known by name, cared for with intention, and encouraged to grow every
              day.
            </p>

            <div
              className="reveal mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: '240ms' }}
            >
              <Button to="/contact">
                Contact Us
                <Arrow className="h-4 w-4" />
              </Button>
              <Button to="/programs" variant="outline">
                Explore Programs
              </Button>
            </div>

            <div
              className="reveal mt-8 flex items-center gap-3 text-sm text-ink/70"
              style={{ animationDelay: '320ms' }}
            >
              <span className="flex text-maroon">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-ink">5.0 rating</strong> from local families
              </span>
            </div>
          </div>

          <div className="reveal relative" style={{ animationDelay: '200ms' }}>
            <Photo
              src="/photos/hero-play-space.png"
              ratio="4 / 5"
              label="The Play & Learning Space"
              alt="The bright, tidy family daycare play and learning space"
              className="shadow-[0_30px_60px_-30px_rgba(44,64,71,0.45)]"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-[12px] border border-sand bg-cream px-5 py-4 shadow-lg sm:block">
              <p className="font-display text-2xl font-bold text-maroon">Infants–11 yrs</p>
              <p className="text-xs uppercase tracking-wider text-ink/60">Every age, cared for</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- TRUST STRIP */}
      <section className="border-y border-sand/70 bg-mist">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 divide-y divide-ink/10 px-5 sm:grid-cols-2 sm:divide-y-0 sm:px-8 lg:grid-cols-4 lg:divide-x">
          {trustPoints.map((point, i) => {
            const Icon = trustIcons[i]
            return (
              <div
                key={point}
                className="flex items-center gap-3 px-2 py-5 lg:justify-center lg:px-6 lg:text-center"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-maroon">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-ink">{point}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* ----------------------------------------------------- WELCOME */}
      <Section tone="cream" className="py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Photo
            src="/photos/home-environment.png"
            ratio="5 / 4"
            label="A Calm Home Environment"
            alt="A calm, organized corner of the home daycare"
          />
          <div>
            <Eyebrow>Welcome</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              A second home built on trust and care
            </h2>
            <p className="mt-5 text-ink/80">
              My 1st Choice Family Daycare is owned and operated by{' '}
              <strong className="font-semibold text-ink">Farrah Deeba</strong>, a mother of four and
              a credentialed early childhood educator. Run out of a single, welcoming home in the
              Belle Haven Meadows area, it offers the consistency and personal attention that only a
              small program can provide.
            </p>
            <p className="mt-4 text-ink/80">
              Our philosophy is simple: every child deserves a safe, nurturing, and enriching place
              where they feel loved and encouraged to grow. We blend play-based learning with a
              thoughtful, structured curriculum so children build confidence, curiosity, and a love
              of learning.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/about" variant="outline">
                Meet Farrah
              </Button>
              <Button to="/programs" variant="outline">
                Our Curriculum
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ TESTIMONIALS */}
      <Section tone="mist" className="py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>What families say</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Trusted by parents across Alexandria
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-maroon">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5" />
            ))}
            <span className="ml-1 text-sm font-semibold text-ink">5.0 rating</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-[12px] border border-sand bg-cream p-7 shadow-[0_18px_40px_-30px_rgba(44,64,71,0.5)]"
            >
              <Heart className="h-6 w-6 text-maroon" />
              <blockquote className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-ink/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-sand pt-4 text-sm font-semibold text-maroon">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------- CLOSING CTA */}
      <section className="grain relative overflow-hidden bg-maroon text-blush">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-maroon-deep/60 blur-3xl"
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-5 py-20 text-center sm:px-8 lg:py-24">
          <h2 className="max-w-2xl text-3xl font-bold text-blush sm:text-4xl">
            Ready to find your child a place to belong?
          </h2>
          <p className="max-w-xl text-blush/85">
            Learn more about our programs and curriculum, or reach out to ask about current
            availability. We would love to hear about your family.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="light">
              Contact Us
              <Arrow className="h-4 w-4" />
            </Button>
            <Button
              to="/programs"
              className="border border-blush/40 bg-transparent text-blush hover:bg-blush hover:text-maroon"
            >
              View Programs
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
