import SectionTitle from '../common/SectionTitle'
import {
  DrillIcon,
  HomeWaterIcon,
  PumpIcon,
  ShieldIcon,
} from '../common/Icons'

const serviceIcons = {
  drill: DrillIcon,
  homeWater: HomeWaterIcon,
  pump: PumpIcon,
  shield: ShieldIcon,
}

function ServicesSection({ services }) {
  return (
    <section id="dich-vu" className="bg-[#ebeff7] py-14">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <SectionTitle
            align="left"
            title="Giải Pháp Nguồn Nước Toàn Diện"
            subtitle="Chúng tôi cung cấp hệ thống dịch vụ kỹ thuật cao, đảm bảo lưu lượng nước ổn định cho mọi nhu cầu sinh hoạt và sản xuất"
          />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {services.map((service) => {
          const Icon = serviceIcons[service.key]
          return (
            <article
              key={service.title}
              className="group rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-200">
                <Icon />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold leading-tight text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
                {service.description}
              </p>
            </article>
          )
        })}
      </div>
      </div>
    </section>
  )
}

export default ServicesSection
