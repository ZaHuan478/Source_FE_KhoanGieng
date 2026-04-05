import { useEffect, useState } from 'react'
import FooterSection from '../components/sections/FooterSection'
import Header from '../components/sections/Header'
import InputField from '../components/common/InputField'
import SelectField from '../components/common/SelectField'
import TextareaField from '../components/common/TextareaField'
import { footerServices, navItems } from '../data/siteContent'
import { MapPinHouse } from 'lucide-react';
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react';

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

      <main className="pt-10">
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
                  CTY TNHH TRƯỜNG GIANG
                </h2>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl bg-[#eef1f8] p-4">
                    <div className="flex items-center gap-2">
                      <MapPinHouse className="h-5 w-5 text-slate-500" />
                      <p className="text-base font-bold uppercase tracking-wide text-[#115CB9]">Địa chỉ văn phòng</p>
                    </div>
                    <p className="mt-2 text-xs text-slate-700">Số 165 Hùng Vương, Phường Tuy Hòa, Tỉnh Đắk Lắk, Việt Nam</p>
                  </div>

                  <div className="rounded-xl bg-[#eef1f8] p-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-slate-500" />
                      <p className="text-base font-bold uppercase tracking-wide text-[#115CB9]">Hotline 24/7</p>
                    </div>
                    <p className="mt-1 font-display text-xl font-bold text-[#083b88]">0945 455 458</p>
                  </div>

                  <div className="rounded-xl bg-[#eef1f8] p-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-slate-500" />
                      <p className="text-base font-bold uppercase tracking-wide text-[#115CB9]">Email hỗ trợ</p>
                    </div>
                    <p className="mt-1 text-xs text-slate-700">huan1234@gmail.com</p>
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

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <InputField
                  label="HỌ VÀ TÊN"
                  placeholder="Nguyễn Văn A"
                  labelClassName="text-[11px] font-medium uppercase tracking-wide text-[#976F46]"
                />
                <InputField
                  label="SỐ ĐIỆN THOẠI"
                  placeholder="09xx xxx xxx"
                  labelClassName="text-[11px] font-medium uppercase tracking-wide text-[#976F46]"
                />
              </div>

              <div className="mt-4">
                <InputField
                  label="ĐỊA CHỈ EMAIL"
                  placeholder="email@vi-du.com"
                  labelClassName="text-[11px] font-medium uppercase tracking-wide text-[#976F46]"
                />
              </div>

              <div className="mt-4">
                <SelectField
                  label="CHỌN DỊCH VỤ CẦN TƯ VẤN"
                  options={[
                    'Khoan giếng gia đình',
                    'Khoan giếng công nghiệp',
                    'Sửa chữa máy bơm',
                  ]}
                  labelClassName="text-[11px] font-medium uppercase tracking-wide text-[#976F46]"
                  selectClassName="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-xs text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="mt-4">
                <TextareaField
                  label="NỘI DUNG CHI TIẾT"
                  rows={5}
                  placeholder="Hãy mô tả nhu cầu của bạn..."
                  labelClassName="text-[11px] font-medium uppercase tracking-wide text-[#976F46]"
                  textareaClassName="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-xs text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1157810649183!2d109.31086547572428!3d13.091848012229157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316fec38c83a83cf%3A0x5a80759cf7e0ad24!2zQ8O0bmcgdHkgVE5ISCBUcsaw4budbmcgR2lhbmc!5e0!3m2!1svi!2s!4v1774990373481!5m2!1svi!2s"
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <FooterSection footerServices={footerServices} />
    </div>
  )
}

export default ContactPage

