import React from 'react';

import gitImg from '../assets/git.png';
import jsImg from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import pythonImg from '../assets/python.png';
import javaImg from '../assets/java.png';
import cppImg from '../assets/cpp.png';
import azureImg from '../assets/azure.png';
import nodeImg from '../assets/node.png';
import dsaImg from '../assets/dsa.png';
const Experience = () => {
  const exp = [
    {
      src: javaImg,
      title: 'Java',
      style: 'shadow-white',
    },
    {
      src: pythonImg,
      title: 'Python',
      style: 'shadow-yellow-400',
    },
    {
      src: cppImg,
      title: 'C++',
      style: 'shadow-gray-400',
    },
    {
      src: azureImg,
      title: 'Azure',
      style: 'shadow-sky-400',
    },
    {
      src: dsaImg,
      title: 'DSA',
      style: 'shadow-orange-500',
    },
    {
      src: nodeImg,
      title: 'NodeJS',
      style: 'shadow-green-500',
    },
    {
      src: jsImg,
      title: 'Javascript',
      style: 'shadow-yellow-500',
    },
    {
      src: reactImg,
      title: 'ReactJS',
      style: 'shadow-blue-600',
    },

    {
      src: gitImg,
      title: 'Git',
      style: 'shadow-pink-400',
    },
  ];

  const timeLine = [
    {
      date: 2022,
      work: 'Analyst / Software Engineer at Capgemini',
    },

    {
      date: 2021,
      work: 'Bachelor Degree in Computer Science',
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

          {/* Main grid of 2 cols on large disp and 1 col on small disps -> left side of 
          col is agian a grid and right is timeline
          */}
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center'>
            {/* This is left side add skills here using the array above*/}
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

            {/* This is the timeline add work exp here */}
            <div className='grid grid-rows-3 px-12 '>
              {timeLine.map(({ date, work }, index) => (
                <div key={index} className=' grid grid-cols-2 mx-auto py-4'>
                  <p className=' text-gray-500  text-2xl my-auto'>{date}</p>
                  <p className=' text-white text-sm my-auto'>{work}</p>
                  {/* <p>Sikkim Manipal Institue of Technology</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
