import { useEffect, useRef, useState } from 'react'
import { PhoneCall } from 'lucide-react';
import { UserCheck } from 'lucide-react';
import { FileCheck } from 'lucide-react';

const features = [
  {
    title: 'ĐA DẠNG DỊCH VỤ',
    description:
      'Trường Giang cung cấp đầy đủ các dịch vụ khoang giếng, sửa chữa giếng khoan,...',
    icon: <FileCheck className="h-8 w-8" />,
    bgColor: 'white',
  },
  {
    title: 'ĐỘI NGŨ THỢ CHUYÊN NGHIỆP',
    description:
      'Đội ngũ thợ chuyên nghiệp lành nghề hơn 20 năm kinh nghiệm, Tuân thủ quy trình chuẩn mực',
    icon: <UserCheck className="h-8 w-8" />,
    bgColor: 'white',
  },
  {
    title: 'HỖ TRỢ - TƯ VẤN',
    description:
      'Chúng tôi luôn sẵn sàng tư vấn và phục vụ quý khách 24/24h, không ngại đường xa',
    icon: <PhoneCall className="h-8 w-8" />,
    bgColor: 'white',
  },
]

function FeatureHighlightsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl pxf7f7f7-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center text-center ${index < features.length - 1 ? 'lg:border-r lg:border-slate-300' : ''
                }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`,
              }}
            >
              {/* Icon circle */}
              <div
                className="mb-5 flex h-16 w-16 items-center justify-center rounded-full p-4 shadow-md transition-transform duration-300 hover:scale-110"
                style={{
                  backgroundColor: feature.bgColor,
                  border: '2px solid #3975D4',
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-base font-bold tracking-wide text-slate-800 sm:text-lg">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="max-w-xs text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureHighlightsSection
