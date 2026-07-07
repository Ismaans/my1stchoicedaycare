import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Lightweight reusable carousel built on embla-carousel-react.
// - Pass an array of slide nodes as children.
// - Falls back gracefully to a single static slide (no controls) when only one.
// - `slideBasis` controls how many slides show per view (e.g. 'basis-full',
//   'basis-full md:basis-1/2 lg:basis-1/3').
export default function Carousel({
  children,
  options,
  autoplayMs = 0,
  slideBasis = 'basis-full',
  gapClassName = '',
  className = '',
  viewportClassName = '',
  showArrows = true,
  showDots = true,
  ariaLabel = 'Carousel',
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    ...options,
  })
  const [selected, setSelected] = useState(0)
  const [snaps, setSnaps] = useState([])
  const [paused, setPaused] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((i) => emblaApi && emblaApi.scrollTo(i), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    const onReInit = () => {
      setSnaps(emblaApi.scrollSnapList())
      onSelect()
    }
    onReInit()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onReInit)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onReInit)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi || !autoplayMs || paused) return
    const id = setInterval(() => {
      if (!document.hidden) emblaApi.scrollNext()
    }, autoplayMs)
    return () => clearInterval(id)
  }, [emblaApi, autoplayMs, paused])

  const slides = Array.isArray(children) ? children.filter(Boolean) : [children]
  const hasMultiple = slides.length > 1

  return (
    <div
      className={`relative ${className}`}
      role="group"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className={`overflow-hidden ${viewportClassName}`} ref={emblaRef}>
        <div className={`flex ${gapClassName}`}>
          {slides.map((child, i) => (
            <div
              key={i}
              className={`min-w-0 shrink-0 grow-0 ${slideBasis}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && hasMultiple && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-md backdrop-blur transition-colors hover:bg-cream hover:text-maroon"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-md backdrop-blur transition-colors hover:bg-cream hover:text-maroon"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {showDots && hasMultiple && (
        <div className="mt-6 flex justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === selected}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === selected ? 'w-6 bg-maroon' : 'w-2.5 bg-ink/25 hover:bg-ink/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
