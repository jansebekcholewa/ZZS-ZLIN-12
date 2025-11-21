import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Values from './components/Values';
import Stats from './components/Stats';
import Jobs from './components/Jobs';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhyUs />
        <Team />
        <Values />
        <Stats />
        <Jobs />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;