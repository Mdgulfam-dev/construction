import React from 'react';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import WhyChooseUs from '../Components/WhyChooseUs';
import Testimonials from '../Components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
