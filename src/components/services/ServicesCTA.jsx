import { Send } from 'lucide-react'
import InputField from '../common/InputField'
import TextareaField from '../common/TextareaField'

function ServicesCTA() {
  return (
    <section id="yeu-cau-bao-gia" className="mx-auto mt-8 w-full max-w-4xl px-4 pb-16 sm:mt-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
        <h3 className="font-display text-3xl font-bold text-[#083b88] sm:text-[2rem]">Yêu Cầu Báo Giá Chi Tiết</h3>

        <form className="mt-5 space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <InputField
              label="Họ và tên"
              placeholder="Nguyễn Văn A"
              labelClassName="text-[11px] font-medium uppercase tracking-wide text-[#D1A275]"
            />
            <InputField
              label="Số điện thoại"
              placeholder="0905 XXX XXX"
              labelClassName="text-[11px] font-medium uppercase tracking-wide text-[#D1A275]"
            />
          </div>

          <InputField
            label="Địa chỉ thi công"
            placeholder="Huyện/Thành phố tại Phú Yên"
            labelClassName="text-[11px] font-medium uppercase tracking-wide text-[#D1A275]"
          />

          <TextareaField
            label="Ghi chú yêu cầu"
            rows={3}
            placeholder="Ví dụ: Khoan giếng gia đình, độ sâu dự kiến 40m..."
            labelClassName="text-[11px] font-medium uppercase tracking-wide text-[#D1A275]"
            textareaClassName="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-700"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            <Send className="h-4 w-4" />
            Gửi yêu cầu báo giá
          </button>
        </form>
      </div>
    </section>
  )
}

export default ServicesCTA