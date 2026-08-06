import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            About Unit Conversion
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              A unit is a measurement of a quantity that is defined or adopted by tradition or law. 
              Other quantities can be expressed as a multiple of the unit.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              In human history, various unit systems were developed and used in different regions 
              and cultures. Currently, the global standard of measurement is the International 
              System of Units (SI), which is a modern form of the metric system.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Although SI is intended for global use, it has not been fully adopted, and some other 
              systems of measurement are still used in parts of the world.
            </p>
            
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg mt-8">
              <p className="text-gray-800 leading-relaxed">
                <strong>Our Intent:</strong> To provide a convenient means to convert between the 
                various units of measurement within different systems, as well as to provide a 
                basic understanding of the systems currently in use, and how they interact.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="#" 
                className="text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
              >
                Learn More About Unit Systems →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
