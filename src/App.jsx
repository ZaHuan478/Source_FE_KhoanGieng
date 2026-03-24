import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gioi-thieu" element={<AboutPage />} />
      <Route path="/dich-vu" element={<ServicesPage />} />
      <Route path="/bang-gia" element={<PricingPage />} />
      <Route path="/lien-he" element={<ContactPage />} />
    </Routes>
  )
}

export default App
