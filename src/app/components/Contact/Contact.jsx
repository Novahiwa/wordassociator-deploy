"use client";
import React from "react";
import Image from "next/image";
import ContactImage from "../../assets/undraw_notifications_bw0p.svg";
import { FaEnvelope, FaFacebook, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export const contacts = [
  {
    id: 1,
    name: "WhatsApp",
    link: "https://wa.link/8mgfa6",
    icon: <FaWhatsapp className="text-2xl text-green-500" />,
  },
  {
    id: 2,
    name: "Facebook",
    link: "https://facebook.com/profile.php?id=100071074852209",
    icon: <FaFacebook className="text-2xl text-blue-500" />,
  },
  {
    id: 3,
    name: "E-mail",
    link: "mailto:novahiwamzika18@gmail.com",
    icon: <FaEnvelope className="text-2xl text-[var(--primary)]" />,
  },
  {
    id: 4,
    name: "Call",
    link: "tel:0997019452",
    icon: <FaPhoneAlt className="text-2xl text-[var(--primary)]" />,
  },
];

const Contact = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto p-4 sm:p-8 lg:p-16">
        <h1 className="text-3xl font-bold text-center md:text-left mb-12">Contact Us</h1>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">

          {/* Contact Info */}
          <div className="flex flex-col gap-6 md:w-1/2">
            {contacts.map((contact) => (
              <Link
                key={contact.id}
                href={contact.link}
                className="flex items-center gap-4 text-lg font-medium hover:text-[var(--secondary)] transition"
                aria-label={`Contact via ${contact.name}`}
              >
                {contact.icon}
                <span>{contact.name}</span>
              </Link>
            ))}
          </div>

          {/* Contact Image */}
          <div className="flex justify-center md:w-1/2">
            <Image
              src={ContactImage}
              alt="Illustration of communication and notifications"
              className="w-[100px] sm:w-[200px] md:w-[300px] object-contain"
              priority
            />
          </div>

        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Word Associator",
              "url": "https://wam.kesug.com/contact",
              "sameAs": [
                "https://facebook.com/profile.php?id=100071074852209",
                "https://wa.link/8mgfa6"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+265997019452",
                  "contactType": "customer support",
                  "areaServed": "MW"
                }
              ]
            }
          `,
          }}
        />
      </div>
    </section>
  );
};

export default Contact;
