function SectionTitle({ title, subtitle, align = 'center', invert = false }) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <h2
        className={`font-display text-[34px] font-bold leading-[1.05] sm:text-4xl ${
          invert ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mx-auto mt-3 max-w-2xl text-xs leading-relaxed sm:text-sm ${
          align === 'center' ? 'mx-auto' : 'mx-0'
        } ${invert ? 'text-slate-300' : 'text-slate-600'}`}
      >
        {subtitle}
      </p>
    </div>
  )
}

export default SectionTitle
