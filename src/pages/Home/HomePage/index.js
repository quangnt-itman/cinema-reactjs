import React, { Component } from 'react';
import Movies from '../../../components/Movies';

export class HomePage extends Component {
  render () {
    return (
      <div id="home">
        <h3>HomePage</h3>
        <Movies />
      </div>
    );
  }
}

export default HomePage;

