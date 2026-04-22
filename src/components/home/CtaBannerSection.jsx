import { Link } from 'react-router-dom'

function CtaBannerSection() {
  return (
    <section id="bao-gia" className="bg-white py-14">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border-2 border-blue-300/40 bg-gradient-to-r from-[#0a469f] to-[#1f67c8] px-8 py-10 text-center text-white shadow-lg shadow-blue-950/30">
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Báo giá minh bạch
            <span className="block">
              tối ưu cho từng công trình
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
            Chi phí phụ thuộc vào độ sâu, từng địa chất và loại máy bơm. Chúng tôi cam kết
            giá chi tiết sau khi khảo sát miễn phí.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/dich-vu#yeu-cau-bao-gia"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0a469f] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Yêu cầu báo giá chi tiết
            </Link>

            <span className="rounded-full border border-white/80 px-5 py-2 text-sm font-semibold text-white">
              Hỗ trợ 24/7
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaBannerSection
