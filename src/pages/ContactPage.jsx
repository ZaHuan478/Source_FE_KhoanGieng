import { useEffect, useState } from 'react'
import { Header, FooterSection } from '../components/layout'

import ContactHero from '../components/contact/ContactHero'
import ContactInfoPanel from '../components/contact/ContactInfoPanel'
import ContactFormPanel from '../components/contact/ContactFormPanel'
import ContactMap from '../components/contact/ContactMap'

import { navItems, footerServices } from '../data/siteContent'

function ContactPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#f9f9ff] text-slate-900">
      <Header scrolled={scrolled} navItems={navItems} />

      <main className="pt-12">
        <ContactHero />

        <section className="max-w-[1240px] mx-auto px-4 py-12 lg:grid lg:grid-cols-12 gap-7">
          <div className="lg:col-span-5">
            <ContactInfoPanel />
          </div>

          <div className="lg:col-span-7">
            <ContactFormPanel />
          </div>
        </section>

        <ContactMap />
      </main>

      <FooterSection footerServices={footerServices} />
    </div>
  )
}

export default ContactPage