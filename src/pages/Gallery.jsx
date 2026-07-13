import { useMemo, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { ZoomIn } from 'lucide-react'
import PageHero from '../components/PageHero'
import { CtaBand, Section } from '../components/ui'
import { asset } from '../data/site'

const actionPhotos = [
  {
    label: 'Morning Drop-Off',
    caption: 'Every morning starts with a warm welcome at the door.',
    src: '/photos/PHOTO-2026-07-13-12-39-58.jpg',
    alt: 'A parent and child arriving at the daycare door on a snowy morning',
  },
  {
    label: 'Follow the Path',
    caption: 'Chalk arrows and open driveways — gross motor learning in the fresh air.',
    src: '/photos/PHOTO-2026-07-13-12-39-59_2.jpg',
    alt: 'A child following chalk arrows drawn on a driveway',
  },
  {
    label: 'Leaf Day Fun',
    caption: 'Fall leaves and a little creativity — outdoor sensory play in every season.',
    src: '/photos/PHOTO-2026-07-13-12-39-59_3.jpg',
    alt: 'A toddler sitting in a pile of fall leaves with a pot on their head',
  },
  {
    label: 'Letters in Nature',
    caption: 'Spelling with nature — children arrange leaves to form letters on the pavement.',
    src: '/photos/PHOTO-2026-07-13-12-39-59_4.jpg',
    alt: 'Children standing near letters spelled out with leaves on a dark pavement',
  },
  {
    label: 'Building Up',
    caption: 'Building confidence one block at a time — soft foam stacking in the play room.',
    src: '/photos/PHOTO-2026-07-13-12-39-59_5.jpg',
    alt: 'A toddler climbing a tower of colorful foam blocks in front of a chalkboard',
  },
  {
    label: 'Art & Craft Time',
    caption: 'Little hands at work — coloring and fine motor development at the art table.',
    src: '/photos/PHOTO-2026-07-13-12-39-59_6.jpg',
    alt: 'Close-up of children coloring together with crayons',
  },
  {
    label: 'Outdoor Mural',
    caption: 'Big canvas, bigger ideas — outdoor painting on a cardboard mural in the yard.',
    src: '/photos/PHOTO-2026-07-13-12-39-59_7.jpg',
    alt: 'A child painting on a large cardboard mural propped against a tree',
  },
  {
    label: 'Little Explorer',
    caption: 'Curiosity looks good on everyone.',
    src: '/photos/PHOTO-2026-07-13-12-39-59_8.jpg',
    alt: 'A baby wearing oversized round blue toy glasses and smiling',
  },
  {
    label: 'Driveway Learning',
    caption: 'Drawing shapes and letters in chalk — learning happens everywhere, even the driveway.',
    src: '/photos/PHOTO-2026-07-13-12-39-59_9.jpg',
    alt: 'A child drawing chalk shapes on a driveway from above',
  },
  {
    label: 'Science Discovery',
    caption: 'A magnifying glass and a painted pumpkin — early science exploration at the activity table.',
    src: '/photos/PHOTO-2026-07-13-12-39-59_10.jpg',
    alt: 'A toddler examining a painted pumpkin with a magnifying glass at a table',
  },
  {
    label: 'Outdoor Adventure',
    caption: 'The yard becomes a classroom — parachutes, butterflies, and movement games outside.',
    src: '/photos/PHOTO-2026-07-13-12-39-59_11.jpg',
    alt: 'Outdoor yard with parachutes and butterfly decorations spread on the grass',
  },
  {
    label: 'Backyard Play',
    caption: 'Sunshine and ride-on toys — outdoor free play in the fenced backyard.',
    src: '/photos/PHOTO-2026-07-13-12-39-59.jpg',
    alt: 'A toddler pushing a blue ride-on toy car across a green lawn',
  },
  {
    label: 'Big Art, Little Artist',
    caption: 'Spray painting their own mural — big art for little artists.',
    src: '/photos/PHOTO-2026-07-13-12-42-36.jpg',
    alt: 'A child spray painting a large colorful mural on cardboard outside',
  },
]

// Each category holds an `images` array so additional photos can be added later.
const categories = [
  {
    label: 'The Play Area',
    caption:
      'An open, soft-floored space where toddlers build, stack, and move safely throughout the day.',
    gridClass: 'lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:min-h-[580px]',
    images: [{ src: '/photos/play-area.png', alt: 'The open play area with alphabet mat and foam blocks' }],
  },
  {
    label: 'The Learning Wall',
    caption:
      'The chalkboard wall — a living display of the day\u2019s learning, updated by the children.',
    gridClass: 'lg:col-start-2 lg:row-start-1 lg:min-h-[280px]',
    images: [{ src: '/photos/learning-wall.png', alt: 'The chalkboard learning wall with letter cards' }],
  },
  {
    label: 'Reading & Discovery Corner',
    caption:
      'A quiet corner with dolls, a mirror, and emotion posters for imaginative, social play.',
    gridClass: 'lg:col-start-2 lg:row-start-2 lg:min-h-[280px]',
    images: [{ src: '/photos/reading-nook.png', alt: 'The reading and discovery corner' }],
  },
  {
    label: 'Sensory & Discovery Shelf',
    caption: 'Hands-on bins for sorting, scooping, and exploring textures and early science.',
    gridClass: 'lg:col-start-1 lg:row-start-3 min-h-[280px]',
    images: [{ src: '/photos/sensory-table.png', alt: 'Sensory and discovery shelf with sorted bins' }],
  },
  {
    label: 'Mealtime & Play Kitchen',
    caption:
      'Child-sized seating where children share meals and practice independence together.',
    gridClass: 'lg:col-start-2 lg:row-start-3 min-h-[280px]',
    images: [{ src: '/photos/mealtime-table.png', alt: 'Mealtime table and play kitchen area' }],
  },
  {
    label: 'Outdoor Play',
    caption:
      'A fenced backyard with a slide and play structure \u2014 fresh air and movement every day.',
    gridClass: 'lg:col-start-3 lg:row-start-3 min-h-[280px]',
    images: [{ src: '/photos/outdoor.png', alt: 'Outdoor play area with slide and play structure' }],
  },
]

function GalleryCard({ category, slideIndex, cardIndex, onOpen }) {
  const image = category.images[0]
  return (
    <figure
      className={`reveal group relative h-full min-h-[240px] overflow-hidden rounded-[14px] border border-sand bg-mist ${category.gridClass || ''}`}
      style={{ animationDelay: `${cardIndex * 70}ms` }}
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

function ActionCard({ photo, slideIndex, cardIndex, onOpen }) {
  return (
    <figure
      className={`reveal group relative min-h-[240px] overflow-hidden rounded-[14px] border border-sand bg-mist`}
      style={{ animationDelay: `${cardIndex * 70}ms` }}
    >
      <button
        type="button"
        onClick={() => onOpen(slideIndex)}
        className="absolute inset-0 z-10 cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
        aria-label={`View full size: ${photo.label}`}
      >
        <span className="sr-only">Open photo in lightbox</span>
      </button>
      <img
        src={asset(photo.src)}
        alt={photo.alt}
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
        <p className="font-display text-base font-semibold text-cream">{photo.label}</p>
        <p className="mt-1 text-sm leading-snug text-cream/85">{photo.caption}</p>
      </figcaption>
    </figure>
  )
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const spaceSlides = useMemo(
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

  const actionSlides = useMemo(
    () =>
      actionPhotos.map((photo) => ({
        src: asset(photo.src),
        alt: photo.alt,
        title: photo.label,
        description: photo.caption,
      })),
    [],
  )

  const allSlides = useMemo(() => [...spaceSlides, ...actionSlides], [spaceSlides, actionSlides])
  const actionStartIndex = spaceSlides.length

  const categoryStartIndex = useMemo(() => {
    let cursor = 0
    return categories.map((cat) => {
      const start = cursor
      cursor += cat.images.length
      return start
    })
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside our home"
        intro="A calm, organized space designed for real learning and real comfort. Here's a glimpse of where your child's days would unfold."
      />

      <Section tone="cream" className="py-16 lg:py-24">
        {/*
          Single grid with explicit placement on lg:
          Row 1–2 left: Play Area (spans both rows)
          Row 1 right: Learning Wall
          Row 2 right: Reading Corner
          Row 3: three equal cards
        */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[280px_280px_320px]">
          {categories.map((cat, i) => (
            <GalleryCard
              key={cat.label}
              category={cat}
              slideIndex={categoryStartIndex[i]}
              cardIndex={i}
              onOpen={setLightboxIndex}
            />
          ))}
        </div>

        <div className="mt-16 lg:mt-24">
          <h2 className="font-display text-2xl font-semibold text-ink mb-6">Learning in Action</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: '280px' }}>
            {actionPhotos.map((photo, i) => (
              <ActionCard
                key={photo.src}
                photo={photo}
                slideIndex={actionStartIndex + i}
                cardIndex={i}
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
        slides={allSlides}
      />

      <CtaBand
        headline="Want to see it in person?"
        subtext="The best way to get a feel for our home is to reach out. We're glad to answer questions and tell you more about daily life here."
      />
    </>
  )
}
