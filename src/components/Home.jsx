import React from 'react';
import heroImg from '../assets/img-2.png';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';
import Typed from 'react-typed';

const Home = ({ navEn }) => {
  return (
    <div
      name='Home'
      className=' h-screen w-full 
      bg-gradient-to-b from-black via-black
      to-gray-800 '
    >
      <div
        className='max-w-screen-lg  
        justify-center items-center mx-auto
        px-4 h-full flex flex-col md:flex-row'
      >
        <div className=''>
          <h2 className='text-4xl sm:text-7xl font-bold text-white '>
            I am a Graduate Student
            {/*  */}
          </h2>
          <p className='text-gray-400 py-4 max-w-md text-xl'>
            {navEn && (
              <Typed
                strings={[
                  '1 year experienced Software Engineer',
                  'Problem solver',
                  'Not afraid to take risks',
                  'Looking for an internship',
                ]}
                typeSpeed={20}
                backSpeed={40}
              />
            )}
          </p>
          <div className='sm:mb-10'>
            <Link
              to='Portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center 
            rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <FiArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div className='mt-12'>
          <img
            src={heroImg}
            alt='my profile'
            className='rounded-2xl mx-auto w-2/3 md:w-full '
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
