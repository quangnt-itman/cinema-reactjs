import React, { Component } from 'react';
import { connect } from 'react-redux';

export class MovieCard extends Component {
  render () {
    return (
      <div>
        <h3>MovieCard</h3>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {

} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( MovieCard );

