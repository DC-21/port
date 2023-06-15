import React from 'react';
import Slide from './Slide';

const Portfolio = () => {
  return (
    <section className="text-gray-600 body-font min-h-screen w-full rounded">
      <div className="container py-8 mx-auto flex flex-col w-full h-screen">
        <div className="px-4 py-4 flex justify-center rounded" style={{ background: 'linear-gradient(to right, #c562b3, #a1d0f2)' }}>
          <h1 className="text-indigo-700 text-2xl font-bold">My Portfolio</h1>
        </div>
        <div className="container px-5 py-8 mx-auto flex flex-wrap rounded" >
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded overflow-hidden min-h-screen md:pr-4">
            <div className="bg-indigo-400 rounded-md">
              <Slide className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col flex-wrap rounded-md h-screen lg:py-6 md:py-10 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center md:pl-4" style={{ background: 'linear-gradient(to right, #fff, #a1d0f2)' }}>
            <div className="flex flex-col  justify-center rounded mb-10 lg:items-start items-center">
             <h1 className="text-indigo-700 text-2xl font-bold pt-6">My Projects</h1>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center md:pt-10 pt-0">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">AI-Web</h2>
                <p className="leading-relaxed text-base">I built the Ai-Web using React and deployed it using Netlify.</p>
                <a className="mt-3 text-indigo-500 items-center md:flex hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                  Check it out
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                </a>
                <a className="mt-3 text-indigo-500 flex items-center justify-center md:hidden text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0l-7 7m7-7v18" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0l-7 7m7-7v18" />
                  </svg>
                </a>

              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center md:pt-14 pt-0">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">MyAi</h2>
                <p className="leading-relaxed text-base">MyAi is next-generation Reminder based Ai that is going to run on mobile phones. Its under development now.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
