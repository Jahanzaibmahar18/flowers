import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ye line tabhi kaam karegi jab 'npm install aos' ho chuka ho

import Bouquets from '../../assets/Bouquets.webp';
import Boxes from '../../assets/Boxes.webp';
import FloralJewelry from '../../assets/FloralJewelry.webp';

const Flowers = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const flowers = [
    { id: 1, img: Bouquets, title: "Charm and sweetness" },
    { id: 2, img: Boxes, title: "In every bloom" },
    { id: 3, img: FloralJewelry, title: "From heart to soul" },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
            Our Flora Collection
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {flowers.map((flower, index) => (
            <div 
              key={flower.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 200}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-700"
            >
              <div className="h-112 overflow-hidden bg-pink-50 relative">
                <img 
                  src={flower.img} 
                  alt={flower.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-pink-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              <div className="p-6 text-center bg-white border-t border-pink-50">
                <h3 className="text-xl font-serif font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                  {flower.title}
                </h3>
                <p className="text-pink-400 text-sm mt-2 uppercase tracking-widest font-medium">
                  Premium Selection
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flowers;