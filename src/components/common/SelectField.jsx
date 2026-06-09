import { ChevronDown } from 'lucide-react'

function normalizeOption(option) {
  if (typeof option === 'string') {
    return { label: option, value: option }
  }

  return {
    label: option.label ?? option.value,
    value: option.value ?? option.label,
  }
}

function SelectField({
  label,
  options = [],
  labelClassName,
  selectClassName,
  wrapperClassName,
  error,
  hint,
  ...selectProps
}) {
  const resolvedOptions = options.map(normalizeOption)

  return (
    <label className={wrapperClassName ?? 'block'}>
      {label ? (
        <span className={`text-[13px] font-medium ${labelClassName ?? 'text-slate-600'}`}>
          {label}
        </span>
      ) : null}

      <span className="relative mt-1.5 block">
        <select
          className={
            selectClassName ??
            'w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-sm font-semibold text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
          }
          {...selectProps}
        >
          {resolvedOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[var(--muted-text)]">
          <ChevronDown className="h-4 w-4" />
        </span>
      </span>

      {error ? (
        <span className="mt-1.5 block text-xs font-semibold text-red-600">{error}</span>
      ) : hint ? (
        <span className="mt-1.5 block text-xs text-[var(--muted-text)]">{hint}</span>
      ) : null}
    </label>
  )
}

export default SelectField
