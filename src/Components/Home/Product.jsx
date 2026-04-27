import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { useCart } from '../../Context/CartContext';
import { toast } from 'react-toastify';

import flowers1 from '../../assets/flowers1.webp';
import flowers2 from '../../assets/flowers2.webp';
import flowers3 from '../../assets/flowers3.webp';
import flowers4 from '../../assets/flowers4.webp';
import flowers5 from '../../assets/flowers5.webp';
import flowers6 from '../../assets/flowers6.webp';
import flowers7 from '../../assets/flowers7.webp';
import flowers8 from '../../assets/flowers8.webp';
import flowers9 from '../../assets/flowers9.webp';
import flowers10 from '../../assets/flowers10.webp';
import flowers11 from '../../assets/flowers11.webp';
import flowers12 from '../../assets/flowers12.webp';

const ProductCarousel = () => {
  const flickityRef = useRef(null);
  const { addToCart } = useCart();

  const images = [
    { main: flowers1, hover: flowers12 },
    { main: flowers2, hover: flowers11 },
    { main: flowers3, hover: flowers10 },
    { main: flowers4, hover: flowers9 },
    { main: flowers5, hover: flowers8 },
    { main: flowers6, hover: flowers7 },
    { main: flowers7, hover: flowers6 },
    { main: flowers8, hover: flowers5 },
    { main: flowers9, hover: flowers4 },
    { main: flowers10, hover: flowers3 },
    { main: flowers11, hover: flowers2 },
    { main: flowers12, hover: flowers1 },
  ];

  const prices = [
    "Rs. 1,999", "Rs. 2,499", "Rs. 2,200", "Rs. 3,000",
    "Rs. 1,750", "Rs. 2,850", "Rs. 2,100", "Rs. 3,200",
    "Rs. 1,650", "Rs. 2,950", "Rs. 2,300", "Rs. 3,100"
  ];

  const products = images.map((img, i) => ({
    id: i + 1,
    mainImg: img.main,
    hoverImg: img.hover,
    title: `Flora Product ${i + 1}`,
    price: prices[i]
  }));

  useEffect(() => {
    if (flickityRef.current) {
      new Flickity(flickityRef.current, {
        cellAlign: 'left',
        contain: true,
        pageDots: true,
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 2000,
        pauseAutoPlayOnHover: true,
      });
    }
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-serif font-bold text-center mb-10 text-gray-800">
          New Arrivals
        </h2>

        <div ref={flickityRef} className="carousel">
          {products.map((product) => (
            <div key={product.id} className="carousel-cell w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3">

              <div className="group relative bg-white overflow-hidden shadow-sm border border-gray-100 rounded-xl">

                <div className="absolute top-3 left-3 z-20 bg-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  New
                </div>

                <div className="relative h-80 overflow-hidden bg-gray-100">

                  <img
                    src={product.mainImg}
                    alt={product.title}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />

                  <img
                    src={product.hoverImg}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500"
                  />

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">

                    <button className="p-2 bg-white rounded-full text-gray-600 hover:bg-[#F6339A] hover:text-white transition shadow">
                      <Heart size={18} />
                    </button>

                    <button className="p-2 bg-white rounded-full text-gray-600 hover:bg-[#F6339A] hover:text-white transition shadow">
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="p-2 bg-white rounded-full text-gray-600 hover:bg-[#F6339A] hover:text-white transition shadow"
                    >
                      <ShoppingCart size={18} />
                    </button>

                  </div>
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-medium text-gray-800 hover:text-pink-500 cursor-pointer">
                    {product.title}
                  </h3>
                  <p className="text-pink-600 font-bold mt-1">
                    {product.price}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .flickity-page-dots .dot {
          background: #ec4899;
        }
      `}</style>
    </section>
  );
};

export default ProductCarousel;