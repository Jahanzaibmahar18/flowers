import React from 'react';
import { motion } from 'framer-motion';

// Assets (Replace with your actual paths)
import img1 from '../../assets/b1.webp';
import img2 from '../../assets/b2.webp';
import img3 from '../../assets/b3.webp';

const Experience = () => {
  const experiences = [
    {
      title: "Floral Arrangements",
      desc: "We specialize in creating elegant floral arrangements using fresh and artificial flowers, designed to suit every occasion. From classic bouquets to luxurious statement pieces.",
      image: img1,
      
      size: "h-[450px]" 
    },
    {
      title: "Premium Chocolates",
      desc:
       "Our chocolate gift bouquets and boxes are thoughtfully designed using premium chocolates and elegant packaging. Perfect for celebrations, our chocolate gifts add a sweet and memorable touch to every occasion. "
       ,
      image: img2,
      size: "h-[530px]" 
    },
    {
      title: "Event Styling",
      desc: "Our professional gift-wrapping services turn every gift into a stunning presentation. Using premium materials and creative designs, we ensure each gift package looks beautiful and thoughtful. Perfectly wrapped gifts from Blossoms make every occasion extra special.",
      image: img3,
      size: "h-[610px]" 
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-3xl mb-16">
          <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-4 mb-6">Our Expertise</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We craft every bouquet, chocolate gift, and arrangement with utmost care, 
            ensuring each creation reflects your love and emotions. At Bloom , 
            every detail is thoughtfully designed to make your gifts truly meaningful.
          </p>
        </div>

       
        <div className="flex flex-col md:flex-row items-start gap-8">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex-1 w-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col ${item.size}`}
            >
              <div className="h-64 overflow-hidden shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;