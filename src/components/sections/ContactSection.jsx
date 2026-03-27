import InputField from '../common/InputField'
import { LocationPinIcon, PhoneIcon } from '../common/Icons'
import SectionTitle from '../common/SectionTitle'
import TextareaField from '../common/TextareaField'

function ContactSection() {
  return (
    <section id="lien-he" className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <SectionTitle
            align="left"
            title="Kết nối với chúng tôi"
            subtitle="Đừng ngại gọi liên hệ để nhận tư vấn kỹ thuật và báo giá chính xác nhất cho khu vực của bạn."
          />
          <div className="space-y-5 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b4b93] text-white">
                <PhoneIcon />
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 sm:text-sm">Hotline 24/7</p>
                <p className="mt-1 font-display text-2xl font-bold leading-none text-[#0b4b93] sm:text-xl">0912 345 678</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8b622f] text-white">
                <LocationPinIcon />
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-700 sm:text-sm">Địa chỉ văn phòng</p>
                <p className="mt-1 text-base font-semibold leading-tight text-slate-800 sm:text-xl">
                  123 Trịnh Hưng Đạo, TP. Tuy Hòa, Phú Yên
                </p>
              </div>
            </div>
          </div>
          <div className="h-44 overflow-hidden rounded-xl bg-gradient-to-r from-slate-300 to-slate-200">
            <div className="flex h-full items-center justify-center text-xs text-slate-700">
              Vị trí bản đồ
            </div>
          </div>
        </div>

        <form className="rounded-2xl bg-slate-50 p-5 shadow-lg shadow-slate-300 sm:p-6">
          <h3 className="font-display text-2xl font-bold text-slate-900">Yêu cầu tư vấn</h3>
          <div className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <InputField
                label="Họ và tên"
                placeholder="Nhập họ và tên"
                labelClassName="text-[#A67C52]"
              />
              <InputField
                label="Số điện thoại"
                placeholder="Nhập số điện thoại"
                labelClassName="text-[#A67C52]"
              />
            </div>
            <InputField
              label="Địa chỉ"
               placeholder="Nhập địa chỉ"
              labelClassName="text-[#A67C52]"
            />
            <TextareaField
              label="Nội dung"
              placeholder="Mô tả nhu cầu khoan giếng của bạn"
              rows={4}
              labelClassName="text-[#A67C52]"
              textareaClassName="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-xs text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-blue-800 px-5 py-3 text-xs font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Gửi yêu cầu ngay
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
