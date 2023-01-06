import React from 'react';
// import img from '../assets/wall.jpg';
import mlImg from '../assets/ml.webp';
import webDevImg from '../assets/webDev.jpg';
const Portfolio = () => {
  const portfolios = [
    {
      img: mlImg,
      hidden: true,
      name: 'Acoustic Scene classification',
      github: 'https://github.com/adhyyanT/acoustic-scene-classification',
      live: '',
    },
    {
      img: webDevImg,
      hidden: true,
      name: 'Corona Tracker',
      github: 'https://github.com/adhyyanT/corona-tracker',
      live: '',
    },
    {
      img: webDevImg,
      hidden: true,
      name: 'SMIT-Result',
      github: 'https://github.com/adhyyanT/smit-result',
      live: '',
    },
  ];

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
          {portfolios.map(({ img, hidden, name, github, live }, index) => (
            <div key={index} className='shadow-sm shadow-gray-600 rounded-lg'>
              <a href={github} target='_blank' rel='noreferrer'>
                <button>
                  <img
                    src={img}
                    alt=''
                    className='rounded-md duration-200 hover:scale-105'
                  />
                </button>
              </a>
              <div className='flex items-center justify-center '>
                <button
                  hidden={hidden}
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                >
                  Live
                </button>
                <a href={github} target='_blank' rel='noreferrer'>
                  <p className='px-6 py-3 m-4 duration-200 hover:scale-105 text-xl text-center justify-center'>
                    {name}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
