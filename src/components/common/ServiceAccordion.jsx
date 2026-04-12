import { useState } from 'react'

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={[
        'overflow-hidden rounded-[14px] border bg-white transition-all duration-200',
        isOpen
          ? 'border-[#c7d9fd] shadow-[0_4px_20px_rgba(10,63,148,0.08)]'
          : 'border-[#e8edf6] shadow-[0_1px_4px_rgba(0,0,0,0.04)]',
      ].join(' ')}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-3 border-none bg-transparent px-5 py-3.5 text-left"
      >
        <div className="flex items-center gap-3">
          <span
            className={[
              'h-2 w-2 flex-shrink-0 rounded-full transition-colors duration-200',
              isOpen ? 'bg-[#0a3f94]' : 'bg-slate-300',
            ].join(' ')}
          />
          <span
            className={[
              'text-[0.88rem] font-semibold transition-colors duration-200',
              isOpen ? 'text-[#0a3f94]' : 'text-slate-900',
            ].join(' ')}
          >
            {item.name}
          </span>
        </div>

        <div className="flex flex-shrink-0 items-center gap-3.5">
          <span
            className={[
              'flex h-6 w-6 items-center justify-center rounded-full text-base font-bold leading-none transition-all duration-200',
              isOpen
                ? 'rotate-45 bg-[#0a3f94] text-white'
                : 'rotate-0 bg-slate-100 text-slate-500',
            ].join(' ')}
          >
            +
          </span>
        </div>
      </button>

      {/* Body */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? 300 : 0 }}
      >
        <div className="pb-4 pl-10 pr-5 text-[0.83rem] leading-relaxed text-slate-500">
          {item.details && (
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              {item.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-[3px] flex-shrink-0 text-green-500">✓</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          )}
          {item.note && (
            <p className={`mb-0 italic text-slate-400 ${item.details ? 'mt-2.5' : 'mt-0'}`}>
              {item.note}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

function ServiceAccordion({ title, items }) {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div>
      {title && (
        <h4 className="mb-3 pl-1 text-base font-bold text-slate-900">{title}</h4>
      )}
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default ServiceAccordion
