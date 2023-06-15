import React from 'react';
import Slide from './Slide';

const Portfolio = () => {
  return (
    <section className="text-gray-600 body-font min-h-screen w-full rounded">
      <div className="container py-8 mx-auto flex flex-col w-full h-screen">
        <div className="px-4 py-4 flex justify-center rounded" style={{ background: 'linear-gradient(to right, #c562b3, #a1d0f2)' }}>
          <h1 className="text-indigo-700 text-2xl font-bold">My Projects</h1>
        </div>
        <div className="container px-5 py-8 mx-auto flex flex-wrap rounded" >
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded overflow-hidden min-h-screen md:pr-4">
            <div className="bg-indigo-400 rounded-md">
              <Slide className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col flex-wrap rounded-md h-screen lg:py-6 md:py-10 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center md:pl-4" style={{ background: 'linear-gradient(to right, #fff, #a1d0f2)' }}>
            <div className="flex flex-col mb-10 lg:items-start items-center md:pt-10 pt-0">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
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
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
