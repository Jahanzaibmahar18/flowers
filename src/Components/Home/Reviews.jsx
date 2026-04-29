import React, { useState } from 'react';

const reviewsData = [
  { id: 1, name: "Sophia Bennett", comment: "The most vibrant peonies I've ever seen! FloraBloom is my go-to.", image: "https://i.pravatar.cc/150?u=1", rating: 5 },
  { id: 2, name: "James Anderson", comment: "Luxurious packaging and divine scents. Highly impressed with the service.", image: "https://i.pravatar.cc/150?u=2", rating: 5 },
  { id: 3, name: "Isabella Garcia", comment: "Artistic designs that bring any room to life. Truly unique florists.", image: "https://i.pravatar.cc/150?u=3", rating: 4 },
  { id: 4, name: "Liam Wilson", comment: "Fast delivery and the flowers stayed fresh for over a week!", image: "https://i.pravatar.cc/150?u=4", rating: 5 },
  { id: 5, name: "Emma Davis", comment: "The wedding bouquet was a dream come true. Thank you so much!", image: "https://i.pravatar.cc/150?u=5", rating: 5 },
  { id: 6, name: "Oliver Taylor", comment: "Premium quality flowers. Their subscription service is excellent.", image: "https://i.pravatar.cc/150?u=6", rating: 4 },
  { id: 7, name: "Amelia Rose", comment: "Simply beautiful. The colors are exactly as shown on the website.", image: "https://i.pravatar.cc/150?u=7", rating: 5 },
  { id: 8, name: "Noah Brown", comment: "Excellent customer support and stunning floral arrangements.", image: "https://i.pravatar.cc/150?u=8", rating: 5 },
];

const StylishFlowerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardStyle = (index) => {
    const diff = index - activeIndex;

    let displayDiff = diff;
    if (diff > 4) displayDiff = diff - 8;
    if (diff < -4) displayDiff = diff + 8;

    const isActive = displayDiff === 0;
    const isNeighbor = Math.abs(displayDiff) === 1;
    const isFar = Math.abs(displayDiff) > 1;

    return {
      transform: `translateX(${displayDiff * 110}px) scale(${isActive ? 1.2 : isNeighbor ? 0.8 : 0.5})`,
      zIndex: isActive ? 30 : isNeighbor ? 20 : 10,
      opacity: isFar ? 0 : 1,
      filter: isActive ? 'none' : 'grayscale(100%)',
    };
  };

  return (
    <section className="py-12 sm:py-20 bg-linear-to-b from-white to-pink-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center text-gray-800 mb-10 sm:mb-16">
          Voices of FloraBloom
        </h2>

        <div className="relative h-28 sm:h-32 md:h-40 flex justify-center items-center mb-10 sm:mb-16">
          {reviewsData.map((review, index) => (
            <div
              key={review.id}
              onClick={() => setActiveIndex(index)}
              style={getCardStyle(index)}
              className="absolute transition-all duration-700 ease-in-out cursor-pointer"
            >
              <div className={`p-0.5 sm:p-1 rounded-full ${index === activeIndex ? 'bg-pink-500 shadow-2xl' : 'bg-gray-200'}`}>
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-2 sm:border-4 border-white"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-xl md:max-w-2xl mx-auto text-center min-h-[140px] sm:min-h-55">
          <div className="bg-pink-100 p-5 sm:p-8 rounded-2xl sm:rounded-[40px] shadow-xl border border-pink-100 relative">
            <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 bg-pink-500 text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-serif shadow-lg">
              “
            </div>

            <div className="flex justify-center mb-4 mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${i < reviewsData[activeIndex].rating ? 'text-yellow-400' : 'text-gray-200'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-xl text-gray-600 italic leading-relaxed mb-6">
              {reviewsData[activeIndex].comment}
            </p>

            <h4 className="text-2xl font-bold text-gray-800 tracking-tight">
              {reviewsData[activeIndex].name}
            </h4>
            <p className="text-pink-500 font-medium text-sm mt-1 uppercase tracking-widest">
              Verified Customer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StylishFlowerReviews;