// Resolves a path in /public against Vite's base URL so images load correctly
// both locally (served from /) and on GitHub Pages (served from a subpath).
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`

// Single source of truth for business details used across the site.

export const business = {
  name: 'My 1st Choice Family Daycare',
  shortName: 'My 1st Choice',
  owner: 'Farrah Deeba',
  tagline: 'A safe, nurturing second home for your child.',
  phoneDisplay: '+1 (571) 421-6573',
  phoneHref: 'tel:+15714216573',
  email: 'farrah270@gmail.com',
  emailDisplay: 'farrah270@gmail.com',
  // Opens the Gmail web compose window addressed to the daycare.
  gmailHref:
    'https://mail.google.com/mail/?view=cm&fs=1&to=farrah270@gmail.com',
  zelleNumber: '571-421-6573',
  area: '2404 Belle Haven Meadows Court, Alexandria, VA 22306',
  // Coordinates from the US Census geocoder for the map marker.
  coords: { lat: 38.775794, lng: -77.073519 },
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=2404%20Belle%20Haven%20Meadows%20Court%2C%20Alexandria%2C%20VA%2022306',
  licensing: 'Licensed Virginia Family Child Care Provider',
  licensingSearchUrl: 'https://www.dss.virginia.gov/facility/search/cc.cgi',
}

export const trustPoints = [
  'Licensed Virginia Family Child Care Provider',
  'CPR & First Aid Certified',
  'CDA Credentialed',
  'Caring for infants through school-age',
]

export const hours = [
  { day: 'Monday', time: '7:00 AM – 6:00 PM' },
  { day: 'Tuesday', time: '7:00 AM – 6:30 PM' },
  { day: 'Wednesday', time: '7:00 AM – 6:30 PM' },
  { day: 'Thursday', time: '7:30 AM – 6:30 PM' },
  { day: 'Friday', time: '7:30 AM – 6:30 PM' },
  { day: 'Saturday', time: 'Closed' },
  { day: 'Sunday', time: 'Closed' },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

// Standardized CTA copy — one style per section type across all pages.
export const cta = {
  hero: { primary: 'Contact Us', secondary: 'Explore Programs' },
  mid: { about: 'Learn About Our Home', programs: 'View Programs' },
  closing: { button: 'Contact Us' },
}
