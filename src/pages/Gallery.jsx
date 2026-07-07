import { useMemo, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { ZoomIn } from 'lucide-react'
import PageHero from '../components/PageHero'
import { CtaBand, Section } from '../components/ui'
import { asset } from '../data/site'

// Each category holds an `images` array so additional photos can be added later
// without changing the lightbox component.
const categories = [
  {
    label: 'The Play Area',
    caption:
      'An open, soft-floored space where toddlers build, stack, and move safely throughout the day.',
    span: 'lg:row-span-2',
    ratio: '4 / 3',
    images: [{ src: '/photos/play-area.png', alt: 'The open play area with alphabet mat and foam blocks' }],
  },
  {
    label: 'The Learning Wall',
    caption:
      'The chalkboard wall — a living display of the day\u2019s learning, updated by the children.',
    ratio: '4 / 5',
    images: [{ src: '/photos/learning-wall.png', alt: 'The chalkboard learning wall with letter cards' }],
  },
  {
    label: 'Reading & Discovery Corner',
    caption:
      'A quiet corner with dolls, a mirror, and emotion posters for imaginative, social play.',
    ratio: '4 / 5',
    images: [{ src: '/photos/reading-nook.png', alt: 'The reading and discovery corner' }],
  },
  {
    label: 'Sensory & Discovery Shelf',
    caption: 'Hands-on bins for sorting, scooping, and exploring textures and early science.',
    ratio: '4 / 3',
    images: [{ src: '/photos/sensory-table.png', alt: 'Sensory and discovery shelf with sorted bins' }],
  },
  {
    label: 'Mealtime & Play Kitchen',
    caption:
      'Child-sized seating where children share meals and practice independence together.',
    ratio: '4 / 5',
    images: [{ src: '/photos/mealtime-table.png', alt: 'Mealtime table and play kitchen area' }],
  },
  {
    label: 'Outdoor Play',
    caption:
      'A fenced backyard with a slide and play structure \u2014 fresh air and movement every day.',
    ratio: '4 / 5',
    images: [{ src: '/photos/outdoor.png', alt: 'Outdoor play area with slide and play structure' }],
  },
]

function GalleryCard({ category, slideIndex, cardIndex, onOpen }) {
  const image = category.images[0]
  return (
    <figure
      className={`reveal group relative overflow-hidden rounded-[14px] border border-sand bg-mist ${
        category.span || ''
      }`}
      style={{ aspectRatio: category.ratio, animationDelay: `${cardIndex * 70}ms` }}
    >
      <button
        type="button"
        onClick={() => onOpen(slideIndex)}
        className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
        aria-label={`View full size: ${category.label}`}
      >
        <span className="sr-only">Open {category.label} in lightbox</span>
      </button>
      <img
        src={asset(image.src)}
        alt={image.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink opacity-0 shadow-md backdrop-blur transition-opacity duration-300 group-hover:opacity-100"
      >
        <ZoomIn className="h-4 w-4" />
      </span>
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-5 pt-14">
        <p className="font-display text-base font-semibold text-cream">{category.label}</p>
        <p className="mt-1 text-sm leading-snug text-cream/85">{category.caption}</p>
      </figcaption>
    </figure>
  )
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  // Flatten all category images into one lightbox slide list.
  const slides = useMemo(
    () =>
      categories.flatMap((cat) =>
        cat.images.map((img) => ({
          src: asset(img.src),
          alt: img.alt,
          title: cat.label,
          description: cat.caption,
        })),
      ),
    [],
  )

  // Map each category card to its first slide index in the flat list.
  const categoryStartIndex = useMemo(() => {
    let cursor = 0
    return categories.map((cat) => {
      const start = cursor
      cursor += cat.images.length
      return start
    })
  }, [])

  const row1 = categories.slice(0, 3)
  const row2 = categories.slice(3)

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside our home"
        intro="A calm, organized space designed for real learning and real comfort. Here's a glimpse of where your child's days would unfold."
      />

      <Section tone="cream" className="py-16 lg:py-24">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:auto-rows-[280px]">
            {row1.map((cat, i) => (
              <GalleryCard
                key={cat.label}
                category={cat}
                slideIndex={categoryStartIndex[i]}
                cardIndex={i}
                onOpen={setLightboxIndex}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:[grid-template-rows:320px]">
            {row2.map((cat, i) => (
              <GalleryCard
                key={cat.label}
                category={cat}
                slideIndex={categoryStartIndex[i + 3]}
                cardIndex={i + 3}
                onOpen={setLightboxIndex}
              />
            ))}
          </div>
        </div>
      </Section>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />

      <CtaBand
        headline="Want to see it in person?"
        subtext="The best way to get a feel for our home is to reach out. We're glad to answer questions and tell you more about daily life here."
      />
    </>
  )
}
