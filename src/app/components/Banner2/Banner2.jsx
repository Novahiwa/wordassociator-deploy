"use client";
import React from "react";
import BannerPng from "../../assets/undraw_businessman_8vs7.svg";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "../../context/UserContext";

const Banner2 = () => {
  const { user } = useUser();
  const target = user ? "/home" : "/join";

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 gap-12">

        {/* Text content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Join Our Community to Start Your Journey
          </h2>
          <p className="text-[var(--dark)] text-lg leading-relaxed">
            At Word Associator, we specialize in creating unique websites that reflect your vision.
            Our team combines creativity with functionality, ensuring every project looks fantastic
            and provides a seamless user experience. From portfolios to e-commerce platforms, we
            help brands stand out online and connect effectively with their audience.
          </p>
          <Link
            href={target}
            className="inline-block bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--secondary)] duration-200 shadow-md py-3 px-6"
          >
            Join Now
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={BannerPng}
            alt="Illustration of developers collaborating and building projects"
            className="w-[300px] sm:w-[350px] md:w-[400px] object-cover rounded-lg drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Join Word Associator Community",
        "url": "https://wam.kesug.com/get_started",
        "description": "Join Word Associator to access learning resources, build projects, and launch your tech career."
      }`}} />
    </section>
  );
};

export default Banner2;
