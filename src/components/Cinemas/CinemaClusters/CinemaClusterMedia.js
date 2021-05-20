
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actLayThongTinLichChieuPhim } from '../../../services/QuanLyRap/LayThongTinLichChieuPhim/actions';

export class CinemaClusterMedia extends Component {
  render () {
    let { cinemaCluster, lichChieuHeThongRap } = this.props;
    let lstCumRap = null;
    let danhSachPhimTheoMaCumRap = null;
    // console.log( this.props );

    if ( lichChieuHeThongRap !== null ) {
      lstCumRap = lichChieuHeThongRap[ 0 ].lstCumRap;
      // console.log( { lstCumRap } );

      danhSachPhimTheoMaCumRap = lstCumRap.filter( ( item, index ) => item.maCumRap.toLowerCase() === cinemaCluster.maCumRap.toLowerCase() );

      console.log( { danhSachPhimTheoMaCumRap } );

    }

    return (
      <>
        {
          ( danhSachPhimTheoMaCumRap && danhSachPhimTheoMaCumRap.length > 0 ) ? (
            danhSachPhimTheoMaCumRap[ 0 ].danhSachPhim.map( ( item, index ) => (

              <div className="card mb-3" style={ { maxWidth: 540 } } key={ index }
                onLoad={ () => this.props.layThongTinLichChieuPhim( item.maPhim ) }
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={ item.hinhAnh } className="card-img" alt={ item.maPhim } />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{ item.tenPhim }</h5>
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
  lichChieuHeThongRap: state.cinemaReducers.layThongTinLichChieuHeThongRapReducers.data,
  lichChieuPhim: state.cinemaReducers.layThongTinLichChieuPhimReducers.data
} );

const mapDispatchToProps = dispatch => ( {
  layThongTinLichChieuPhim: ( maPhim ) => dispatch( actLayThongTinLichChieuPhim( maPhim ) )
} );


export default connect( mapStateToProps, mapDispatchToProps )( CinemaClusterMedia );
