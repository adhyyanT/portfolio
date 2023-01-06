import React from 'react';
import img from '../assets/wall.jpg';

const Portfolio = () => {
  const portfolios = [img, img, img, img, img, img];
  return (
    <div
      name='Portfolio'
      className='pb-24 w-full  h-full bg-gradient-to-b from-black to-gray-800 text-white'
    >
      <div className='max-w-screen-lg  p-4 flex mx-auto flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        {/* Add portfolio cards */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map((img, index) => (
            <div key={index} className='shadow-sm shadow-gray-600 rounded-lg'>
              <img
                src={img}
                alt=''
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex items-center justify-center '>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  Demo
                </button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
