import { ArrowDown, Drill, Phone } from 'lucide-react'

function ServicesHero({ scrollToDetail, image }) {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-32 text-center sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(10,102,194,0.18),transparent_20rem),radial-gradient(circle_at_78%_76%,rgba(14,165,233,0.16),transparent_24rem)]" />
      {/* {image?.url ? (
        <img
          src={image.url}
          alt={image.alt || 'He thong thi cong khoan gieng'}
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[360px] w-[min(92%,980px)] rounded-[24px] object-cover opacity-16"
        />
      ) : null} */}

      <div className="relative mx-auto flex min-h-[440px] max-w-5xl flex-col items-center justify-center">
        <span className="soft-surface inline-flex h-8 items-center gap-2 rounded-full px-4 text-[10px] font-extrabold uppercase tracking-[0.34em] text-[var(--muted-text)]">
          <Drill className="h-3.5 w-3.5 accent-text" />
          Service System
        </span>
        <h1 className="mt-7 text-balance font-display text-[clamp(3rem,7vw,6.4rem)] font-extrabold uppercase leading-[0.9] text-[var(--page-text)]">
          Giải pháp
          <span className="accent-text block italic normal-case">nguồn nước</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-8 text-[var(--muted-text)]">
          Từ khảo sát địa tầng, khoan giếng đến lắp đặt hệ thống bơm và điện hoàn chỉnh,
          chúng tôi cung cấp một quy trình rõ ràng cho từng công trình.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <button
            onClick={scrollToDetail}
            className="inline-flex h-14 cursor-pointer items-center gap-3 rounded-[15px] border-none bg-[var(--accent)] px-6 text-base font-extrabold text-white shadow-[0_18px_38px_rgba(10,102,194,0.24)] transition hover:-translate-y-0.5"
          >
            Xem dịch vụ
            <ArrowDown className="h-5 w-5" />
          </button>
          <a
            href="tel:0945455458"
            className="soft-surface inline-flex h-14 items-center gap-3 rounded-[15px] px-6 text-base font-extrabold text-[var(--page-text)] transition hover:-translate-y-0.5"
          >
            <Phone className="h-5 w-5 accent-text" />
            0945 455 458
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero
