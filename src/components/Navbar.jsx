import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between px-8 text-white py-6" style={{backgroundColor: '#133973'}}>
      <div>
        <a href=''>DiCE</a>
      </div>
      <div>
        <ul className="flex justify-center gap-8">
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
      <div>
        <button>Hire Me</button>
      </div>
    </div>
  )
}

export default Navbar
