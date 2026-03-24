function FooterSection({ footerServices }) {
  return (
    <footer className="border-t border-slate-200 bg-[#eceff6] text-slate-700">
      <div className="mx-auto grid w-full max-w-[1200px] gap-7 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h4 className="font-display text-xl font-bold text-[#083b88]">Khoan Giếng Phú Yên</h4>
          <p className="mt-3 text-xs text-slate-600">
            Chuyên gia hàng đầu về khoan giếng và xử lý nguồn nước tại Phú Yên. Chúng tôi cam kết
            dịch vụ minh bạch, lộ trình triển khai chi tiết.
          </p>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Dịch vụ chính</h5>
          <ul className="mt-3 space-y-2 text-xs text-slate-600">
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Hỗ trợ khách hàng</h5>
          <ul className="mt-3 space-y-2 text-xs text-slate-600">
            <li>Chính sách bảo mật</li>
            <li>Điều khoản dịch vụ</li>
            <li>Hỗ trợ kỹ thuật</li>
            <li>Email: lienhe@phuyendrilling.vn</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-[11px] text-slate-500">
        © 2024 Khoan Giếng Phú Yên. Tất cả quyền được bảo lưu.
      </div>
    </footer>
  )
}

export default FooterSection
