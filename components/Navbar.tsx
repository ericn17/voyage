import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-purple-500 p-4 flex items-center justify-between flex-1 w-full">
      {/* Items on the left */}
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-white text-lg">
          Home
        </Link>
        <Link href="/book-flights" className="text-white text-lg">
          Book Flights
        </Link>
      </div>

      {/* Logo in the middle */}
      <Link href="/" className="text-white text-2xl font-bold">
        VOYAGE
      </Link>

      {/* Items on the right */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/services" className="text-white text-lg">
          Services
        </Link>
        <Link href="/contact" className="text-white text-lg">
          Contact
        </Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white text-xl p-2"
          onClick={handleMobileMenuToggle}
        >
          <Bars3Icon />
        </button>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-blue-500 z-50">
          <div className="flex justify-end p-4">
            <button
              className="text-white text-xl p-2"
              onClick={handleMobileMenuToggle}
            >
              ×
            </button>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/" className="text-white text-lg p-4">
              Home
            </Link>
            <Link href="/" className="text-white text-lg p-4">
              Home
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


