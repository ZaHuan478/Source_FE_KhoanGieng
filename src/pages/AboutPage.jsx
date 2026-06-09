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
import { useMediaAssets } from '../hooks/useMediaAssets'

function AboutPage() {
  const [scrolled, setScrolled] = useState(false)
  const { media } = useMediaAssets()
  const resolvedEquipmentItems = equipmentItems.map((item) => ({
    ...item,
    image: media.images[item.imageKey]?.url,
  }))

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-shell">
      <Header scrolled={scrolled} navItems={navItems} logo={media.images.logo} />

      <main className="site-flow">
        <AboutHero image={media.images.aboutHero?.url} />
        <AboutTimeline image={media.images.aboutTimeline} />
        <EquipmentSection equipmentItems={resolvedEquipmentItems} />
        <AboutCTA />
      </main>

      <FooterSection footerServices={footerServices} />
    </div>
  )
}

export default AboutPage
