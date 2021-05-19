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
          <div className="row border py-sm-4">
            <div className="col-sm-2 border-right pr-sm-0">
              <CinemaSystems />
            </div>
            <div className="col-sm-10">
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

