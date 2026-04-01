import { useEffect, useState } from 'react'
import FooterSection from '../components/sections/FooterSection'
import Header from '../components/sections/Header'
import { footerServices, navItems } from '../data/siteContent'
import equipmentImage from '../assets/images.jpg'
import heroBackground from '../assets/347797942_1689138971534405_3431595703546068156_n.jpg'
import downloadedImage from '../assets/6936ccfd-b606-471e-afea-f35479e0e8f6.jpg'

const equipmentItems = [
  {
    name: 'Máy Khoan Giếng FYX180',
    note: 'Chuyên dùng cho địa hình đá cứng, độ sâu lên đến 200m.',
    image: equipmentImage,
  },
  {
    name: 'Xe vận tải chuyên dụng',
    note: 'Đảm bảo 4 đội kỹ thuật công trình di chuyển liên tỉnh nhanh.',
    image: heroBackground,
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
              src={downloadedImage}
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

        <section className="bg-[#f3f5fb] py-14">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="flex items-center justify-center">
                <div className="h-px flex-1 bg-slate-300"></div>
                <h3 className="px-4 text-center font-display text-4xl font-bold">Hệ thống trang thiết bị</h3>
                <div className="h-px flex-1 bg-slate-300"></div>
              </div>
              <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">Đầu tư đồng bộ công nghệ tối tân để tối ưu hóa chi phí và đảm bảo an toàn tuyệt đối.</p>
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
                Gọi: 0945 455 458
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
