import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  Gauge,
  Info,
  MapPinned,
  Ruler,
  Settings2,
} from 'lucide-react'

import { Header, FooterSection } from '../components/layout'
import { equipmentDetails } from '../data/aboutData'
import { footerServices, navItems } from '../data/siteContent'
import { useMediaAssets } from '../hooks/useMediaAssets'

const statIcons = [Ruler, Gauge, MapPinned, Settings2]

function EquipmentDetailPage() {
  const { slug } = useParams()
  const [scrolled, setScrolled] = useState(false)
  const { media } = useMediaAssets()
  const equipment = equipmentDetails.find((item) => item.slug === slug)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!equipment) {
    return (
      <div className="app-shell">
        <Header scrolled={scrolled} navItems={navItems} logo={media.images.logo} />
        <main className="ambient-section px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase text-[var(--accent)]">Thiết bị</p>
            <h1 className="mt-4 font-sans text-4xl font-black uppercase text-[var(--page-text)]">
              Chưa có dữ liệu thiết bị
            </h1>
            <p className="mt-4 text-sm font-semibold leading-7 text-[var(--muted-text)]">
              Thiết bị này chưa được cập nhật thông số chi tiết.
            </p>
            <Link
              to="/gioi-thieu"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-4 w-4" />
              Quay lại giới thiệu
            </Link>
          </div>
        </main>
        <FooterSection footerServices={footerServices} />
      </div>
    )
  }

  const image = media.images[equipment.imageKey]?.url

  return (
    <div className="app-shell">
      <Header scrolled={scrolled} navItems={navItems} logo={media.images.logo} />

      <main className="site-flow">
        <section className="ambient-section overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="relative mx-auto grid w-full max-w-[1200px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="pointer-events-none absolute inset-x-[-12%] top-[-8rem] -z-10 h-[34rem] bg-[radial-gradient(circle_at_18%_32%,rgba(10,102,194,0.20),transparent_23rem),radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.18),transparent_26rem)]" />

            <div>
              <Link
                to="/gioi-thieu"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[var(--accent)] transition hover:-translate-x-1"
              >
                <ArrowLeft className="h-4 w-4" />
                Quay lại dàn thiết bị
              </Link>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-[#0a66c2]" />
                <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-4 py-2 text-xs font-extrabold uppercase text-[var(--accent)]">
                  {equipment.label}
                </span>
              </div>

              <h1 className="mt-4 max-w-3xl font-sans text-[clamp(3rem,7vw,6.4rem)] font-black uppercase italic leading-[0.84] text-[var(--page-text)]">
                {equipment.name}
              </h1>

              <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-[var(--muted-text)]">
                {equipment.summary}
              </p>
            </div>

            <div className="soft-surface-strong overflow-hidden rounded-[34px] p-3">
              <div className="relative min-h-[320px] overflow-hidden rounded-[28px]">
                {image ? (
                  <img src={image} alt={equipment.name} className="h-[420px] w-full object-cover" />
                ) : (
                  <div className="h-[420px] w-full bg-gradient-to-br from-slate-200 to-slate-100" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs font-extrabold uppercase text-sky-200">Thông số tham khảo</p>
                  <h2 className="mt-2 font-sans text-2xl font-black uppercase leading-tight">
                    Năng lực thi công 180-200m
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ambient-section px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-[1200px] gap-5 md:grid-cols-2 lg:grid-cols-4">
            {equipment.quickStats.map((stat, index) => {
              const Icon = statIcons[index] || Gauge

              return (
                <article key={stat.label} className="soft-surface-strong rounded-[24px] p-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0a66c2] text-white shadow-[0_14px_30px_rgba(10,102,194,0.24)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-xs font-extrabold uppercase text-[var(--muted-text)]">
                    {stat.label}
                  </p>
                  <h3 className="mt-2 font-sans text-xl font-black leading-tight text-[var(--page-text)]">
                    {stat.value}
                  </h3>
                </article>
              )
            })}
          </div>
        </section>

        <section className="ambient-section px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-[1200px] gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-[#0a66c2]" />
                <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-4 py-2 text-xs font-extrabold uppercase text-[var(--accent)]">
                  Bảng thông số
                </span>
              </div>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-[var(--soft-border)] bg-[var(--soft-surface-strong)] shadow-[0_22px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                {equipment.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid gap-2 border-b border-[var(--soft-border)] px-5 py-4 last:border-b-0 md:grid-cols-[0.38fr_0.62fr]"
                  >
                    <p className="text-xs font-extrabold uppercase text-[var(--muted-text)]">{spec.label}</p>
                    <p className="text-sm font-bold leading-6 text-[var(--page-text)]">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-5">
              <div className="soft-surface-strong rounded-[28px] p-6">
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-[var(--accent)]" />
                  <h2 className="font-sans text-xl font-black uppercase text-[var(--page-text)]">
                    Ghi chú research
                  </h2>
                </div>
                <p className="mt-4 text-sm font-semibold leading-7 text-[var(--muted-text)]">
                  {equipment.researchNote}
                </p>
              </div>

              <div className="soft-surface-strong rounded-[28px] p-6">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <h2 className="font-sans text-xl font-black uppercase text-[var(--page-text)]">
                    Cần kiểm tra
                  </h2>
                </div>
                <div className="mt-5 space-y-3">
                  {equipment.cautions.map((item) => (
                    <p key={item} className="flex gap-3 text-sm font-semibold leading-6 text-[var(--muted-text)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="ambient-section px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-[1200px] gap-6 md:grid-cols-2">
            <div className="soft-surface-strong rounded-[28px] p-6">
              <h2 className="font-sans text-2xl font-black uppercase text-[var(--page-text)]">
                Điểm mạnh khi thi công
              </h2>
              <div className="mt-6 space-y-4">
                {equipment.strengths.map((item) => (
                  <p key={item} className="flex gap-3 text-sm font-bold leading-6 text-[var(--muted-text)]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="soft-surface-strong rounded-[28px] p-6">
              <h2 className="font-sans text-2xl font-black uppercase text-[var(--page-text)]">
                Ứng dụng phù hợp
              </h2>
              <div className="mt-6 space-y-4">
                {equipment.applications.map((item) => (
                  <p key={item} className="flex gap-3 text-sm font-bold leading-6 text-[var(--muted-text)]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection footerServices={footerServices} />
    </div>
  )
}

export default EquipmentDetailPage
