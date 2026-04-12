import ServiceCard from '../common/ServiceCard'
import { DrillIcon, PumpIcon, ShieldIcon, HomeWaterIcon } from '../common/Icons'

const SERVICES = [
  {
    icon: DrillIcon,
    key: 'drill',
    title: 'Khoan Giếng',
    description:
      'Khoan giếng gia đình và công nghiệp với công nghệ hiện đại. Đảm bảo độ sâu tối ưu phù hợp với địa tầng khu vực, thi công sạch sẽ không gây ngập nền.',
  },
  {
    icon: ShieldIcon,
    key: 'material',
    title: 'Vật Tư Lắp Đặt Giếng',
    description:
      'Cung cấp đầy đủ vật tư chất lượng cao: ống PVC, ống lọc, sỏi thạch anh, bentonite... Tất cả đều đạt chuẩn kỹ thuật và bảo hành theo công trình.',
  },
  {
    icon: PumpIcon,
    key: 'pump',
    title: 'Lắp Đặt Máy Bơm',
    description:
      'Thi công lắp đặt máy bơm chìm và bơm đầu nổi chính hãng (Pentax, Ebara, Lepono). Tư vấn công suất phù hợp, tiết kiệm điện năng tối đa.',
  },
  {
    icon: HomeWaterIcon,
    key: 'electric',
    title: 'Hệ Thống Điện',
    description:
      'Lắp đặt tủ điện điều khiển, aptomat bảo vệ, đi dây điện an toàn đúng tiêu chuẩn cho hệ thống bơm nước giếng khoan. Bảo hành 12 tháng.',
  },
]

function ServicesSectionNew({ onServiceClick }) {
  return (
    <section id="services-grid" className="py-14">
      {/* Header */}
      <div className="mb-10 text-center">
        <span className="mb-3 inline-block rounded-full bg-gradient-to-r from-[#e8f0fe] to-[#c7d9fd] px-4 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#0a3f94]">
          Dịch vụ của chúng tôi
        </span>
        <h2 className="mb-3 text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-tight text-slate-900">
          4 Dịch Vụ Cốt Lõi
        </h2>
        <p className="mx-auto max-w-[500px] text-[0.88rem] leading-relaxed text-slate-500">
          Từ khoan giếng đến vận hành hoàn chỉnh — chúng tôi đồng hành xuyên suốt mọi giai đoạn.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((svc) => (
          <ServiceCard
            key={svc.key}
            icon={svc.icon}
            title={svc.title}
            description={svc.description}
            onViewDetails={() => onServiceClick?.(svc.key)}
          />
        ))}
      </div>
    </section>
  )
}

export default ServicesSectionNew
