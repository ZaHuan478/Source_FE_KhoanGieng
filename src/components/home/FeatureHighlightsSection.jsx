import { useEffect, useRef, useState } from 'react'
import { FileCheck, PhoneCall, UserCheck } from 'lucide-react'

const features = [
  {
    title: 'Đa dạng dịch vụ',
    description: 'Khoan giếng, sửa chữa giếng, lắp đặt bơm và bảo trì hệ thống khai thác nước.',
    icon: FileCheck,
  },
  {
    title: 'Thợ lành nghề',
    description: 'Đội ngũ có kinh nghiệm thực địa, hiểu địa chất khu vực và xử lý tình huống nhanh.',
    icon: UserCheck,
  },
  {
    title: 'Hỗ trợ 24/7',
    description: 'Tư vấn kịp thời cho công trình cần nguồn nước ổn định hoặc cần xử lý sự cố gấp.',
    icon: PhoneCall,
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
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="ambient-section pb-14">
      <div className="mx-auto grid w-full max-w-300 gap-3 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="soft-surface rounded-[18px] p-5"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${index * 0.16}s, transform 0.6s ease ${index * 0.16}s`,
              }}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--nav-active)] text-[var(--nav-active-text)]">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-sans text-lg font-extrabold text-[var(--page-text)]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted-text)]">{feature.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FeatureHighlightsSection
