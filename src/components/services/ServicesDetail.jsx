import { Clock, MessageCircle, Phone, ShieldCheck, Star, Wrench } from 'lucide-react'
import ServiceAccordion from '../common/ServiceAccordion'
import {
  DRILL_ITEMS,
  ELECTRIC_ITEMS,
  MATERIAL_ITEMS,
  PUMP_ITEMS,
} from '../../data/servicesData'

const TRUST_ITEMS = [
  { icon: ShieldCheck, text: 'Bảo hành công trình lên đến 5 năm' },
  { icon: Clock, text: 'Thi công đúng tiến độ cam kết' },
  { icon: Wrench, text: 'Vật tư chính hãng, đạt chuẩn kỹ thuật' },
  { icon: Star, text: 'Đội ngũ thợ lành nghề, kinh nghiệm cao' },
]

function ServicesDetail({ detailRef }) {
  return (
    <section ref={detailRef} className="ambient-section py-10">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_340px]">
          <div className="soft-surface rounded-[24px] p-5 sm:p-6">
            <p className="inline-flex rounded-full bg-[var(--accent-soft)] px-4 py-2 text-xs font-extrabold uppercase text-[var(--accent)]">Chi tiết dịch vụ</p>
            <h2 className="mb-6 font-display text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold italic leading-none text-[var(--page-text)]">
              Dịch vụ khoan giếng
            </h2>
            <div className="flex flex-col gap-5">
              <ServiceAccordion title="Khoan giếng" items={DRILL_ITEMS} />
              <ServiceAccordion title="Vật tư lắp đặt giếng khoan" items={MATERIAL_ITEMS} />
              <ServiceAccordion title="Lắp đặt máy bơm" items={PUMP_ITEMS} />
              <ServiceAccordion title="Hệ thống điện" items={ELECTRIC_ITEMS} />
            </div>
          </div>

          <aside className="flex flex-col gap-5 lg:sticky lg:top-28">
            <div className="soft-surface rounded-[24px] p-5">
              <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--page-text)]">
                Cam kết chất lượng
              </p>
              <ul className="flex flex-col gap-3">
                {TRUST_ITEMS.map((item) => {
                  const TrustIcon = item.icon

                  return (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[var(--accent-soft)] text-[var(--accent)]">
                        <TrustIcon size={15} strokeWidth={2.2} />
                      </span>
                      <span className="text-[0.85rem] leading-snug text-[var(--muted-text)]">{item.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="soft-surface rounded-[24px] p-5">
              <p className="mb-1 text-[0.9rem] font-extrabold text-[var(--page-text)]">Liên hệ tư vấn miễn phí</p>
              <p className="mb-4 text-[0.8rem] leading-6 text-[var(--muted-text)]">
                Gọi hoặc nhắn Zalo, đội ngũ sẽ phản hồi và tư vấn phương án phù hợp.
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="tel:0945455458"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-3 text-[0.85rem] font-bold text-white no-underline transition-opacity hover:opacity-90"
                >
                  <Phone size={15} />
                  0945 455 458
                </a>
                <a
                  href="https://zalo.me/0945455458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[var(--soft-border)] bg-[var(--soft-surface)] px-4 py-3 text-[0.85rem] font-semibold text-[var(--page-text)] no-underline transition-colors hover:bg-[var(--soft-surface-strong)]"
                >
                  <MessageCircle size={15} />
                  Nhắn tin Zalo
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default ServicesDetail
