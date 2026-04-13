import React, { useEffect } from 'react'; // useEffect add kiya
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // CSS import karna zaroori hai

import { CartProvider } from './Context/CartContext';
import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';
import HomePage from './Components/Pages/Home';
import Products from './Components/Pages/Products';
import MakeYourOwn from './Components/Pages/MakeYourOwn';
import OurOutlets from './Components/Pages/OurOutlets';
import Blogs from './Components/Pages/Blogs';
import ContactUs from './Components/Pages/ContactUs';
import HeroAbout from './Components/Pages/AboutUs';
import ScrollToTop from './Components/Common/ScrollToTop';
import Addtocart from './Components/Common/Addtocart';

function App() {
  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation speed
      once: true,     // Animation sirf ek baar ho jab scroll karein
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/make-your-own" element={<MakeYourOwn />} />
          <Route path="/our-outlets" element={<OurOutlets />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about-us" element={<HeroAbout />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Addtocart" element={<Addtocart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;