import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-car-side text-2xl text-white mr-2"></i>
              <span className="text-xl font-bold">Taxi service Neumünster</span>
            </div>
            <p className="text-gray-400 mb-4">
              Ihr zuverlässiger Partner für Premium-Taxiservice in Neumünster und Umgebung.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors no-underline">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors no-underline">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors no-underline">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors no-underline">Home</Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-gray-400 hover:text-white transition-colors no-underline">Über uns</Link>
              </li>
              <li>
                <Link to="/dienstleistungen" className="text-gray-400 hover:text-white transition-colors no-underline">Dienstleistungen</Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-400 hover:text-white transition-colors no-underline">Kontakt</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-gray-400"></i>
                <span className="text-gray-400">Hauptstraße 123, 24534 Neumünster</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-gray-400"></i>
                <span className="text-gray-400">015678421380</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-gray-400"></i>
                <span className="text-gray-400">info@taxi-neumünster.de</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Taxi service Neumünster. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <Link to="/datenschutz" className="text-gray-500 hover:text-white transition-colors no-underline">Datenschutz</Link>
            <Link to="/agb" className="text-gray-500 hover:text-white transition-colors no-underline">AGB</Link>
            <Link to="/impressum" className="text-gray-500 hover:text-white transition-colors no-underline">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 