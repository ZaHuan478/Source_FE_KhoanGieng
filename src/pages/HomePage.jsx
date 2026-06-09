import { useEffect, useState } from 'react'
import { Header, FooterSection } from '../components/layout'
import {
  HeroSection,
  ServicesSection,
  WhyChooseUsSection,
  FeatureHighlightsSection,
  CtaBannerSection,
} from '../components/home'
import { footerServices, navItems, services, whyPoints } from '../data/siteContent'
import { useMediaAssets } from '../hooks/useMediaAssets'

function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const { media } = useMediaAssets()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="app-shell">
      <Header scrolled={scrolled} navItems={navItems} logo={media.images.logo} />
      <main className="site-flow">
        <HeroSection image={media.images.homeHero} />
        <ServicesSection services={services} mediaImages={media.images} />
        <WhyChooseUsSection whyPoints={whyPoints} video={media.videos.whyVideo} />
        <FeatureHighlightsSection />
        <CtaBannerSection />
      </main>
      <FooterSection footerServices={footerServices} />
    </div>
  )
}

export default HomePage
