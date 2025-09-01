"use client";
import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";

const ServicesData = [
  { id: 1, title: "Web Development", link: "#web", icon: <TbWorldWww />, delay: 0.2 },
  { id: 2, title: "Mobile Development", link: "#mobile", icon: <CiMobile3 />, delay: 0.3 },
  { id: 3, title: "Software Development", link: "#software", icon: <RiComputerLine />, delay: 0.4 },
  { id: 4, title: "Satisfied Clients", link: "#clients", icon: <IoMdHappy />, delay: 0.5 },
  { id: 5, title: "SEO Optimization", link: "#seo", icon: <IoPulseOutline />, delay: 0.6 },
  { id: 6, title: "24/7 Support", link: "#support", icon: <BiSupport />, delay: 0.7 },
];

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-14">
        <h1 className="text-4xl font-bold text-center md:text-left mb-10">Our Services</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {ServicesData.map((service) => (
            <a
              key={service.id}
              href={service.link}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center justify-center p-4 py-7 hover:bg-white hover:scale-105 transition-transform duration-300 hover:shadow-lg text-center"
              aria-label={service.title}
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h2 className="text-lg font-semibold">{service.title}</h2>
            </a>
          ))}
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "provider": {
                "@type": "Organization",
                "name": "Word Associator",
                "url": "https://wam.kesug.com/services"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Word Associator Services",
                "itemListElement": [
                  ${ServicesData.map(service => `
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "${service.title}"
                      }
                    }
                  `).join(",")}
                ]
              }
            }
          `,
          }}
        />
      </div>
    </section>
  );
};

export default Services;
