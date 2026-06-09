function SectionTitle({ title, subtitle, align = 'center', invert = false, eyebrow }) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow ? (
        <p className="eyebrow mb-3">{eyebrow}</p>
      ) : null}
      <h2
        className={`font-display text-4xl font-extrabold italic leading-[0.98] sm:text-5xl ${
          invert ? 'text-white' : 'text-[var(--page-text)]'
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
            align === 'center' ? 'mx-auto' : 'mx-0'
          } ${invert ? 'text-white/72' : 'text-[var(--muted-text)]'}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default SectionTitle
