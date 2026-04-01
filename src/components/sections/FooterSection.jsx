function FooterSection({ footerServices }) {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto grid w-full max-w-[1200px] gap-7 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h4 className="font-display text-xl font-bold text-[#083b88]">Liên Hệ</h4>
          <div className="mt-4 space-y-2.5 text-sm text-slate-700">
            <p className="text-base font-bold text-slate-800 uppercase">Công ty TNHH Trường Giang</p>
            <p><strong>Địa chỉ:</strong> Số 165 Hùng Vương, Phường Tuy Hòa, Tỉnh Đắk Lắk, Việt Nam</p>
            <p><strong>Hotline:</strong> 0945 455 458</p>
            <p><strong>Email:</strong> huan1234@gmail.com</p>
          </div>
        </div>
        <div className="lg:ml-20">
          <h5 className="text-base font-semibold uppercase tracking-wide font-bold text-[#083b88]">Dịch vụ chính</h5>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {footerServices.map((service) => (
              <li key={service} className="hover:text-[#083b88] transition-colors cursor-pointer">{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-[11px] text-slate-500">
        © 2024 CTY TNHH TRƯỜNG GIANG. Tất cả quyền được bảo lưu.
      </div>
    </footer>
  )
}

export default FooterSection
