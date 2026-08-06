import React from 'react';
import { useConversion } from '../context/ConversionContext';
import { 
  FaRuler, FaWeight, FaCube, FaThermometerHalf, 
  FaVectorSquare, FaRunning, FaClock, FaWind 
} from 'react-icons/fa';

const CommonConversions = () => {
  const { setSelectedCategory, categories } = useConversion();

  const commonCategories = categories.filter(cat => cat.isPopular);

  const getIcon = (slug) => {
    const icons = {
      length: FaRuler,
      mass: FaWeight,
      volume: FaCube,
      temperature: FaThermometerHalf,
      area: FaVectorSquare,
      speed: FaRunning,
      time: FaClock,
      pressure: FaWind,
    };
    return icons[slug] || FaRuler;
  };

  const handleCardClick = (categoryId) => {
    setSelectedCategory(categoryId);
    document.getElementById('convert')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Common Conversions
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Quick access to the most frequently used unit conversions
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {commonCategories.map((category, index) => {
            const Icon = getIcon(category.slug);
            return (
              <div
                key={category._id}
                className="card cursor-pointer hover:transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => handleCardClick(category._id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-3xl text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommonConversions;
