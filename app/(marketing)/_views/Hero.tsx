'use client'

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import React from 'react';

const Hero = () => {
  const heroDemoData = {
    _id: 1,
    title: "The Website Editor for Product and Content Managers",
    description: `Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.`,
    buttonName: 'Get Started'
  }

  const heroData = useQuery(api.hero.get) || heroDemoData

  return (
    <div className='hero  bg-base-200'>
      <div className='hero-content text-center py-20 flex flex-col'>
        <h1 className='text-5xl font-bold max-w-lg text-center'>
          {heroData.title}
        </h1>
        <p className='py-6 max-w-md text-center'>
          {heroData.description}
        </p>
        <button className='btn btn-primary'>{heroData.buttonName}</button>
      </div>
    </div>
  );
};

export default Hero;
