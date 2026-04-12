import { Phone } from 'lucide-react'

function ServicesHero({ scrollToDetail }) {
  return (
    <section className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=80"
        alt="Hệ thống ống nước công nghiệp"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a2870]/96 to-[#0a2870]/60" />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 py-[72px] sm:px-6 lg:px-8">
        <span className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-blue-100">
          Giải pháp dịch vụ
        </span>

        <h1 className="mb-3.5 max-w-[560px] font-display text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-[1.1] tracking-tight text-white">
          Giải Pháp Nguồn Nước<br />Bền Vững
        </h1>

        <p className="mb-7 max-w-[480px] text-[0.9rem] leading-relaxed text-blue-100">
          Từ khảo sát địa tầng, khoan giếng đến lắp đặt hệ thống bơm và điện hoàn chỉnh —
          chúng tôi cung cấp giải pháp trọn gói cho gia đình và doanh nghiệp.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={scrollToDetail}
            className="cursor-pointer rounded-full border-none bg-white px-6 py-[11px] text-[0.85rem] font-bold text-[#0a3f94] shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-opacity hover:opacity-90"
          >
            Xem dịch vụ →
          </button>
          <a
            href="tel:0945455458"
            className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-[11px] text-[0.85rem] font-semibold text-white no-underline"
          >
            <Phone size={15} />
            0945 455 458
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero