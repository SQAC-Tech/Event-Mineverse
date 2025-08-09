import React from 'react'
import ContactForm from './contactForm';
import FAQSection from './faqSection';
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import sqacIcon from '../assets/icon.png';


const footer = () => {
  return (
    <div className="flex justify-center items-center  py-10 px-4">
  <div className="bg-[#4d3828]/70 backdrop-blur-md text-white rounded-md px-8 py-6 w-full max-w-6xl">
    
    {/* Contact & FAQ Section side-by-side */}
    <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full p-6 " >
      <ContactForm />
      <FAQSection />
    </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <img
                src={sqacIcon}
                alt="SQAC Logo"
                className="w-12 h-12 rounded-md"
              />
              <div>
                <h2 className="text-4xl font-bold text-[#ffae42] font-['jersey_20'] text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text">SQAC</h2>
                <p className="font-['jersey_20'] text-lg text-orange-300 justify-center text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-justify leading-snug">
                  Software Quality <br/> Assurance Community
                </p>
              </div>
            </div>
            <p className=" font-['jersey_20'] text-lg text-gray-200 mt-4 max-w-xs text-transparent bg-gradient-to-r from-orange-200 to-pink-500 bg-clip-text leading-snug  ">
              "Software assurance isn’t just about finding bugs — it’s about
              building trust into every line of code."
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex-1 text-sm">
            
            <h3 className="font-['jersey_20'] font-semibold mb-1 text-xl text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text">Contact Info</h3>
            <p className=" font-['jersey_20'] text-lg text-gray-200 text-transparent bg-gradient-to-r from-orange-200 to-pink-500 bg-clip-text leading-snug">
              SRM Institute of Science & Technology,
              <br />
              Kattankulathur, Chennai 603203
              <br />
              India
            </p>

            <div className="flex gap-4 mt-4 text-3xl">
              <a href="https://www.instagram.com/sqac.srmist/?hl=en" target="_blank" className="hover:text-pink-400">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/sqacsrm" target="_blank" className="hover:text-blue-400">
                <FaLinkedinIn />
              </a>
              <a href=" https://github.com/SQAC-Tech" target="_blank" className="hover:text-black">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

      

  )
}

export default footer
