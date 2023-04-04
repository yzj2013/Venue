import React from 'react';

import Carrousel from './Carrousel';

import TimeUntil from './timeUntil';

const featured = () => {
  return (
    <div className='featured_container'>
      <Carrousel></Carrousel>
      <div className='artist_name'>
        <div className='wrapper'>Ariana Grande</div>
      </div>
      <TimeUntil></TimeUntil>
    </div>
  );
};

export default featured;
