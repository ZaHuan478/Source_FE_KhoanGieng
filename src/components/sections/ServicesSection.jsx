import SectionTitle from '../common/SectionTitle'

function ServicesSection() {
  return (
    <section id="dich-vu" className="bg-white py-14">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            align="center"
            title="Khoan Giếng Phú Yên"
          />

          <div className="mx-auto mt-5 max-w-3xl space-y-4 text-left text-sm leading-relaxed text-slate-700 sm:text-base lg:text-lg">
            <p>
              Dịch vụ khoan giếng tại Phú Yên là giải pháp tối ưu cho nhu cầu cung cấp nguồn nước sạch, ổn định và lâu dài. Với hơn 15 năm kinh nghiệm trong lĩnh vực khoan giếng, đội ngũ tại đây đã khẳng định được uy tín và chất lượng qua hàng loạt công trình thực tế.
            </p>
            <p>
              Khách hàng khi lựa chọn dịch vụ sẽ được đảm bảo về sự chuyên nghiệp, tận tâm và minh bạch trong từng khâu thực hiện. Hệ thống máy móc hiện đại cùng công nghệ tiên tiến được áp dụng nhằm mang lại hiệu quả cao, tiết kiệm thời gian và đảm bảo an toàn tuyệt đối trong quá trình thi công.
            </p>
            <p>
              Bên cạnh đó, dịch vụ còn cung cấp tư vấn kỹ thuật chuyên sâu, thiết kế hệ thống khai thác nước phù hợp với từng khu vực, cũng như hỗ trợ bảo trì - bảo dưỡng định kỳ. Nhờ đó, nguồn nước luôn được duy trì ổn định, đáp ứng tốt nhu cầu sinh hoạt và sản xuất lâu dài cho khách hàng.
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
              Gọi ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
