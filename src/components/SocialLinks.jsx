import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const SocialLinks = () => {
  const links = [
    {
      child: (
        <>
          LinkedIn <FaLinkedin size={30}></FaLinkedin>
        </>
      ),
      href: 'https://www.linkedin.com/in/adhyyan-tripathi-266594171/',
      style: 'rounded-tr-md',
    },
    {
      child: (
        <>
          Github <FaGithub size={30}></FaGithub>
        </>
      ),
      href: 'https://github.com/adhyyanT',
    },
    {
      child: (
        <>
          Mail <HiOutlineMail size={30}></HiOutlineMail>
        </>
      ),
      href: 'mailto:adhyyantripathi@outlook.com',
    },
    {
      child: (
        <>
          Leetcode <SiLeetcode size={30}></SiLeetcode>
        </>
      ),
      href: 'https://leetcode.com/Droid232/',
    },
    {
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
        </>
      ),
      href: '/Adhyyan_Tripathi_new.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            className={`justify-between 
            items-center w-40 h-14 px-4 flex ml-[-100px] 
            bg-gray-500 hover:rounded-md duration-300 
            hover:ml-[-10px] ${link.style}`}
          >
            <a
              href={link.href}
              download={link.download}
              target='_blank'
              rel='noreferrer'
              className='flex justify-between items-center w-full text-white'
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
