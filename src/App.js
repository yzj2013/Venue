import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';

import Featured from './components/featured';

import VenueNfo from './components/venueNfo';

const App = () => {
  return (
    <div className='App'>
      <Header></Header>

      <>
        <Featured></Featured>
      </>

      <>
        <VenueNfo></VenueNfo>
      </>

      <div style={{ backgroundColor: 'red', height: '800px' }}></div>
      <div style={{ backgroundColor: 'blue', height: '800px' }}></div>
      <div style={{ backgroundColor: 'green', height: '800px' }}></div>
      <div style={{ backgroundColor: 'yellow', height: '800px' }}></div>

      <Footer></Footer>
    </div>
  );
};

export default App;
