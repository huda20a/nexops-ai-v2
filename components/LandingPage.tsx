'use client'

import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import TeamSection from './TeamSection'
import Footer from './Footer'

interface LandingPageProps {
  onStartPresentation: () => void
}

export default function LandingPage({ onStartPresentation }: LandingPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection onStartPresentation={onStartPresentation} />
      <AboutSection />
      <TeamSection />
      <Footer onStartPresentation={onStartPresentation} />
    </main>
  )
}
