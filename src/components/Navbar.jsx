import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { CgCloseR } from 'react-icons/cg';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen((prevOpen) => !prevOpen);
  }

  const handleHome = () => {
    const home = document.getElementById('home');
    if(home) {
        home.scrollIntoView({ behavior: 'smooth'});
        setOpen(!open)
    }
  };

  const handleServices = () => {
    const Services = document.getElementById('services');
    if(services) {
        services.scrollIntoView({ behavior: 'smooth'});
        setOpen(!open)
    }
  };

  const handlePortfolio = () => {
    const portfolio  = document.getElementById(services);
    if(portfolio) {
        portfolio.scrollIntoView({ behavior: 'smooth'});
        setOpen(!open)
    }
  };

  const handleHire = () => {
    const hire = document.getElementById(hire);
    if(hire) {
        hire.scrollIntoView({ behavior: 'smooth'});
    }
  };

  return (
    <div className="w-full flex justify-between md:px-8 px-6 text-white md:py-5 py-5" style={{ backgroundColor: '#133973' }}>
      <div>
        <a className="text-bold" href=''>DiCE</a>
      </div>
      <div className="">
        <ul className="justify-center gap-8 md:flex hidden">
          <li className="hover:bg-blue-300 duration-500 rounded-md py-2 px-3">
            <a onClick={handleHome} href=''>Home</a>
          </li>
          <li className="hover:bg-blue-300 duration-500 rounded-md py-2 px-3">
            <a onClick={handleServices} href=''>Services</a>
          </li>
          <li className="hover:bg-blue-300 duration-500 rounded-md py-2 px-3">
            <a onClick={handlePortfolio} href=''>Portfolio</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <button className="md:block hidden hover:bg-blue-300 duration-500 rounded-md py-2 px-3">Hire Me</button>
        {open?
            <button onClick={handleNav} className='block md:hidden font-extrabold items-center justify-center'><CgCloseR/></button>
        :
            <button onClick={handleNav} className="md:hidden block"><FaBars /></button>
        }
        {open ? (
          <div className="md:hidden block">
            <ul className="md:hidden absolute h-30 space-y-3 bg-white shadow-md p-5 top-16 text-black rounded-md flex-col justify-center gap-8 right-0">
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>Services</a>
              </li>
              <li>
                <a href=''>Portfolio</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
