import ContactInfoItem from "./ContactInfoItem";
import { contactHighlights } from "../../data/contact.contants";

function ContactInfoPanel() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 sm:p-8">
        <p className="text-[11px] tracking-[0.22em] text-[#7c5730] font-bold uppercase">
          Thông tin liên hệ
        </p>

        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
          CTY TNHH TRƯỜNG GIANG
        </h2>

        <div className="mt-6 space-y-3">
          {contactHighlights.map((item) => (
            <ContactInfoItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactInfoPanel