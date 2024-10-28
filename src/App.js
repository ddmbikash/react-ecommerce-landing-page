import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import CustomTestimonialSlider from './components/CustomTestimonialSlider'; // Updated import
import SpecialOffers from './components/SpecialOffers';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <Categories />
      <CustomTestimonialSlider />
      <SpecialOffers />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
