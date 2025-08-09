import React from 'react';
import { motion } from 'framer-motion';
import heading from '../assets/heading.svg';
import sqac_icon from '../assets/sqac_icon.svg';
import hero_page from '../assets/Hero_homepage.svg';
import hero_overlay from '../assets/hero_overlay.svg';
import steve from '../assets/steve.svg';
import vindicator from '../assets/vindictator.svg';
import deadline from '../assets/deadline.svg';
import gameplay_heading from '../assets/gameplay_heading.svg';
import zombie_left from '../assets/zombie_left.svg';
import zombie_right from '../assets/zombie_right.svg';
import gameplay_details from '../assets/gameplay_details.svg';

const HomePage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* SQAC Logo */}
        <div className="absolute top-4 left-4 z-20">
          <img
            src={sqac_icon}
            alt="SQAC Icon"
            className="w-28 sm:w-40 md:w-60 h-auto cursor-pointer hover:scale-105 transition-transform"
            onClick={() => window.open('https://sqac-website.vercel.app', "_blank")}
          />
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center pt-20 px-2 sm:px-4 text-center relative z-10">
          <motion.img
            src={heading}
            alt="Heading Picture"
            className="w-64 sm:w-[400px] md:w-[500px] max-w-full mb-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          <div className="relative w-full flex justify-center items-center">
            <motion.img
              src={hero_page}
              alt="Hero Main"
              className="max-h-[60vh] md:max-h-[70vh] w-auto object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />

            <motion.div
            className='absolute bottom-0 pb-2 left-1/2 transform -translate-x-1/2 
            max-w-[90%] xs:max-w-[80%] sm:max-w-[70%] md:max-w-[50%] 
            max-h-[25vh] landscape:max-h-[40%] md:max-h-[50%] 
            w-full h-auto aspect-video
            flex items-center justify-center'>
              
              <img src={hero_overlay} alt="" />
            </motion.div>

            <motion.img
              src={steve}
              alt="Steve"
              className="absolute left-0 bottom-0 w-[50%] sm:w-[40%] md:w-[30%]"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />

            <motion.img
              src={vindicator}
              alt="Vindicator"
              className="absolute right-0 bottom-0 w-[25%] sm:w-[20%] md:w-[15%]"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </div>

          <motion.div
            className="w-[90%] max-w-[415px] flex justify-end mt-4 pr-2 sm:pr-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <img 
              src={deadline} 
              alt="Deadline" 
              className="w-full max-w-[415px] h-auto" 
            />
          </motion.div>
        </div>
      </div>

      {/* Gameplay Section with enlarged details image */}
      <div className="pt-4 pb-8 sm:pb-12 flex flex-col items-center px-2 sm:px-4">
        <div className="flex items-center justify-center gap-1 sm:gap-3 md:gap-4 w-full">
          <motion.img
            src={zombie_left}
            alt="Zombie Left"
            className="w-[12vw] max-w-[5rem] sm:max-w-[7rem] md:max-w-[10rem]"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        
          <motion.img
            src={gameplay_heading}
            alt="Gameplay Heading"
            className="w-full max-w-[18rem] sm:max-w-[28rem] md:max-w-[40rem] h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          />
        
          <motion.img
            src={zombie_right}
            alt="Zombie Right"
            className="w-[12vw] max-w-[5rem] sm:max-w-[7rem] md:max-w-[10rem]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        </div>
        
        {/* Enlarged gameplay details image */}
        <motion.img
          src={gameplay_details}
          alt="Gameplay Details"
          className="pt-4 sm:pt-6 w-full max-w-[24rem] sm:max-w-[50rem] md:max-w-[72rem] h-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        />
      </div>
    </div>
  );
};

export default HomePage;