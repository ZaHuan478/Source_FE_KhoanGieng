import { useEffect, useRef, useState } from 'react'

import Header from '../components/sections/Header'
import FooterSection from '../components/sections/FooterSection'

import ServicesHero from '../components/services/ServicesHero'
import ServicesDetail from '../components/services/ServicesDetail'
import ProcessSteps from '../components/services/ProcessSteps'
import ServicesCTA from '../components/services/ServicesCTA'

import { footerServices, navItems } from '../data/siteContent'


function ServicesPage() {

  const [scrolled, setScrolled] = useState(false)
  const detailRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToDetail = () =>
    detailRef.current?.scrollIntoView({
      behavior: 'smooth'
    })

  return (
    <div className="bg-[#f3f5fb] text-slate-900">

      <Header
        scrolled={scrolled}
        navItems={navItems}
      />

      <main className="pt-14">

        <ServicesHero
          scrollToDetail={scrollToDetail}
        />

        <ServicesDetail
          detailRef={detailRef}
        />

        <ProcessSteps />

        <ServicesCTA />

      </main>

      <FooterSection
        footerServices={footerServices}
      />

    </div>
  )
}


export default ServicesPage
