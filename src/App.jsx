import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import About from './components/About'
import Services from './components/Services'
import RepairMaintenance from './components/RepairMaintenance'
import Training from './components/Training'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <About />
        <Services />
        <RepairMaintenance />
        <Training />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App