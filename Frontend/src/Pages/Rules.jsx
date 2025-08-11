import React from 'react'
import rules_heading from '../assets/rules_heading.svg'
import husk_left from '../assets/husk_left.svg'
import husk_right from '../assets/husk_right.svg'

const Rules = () => {
  return (
    <div className="align-center flex flex-col items-center pt-10 mt-[-20px] pb-8 px-4 text-center sm:mt-[-20px]  ">


  <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-[70rem] mt-4">
    {/* Left Husk */}
    <img
      className="w-10 sm:w-14 md:w-auto hover:scale-110 transition-transform duration-300 hidden md:block"
      src={husk_left}
      alt=""
    />

    {/* Rules Heading */}
    <a
  href="/MineVerse_Rules_SQAC.docx" 
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer hover:border-2 hover:border-green-400 hover:scale-105 rounded-lg inline-block"
>
  <img
    src={rules_heading}
    alt="Rules"
    className="w-[360px] sm:w-[400px] md:w-[600px]"
  />
</a>

    {/* Right Husk */}
    <img
      className="w-10 sm:w-14 md:w-auto hover:scale-110 transition-transform duration-300 hidden md:block"
      src={husk_right}
      alt=""
    />
  </div>
    <h1 className="font-mono font-bold mb-2 border-2 p-2 rounded-2xl text-lg sm:text-2xl md:text-3xl lg:text-4xl text-green-400 drop-shadow-[0_0_5px_rgba(0,255,0,0.7)] animate-pulse">
    Click to Download Rules Manual
  </h1>
</div>

  )
}

export default Rules
