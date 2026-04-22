import { useEffect, useState } from 'react'
import { Header, FooterSection } from '../components/layout'
import {
  AboutHero,
  AboutTimeline,
  AboutCTA,
  EquipmentSection,
} from '../components/about'

import { footerServices, navItems } from '../data/siteContent'
import { equipmentItems } from '../data/aboutData'

import downloadedImage from '../assets/6936ccfd-b606-471e-afea-f35479e0e8f6.jpg'

function AboutPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#f3f5fb] text-slate-900">
      <Header scrolled={scrolled} navItems={navItems} />

      <main className="pt-20">
        <AboutHero image={downloadedImage} />
        <AboutTimeline />
        <EquipmentSection equipmentItems={equipmentItems} />
        <section className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8"></section>
        <AboutCTA />
      </main>

      <FooterSection footerServices={footerServices} />
    </div>
  )
}

export default AboutPage
