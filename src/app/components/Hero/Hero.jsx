"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import HeroPng from "../../assets/undraw_secure-login_m11a.svg";
import festivalImg from "../../assets/festival.png";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "../../context/UserContext";

const Hero = () => {
  const { user } = useUser();
  const target = user ? "/home" : "/get_started";
  const festival = false;

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
          <p className="text-lg text-gray-800 leading-relaxed"> At Word Associator, we empower developers to launch their tech careers. You’ll gain practical skills, build professional projects and learn to develop unique digital solutions focused on real user needs
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
        {
          festival ?   <Image
            src={festivalImg}
            alt="Illustration of secure digital login and tech workflow"
            className="w-[300px] sm:w-[400px] md:w-[500px] xl:w-[600px] object-cover drop-shadow-2xl"
            priority
          /> :  <Image
            src={HeroPng}
            alt="Illustration of secure digital login and tech workflow"
            className="w-[300px] sm:w-[400px] md:w-[500px] xl:w-[600px] object-cover drop-shadow-2xl"
            priority
          />
        }
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
