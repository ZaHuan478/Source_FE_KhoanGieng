import { SendHorizontal } from 'lucide-react'
import InputField from '../common/InputField'
import SelectField from '../common/SelectField'
import TextareaField from '../common/TextareaField'
import { consultationOptions } from '../../data/contact.contants'

const fieldLabel = 'ml-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7c5730]'
const fieldInput = 'mt-1.5 w-full rounded-xl bg-[#e1e2ea] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#115cb9]/25'

function ContactFormPanel() {
    return (
        <div className="h-full rounded-3xl bg-[#f2f3fc] p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Gửi lời nhắn cho chúng tôi
            </h3>

            <form className="mt-7 grid gap-4 sm:grid-cols-2">
                <InputField label="Họ và tên" placeholder="Nguyễn Văn A" labelClassName={fieldLabel} inputClassName={fieldInput} />
                <InputField label="SĐT" type="tel" placeholder="09xx xxx xxx" labelClassName={fieldLabel} inputClassName={fieldInput} />

                <InputField label="Email" type="email" wrapperClassName="sm:col-span-2" labelClassName={fieldLabel} inputClassName={fieldInput} />

                <SelectField
                    label="Chủ đề"
                    options={consultationOptions}
                    wrapperClassName="sm:col-span-2"
                    labelClassName={fieldLabel}
                    selectClassName={fieldInput}
                />

                <TextareaField
                    label="Nội dung"
                    rows={4}
                    wrapperClassName="sm:col-span-2"
                    labelClassName={fieldLabel}
                    textareaClassName={fieldInput}
                />

                <button className="sm:col-span-2 flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-[#003f87] to-[#0056b3] py-3.5 text-white font-bold">
                    Gửi lời nhắn
                    <SendHorizontal size={18} />
                </button>
            </form>
        </div>
    )
}

export default ContactFormPanel