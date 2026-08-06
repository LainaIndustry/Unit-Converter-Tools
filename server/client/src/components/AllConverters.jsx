import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useConversion } from '../context/ConversionContext';

const AllConverters = () => {
  const { categories, setSelectedCategory } = useConversion();
  const [expandedCategory, setExpandedCategory] = useState(null);

  const otherCategories = categories.filter(cat => !cat.isPopular);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    document.getElementById('convert')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          All Unit Converters
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our complete collection of unit converters
        </p>

        <div className="max-w-4xl mx-auto space-y-4">
          {otherCategories.map((category) => (
            <div
              key={category._id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleCategory(category._id)}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="font-semibold text-gray-900">{category.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">{category.description}</span>
                  {expandedCategory === category._id ? (
                    <FaChevronDown className="text-gray-400" />
                  ) : (
                    <FaChevronRight className="text-gray-400" />
                  )}
                </div>
              </button>

              {expandedCategory === category._id && (
                <div className="px-6 pb-4 animate-fade-in-up">
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      className="btn-primary"
                      onClick={() => handleCategoryClick(category._id)}
                    >
                      Convert {category.name}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllConverters;
