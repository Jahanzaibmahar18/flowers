import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import FLORA from '../../assets/FLORA.jpeg';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/products' },
    { name: 'Make Your Own', path: '/make-your-own' },
    { name: 'Our Outlets', path: '/our-outlets' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <img
              src={FLORA}
              alt="FloraBloom Logo"
              className="h-12 w-auto object-contain rounded-2xl" // Height of 20 to match navbar, auto width, object-contain to fit
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-600 hover:text-pink-500 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out border-b-2 border-transparent hover:border-pink-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Icons Section (Search & Cart) + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-gray-600 hover:text-pink-500 transition-colors p-1">
              <Search size={22} />
            </button>

            {/* Cart Icon with Badge */}
            <button className="text-gray-600 hover:text-pink-500 transition-colors p-1 relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-pink-500 hover:bg-pink-100 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-pink-50 border-t border-pink-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:bg-pink-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;