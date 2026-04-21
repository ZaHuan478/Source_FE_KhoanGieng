function ContactHero() {
    return (
        <section className="relative min-h-[440px] bg-[#f2f3fc] overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
                className="absolute inset-0 w-full h-full object-cover opacity-15"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/85 to-white/50" />

            <div className="relative max-w-[1240px] mx-auto px-4 py-20">
                <h1 className="text-4xl sm:text-6xl font-bold text-[#003f87]">
                    Liên hệ với chúng tôi
                </h1>

                <p className="mt-5 text-slate-700 max-w-2xl">
                    Chúng tôi sẵn sàng hỗ trợ bạn 24/7.
                </p>
            </div>
        </section>
    )
}

export default ContactHero;