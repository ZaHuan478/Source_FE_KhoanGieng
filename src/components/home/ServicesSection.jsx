import { useState } from 'react'
import SectionTitle from '../common/SectionTitle'
import { Phone } from 'lucide-react'
import { homeFeatureTiles } from '../../data/homeFeatureTiles'

function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleCardClick = () => {
    setActiveIndex((prev) => (prev + 1) % homeFeatureTiles.length)
  }

  return (
    <section id="dich-vu" className="bg-white py-16">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* ── Centered Title ── */}
        <div className="flex items-center">
          <div className="h-px flex-1 bg-slate-300" />
          <div className="px-4 sm:px-6">
            <SectionTitle align="center" title="Khoan Giếng Phú Yên" />
          </div>
          <div className="h-px flex-1 bg-slate-300" />
        </div>

        <div className="mt-10 flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* ── LEFT: Text Content ── */}
          <div className="flex-1 min-w-0">

            <div className="mt-5 space-y-4 text-left text-sm leading-relaxed text-slate-700 sm:text-base lg:text-lg">
              <p>
                Dịch vụ khoan giếng tại Phú Yên là{' '}
                <strong className="font-semibold text-blue-700">giải pháp tối ưu</strong> cho nhu
                cầu cung cấp{' '}
                <strong className="font-semibold text-slate-900">
                  nguồn nước sạch, ổn định và lâu dài
                </strong>
                . Với hơn 15 năm kinh nghiệm trong lĩnh vực khoan giếng, đội ngũ tại đây đã khẳng
                định được{' '}
                <strong className="font-semibold text-slate-900">uy tín và chất lượng</strong> qua
                hàng loạt công trình thực tế.
              </p>
              <p>
                Khách hàng khi lựa chọn dịch vụ sẽ được đảm bảo về sự{' '}
                <strong className="font-semibold text-blue-700">
                  chuyên nghiệp, tận tâm và minh bạch
                </strong>{' '}
                trong từng khâu thực hiện.{' '}
                <strong className="font-semibold text-slate-900">Hệ thống máy móc hiện đại</strong>{' '}
                cùng công nghệ tiên tiến được áp dụng nhằm mang lại{' '}
                <strong className="font-semibold text-slate-900">
                  hiệu quả cao, tiết kiệm thời gian và đảm bảo an toàn tuyệt đối
                </strong>{' '}
                trong quá trình thi công.
              </p>
              <p>
                Bên cạnh đó, dịch vụ còn cung cấp{' '}
                <strong className="font-semibold text-blue-700">tư vấn kỹ thuật chuyên sâu</strong>
                ,{' '}
                <strong className="font-semibold text-slate-900">
                  thiết kế hệ thống khai thác nước phù hợp
                </strong>{' '}
                với từng khu vực, cũng như hỗ trợ{' '}
                <strong className="font-semibold text-slate-900">bảo trì - bảo dưỡng định kỳ</strong>
                . Nhờ đó, nguồn nước luôn được duy trì ổn định, đáp ứng tốt nhu cầu sinh hoạt và
                sản xuất lâu dài cho khách hàng.
              </p>
            </div>

            <div className="mt-8 grid w-full grid-cols-1 gap-3 min-[480px]:grid-cols-[1fr_auto] min-[480px]:items-center">
              <label htmlFor="consult-phone" className="sr-only">
                Số điện thoại tư vấn
              </label>
              <input
                id="consult-phone"
                type="tel"
                inputMode="numeric"
                placeholder="Để lại số điện thoại để được tư vấn"
                className="h-10 w-full min-w-0 rounded-full border border-black bg-[#E8E8E8] px-4 text-sm text-black outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 sm:px-5 sm:text-[15px]"
              />
              <a
                href="tel:0912345678"
                className="inline-flex h-10 w-full items-center justify-center rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800 min-[480px]:w-auto min-[480px]:shrink-0 min-[480px]:px-6"
              >
                <Phone className="h-5 w-5" />
                <span className="ml-1.5">Gọi ngay</span>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Stacked Cards ── */}
          <div
            className="relative mx-auto w-full max-w-[380px] shrink-0 lg:w-[380px]"
            style={{ height: '340px' }}
          >
            {/* Hint text */}
            <p className="mb-3 text-center text-xs font-medium text-slate-400 tracking-wide uppercase">
              Nhấn để xem thêm ảnh
            </p>

            {/* Stack layers */}
            {homeFeatureTiles.map((tile, i) => {
              // Offset each card: the top card is activeIndex
              const total = homeFeatureTiles.length
              const relIndex = (i - activeIndex + total) % total
              const isTop = relIndex === 0

              const translateY = relIndex * -8
              const translateX = relIndex * 6
              const rotate = relIndex === 0 ? 0 : relIndex % 2 === 0 ? relIndex * 1.5 : -(relIndex * 1.5)
              const scale = 1 - relIndex * 0.04
              const zIndex = total - relIndex

              return (
                <div
                  key={tile.title}
                  onClick={isTop ? handleCardClick : undefined}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    transform: `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`,
                    zIndex,
                    transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease',
                    cursor: isTop ? 'pointer' : 'default',
                  }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                    <img
                      src={tile.image}
                      alt={tile.alt}
                      className="h-full w-full object-cover"
                    />
                    {/* Gradient overlay + title on top card */}
                    {isTop && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-sm font-semibold leading-snug text-white drop-shadow">
                            {tile.title}
                          </p>
                          {tile.description && (
                            <p className="mt-1 text-xs leading-relaxed text-white/80">
                              {tile.description}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                    {/* Click hint icon on top card */}
                    {isTop && (
                      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}

            {/* Dot indicators */}
            <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-center gap-1.5">
              {homeFeatureTiles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-5 bg-blue-600' : 'w-1.5 bg-slate-300'
                  }`}
                  aria-label={`Xem ảnh ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServicesSection
