import React, { Component } from 'react';
import Navbar from '../Navbar';

export class Header extends Component {
  render () {
    return (
      <header id="header">
        {/* <h3>header</h3> */ }
        <Navbar />
      </header>
    );
  }
}

export default Header;

