import { Phone, MessageCircle, ShieldCheck, Clock, Wrench, Star } from 'lucide-react'
import ServiceAccordion from '../common/ServiceAccordion'
import {
  DRILL_ITEMS,
  MATERIAL_ITEMS,
  PUMP_ITEMS,
  ELECTRIC_ITEMS,
} from '../../data/servicesData'

const TRUST_ITEMS = [
  { icon: ShieldCheck, text: 'Bảo hành công trình lên đến 5 năm' },
  { icon: Clock, text: 'Thi công đúng tiến độ cam kết' },
  { icon: Wrench, text: 'Vật tư chính hãng, đạt chuẩn kỹ thuật' },
  { icon: Star, text: 'Đội ngũ thợ lành nghề, kinh nghiệm cao' },
]

function ServicesDetail({ detailRef }) {
  return (
    <section ref={detailRef} className="bg-white py-14">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_340px]">

          {/* Left — Accordions */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#0a3f94]">
                Chi tiết dịch vụ thi công
              </p>
              <h2 className="mb-6 font-display text-[clamp(1.4rem,2.5vw,1.9rem)] font-extrabold tracking-tight text-slate-900">
                Dịch Vụ Khoan Giếng
              </h2>
              <ServiceAccordion title="Khoan Giếng" items={DRILL_ITEMS} />
            </div>
            <ServiceAccordion title="Vật Tư Lắp Đặt Giếng Khoan" items={MATERIAL_ITEMS} />
            <ServiceAccordion title="Lắp Đặt Máy Bơm" items={PUMP_ITEMS} />
            <ServiceAccordion title="Hệ Thống Điện" items={ELECTRIC_ITEMS} />
          </div>

          {/* Right — Sticky Sidebar */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-20">

            {/* Trust badges */}
            <div className="rounded-2xl border border-[#e8edf6] bg-[#f8faff] p-5">
              <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-black">
                Cam kết chất lượng
              </p>
              <ul className="flex flex-col gap-3">
                {TRUST_ITEMS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-[1px] flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#e8f0fe] text-[#0a3f94]">
                      <Icon size={14} strokeWidth={2.2} />
                    </span>
                    <span className="text-[0.82rem] leading-snug text-slate-600">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="rounded-2xl border border-[#e8edf6] bg-white p-5 shadow-sm">
              <p className="mb-1 text-[0.85rem] font-bold text-slate-900">Liên hệ tư vấn miễn phí</p>
              <p className="mb-4 text-[0.78rem] text-slate-500">
                Gọi hoặc nhắn Zalo ngay — đội ngũ phản hồi trong 30 phút.
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="tel:0945455458"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0a3f94] to-[#1a6fd0] px-4 py-3 text-[0.85rem] font-bold text-white no-underline shadow-[0_4px_14px_rgba(10,63,148,0.28)] transition-opacity hover:opacity-90"
                >
                  <Phone size={15} />
                  0945 455 458
                </a>
                <a
                  href="https://zalo.me/0945455458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#0a3f94] bg-transparent px-4 py-3 text-[0.85rem] font-semibold text-[#0a3f94] no-underline transition-colors hover:bg-[#f0f5ff]"
                >
                  <MessageCircle size={15} />
                  Nhắn tin Zalo
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesDetail