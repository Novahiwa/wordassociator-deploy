"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import HeroPng from "../../assets/undraw_secure-login_m11a.svg";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "../../context/UserContext";

const Hero = () => {
  const { user } = useUser();
  const target = user ? "/home" : "/get_started";

  return (
    <section className="bg-[var(--dark3)] overflow-hidden relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 items-center">

        {/* Hero Text */}
        <div className="flex flex-col justify-center py-12 md:py-0 space-y-8">
          <h1 className="text-3xl lg:text-5xl font-bold leading-snug text-dark">
            Ready for a Digital Upgrade? 
            <span className="text-[var(--secondary)]"> Word Associator </span>
            Builds it Your Way
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Word Associator empowers aspiring developers to master coding skills, build projects, 
            and launch their tech careers with unique, user-focused web and app solutions.
          </p>
          <Link href={target}>
            <button className="bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--secondary)] duration-200 shadow-md py-3 px-6 flex items-center gap-2">
              Get Started
              <IoIosArrowForward className="text-xl" />
            </button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={HeroPng}
            alt="Illustration of secure digital login and tech workflow"
            className="w-[300px] sm:w-[400px] md:w-[500px] xl:w-[600px] object-cover drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Word Associator Homepage",
        "url": "https://wam.kesug.com/",
        "description": "Word Associator helps aspiring developers build projects, master coding, and launch tech careers with web and app solutions."
      }`}} />
    </section>
  );
};

export default Hero;
