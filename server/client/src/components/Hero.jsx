import React from 'react';
import ConversionBar from './ConversionBar';

const Hero = () => {
  return (
    <section id="convert" className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4 animate-fade-in-up">
            Find the Units to Convert
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
            Quick, accurate conversions for thousands of units across all categories
          </p>
          
          <div className="animate-fade-in-up animation-delay-400">
            <ConversionBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
