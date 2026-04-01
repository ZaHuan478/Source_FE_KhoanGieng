import SectionTitle from '../common/SectionTitle'
import { Phone } from 'lucide-react'

function ServicesSection() {
  return (
    <section id="dich-vu" className="bg-white py-14">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-center">
            <div className="h-px flex-1 bg-slate-300"></div>
            <div className="px-4 sm:px-6">
              <SectionTitle
                align="center"
                title="Khoan Giếng Phú Yên"
              />
            </div>
            <div className="h-px flex-1 bg-slate-300"></div>
          </div>

          <div className="mx-auto mt-5 max-w-3xl space-y-4 text-left text-sm leading-relaxed text-slate-700 sm:text-base lg:text-lg">
            <p>
              Dịch vụ khoan giếng tại Phú Yên là <strong className="font-semibold text-blue-700">giải pháp tối ưu</strong> cho nhu cầu cung cấp <strong className="font-semibold text-slate-900">nguồn nước sạch, ổn định và lâu dài</strong>. Với hơn 15 năm kinh nghiệm trong lĩnh vực khoan giếng, đội ngũ tại đây đã khẳng định được <strong className="font-semibold text-slate-900">uy tín và chất lượng</strong> qua hàng loạt công trình thực tế.
            </p>
            <p>
              Khách hàng khi lựa chọn dịch vụ sẽ được đảm bảo về sự <strong className="font-semibold text-blue-700">chuyên nghiệp, tận tâm và minh bạch</strong> trong từng khâu thực hiện. <strong className="font-semibold text-slate-900">Hệ thống máy móc hiện đại</strong> cùng công nghệ tiên tiến được áp dụng nhằm mang lại <strong className="font-semibold text-slate-900">hiệu quả cao, tiết kiệm thời gian và đảm bảo an toàn tuyệt đối</strong> trong quá trình thi công.
            </p>
            <p>
              Bên cạnh đó, dịch vụ còn cung cấp <strong className="font-semibold text-blue-700">tư vấn kỹ thuật chuyên sâu</strong>, <strong className="font-semibold text-slate-900">thiết kế hệ thống khai thác nước phù hợp</strong> với từng khu vực, cũng như hỗ trợ <strong className="font-semibold text-slate-900">bảo trì - bảo dưỡng định kỳ</strong>. Nhờ đó, nguồn nước luôn được duy trì ổn định, đáp ứng tốt nhu cầu sinh hoạt và sản xuất lâu dài cho khách hàng.
            </p>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col gap-3 sm:flex-row sm:items-center">
            <label htmlFor="consult-phone" className="sr-only">
              Số điện thoại tư vấn
            </label>
            <input
              id="consult-phone"
              type="tel"
              inputMode="numeric"
              placeholder="Để lại số điện thoại để được tư vấn"
              className="h-12 flex-1 rounded-full border border-slate-300 bg-white px-5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <a
              href="tel:0912345678"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              <Phone className="h-5 w-5" />
              <span className="ml-2">Gọi ngay</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
