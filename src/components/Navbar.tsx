import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-[1000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Link to Homepage */}
          <Link to="/" className="flex items-center no-underline" aria-label="TAXI Connect Home">
            <div className="flex items-center">
              <div className="bg-[var(--primary-color)] p-3 rounded-lg shadow-md">
                <i className="fas fa-taxi text-2xl text-white"></i>
              </div>
              <span className="text-xl font-bold text-gray-800 ml-3">Taxi Connect</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-[var(--primary-color)] transition-colors no-underline">Home</Link>
            <Link to="/ueber-uns" className="text-gray-600 hover:text-[var(--primary-color)] transition-colors no-underline">Über uns</Link>
            <Link to="/dienstleistungen" className="text-gray-600 hover:text-[var(--primary-color)] transition-colors no-underline">Dienstleistungen</Link>
            <Link to="/kontakt" className="text-gray-600 hover:text-[var(--primary-color)] transition-colors no-underline">Kontakt</Link>
            <a href="tel:+4915678421380" className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-full hover:bg-[var(--secondary-color)] transition-colors no-underline">
              <i className="fas fa-phone-alt mr-2"></i>015678421380
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-[var(--primary-color)]">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden absolute w-full bg-white shadow-lg z-[1001]`}>
        <div className="px-4 pt-2 pb-6 space-y-4">
          <Link to="/" className="block text-gray-600 hover:text-[var(--primary-color)] px-4 py-2 no-underline">Home</Link>
          <Link to="/ueber-uns" className="block text-gray-600 hover:text-[var(--primary-color)] px-4 py-2 no-underline">Über uns</Link>
          <Link to="/dienstleistungen" className="block text-gray-600 hover:text-[var(--primary-color)] px-4 py-2 no-underline">Dienstleistungen</Link>
          <Link to="/kontakt" className="block text-gray-600 hover:text-[var(--primary-color)] px-4 py-2 no-underline">Kontakt</Link>
          <a href="tel:+4915678421380" className="block bg-[var(--primary-color)] text-white px-6 py-2 rounded-full hover:bg-[var(--secondary-color)] text-center no-underline">
            <i className="fas fa-phone-alt mr-2"></i>015678421380
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 