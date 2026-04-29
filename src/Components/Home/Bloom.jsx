import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const flowerImages = [
  "https://kalee.pk/wp-content/uploads/2023/03/Kalee-pk-Single-Flowers-valentines-day-Single-Flower-32.webp",
  "https://kalee.pk/wp-content/uploads/2023/03/Kalee-pk-Single-Flowers-valentines-day-Single-Flower-25.webp",
  "https://kalee.pk/wp-content/uploads/2023/03/Kalee-pk-Single-Flowers-valentines-day-Single-Flower-10.webp",
  "https://flora724.com/wp-content/uploads/2025/09/Single-Red-Imported-Rose-in-Glass-VaseEgypt-1-430x487.png",
  "https://www.karachigifts.com/images2/3RedRoseIMp.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYEu4LqoHLsI_h-bylzkHT4X0JNfp1gi4bg&s",
  "https://kalee.pk/wp-content/uploads/2023/03/Kalee-pk-Single-Flowers-valentines-day-Single-Flower-12.webp",
  "https://kalee.pk/wp-content/uploads/2023/03/Kalee-pk-Single-Flowers-valentines-day-Single-Flower-18.webp",
  "https://kalee.pk/wp-content/uploads/2023/03/Kalee-pk-Single-Flowers-valentines-day-Single-Flower-22.webp",
  "https://kalee.pk/wp-content/uploads/2023/03/Kalee-pk-Single-Flowers-valentines-day-Single-Flower-30.webp"
];

const Bloom = () => {
  const [isBlooming, setIsBlooming] = useState(false);

  const flowerPositions = [
    { top: '10%', left: '15%', size: 'w-20 sm:w-24 md:w-28 lg:w-32' },
    { top: '20%', left: '45%', size: 'w-24 sm:w-32 md:w-36 lg:w-40' },
    { top: '15%', left: '75%', size: 'w-16 sm:w-20 md:w-24 lg:w-28' },
    { top: '45%', left: '10%', size: 'w-24 sm:w-28 md:w-32 lg:w-36' },
    { top: '50%', left: '80%', size: 'w-28 sm:w-36 md:w-40 lg:w-44' },
    { top: '70%', left: '20%', size: 'w-20 sm:w-24 md:w-28 lg:w-32' },
    { top: '65%', left: '50%', size: 'w-28 sm:w-36 md:w-44 lg:w-48' },
    { top: '80%', left: '75%', size: 'w-24 sm:w-28 md:w-32 lg:w-36' },
    { top: '40%', left: '40%', size: 'w-16 sm:w-20 md:w-22 lg:w-24' },
    { top: '5%', left: '60%', size: 'w-20 sm:w-24 md:w-28 lg:w-32' },
  ];

  return (
    <div className="relative w-full min-h-screen bg-linear-to-tr from-rose-50 via-white to-pink-100 overflow-hidden flex flex-col items-center">

      <div className="mt-8 sm:mt-10 text-center z-20 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-800 tracking-widest uppercase">
          The Flora Garden
        </h1>
        <p className="text-pink-400 font-medium italic mt-2 text-sm sm:text-base">
          Watch the beauty unfold...
        </p>
      </div>

      <div className="relative grow w-full max-w-4xl lg:max-w-6xl px-4">
        <AnimatePresence>
          {isBlooming && flowerImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0, y: 50, rotate: -30 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                rotate: 0,
                transition: {
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 60,
                  damping: 12
                }
              }}
              exit={{ scale: 0, opacity: 0, transition: { duration: 0.3, delay: index * 0.05 } }}
              style={{
                position: 'absolute',
                top: flowerPositions[index].top,
                left: flowerPositions[index].left
              }}
              className={`${flowerPositions[index].size} drop-shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer`}
            >
              <img
                src={img}
                alt={`Flower ${index}`}
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-pink-200 blur-2xl opacity-30 -z-10 rounded-full" />
            </motion.div>
          ))}
        </AnimatePresence>

        {!isBlooming && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-300 font-serif text-lg sm:text-2xl tracking-widest animate-pulse italic text-center px-4">
              Your garden is sleeping...
            </p>
          </div>
        )}
      </div>

      <div className="mb-12 sm:mb-16 md:mb-20 z-20">
        <button
          onClick={() => setIsBlooming(!isBlooming)}
          className={`group relative px-8 sm:px-12 py-3 sm:py-5 rounded-full overflow-hidden font-bold text-white transition-all duration-500 shadow-2xl
            ${isBlooming ? 'bg-gray-800' : 'bg-pink-500 hover:bg-pink-600'}`}
        >
          <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
            {isBlooming ? 'Clear Garden' : 'Magic Bloom'}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
        </button>
      </div>
    </div>
  );
};

export default Bloom;