import { SOCIAL_ACTIONS } from '../../data/contants'

const fallbackFooterServices = [
  'Khoan giếng công nghiệp',
  'Khoan giếng dân dụng',
  'Lắp đặt hệ thống bơm',
]

function FooterSocialAction({ action }) {
  const content = (
    <>
      <span className={action.iconColorClass}>
        <action.Icon />
      </span>
      <span className="sr-only">{action.name}</span>
    </>
  )

  const className = [
    'inline-flex h-11 w-11 items-center justify-center rounded-xl',
    'border border-[var(--soft-border)] bg-[var(--soft-surface-strong)]',
    'text-[var(--page-text)] shadow-[0_12px_28px_rgba(15,23,42,0.10)]',
    'transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_18px_34px_rgba(10,102,194,0.16)]',
  ].join(' ')

  if (action.href) {
    return (
      <a
        href={action.href}
        target={action.openInNewTab ? '_blank' : undefined}
        rel={action.openInNewTab ? 'noopener noreferrer' : undefined}
        className={className}
        aria-label={action.name}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={className} aria-label={action.name}>
      {content}
    </button>
  )
}

function FooterSection() {
  return (
    <footer className="ambient-section border-t border-[var(--soft-border)] bg-[linear-gradient(135deg,rgba(10,102,194,0.10),rgba(56,189,248,0.12))]">
      <div className="mx-auto grid w-full max-w-300 gap-7 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.8fr_1.05fr] lg:px-8">
        <div>
          <h4 className="font-display text-3xl font-extrabold text-[var(--page-text)]">
            Liên hệ
          </h4>

          <div className="mt-4 space-y-2.5 text-sm leading-6 text-[var(--muted-text)]">
            <p className="text-base font-extrabold uppercase text-[var(--page-text)]">
              Công ty TNHH Trường Giang
            </p>
            <p>
              <strong className="text-[var(--page-text)]">Địa chỉ:</strong> Số 165 Hùng Vương, Phường Tuy Hòa,
              Tỉnh Đắk Lắk, Việt Nam
            </p>
            <p>
              <strong className="text-[var(--page-text)]">Hotline:</strong> 0945 455 458
            </p>
            <p>
              <strong className="text-[var(--page-text)]">Email:</strong> huan1234@gmail.com
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {SOCIAL_ACTIONS.map((action) => (
              <FooterSocialAction key={action.name} action={action} />
            ))}
          </div>
        </div>

        {/* <div className="lg:ml-8">
          <h5 className="inline-flex rounded-full border border-[var(--soft-border)] bg-[var(--accent-soft)] px-4 py-2 text-xs font-extrabold uppercase text-[var(--accent)]">
            Dịch
          </h5>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted-text)]">
            {fallbackFooterServices.map((service) => (
              <li key={service} className="transition-colors hover:text-[var(--page-text)]">
                {service}
              </li>
            ))}
          </ul>
        </div> */}

        <div className="soft-surface overflow-hidden rounded-[22px] p-2">
          <iframe
            title="Bản đồ Công ty TNHH Trường Giang"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1157810649183!2d109.31086547572428!3d13.091848012229157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316fec38c83a83cf%3A0x5a80759cf7e0ad24!2zQ8O0bmcgdHkgVE5ISCBUcsaw4budbmcgR2lhbmc!5e0!3m2!1svi!2s!4v1774990373481!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '220px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-full w-full rounded-[16px]"
          />
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
