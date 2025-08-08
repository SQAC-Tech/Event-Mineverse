import React from 'react';
import { motion } from 'framer-motion';
import heading from '../assets/heading.svg';
import sqac_icon from '../assets/sqac_icon.svg';
import hero_page from '../assets/Hero_homepage.svg';
import hero_overlay from '../assets/hero_overlay.svg';
import steve from '../assets/steve.svg';
import vindicator from '../assets/vindictator.svg';
import gameplay_heading from '../assets/gameplay_heading.svg';
import zombie_left from '../assets/zombie_left.svg';
import zombie_right from '../assets/zombie_right.svg';
import gameplay_details from '../assets/gameplay_details.svg';
import deadline from '../assets/deadline.svg';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-amber-800 to-green-300 via-gray-400 overflow-hidden">
      
      {/* SQAC Logo - top-left */}
      <div className="absolute top-4 left-4 z-20">
        <img
          src={sqac_icon}
          alt="SQAC Icon"
          className="w-28 sm:w-40 md:w-60 h-auto cursor-pointer"
          onClick={() => window.open('https://sqac-website.vercel.app', "_blank")}
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center pt-24 px-4 text-center relative z-10">
        
        {/* Heading */}
        <motion.img
          src={heading}
          alt="Heading Picture"
          className="w-64 sm:w-[400px] md:w-[600px] max-w-full mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Hero Image Wrapper */}
        <div className="relative flex justify-center items-center">
          
          {/* Hero Main Image */}
          <motion.img
            src={hero_page}
            alt="Hero Main"
            className="max-h-[70vh] w-auto object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Overlay Image in Center-Bottom */}
          <motion.img
            src={hero_overlay}
            alt="Hero Overlay"
            className="absolute bottom-0 pb-2 left-1/2 transform -translate-x-1/2 max-w-[50%] max-h-[50%] object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />

          {/* Steve on Left */}
          <motion.img
            src={steve}
            alt="Steve"
            className="absolute left-0 bottom-0 w-[25%] sm:w-[20%] md:w-[15%]"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />

          {/* Vindicator on Right */}
          <motion.img
            src={vindicator}
            alt="Vindicator"
            className="absolute right-0 bottom-0 w-[25%] sm:w-[20%] md:w-[15%]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </div>

        {/* Deadline - Below Hero, Right Aligned */}
        <motion.div
          className="w-full flex justify-end pr-4 mt-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <img src={deadline} alt="Deadline" className="w-40 sm:w-56 md:w-64" />
        </motion.div>

        {/* Gameplay Section */}
        <div className="pt-16 flex flex-col items-center">
          
          {/* Zombies + Gameplay Heading */}
          <div className="flex items-center gap-4">
            <motion.img
              src={zombie_left}
              alt="Zombie Left"
              className="w-16 sm:w-24 md:w-32"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
            
            <motion.img
              src={gameplay_heading}
              alt="Gameplay Heading"
              className="w-48 sm:w-72 md:w-96"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            />

            <motion.img
              src={zombie_right}
              alt="Zombie Right"
              className="w-16 sm:w-24 md:w-32"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </div>

          {/* Gameplay Details */}
          <motion.img
            src={gameplay_details}
            alt="Gameplay Details"
            className="pt-6 w-[90%] sm:w-[80%] md:w-[70%]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
