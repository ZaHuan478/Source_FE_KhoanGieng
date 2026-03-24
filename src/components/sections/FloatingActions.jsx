import { PhoneIcon } from '../common/Icons'

function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-3 z-50 flex flex-col items-end gap-2">
      <a
        href="tel:0912346678"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg transition hover:scale-105 hover:bg-blue-600"
        aria-label="Goi ngay"
      >
        <PhoneIcon />
      </a>
      <a
        href="#lien-he"
        className="rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg transition hover:bg-blue-500"
        aria-label="Nhận tư vấn"
      >
        Zalo
      </a>
    </div>
  )
}

export default FloatingActions
