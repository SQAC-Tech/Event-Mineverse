import React from "react";
import { motion } from "framer-motion";

// Assets
import heading from "../assets/mineverse_heading_main.png";
import register from "../assets/Group 27.png";
import sqac_icon from "../assets/SQAC-Logo.png";
import hero_page from "../assets/mineverse_background-comp.png";
import hero_overlay from "../assets/hero_overlay.svg";
import steve from "../assets/steve.svg";
import vindicator from "../assets/vindictator.svg";
import deadline from "../assets/deadline.svg";
import gameplay_heading from "../assets/gameplay_heading.svg";
import zombie_left from "../assets/zombie_left.svg";
import zombie_right from "../assets/zombie_right.svg";
import gameplay_details from "../assets/gameplay_details.svg";

const App = () => {
  return (
    <div className="w-full min-h-screen text-white font-mono overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full bg-transparent overflow-hidden">
        {/* SQAC Logo */}
        <div className="absolute top-3 left-3 z-20">
          <motion.img
            src={sqac_icon}
            alt="SQAC Icon"
            className="w-12 sm:w-16 md:w-20 h-auto cursor-pointer "
           
          />
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center pt-16 px-3 sm:px-6 text-center relative z-10">
          {/* Heading */}
          <motion.img
            src={heading}
            alt="Heading Picture"
            className="w-65 sm:w-56 md:w-72 lg:w-[500px] max-w-full mb-4 "
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Hero image & register button */}
          <div className="relative w-full flex justify-center items-center">
            <motion.img
              src={hero_page}
              alt="Hero Main"
              className="h-[50vh] sm:h-[65vh] lg:h-[72vh] w-[95%] sm:w-[88%] object-cover border-4 rounded-xl border-[#2d1907]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />

            {/* Register button */}
            <a href="https://mine-verse-registeration-form.vercel.app/">
              <motion.img
                src={register}
                alt="register"
                className="absolute top-1/2 left-1/2 
                           w-[160px] sm:w-[160px] md:w-[200px] lg:w-[250px]
                           -translate-x-1/2 -translate-y-1/2 
                           rounded-sm border-4 border-[#3bb143] 
                           shadow-[0_0_20px_#3bb143,0_0_40px_#1d701f]
                           hover:shadow-[0_0_25px_#00ff00,0_0_60px_#00ff00]
                           hover:scale-110 duration-300 pixelated"
                style={{ imageRendering: "pixelated" }}
                initial={{ opacity: 0.8, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 10px #3bb143, 0 0 30px #1d701f",
                    "0 0 15px #00ff00, 0 0 50px #00ff00",
                    "0 0 10px #3bb143, 0 0 30px #1d701f",
                  ],
                }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            </a>

            {/* Overlay */}
            <motion.div
              className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 
                         w-[90%] sm:w-[70%] md:w-[60%] p-3 sm:p-4 
                         bg-[#5C3612]/90 border-4 border-[#2d1907] rounded-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="text-[#b0f1aa] text-sm sm:text-base md:text-lg font-mono">
              Enter A World Where Every Thought Is A Block. Build your ideas, craft your journey, and shape your own adventure—one block at a time.

              </p>
            </motion.div>
          </div>

          {/* Deadline */}
          <motion.div
  className="w-full flex justify-center mt-8 sm:mt-9"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 0.8 }}
>
  <motion.div
    className="px-6 sm:px-10 py-3 bg-black/30 border-4 border-red-700 rounded-full flex justify-center items-center"
    animate={{
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0px rgba(255,0,0,0.8)",
        "0 0 20px rgba(255,0,0,0.9)",
        "0 0 0px rgba(255,0,0,0.8)"
      ],
      rotate: [0, -1, 1, 0] // slight shake
    }}
    transition={{
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <span className="text-white font-mono text-base sm:text-lg tracking-wider text-center">
      DEADLINE <br />
      21st August, 2025
    </span>
  </motion.div>
</motion.div>

        </div>
      </div>

      {/* Gameplay Section */}
      <div className="pt-[50px] flex flex-col items-center px-3 sm:px-1">
        {/* Heading with zombies */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2 w-full">
          <motion.img
            src={zombie_left}
            alt="Zombie Left"
            className="w-8 sm:w-12 md:w-16 hidden md:block"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />

          <motion.img
            src={gameplay_heading}
            alt="Gameplay Heading"
            className="w-[95%] sm:w-[60%] md:w-[50%] lg:w-[40%] h-auto sm:px-6 mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          />

          <motion.img
            src={zombie_right}
            alt="Zombie Right"
            className="w-8 sm:w-12 md:w-16 hidden md:block"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        </div>

        {/* Gameplay details */}
        <motion.div
          className="pt-6 w-full max-w-[70rem] bg-[#056029] text-white rounded-2xl text-center p-4 sm:p-6 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <p className="font-bold text-base sm:text-lg md:text-xl">
            • Resource Trading:{" "}
            <span className="font-normal">
              Teams May Negotiate And Trade Resources With Others During The
              Game. All Trades Must Be Mutual And Declared To The Game Masters.
            </span>
          </p>
          <p className="font-bold text-base sm:text-lg md:text-xl">
            • 3-For-1 Conversion:{" "}
            <span className="font-normal">
              Any 3 Of The Same Resource Can Be Converted Into 1 Resource Of
              Choice.
            </span>
          </p>
          <p className="font-bold text-base sm:text-lg md:text-xl">
            • Trading And Conversion Actions Must Be Performed Only During Your
            Team’s Turn.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
