import React, { Component } from 'react';
import Carousel from '../../../components/Carousel';
import Movies from '../../../components/Movies';

export class HomePage extends Component {
  render () {
    return (
      <div id="home">
        {/* <h3>HomePage</h3> */ }
        <Carousel />
        <Movies />
      </div>
    );
  }
}

export default HomePage;

