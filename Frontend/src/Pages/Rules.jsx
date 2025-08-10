import React from 'react'
import rules_heading from '../assets/rules_heading.svg'
import husk_left from '../assets/husk_left.svg'
import husk_right from '../assets/husk_right.svg'

const Rules = () => {
  return (
    <div className='align-center flex flex-col items-center pt-16 pb-8 px-4'>
        <div className='flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-[60rem]'>
        <img className='hover:scale-110 transition-transform duration-300' src={husk_left} alt="" />
        <button className='cursor-pointer hover:border-2 hover:border-green-400 hover:scale-102 rounded-lg '><img src={rules_heading} alt="Rules" /></button>
        <img className="hover:scale-110 transition-transform duration-300" src={husk_right} alt="" />
        </div>
    </div>
  )
}

export default Rules
