import React from 'react';

const SocialProofItem = ({ quote, author, role }) => (
  <div className='py-12 px-6 border-l border-gray-100 italic my-8'>
    <p className='text-xl text-gray-500 font-light leading-relaxed mb-4'>"{quote}"</p>
    <cite className='not-italic'>
      <span className='block text-xs font-bold tracking-[0.2em] uppercase text-gray-900'>{author}</span>
      <span className='block text-[10px] tracking-[0.2em] uppercase text-gray-400 mt-1'>{role}</span>
    </cite>
  </div>
);

export default SocialProofItem;
