import SectionTitle from '../common/SectionTitle'
import IntroVideo from '../../assets/FSave.com_Facebook_Media_002_1631171251370202v.mp4'

function WhyChooseUsSection({ whyPoints }) {
  return (
    <section id="gioi-thieu" className="bg-white py-14">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-center">
          <div className="h-px flex-1 bg-slate-300"></div>
          <div className="px-4 sm:px-6">
            <SectionTitle
              align="center"
              title="Tại sao chọn Khoan Giếng Phú Yên?"
            />
          </div>
          <div className="h-px flex-1 bg-slate-300"></div>
        </div>

        <div className="mx-auto mt-10 flex flex-col gap-10 lg:flex-row-reverse lg:items-center">

          {/* Cột Video (Bây giờ đã nằm bên trái) */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl bg-black shadow-lg ring-1 ring-slate-900/5">
              <video
                src={IntroVideo}
                className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                Trình duyệt của bạn không hỗ trợ thẻ video.
              </video>
            </div>
          </div>

          {/* Cột Nội dung chữ */}
          <div className="w-full text-slate-700 lg:w-1/2">
            <div className="text-base leading-relaxed sm:text-lg">
              <p>{whyPoints[0]}</p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Kinh nghiệm thực chiến</h4>
                  <p className="mt-1 text-sm text-slate-600">Đội ngũ thợ lành nghề, am hiểu địa chất khu vực, xử lý tốt mọi tình huống.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Máy móc hiện đại</h4>
                  <p className="mt-1 text-sm text-slate-600">Cam kết thi công nhanh gọn, chính xác, đảm bảo nguồn nước sạch và ổn định.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
