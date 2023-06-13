import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

const Services = () => {
  return (
    <section className="min-h-screen w-full" id="services">
      <div className="flex w-full">
          <div className="md:flex md:flex-row flex-col h-70 items-center justify-between w-full" style={{ backgroundColor: '#354646'}}>
          <div className="w-1/2 text-center">
          <p>Junior Web Developer</p>
         </div>
         <div className="w-1/2">
         <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_w51pcehl.json"
            style={{ maxWidth: '600px', width: '50%', height: '50%' }}
            className="z-10 hover:-translate-y-4 transition-all object-center justify-center ease-in-out duration-300 cursor-pointer text-center"
          />
         </div>
          </div>
          <div className="w-full md:flex md:flex-row flex-col h-60 items-center text-center " style={{ backgroundColor: '#fafafa'}}>
          <div className="w-1/2 text-center">
         <p>Junior Cyber Analyst</p>
         </div>
         <div className="w-\1/2">
         <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_ndt8zfny.json"
            style={{ maxWidth: '600px', width: '50%', height: '50%' }}
            className="z-10 hover:-translate-y-4 transition-all ease-in-out duration-300 cursor-pointer"
          />
         </div>
         </div>
         <div className="w-full md:flex md:flex-row flex-col items-center text-center h-60" style={{ backgroundColor: '#fafafa'}}>
          <div className="w-1/2 h-1/3 text-center">
         <p>Junior Chatbot Developer</p>
         </div>
         <div className="w-1/2">
         <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_8q9oPD.json"
            style={{ maxWidth: '600px', width: '50%', height: '50%' }}
            className="z-10 hover:-translate-y-4 transition-all ease-in-out duration-300 cursor-pointer"
          />
         </div>
         </div>
      </div>
    </section>
  )
}

export default Services
