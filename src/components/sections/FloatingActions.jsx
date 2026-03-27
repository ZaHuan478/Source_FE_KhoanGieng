import { PhoneIcon } from '../common/Icons'

function FloatingActions() {
  const socialActions = [
    {
      name: 'Goi dien',
      href: 'tel:0912345678',
      openInNewTab: false,
      bgClass: 'from-[#22c55e] via-[#16a34a] to-[#15803d]',
      hoverClass: 'hover:shadow-[0_0_24px_rgba(34,197,94,0.5)]',
      icon: <PhoneIcon />,
    },
    {
      name: 'Zalo',
      href: 'https://zalo.me/0912345678',
      openInNewTab: true,
      bgClass: 'from-[#1277ff] via-[#0d63e4] to-[#0a4fc2]',
      hoverClass: 'hover:shadow-[0_0_24px_rgba(18,119,255,0.55)]',
      icon: (
        <span className="select-none text-[11px] font-black tracking-tight text-white" aria-hidden="true">
          Zalo
        </span>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/',
      openInNewTab: true,
      bgClass: 'from-[#ff2b2b] via-[#f81212] to-[#d60000]',
      hoverClass: 'hover:shadow-[0_0_24px_rgba(255,0,0,0.5)]',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 7v10l8-5-8-5Z" fill="white" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/',
      openInNewTab: true,
      bgClass: 'from-[#1877f2] via-[#156de0] to-[#0e56b2]',
      hoverClass: 'hover:shadow-[0_0_24px_rgba(24,119,242,0.52)]',
      icon: (
        <span className="select-none text-[30px] font-black leading-none text-white" aria-hidden="true">
          f
        </span>
      ),
    },
  ]

  return (
    <div className="fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6">
      <div className="flex flex-col items-center gap-2.5">
        {socialActions.map((action) => (
          <a
            key={action.name}
            href={action.href}
            target={action.openInNewTab ? '_blank' : undefined}
            rel={action.openInNewTab ? 'noreferrer' : undefined}
            className={`group flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br ${action.bgClass} shadow-[8px_10px_18px_rgba(15,23,42,0.24),-4px_-4px_10px_rgba(255,255,255,0.22),inset_0_1px_1px_rgba(255,255,255,0.45)] transition duration-300 ease-out hover:scale-[1.08] ${action.hoverClass} focus-visible:scale-[1.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-500/40`}
            aria-label={action.name}
          >
            <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.22)]">{action.icon}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default FloatingActions
