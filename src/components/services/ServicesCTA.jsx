import { useState } from 'react'
import { Send } from 'lucide-react'
import InputField from '../common/InputField'
import TextareaField from '../common/TextareaField'
import { submitLead } from '../../api/leadApi'

const initialForm = { fullName: '', phone: '', address: '', message: '' }

function ServicesCTA() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('loading')

    try {
      await submitLead({ ...form, source: 'service_quote', subject: 'Yêu cầu báo giá chi tiết' })
      setForm(initialForm)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err.details?.phone || err.details?.fullName || 'Khong the gui yeu cau. Vui long thu lai.')
    }
  }

  return (
    <section id="yeu-cau-bao-gia" className="mx-auto mt-8 w-full max-w-4xl px-4 pb-16 sm:mt-10 sm:px-6 lg:px-8">
      <div className="soft-surface rounded-3xl p-6 sm:p-7">
        <h3 className="font-display text-3xl font-bold italic text-[var(--page-text)] sm:text-[2rem]">Yêu Cầu Báo Giá Chi Tiết</h3>

        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-3 sm:grid-cols-2">
            <InputField
              label="Họ và tên"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Nguyen Van A"
              required
              labelClassName="text-[11px] font-medium uppercase tracking-wide text-[#D1A275]"
            />
            <InputField
              label="Số điện thoại"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="0905 XXX XXX"
              type="tel"
              required
              labelClassName="text-[11px] font-medium uppercase tracking-wide text-[#D1A275]"
            />
          </div>

          <InputField
            label="Địa chỉ thi công"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Huyện/Thành phố tại Phú Yên"
            labelClassName="text-[11px] font-medium uppercase tracking-wide text-[#D1A275]"
          />

          <TextareaField
            label="Ghi chú yêu cầu"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            placeholder="Ví dụ: Khoan giếng gia đình, độ sâu dự kiến 40m..."
            labelClassName="text-[11px] font-medium uppercase tracking-wide text-[#D1A275]"
            textareaClassName="mt-1.5 w-full rounded-lg border border-[var(--soft-border)] bg-[var(--soft-surface)] px-3 py-2.5 text-sm text-[var(--page-text)] outline-none focus:border-[var(--accent)]"
          />

          {status === 'success' ? (
            <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
              Da nhan yeu cau bao gia. Chung toi se lien he som nhat.
            </p>
          ) : null}
          {error ? (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {status === 'loading' ? 'Dang gui...' : 'Gui yeu cau bao gia'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ServicesCTA
