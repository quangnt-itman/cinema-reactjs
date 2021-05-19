import React, { Component } from 'react';
import { connect } from 'react-redux';
import CinemaClusters from './CinemaClusters';
import CinemaSystems from './CinemaSystems';


export class Cinemas extends Component {

  render () {
    return (
      <div id="cinemas">
        <h3>cinemas</h3>

        <div className="cinema-systems container">
          <div className="row">
            <div className="col-2">
              <CinemaSystems />
            </div>
            <div className="col-10">
              <CinemaClusters />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
} );

const mapDispatchToProps = dispatch => ( {
} );

export default connect( mapStateToProps, mapDispatchToProps )( Cinemas );

