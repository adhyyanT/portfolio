import React from 'react';

const Contact = () => {
  return (
    <div
      name='Contact'
      className='w-full h-full bg-gradient-to-b
       from-black to-gray-800 p-4 text-white pb-24'
    >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl border-b-4 border-gray-500 font-bold inline'>
            Contact
          </p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
          <form
            action='https://getform.io/f/512dc3bc-d706-4758-9cc9-85742221854b'
            method='POST'
            className='flex flex-col w-full md:w-1/2 '
          >
            <input
              type='text'
              name='name'
              placeholder='Your good name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <input
              type='email'
              name='email'
              placeholder='Your email'
              className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <textarea
              name='message'
              placeholder='Enter your message'
              rows='10'
              className='p-2 bg-transparent border-2 rounded-md focus:outline-none text-white'
            ></textarea>
            <button
              className='text-white bg-gradient-to-b
             from-cyan-500 to-blue-500 px-6 py-3 my-3 mx-auto flex 
             items-center rounded-md hover: scale-110 duration-300'
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
