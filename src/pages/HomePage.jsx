import { useEffect, useState } from 'react'
import ContactSection from '../components/sections/ContactSection'
import CtaBannerSection from '../components/sections/CtaBannerSection'
import FooterSection from '../components/sections/FooterSection'
import Header from '../components/sections/Header'
import HeroSection from '../components/sections/HeroSection'
import HomeFeatureGridSection from '../components/sections/HomeFeatureGridSection'
import ServicesSection from '../components/sections/ServicesSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
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
      <HomeFeatureGridSection />
      <div className="w-full bg-white">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-slate-300/80" />
        </div>
      </div>
      <WhyChooseUsSection whyPoints={whyPoints} />
      <CtaBannerSection />
      <ContactSection />
      <FooterSection footerServices={footerServices} />
    </div>
  )
}

export default HomePage
