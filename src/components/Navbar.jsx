import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, business, asset } from '../data/site'

function Wordmark() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label={`${business.name} — home`}>
      <img
        src={asset('site-logo-cream.png')}
        alt=""
        aria-hidden="true"
        className="h-10 w-auto rounded-[10px] transition-opacity duration-200 group-hover:opacity-85"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-bold tracking-tight text-ink">
          My 1<sup className="text-[0.55em]">st</sup> Choice
        </span>
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink/60">
          Family Daycare
        </span>
      </span>
    </Link>
  )
}

const MOBILE_MENU_MQ = '(max-width: 768px)'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock background scroll while the mobile menu is open.
  // Cleanup always clears overflow so the page never stays stuck.
  useEffect(() => {
    if (!open) return

    const mq = window.matchMedia(MOBILE_MENU_MQ)

    const syncBodyLock = () => {
      document.body.style.overflow = mq.matches ? 'hidden' : ''
    }

    syncBodyLock()
    mq.addEventListener('change', syncBodyLock)

    return () => {
      mq.removeEventListener('change', syncBodyLock)
      document.body.style.overflow = ''
    }
  }, [open])

  // Close on outside tap and browser back while open.
  useEffect(() => {
    if (!open) return

    const onPointerDown = (event) => {
      const header = document.getElementById('site-header')
      if (header && !header.contains(event.target)) {
        setOpen(false)
      }
    }

    const onPopState = () => setOpen(false)

    document.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('popstate', onPopState)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('popstate', onPopState)
    }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative py-1 text-[0.95rem] font-medium transition-colors duration-200 ${
      isActive ? 'text-maroon' : 'text-ink/75 hover:text-maroon'
    } after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-maroon after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-sand/70 bg-cream/90 backdrop-blur-md shadow-[0_6px_24px_-18px_rgba(44,64,71,0.6)]'
          : 'border-transparent bg-cream/70 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Wordmark />

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-sand text-ink transition-colors hover:bg-sand/40 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-sand/60 bg-cream/95 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-[10px] px-4 py-3 text-base font-medium transition-colors ${
                  isActive ? 'bg-sand/40 text-maroon' : 'text-ink/80 hover:bg-sand/30'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
