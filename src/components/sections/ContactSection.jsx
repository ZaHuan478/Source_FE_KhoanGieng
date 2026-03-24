import InputField from '../common/InputField'
import SectionTitle from '../common/SectionTitle'

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
          <div className="rounded-xl bg-[#eceff6] p-4">
            <p className="text-[10px] uppercase tracking-wide text-slate-500">Hotline 24/7</p>
            <p className="mt-1 font-display text-3xl font-bold text-[#083b88]">0912 345 678</p>
          </div>
          <div className="rounded-xl bg-[#eceff6] p-4">
            <p className="text-[10px] uppercase tracking-wide text-slate-500">Địa chỉ văn phòng</p>
            <p className="mt-1 text-xs text-slate-700">123 Trịnh Hưng Đạo, TP. Tuy Hòa, Phú Yên</p>
          </div>
          <div className="h-44 overflow-hidden rounded-xl bg-gradient-to-r from-slate-300 to-slate-200">
            <div className="flex h-full items-center justify-center text-xs text-slate-700">
              Vị trí bản đồ
            </div>
          </div>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-lg shadow-slate-300 sm:p-6">
          <h3 className="font-display text-2xl font-bold text-slate-900">Yêu cầu tư vấn</h3>
          <p className="mt-2 text-xs text-slate-600">
            Để lại thông tin, chúng tôi sẽ liên hệ để tư vấn giải pháp phù hợp nhất.
          </p>
          <div className="mt-6 space-y-4">
            <InputField label="Họ và tên" placeholder="Nhập họ và tên" />
            <InputField label="Số điện thoại" placeholder="Nhập số điện thoại" />
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Nội dung</span>
              <textarea
                rows="4"
                placeholder="Mô tả nhu cầu khoan giếng của bạn"
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-xs text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </label>
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
