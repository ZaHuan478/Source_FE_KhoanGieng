import ContactInfoItem from "./ContactInfoItem";
import { contactHighlights } from "../../data/contact.contants";

function ContactInfoPanel() {
  return (
    <div className="space-y-6">
      <div className="soft-surface rounded-3xl p-6 sm:p-8">
        <p className="inline-flex rounded-full bg-[var(--accent-soft)] px-4 py-2 text-xs font-extrabold uppercase text-[var(--accent)]">
          Thông tin liên hệ
        </p>

        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[var(--page-text)]">
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
