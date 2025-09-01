"use client";
import Image from "next/image";
import React from "react";
import aboutImage from "../../assets/undraw_businessman_8vs7.svg";

const About = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 gap-12">

        {/* Image */}
        <div className="flex justify-center md:w-1/2">
          <Image
            src={aboutImage}
            alt="Professional developer working on coding projects"
            className="w-full max-w-[400px] object-cover rounded-lg drop-shadow-2xl"
            priority
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold capitalize">
            About Word Associator
          </h1>
          <p className="text-[var(--dark)] text-lg leading-relaxed">
            Word Associator is a platform dedicated to empowering aspiring developers.
            We provide a comprehensive learning experience designed to help you master coding skills,
            build real-world projects, and launch your tech career. Our mission is to help you achieve
            your goals efficiently while gaining practical experience in web, software, and app development.
          </p>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Word Associator",
        "url": "https://wam.kesug.com",
        "logo": "https://wam.kesug.com/logo.png",
        "sameAs": [
          "https://facebook.com/profile.php?id=100071074852209",
          "https://wa.link/8mgfa6",
          "https://youtube.com/@wordassociator?si=xUbMPbNR1q3kgK1N",
          "https://t.me/wordassociator"
        ],
        "description": "Word Associator empowers aspiring developers with practical coding skills, project building, and tech career guidance."
      }`}} />
    </section>
  );
};

export default About;
