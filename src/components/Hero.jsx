import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Player } from '@lottiefiles/react-lottie-player';
import own from '../images/own.png'


const Hero = () => {
  return (
    <section className="h-screen w-full sticky" style={{ background: 'linear-gradient(to right, #5b80d7, #2d177d)' }}  id="home">
      <div className="px-6 flex md:flex-row flex-col w-full md:justify-between justify-center">
        <div className="justify-center items-center md:w-1/2 ">
          <div className="md:pt-40 pt-1">
          <p className="md:pt-10 pt-4 text-lg font-bold text-center text-indigo-100">I'm Chola Kuboko</p>
            <div className="text-center md:pt-4 pt-2">
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
          <div className="text-center md:block hidden"><button className="text-white text-l font-bold bg-blue-400 py-2 px-3 rounded hover:bg-blue-300">Email Me</button></div>
        </div>
        <div className="w-full md:w-1/2 h-full">
        <Player
            autoplay
            loop
            src="https://assets5.lottiefiles.com/packages/lf20_u5QQuTNSmu.json"
            style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
            className="z-10 hover:-translate-y-4 transition-all ease-in-out duration-300 cursor-pointer"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
