import { createElement } from 'react'
import { BadgeCheck, Gauge, ShieldCheck } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'

const proofPoints = [
  {
    title: 'Khảo sát trước khi khoan',
    description: 'Đánh giá vị trí, tầng nước và điều kiện mặt bằng để chọn phương án thi công phù hợp.',
    icon: ShieldCheck,
  },
  {
    title: 'Máy móc chuyên dụng',
    description: 'Thi công nhanh, gọn và kiểm soát tốt tiến độ cho công trình dân dụng lẫn sản xuất.',
    icon: Gauge,
  },
  {
    title: 'Bàn giao rõ ràng',
    description: 'Tư vấn vận hành, bảo trì và kiểm tra lưu lượng sau khi hoàn tất công trình.',
    icon: BadgeCheck,
  },
]

function WhyChooseUsSection({ whyPoints, video }) {
  return (
    <section id="gioi-thieu" className="ambient-section py-14">
      <div className="mx-auto grid w-full max-w-300 gap-7 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:px-8">
        <div className="soft-surface self-start overflow-hidden rounded-[22px] p-3">
          <div className="relative overflow-hidden rounded-lg bg-slate-950">
            {video?.url ? (
              <video
                src={video.url}
                className="h-[320px] w-full object-cover sm:h-[420px]"
                controls
                muted
                loop
                playsInline
                preload="metadata"
              >
                Trình duyệt của bạn không hỗ trợ thẻ video.
              </video>
            ) : (
              <div className="h-[320px] w-full bg-slate-900 sm:h-[420px]" />
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/82 to-transparent p-5">
              <p className="text-sm font-bold text-white/78">Công trình thực tế</p>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle
            align="left"
            eyebrow="Vì sao chọn chúng tôi"
            title="Kỹ thuật chắc, báo giá rõ, vận hành bền."
            subtitle="Không chỉ khoan xong là kết thúc, đội ngũ còn tư vấn hệ thống bơm và cách khai thác để giếng hoạt động ổn định."
          />

          <div className="soft-surface mt-6 rounded-[18px] p-5 text-base leading-8 text-[var(--muted-text)]">
            <p>{whyPoints[0]}</p>
          </div>

        </div>

        <div className="grid gap-4 lg:col-span-2 lg:grid-cols-3">
          {proofPoints.map((point) => (
            <div key={point.title} className="soft-surface rounded-[18px] p-4">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--nav-active)] text-[var(--nav-active-text)]">
                  {createElement(point.icon, { className: 'h-5 w-5' })}
                </span>
                <div>
                  <h3 className="font-sans text-base font-extrabold text-[var(--page-text)]">{point.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted-text)]">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
