import { Link } from 'react-router-dom'

function CtaBannerSection() {
  return (
    <section id="bang-gia" className="bg-blue-900 py-14">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-bold text-white">
            Báo giá minh bạch & Tối ưu
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-blue-100">
            Chi phí phụ thuộc vào độ sâu, từng địa chất và loại máy bơm. Chúng tôi cam kết
            giá chi tiết sau khi khảo sát miễn phí.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/bang-gia"
            className="rounded-lg bg-white px-5 py-2 text-xs font-semibold text-blue-900 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
          >
            Xem bảng giá chi tiết
          </Link>
          <span className="text-xs text-blue-100">Hỗ trợ 24/7</span>
        </div>
      </div>
    </section>
  )
}

export default CtaBannerSection
