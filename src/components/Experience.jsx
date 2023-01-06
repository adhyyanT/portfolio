import React from 'react';
import img from '../assets/img-new.png';

const Experience = () => {
  const exp = [
    {
      src: img,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      src: img,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      src: img,
      title: 'javascript',
      style: 'shadow-yellow-500',
    },
    {
      src: img,
      title: 'react',
      style: 'shadow-blue-600',
    },
    {
      src: img,
      title: 'tailwind',
      style: 'shadow-sky-400',
    },
    {
      src: img,
      title: 'nextJs',
      style: 'shadow-white',
    },
    {
      src: img,
      title: 'GraphQL',
      style: 'shadow-pink-400',
    },
    {
      src: img,
      title: 'GitHub',
      style: 'shadow-gray-400',
    },
  ];
  return (
    <div
      name='Experience'
      className='pb-24 w-full h-full bg-gradient-to-b from-gray-800 to-black
       '
    >
      <div
        className='max-w-screen-lg mx-auto p-4 flex  flex-col 
      justify-center w-full h-full text-white'
      >
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
            Experience
          </p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>
        <div
          className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 
        text-center py-8 px-12 sm:px-0'
        >
          {exp.map(({ src, title, style }, index) => (
            <div
              key={index}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt='' className='w-20 mx-auto ' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
