"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import HeroPng from "../../assets/undraw_secure-login_m11a.svg";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "../../context/UserContext";

const Hero = () => {
  const { user } = useUser(); // hook must be inside the component

  // determine target based on user session
  const target = user ? "/home" : "/get_started";

  return (
    <section className="bg-[var(--dark3)] overflow-hidden relative">
      <div className="mx-auto px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        <div className="flex flex-col justify-center py-12 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <h1 className="text-3xl lg:text-5xl font-bold !leading-snug animate__animated animate__fadeIn animate__slow">
              Ready for a Digital Upgrade?{" "}
              <span className="text-[var(--secondary)] capitalize">
                word associator
              </span>{" "}
              Builds it Your Way
            </h1>
            <div className="flex justify-center md:justify-start">
              <Link href={target}>
                <button className="bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--secondary)] duration-200 shadow-[0px_10px_8px_-7px_#0e2b4d88] hover:shadow-[0px_10px_8px_-7px_#69a79c] py-2 px-6 flex items-center gap-2 animate__animated animate__fadeIn animate__slow">
                  Get Started
                  <IoIosArrowForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={HeroPng}
            alt="hero image"
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow-2xl animate__animated animate__fadeIn animate__slower"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
