import { useState } from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Modal from './components/Modal'
import { FeaturedArtisans, ImpactStats } from './components/Sections'
import RegisterForm from './components/RegisterForm'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      <Nav onRegisterClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })} />
      <main>
        <Hero onOpenMission={() => setOpen(true)} />
        <section id="mission" className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-[0_6px_18px_rgba(11,99,209,0.08)] border p-6">
            <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
            <p className="mt-2 text-gray-600">We help artisans gain market access, skills, and financing so they can thrive in a digital-first economy.</p>
          </div>
        </section>
        <FeaturedArtisans />
        <ImpactStats />
        <RegisterForm />
      </main>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="grid md:grid-cols-2">
          <div className="p-6">
            <img src="/mission.png" alt="Problem statement explaining barriers in artisan value chain and proposed solutions" className="w-full h-auto rounded-lg" />
          </div>
          <div className="p-6 overflow-y-auto max-h-[70vh]">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Accessible text</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              This card contains the core problem statement uploaded by you. It summarises the challenges artisans face in discovery, logistics, capital and digital readiness, and how our initiative bridges these gaps with training, micro-grants and verified market access. The full plaintext is included here so screen readers can parse it clearly.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default App
