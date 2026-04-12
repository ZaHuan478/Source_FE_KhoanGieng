import { Phone } from 'lucide-react'

function ServicesCTA() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[920px] rounded-[28px] bg-gradient-to-r from-[#7c5727] to-[#9a6a30] px-8 py-12 text-center text-white shadow-[0_12px_48px_rgba(124,87,39,0.30)]">
        <h3 className="mb-3 font-display text-[clamp(1.6rem,4vw,2.6rem)] font-extrabold leading-tight tracking-tight">
          Bạn cần giải pháp nước sạch ngay hôm nay?
        </h3>
        <p className="mx-auto mb-7 max-w-[480px] text-[0.88rem] leading-relaxed text-amber-100">
          Đội ngũ kỹ sư sẵn sàng khảo sát trực tiếp và tư vấn phương án tối ưu chỉ sau 30 phút.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:0945455458"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-[11px] text-[0.88rem] font-bold text-[#7c5727] no-underline shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
          >
            <Phone size={15} />
            0945 455 458
          </a>
          <a
            href="/#lien-he"
            className="inline-flex items-center rounded-full border border-white/55 px-7 py-[11px] text-[0.88rem] font-semibold text-white no-underline"
          >
            Nhắn tin Zalo →
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesCTA