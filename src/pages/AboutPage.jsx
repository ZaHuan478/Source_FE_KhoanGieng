import { useEffect, useState } from 'react'
import FooterSection from '../components/sections/FooterSection'
import Header from '../components/sections/Header'
import { footerServices, navItems } from '../data/siteContent'
import equipmentImage from '../assets/images.jpg'

const equipmentItems = [
  {
    name: 'Máy Khoan Giếng FYX180',
    note: 'Chuyên dùng cho địa hình đá cứng, độ sâu lên đến 200m.',
    image: equipmentImage,
  },
  {
    name: 'Xe vận tải chuyên dụng',
    note: 'Đảm bảo 4 đội kỹ thuật công trình di chuyển liên tỉnh nhanh.',
    image:
      'https://images.unsplash.com/photo-1631221462927-39e0f9f7c3f8?auto=format&fit=crop&w=800&q=80',
  },
]

const experts = [
  {
    name: 'Kỹ sư. Ngô Gia Văn Thành',
    role: 'CHUYÊN GIA ĐỊA CHẤT',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Ông. Trần Phú Khánh',
    role: 'GIÁM ĐỐC ĐIỀU HÀNH',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Ông. Lê Mạnh Hoàng',
    role: 'TRƯỞNG PHÒNG KỸ THUẬT CƠ ĐIỆN',
    image:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=600&q=80',
  },
]

function AboutPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="bg-[#f3f5fb] text-slate-900">
      <Header scrolled={scrolled} navItems={navItems} />

      <main className="pt-20">
        <section className="mx-auto grid w-full max-w-[1200px] gap-8 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Hành trình khơi nguồn nước sạch
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[0.96] sm:text-5xl">
              Kiến tạo sự sống từ
              <span className="block text-[#0a3f94]">lòng đất mẹ Phú Yên.</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600">
              Với hơn 15 năm kinh nghiệm trong ngành địa chất và khoan giếng,
              chúng tôi tự hào là đơn vị tiên phong mang đến giải pháp nguồn nước
              bền vững cho hàng ngàn hộ gia đình và doanh nghiệp tại khu vực Nam Trung Bộ.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=1200&q=80"
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

        <section className="bg-[#ebeff7] py-14">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-4xl font-bold">Tầm nhìn & Sứ mệnh</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1e4fa6]" />

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
              <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="inline-flex rounded-full bg-blue-100 px-2 py-1 text-[10px] font-semibold text-blue-800">
                  👁
                </div>
                <h3 className="mt-3 font-display text-3xl font-bold">Tầm nhìn Chiến lược</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Trở thành tập đoàn kỹ thuật địa chất hàng đầu tại Miền Trung,
                  không chỉ cung cấp dịch vụ khoan giếng mà còn là chuyên gia giải pháp quản trị tài nguyên nước thông minh,
                  ứng dụng công nghệ 4.0 vào thăm dò địa tầng.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600">Lộ trình 2030</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600">Địa chất số hóa</span>
                </div>
              </article>

              <article className="rounded-2xl bg-[#0a469f] p-6 text-white shadow-md">
                <div className="inline-flex rounded-full bg-white/20 px-2 py-1 text-[10px] font-semibold">🚀</div>
                <h3 className="mt-3 font-display text-3xl font-bold">Sứ mệnh</h3>
                <p className="mt-3 text-sm leading-relaxed text-blue-100">
                  Giải quyết bài toán thiếu nước sạch cho cộng đồng bằng những giải pháp kỹ thuật tối ưu,
                  chi phí hợp lý và cam kết bảo vệ môi trường sinh thái.
                </p>
                <button className="mt-5 text-sm font-semibold text-white">
                  Tìm hiểu thêm →
                </button>
              </article>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <article className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <h4 className="text-sm font-semibold">Uy tín tuyệt đối</h4>
                <p className="mt-2 text-xs text-slate-600">Cam kết đúng tiến độ và chất lượng nguồn nước như đã thỏa thuận ban đầu.</p>
              </article>
              <article className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <h4 className="text-sm font-semibold">Công nghệ cao</h4>
                <p className="mt-2 text-xs text-slate-600">Sử dụng hệ thống máy khoan xoay thủy lực, hiệu quả nhất khu vực.</p>
              </article>
              <article className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <h4 className="text-sm font-semibold">Bền vững</h4>
                <p className="mt-2 text-xs text-slate-600">Thi công an toàn, không gây sụt lún, bảo vệ tầng nước ngầm tự nhiên.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1200px] gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <h3 className="font-display text-5xl font-bold leading-[1.02]">
              Hơn một thập kỷ
              <span className="block text-[#7a4e1d]">đồng hành cùng đất võ.</span>
            </h3>
            <div className="mt-6 space-y-5 border-l-2 border-slate-300 pl-5">
              <div>
                <p className="inline-flex w-11 items-center justify-center rounded-full bg-[#0a469f] px-2 py-1 text-[10px] font-semibold text-white">2008</p>
                <p className="mt-2 text-sm font-semibold">Khởi nghiệp từ tâm</p>
                <p className="text-xs text-slate-600">Thành lập cơ sở khoan giếng gia đình đầu tiên tại Tuy Hòa với 1 máy khoan cơ bản.</p>
              </div>
              <div>
                <p className="inline-flex w-11 items-center justify-center rounded-full bg-[#7a4e1d] px-2 py-1 text-[10px] font-semibold text-white">2015</p>
                <p className="mt-2 text-sm font-semibold">Đột phá công nghệ</p>
                <p className="text-xs text-slate-600">Nhập khẩu hệ thống máy khoan thủy lực Nhật Bản, mở rộng quy mô phục vụ công nghiệp.</p>
              </div>
              <div>
                <p className="inline-flex w-11 items-center justify-center rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-[#0a469f] ring-1 ring-[#0a469f]">Nay</p>
                <p className="mt-2 text-sm font-semibold">Vị thế hàng đầu</p>
                <p className="text-xs text-slate-600">Đội ngũ 50+ kỹ thuật viên, sở hữu dàn thiết bị hiện đại nhất tỉnh Phú Yên.</p>
              </div>
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

        <section className="bg-[#ebeff7] py-14">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="font-display text-4xl font-bold">Hệ thống trang thiết bị</h3>
                <p className="mt-2 text-sm text-slate-600">Đầu tư đồng bộ công nghệ tối tân để tối ưu hóa chi phí và đảm bảo an toàn tuyệt đối.</p>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <button className="h-7 w-7 rounded-full border border-slate-300 text-xs">‹</button>
                <button className="h-7 w-7 rounded-full border border-slate-300 text-xs">›</button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {equipmentItems.map((item) => (
                <article key={item.name} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
                  <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <h4 className="text-sm font-semibold">{item.name}</h4>
                    <p className="mt-2 text-xs text-slate-600">{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
        </section>

        <section className="mx-auto w-full max-w-[1200px] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border-2 border-[#0a3f94] bg-gradient-to-r from-[#0a469f] to-[#1f67c8] px-8 py-10 text-center text-white shadow-lg shadow-blue-200/60">
            <h3 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              Bắt đầu hành trình
              <span className="block">khơi nguồn nước sạch ngay hôm nay</span>
            </h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="/#lien-he" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0a469f]">
                Yêu cầu tư vấn miễn phí
              </a>
              <a href="tel:0912345678" className="rounded-full border border-white px-5 py-2 text-sm font-semibold text-white">
                Gọi: 09xx xxx xxx
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterSection footerServices={footerServices} />
    </div>
  )
}

export default AboutPage
