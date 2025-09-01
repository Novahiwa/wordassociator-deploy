"use client";
import React from "react";
import BannerPng from "../../assets/undraw_exams_d2tf.svg";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={BannerPng}
            alt="Student achieving success with Word Associator courses"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow-2xl"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold !leading-snug">
              Take Your Brand Online with Word Associator
            </h2>
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                <FaBookReader className="text-2xl" />
                <p className="text-lg">50+ Websites Built</p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                <GrUserExpert className="text-2xl" />
                <p className="text-lg">Professional Web Development</p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                <MdOutlineAccessTime className="text-2xl" />
                <p className="text-lg">Free Updates & Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for Services */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Word Associator Web and Software Development",
        "provider": {
          "@type": "Organization",
          "name": "Word Associator",
          "url": "https://wam.kesug.com"
        },
        "serviceType": ["Web Development", "Software Development", "App Development"],
        "areaServed": "Malawi"
      }`}} />
    </section>
  );
};

export default Banner;
