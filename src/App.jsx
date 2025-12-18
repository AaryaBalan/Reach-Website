import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import About from './components/About'
import Services from './components/Services'
import FAQ from './components/FAQ'
import RepairMaintenance from './components/RepairMaintenance'
import Training from './components/Training'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TrainingPage from './pages/TrainingPage'
import RepairMaintenancePage from './pages/RepairMaintenancePage'

// Home Page Component
const HomePage = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Welcome />
      <About />
      <Services />
      <FAQ />
      <RepairMaintenance />
      <Training />
      <Clients />
      <Contact />
    </main>
    <Footer />
  </>
)

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/repair-maintenance" element={<RepairMaintenancePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App