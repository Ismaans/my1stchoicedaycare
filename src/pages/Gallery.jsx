import PageHero from '../components/PageHero'
import { Button, Section } from '../components/ui'
import { Arrow } from '../components/icons'
import { asset } from '../data/site'

const row1 = [
  {
    src: '/photos/play-area.png',
    label: 'The Play Area',
    caption: 'An open, soft-floored space where toddlers build, stack, and move safely throughout the day.',
  },
  {
    src: '/photos/learning-wall.png',
    label: 'The Learning Wall',
    caption: 'The chalkboard wall — a living display of the day\u2019s learning, updated by the children.',
  },
  {
    src: '/photos/reading-nook.png',
    label: 'Reading & Discovery Corner',
    caption: 'A quiet corner with dolls, a mirror, and emotion posters for imaginative, social play.',
  },
]

const row2 = [
  {
    src: '/photos/sensory-table.png',
    label: 'Sensory & Discovery Shelf',
    caption: 'Hands-on bins for sorting, scooping, and exploring textures and early science.',
  },
  {
    src: '/photos/mealtime-table.png',
    label: 'Mealtime & Play Kitchen',
    caption: 'Child-sized seating where children share meals and practice independence together.',
  },
  {
    src: '/photos/outdoor.png',
    label: 'Outdoor Play',
    caption: 'A fenced backyard with a slide and play structure \u2014 fresh air and movement every day.',
  },
]

function Card({ src, label, caption, className = '', delay = 0 }) {
  return (
    <figure
      className={`reveal group relative overflow-hidden rounded-[14px] border border-sand bg-mist ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={asset(src)}
        alt={caption}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-5 pt-14">
        <p className="font-display text-base font-semibold text-cream">{label}</p>
        <p className="mt-1 text-sm leading-snug text-cream/85">{caption}</p>
      </figcaption>
    </figure>
  )
}

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside our home"
        intro="A calm, organized space designed for real learning and real comfort. Here's a glimpse of where your child's days would unfold."
      />

      <Section tone="cream" className="py-16 lg:py-24">
        <div className="flex flex-col gap-5">

          {/* ---- Row 1: Play Area (left, full height) + Learning Wall & Reading Nook (stacked right) ---- */}
          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '280px 280px',
              alignItems: 'stretch',
            }}
          >
            {/* Play Area spans both rows on desktop */}
            <Card
              src={row1[0].src}
              label={row1[0].label}
              caption={row1[0].caption}
              className="[grid-row:1/3]"
              delay={0}
            />
            {/* Learning Wall — top right */}
            <Card
              src={row1[1].src}
              label={row1[1].label}
              caption={row1[1].caption}
              delay={80}
            />
            {/* Reading & Discovery Corner — bottom right */}
            <Card
              src={row1[2].src}
              label={row1[2].label}
              caption={row1[2].caption}
              delay={160}
            />
          </div>

          {/* ---- Row 2: Three equal-height, equal-width cards ---- */}
          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: '320px',
              alignItems: 'stretch',
            }}
          >
            {row2.map((p, i) => (
              <Card
                key={p.label}
                src={p.src}
                label={p.label}
                caption={p.caption}
                delay={i * 80}
              />
            ))}
          </div>

        </div>
      </Section>

      <Section tone="mist" className="py-16 lg:py-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-2xl font-bold text-ink sm:text-3xl">
            Want to see it in person?
          </h2>
          <p className="max-w-xl text-ink/80">
            The best way to get a feel for our home is to reach out. We're glad to answer questions
            and tell you more about daily life here.
          </p>
          <Button to="/contact">
            Contact Us
            <Arrow className="h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  )
}
