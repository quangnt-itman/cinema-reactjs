import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoxPhim from './BoxPhim';

export class BoxBooking extends Component {
  render () {
    return (
      <div id="box-booking">
        <h5>box-booking</h5>
        <div className="container">
          <div className="row border rounded">
            <div className="col-sm-4">
              <BoxPhim />
            </div>
            <div className="col-sm-2">Rap</div>
            <div className="col-sm-2">Ngay xem</div>
            <div className="col-sm-2">Suat chieu</div>
            <div className="col-sm-2">btnBooking</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {

} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( BoxBooking );

