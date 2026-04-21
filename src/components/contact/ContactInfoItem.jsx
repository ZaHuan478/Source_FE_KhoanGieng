function ContactInfoItem({ item }) {
    const { Icon, label, value, accent } = item;

    return (
        <article className="rounded-xl bg-[#f2f3fc] p-4 hover:bg-[#e7e8f0] transition">
            <div className="flex gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#115cb9]">
                    <Icon size={16} />
                </span>

                <div>
                    <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 font-bold">
                        {label}
                    </p>

                    <p
                        className={
                            accent
                                ? 'text-2xl font-bold text-[#083b88]'
                                : 'text-sm font-medium text-slate-700'
                        }
                    >
                        {value}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default ContactInfoItem;