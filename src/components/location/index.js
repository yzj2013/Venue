import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      {/* <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63499.5759094865!2d-96.82638045433593!3d32.81400551924428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e993d0ea3c1ff%3A0x1859d2cc74f588e2!2sThe+Dallas+World+Aquarium!5e0!3m2!1ses!2sar!4v1530636115082'
        width='100%'
        height='500px'
        frameBorder='0'
        title='gglemaps'
        allowFullScreen
      ></iframe> */}
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.625545313077!2d138.68178891744384!3d-34.8153615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0b488b2c6d0a5%3A0x8cfb6af623df2b61!2s3%20Olympus%20Ave%2C%20Modbury%20Heights%20SA%205092!5e0!3m2!1sen!2sau!4v1680752200469!5m2!1sen!2sau'
        width='100%'
        height='500'
        allowfullscreen
        frameBorder='0'
        title='gglemaps'
      ></iframe>
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
