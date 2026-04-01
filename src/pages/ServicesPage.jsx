import { useEffect, useState } from 'react'
import FooterSection from '../components/sections/FooterSection'
import Header from '../components/sections/Header'
import { footerServices, navItems, services } from '../data/siteContent'
import { Phone } from 'lucide-react'
import serviceVideo from '../assets/FSave.com_Facebook_Media_001_1769879670842480v.mp4'

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

      <main className="pt-14">
        <section className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=80"
            alt="Hệ thống ống nước công nghiệp"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b3f95]/95 " />
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
              <h2 className="mt-3 font-display text-3xl font-bold text-slate-900">Khoan giếng gia đình</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {drillService?.description ??
                  'Khoan giếng công nghiệp, gia đình với công nghệ hiện đại, độ sâu tối ưu.'}
              </p>
              <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm text-slate-600 marker:text-slate-700">
                <li>Tối ưu chi phí đầu tư</li>
                <li>Độ sâu tùy tầng địa chất</li>
                <li>Thi công sạch, không ngập nền</li>
              </ul>
              <button className="mt-4 rounded-lg bg-[#0a3f94] px-4 py-2 text-xs font-semibold text-white">
                Nhận tư vấn báo giá →
              </button>
            </article>

            <div className="relative">
              <video
                src={serviceVideo}
                className="h-80 w-full rounded-2xl bg-black object-contain"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                Trinh duyet cua ban khong ho tro the video.
              </video>
              <a
                href="tel:0912345678"
                className="absolute bottom-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0a3f94] text-sm text-white shadow-lg"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#f3f5fb] py-14">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <div className="h-px flex-1 bg-slate-300" />
              <h3 className="px-4 text-center font-display text-4xl font-bold text-slate-900">
                Quy Trình Thi Công Chuẩn Kỹ Thuật
              </h3>
              <div className="h-px flex-1 bg-slate-300" />
            </div>
            <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-500">
              Mỗi công trình được theo dõi để tối ưu chi phí và đảm bảo an toàn nguồn nước.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['01', 'Khảo sát địa tầng', 'Đánh giá địa chất và vị trí khoan phù hợp'],
                ['02', 'Khoan tạo lỗ', 'Triển khai đúng kỹ thuật, hạn chế ảnh hưởng xung quanh'],
                ['03', 'Lắp ống - Chống cát', 'Gia cố thành giếng, bảo vệ nguồn nước lâu dài'],
                ['04', 'Nghiệm thu - Bàn giao', 'Kiểm tra lưu lượng và hướng dẫn vận hành chi tiết'],
              ].map((step) => (
                <article
                  key={step[0]}
                  className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#0a3f94] to-[#2d6ccb]" />
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0a3f94] text-sm font-bold text-white">
                    {step[0]}
                  </div>
                  <h4 className="mt-3 text-base font-semibold leading-snug text-slate-900">{step[1]}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step[2]}</p>
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
              <a href="tel:0912345678" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#7c5727]">
                <Phone className="h-4 w-4" />
                <span>0945 455 458</span>
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

