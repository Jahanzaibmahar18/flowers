import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

import flowers1 from '../../assets/flowers1.webp';
import flowers2 from '../../assets/flowers2.webp';
import flowers3 from '../../assets/flowers3.webp';
import box1 from '../../assets/box1.webp';
import box2 from '../../assets/box2.webp';
import box3 from '../../assets/box3.webp';

const MakeYourOwn = () => {

  const [hoverCol1, setHoverCol1] = useState(false);
  const [hoverCol2, setHoverCol2] = useState(false);

  const column1 = [flowers1, flowers2, flowers3, flowers1, flowers2];
  const column2 = [box1, box2, box3, box1, box2];

  const whatsappNumber = "+923076341312";
  const message = "Hi! I want to customize a gift for a special occasion.";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/923076341312?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="bg-[#fdf8f8] py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="space-y-6 text-center lg:text-left z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Your Vision, <span className="text-pink-600">Our Creation</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
            Customize your flower bouquets, arrangements, and chocolate
            boxes just the way you like. Click the button below to connect with our experts
            and create a personalized gift for your special occasion.
          </p>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl active:scale-95 group"
          >
            <MessageCircle className="group-hover:animate-bounce" />
            WhatsApp Now
          </button>
        </div>

        <div className="relative h-125 flex gap-4 justify-center overflow-hidden rounded-3xl">

          <div
            className="w-1/2 flex flex-col gap-4 cursor-pointer"
            onMouseEnter={() => setHoverCol1(true)}
            onMouseLeave={() => setHoverCol1(false)}
          >
            <motion.div
              className="flex flex-col gap-4"
              animate={hoverCol1 ? {} : { y: [0, -800] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear"
              }}
            >
              {column1.map((img, index) => (
                <div key={index} className="h-64 min-h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <img src={img} alt="Custom" className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>

          <div
            className="w-1/2 flex flex-col gap-4 cursor-pointer"
            onMouseEnter={() => setHoverCol2(true)}
            onMouseLeave={() => setHoverCol2(false)}
          >
            <motion.div
              className="flex flex-col gap-4"
              animate={hoverCol2 ? {} : { y: [-800, 0] }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear"
              }}
            >
              {column2.map((img, index) => (
                <div key={index} className="h-64 min-h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <img src={img} alt="Custom" className="w-full h-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#fdf8f8] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#fdf8f8] to-transparent z-10 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default MakeYourOwn;