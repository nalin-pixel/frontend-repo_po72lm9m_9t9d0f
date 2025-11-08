import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyItMatters from './components/WhyItMatters';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Features />
      <WhyItMatters />
      <CTA />
      <footer className="w-full bg-black py-10 text-center text-white/60">
        © {new Date().getFullYear()} Dory. Built for families.
      </footer>
    </div>
  );
}

export default App;
