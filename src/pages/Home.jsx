import { Button, Eyebrow, Section, Photo, CtaBand } from '../components/ui'
import Carousel from '../components/Carousel'
import LocationMap from '../components/LocationMap'
import { ShieldCheck, Cross, Cap, Users, Star, Arrow } from '../components/icons'
import { ShieldCheck as ShieldLucide, Blocks, BookOpen } from 'lucide-react'
import { trustPoints, business, asset, cta } from '../data/site'

const philosophyPoints = [
  {
    icon: ShieldLucide,
    title: 'Safe & nurturing first',
    text: 'A calm, secure environment where every child feels loved, settled, and confident enough to explore.',
  },
  {
    icon: Blocks,
    title: 'Play-based, with structure',
    text: 'Hands-on play is paired with an intentional daily rhythm so learning feels natural, not forced.',
  },
  {
    icon: BookOpen,
    title: 'Research-based curriculum',
    text: 'STREAMin3 and Learning Beyond Paper guide meaningful, age-appropriate growth every day.',
  },
]

const trustIcons = [ShieldCheck, Cross, Cap, Users]

// Photos shown in the hero carousel. Falls back to a single static image
// automatically if only one entry is present.
const heroSlides = [
  { src: '/photos/hero-play-space.png', alt: 'The bright, open play and learning space' },
  { src: '/photos/play-area.png', alt: 'The soft-floored play area with an alphabet mat' },
  { src: '/photos/home-environment.png', alt: 'A calm, organized corner of the home' },
  { src: '/photos/reading-nook.png', alt: 'The reading and discovery corner' },
]

// Testimonials pull only from real review text. avatar/date/rating are left as
// optional fields — ready to populate later, never fabricated.
const testimonials = [
  {
    quote: 'Wonderful, clean and modern! We are very happy and would recommend to everyone!',
    name: 'Olgica I.',
    date: null,
    rating: null,
    avatar: null,
  },
  {
    quote:
      'We loved Farrah so much! Both of my kids started there at 3 months and just recently departed for pre-school. Both of my kids thrived under her care and loved going each day. Farrah provides a clean and safe environment. I could not have asked for a better daycare for my babies.',
    name: 'Natalie S.',
    date: null,
    rating: null,
    avatar: null,
  },
  {
    quote:
      'My son has grown exponentially in the years he has been with Farrah — we could not recommend her more highly. Farrah will support your parenting style, foster your baby\u2019s development and will add more love to your child\u2019s life.',
    name: 'Adele C.',
    date: null,
    rating: null,
    avatar: null,
  },
]

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

