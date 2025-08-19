import Image from 'next/image';
import React from 'react';
import aboutImage from "../../assets/undraw_businessman_8vs7.svg"

const About = () => {
  return (
    <div className='mx-auto p-[1rem] sm:p-[2rem] lg:p-[4rem] xl:p-[5rem] 2xl:p-[6rem] container flex justify-between items-center'>
      <div className='w-[80%]'>
        <h1 className='font-bold text-2xl capitalize mt-8'>about word associator</h1>
        <div className='flex justify-evenly items-center flex-col mt-12 md:flex-row'>
          <Image src={aboutImage} alt="about image" className='w-50' />
        <p className='mt-8 md:ml-16 md:w-[400px] md:p-8 rounded text-[var(--dark)]'>Word associator is a platform dedicated for empowing aspiring developers. we provide a comprehensive learning experience designed to help you master coding skills, build projects and launch your tech career</p>
        </div>
      </div>
    </div>
  );
}

export default About;
