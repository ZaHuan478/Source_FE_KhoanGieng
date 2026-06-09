import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Menu, Moon, Phone, Search, Sun, X } from 'lucide-react'
import { useTheme } from '../../context/useTheme'

function Header({ scrolled, navItems, logo }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const resolveSectionHref = (sectionId) =>
    location.pathname === '/' ? `#${sectionId}` : `/#${sectionId}`

  return (
    <header className="fixed inset-x-0 top-0 z-70 pt-[env(safe-area-inset-top)]">
      <div
        className={`mx-auto mt-4 flex w-[min(100%-24px,1500px)] items-center justify-between gap-3 rounded-[18px] border px-4 py-2.5 backdrop-blur-2xl transition duration-300 sm:px-5 ${
          scrolled
            ? 'border-[var(--soft-border)] bg-[var(--soft-surface-strong)] shadow-[var(--shadow-soft)]'
            : 'border-transparent bg-transparent'
        }`}
      >
        <Link
          to="/"
          className="inline-flex min-w-0 items-center gap-3 text-[clamp(0.9rem,1.3vw,1.18rem)] font-extrabold text-[var(--page-text)]"
          aria-label="Trang chu Truong Giang"
        >
          {logo?.url ? (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-[var(--soft-border)] bg-white/80 p-1.5">
              <img
                src={logo.url}
                alt={logo.alt || 'Logo Truong Giang'}
                className="h-full w-full object-contain"
              />
            </span>
          ) : null}
          <span className="truncate">
            Trường Giang
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-[14px] border border-[var(--soft-border)] bg-[var(--nav-bg)] p-1 text-xs font-extrabold uppercase text-[var(--muted-text)] shadow-sm backdrop-blur-xl lg:flex">
          {navItems.map((item, index) =>
            item.path ? (
              <Link
                key={item.label}
                to={item.path}
                className={`inline-flex h-10 items-center gap-2 rounded-[11px] px-4 transition ${
                  location.pathname === item.path
                    ? 'bg-[var(--nav-active)] text-[var(--nav-active-text)] shadow-[0_10px_24px_rgba(9,17,36,0.16)]'
                    : 'hover:bg-white/45 hover:text-[var(--page-text)]'
                }`}
              >
                {index === 0 ? <Home className="h-4 w-4" /> : null}
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={resolveSectionHref(item.sectionId)}
                className="inline-flex h-10 items-center rounded-[11px] px-4 transition hover:bg-white/45 hover:text-[var(--page-text)]"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden h-11 w-72 items-center gap-3 rounded-[13px] border border-[var(--soft-border)] bg-[var(--soft-surface)] px-4 text-sm text-[var(--muted-text)] xl:flex">
            <Search className="h-4 w-4" />
            <span>Tìm dịch vụ...</span>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[13px] border border-[var(--soft-border)] bg-[var(--soft-surface)] text-[var(--page-text)] shadow-sm transition hover:-translate-y-0.5"
            aria-label={isDark ? 'Chuyen sang giao dien sang' : 'Chuyen sang giao dien toi'}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={resolveSectionHref('lien-he')}
            className="hidden h-11 items-center gap-2 rounded-[13px] bg-[var(--nav-active)] px-4 text-sm font-extrabold text-[var(--nav-active-text)] shadow-[0_12px_26px_rgba(9,17,36,0.18)] transition hover:-translate-y-0.5 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Liên hệ
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[13px] border border-[var(--soft-border)] bg-[var(--soft-surface)] text-[var(--page-text)] transition lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Mo menu dieu huong"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          className="mx-auto mt-2 flex w-[min(100%-24px,1500px)] flex-col gap-2 rounded-[18px] border border-[var(--soft-border)] bg-[var(--soft-surface-strong)] p-3 text-sm font-bold text-[var(--page-text)] shadow-[var(--shadow-soft)] backdrop-blur-2xl lg:hidden"
        >
          {navItems.map((item) =>
            item.path ? (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`rounded-[12px] px-3 py-2 transition ${
                  location.pathname === item.path ? 'bg-[var(--accent-soft)] accent-text' : ''
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={resolveSectionHref(item.sectionId)}
                onClick={() => setMenuOpen(false)}
                className="rounded-[12px] px-3 py-2 transition hover:bg-[var(--accent-soft)]"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
      ) : null}
    </header>
  )
}

export default Header
