import React from 'react';
import Layout from '../components/layout/Layout';
import HowToShape from '../components/HowToShape/HowToShape';
import Price from '../components/Price/Price';
import Ama from '../components/Ama/Ama';
import Stats from '../components/Stats/Stats';
import Testimonial from '../components/Testimonial/Testimonial';
import ContactShaper from '../components/ContactShaper/ContactShaper';

function shape() {
  return (
    <Layout>
      <HowToShape />
      <Price />
      <Ama />
      <Stats />
      <Testimonial />
      <ContactShaper />
    </Layout>
  );
}

export default shape;
