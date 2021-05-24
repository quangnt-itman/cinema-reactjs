import React, { Component } from 'react';
import { connect } from 'react-redux';
import CumRap from './CumRap';
import HeThongRap from './HeThongRap';
import LichChieuPhim from './LichChieuPhim';


export class Cinemas extends Component {

  render () {
    return (
      <div id="cinemas">
        <h3>cinemas</h3>

        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              lstHeThongRap
              <HeThongRap />
            </div>
            <div className="col-sm-4">
              lstCupRap
              <CumRap />
            </div>
            <div className="col-sm-6">
              lstLichChieuPhim
              <LichChieuPhim />
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

