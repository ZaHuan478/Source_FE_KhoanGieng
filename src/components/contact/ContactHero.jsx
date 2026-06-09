import { Headphones, PhoneCall } from 'lucide-react'

function ContactHero({ image }) {
    return (
        <section className="relative overflow-hidden px-4 pb-12 pt-32 text-center sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(10,102,194,0.18),transparent_20rem),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.12),transparent_24rem)]" />
            {image?.url ? (
                <img
                    src={image.url}
                    alt={image.alt || 'Lien he voi Truong Giang'}
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
                />
            ) : null}

            <div className="relative mx-auto flex min-h-[420px] max-w-5xl flex-col items-center justify-center">
                <span className="soft-surface inline-flex h-8 items-center gap-2 rounded-full px-4 text-[10px] font-extrabold uppercase tracking-[0.34em] text-[var(--muted-text)]">
                    <Headphones className="h-3.5 w-3.5 accent-text" />
                    Contact Support
                </span>

                <h1 className="mt-7 text-balance font-display text-[clamp(3rem,7vw,6.4rem)] font-extrabold uppercase leading-[0.9] text-[var(--page-text)]">
                    Liên hệ
                    <span className="accent-text block italic normal-case">tư vấn 24/7</span>
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-8 text-[var(--muted-text)]">
                    Gửi thông tin công trình, chúng tôi sẽ tư vấn phương án khoan giếng và liên hệ lại sớm nhất.
                </p>

                <a
                    href="tel:0945455458"
                    className="mt-9 inline-flex h-14 items-center gap-3 rounded-[15px] bg-[var(--accent)] px-6 text-base font-extrabold text-white shadow-[0_18px_38px_rgba(10,102,194,0.24)] transition hover:-translate-y-0.5"
                >
                    <PhoneCall className="h-5 w-5" />
                    0945 455 458
                </a>
            </div>
        </section>
    )
}

export default ContactHero
