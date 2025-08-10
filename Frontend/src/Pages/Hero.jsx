import React from 'react';
import { motion } from 'framer-motion';

// User's original asset names
import heading from '../assets/mineverse_heading_main.png';
import register from '../assets/Group 27.png'

import sqac_icon from '../assets/SQAC-Logo.png';
import hero_page from '../assets/mineverse_background.png';
import hero_overlay from '../assets/hero_overlay.svg';
import steve from '../assets/steve.svg';
import vindicator from '../assets/vindictator.svg';
import deadline from '../assets/deadline.svg';
import gameplay_heading from '../assets/gameplay_heading.svg';
import zombie_left from '../assets/zombie_left.svg';
import zombie_right from '../assets/zombie_right.svg';
import gameplay_details from '../assets/gameplay_details.svg';

const App = () => {
  return (
    <div className="w-full min-h-screen  text-white font-mono overflow-x-hidden">
      
      {/* Hero Section */}
      <div className="relative w-full min-h-screen bg-transparent overflow-hidden ">
       
        {/* SQAC Logo */}
        <div className="absolute top-3 left-3 z-20">
          <motion.img
            src={sqac_icon}
            alt="SQAC Icon"
            className="w-16 sm:w-20 md:w-28 lg:w-20 h-auto cursor-pointer hover:scale-105 transition-transform"
            onClick={() => window.open('https://sqac-website.vercel.app', "_blank")}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center pt-16 px-3 sm:px-6 text-center relative z-10">
          {/* Heading */}
          <motion.img
            src={heading}
            alt="Heading Picture"
            className="w-52 sm:w-72 md:w-96 lg:w-[500px] max-w-full mb-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Hero image & overlay */}
          <div className="relative w-full flex justify-center items-center">
       <motion.img
  src={hero_page}
  alt="Hero Main"
  className="h-[72vh] w-[90%] object-fill"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
/>
<a href="https://mine-verse-registeration-form.vercel.app/">
<motion.img
    src={register} 
    alt="register"
    className="absolute top-1/2 left-1/2 w-[150px] sm:w-[200px] md:w-[250px] 
               -translate-x-1/2 -translate-y-1/2 cursor-pointer"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 0.6 }}
  />
  </a>

            {/* Overlay */}
           <motion.div
  className="absolute bottom-12 pb-2  left-1/2 transform -translate-x-1/2 
             w-[105%] sm:w-[70%] md:w-[80%] max-h-[25vh] h-[100px] flex items-center justify-center
             bg-[#002b49]/80 border border-[#00bfff]   "
>
  <p className="text-[#00b14f] text-center text-lg sm:text-xl md:text-2xl font-mono">
    Enter A World Where Every Thought Is A Block. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium voluptas 
  </p>
</motion.div>


            {/* Characters */}
            {/* <motion.img
              src={steve}
              alt="Steve"
              className="absolute left-55 bottom-10 w-[40%] sm:w-[30%] md:w-[25%] lg:w-[10%]"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />

            <motion.img
              src={vindicator}
              alt="Vindicator"
              className="absolute right-68 bottom-10 w-[20%] sm:w-[18%] md:w-[15%] lg:w-[5%]"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />*/}
          </div> 

          {/* Deadline */}
         <motion.div
  className="w-[80%] sm:w-[60%] md:w-[280px] flex justify-center items-center ml-[1150px] mt-10"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 1, duration: 0.8 }}
>
  <div className="px-20 py-6  bg-black/30 rounded-full flex justify-center items-center">
    <span className="text-white font-mono text-lg tracking-wider">DEADLINE</span>
   
  </div>
</motion.div>

        </div>
      </div>

      {/* Gameplay Section */}
      <div className="pt-6 pb-12 flex flex-col items-center px-3 sm:px-6 ">
        {/* Heading with zombies */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
          <motion.img
            src={zombie_left}
            alt="Zombie Left"
            className="w-10 sm:w-16 md:w-20"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        
          <motion.img
            src={gameplay_heading}
            alt="Gameplay Heading"
            className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          />
        
          <motion.img
            src={zombie_right}
            alt="Zombie Right"
            className="w-10 sm:w-16 md:w-20"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        </div>
        
        {/* Gameplay details */}
       <motion.div
      className="pt-6 w-full max-w-[70rem] bg-[#14532d]/70 text-white rounded-2xl text-center p-6 space-y-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.8 }}
    >
      <p className="font-bold text-xl">
        • Resource Trading: <span className="font-normal">Teams May Negotiate And Trade Resources With Others During The Game. All Trades Must Be Mutual And Declared To The Game Masters.</span>
      </p>
      <p className="font-bold text-xl">
        • 3-For-1 Conversion: <span className="font-normal">Any 3 Of The Same Resource Can Be Converted Into 1 Resource Of Choice.</span>
      </p>
      <p className="font-bold text-xl">
        • Trading And Conversion Actions Must Be Performed Only During Your Team’s Turn.
      </p>
    </motion.div>
      </div>
    </div>
  );
};

export default App;
