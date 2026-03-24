import FeatureStat from '../common/FeatureStat'
import SectionTitle from '../common/SectionTitle'
import whyChooseImage from '../../assets/Dich-vu-khoan-gieng-cong-nghiep-2.jpg'

function WhyChooseUsSection({ whyStats, whyPoints }) {
  return (
    <section id="gioi-thieu" className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-4 rounded-none bg-transparent lg:grid-cols-[1.1fr_1.2fr]">
        <div className="rounded-2xl bg-slate-100 p-5 sm:p-6">
          <SectionTitle
            align="left"
            title="Tại sao chọn Khoan Giếng Phú Yên?"
            subtitle={whyPoints[0]}
          />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {whyStats.map((stat) => (
              <FeatureStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
          <img
            src={whyChooseImage}
            alt="Kỹ thuật viên đang thi công khoan giếng"
            className="h-72 w-full rounded-xl object-cover"
          />
          <div className="grid gap-3">
            <div className="rounded-xl bg-blue-800 p-4 text-white">
              <p className="text-[11px] uppercase tracking-wider text-blue-200">01</p>
              <p className="mt-1 font-display text-sm font-semibold">Giá cả cạnh tranh</p>
              <p className="mt-2 text-xs text-blue-100">
                Cam kết giá tốt nhất khu vực Phú Yên, không chi phí phát sinh.
              </p>
            </div>
            <div className="rounded-xl bg-amber-700 p-4 text-white">
              <p className="text-[11px] uppercase tracking-wider text-amber-200">02</p>
              <p className="mt-1 font-display text-sm font-semibold">Phục vụ 24/7</p>
              <p className="mt-2 text-xs text-amber-100">
                Sẵn sàng có mặt ngay khi gặp sự cố
                về nguồn nước.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
