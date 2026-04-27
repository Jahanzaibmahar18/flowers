import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, Headset } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agree: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
  };

  return (
    <section className="py-16 px-6 bg-white max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 text-lg">
          Please use the below form. You can also call customer service on 
          <span className="text-pink-700 font-bold ml-1">+92 3076341312</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Headset className="text-pink-600" size={28} />
              Support Customer
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Have a question? Please contact us using the customer support channels below.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="bg-white p-3 rounded-xl shadow-sm text-pink-600">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Customer Care</p>
                <p className="text-gray-600">+92 3076341312</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="bg-white p-3 rounded-xl shadow-sm text-pink-600">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Email Address</p>
                <p className="text-gray-600">info@blossomsflorals.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="bg-white p-3 rounded-xl shadow-sm text-pink-600">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Opening Hours</p>
                <p className="text-gray-600">Mon - Sun 08:00am - 10:00pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl shadow-gray-100">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
            <p className="text-gray-500 text-sm">
              Please submit all general enquiries in the contact form below and we look forward to hearing from you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                placeholder="Your Name"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                placeholder="example@mail.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">How can we help?</label>
              <textarea 
                rows="4" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Write your message here..."
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="privacy" 
                required
                className="w-5 h-5 accent-pink-600 cursor-pointer"
                onChange={(e) => setFormData({...formData, agree: e.target.checked})}
              />
              <label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer">
                I agree to the <span className="text-pink-700 font-semibold underline">Privacy Policy</span> of the website.
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-pink-700 transition-all shadow-lg active:scale-[0.98]"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;