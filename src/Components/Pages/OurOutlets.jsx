import React, { useState } from 'react';
import { MapPin, Phone, Clock, Headset, X } from 'lucide-react';

import shop1 from '../../assets/shop1.png';
import shop2 from '../../assets/shop2.png';
import shop3 from '../../assets/shop1.png'; 
import shop4 from '../../assets/shop2.png';

const Outlets = () => {
  const [selectedOutlet, setSelectedOutlet] = useState(null);

  const outletsData = [
    {
      id: 1,
      image: shop1,
      city: "DHA , Bahawalpur",
      address: "Shop # 1, Ahad Heights, 137/P Mini Market Round About, DHA Phase 1 , Bahawalpur, 54660",
      contact: "03076341312",
      timing: "Monday - Sunday: 8:00 am - 12:00 am"
    },
    {
      id: 2,
      image: shop2,
      city: "DHA Phase 3, Bahawalpur",
      address: "Shop # 45, Sector Z, DHA Phase 3, Near Y Block Market, Bahawalpur, 54000",
      contact: "03076341312",
      timing: "Monday - Sunday: 9:00 am - 11:00 pm"
    },
    {
      id: 3,
      image: shop3,
      city: "Iqbal Town, Bahawalpur",
      address: "G-3 Market, Near Dobai Chowk, Iqbal Town, Bahawalpur, 54782",
      contact: "03076341312",
      timing: "Monday - Sunday: 10:00 am - 11:00 pm"
    },
    {
      id: 4,
      image: shop4,
      city: "Commercial Area, Bahawalpur",
      address: "Shop # 12, Sector C, Commercial Zone,Commercial Area, Bahawalpur, 53720",
      contact: "03076341312",
      timing: "Monday - Sunday: 11:00 am - 10:00 pm"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white max-w-7xl mx-auto">
      {/* --- Header Section --- */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
          Our Outlets
        </h2>
        <div className="flex flex-col items-center gap-2 text-gray-600">
          <div className="flex items-center gap-2">
            <Headset size={20} className="text-pink-600" />
            <span className="text-lg">You can also call customer service on:</span>
          </div>
          <a 
            href="tel:+923076341312" 
            className="text-2xl font-bold text-pink-700 hover:text-pink-800 transition-colors"
          >
            +92 3076341312
          </a>
        </div>
      </div>

      {/* --- Cards Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {outletsData.map((outlet) => (
          <div 
            key={outlet.id} 
            onClick={() => setSelectedOutlet(outlet)}
            className="group cursor-pointer bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Image Section */}
            <div className="relative h-72 overflow-hidden">
              <img 
                src={outlet.image} 
                alt={outlet.city} 
                className="w-full  h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-md">
                <span className="text-sm font-bold text-pink-700 uppercase tracking-wider">
                  Store Front
                </span>
              </div>
            </div>

            {/* Data Section */}
            <div className="p-8 space-y-5">
              <h3 className="text-2xl font-bold text-gray-900 border-b pb-3 border-gray-200">
                {outlet.city}
              </h3>

              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-4">
                  <MapPin className="text-pink-600 shrink-0 mt-1" size={22} />
                  <p className="leading-relaxed line-clamp-1">{outlet.address}</p>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-pink-600 shrink-0" size={22} />
                  <p className="font-semibold">{outlet.contact}</p>
                </div>
              </div>

              <button className="w-full mt-4 bg-gray-900 text-white py-3 rounded-xl font-bold group-hover:bg-pink-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- Modal / Popup --- */}
      {selectedOutlet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ">
          {/* Background Blur */}
          <div 
            className="absolute inset-0   bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedOutlet(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedOutlet(null)}
              className="absolute top-2 right-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X size={24} className="text-gray-900" />
            </button>

            {/* Full Image Section */}
            <div className="w-full md:w-1/2 bg-black flex items-center justify-center">
              <img 
                src={selectedOutlet.image} 
                alt={selectedOutlet.city} 
                className="w-full h-full object-contain" // "object-contain" poori image dikhata hai
              />
            </div>

            {/* Info Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedOutlet.city}</h3>
              
              <div className="space-y--4">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-50 p-3 rounded-lg text-pink-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Address</p>
                    <p className="text-lg text-gray-800">{selectedOutlet.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-50 p-3 rounded-lg text-pink-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Contact</p>
                    <p className="text-lg font-semibold text-gray-800">{selectedOutlet.contact}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-50 p-3 rounded-lg text-pink-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Opening Hours</p>
                    <p className="text-lg font-medium text-pink-700">{selectedOutlet.timing}</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-10 bg-pink-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-pink-800 transition-all shadow-lg">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Outlets;