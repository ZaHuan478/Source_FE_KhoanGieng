import SectionTitle from '../common/SectionTitle'

function TestimonialsSection({ testimonials }) {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
      <SectionTitle
        title="Khach hang noi gi ve chung toi"
      />
      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-lg border border-slate-200 bg-[#f7f7f9] p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-xs text-amber-500">★★★★★</div>
            <p className="mt-2 text-xs leading-relaxed text-slate-700">"{item.comment}"</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-[10px] font-semibold text-blue-700">
                {item.name
                  .split(' ')
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
