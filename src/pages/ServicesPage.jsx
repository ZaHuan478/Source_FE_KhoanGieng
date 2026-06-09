import { useEffect, useRef, useState } from 'react'

import { Header, FooterSection } from '../components/layout'

import ServicesHero from '../components/services/ServicesHero'
import ServicesDetail from '../components/services/ServicesDetail'
import ProcessSteps from '../components/services/ProcessSteps'
import ServicesCTA from '../components/services/ServicesCTA'

import { footerServices, navItems } from '../data/siteContent'
import { useMediaAssets } from '../hooks/useMediaAssets'


function ServicesPage() {

  const [scrolled, setScrolled] = useState(false)
  const { media } = useMediaAssets()
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
    <div className="app-shell">

      <Header
        scrolled={scrolled}
        navItems={navItems}
        logo={media.images.logo}
      />

      <main className="site-flow">

        <ServicesHero
          scrollToDetail={scrollToDetail}
          image={media.images.servicesHero}
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
