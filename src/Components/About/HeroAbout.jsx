import React from 'react';
import { motion } from 'framer-motion';
import { Flower } from 'lucide-react';
import Experience from '../About/Experience';

const HeroAbout = () => {
  const imageUrl = "https://blossomsflorals.com/cdn/shop/files/IMG_3933_copy.heic?v=1768501868&width=1920";

  return (
    <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      
      {/* --- Background Image with Overlay --- */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          // HEIC support fallback background color
          backgroundColor: '#2a2a2a' 
        }}
      >
        {/* Dark subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* --- Content Section --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Small Badge */}
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="h-px w-8 bg-pink-400"></div>
            <span className="text-pink-400 uppercase tracking-[0.3em] text-xs font-bold">
              Crafting Emotions
            </span>
            <div className="h-px w-8 bg-pink-400"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
            Flowers That Tell <br /> 
            <span className="italic font-light text-pink-100">Your Story</span>
          </h1>

          {/* About Text */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-light">
             Flora Bloom is more than just a flower shop. We are curators of beauty, 
            bringing you the freshest blooms from across the globe to Lahore. Every 
            arrangement is handcrafted with love, precision, and a passion for 
            unforgettable moments.
          </p>

         
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hidden md:block"
      >
        <div className="w-px h-16 bg-linear-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default HeroAbout;