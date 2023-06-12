import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import girl from '../images/girl.png'


const Hero = () => {
  return (
    <section className="h-screen w-full" style={{ background: 'linear-gradient(to right, #5b80d7, #2d177d)' }}  id="home">
      <div className="px-6 flex w-full justify-between">
        <div className="justify-center items-center w-1/2">
            <p className="pt-10 items-center">I'm Chola Kuboko</p>
            <div>
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
        </div>
        <div className="justify-center items-center w-1/2">
        <img className="w-full h-full  pt-8 object-cover object-center rounded-md"  src={girl}/>
        </div>
      </div>
    </section>
  )
}

export default Hero
