import { ArrowRight, Radio, Waves } from 'lucide-react'

function HeroSection({ image }) {
  return (
    <section id="trang-chu" className="relative overflow-hidden px-4 pt-24 text-center sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(10,102,194,0.18),transparent_18rem),radial-gradient(circle_at_78%_70%,rgba(56,189,248,0.18),transparent_24rem)]" />
      <div className="relative mx-auto flex min-h-[calc(100svh-5.5rem)] max-w-6xl flex-col items-center justify-center pb-12">
        <span className="soft-surface inline-flex h-8 items-center gap-2 rounded-full px-4 text-[10px] font-extrabold uppercase tracking-[0.34em] text-[var(--muted-text)]">
          <Radio className="h-3.5 w-3.5 accent-text" />
          Water Source Experience
        </span>

        <h1 className="mt-7 text-balance font-display text-[clamp(3.2rem,8vw,7.4rem)] font-extrabold uppercase leading-[0.88] text-[var(--page-text)]">
          Khoan giếng
          <span className="accent-text block italic normal-case">Phú Yên</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-balance text-base font-semibold leading-8 text-[var(--muted-text)] sm:text-lg">
          Khảo sát mạch nước, thi công khoan giếng và lắp đặt hệ thống bơm trọn gói cho gia đình,
          nông trại và công trình sản xuất.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="#lien-he"
            className="inline-flex h-14 items-center gap-3 rounded-[15px] bg-[var(--accent)] px-6 text-base font-extrabold text-white shadow-[0_18px_38px_rgba(10,102,194,0.24)] transition hover:-translate-y-0.5"
          >
            <Waves className="h-5 w-5" />
            Bắt đầu ngay
          </a>
          <a
            href="#dich-vu"
            className="soft-surface inline-flex h-14 items-center gap-3 rounded-[15px] px-6 text-base font-extrabold text-[var(--page-text)] transition hover:-translate-y-0.5"
          >
            Xem dịch vụ
            <ArrowRight className="h-5 w-5 accent-text" />
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-sm grid-cols-3 divide-x divide-[var(--soft-border)] text-center">
          {[
            ['15+', 'năm kinh nghiệm'],
            ['24/7', 'hỗ trợ'],
            ['1K+', 'khách hàng'],
          ].map(([value, label]) => (
            <div key={value} className="px-4">
              <p className="text-2xl font-extrabold text-[var(--accent)]">{value}</p>
              <p className="mt-1 text-[10px] font-bold uppercase text-[var(--muted-text)]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* {image?.url ? (
        <img
          src={image.url}
          alt={image.alt || 'Gian khoan gieng tai Phu Yen'}
          className="pointer-events-none absolute bottom-0 right-0 hidden h-[58svh] max-h-[620px] w-[42vw] max-w-[760px] object-cover object-center opacity-20 mix-blend-multiply dark:mix-blend-screen lg:block"
        />
      ) : null} */}
    </section>
  )
}

export default HeroSection
