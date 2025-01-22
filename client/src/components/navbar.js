import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src="components\WhatsApp Image 2025-01-22 at 08.40.47_2162ce2d.jpg" // Replace with the actual path to your uploaded logo
              alt="Clannova Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="ml-2 text-xl font-bold text-teal-400">CLANNOVA</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-teal-400 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-teal-400 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-teal-400 transition duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:text-teal-400 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* User Icon */}
          <div className="flex items-center">
            <FaUserCircle className="text-3xl text-teal-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
