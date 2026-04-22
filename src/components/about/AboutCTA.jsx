function AboutCTA() {
    return (
        <section className="mx-auto w-full max-w-[1200px] px-4 pb-16 sm:px-6 lg:px-8">
            <div className="rounded-[28px] border-2 border-[#0a3f94] bg-gradient-to-r from-[#0a469f] to-[#1f67c8] px-8 py-10 text-center text-white shadow-lg shadow-blue-200/60">
                <h3 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
                    Bắt đầu hành trình
                    <span className="block">
                        khơi nguồn nước sạch ngay hôm nay
                    </span>
                </h3>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="/#lien-he"
                        className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0a469f]"
                    >
                        Yêu cầu tư vấn miễn phí
                    </a>

                    <a
                        href="tel:0912345678"
                        className="rounded-full border border-white px-5 py-2 text-sm font-semibold text-white"
                    >
                        Gọi: 0945 455 458
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AboutCTA