import { useState } from 'react'
import { SendHorizontal } from 'lucide-react'
import InputField from '../common/InputField'
import SelectField from '../common/SelectField'
import TextareaField from '../common/TextareaField'
import { consultationOptions } from '../../data/contact.contants'
import { submitLead } from '../../api/leadApi'

const fieldLabel = 'ml-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7c5730]'
const fieldInput = 'mt-1.5 w-full rounded-xl border border-[var(--soft-border)] bg-[var(--soft-surface)] px-4 py-3 text-sm text-[var(--page-text)] outline-none focus:ring-2 focus:ring-[#0a66c2]/25'
const fieldSelect = 'w-full appearance-none rounded-xl border border-[var(--soft-border)] bg-[var(--soft-surface-strong)] px-4 py-3 pr-12 text-sm font-bold text-[var(--page-text)] outline-none transition focus:border-[#0a66c2] focus:ring-2 focus:ring-[#0a66c2]/25'

const initialForm = {
    fullName: '',
    phone: '',
    email: '',
    subject: consultationOptions[0] || '',
    message: '',
}

function ContactFormPanel() {
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
        setError('')

        try {
            await submitLead({ ...form, source: 'contact' })
            setForm(initialForm)
            setStatus('success')
        } catch (err) {
            setStatus('error')
            setError(err.details?.phone || err.details?.fullName || err.details?.email || 'Không thể gửi thông tin. Vui lòng thử lại.')
        }
    }

    return (
        <div className="soft-surface h-full rounded-3xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-[var(--page-text)] sm:text-3xl">
                Gửi lời nhắn cho chúng tôi
            </h3>

            <form className="mt-7 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                <InputField
                    label="Họ và tên"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Nguyen Van A"
                    required
                    labelClassName={fieldLabel}
                    inputClassName={fieldInput}
                />
                <InputField
                    label="Số điện thoại"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="09xx xxx xxx"
                    required
                    labelClassName={fieldLabel}
                    inputClassName={fieldInput}
                />

                <InputField
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="example@email.com"
                    wrapperClassName="sm:col-span-2"
                    labelClassName={fieldLabel}
                    inputClassName={fieldInput}
                />

                <SelectField
                    label="Chủ đề"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    options={consultationOptions}
                    wrapperClassName="sm:col-span-2"
                    labelClassName={fieldLabel}
                    selectClassName={fieldSelect}
                />

                <TextareaField
                    label="Nội dung"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    wrapperClassName="sm:col-span-2"
                    labelClassName={fieldLabel}
                    textareaClassName={fieldInput}
                />

                {status === 'success' ? (
                    <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 sm:col-span-2">
                        Đã nhận thông tin. Chúng tôi sẽ liên hệ sớm nhất.
                    </p>
                ) : null}
                {error ? (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 sm:col-span-2">
                        {error}
                    </p>
                ) : null}

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] py-3.5 font-bold text-white disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
                >
                    {status === 'loading' ? 'Đang gửi...' : 'Gửi lời nhắn'}
                    <SendHorizontal size={18} />
                </button>
            </form>
        </div>
    )
}

export default ContactFormPanel
