import React from 'react';

const About = () => {
  return (
    <div
      name='About'
      className='w-full h-full pb-24 bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 flex mx-auto flex-col justify-center w-full h-full'>
        <div className=''>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-20 '>
          I have been a tech enthusiast since I was eight, and my interest has
          only grown. I like to solve challenging real-world problems by
          leveraging my skills to their fullest; this allows me to work on
          exciting projects and, at the same time, enlightens me about the
          unknown.
        </p>
        <br />
        <p className='text-xl'>
          My specialties are; I am a quick learner and a highly industrious
          individual. Some of the skills I learned from my Bachelor's degree,
          internship from RRCAT, and working for Capgemini are - C, C++, JAVA,
          Python, MySQL, SQL, Git and GitHub, Microsoft Certified: Azure
          Fundamentals. Moreover, I regularly practice my coding skills to
          improve my grasp of data structures and algorithms. I've started to
          fan out on technologies such as Node.js, React.js, HTML, CSS, and
          JavaScript.
        </p>
      </div>
    </div>
  );
};

export default About;
