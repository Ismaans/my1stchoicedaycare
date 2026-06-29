import { Link } from 'react-router-dom'
import { business, hours, navLinks } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-sand bg-ink text-cream/90">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-display text-xl font-bold text-cream">{business.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            A licensed family child care home offering a calm, nurturing learning environment for
            infants through school-age children.
          </p>
          <p className="mt-4 inline-flex rounded-full border border-cream/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cream/80">
            {business.licensing}
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-blush">Visit</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li>
              <a href={business.phoneHref} className="text-cream/90 hover:text-blush">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={business.gmailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-cream/90 hover:text-blush"
              >
                {business.emailDisplay}
              </a>
            </li>
            <li>
              <a
                href={business.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/90 hover:text-blush"
              >
                {business.area}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-blush">Hours</h2>
          <ul className="mt-4 space-y-1.5 text-sm text-cream/75">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className={h.time === 'Closed' ? 'text-cream/45' : 'text-cream/90'}>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-blush">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-cream/75 hover:text-blush">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>
            <a
              href={business.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/55 hover:text-blush"
            >
              2404 Belle Haven Meadows Court · Alexandria, VA
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
