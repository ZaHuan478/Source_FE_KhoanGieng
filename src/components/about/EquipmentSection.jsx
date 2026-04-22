function EquipmentSection({ equipmentItems }) {
    return (
        <section className="bg-[#f3f5fb] py-14">
            <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <div className="flex items-center justify-center">
                        <div className="h-px flex-1 bg-slate-300"></div>
                        <h3 className="px-4 text-center font-display text-4xl font-bold">
                            Hệ thống trang thiết bị
                        </h3>
                        <div className="h-px flex-1 bg-slate-300"></div>
                    </div>

                    <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
                        Đầu tư đồng bộ công nghệ tối tân để tối ưu hóa chi phí và đảm bảo an toàn tuyệt đối.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {equipmentItems.map((item) => (
                        <article
                            key={item.name}
                            className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-40 w-full object-cover"
                            />

                            <div className="p-4">
                                <h4 className="text-sm font-semibold">{item.name}</h4>
                                <p className="mt-2 text-xs text-slate-600">{item.note}</p>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default EquipmentSection