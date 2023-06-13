import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

const Services = () => {
  return (
    <section className="min-h-screen  w-full rounded" style={{ backgroundColor: '#fafafa'}} id="services">
      <div>
        <p className="text-center pt-6 md:text-3xl text-2xl underline font-bold text-blue-800">My Services</p>
        <div className="flex flex-col h-full w-full pt-4">
          <div className="md:flex md:flex-row flex-col h-100% items-center justify-between w-full">
          <div className="text-center align-middle">
          <p className="text-center md:px-40 font-bold md:text-2xl text-xl" style={{ color: '#2d177d'}}>Web Development</p>
          <p className="text-center md:px-40 text-l pt-6" style={{ color: '#2d177d'}}>Full stack Web Development with React Js and Node Js.</p>
         </div>
            <div className="">
              <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_w51pcehl.json"
                style={{ maxWidth: '600px', width: '50%', height: '50%' }}
                className="z-10 hover:-translate-y-4 transition-all object-center justify-center ease-in-out duration-300 cursor-pointer text-center"
             />
            </div>
          </div>
          <div className="w-full md:flex md:flex-row flex-col h-70 items-center text-center justify-between">
            <div className="text-center align-middle">
              <p className="text-center md:px-40 font-bold md:text-2xl text-xl" style={{ color: '#2d177d'}} >Web PenTesting</p>
              <p className="text-center md:px-40 text-l pt-6" style={{ color: '#2d177d'}}>Website and WebApp penetration testing to enhance security levels.</p>
            </div>
            <div className="">
              <Player
               autoplay
               loop
               src="https://assets10.lottiefiles.com/packages/lf20_ndt8zfny.json"
               style={{ maxWidth: '600px', width: '50%', height: '50%' }}
               className="z-10 hover:-translate-y-4 transition-all justify-center text-center ease-in-out duration-300 cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full md:flex md:flex-row flex-col gap-10 items-center justify-between text-center h-70" >
           <div className="text-center align-middle">
            <p className="text-center md:px-40 font-bold md:text-2xl text-xl" style={{ color: '#2d177d'}} >Chatbot Development</p>
            <p className="text-center md:px-40 text-l pt-6" style={{ color: '#2d177d'}}>Chatbot development for Websites with guided integration.</p>
           </div>
           <div className="">
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
      </div>
    </section>
  )
}

export default Services
