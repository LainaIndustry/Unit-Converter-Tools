import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CommonConversions from './components/CommonConversions';
import AllConverters from './components/AllConverters';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <CommonConversions />
        <AllConverters />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
