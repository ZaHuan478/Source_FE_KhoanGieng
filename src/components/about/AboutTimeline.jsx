import { aboutTimelineItems } from '../../data/aboutData'

function TimelineItem({ year, title, desc }) {
    return (
        <article className="relative grid gap-4 rounded-2xl bg-white/35 p-4 shadow-[0_14px_34px_rgba(15,23,42,0.06)] backdrop-blur sm:grid-cols-[4.25rem_1fr]">
            <div className="flex items-start">
                <span className="inline-flex min-w-14 items-center justify-center rounded-full border border-[#0a66c2] bg-white/70 px-3 py-1.5 text-xs font-extrabold text-[#0a66c2]">
                    {year}
                </span>
            </div>

            <div>
                <h4 className="text-base font-extrabold text-[var(--page-text)]">{title}</h4>
                <p className="mt-1 text-sm leading-6 text-[var(--muted-text)]">{desc}</p>
            </div>
        </article>
    )
}

function AboutTimeline({ image }) {
    return (
        <section className="ambient-section px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto grid w-full max-w-[1200px] gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="s p-6 sm:p-8 lg:p-10">
                    <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-4 py-2 text-xs font-extrabold uppercase text-[var(--accent)]">
                        Lịch sử phát triển
                    </span>

                    <h3 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.02] text-[var(--page-text)] sm:text-5xl">
                        Hơn một thập kỷ
                        <span className="block text-[#8b5a2b]">
                            đồng hành cùng mạch nước.
                        </span>
                    </h3>

                    <div className="mt-7 space-y-4">
                        {aboutTimelineItems.map((item) => (
                            <TimelineItem key={item.year} {...item} />
                        ))}
                    </div>
                </div>

                <figure className="soft-surface overflow-hidden rounded-[28px] p-3">
                    {image?.url ? (
                        <img
                            src={image.url}
                            alt={image.alt || 'Chuyên gia khoan giếng lâu năm'}
                            className="h-72 w-full rounded-[20px] object-cover sm:h-96"
                        />
                    ) : (
                        <div className="h-72 w-full rounded-[20px] bg-slate-200/80 sm:h-96" />
                    )}

                    <figcaption className="px-2 pb-2 pt-4 text-sm italic leading-6 text-[var(--muted-text)]">
                        Đừng trả tiền cho một giải pháp giếng tạm bợ; hãy chọn sự đảm bảo cho dòng nước ngọt lành theo năm tháng.
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}

export default AboutTimeline
