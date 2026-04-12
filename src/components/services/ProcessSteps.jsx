import { STEPS } from '../../data/servicesData'

function ProcessSteps() {
  return (
    <section className="bg-[#f3f5fb] py-14">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">

        {/* Divider heading */}
        <div className="mb-2 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-300" />
          <h3 className="whitespace-nowrap text-center font-display text-[clamp(1.4rem,2.5vw,2rem)] font-extrabold tracking-tight text-slate-900">
            Quy Trình Thi Công Chuẩn Kỹ Thuật
          </h3>
          <div className="h-px flex-1 bg-slate-300" />
        </div>

        <p className="mx-auto mb-9 max-w-[480px] text-center text-[0.85rem] leading-relaxed text-slate-500">
          Mỗi công trình được theo dõi để tối ưu chi phí và đảm bảo an toàn nguồn nước.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <article
              key={step.num}
              className="group relative overflow-hidden rounded-[18px] border border-[#e8edf6] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(10,63,148,0.13)]"
            >
              {/* Top gradient bar */}
              <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#0a3f94] to-[#2d6ccb]" />

              <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0a3f94] to-[#2d6ccb] text-[0.78rem] font-bold text-white">
                {step.num}
              </div>
              <h4 className="mb-2 text-[0.95rem] font-bold leading-snug text-slate-900">
                {step.title}
              </h4>
              <p className="m-0 text-[0.82rem] leading-relaxed text-slate-500">
                {step.desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProcessSteps