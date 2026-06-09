import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

function CtaBannerSection() {
  return (
    <section id="bao-gia" className="ambient-section py-14">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="soft-surface grid gap-8 rounded-[24px] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Báo giá minh bạch</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-extrabold italic leading-none text-[var(--page-text)] sm:text-6xl">
              Chi phí rõ theo độ sâu, địa chất và cấu hình bơm.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted-text)] sm:text-base">
              Chúng tôi khảo sát trước, tư vấn phương án phù hợp và gửi báo giá chi tiết trước khi
              thi công để khách hàng chủ động ngân sách.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              to="/dich-vu#yeu-cau-bao-gia"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 text-sm font-extrabold text-white shadow-[0_18px_38px_rgba(10,102,194,0.2)] transition hover:-translate-y-0.5"
            >
              Yêu cầu báo giá
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:0945455458"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[var(--soft-border)] bg-[var(--soft-surface)] px-5 text-sm font-bold text-[var(--page-text)] backdrop-blur transition hover:bg-[var(--soft-surface-strong)]"
            >
              <Phone className="h-4 w-4" />
              Gọi tư vấn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaBannerSection
