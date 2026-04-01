import { useEffect, useId, useState } from 'react'
import { Phone } from 'lucide-react'

const iconClass = 'h-[19px] w-[19px] shrink-0'
const fabBtn =
  'flex h-12 w-12 items-center justify-center rounded-full text-white shadow-[8px_10px_18px_rgba(15,23,42,0.24),-4px_-4px_10px_rgba(255,255,255,0.22),inset_0_1px_1px_rgba(255,255,255,0.45)] transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-500/40'
function ZaloFabIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <path d="M7.3 8.3h9.4l-9.4 7.4h9.4" />
    </svg>
  )
}

function FacebookFabIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.4 21v-7h2.3l.38-2.75H13.4V9.5c0-.8.25-1.35 1.4-1.35h1.34V5.7c-.23-.03-1.03-.1-1.96-.1-1.95 0-3.28 1.2-3.28 3.38v2.27H8.7V14h2.24v7h2.45Z" />
    </svg>
  )
}

function YoutubeFabIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.8 8.2a2.8 2.8 0 0 0-1.97-1.98C18.1 5.75 12 5.75 12 5.75s-6.1 0-7.83.47A2.8 2.8 0 0 0 2.2 8.2 29.5 29.5 0 0 0 1.75 12c0 1.3.15 2.56.45 3.8a2.8 2.8 0 0 0 1.97 1.98c1.73.47 7.83.47 7.83.47s6.1 0 7.83-.47a2.8 2.8 0 0 0 1.97-1.98c.3-1.24.45-2.5.45-3.8 0-1.3-.15-2.56-.45-3.8ZM10.1 15.1V8.9L15.6 12l-5.5 3.1Z" />
    </svg>
  )
}

function MainFabToggleIcon({ open }) {
  return (
    <svg
      className={`h-7 w-7 text-white transition-transform duration-300 ease-out ${open ? 'rotate-45' : 'rotate-0'}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

function HotlineIcon() {
  return <Phone size={16} strokeWidth={2.5} />
}

const SOCIAL_ACTIONS = [
  {
    name: 'Facebook',
    href: null,
    openInNewTab: false,
    bgClass: 'from-white via-white to-white',
    hoverClass: 'hover:shadow-[0_0_24px_rgba(24,119,242,0.52)]',
    iconColorClass: 'text-[#1877F2]',
    Icon: FacebookFabIcon,
  },
  {
    name: 'Zalo',
    href: null,
    openInNewTab: false,
    bgClass: 'from-white via-white to-white',
    hoverClass: 'hover:shadow-[0_0_24px_rgba(18,119,255,0.55)]',
    iconColorClass: 'text-[#0A66FF]',
    Icon: ZaloFabIcon,
  },
  {
    name: 'Hotline',
    href: null,
    openInNewTab: false,
    bgClass: 'from-white via-white to-white',
    hoverClass: 'hover:shadow-[0_0_24px_rgba(249,115,22,0.58)]',
    iconColorClass: 'text-[#f97316]',
    Icon: HotlineIcon,
  },
  {
    name: 'YouTube',
    href: null,
    openInNewTab: false,
    bgClass: 'from-white via-white to-white',
    hoverClass: 'hover:shadow-[0_0_24px_rgba(239,68,68,0.55)]',
    iconColorClass: 'text-[#FF0033]',
    Icon: YoutubeFabIcon,
  },
]

function Backdrop({ onClose }) {
  return (
    <div
      role="presentation"
      className="fixed inset-0 z-40 cursor-default bg-slate-900/30 backdrop-blur-[2px] transition-opacity duration-300"
      onClick={onClose}
    />
  )
}

function FloatingActionLink({ action, index, total, open, onClick }) {
  const delayOpen = (total - 1 - index) * 55
  const delayClose = index * 35
  const className = `${fabBtn} origin-bottom bg-linear-to-br ${action.bgClass} ${action.hoverClass} border border-slate-200/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] transition-[transform,opacity] duration-300 ease-out ${
    open
      ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
      : 'pointer-events-none translate-y-8 scale-[0.4] opacity-0'
  } hover:scale-[1.08]`
  const icon = (
    <span className={`${action.iconColorClass ?? 'text-slate-700'} drop-shadow-[0_1px_1px_rgba(0,0,0,0.12)]`}>
      <action.Icon />
    </span>
  )

  if (!action.href) {
    return (
      <button
        type="button"
        tabIndex={open ? 0 : -1}
        style={{ transitionDelay: open ? `${delayOpen}ms` : `${delayClose}ms` }}
        className={className}
        aria-label={`${action.name} (chua co lien ket)`}
        title={`${action.name}: chua cap nhat lien ket`}
      >
        {icon}
      </button>
    )
  }

  return (
    <a
      href={action.href}
      target={action.openInNewTab ? '_blank' : undefined}
      rel={action.openInNewTab ? 'noreferrer' : undefined}
      tabIndex={open ? 0 : -1}
      style={{ transitionDelay: open ? `${delayOpen}ms` : `${delayClose}ms` }}
      className={className}
      onClick={onClick}
      aria-label={action.name}
    >
      {icon}
    </a>
  )
}

function FloatingActions() {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  if (SOCIAL_ACTIONS.length === 0) return null

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      {open && <Backdrop onClose={() => setOpen(false)} />}

      <div className="pointer-events-none fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6">
        <div className="pointer-events-auto relative flex flex-col items-center">
          <div
            id={panelId}
            role="group"
            aria-label="Liên hệ nhanh"
            className="absolute bottom-[calc(100%+10px)] flex flex-col items-center gap-2.5"
            aria-hidden={!open}
          >
            {SOCIAL_ACTIONS.map((action, index) => (
              <FloatingActionLink
                key={action.name}
                action={action}
                index={index}
                total={SOCIAL_ACTIONS.length}
                open={open}
                onClick={() => setOpen(false)}
              />
            ))}
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? 'Đóng menu liên hệ' : 'Mở liên hệ nhanh'}
            onClick={() => setOpen((v) => !v)}
            className={`${fabBtn} shrink-0 bg-linear-to-br from-slate-700 via-slate-800 to-slate-950 hover:scale-[1.08] hover:shadow-[0_0_22px_rgba(15,23,42,0.45)]`}
          >
            <MainFabToggleIcon open={open} />
          </button>
        </div>
      </div>
    </>
  )
}

export default FloatingActions
