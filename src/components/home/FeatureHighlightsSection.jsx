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
    <section ref={sectionRef} className="ambient-section overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-[1160px]">
        <div className="pointer-events-none absolute inset-x-[-10%] top-[-7rem] -z-10 h-[22rem] bg-[radial-gradient(circle_at_18%_20%,rgba(10,102,194,0.13),transparent_22rem),radial-gradient(circle_at_90%_40%,rgba(56,189,248,0.20),transparent_25rem)]" />

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.title}
                className="group relative min-h-[142px] overflow-hidden rounded-[24px] border border-white/70 bg-white/80 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/92 hover:shadow-[0_28px_76px_rgba(10,102,194,0.16)]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ease ${index * 0.14}s, transform 0.6s ease ${index * 0.14}s, box-shadow 0.3s ease, background-color 0.3s ease`,
                }}
              >
                <div className="absolute inset-x-5 top-0 h-[3px] rounded-b-full bg-[#0a66c2]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0a66c2] text-white shadow-[0_14px_30px_rgba(10,102,194,0.26)]">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div className="pt-0.5">
                    <h3 className="font-sans text-lg font-extrabold leading-snug text-[#101827]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-7 text-[var(--muted-text)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeatureHighlightsSection
