function SelectField({
  label,
  options = [],
  labelClassName,
  selectClassName,
}) {
  return (
    <label className="block">
      <span className={`text-[13px] font-medium ${labelClassName ?? 'text-slate-600'}`}>
        {label}
      </span>
      <select
        className={
          selectClassName ??
          'mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
        }
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export default SelectField
