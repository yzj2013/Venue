import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';

import Featured from './components/featured';

import VenueNfo from './components/venueNfo';

import Highlights from './components/highlights';

import Pricing from './components/pricing';

import Location from './components/location';

const App = () => {
  return (
    <div className='App'>
      <Header></Header>

      <Element name='featured'>
        <Featured></Featured>
      </Element>

      <Element name='venuenfo'>
        <VenueNfo></VenueNfo>
      </Element>

      <Element name='highlights'>
        <Highlights></Highlights>
      </Element>

      <Element name='pricing'>
        <Pricing></Pricing>
      </Element>

      <Element name='location'>
        <Location></Location>
      </Element>

      <div style={{ backgroundColor: 'red', height: '800px' }}></div>
      <div style={{ backgroundColor: 'blue', height: '800px' }}></div>
      <div style={{ backgroundColor: 'green', height: '800px' }}></div>
      <div style={{ backgroundColor: 'yellow', height: '800px' }}></div>

      <Footer></Footer>
    </div>
  );
};

export default App;