function TestimonialCard({ t }) {
  return (
    <figure className="flex h-full flex-col rounded-[16px] border border-sand bg-cream p-7 shadow-[0_18px_40px_-30px_rgba(44,64,71,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-32px_rgba(44,64,71,0.6)]">
      <span aria-hidden="true" className="font-display text-5xl leading-none text-sand">
        &ldquo;
      </span>
      <blockquote className="-mt-3 flex-1 text-[0.98rem] leading-relaxed text-ink/85">
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-sand pt-5">
        {/* Avatar: uses initials until real photos are provided */}
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-sm font-bold text-maroon">
          {t.avatar ? (
            <img src={asset(t.avatar)} alt="" className="h-full w-full rounded-full object-cover" />
          ) : (
            initials(t.name)
          )}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-ink">{t.name}</span>
          {/* Optional rating / date render only when real data exists */}
          {t.rating != null && (
            <span className="flex text-maroon" aria-label={`${t.rating} out of 5 stars`}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-3.5 w-3.5 ${i < t.rating ? '' : 'opacity-30'}`} />
              ))}
            </span>
          )}
          {t.date && <span className="block text-xs text-ink/55">{t.date}</span>}
        </span>
      </figcaption>
    </figure>
  )
}

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
              A Safe Place to <span className="text-maroon">Learn, Play</span> and Grow
            </h1>

            <p
              className="reveal mt-5 max-w-xl text-lg text-ink/80"
              style={{ animationDelay: '160ms' }}
            >
              A licensed family child care home in Alexandria, thoughtfully run so every child is
              known by name, kept safe, and encouraged to grow — from infancy through school age.
            </p>

            <div
              className="reveal mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: '240ms' }}
            >
              <Button to="/contact">
                {cta.hero.primary}
                <Arrow className="h-4 w-4" />
              </Button>
              <Button to="/programs" variant="outline">
                {cta.hero.secondary}
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
            <Carousel
              autoplayMs={5000}
              showDots={false}
              ariaLabel="Photos of the daycare space"
              viewportClassName="rounded-[12px] border border-sand shadow-[0_30px_60px_-30px_rgba(44,64,71,0.45)]"
            >
              {heroSlides.map((s) => (
                <div key={s.src} className="aspect-[4/5]">
                  <img
                    src={asset(s.src)}
                    alt={s.alt}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
              ))}
            </Carousel>
            <div className="absolute -bottom-5 -left-5 z-10 hidden rounded-[12px] border border-sand bg-cream px-5 py-4 shadow-lg sm:block">
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

      {/* ------------------------------- WELCOME (credibility-first) */}
      <Section tone="cream" className="py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Photo
            src="/photos/home-environment.png"
            ratio="5 / 4"
            label="A Calm Home Environment"
            alt="A calm, organized corner of the home daycare"
          />
          <div>
            <Eyebrow>Why families choose us</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              A licensed, structured home program you can rely on
            </h2>
            <p className="mt-5 text-ink/80">
              My 1st Choice Family Daycare is a{' '}
              <strong className="font-semibold text-ink">
                licensed Virginia family child care home
              </strong>{' '}
              in the Belle Haven Meadows area of Alexandria. As a single-location home program, it
              offers the consistency, low caregiver-to-child ratio, and personal attention that
              larger centers simply can't match.
            </p>
            <p className="mt-4 text-ink/80">
              Days follow a dependable routine built on a research-based curriculum, blending
              play-based discovery with structured learning — so children feel secure and are
              genuinely prepared for what comes next.
            </p>
            <p className="mt-4 text-ink/80">
              Behind it all is one dedicated owner and lead caregiver. Learn more about Farrah's
              background, credentials, and approach on the About page.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/about" variant="outline">
                {cta.mid.about}
              </Button>
              <Button to="/programs" variant="outline">
                {cta.mid.programs}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------ PHILOSOPHY PREVIEW */}
      <Section tone="mist" className="py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            How we care for your child every day
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {philosophyPoints.map((p, i) => (
            <div
              key={p.title}
              className="flex flex-col gap-4 rounded-[14px] border border-sand bg-cream p-6 shadow-[0_18px_40px_-34px_rgba(44,64,71,0.5)] sm:flex-row sm:items-center sm:gap-6 sm:p-7"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-maroon text-blush">
                <p.icon className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <div className="sm:flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-lg font-bold text-sand">0{i + 1}</span>
                  <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                </div>
                <p className="mt-1.5 text-ink/75">{p.text}</p>
              </div>
            </div>
          ))}
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

        <Carousel
          className="mt-12"
          showArrows={false}
          slideBasis="basis-full pl-4 md:basis-1/2 lg:basis-1/3"
          gapClassName="-ml-4"
          ariaLabel="Parent testimonials"
        >
          {testimonials.map((t) => (
            <div key={t.name} className="h-full py-1">
              <TestimonialCard t={t} />
            </div>
          ))}
        </Carousel>
      </Section>

      {/* --------------------------------------------------- LOCATION */}
      <Section tone="cream" className="py-20 lg:py-28">
        <div className="grid items-stretch gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="flex flex-col justify-center">
            <Eyebrow>Where we are</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Rooted in Belle Haven Meadows
            </h2>
            <p className="mt-5 text-ink/80">
              We're located in a quiet residential neighborhood in the Belle Haven Meadows area of
              Alexandria, VA — easy to reach and calm by design.
            </p>
            <p className="mt-4 flex items-start gap-2 text-ink/80">
              <span className="font-semibold text-ink">Address:</span>
              <a
                href={business.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-maroon underline decoration-sand underline-offset-2 transition-colors hover:text-maroon-deep hover:decoration-maroon"
              >
                {business.area}
              </a>
            </p>
            <div className="mt-7">
              <Button href={business.mapsHref} target="_blank" rel="noopener noreferrer">
                Get Directions
                <Arrow className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <LocationMap className="min-h-[340px]" />
        </div>
      </Section>

      {/* --------------------------------------------------- CLOSING CTA */}
      <CtaBand
        headline="Ready to find your child a place to belong?"
        subtext="Reach out to ask about current availability or to learn more about our home. We would love to hear about your family."
      />
    </>
  )
}
