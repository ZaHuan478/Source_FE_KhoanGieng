function InputField({
  label,
  placeholder,
  type = 'text',
  labelClassName,
  inputClassName,
  wrapperClassName,
  ...inputProps
}) {
  return (
    <label className={wrapperClassName ?? 'block'}>
      <span className={`text-[13px] font-medium ${labelClassName ?? 'text-slate-600'}`}>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className={
          inputClassName ??
          'mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
        }
        {...inputProps}
      />
    </label>
  )
}

export default InputField
