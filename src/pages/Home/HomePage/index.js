import React, { Component } from 'react';
import BoxBooking from '../../../components/BoxBooking';
import Carousel from '../../../components/Carousel';
import Cinemas from '../../../components/Cinemas';
import Movies from '../../../components/Movies';

export class HomePage extends Component {
  render () {
    return (
      <div id="home">
        {/* <h3>HomePage</h3> */ }
        <Carousel />
        <BoxBooking />
        <Movies />
        <Cinemas />
      </div>
    );
  }
}

export default HomePage;

