import Image from "next/image";
import React from "react";
import ContactImage from "../../assets/undraw_notifications_bw0p.svg";
import {
  FaEnvelope,
  FaFacebook,
  FaPhoneAlt,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="mx-auto p-[1rem] sm:p-[2rem] lg:p-[4rem] xl:p-[5rem] 2xl:p-[6rem] container flex justify-between items-center">
      <div className="w-[100%]">
        <h1 className="font-bold text-2xl capitalize mt-8">
          Contact word associator
        </h1>
        <div className="flex justify-start flex-col md:flex-row mt-4 gap-8">
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-5 gap-x-8 mt-4 mb-6 md:mt-12" >
            <div>
              <Link className="flex gap-2 mb-4" href="https://wa.link/8mgfa6">
                <p>WhatsApp</p>
                <FaWhatsapp className="text-2xl text-green-500" />
              </Link>
            </div>
            <div>
              <Link className="flex gap-2 mb-4" href="https://facebook.com/profile.php?id=100071074852209">
                <p>Facebook</p>
                <FaFacebook className="text-2xl text-blue-500" />
              </Link>
            </div>
            <div>
              <Link className="flex gap-2 mb-4" href="mail:novahiwamzika18@gmail.com">
                <p>E-mail</p>
                <FaEnvelope className="text-2xl text-[var(--primary)]" />
              </Link>
            </div>
            <div>
              <Link className="flex gap-2 mb-4" href="https://t.me/wordassociator">
                <p>Telegram</p>
                <FaTelegramPlane className="text-2xl text-dark" />
              </Link>
            </div>
            <div>
              <Link className="flex gap-2 mb-4" href="tel:0997019352">
                <p>call</p>
                <FaPhoneAlt className="text-2xl text-[var(--primary)]" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
          <Image src={ContactImage} alt="Contact image" className="w-25 md:w-50" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
