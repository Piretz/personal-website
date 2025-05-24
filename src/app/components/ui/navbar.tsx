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
    <nav className="w-full bg-gray-950/70 backdrop-blur-md p-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold  text-white ">
          TEBIA
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white relative group transition"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden mt-4 px-4 py-4 space-y-4 bg-gray-900/90 backdrop-blur-md rounded-xl mx-2 shadow-inner animate-slideDown"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-white text-lg px-3 py-2 rounded-md hover:bg-green-600/20 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
