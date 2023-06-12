import React from 'react'
import { TypeAnimation } from 'react-type-animation'


const Hero = () => {
  return (
    <section className="h-screen w-full" style={{ backgroundColor: '#5b80d7'}} id="home">
      <div className="px-6 flex w-full justify-between">
        <div className="justify-center items-center w-1/2">
            <p className="pt-10 items-center">I'm Chola Kuboko</p>
            <div><TypeAnimation sequence={[
                'Web Developer', 2000,
                'AI Chatbot Developer', 2000,
                'Web Penetration Tester', 2000
            ]}
            className="text-blue-900 font-bold text-4xl mb-8"
            repeat={Infinity}
            wrapper="span"
            /></div>
        </div>
        <div className="justify-center items-center w-1/2">
        <p className="pt-10 items-center">I'm Chola Kuboko</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
