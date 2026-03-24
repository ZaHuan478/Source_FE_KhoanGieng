import { useEffect, useState } from 'react'
import FooterSection from '../components/sections/FooterSection'
import Header from '../components/sections/Header'
import { footerServices, navItems, services } from '../data/siteContent'

const equipmentItems = [
  {
    name: 'Máy Khoan Xoay NC-150',
    note: 'Chuyên dùng cho địa hình đá cứng, độ sâu lên đến 200m.',
    image:
      'https://images.unsplash.com/photo-1581092334424-204f1738f2f4?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Xe vận tải chuyên dụng',
    note: 'Đảm bảo 4 đội kỹ thuật công trình di chuyển liên tỉnh nhanh.',
    image:
      'https://images.unsplash.com/photo-1631221462927-39e0f9f7c3f8?auto=format&fit=crop&w=800&q=80',
  },
]

const experts = [
  {
    name: 'Kỹ sư. Ngô Gia Văn Thành',
    role: 'CHUYÊN GIA ĐỊA CHẤT',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Ông. Trần Phú Khánh',
    role: 'GIÁM ĐỐC ĐIỀU HÀNH',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Ông. Lê Mạnh Hoàng',
    role: 'TRƯỞNG PHÒNG KỸ THUẬT CƠ ĐIỆN',
    image:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=600&q=80',
  },
]

function ServicesPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const drillService = services.find((s) => s.key === 'drill')
  const shieldService = services.find((s) => s.key === 'shield')
  const pumpService = services.find((s) => s.key === 'pump')
  const homeWaterService = services.find((s) => s.key === 'homeWater')

  return (
    <div className="bg-[#f3f5fb] text-slate-900">
      <Header scrolled={scrolled} navItems={navItems} />

      <main className="pt-20">
        <section className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=80"
            alt="Hệ thống ống nước công nghiệp"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b3f95]/95 via-[#0a3f94]/90 to-[#0a3f94]/75" />
          <div className="relative mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
            <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100">
              Giải pháp dịch vụ
            </span>
            <h1 className="mt-3 max-w-xl font-display text-4xl font-bold leading-[0.96] text-white sm:text-5xl">
              Giải Pháp Nguồn Nước Bền Vững
            </h1>
            <p className="mt-4 max-w-lg text-sm text-blue-100">
              Chúng tôi cung cấp hệ thống dịch vụ chuyên nghiệp, từ khảo sát đến thi công và bảo trì
              định kỳ cho gia đình lẫn doanh nghiệp.
            </p>
          </div>
        </section>

        <section id="dich-vu" className="mx-auto w-full max-w-[1200px] space-y-5 px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-2xl bg-[#f1f3f9] p-5 ring-1 ring-slate-200 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <article>
              <span className="inline-flex rounded-lg bg-blue-100 px-2 py-1 text-[10px] font-semibold text-blue-800">
                🏠
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-slate-900">Khoan giếng gia đình</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {drillService?.description ??
                  'Khoan giếng công nghiệp, gia đình với công nghệ hiện đại, độ sâu tối ưu.'}
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                <li>✓ Tối ưu chi phí đầu tư</li>
                <li>✓ Độ sâu tùy tầng địa chất</li>
                <li>✓ Thi công sạch, không ngập nền</li>
              </ul>
              <button className="mt-4 rounded-lg bg-[#0a3f94] px-4 py-2 text-xs font-semibold text-white">
                Nhận tư vấn báo giá →
              </button>
            </article>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1591531204284-835236fa2f11?auto=format&fit=crop&w=1000&q=80"
                alt="Khoan giếng gia đình"
                className="h-[280px] w-full rounded-2xl object-cover"
              />
              <a
                href="tel:0912345678"
                className="absolute bottom-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0a3f94] text-sm text-white shadow-lg"
              >
                ☎
              </a>
            </div>
          </div>

          <div className="grid gap-4 rounded-2xl bg-[#f1f3f9] p-5 ring-1 ring-slate-200 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=80"
              alt="Khoan giếng công nghiệp"
              className="h-[230px] w-full rounded-2xl object-cover"
            />
            <article>
              <span className="inline-flex rounded-lg bg-amber-100 px-2 py-1 text-[10px] font-semibold text-amber-700">
                🏭
              </span>
              <h3 className="mt-3 font-display text-3xl font-bold text-slate-900">Khoan giếng công nghiệp</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {shieldService?.description ??
                  'Giải pháp khai thác nước lưu lượng cao cho nhà xưởng và trang trại quy mô lớn.'}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-white px-3 py-2 ring-1 ring-slate-100">
                  <p className="text-xl font-bold text-[#0a3f94]">50m³/h</p>
                  <p className="text-[11px] text-slate-500">Lưu lượng tiêu chuẩn</p>
                </div>
                <div className="rounded-xl bg-white px-3 py-2 ring-1 ring-slate-100">
                  <p className="text-xl font-bold text-[#0a3f94]">500m</p>
                  <p className="text-[11px] text-slate-500">Độ sâu khảo sát</p>
                </div>
              </div>
              <button className="mt-4 rounded-lg bg-[#0a3f94] px-4 py-2 text-xs font-semibold text-white">
                Yêu cầu báo giá 24/7 →
              </button>
            </article>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl bg-[#f1f3f9] p-5 ring-1 ring-slate-200">
              <span className="inline-flex rounded-lg bg-red-100 px-2 py-1 text-[10px] font-semibold text-red-700">
                🔧
              </span>
              <h3 className="mt-3 font-display text-3xl font-bold text-slate-900">Sửa chữa máy bơm nước</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {pumpService?.description ??
                  'Khắc phục nhanh sự cố máy bơm, thay thế linh kiện chính hãng và tối ưu điện năng vận hành.'}
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                <li>✓ Kiểm tra điện - cánh bơm - tụ</li>
                <li>✓ Vệ sinh cụm bơm và đầu hút</li>
                <li>✓ Bảo trì định kỳ theo tháng</li>
              </ul>
              <a href="/#lien-he" className="mt-4 inline-block text-xs font-semibold text-[#0a3f94]">
                Gọi ngay để kiểm tra →
              </a>
            </article>

            <article className="rounded-2xl bg-[#0a469f] p-5 text-white shadow-md">
              <span className="inline-flex rounded-lg bg-white/20 px-2 py-1 text-[10px] font-semibold">💦</span>
              <h3 className="mt-3 font-display text-3xl font-bold">Vệ sinh thổi rửa giếng</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-100">
                {homeWaterService?.description ??
                  'Làm sạch giếng định kỳ, xử lý cặn bẩn và khôi phục lưu lượng nước ổn định.'}
              </p>
              <button className="mt-5 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-[#0a3f94]">
                Đặt lịch bảo trì
              </button>
            </article>
          </div>
        </section>

        <section className="bg-[#ebeff7] py-14">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <h3 className="text-center font-display text-4xl font-bold text-slate-900">
              Quy Trình Thi Công Chuẩn Kỹ Thuật
            </h3>
            <p className="mt-2 text-center text-xs text-slate-500">
              Mỗi công trình được theo dõi để tối ưu chi phí và đảm bảo an toàn nguồn nước.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['01', 'Khảo sát địa tầng', 'Đánh giá địa chất và vị trí khoan phù hợp'],
                ['02', 'Khoan tạo lỗ', 'Triển khai đúng kỹ thuật, hạn chế ảnh hưởng xung quanh'],
                ['03', 'Lắp ống - Chống cát', 'Gia cố thành giếng, bảo vệ nguồn nước lâu dài'],
                ['04', 'Nghiệm thu - Bàn giao', 'Kiểm tra lưu lượng và hướng dẫn vận hành chi tiết'],
              ].map((step) => (
                <article key={step[0]} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-2xl font-bold text-slate-300">{step[0]}</p>
                  <h4 className="mt-1 text-sm font-semibold text-slate-900">{step[1]}</h4>
                  <p className="mt-2 text-xs text-slate-600">{step[2]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-4 pb-16 pt-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[920px] rounded-[28px] bg-gradient-to-r from-[#7c5727] to-[#9a6a30] px-8 py-10 text-center text-white shadow-lg shadow-amber-200/30">
            <h3 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              Bạn cần giải pháp nước sạch cho ngay hôm nay?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-amber-100">
              Đội ngũ kỹ sư sẵn sàng khảo sát trực tiếp và tư vấn phương án tối ưu chỉ sau 30 phút.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="tel:0912345678" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#7c5727]">
                0123.456.789
              </a>
              <a href="/#lien-he" className="rounded-full border border-white px-5 py-2 text-sm font-semibold text-white">
                Nhắn tin Zalo →
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterSection footerServices={footerServices} />
    </div>
  )
}

export default ServicesPage

