import { useMemo, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { ZoomIn } from 'lucide-react'
import { asset } from '../data/site'
import { experiencePhotos } from '../data/experiences'

function ExperienceCard({ photo, slideIndex, cardIndex, onOpen }) {
  return (
    <figure
      className="reveal group relative min-h-[240px] overflow-hidden rounded-[14px] border border-sand bg-mist"
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

/** Full Experiences photo grid — same cards as Gallery, reusable on Home and About. */
export default function ExperiencesGrid({ className = '' }) {
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const slides = useMemo(
    () =>
      experiencePhotos.map((photo) => ({
        src: asset(photo.src),
        alt: photo.alt,
        title: photo.label,
        description: photo.caption,
      })),
    [],
  )

  return (
    <div className={className}>
      <h2 className="mb-6 font-display text-2xl font-semibold text-ink">Experiences</h2>
      <div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        style={{ gridAutoRows: '280px' }}
      >
        {experiencePhotos.map((photo, i) => (
          <ExperienceCard
            key={photo.src}
            photo={photo}
            slideIndex={i}
            cardIndex={i}
            onOpen={setLightboxIndex}
          />
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </div>
  )
}
