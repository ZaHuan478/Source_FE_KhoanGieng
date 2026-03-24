import { Link, useLocation } from 'react-router-dom'

function Header({ scrolled, navItems }) {
  const location = useLocation()

  const resolveSectionHref = (sectionId) =>
    location.pathname === '/' ? `#${sectionId}` : `/#${sectionId}`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="font-display text-base font-bold text-slate-800 sm:text-lg">
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
        <a
          href={resolveSectionHref('lien-he')}
          className="rounded-lg bg-blue-800 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
        >
          Liên hệ ngay
        </a>
      </div>
    </header>
  )
}

export default Header
