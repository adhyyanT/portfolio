import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = ({ setNavEn }) => {
  // props.navEn = nav;
  const links = ['Home', 'About', 'Portfolio', 'Experience', 'Contact'];
  const [nav, setNav] = useState(false);
  const changeStateOfNav = () => {
    setNav(!nav);
    setNavEn(nav);
  };
  return (
    <div
      className='px-4 flex items-center justify-between h-20 text-white fixed
     bg-black w-full'
    >
      <div>
        <h1 className='font-signature text-5xl ml-2'>Adhyyan</h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map((link, index) => (
          <li
            key={index}
            className='px-4 cursor-pointer font-medium
             text-gray-500 hover:scale-125 duration-200'
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
            {/* {console.log(link + ' ' + index)} */}
          </li>
        ))}
      </ul>
      <div
        className='cursor-pointer pr-4 text-gray-500 z-10 md:hidden'
        onClick={changeStateOfNav}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className='flex flex-col items-center justify-center 
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b 
         from-black to-gray-800 text-gray-500'
        >
          {links.map((link, index) => (
            <li key={index} className='cursor-pointer py-6 text-4xl px-4'>
              <Link to={link} onClick={changeStateOfNav} smooth duration={500}>
                {link}
              </Link>
              {/* {console.log(link + ' ' + index)} */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
