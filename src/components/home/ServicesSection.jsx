import { useState } from 'react'
import { ArrowRight, ChevronRight, Phone } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import { homeFeatureTiles } from '../../data/homeFeatureTiles'

function ServicesSection({ mediaImages = {} }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const featureTiles = homeFeatureTiles.map((tile) => ({
    ...tile,
    image: mediaImages[tile.imageKey]?.url,
    alt: mediaImages[tile.imageKey]?.alt || tile.alt,
  }))
  const activeTile = featureTiles[activeIndex]

  return (
    <section id="dich-vu" className="ambient-section relative overflow-hidden py-14">
      <div className="absolute inset-x-0 top-0 h-px bg-[var(--soft-border)]" />
      <div className="mx-auto grid w-full max-w-300 gap-7 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle
            align="left"
            eyebrow="Dịch vụ trọng tâm"
            title="Tìm đúng mạch nước trước khi bắt đầu khoan."
            subtitle="Trường Giang kết hợp khảo sát thực địa, máy khoan chuyên dụng và quy trình bàn giao rõ ràng để nguồn nước khai thác ổn định lâu dài."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {featureTiles.map((tile, index) => (
              <button
                key={tile.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-lg border p-4 text-left transition duration-300 ${
                  index === activeIndex
                    ? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_18px_44px_rgba(10,102,194,0.18)]'
                    : 'border-[var(--soft-border)] bg-[var(--soft-surface)] text-[var(--page-text)] hover:bg-[var(--soft-surface-strong)]'
                }`}
              >
                <span className="text-xs font-extrabold uppercase">0{index + 1}</span>
                <span className="mt-2 block text-base font-extrabold leading-6">{tile.title}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:0945455458"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[var(--nav-active)] px-4 text-sm font-extrabold text-[var(--nav-active-text)] transition hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              0945 455 458
            </a>
            <a
              href="#bao-gia"
              className="soft-surface inline-flex h-11 items-center gap-2 rounded-lg px-4 text-sm font-bold text-[var(--page-text)] transition hover:bg-[var(--soft-surface-strong)]"
            >
              Nhận tư vấn
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="soft-surface rounded-[22px] p-3 sm:p-4">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-slate-900">
            {activeTile?.image ? (
              <img
                src={activeTile.image}
                alt={activeTile.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-slate-800" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/18 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <p className="eyebrow text-sky-200">Hạng mục 0{activeIndex + 1}</p>
              <h3 className="mt-3 max-w-xl font-display text-4xl font-extrabold leading-none text-white sm:text-5xl">
                {activeTile?.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-white/78 sm:text-base">
                {activeTile?.description}
              </p>
            </div>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {featureTiles.slice(0, 3).map((tile, index) => (
              <button
                key={tile.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group flex h-20 items-center gap-3 rounded-lg border border-[var(--soft-border)] bg-[var(--soft-surface)] px-3 text-left text-[var(--page-text)] transition hover:bg-[var(--soft-surface-strong)]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/14 text-xs font-extrabold">
                  0{index + 1}
                </span>
                <span className="line-clamp-2 text-sm font-bold leading-5">{tile.title}</span>
                <ChevronRight className="accent-text ml-auto h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
