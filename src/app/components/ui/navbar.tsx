'use client';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Technology', href: '#technology' },
    { label: 'Project', href: '#project' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full bg-gray-950/70 backdrop-blur-lg p-4 shadow-xl sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 md:px-4">
        
        {/* Logo */}
        <Link
          href="#home"
          className="text-3xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500  bg-clip-text hover:brightness-125 transition duration-300 text-white"
        >
          TEBIA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white relative group transition font-medium"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl transition-transform duration-200 hover:scale-110 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 py-4 space-y-3 bg-gray-900/95 backdrop-blur-md rounded-2xl mx-2 shadow-lg animate-fadeInDown">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-white text-base px-3 py-2 rounded-md hover:bg-green-600/30 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
