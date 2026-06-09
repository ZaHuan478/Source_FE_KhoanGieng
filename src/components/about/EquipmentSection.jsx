import { MapPin, Wrench } from 'lucide-react'

const equipmentFilters = [
    'Tất cả thiết bị',
    'Máy khoan',
    'Vận tải',
    'Khảo sát',
]

const equipmentHighlights = ['Độ sâu 200m', 'Cơ động liên tỉnh']

function EquipmentSection({ equipmentItems }) {
    return (
        <section className="ambient-section overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
            <div className="relative mx-auto w-full max-w-[1200px]">
                <div className="pointer-events-none absolute inset-x-[-12%] top-[-8rem] -z-10 h-[34rem] bg-[radial-gradient(circle_at_18%_32%,rgba(249,115,22,0.24),transparent_23rem),radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.18),transparent_26rem)]" />

                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-1 w-10 rounded-full bg-[#0a66c2]" />
                            <span className="text-xs font-extrabold uppercase text-[var(--muted-text)]">
                                Trang bị thi công
                            </span>
                        </div>

                        <h3 className="mt-4 max-w-3xl font-sans text-[clamp(3.2rem,8vw,6.8rem)] font-black uppercase italic leading-[0.84] text-[#101827]">
                            Khám phá
                            <span className="block text-[#0a66c2]">dàn thiết bị</span>
                        </h3>
                    </div>

                    <div className="hidden rounded-2xl border border-[var(--soft-border)] bg-white/60 px-5 py-4 text-xs font-extrabold uppercase text-[var(--muted-text)] shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur md:flex md:items-center md:gap-2">
                        <Wrench className="h-4 w-4" />
                        Sẵn sàng công trình
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    {equipmentFilters.map((filter, index) => (
                        <span
                            key={filter}
                            className={`rounded-full px-5 py-3 text-xs font-extrabold uppercase ${index === 0
                                ? 'bg-[#0a66c2] text-white shadow-[0_14px_34px_rgb(10, 102, 194, 24)]'
                                : 'bg-white/75 text-[var(--muted-text)] shadow-[0_12px_30px_rgba(15,23,42,0.08)]'
                                }`}
                        >
                            {filter}
                        </span>
                    ))}
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {equipmentItems.map((item, index) => (
                        <article
                            key={item.name}
                            className="rounded-[34px] bg-white/82 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
                        >
                            <div className="relative overflow-hidden rounded-[28px]">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-80 w-full object-cover"
                                    />
                                ) : (
                                    <div className="h-80 w-full bg-gradient-to-br from-slate-200 to-slate-100" />
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/18 to-transparent" />

                                <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-2 text-xs font-extrabold text-[#101827] shadow-lg">
                                    {equipmentHighlights[index] || 'Hiện đại'}
                                </span>

                                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                                    <p className="text-xs font-extrabold uppercase text-[#0a66c2]">
                                        Thiết bị chủ lực
                                    </p>
                                    <h4 className="mt-2 max-w-sm text-2xl font-black uppercase italic leading-tight">
                                        {item.name}
                                    </h4>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 px-4 py-5">
                                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#f97316]">
                                    <MapPin className="h-4 w-4" />
                                </span>
                                <p className="text-sm font-bold leading-6 text-[var(--muted-text)]">
                                    {item.note}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EquipmentSection
