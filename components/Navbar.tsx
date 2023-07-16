import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex items-center justify-between flex-1 w-fullgit">
      {/* Items on the left */}
      <div className="flex items-center space-x-4">
        <a href="/" className="text-white text-lg">
          Home
        </a>
        <a href="/about" className="text-white text-lg">
          About
        </a>
      </div>

      {/* Logo in the middle */}
      <a href="/" className="text-white text-2xl font-bold">
        Your Logo
      </a>

      {/* Items on the right */}
      <div className="flex items-center space-x-4">
        <a href="/services" className="text-white text-lg">
          Services
        </a>
        <a href="/contact" className="text-white text-lg">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;