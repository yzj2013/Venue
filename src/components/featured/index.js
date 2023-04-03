import React from 'react';

import Carrousel from './Carrousel';

const featured = () => {
  return (
    <div className='featured_container'>
      <Carrousel></Carrousel>
      <div className='artist_name'>
        <div className='wrapper'>Ariana Grande</div>
      </div>
    </div>
  );
};

export default featured;
