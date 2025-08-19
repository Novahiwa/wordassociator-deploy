import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";

const ServicesData = [
  {
    id: 1,
    title: "Web Dev",
    link: "#",
    icon: <TbWorldWww />,
    
  },
  {
    id: 2,
    title: "Mobile Dev",
    link: "#",
    icon: <CiMobile3 />,
    
  },
  {
    id: 3,
    title: "Software Dev",
    link: "#",
    icon: <RiComputerLine />,
    
  },
  {
    id: 4,
    title: "Satisfied Clients",
    link: "#",
    icon: <IoMdHappy />,
    
  },
  {
    id: 5,
    title: "SEO",
    link: "#",
    icon: <IoPulseOutline />,
    
  },
  {
    id: 6,
    title: "24/7 support",
    link: "#",
    icon: <BiSupport />,
    
  },
];



const Services = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] pb-14 pt-12 container">
        <h1 className="text-4xl font-bold text-left pb-10">
          services 
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <div key={service.id}
            className=" bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
