import React from 'react';

const About = () => {
  return (
    <div
      name='About'
      className='w-full h-full pb-24 bg-gradient-to-b from-gray-800 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 flex mx-auto flex-col justify-center w-full h-full'>
        <div className='p-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-20 '>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
          aperiam! Quam quas illum facilis quaerat repellendus, vero iure rem
          consequuntur, a suscipit fuga. Tenetur porro impedit inventore
          accusantium ab in debitis aliquid a autem cumque quasi perspiciatis
          natus praesentium quia, fugit vitae temporibus unde. Repellat cum ipsa
          ut labore quasi?
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          doloremque eaque, ducimus distinctio numquam alias voluptatibus vel
          minus hic maiores, ex incidunt, nulla illo cum repudiandae veniam
          veritatis molestiae? Tempora voluptatibus laudantium consequuntur,
          dolores modi saepe, odio amet similique est quasi, quaerat hic ratione
          voluptas quidem. Blanditiis suscipit adipisci inventore.
        </p>
      </div>
    </div>
  );
};

export default About;
