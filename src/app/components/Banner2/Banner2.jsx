"use client";
import React from "react";
import BannerPng from "../../assets/undraw_businessman_8vs7.svg";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "../../context/UserContext";

const Banner2 = () => {
  const { user } = useUser(); // get user session
  const target = user ? "/home" : "/get_started"; // dynamic target

  return (
    <section>
      <div className="mx-auto p-[1rem] sm:p-[2rem] lg:p-[4rem] xl:p-[5rem] 2xl:p-[6rem] container items-center py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Join Our community to Start your Journey
            </h1>
            <p className="text-[var(--dark)]">
              At Word Associator, we specialize in creating unique websites that truly reflect our clients' visions. We believe in blending creativity with functionality, ensuring that every site we develop not only looks fantastic but also provides a seamless user experience. Our passionate team of developers and designers works closely with businesses to bring their ideas to life, whether it’s a sleek portfolio site or a robust e-commerce platform. Our ultimate goal is to help brands stand out online and connect effectively with their audience.
            </p>
            <Link
              href={target}
              className="inline-block bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--secondary)] duration-200 shadow-[0px_10px_8px_-7px_#0e2b4d] hover:shadow-[0px_10px_8px_-7px_#69a79c] py-2 px-6"
            >
              Join Now
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={BannerPng}
            alt="hero png"
            className="w-[350px] md:max-w-[450px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
