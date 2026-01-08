import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import OurTeam from './pages/OurTeam.jsx'
import Careers from './pages/Careers.jsx'
import BuddyCan from './pages/BuddyCan.jsx'
import SmartTank from './pages/SmartTank.jsx'
import DieselOnTap from './pages/DieselOnTap.jsx'
import FBVault from './pages/FBVault.jsx'
import OurBlog from './pages/OurBlog.jsx'
import AwardsRecognition from './pages/AwardsRecognition.jsx'
import ContactUs from './pages/ContactUs.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import SimplePage from './pages/SimplePage.jsx'
import OrderFuel from './pages/OrderFuel.jsx'
import PageShell from './components/PageShell.jsx'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<PageShell><AboutUs /></PageShell>} />
        <Route path="/leadership-team" element={<PageShell><OurTeam /></PageShell>} />
        <Route path="/careers" element={<PageShell><Careers /></PageShell>} />
        <Route path="/solutions/buddy-can" element={<PageShell><BuddyCan /></PageShell>} />
        <Route path="/solutions/smart-tank" element={<PageShell><SmartTank /></PageShell>} />
        <Route path="/solutions/diesel-on-tap" element={<PageShell><DieselOnTap /></PageShell>} />
        <Route path="/solutions/fb-vault" element={<PageShell><FBVault /></PageShell>} />
        <Route path="/our-blog" element={<PageShell><OurBlog /></PageShell>} />
        <Route path="/our-blog/page/:page" element={<PageShell><OurBlog /></PageShell>} />
        <Route path="/our-blog/:slug" element={<PageShell><OurBlog /></PageShell>} />
        <Route path="/awards-recognition" element={<PageShell><AwardsRecognition /></PageShell>} />
        <Route path="/contact-us" element={<PageShell><ContactUs /></PageShell>} />
        <Route path="/privacy-policy" element={<PageShell><PrivacyPolicy /></PageShell>} />
        <Route path="/terms-conditions" element={<PageShell><TermsConditions /></PageShell>} />
        <Route path="/our-products" element={<PageShell><SimplePage title="Our Products" /></PageShell>} />
        <Route path="/order-fuel" element={<OrderFuel />} />
      </Routes>
    </BrowserRouter>
  )
}
