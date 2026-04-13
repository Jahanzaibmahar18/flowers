import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FLORA from '../../assets/FLORA.jpeg';
import { useCart } from '../../Context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartItems, getTotalItems, removeFromCart, updateQuantity, getSubtotal } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/products' },
    { name: 'Make Your Own', path: '/make-your-own' },
    { name: 'Our Outlets', path: '/our-outlets' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const subtotal = getSubtotal(item.price) * item.quantity;
      return total + subtotal;
    }, 0);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <img
              src={FLORA}
              alt="FloraBloom Logo"
              className="h-12 w-auto object-contain rounded-2xl"
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
            <div className="relative">
              <button
                onClick={() => setShowCart(!showCart)}
                className="text-gray-600 hover:text-pink-500 transition-colors p-1 relative"
              >
                <ShoppingCart size={22} />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {getTotalItems()}
                </span>
              </button>

              {/* Cart Dropdown */}
              {showCart && (
                <div className="absolute right-0 top-12 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
                  {cartItems.length === 0 ? (
                    <div className="p-6 text-center">
                      <p className="text-gray-500">آپ کی ٹوکری خالی ہے</p>
                      <p className="text-xs text-gray-400 mt-2">Your cart is empty</p>
                    </div>
                  ) : (
                    <>
                      {/* Cart Items */}
                      <div className="divide-y max-h-64 overflow-y-auto">
                        {cartItems.map((item) => {
                          const subtotal = getSubtotal(item.price) * item.quantity;
                          return (
                            <div key={item.id} className="p-4 hover:bg-gray-50 transition">
                              <div className="flex gap-3">
                                {/* Product Image */}
                                <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                                  <img
                                    src={item.mainImg}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1">
                                  <h4 className="text-sm font-medium text-gray-800">
                                    {item.title}
                                  </h4>
                                  <p className="text-pink-600 font-bold text-sm">
                                    {item.price}
                                  </p>

                                  {/* Quantity Controls */}
                                  <div className="flex items-center gap-2 mt-2">
                                    <button
                                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xs"
                                    >
                                      −
                                    </button>
                                    <span className="text-xs font-semibold w-6 text-center">
                                      {item.quantity}
                                    </span>
                                    <button
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xs"
                                    >
                                      +
                                    </button>
                                  </div>

                                  {/* Subtotal */}
                                  <p className="text-xs text-gray-600 mt-1">
                                    Subtotal: <span className="font-bold text-gray-800">Rs. {subtotal.toLocaleString()}</span>
                                  </p>
                                </div>

                                {/* Remove Button */}
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="p-2 text-red-500 hover:bg-red-50 rounded transition"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Cart Footer */}
                      <div className="bg-gray-50 p-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-semibold text-gray-700">Total:</span>
                          <span className="text-lg font-bold text-pink-600">
                            Rs. {calculateTotal().toLocaleString()}
                          </span>
                        </div>
                        <Link
                          to="/Addtocart"
                          onClick={() => setShowCart(false)}
                          className="block w-full text-center bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition font-medium"
                        >
                          View Cart
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

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