
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actLayThongTinLichChieuPhim } from '../../../services/QuanLyRap/LayThongTinLichChieuPhim/actions';

export class CinemaClusterMedia extends Component {
  lstLichChieuPhimCumRap = [];
  render () {
    let { cinemaCluster, lstCumRap, lichChieuPhim } = this.props;
    this.lstLichChieuPhimCumRap.push( lichChieuPhim );

    console.log( 'cinemaCluster', cinemaCluster );
    console.log( 'lstCumRap', lstCumRap );

    // ( lstCumRap ) && (
    //   lstCumRap.forEach( cumRap => {
    //     if ( cumRap.maCumRap === cinemaCluster.maCumRap ) {
    //       lstLichChieuPhimCumRap.push( lichChieuPhim );
    //     }
    //   } )
    // );

    console.log( 'lstLichChieuPhimCumRap', this.lstLichChieuPhimCumRap );


    return (
      <>
        {
          ( this.lstLichChieuPhimCumRap && this.lstLichChieuPhimCumRap.length > 0 ) ? (
            this.lstLichChieuPhimCumRap.map( ( item, index ) => (

              <div className="card mb-3" style={ { maxWidth: 540 } } key={ index }
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={ item ? item.hinhAnh : 'none' } className="card-img" alt={ item ? item.maPhim : 'none' } />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{ item ? item.tenPhim : 'none' }</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            ) ) ) : "khong co suat chieu"
        }
      </>
    );



  }
}

const mapStateToProps = ( state ) => ( {
  // lichChieuPhim: state.cinemaReducers.layThongTinLichChieuPhimReducers.data,
  // lichChieuHeThongRap: state.cinemaReducers.layThongTinLichChieuHeThongRapReducers.data,
} );

const mapDispatchToProps = dispatch => ( {
} );


export default connect( mapStateToProps, mapDispatchToProps )( CinemaClusterMedia );
