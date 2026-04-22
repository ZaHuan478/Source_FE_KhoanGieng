function FooterSection({ footerServices }) {
  return (
    <footer className="border-t border-slate-200 bg-[#C0C0C0] text-slate-700">
      <div className="mx-auto grid w-full max-w-[1200px] gap-7 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h4 className="font-display text-xl font-bold text-[#083b88]">Liên Hệ</h4>
          <div className="mt-4 space-y-2.5 text-sm text-slate-700">
            <p className="text-base font-bold text-slate-800 uppercase">Công ty TNHH Trường Giang</p>
            <p><strong>ĐỊA CHỈ:</strong> Số 165 Hùng Vương, Phường Tuy Hòa, Tỉnh Đắk Lắk, Việt Nam</p>
            <p><strong>HOTLINE:</strong> 0945 455 458</p>
            <p><strong>EMAIL:</strong> huan1234@gmail.com</p>
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
        <div className="overflow-hidden rounded-lg">
          <iframe
            title="Bản đồ Công ty TNHH Trường Giang"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1157810649183!2d109.31086547572428!3d13.091848012229157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316fec38c83a83cf%3A0x5a80759cf7e0ad24!2zQ8O0bmcgdHkgVE5ISCBUcsaw4budbmcgR2lhbmc!5e0!3m2!1svi!2s!4v1774990373481!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '200px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-full w-full"
          />
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
