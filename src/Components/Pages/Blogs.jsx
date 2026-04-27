import React, { useState } from 'react';
import { Calendar, X, ArrowRight } from 'lucide-react';

import b1 from '../../assets/b1.webp';
import b2 from '../../assets/b2.webp';
import b3 from '../../assets/b3.webp';
import b4 from '../../assets/b4.webp';
import b5 from '../../assets/b5.webp';
import b6 from '../../assets/b6.webp';
import b7 from '../../assets/b7.webp';
import b8 from '../../assets/b8.webp';
import b9 from '../../assets/b9.webp';
import b10 from '../../assets/b10.webp';
import b11 from '../../assets/b11.webp';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogData = [
    { 
      id: 1, image: b1, date: "Mar 03 2026", category: "Ramadan Special", 
      title: "Ramadan Gift Delivery in Lahore: Thoughtful Floral & Iftar Surprises", 
      excerpt: "Ramadan is not just a month — it is a feeling. A time when homes glow softly before Iftar...", 
      content: "Sharing blessings in Ramadan is a beautiful tradition in Lahore. Our special Ramadan combos combine the freshness of premium flowers with the sweetness of dates and artisanal chocolates, making them the perfect centerpiece for your family Iftar or a gift for your neighbors." 
    },
    { 
      id: 2, image: b2, date: "Feb 14 2026", category: "Gifting Guide", 
      title: "The Art of Choosing the Perfect Anniversary Bouquet", 
      excerpt: "Every year of marriage tells a story. Selecting the right bloom can express what words cannot...", 
      content: "For anniversaries, we recommend deep red roses for passion or elegant lilies for long-lasting devotion. Our guide helps you understand floral symbolism so your gift carries a message as beautiful as the arrangement itself." 
    },
    { 
      id: 3, image: b3, date: "Jan 20 2026", category: "Lifestyle", 
      title: "Why Fresh Flowers Are the Best Way to Brighten Your Workspace", 
      excerpt: "Adding a touch of nature to your desk isn't just about looks; it's about productivity...", 
      content: "Studies show that office workers with plants or flowers on their desks report 15% higher wellbeing. A simple arrangement of baby's breath or white carnations can clear mental fog and reduce stress during busy work hours." 
    },
    { 
      id: 4, image: b4, date: "Mar 10 2026", category: "Floral Trends", 
      title: "Pastel Perfection: Why Soft Hues are Dominating 2026", 
      excerpt: "This season is all about serenity. Soft pinks, creams, and peaches are making a massive comeback...", 
      content: "Pastel arrangements bring a sense of calm and elegance to any room. We use imported peonies and ranunculus to create a 'cloud-like' floral effect that is currently trending for high-end Lahori weddings and formal dinners." 
    },
    { 
      id: 5, image: b5, date: "Feb 28 2026", category: "Chocolate Boxes", 
      title: "Luxury Chocolate Pairings: Elevate Your Floral Experience", 
      excerpt: "A bouquet is lovely, but a bouquet with premium handmade chocolates is unforgettable...", 
      content: "We have partnered with local chocolatiers to bring you dark cocoa and sea-salt truffles that complement the scent of fresh roses. It's a multi-sensory experience designed for those who appreciate the finer things in life." 
    },
    { 
      id: 6, image: b6, date: "Jan 10 2026", category: "Decor Tips", 
      title: "How to Style Your Living Room with Minimalist Arrangements", 
      excerpt: "You don't always need a massive bouquet to make an impact. Sometimes, a single stem is enough...", 
      content: "Minimalism is about intentionality. Using a tall glass vase with a single monstera leaf or a few stems of eucalyptus can create a modern, chic vibe in your home without cluttering your space." 
    },
    { 
      id: 7, image: b7, date: "Mar 15 2026", category: "Custom Gifts", 
      title: "Personalized Flower Boxes: Your Message, Our Craft", 
      excerpt: "A flower box that carries more than just petals—it carries your personalized heartfelt notes...", 
      content: "Our custom gift service allows you to laser-engrave names on the boxes or include handwritten calligraphy notes. Whether it's a 'Sorry' or a 'Will You Marry Me?', we make sure the presentation is as unique as your story." 
    },
    { 
      id: 8, image: b8, date: "Feb 05 2026", category: "Care Guide", 
      title: "5 Secrets to Making Your Flowers Last for 10+ Days", 
      excerpt: "Everyone hates it when flowers wilt too soon. Follow these professional florist secrets...", 
      content: "1. Cut stems at a 45-degree angle. 2. Remove leaves below the water line. 3. Use lukewarm water. 4. Keep away from ripening fruits. 5. Change water every 2 days. These simple steps double the life of your bouquet." 
    },
    { 
      id: 9, image: b9, date: "Jan 05 2026", category: "Occasions", 
      title: "Welcoming the New Year with Everlasting Dried Flowers", 
      excerpt: "Dried floral decor is the perfect way to start 2026 with sustainable and long-lasting beauty...", 
      content: "Dried pampas grass, lavender, and cotton flowers are the top choice for eco-conscious decor. They require zero water and stay beautiful for years, making them a great investment for your home or office." 
    },
    { 
      id: 10, image: b10, date: "Mar 22 2026", category: "Spring Collection", 
      title: "The Arrival of Spring: Lahore's Most Vibrant Blooms", 
      excerpt: "Spring in Lahore is magical. From the fragrance of Motia to the bright colors of Marigolds...", 
      content: "Our Spring 2026 collection celebrates local Pakistani flora mixed with imported tulips. We focus on vibrant oranges, yellows, and purples to reflect the energy of the Basant season and the renewal of nature." 
    },
    { 
      id: 11, image: b11, date: "Feb 20 2026", category: "Luxury", 
      title: "The Orchid Collection: Exotic Elegance Delivered", 
      excerpt: "Orchids are the gold standard of luxury gifting. Discover our new exotic arrivals...", 
      content: "Sourced from the best greenhouses, our Phalaenopsis orchids stay in bloom for weeks. They are the ultimate corporate gift or a sophisticated gesture for someone who appreciates architectural floral beauty." 
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#fcfcfc] relative">
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${selectedBlog ? 'blur-md brightness-75 scale-[0.98] pointer-events-none' : ''}`}>
        
        <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 tracking-tight">Our Latest Blogs</h2>
            <p className="text-gray-500 mt-2 italic">Stay updated with our floral stories and gifting tips</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((blog) => (
            <article 
              key={blog.id} 
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden" onClick={() => setSelectedBlog(blog)}>
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">{blog.category}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3 font-medium">
                  <Calendar size={14} className="text-pink-400" /> {blog.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors leading-tight">{blog.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 grow line-clamp-3">{blog.excerpt}</p>
                
                <div className="pt-4 border-t border-gray-50 mt-auto">
                  <button 
                    onClick={() => setSelectedBlog(blog)}
                    className="text-sm font-bold text-gray-900 hover:text-pink-600 flex items-center gap-1 transition-all"
                  >
                    Read Full Story <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedBlog && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedBlog(null)}></div>
          
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedBlog(null)}
              className="absolute top-5 right-5 z-20 bg-white/90 p-2 rounded-full hover:bg-pink-600 hover:text-white transition-all shadow-md text-gray-800"
            >
              <X size={24} />
            </button>

            <div className="md:w-1/2 h-72 md:h-auto overflow-hidden">
              <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-full object-cover" />
            </div>

            <div className="md:w-1/2 p-8 md:p-12 space-y-6 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-2 text-pink-600 text-[10px] font-bold uppercase tracking-widest">
                <Calendar size={14} /> {selectedBlog.date} — {selectedBlog.category}
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 leading-tight">
                {selectedBlog.title}
              </h2>
              <div className="h-1 w-16 bg-pink-600 rounded-full"></div>
              <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-pink-100 pl-4">
                "{selectedBlog.excerpt}"
              </p>
              <p className="text-gray-600 leading-loose text-sm">
                {selectedBlog.content}
              </p>
              <button 
                onClick={() => setSelectedBlog(null)}
                className="w-fit bg-gray-900 text-white px-10 py-3 rounded-full font-bold hover:bg-pink-600 transition-all shadow-lg active:scale-95"
              >
                Back to Blogs
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blogs;