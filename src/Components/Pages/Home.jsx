import React from 'react';
import Bouquets from '../../assets/Bouquets.webp';
import Flowers from '../Home/Flowers';
import ProductCarousel from '../Home/Product';
import Story from '../Home/Story';
import Testimonials from '../Home/Reviews';
import Bloom from '../Home/Bloom';
import { Link } from 'react-router-dom'; // ✅ FIXED IMPORT

const heroImage = Bouquets;

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">

      {/* Hero Section */}
      <div
        className="relative grow flex items-center justify-center bg-cover bg-center bg-no-repeat bg-gray-900"
        style={{
          backgroundImage: heroImage ? `url(${heroImage})` : 'none',
          minHeight: '80vh'
        }}
      >
        {/* Overlay */}
        {heroImage && (
          <div className="absolute inset-0 bg-black/40"></div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 py-16 md:px-12 lg:px-24 max-w-5xl mx-auto flex flex-col items-center">

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-2xl">
            Blossom<span className="text-pink-400"> Floral</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-pink-50 mb-10 tracking-wide max-w-2xl drop-shadow-lg">
            Delivering Emotions, One Petal at a Time. Fresh, Beautiful Arrangements for Every Occasion.
          </p>

          {/* Shop Now Button */}
          <Link
            to="/products"
            className="inline-block bg-pink-500 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-2xl 
            hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 active:scale-95 
            focus:outline-none focus:ring-4 focus:ring-pink-300"
          >
            Shop Now
          </Link>

        </div>
      </div>

      {/* Optional fallback */}
      {!heroImage && (
        <div className="py-20 text-center bg-white">
          <p className="text-gray-400 italic">
            Hero image placeholder - Import your image at the top of the file.
          </p>
        </div>
      )}

      {/* Sections */}
      <Flowers />
      <ProductCarousel />
      <Story />
      <Testimonials />
      <Bloom />

    </div>
  );
};

export default HomePage;