import { useEffect, useState } from 'react'
import FooterSection from '../components/sections/FooterSection'
import Header from '../components/sections/Header'
import InputField from '../components/common/InputField'
import { footerServices, navItems } from '../data/siteContent'

function ContactPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="bg-[#f3f5fb] text-slate-900">
      <Header scrolled={scrolled} navItems={navItems} />

      <main className="pt-20">
        <section className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=2000&q=80"
            alt="Nền liên hệ"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/85" />
          <div className="relative mx-auto w-full max-w-[1200px] px-4 py-14 text-center sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl font-bold text-[#083b88] sm:text-5xl">
              Liên hệ với chúng tôi
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
              Chúng tôi sẵn sàng lắng nghe và hỗ trợ bạn 24/7. Giải pháp nguồn nước bền vững từ lòng
              đất Phú Yên.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Thông tin liên hệ
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold text-slate-900">
                  Gắn kết cộng đồng qua nguồn nước sạch
                </h2>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl bg-[#eef1f8] p-4">
                    <p className="text-[10px] uppercase tracking-wide text-slate-500">Địa chỉ văn phòng</p>
                    <p className="mt-1 text-xs text-slate-700">123 Trần Hưng Đạo, TP. Tuy Hòa, Phú Yên</p>
                  </div>

                  <div className="rounded-xl bg-[#eef1f8] p-4">
                    <p className="text-[10px] uppercase tracking-wide text-slate-500">Hotline 24/7</p>
                    <p className="mt-1 font-display text-3xl font-bold text-[#083b88]">0912 345 678</p>
                  </div>

                  <div className="rounded-xl bg-[#eef1f8] p-4">
                    <p className="text-[10px] uppercase tracking-wide text-slate-500">Email hỗ trợ</p>
                    <p className="mt-1 text-xs text-slate-700">info@khoangiengphuyen.com</p>
                  </div>

                  <div className="rounded-xl bg-[#eef1f8] p-4">
                    <p className="text-[10px] uppercase tracking-wide text-slate-500">Thời gian làm việc</p>
                    <p className="mt-1 text-xs text-slate-700">Hoạt động 24/7 (kể cả ngày lễ)</p>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl bg-[#0a469f] p-5 text-white shadow-md">
                <h3 className="font-display text-xl font-bold">Khảo sát địa chất miễn phí</h3>
                <p className="mt-2 text-xs leading-relaxed text-blue-100">
                  Nhận tư vấn nhanh, đo tầng nước và gợi ý phương án tối ưu theo khu vực của bạn.
                </p>
                <a href="/dich-vu" className="mt-4 inline-flex text-xs font-semibold text-white">
                  Tìm hiểu quy trình →
                </a>
              </article>
            </div>

            <form className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-6">
              <h3 className="font-display text-2xl font-bold text-slate-900">Gửi lời nhắn cho chúng tôi</h3>
              <p className="mt-2 text-xs text-slate-600">
                Điền thông tin cơ bản, kỹ thuật viên sẽ liên hệ xác nhận trong thời gian sớm nhất.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <InputField label="Họ và tên" placeholder="Nguyễn Văn A" />
                <InputField label="Số điện thoại" placeholder="09xx xxx xxx" />
              </div>

              <div className="mt-4">
                <InputField label="Địa chỉ email" placeholder="email@vi-du.com" />
              </div>

              <label className="mt-4 block">
                <span className="text-[11px] font-medium text-slate-600">Chọn dịch vụ cần tư vấn</span>
                <select className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-xs text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
                  <option>Khoan giếng gia đình</option>
                  <option>Khoan giếng công nghiệp</option>
                  <option>Sửa chữa máy bơm</option>
                  <option>Vệ sinh thổi rửa giếng</option>
                </select>
              </label>

              <label className="mt-4 block">
                <span className="text-[11px] font-medium text-slate-600">Nội dung chi tiết</span>
                <textarea
                  rows="5"
                  placeholder="Hãy mô tả nhu cầu của bạn..."
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-xs text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0a3f94] px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-200/50 transition hover:bg-blue-800"
              >
                Gửi lời nhắn <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-4 pb-8 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
            <iframe
              title="Bản đồ Tuy Hòa"
              src="https://www.google.com/maps?q=Tp.%20Tuy%20H%C3%B2a%2C%20Ph%C3%BA%20Y%C3%AAn&output=embed"
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#eef1f8] p-5 ring-1 ring-slate-200 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold text-slate-900">Hỗ trợ kỹ thuật khẩn cấp?</p>
              <p className="mt-1 text-xs text-slate-600">
                Đội ngũ kỹ thuật viên sẵn sàng có mặt sau 30 phút yêu cầu.
              </p>
            </div>
            <a
              href="tel:0912345678"
              className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
            >
              Yêu cầu khẩn cấp
            </a>
          </div>
        </section>
      </main>

      <FooterSection footerServices={footerServices} />
    </div>
  )
}

export default ContactPage

