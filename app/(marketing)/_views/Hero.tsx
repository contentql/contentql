import React from 'react';

const Hero = () => {
  return (
    <div className='hero  bg-base-200'>
      <div className='hero-content text-center py-20 flex flex-col'>
        <h1 className='text-5xl font-bold max-w-lg text-center'>
          The Website Editor for Product and Content Managers
        </h1>
        <p className='py-6 max-w-md text-center'>
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className='btn btn-primary'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
