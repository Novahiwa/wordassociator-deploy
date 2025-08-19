import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';

export const metadata = {
    title:"contact",
    description:"contact world associator"
}


const contact = () => {
  return (
    <>
      <Contact />
    </>
  );
}

export default contact;
