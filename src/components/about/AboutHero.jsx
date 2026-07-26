import { BadgeCheck, Compass } from 'lucide-react'

function AboutHero({ image }) {
    return (
        <section className="relative overflow-hidden px-4 pb-12 pt-32 text-center sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(10,102,194,0.18),transparent_21rem),radial-gradient(circle_at_80%_74%,rgba(59,130,246,0.14),transparent_24rem)]" />
            <div className="relative mx-auto flex min-h-[460px] max-w-6xl flex-col items-center justify-center">
                {/* <span className="soft-surface inline-flex h-8 items-center gap-2 rounded-full px-4 text-[10px] font-extrabold uppercase tracking-[0.34em] text-[var(--muted-text)]">
                    <Compass className="h-3.5 w-3.5 accent-text" />
                    About Truong Giang
                </span> */}

                <h1 className="mt-7 text-balance font-display text-[clamp(3rem,7vw,6.6rem)] font-extrabold uppercase leading-[0.9] text-[var(--page-text)]">
                    Kiến tạo
                    <span className="accent-text block italic normal-case">mạch nước bền vững</span>
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-8 text-[var(--muted-text)]">
                    Hơn 15 năm kinh nghiệm trong lĩnh vực địa chất và khoan giếng, chúng tôi đồng hành
                    cùng hàng ngàn hộ gia đình và công trình tại khu vực Nam Trung Bộ.
                </p>

                <div className="soft-surface mt-10 grid max-w-3xl gap-4 rounded-[22px] p-3 text-left sm:grid-cols-[1fr_1.2fr]">
                    {image ? (
                        <img
                            src={image}
                            alt="Giàn khoan giếng tại Phú Yên"
                            className="h-56 w-full rounded-[16px] object-cover sm:h-full"
                        />
                    ) : null}
                    <div className="flex flex-col justify-center p-4">
                        <BadgeCheck className="h-8 w-8 text-[var(--accent)]" />
                        <p className="mt-4 font-display text-3xl font-extrabold italic leading-none text-[var(--page-text)]">
                            Tận tâm, chính xác, bền vững.
                        </p>
                        <p className="mt-3 text-sm font-semibold leading-7 text-[var(--muted-text)]">
                            Mỗi công trình đều được khảo sát kỹ lưỡng, báo giá minh bạch và bàn giao theo đúng nhu cầu khai thác.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero
