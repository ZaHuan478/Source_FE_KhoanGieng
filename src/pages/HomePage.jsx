import { useEffect, useState } from 'react'
import CtaBannerSection from '../components/sections/CtaBannerSection'
import FooterSection from '../components/sections/FooterSection'
import Header from '../components/sections/Header'
import HeroSection from '../components/sections/HeroSection'

import ServicesSection from '../components/sections/ServicesSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
import FeatureHighlightsSection from '../components/sections/FeatureHighlightsSection'
import {
  footerServices,
  navItems,
  services,
  whyPoints,
} from '../data/siteContent'

function HomePage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="bg-slate-100 text-slate-900">
      <Header scrolled={scrolled} navItems={navItems} />
      <HeroSection />
      <ServicesSection services={services} />

      <WhyChooseUsSection whyPoints={whyPoints} />
      <FeatureHighlightsSection />
      <CtaBannerSection />
      <FooterSection footerServices={footerServices} />
    </div>
  )
}

export default HomePage
