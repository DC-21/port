import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="w-full flex justify-between md:px-8 px-6 text-white md:py-6 py-4" style={{ backgroundColor: '#133973' }}>
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
        <button className="md:block hidden pr-10">Hire Me</button>
        <button onClick={handleNav} className="md:hidden block"><FaBars /></button>
        {open ? (
          <div className="md:hidden block">
            <ul className="md:hidden flex flex-col justify-center gap-8">
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
