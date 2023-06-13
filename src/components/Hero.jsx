import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import own from '../images/own.png'


const Hero = () => {
  return (
    <section className="h-screen w-full" style={{ background: 'linear-gradient(to right, #fafafa, #2d177d)' }}  id="home">
      <div className="px-6 flex md:flex-row flex-col w-full md:justify-between justify-center">
        <div className="justify-center items-center md:w-1/2 ">
          <div className="md:pt-40 pt-1">
          <p className="md:pt-10 pt-4 text-3xl font-bold text-center underline" style={{ color: 'linear-gradient(to right, #fafafa, #2d177d)' }}>I'm Chola Kuboko</p>
            <div className="text-center md:pt-4 pt-2">
             <TypeAnimation
               sequence={[
                'A Junior Web Developer', 2000,
                'An AI Chatbot Developer', 2000,
                'A Web Penetration Tester', 2000
                   ]}
                className="text-2xl font-bold" 
                repeat={Infinity}
                wrapper="span"
                style={{ color: 'linear-gradient(to right, #fafafa, #2d177d)' }}
               />
              </div>
              <p className="mb-4 ml-4 w-full text-center items-center md:text-left pt-4 text:sm md:text-md text-large font-lg py-0 px-0" style={{ color: 'linear-gradient(to right, #fafafa, #2d177d)' }}>Am a freelancer web developer with a passion for cybersecurity and AI chatbot Development.</p>
            </div>
            <div className="text-center md:block items-center">
              <button className="hover:bg-blue-300 text-white text-lg font-bold py-2 px-3 rounded" style={{ backgroundColor: '#2d177d' }}>
                   Email Me
              </button>
            </div>
        </div>
        <div className="w-full justify-center md:w-1/2 h-full md:pt-0 pt-4">
        
        </div>
      </div>
    </section>
  )
}

export default Hero
