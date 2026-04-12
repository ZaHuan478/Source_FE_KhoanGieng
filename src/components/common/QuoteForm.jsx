import { useState } from 'react'

const initialForm = { name: '', phone: '', address: '', depth: '' }

function Field({ label, type = 'text', name, value, onChange, placeholder, error }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.8rem] font-semibold text-gray-700">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={[
          'w-full rounded-[10px] border bg-[#fafbff] px-3.5 py-2.5 text-[0.85rem] text-slate-900 outline-none transition-all duration-200 focus:border-[#0a3f94] focus:ring-2 focus:ring-[#0a3f94]/10',
          error ? 'border-red-500' : 'border-[#dde3ef]',
        ].join(' ')}
      />
      {error && (
        <span className="mt-1 block text-[0.73rem] text-red-500">{error}</span>
      )}
    </label>
  )
}

function QuoteForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Vui lòng nhập họ tên'
    if (!form.phone.trim()) e.phone = 'Vui lòng nhập số điện thoại'
    else if (!/^[0-9]{9,11}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Số điện thoại không hợp lệ'
    if (!form.address.trim()) e.address = 'Vui lòng nhập địa chỉ'
    if (form.depth && (isNaN(form.depth) || Number(form.depth) <= 0))
      e.depth = 'Độ sâu phải là số dương'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  if (submitted) {
    return (
      <div className="rounded-[20px] border border-green-200 bg-green-50 px-6 py-10 text-center">
        <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-400">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
            <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mb-2 text-[1.1rem] font-bold text-green-700">Yêu cầu đã được gửi!</h3>
        <p className="mb-5 text-[0.85rem] leading-relaxed text-green-800">
          Cảm ơn <strong>{form.name}</strong>! Chúng tôi sẽ liên hệ qua số{' '}
          <strong>{form.phone}</strong> trong thời gian sớm nhất.
        </p>
        <button
          onClick={() => { setForm(initialForm); setSubmitted(false) }}
          className="cursor-pointer rounded-full border border-green-600 bg-transparent px-5 py-2 text-[0.82rem] font-semibold text-green-600"
        >
          Gửi yêu cầu khác
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <Field
          label="Họ và tên *"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nguyễn Văn A"
          error={errors.name}
        />
        <Field
          label="Số điện thoại *"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="0912 345 678"
          error={errors.phone}
        />
        <div className="sm:col-span-2">
          <Field
            label="Địa chỉ thi công *"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Thôn/xã, huyện, tỉnh..."
            error={errors.address}
          />
        </div>
        <Field
          label="Độ sâu ước tính (m)"
          name="depth"
          type="number"
          value={form.depth}
          onChange={handleChange}
          placeholder="Ví dụ: 60"
          error={errors.depth}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={[
          'mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-[12px] border-none py-3 text-[0.9rem] font-bold text-white tracking-tight transition-all duration-200',
          loading
            ? 'cursor-not-allowed bg-slate-400 shadow-none'
            : 'bg-gradient-to-br from-[#0a3f94] to-[#1a6fd0] shadow-[0_4px_18px_rgba(10,63,148,0.30)] hover:opacity-90',
        ].join(' ')}
      >
        {loading ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
            Đang gửi...
          </>
        ) : (
          'Gửi yêu cầu báo giá →'
        )}
      </button>
    </form>
  )
}

export default QuoteForm
