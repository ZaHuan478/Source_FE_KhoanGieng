import { useEffect, useState } from 'react'
import FooterSection from '../components/sections/FooterSection'
import Header from '../components/sections/Header'
import { footerServices, navItems, pricingPlans } from '../data/siteContent'

function PricingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="bg-[#f2f4fa] text-slate-900">
      <Header scrolled={scrolled} navItems={navItems} />

      <main className="pt-20">
        <section className="mx-auto grid w-full max-w-[1280px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="inline-flex rounded-full bg-amber-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700">
              Minh bạch & uy tín
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[0.95] text-[#06338a] sm:text-6xl">
              Bảng Giá
              <span className="block text-[#7a5124]">Dịch Vụ Khoan Giếng</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              Chúng tôi cung cấp giải pháp khai thác nước ngầm chuyên nghiệp tại Phú Yên với
              chi phí cạnh tranh, rõ ràng và không phát sinh chi phí ngoài hợp đồng.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=1200&q=80"
              alt="Máy khoan giếng ngoài đồng"
              className="h-[470px] w-full rounded-3xl object-cover"
            />
            <div className="absolute -bottom-7 left-8 rounded-2xl bg-white px-5 py-4 shadow-lg">
              <p className="text-sm font-semibold text-slate-800">Cam ket 100%</p>
              <p className="text-xs text-slate-500">Có nước mới tính phí</p>
            </div>
          </div>
        </section>

        <section className="bg-[#eef1f8] py-16">
          <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-5xl font-bold text-[#06338a] sm:text-4xl">
              Chi Phí Khoan Giếng Gia Đình
            </h2>
            <p className="mt-3 text-center text-sm text-slate-600">
              Báo giá tham khảo dựa trên đường kính ống và độ sâu phổ biến tại khu vực Phú Yên
            </p>

            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={`rounded-3xl border px-6 py-6 shadow-sm ${
                    plan.featured
                      ? 'border-blue-900 bg-blue-900 text-white shadow-xl shadow-blue-900/25'
                      : 'border-slate-200 bg-white text-slate-900'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                      <p className={`mt-1 text-sm ${plan.featured ? 'text-blue-100' : 'text-slate-500'}`}>
                        {plan.subtitle}
                      </p>
                    </div>
                    {plan.badge && (
                      <span className="rounded-full bg-amber-300 px-3 py-1 text-[11px] font-semibold text-slate-900">
                        Phổ biến nhất
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex items-end gap-2">
                    <span className="font-display text-5xl font-bold">{plan.price}</span>
                    <span className={`pb-1 text-sm ${plan.featured ? 'text-blue-100' : 'text-slate-500'}`}>
                      /giếng
                    </span>
                  </div>

                  <p className={`mt-2 text-xs ${plan.featured ? 'text-blue-100' : 'text-slate-500'}`}>
                    {plan.depth}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <span
                          className={`mt-1 h-4 w-4 rounded-full text-center text-[10px] leading-4 ${
                            plan.featured ? 'bg-white text-blue-900' : 'bg-green-100 text-green-700'
                          }`}
                        >
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={`mt-7 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      plan.featured
                        ? 'bg-white text-blue-900 hover:bg-blue-50'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-[#e9edf7] lg:grid-cols-2">
            <div className="p-8">
              <h3 className="font-display text-4xl font-bold text-[#083b88]">Yêu Cầu Báo Giá Chi Tiết</h3>
              <p className="mt-3 text-sm text-slate-600">
                Để lại thông tin, đội ngũ kỹ thuật của chúng tôi sẽ liên hệ khảo sát địa hình và báo giá
                chính xác trong vòng 24h.
              </p>

              <form className="mt-6 space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    Họ và tên
                    <input
                      type="text"
                      defaultValue="Nguyễn Văn A"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-700"
                    />
                  </label>
                  <label className="block text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    Số điện thoại
                    <input
                      type="text"
                      defaultValue="0905 XXX XXX"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-700"
                    />
                  </label>
                </div>

                <label className="block text-[11px] font-medium uppercase tracking-wide text-slate-500">
                  Địa chỉ thi công
                  <input
                    type="text"
                    defaultValue="Huyện/Thành phố tại Phú Yên"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-700"
                  />
                </label>

                <label className="block text-[11px] font-medium uppercase tracking-wide text-slate-500">
                  Ghi chú yêu cầu
                  <textarea
                    rows="3"
                    defaultValue="Ví dụ: Khoan giếng gia đình, độ sâu dự kiến 40m..."
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-700"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Gửi yêu cầu báo giá
                </button>
              </form>
            </div>

            <img
              src="https://images.unsplash.com/photo-1581091870622-2d17a42be38c?auto=format&fit=crop&w=1200&q=80"
              alt="Kỹ sư khảo sát công trình"
              className="h-full min-h-[520px] w-full object-cover"
            />
          </div>
        </section>
      </main>

      <FooterSection footerServices={footerServices} />
    </div>
  )
}

export default PricingPage
