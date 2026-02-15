import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-body text-brand-text">
      {/* Navigation Placeholder */}
      <nav className="fixed w-full p-6 flex justify-between items-center z-50">
        <div className="font-serif text-xl tracking-widest">LAUREN COOPER</div>
        <ul className="flex space-x-8 font-sans text-sm uppercase tracking-wider">
          <li><a href="#about">About</a></li>
          <li><a href="#offerings">Offerings</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="h-screen w-full relative flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/hero.jpg')" }}></div>
        <div className="absolute inset-0 bg-white/20"></div> {/* Overlay */}
        <div className="relative z-10 text-center">
          <h2 className="font-script text-4xl md:text-5xl mb-4">Dr</h2>
          <h1 className="font-serif text-6xl md:text-8xl tracking-wide mb-6">Lauren Cooper</h1>
          <p className="font-sans text-sm uppercase tracking-[0.2em]">Educator &bull; Researcher &bull; Mentor</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-8 text-center max-w-4xl mx-auto">
        <p className="font-serif text-2xl md:text-3xl leading-relaxed">
          "I believe in the power of education to transform lives."
        </p>
      </section>

      {/* Spacer for checking scroll */}
      <div className="h-[50vh]"></div>

    </div>
  )
}

export default App
