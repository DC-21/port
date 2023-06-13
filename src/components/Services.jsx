import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

const Services = () => {
  return (
    <section className="h-screen w-full" id="services">
      <div className="flex flex-col w-full">
        <div className="flex flex-col                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ">
        <div className="w-full justify-between">
          <div className="flex justify-between w-full">
          <div className="w-1/2 text-center">
          <p>Junior Web Developer</p>
         </div>
         <div className="w-1/2">
         <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_w51pcehl.json"
            style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
            className="z-10 hover:-translate-y-4 transition-all ease-in-out duration-300 cursor-pointer"
          />
         </div>
          </div>
          <div className="w-full flex">
          <div className="w-1/2 h-1/3">
         <p>Junior Web Developer</p>
         </div>
         <div className="w-1/2">
         <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_ndt8zfny.json"
            style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
            className="z-10 hover:-translate-y-4 transition-all ease-in-out duration-300 cursor-pointer"
          />
         </div>
         </div>
         <div className="w-full flex">
          <div className="w-1/2 h-1/3">
         <p>Junior Web Developer</p>
         </div>
         <div className="w-1/2">
         <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_q8ND1A8ibK.json"
            style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
            className="z-10 hover:-translate-y-4 transition-all ease-in-out duration-300 cursor-pointer"
          />
         </div>
         </div>
        </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Services
