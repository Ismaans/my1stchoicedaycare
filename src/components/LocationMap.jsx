import { business } from '../data/site'

const { lat, lng } = business.coords
// Coordinates + iwloc=near avoids Google's place/address info card on the embed.
const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed&iwloc=near`

// Equal crop hides leftover Google chrome while keeping the pin centered.
// Extra X/Y nudge pans the view slightly right and down for a perfect center.
const CROP_PX = 56
const PAN_RIGHT_PX = 18
const PAN_DOWN_PX = 14

export default function LocationMap({ className = '' }) {
  return (
    <div className={`flex h-full w-full flex-col ${className}`}>
      <div className="relative flex min-h-[320px] flex-1 flex-col overflow-hidden rounded-[12px] border border-maroon bg-white p-1.5 sm:min-h-[360px] sm:p-2 lg:min-h-[400px]">
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-[8px] bg-mist">
          <iframe
            title={`Map showing ${business.name}`}
            src={embedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            tabIndex={-1}
            style={{
              width: `calc(100% + ${CROP_PX * 2 + PAN_RIGHT_PX * 2}px)`,
              height: `calc(100% + ${CROP_PX * 2}px)`,
              transform: `translate(-${CROP_PX + PAN_RIGHT_PX}px, -${CROP_PX - PAN_DOWN_PX}px)`,
            }}
            className="pointer-events-none absolute left-0 top-0 border-0"
          />
        </div>
        {/* Overlay captures clicks — iframes can't be wrapped in links meaningfully. */}
        <a
          href={business.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 cursor-pointer rounded-[12px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
          aria-label={`Open directions to ${business.area}`}
        />
      </div>
    </div>
  )
}
