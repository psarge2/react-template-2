import React from 'react';
import '../../App.css';
import ServicesText from '../ServicesText/ServicesText'
import Footer from '../Footer/Footer'

export default function Services() {
  return (
    <>
      <h1 className='services'>SERVICES</h1>
      <ServicesText />
      <Footer />
    </>
  );
}