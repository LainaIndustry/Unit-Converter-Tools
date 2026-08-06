import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useConversion } from '../context/ConversionContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { categories } = useConversion();

  const navItems = categories.slice(0, 9).map(cat => ({
    name: cat.name,
    slug: cat.slug,
  }));

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">Unit</span>
            <span className="text-2xl font-bold text-gray-800">Converter</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a href="#convert" className="btn-primary hidden sm:inline-block">
              Convert Now
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in-up">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.slug}
                  href={`#${item.slug}`}
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#convert"
                className="btn-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Convert Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
