import React from 'react'

const Portfolio = () => {
  return (
    <section className="h-screen w-full md:px-8 px-6" style={{ background: 'linear-gradient(to right, #fafafa, #2d177d)' }} id="portfolio">
      <div>
        <div className="w-full justify-center grid grid-cols-3 pt-20">
          <div className="w-1/3 h-40 w-30 bg-black">
            <div className="w-full"></div>
          </div>
          <div className="w-1/3 ">2</div>
          <div className="w-1/3 ">3</div>
          <div className="w-1/3 ">12</div>
          <div className="w-1/3 ">2</div>
          <div className="w-1/3 ">3</div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
