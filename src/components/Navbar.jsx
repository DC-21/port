import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="w-full flex justify-between md:px-8 px-6 text-white md:py-8 py-6" style={{ backgroundColor: '#133973' }}>
      <div>
        <a href=''>DiCE</a>
      </div>
      <div className="">
        <ul className="justify-center gap-8 md:flex hidden">
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
      <div className="flex gap-2">
        <button className="md:block hidden">Hire Me</button>
        {open?
            <button onClick={handleNav} className='block md:hidden font-extrabold items-center justify-center'>X</button>
        :
            <button onClick={handleNav} className="md:hidden block"><FaBars /></button>
        }
        {open ? (
          <div className="md:hidden block">
            <ul className="md:hidden absolute h-screen space-y-3 bg-white shadow-md p-5 top-16 text-black flex-col justify-center gap-8 right-0">
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
