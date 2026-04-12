import { useState } from 'react'

function ServiceCard({ icon: Icon, title, description, onViewDetails }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        'group flex flex-col rounded-[20px] p-7 border transition-all duration-300 cursor-default',
        hovered
          ? 'bg-gradient-to-br from-[#0a3f94] to-[#1a6fd0] border-transparent shadow-[0_20px_48px_rgba(10,63,148,0.22)]'
          : 'bg-white border-[#e8edf6] shadow-[0_4px_20px_rgba(0,0,0,0.07)]',
      ].join(' ')}
    >
      {/* Icon */}
      <div
        className={[
          'mb-[18px] flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-[14px] transition-all duration-300',
          hovered
            ? 'bg-white/20 text-white'
            : 'bg-gradient-to-br from-[#e8f0fe] to-[#c7d9fd] text-[#0a3f94]',
        ].join(' ')}
      >
        {Icon && <Icon />}
      </div>

      {/* Title */}
      <h3
        className={[
          'mb-2 text-base font-bold leading-snug transition-colors duration-200',
          hovered ? 'text-white' : 'text-slate-900',
        ].join(' ')}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={[
          'mb-5 grow text-[0.84rem] leading-relaxed transition-colors duration-200',
          hovered ? 'text-white/80' : 'text-slate-500',
        ].join(' ')}
      >
        {description}
      </p>

      {/* Button */}
      <button
        onClick={onViewDetails}
        className={[
          'self-start inline-flex items-center gap-1.5 rounded-full px-[18px] py-2 text-[0.8rem] font-semibold border transition-all duration-200 cursor-pointer tracking-tight',
          hovered
            ? 'border-white/55 bg-white/15 text-white'
            : 'border-[#0a3f94] bg-transparent text-[#0a3f94]',
        ].join(' ')}
      >
        Xem chi tiết
        <span>→</span>
      </button>
    </div>
  )
}

export default ServiceCard
