function AboutHero({ image }) {
    return (
        <section className="mx-auto grid w-full max-w-[1200px] gap-8 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Hành trình khơi nguồn nước sạch
                </span>

                <h1 className="mt-3 font-display text-4xl font-bold leading-[0.96] sm:text-5xl">
                    Kiến tạo sự sống từ
                    <span className="block text-[#0a3f94]">
                        lòng đất mẹ Phú Yên.
                    </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600">
                    Với hơn 15 năm kinh nghiệm trong ngành địa chất và khoan giếng,
                    chúng tôi tự hào là đơn vị tiên phong mang đến giải pháp nguồn nước
                    bền vững cho hàng ngàn hộ gia đình và doanh nghiệp tại khu vực Nam Trung Bộ.
                </p>
            </div>

            <div className="relative">
                <img
                    src={image}
                    alt="Giàn khoan giếng tại Phú Yên"
                    className="h-[420px] w-full rounded-[28px] object-cover shadow-xl shadow-slate-300/60"
                />
                <div className="absolute -bottom-5 right-4 rounded-2xl bg-[#f8d7a7] px-5 py-4 shadow-lg">
                    <p className="font-display text-xl font-bold italic text-[#805328]">
                        "Tận tâm - Chính xác - Bền vững"
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutHero