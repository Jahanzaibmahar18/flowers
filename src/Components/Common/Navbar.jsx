import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Search, Menu, X, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FLORA from '../../assets/FLORA.jpeg';
import { useCart } from '../../Context/CartContext';
import { products } from '../../data/products';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCart();

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
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">

        <div className="flex justify-between h-16 sm:h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={FLORA}
                alt="Logo"
                className="h-10 w-auto sm:h-12 object-contain rounded-2xl"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-4 xl:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-pink-500 text-xs xl:text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-4">

            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => {
                  setShowSearch(!showSearch);
                  setShowCart(false);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Search"
              >
                <Search size={20} className="sm:w-5 sm:h-5" />
              </button>

              {showSearch && (
                <div className="absolute right-0 sm:right-0 top-14 w-[85vw] sm:w-80 md:w-96 bg-white shadow-xl rounded-lg z-50 p-3 sm:p-4 border border-gray-100">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                    autoFocus
                  />
                  {searchQuery && (
                    <div className="max-h-48 sm:max-h-64 overflow-y-auto mt-2">
                      {filteredProducts.length > 0 ? (
                        filteredProducts.slice(0, 6).map((product) => (
                          <Link
                            key={product.id}
                            to="/products"
                            onClick={() => {
                              setShowSearch(false);
                              setSearchQuery('');
                            }}
                            className="flex items-center gap-2 sm:gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded"
                            />
                            <div>
                              <p className="font-medium text-sm">{product.name}</p>
                              <p className="text-pink-600 text-xs sm:text-sm">Rs. {product.price.toLocaleString()}</p>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <p className="text-gray-500 text-sm p-2">No products found</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Cart */}
            <div className="relative" ref={cartRef}>
              <button
                onClick={() => {
                  setShowCart(!showCart);
                  setShowSearch(false);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingCart size={20} className="sm:w-5 sm:h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {showCart && (
                <div className="absolute right-0 sm:right-0 top-14 w-[85vw] sm:w-80 md:w-96 bg-white shadow-xl rounded-lg z-50 max-h-[80vh] overflow-hidden border border-gray-100">
                  {cartItems.length === 0 ? (
                    <div className="p-6 sm:p-8 text-center text-gray-500">
                      <ShoppingCart size={32} className="mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Your cart is empty</p>
                    </div>
                  ) : (
                    <>
                      <div className="max-h-48 sm:max-h-64 overflow-y-auto divide-y">
                        {cartItems.map((item) => (
                          <div key={item.id} className="p-2 sm:p-3 flex gap-2 sm:gap-3">
                            <img
                              src={item.mainImg}
                              alt={item.title}
                              className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs sm:text-sm font-medium truncate">{item.title}</p>
                              <p className="text-pink-600 font-bold text-xs sm:text-sm">
                                Rs. {item.price.toLocaleString()}
                              </p>
                              <div className="flex items-center gap-1 sm:gap-2 mt-1">
                                <button
                                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                  className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
                                >
                                  −
                                </button>
                                <span className="text-xs sm:text-sm w-4 text-center">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 p-1 hover:bg-red-50 rounded transition-colors"
                            >
                              <Trash2 size={14} className="sm:w-4 sm:h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 sm:p-4 border-t bg-gray-50">
                        <div className="flex justify-between font-bold mb-2">
                          <span className="text-sm">Total:</span>
                          <span className="text-pink-600 text-sm">Rs. {getTotalPrice().toLocaleString()}</span>
                        </div>
                        <Link
                          to="/Addtocart"
                          onClick={() => setShowCart(false)}
                          className="block w-full bg-pink-500 text-white text-center py-2 sm:py-2.5 rounded-lg text-sm font-medium hover:bg-pink-600 transition-colors"
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
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setShowSearch(false);
                setShowCart(false);
              }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
              aria-label="Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t">
          <div className="px-3 sm:px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2.5 sm:py-3 text-sm font-medium text-gray-600 hover:text-pink-500 hover:bg-gray-50 rounded-lg transition-colors"
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