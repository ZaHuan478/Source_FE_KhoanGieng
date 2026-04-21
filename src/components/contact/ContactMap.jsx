function ContactMap() {
    return (
        <section className="mx-auto w-full max-w-[1240px] px-4 pb-16 sm:px-6 lg:px-8">
            <div className="relative h-[420px] overflow-hidden rounded-[1.4rem] bg-white shadow-[0_20px_40px_rgba(0,26,64,0.1)] ring-8 ring-[#f2f3fc] sm:h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1157810649183!2d109.31086547572428!3d13.091848012229157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316fec38c83a83cf%3A0x5a80759cf7e0ad24!2zQ8O0bmcgdHkgVE5ISCBUcsaw4budbmcgR2lhbmc!5e0!3m2!1svi!2s!4v1774990373481!5m2!1svi!2s"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bản đồ công ty"
                />
            </div>
        </section>
    )
}

export default ContactMap