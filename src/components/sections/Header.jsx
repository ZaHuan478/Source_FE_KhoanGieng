import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header({ scrolled, navItems }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const resolveSectionHref = (sectionId) =>
    location.pathname === '/' ? `#${sectionId}` : `/#${sectionId}`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-70 pt-[env(safe-area-inset-top)] transition duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex w-full max-w-300 items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="font-display text-sm font-bold text-slate-800 sm:text-lg">
          Khoan Giếng Phú Yên
        </Link>
        <nav className="hidden items-center gap-5 text-[12px] font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            item.path ? (
              <Link
                key={item.label}
                to={item.path}
                className={`transition hover:text-blue-700 ${
                  location.pathname === item.path ? 'text-blue-700' : ''
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={resolveSectionHref(item.sectionId)}
                className="transition hover:text-blue-700"
              >
                {item.label}
              </a>
            )
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={resolveSectionHref('lien-he')}
            className="hidden rounded-lg bg-blue-800 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 sm:inline-flex"
          >
            Liên hệ ngay
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-[11px] font-semibold text-slate-700 transition hover:bg-slate-50 lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Mo menu dieu huong"
          >
            Menu
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-200/80 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-md lg:hidden"
        >
          <div className="mx-auto flex w-full max-w-300 flex-col gap-2">
            {navItems.map((item) => (
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`rounded-md px-2 py-2 transition hover:bg-slate-100 hover:text-blue-700 ${
                    location.pathname === item.path ? 'bg-slate-100 text-blue-700' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={resolveSectionHref(item.sectionId)}
                  className="rounded-md px-2 py-2 transition hover:bg-slate-100 hover:text-blue-700"
                >
                  {item.label}
                </a>
              )
            ))}
            <a
              href={resolveSectionHref('lien-he')}
              className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-blue-800 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 sm:hidden"
            >
              Liên hệ ngay
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}

export default Header
