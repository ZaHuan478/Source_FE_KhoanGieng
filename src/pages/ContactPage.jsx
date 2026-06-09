import { useEffect, useState } from 'react'
import { Header, FooterSection } from '../components/layout'

import ContactHero from '../components/contact/ContactHero'
import ContactInfoPanel from '../components/contact/ContactInfoPanel'
import ContactFormPanel from '../components/contact/ContactFormPanel'
import ContactMap from '../components/contact/ContactMap'

import { navItems, footerServices } from '../data/siteContent'
import { useMediaAssets } from '../hooks/useMediaAssets'

function ContactPage() {
  const [scrolled, setScrolled] = useState(false)
  const { media } = useMediaAssets()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-shell">
      <Header scrolled={scrolled} navItems={navItems} logo={media.images.logo} />

      <main className="site-flow">
        <ContactHero image={media.images.contactHero} />

        <section className="mx-auto grid max-w-[1240px] gap-7 px-4 py-12 lg:grid-cols-12">
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
