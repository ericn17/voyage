import React, { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-violet-950 p-4 flex items-center justify-between flex-1 w-full">
      {/* Items on the left */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/" className="text-white text-lg">
          Home
        </Link>
        <Link href="/destinations" className="text-white text-lg">
          Destinations
        </Link>
        <Link href="/book-flights" className="text-white text-lg">
          Book Flights
        </Link>
        <Link href="/spacecrafts" className="text-white text-lg">
          Spacecrafts
        </Link>
        <Link href="/travel-resources" className="text-white text-lg">
          Travel Resources
        </Link>
      </div>

      {/* Logo in the middle */}
      <Link href="/" className="text-white text-2xl font-bold">
        VOYAGE
      </Link>

      {/* Items on the right */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/sign-in" className="text-white text-lg">
          Sign In
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
           <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/" className="text-white text-lg">
              Home
            </Link>
            <Link href="/destinations" className="text-white text-lg">
              Destinations
            </Link>
            <Link href="/book-flights" className="text-white text-lg">
              Book Flights
            </Link>
            <Link href="/spacecrafts" className="text-white text-lg">
              Spacecrafts
            </Link>
            <Link href="/travel-resources" className="text-white text-lg">
              Travel Resources
            </Link>
            <Link href="/sign-in" className="text-white text-lg">
              Sign In
            </Link>
            <Link href="/contact" className="text-white text-lg">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


