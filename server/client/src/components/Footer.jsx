import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary-400">Unit</span>
              <span className="text-2xl font-bold text-white">Converter</span>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted source for accurate unit conversions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#convert" className="hover:text-white transition-colors duration-200 text-sm">Convert</a></li>
              <li><a href="#common" className="hover:text-white transition-colors duration-200 text-sm">Common Conversions</a></li>
              <li><a href="#all" className="hover:text-white transition-colors duration-200 text-sm">All Converters</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#length" className="hover:text-white transition-colors duration-200 text-sm">Length</a></li>
              <li><a href="#mass" className="hover:text-white transition-colors duration-200 text-sm">Mass</a></li>
              <li><a href="#temperature" className="hover:text-white transition-colors duration-200 text-sm">Temperature</a></li>
              <li><a href="#more" className="hover:text-white transition-colors duration-200 text-sm">More...</a></li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-white transition-colors duration-200" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} UnitConverter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
