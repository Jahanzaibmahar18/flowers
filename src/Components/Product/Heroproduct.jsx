import React, { useState, useMemo } from 'react';
import {
  LayoutGrid, ShoppingBag, ChevronDown, Minus,
  Heart, Eye, Grid2X2, Grid3X3, X, Plus, Headset
} from 'lucide-react';
import { useCart } from '../../Context/CartContext';
import { toast } from 'react-toastify';
import { products } from '../../data/products';

const Heroproduct = () => {
  const [cols, setCols] = useState(3);
  const [hoverCategory, setHoverCategory] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const { cartItems, addToCart: addToCartContext, getSubtotal } = useCart();

  const navigation = {
    "Shop by Categories": ["Bouquets", "Boxes", "Baskets", "Money Bouquets", "Vases", "Crochet Flowers"],
    "Shop by Occasions": ["Birthday", "Anniversary", "Valentines Day", "Mothers Day", "Fathers Day", "Eid & Ramadan"],
    "Shop by Flowers": ["Flowers", "Sun Flowers", "Lilies", "Baby Breath", "Chrysanthemum"]
  };

  const filteredProducts = useMemo(() => {
    return activeFilter === 'all' ? products : products.filter(p => p.category === activeFilter);
  }, [activeFilter, products]);

  const handleAddToCart = (product) => {
    const productData = {
      id: product.id,
      title: product.name,
      price: `Rs. ${product.price}`,
      mainImg: product.image,
      hoverImg: product.image,
    };
    addToCartContext(productData);
    toast.success(`${product.name} added to cart!`);
  };

  const toggleWishlist = (product) => {
    const isExist = wishlist.find(item => item.id === product.id);
    if (isExist) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const getGridClass = () => {
    if (cols === 2) return "grid-cols-1 sm:grid-cols-2";
    if (cols === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 p-4 md:p-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">

        {/* Sidebar */}
        <aside className="w-full lg:w-64 space-y-8 lg:sticky lg:top-10 shrink-0">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b pb-2 tracking-tight">Availability</h3>
            <div className="space-y-2.5 text-sm">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-pink-600 w-4 h-4" />
                In stock ({products.length})
              </label>
            </div>
          </div>
          <div className="border-t pt-6">
            <h3 className="text-xl font-bold mb-4 flex justify-between items-center tracking-tight">Price <Minus size={16} /></h3>
            <input type="range" max="160000" className="w-full h-1 bg-gray-200 accent-black rounded-lg appearance-none cursor-pointer" />
          </div>
          <div className="bg-pink-50 p-4 rounded-xl text-xs font-bold text-pink-700">
            Cart ({cartItems.length}) | Wishlist ({wishlist.length})
          </div>
        </aside>

        {/* Main Content */}
        <main className="grow">
          {/* Categories Navigation */}
          <div className="mb-10 relative border-b border-gray-100 pb-4">
            <div className="flex flex-wrap gap-12 justify-start items-center">
              {Object.keys(navigation).map((catHeading) => (
                <div key={catHeading} className="group" onMouseEnter={() => setHoverCategory(catHeading)} onMouseLeave={() => setHoverCategory(null)}>
                  <button className="text-[13px] font-bold uppercase tracking-widest text-gray-900 group-hover:text-pink-600 flex items-center gap-2 transition-all cursor-default">
                    {catHeading} <ChevronDown size={14} className={`transition-transform duration-300 ${hoverCategory === catHeading ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`absolute left-0 right-0 top-full pt-4 bg-white z-50 transition-all duration-300 flex flex-wrap gap-x-4 gap-y-2 ${hoverCategory === catHeading ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    {navigation[catHeading].map((subItem) => (
                      <button key={subItem} onClick={() => setActiveFilter(subItem)} className={`text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${activeFilter === subItem ? 'bg-pink-600 text-white border-pink-600' : 'bg-gray-50 text-gray-500 border-transparent hover:text-pink-600'}`}>
                        {subItem}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid View Controls */}
          <div className="flex justify-between items-center mb-8 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg border border-gray-100">
            <p className="font-medium">Showing {filteredProducts.length} items</p>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex gap-1.5 text-gray-400 border border-gray-200 rounded-md p-1 bg-white">
                <button onClick={() => setCols(2)} className={`p-1 rounded ${cols === 2 ? 'bg-gray-100 text-black' : ''}`}><Grid2X2 size={18} /></button>
                <button onClick={() => setCols(3)} className={`p-1 rounded ${cols === 3 ? 'bg-gray-100 text-black' : ''}`}><LayoutGrid size={18} /></button>
                <button onClick={() => setCols(4)} className={`p-1 rounded ${cols === 4 ? 'bg-gray-100 text-black' : ''}`}><Grid3X3 size={18} /></button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className={`grid ${getGridClass()} gap-x-6 gap-y-10 transition-all duration-500`}>
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer bg-white rounded-md overflow-hidden transition-all duration-300">
                <div className="relative aspect-square bg-[#fbfbfb] overflow-hidden rounded-md border border-gray-50">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain p-6 mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />

                  {/* Tooltip Icons */}
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-3 py-6 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-20">
                    <div className="relative group/tip">
                      <button onClick={() => toggleWishlist(product)} className={`p-3 rounded-full shadow-lg ${wishlist.find(i => i.id === product.id) ? 'bg-pink-600 text-white' : 'bg-white text-gray-700 hover:bg-pink-600 hover:text-white'}`}>
                        <Heart size={18} fill={wishlist.find(i => i.id === product.id) ? "currentColor" : "none"} />
                      </button>
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/tip:opacity-100 whitespace-nowrap">Wishlist</span>
                    </div>

                    <div className="relative group/tip">
                      <button onClick={() => setSelectedProduct(product)} className="bg-white text-gray-700 p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-all">
                        <Eye size={18} />
                      </button>
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/tip:opacity-100 whitespace-nowrap">Quick View</span>
                    </div>

                    <div className="relative group/tip">
                      <button onClick={() => handleAddToCart(product)} className="bg-white text-gray-700 p-3 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition-all">
                        <ShoppingBag size={18} />
                      </button>
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/tip:opacity-100 whitespace-nowrap">Add to Cart</span>
                    </div>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h4 className="font-serif font-semibold text-gray-800 hover:text-pink-600">{product.name}</h4>
                  <p className="font-bold text-pink-700">Rs.{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 z-10 bg-gray-100 p-2 rounded-full hover:bg-pink-600 hover:text-white">
              <X size={24} />
            </button>
            <div className="md:w-1/2 bg-[#f8f8f8] flex items-center justify-center p-10">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-pink-600 font-bold text-xs uppercase tracking-widest">{selectedProduct.category}</span>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">{selectedProduct.name}</h2>
              <p className="text-3xl font-bold text-pink-700 mt-4">Rs.{selectedProduct.price}</p>
              <p className="text-gray-500 my-6 leading-relaxed">Experience the elegance of our hand-picked floral arrangements, designed to bring joy to any occasion.</p>
              <button onClick={() => handleAddToCart(selectedProduct)} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-pink-700 transition-all flex items-center justify-center gap-2">
                <Plus size={20} /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Heroproduct;