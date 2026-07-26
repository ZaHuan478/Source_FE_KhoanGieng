import { CheckCircle2, ClipboardList } from 'lucide-react'

import { STEPS } from '../../data/servicesData'

const processPills = ['Khảo sát', 'Thi công', 'Kiểm tra', 'Bàn giao']

function ProcessSteps() {
  return (
    <section className="ambient-section overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="pointer-events-none absolute inset-x-[-12%] top-[-8rem] -z-10 h-[34rem] bg-[radial-gradient(circle_at_18%_32%,rgba(10,102,194,0.18),transparent_23rem),radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.16),transparent_26rem)]" />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[#0a66c2]" />
              <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-4 py-2 text-xs font-extrabold uppercase text-[var(--accent)]">
                Theo dõi từng bước
              </span>
            </div>

            <h3 className="mt-4 max-w-3xl font-sans text-[clamp(3.2rem,8vw,6.8rem)] font-black uppercase italic leading-[0.84] text-[var(--page-text)]">
              Quy trình
              <span className="block text-[#0a66c2]">thi công</span>
            </h3>
          </div>

          <div className="hidden rounded-2xl border border-[var(--soft-border)] bg-[var(--soft-surface-strong)] px-5 py-4 text-xs font-extrabold uppercase text-[var(--page-text)] shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur md:flex md:items-center md:gap-2">
            <ClipboardList className="h-4 w-4 text-[#0a66c2]" />
            Kiểm soát chi phí
          </div>
        </div>

        {/* <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-[var(--muted-text)]">
          Mỗi công trình được theo dõi theo từng bước để tối ưu chi phí và đảm bảo an toàn nguồn nước.
        </p> */}

        <div className="mt-8 flex flex-wrap gap-3">
          {processPills.map((pill, index) => (
            <span
              key={pill}
              className={`rounded-full px-5 py-3 text-xs font-extrabold uppercase ${index === 0
                ? 'bg-[#0a66c2] text-white shadow-[0_14px_34px_rgba(10,102,194,0.28)]'
                : 'border border-[var(--soft-border)] bg-[var(--soft-surface-strong)] text-[var(--page-text)] shadow-[0_12px_30px_rgba(15,23,42,0.08)]'
                }`}
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <article
              key={step.num}
              className="soft-surface-strong group relative overflow-hidden rounded-[34px] p-5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-x-5 top-0 h-1 rounded-b-full bg-[#0a66c2]" />

              <div className="flex items-start justify-between gap-4">
                <span className="font-sans text-6xl font-black italic leading-none text-[#0a66c2]/25">
                  {step.num}
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0a66c2] text-white shadow-[0_12px_28px_rgba(10,102,194,0.28)]">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
              </div>

              <h4 className="mt-8 font-sans text-xl font-extrabold leading-tight text-[var(--page-text)]">
                {step.title}
              </h4>

              <p className="mt-3 text-sm font-semibold leading-6 text-[var(--muted-text)]">
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
