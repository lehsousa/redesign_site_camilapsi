import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-background text-secondary font-sans selection:bg-primary/30">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
