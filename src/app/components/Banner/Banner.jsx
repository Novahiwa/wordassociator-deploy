import React from "react";
import BannerPng from "../../assets/undraw_exams_d2tf.svg";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import Image from "next/image";
const Banner = () => {
  return (
    <section>
      <div className="container py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        <div className="flex justify-center items-center">
          <Image
            src={BannerPng}
            alt="hero png"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow-2xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <h1 className="text-3xl md:text-4xl font-bold !leading-snug">
             Take Your Brand Online with Word Associator
            </h1>
            <div className="flex flex-col gap-6">
              <div
                
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <FaBookReader className="text-2xl" />
                <p className="text-lg">50+ Builts</p>
              </div>
              <div
               
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <GrUserExpert className="text-2xl" />
                <p className="text-lg">Pro Website Development</p>
              </div>
              <div
             
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <MdOutlineAccessTime className="text-2xl" />
                <p className="text-lg">Free Updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
