"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { FaFacebook, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww, TbX } from "react-icons/tb";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 bg-[#f7f7f7]">
      <div
       
        className="mx-auto p-[1rem] sm:p-[1rem] lg:p-[2rem] xl:p-[2rem] 2xl:p-[4rem] container flex justify-between items-center"
      >
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-14 md:gap-4">
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Word Associator</h1>
            <p className="text-[var(--dark)]">
              Word associator is a platform dedicated to developers. we provide a comprehensive  experience designed to help you master digital skills, build projects and
              launch your tech career.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Services</h1>
              <div className="text-[var(--dark)]">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">
                    Web Development
                  </li>
                  <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">
                    Software Development
                  </li>
                  <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">
                    App Development
                  </li>
                  <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">
                    E-learning
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-[var(--dark)]">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">
                    <Link href="/services">Services</Link>
                  </li>
                  <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-[var(--dark2)]"
              />
              <button className="bg-[var(--primary)] text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
            <div className="flex space-x-6 py-3">
              <a href="https://wam.kesug.com">
                <TbWorldWww className="cursor-pointer hover:text-[var(--primary)] hover:scale-105 duration-200" />
              </a>
              <a href="https://facebook.com/profile.php?id=100071074852209">
                <FaFacebook className="cursor-pointer hover:text-[var(--primary)] hover:scale-105 duration-200" />
              </a>
              <a href="https://wa.link/8mgfa6">
                <FaWhatsapp className="cursor-pointer hover:text-[var(--primary)] hover:scale-105 duration-200" />
              </a>

              <a href="https://youtube.com/@wordassociator?si=xUbMPbNR1q3kgK1N">
                <FaYoutube className="cursor-pointer hover:text-[var(--primary)] hover:scale-105 duration-200" />
              </a>

              <a href="https://t.me/wordassociator">
                <FaTelegram className="cursor-pointer hover:text-[var(--primary)] hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto p-[1rem] sm:p-[2rem] lg:p-[2rem] xl:p-[2rem] 2xl:p-[4rem] container flex justify-between items-center">
        <Image
          src={logo}
          alt="logo"
          className="md:w-[200px] w-[100px] opacity-30"
        />
      </div>
      <div className="flex items-center justify-center text-dark capitalize">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} word associator | All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
