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

          <div className="w-full text-slate-700 lg:w-1/2">
            <div className="text-base leading-relaxed sm:text-lg">
              <p>{whyPoints[0]}</p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-black"></div>
                <div>
                  <h4 className="font-semibold text-slate-900">Kinh nghiệm thực chiến</h4>
                  <p className="mt-1 text-sm text-slate-600">Đội ngũ thợ lành nghề, am hiểu địa chất khu vực, xử lý tốt mọi tình huống.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-black"></div>
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
