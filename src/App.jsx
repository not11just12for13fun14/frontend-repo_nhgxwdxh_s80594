import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Services, Membership, Trainers, Gallery, Testimonials, Pricing, Hours, MapAndContact, Footer } from './components/Sections'
import WhatsAppFAB from './components/WhatsAppFAB'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Membership />
      <Trainers />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Hours />
      <MapAndContact />
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}

export default App
