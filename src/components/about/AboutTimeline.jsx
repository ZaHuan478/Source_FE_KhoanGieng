function TimelineItem({ year, title, desc, variant }) {
    const yearClassName =
        variant === 'blue'
            ? 'bg-[#0a469f] text-white'
            : variant === 'brown'
                ? 'bg-[#7a4e1d] text-white'
                : 'bg-white text-[#0a469f] ring-1 ring-[#0a469f]'

    return (
        <div>
            <p className={`inline-flex w-11 items-center justify-center rounded-full px-2 py-1 text-[10px] font-semibold ${yearClassName}`}>
                {year}
            </p>

            <p className="mt-2 text-sm font-semibold">{title}</p>

            <p className="text-xs text-slate-600">{desc}</p>
        </div>
    )
}

function AboutTimeline() {
    return (
        <section className="mx-auto grid w-full max-w-[1200px] gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
                <h3 className="font-display text-5xl font-bold leading-[1.02]">
                    Hơn một thập kỷ
                    <span className="block text-[#7a4e1d]">
                        đồng hành cùng đất võ.
                    </span>
                </h3>

                <div className="mt-6 space-y-5 border-l-2 border-slate-300 pl-5">
                    <TimelineItem
                        year="2008"
                        title="Khởi nghiệp từ tâm"
                        desc="Thành lập cơ sở khoan giếng gia đình đầu tiên tại Tuy Hòa với 1 máy khoan cơ bản."
                        variant="blue"
                    />
                    <TimelineItem
                        year="2015"
                        title="Đột phá công nghệ"
                        desc="Nhập khẩu hệ thống máy khoan thủy lực Nhật Bản, mở rộng quy mô phục vụ công nghiệp."
                        variant="brown"
                    />
                    <TimelineItem
                        year="Nay"
                        title="Vị thế hàng đầu"
                        desc="Đội ngũ 50+ kỹ thuật viên, sở hữu dàn thiết bị hiện đại nhất tỉnh Phú Yên."
                        variant="white"
                    />
                </div>
            </div>

            <div>
                <img
                    src="https://images.unsplash.com/photo-1644441208244-16f87f1fca3b?auto=format&fit=crop&w=1000&q=80"
                    alt="Chuyên gia kỳ cựu"
                    className="h-72 w-full rounded-2xl object-cover"
                />
                <p className="mt-3 text-xs italic text-slate-500">
                    “Đừng trả tiền cho giải pháp giếng, chúng tôi mang đến sự đảm bảo dòng nước ngọt lành suốt theo từng năm.”
                </p>
            </div>
        </section>
    )
}

export default AboutTimeline