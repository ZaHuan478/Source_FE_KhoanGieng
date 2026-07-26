import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Wrench } from 'lucide-react'

const equipmentFilters = [
    'Tất cả thiết bị',
    'Máy khoan',
    'Vận tải',
    'Khảo sát',
]

const equipmentHighlights = ['Độ sâu 200m', 'Cơ động liên tỉnh']

function EquipmentSection({ equipmentItems }) {
    const [isVisible, setIsVisible] = useState(() => (
        typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ))
    const sectionRef = useRef(null)

    useEffect(() => {
        if (isVisible) return undefined

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.16 },
        )

        if (sectionRef.current) observer.observe(sectionRef.current)

        return () => observer.disconnect()
    }, [isVisible])

    const revealStyle = (delay = 0, distance = 24) => ({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : `translate3d(0, ${distance}px, 0)`,
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
    })

    return (
        <section ref={sectionRef} className="ambient-section overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
            <div className="relative mx-auto w-full max-w-[1200px]">
                <div className="pointer-events-none absolute inset-x-[-12%] top-[-8rem] -z-10 h-[34rem] bg-[radial-gradient(circle_at_18%_32%,rgba(249,115,22,0.24),transparent_23rem),radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.18),transparent_26rem)]" />

                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div style={revealStyle(0, 28)}>
                        <div className="flex items-center gap-3">
                            <span className="h-1 w-10 rounded-full bg-[#0a66c2]" />
                            <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-4 py-2 text-xs font-extrabold uppercase text-[var(--accent)]">
                                Trang bị thi công
                            </span>
                        </div>

                        <h3 className="mt-4 max-w-3xl font-sans text-[clamp(3.2rem,8vw,6.8rem)] font-black uppercase italic leading-[0.84] text-[var(--page-text)]">
                            Khám phá
                            <span className="block text-[#0a66c2]">dàn thiết bị</span>
                        </h3>
                    </div>

                    <div
                        className="group hidden rounded-2xl border border-[var(--soft-border)] bg-[var(--soft-surface-strong)] px-5 py-4 text-xs font-extrabold uppercase text-[var(--page-text)] shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur transition-shadow duration-300 hover:shadow-[0_22px_52px_rgba(10,102,194,0.14)] md:flex md:items-center md:gap-2"
                        style={revealStyle(0.12, 18)}
                    >
                        <Wrench className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                        Sẵn sàng công trình
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    {equipmentFilters.map((filter, index) => (
                        <div
                            key={filter}
                            style={revealStyle(0.18 + index * 0.08, 18)}
                        >
                            <span
                                className={`block rounded-full px-5 py-3 text-xs font-extrabold uppercase transition-transform duration-300 hover:-translate-y-0.5 ${index === 0
                                    ? 'bg-[#0a66c2] text-white shadow-[0_14px_34px_rgba(10,102,194,0.24)]'
                                    : 'border border-[var(--soft-border)] bg-[var(--soft-surface-strong)] text-[var(--page-text)] shadow-[0_12px_30px_rgba(15,23,42,0.08)]'
                                    }`}
                            >
                                {filter}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {equipmentItems.map((item, index) => (
                        <div
                            key={item.name}
                            style={revealStyle(0.32 + index * 0.12, 30)}
                        >
                            <article className="soft-surface-strong group rounded-[34px] p-3 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(10,102,194,0.18)]">
                                <div className="relative overflow-hidden rounded-[28px]">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-80 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="h-80 w-full bg-gradient-to-br from-slate-200 to-slate-100 transition-transform duration-700 ease-out group-hover:scale-105" />
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/18 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

                                <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-2 text-xs font-extrabold text-slate-950 shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                                    {equipmentHighlights[index] || 'Hiện đại'}
                                </span>

                                <div className="absolute inset-x-0 bottom-0 p-6 text-white transition-transform duration-500 group-hover:-translate-y-1">
                                    <p className="text-xs font-extrabold uppercase text-sky-200">
                                        Thiết bị chủ lực
                                    </p>
                                    <h4 className="mt-2 max-w-sm text-2xl font-black uppercase  leading-tight">
                                        {item.name}
                                    </h4>
                                </div>
                            </div>

                            <div className="px-4 py-5">
                                <div className="flex items-start gap-3">
                                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
                                        <MapPin className="h-4 w-4" />
                                    </span>
                                    <p className="text-sm font-bold leading-6 text-[var(--muted-text)]">
                                        {item.note}
                                    </p>
                                </div>

                                {item.hasDetail ? (
                                    <Link
                                        to={`/thiet-bi/${item.slug}`}
                                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-3 text-xs font-extrabold uppercase text-white shadow-[0_14px_34px_rgba(10,102,194,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(10,102,194,0.28)]"
                                    >
                                        Xem thông số
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                ) : null}
                            </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EquipmentSection
