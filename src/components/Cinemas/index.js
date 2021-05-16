import React, { Component } from 'react';
import { connect } from 'react-redux';
import CinemaSystems from './CinemaSystems';

export class Cinemas extends Component {
  render () {
    return (
      <div id="cinemas">
        <h3>cinemas</h3>
        <CinemaSystems />
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {

} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( Cinemas );

