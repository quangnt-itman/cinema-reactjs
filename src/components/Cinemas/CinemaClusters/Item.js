import React, { Component } from 'react';

export class Item extends Component {
  render () {
    let { item } = this.props;
    return (
      <div>
        <h1>{ item.tenCumRap }</h1>
      </div>
    );
  }
}

export default Item;

