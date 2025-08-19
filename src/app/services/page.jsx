import React from 'react';
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import Navbar from '../components/Navbar/Navbar';

export const metadata = {
  title: "services",
  description: "This is the official website for the word associator brand",
};

const ServicePage = () => {
  return (
    <main className="overflow-x-hidden bg-white text-[var(--dark)]">
      <Services />
    </main>
  );
}

export default ServicePage;
