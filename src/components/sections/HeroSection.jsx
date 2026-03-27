import heroBackground from '../../assets/1667552228_may-khoan-gieng-thuy-luc-4.jpg'

function HeroSection() {
  return (
    <section id="trang-chu" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroBackground}
        alt="Giàn khoan giếng tại Phú Yên"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#073a83]/95 via-[#0b4ea7]/70 to-[#0b4ea7]/0" />
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1200px] items-center px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-xl animate-[fadeInUp_700ms_ease-out]">
          <span className="inline-flex rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700">
            Uy Tín Hàng Đầu Phú Yên
          </span>
          <h1 className="mt-4 font-display text-[42px] font-bold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            Khoan Giếng Máy Đập Hơi
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-blue-100 sm:text-base">
            Nhanh chóng - Giá rẻ - Uy tín. Mang nguồn nước sạch bền vững tới mọi
            công trình và hộ gia đình.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#lien-he"
              className="rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-blue-900 shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Liên hệ ngay
            </a>
            <a
              href="#dich-vu"
              className="rounded-lg border border-white/60 bg-slate-900/30 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur transition duration-300 hover:bg-slate-900/50"
            >
              Tư vấn miễn phí
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
