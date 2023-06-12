import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import own from '../images/own.png'


const Hero = () => {
  return (
    <section className="min-h-screen w-full sticky" style={{ background: 'linear-gradient(to right, #5b80d7, #2d177d)' }}  id="home">
      <div className="px-6 flex md:flex-row flex-col w-full md:justify-between justify-center">
        <div className="justify-center items-center md:w-1/2 ">
          <div className="pt-40">
          <p className="pt-10 text-lg font-bold text-center text-indigo-100">I'm Chola Kuboko</p>
            <div className="text-center pt-4">
             <TypeAnimation
               sequence={[
                'Web Developer', 2000,
                'AI Chatbot Developer', 2000,
                'Web Penetration Tester', 2000
                   ]}
                className="text-white text-2xl font-bold"
                repeat={Infinity}
                wrapper="span"
               />
              </div>
              <p className="mb-4 w-full text-center items-center md:text-left text-white pt-4 text:sm md:text-md font-medium-bold text-large font-medium py-0 px-0">Am a freelancer web developer with a passion for cybersecurity and AI chatbot Development.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full">
        <img className="w-full h-[10%]  py-12 object-cover object-center rounded-md"  src={own}/>
        </div>
      </div>
    </section>
  )
}

export default Hero
