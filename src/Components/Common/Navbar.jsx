import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-white shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-20 items-center">

          {/* LOGO */}
          <div className="flex items-center">
            <img
              src={FLORA}
              alt="Logo"
              className="h-12 w-auto object-contain rounded-2xl"
            />
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-pink-500 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-4">

            {/* SEARCH */}
            <div className="relative">
              <button onClick={() => setShowSearch(!showSearch)}>
                <Search size={22} />
              </button>

              {/* SEARCH DROPDOWN */}
              {showSearch && (
                <div className="absolute right-0 top-12 w-[90vw] sm:w-96 bg-white shadow-lg rounded-lg z-50 p-4">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                  />
                  {searchQuery && (
                    <div className="max-h-64 overflow-y-auto">
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                          <Link
                            key={product.id}
                            to="/products"
                            onClick={() => {
                              setShowSearch(false);
                              setSearchQuery('');
                            }}
                            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-10 h-10 object-cover rounded"
                            />
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-pink-600 text-sm">Rs. {product.price}</p>
                            </div>
                          </Link>
                        ))
                      ) : (
                        <p className="text-gray-500">No products found</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* CART */}
            <div className="relative">

              <button onClick={() => setShowCart(!showCart)}>
                <ShoppingCart size={22} />

                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1.5 rounded-full">
                  {getTotalItems()}
                </span>
              </button>

              {/* CART DROPDOWN */}
              {showCart && (
                <div className="absolute right-0 top-12 w-[90vw] sm:w-96 bg-white shadow-lg rounded-lg z-50">

                  {/* EMPTY */}
                  {cartItems.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">
                      Your cart is empty
                    </div>
                  ) : (
                    <>
                      {/* ITEMS */}
                      <div className="max-h-64 overflow-y-auto divide-y">

                        {cartItems.map((item) => (
                          <div key={item.id} className="p-3 flex gap-3">

                            <img
                              src={item.mainImg}
                              alt={item.title}
                              className="w-14 h-14 object-cover rounded"
                            />

                            <div className="flex-1">

                              <p className="text-sm font-medium">
                                {item.title}
                              </p>

                              <p className="text-pink-600 font-bold text-sm">
                                Rs. {item.price.toLocaleString()}
                              </p>

                              {/* QTY */}
                              <div className="flex items-center gap-2 mt-1">

                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                  className="px-2 bg-gray-200 rounded"
                                >
                                  −
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                  className="px-2 bg-gray-200 rounded"
                                >
                                  +
                                </button>

                              </div>

                            </div>

                            {/* DELETE */}
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500"
                            >
                              <Trash2 size={16} />
                            </button>

                          </div>
                        ))}

                      </div>

                      {/* TOTAL */}
                      <div className="p-4 border-t">

                        <div className="flex justify-between font-bold">
                          <span>Total:</span>
                          <span className="text-pink-600">
                            Rs. {getTotalPrice().toLocaleString()}
                          </span>
                        </div>

                        <Link
                          to="/Addtocart"
                          onClick={() => setShowCart(false)}
                          className="block mt-3 bg-pink-500 text-white text-center py-2 rounded"
                        >
                          View Cart
                        </Link>

                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* MOBILE MENU */}
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-pink-500"
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