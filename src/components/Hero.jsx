import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { TypeAnimation } from 'react-type-animation'
import me from '../images/owncrop.png'


const Hero = () => {

  return (
    <section className="h-screen w-full md:px-8 px-6" style={{ background: 'linear-gradient(to right, #fafafa, #2d177d)' }}  id="home">
      <div className="flex md:flex-row flex-col w-full md:justify-between justify-center">
        <div className="justify-center items-center w-1/2">
          <div className="md:pt-20 pt-1 w-full text-center md:text-left">
          <p className="md:pt-10 pt-4 text-3xl font-bold text-left underline" style={{ color: 'linear-gradient(to right, #fafafa, #2d177d)' }}>I'm Chola Kuboko</p>
            <div className="text-left flex justify-start w-full md:pt-4 pt-2">
             <TypeAnimation
               sequence={[
                'A Junior Web Developer', 2000,
                'An AI Chatbot Developer', 2000,
                'A Web Penetration Tester', 2000
                   ]}
                className="text-2xl w-full font-bold text-left" 
                repeat={Infinity}
                wrapper="p"
                style={{ color: 'linear-gradient(to right, #fafafa, #2d177d)' }}
               />
              </div>
              <p className=" w-full text-center items-center md:text-left pt-4 text:sm md:text-md text-large font-lg py-0" style={{ color: 'linear-gradient(to right, #fafafa, #2d177d)' }}>Am a freelancer web developer with a passion for cybersecurity and AI chatbot Development.</p>
            </div>
            <div></div>
            <div className="text-center w-full flex mt-4 justify-start">
              <button className="hover:bg-blue-300 text-white text-lg font-bold py-2 px-3 rounded" style={{ backgroundColor: '#2d177d' }}>
                   Email Me
              </button>
            </div>
        </div>
        <div className="flex items-center justify-center w-1/2 p-12">
          <div className="w-full rounded-full bg-[#2d177d] hover:bg-white rotate-6 hover:rotate-0 transition-all duration-500 hover:-translate-y-4 overflow-hidden items-center justify-center p-8 hover:shadow-2xl shadow-xl">
            <img src={me} className="mx-auto rounded-full p-1 object-center object-cover w-full" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
