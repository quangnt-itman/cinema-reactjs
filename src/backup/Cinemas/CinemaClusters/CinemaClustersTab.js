import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actLayThongTinLichChieuPhim } from '../../../services/QuanLyRap/LayLichChieuPhim/actions';

/**
 * * item la tung cum rap
 */
export class CinemaClustersTab extends Component {
  render () {
    let { cinemaClusters, lichChieuHeThongRap, layThongTinLichChieuPhim } = this.props;
    // console.log( 'cinemaClusters', cinemaClusters );
    // console.log( 'lichChieuHeThongRap', lichChieuHeThongRap );
    let lstCumRap;
    let danhSachPhim;


    return (
      <>
        {
          ( cinemaClusters ) &&
          ( cinemaClusters.map( ( item, i ) => {
            if ( lichChieuHeThongRap && lichChieuHeThongRap.length > 0 ) {
              lstCumRap = lichChieuHeThongRap[ 0 ].lstCumRap.filter( ( cumRap ) => cumRap.maCumRap === item.maCumRap );
              // console.log( 'lstCumRap', lstCumRap );
              if ( lstCumRap && lstCumRap.length > 0 ) {
                danhSachPhim = lstCumRap[ 0 ].danhSachPhim;
              }
              // console.log( 'danhSachPhim', danhSachPhim );

              if ( i === 0 ) {
                return (
                  <a
                    className="nav-link border-bottom active"
                    id={ `v-pills-${ item.maCumRap }-tab` }
                    data-toggle="pill"
                    href={ `#v-pills-${ item.maCumRap }` }
                    role="tab"
                    aria-controls={ `v-pills-${ item.maCumRap }` }
                    aria-selected="true"
                    key={ i }
                    onClick={ () => layThongTinLichChieuPhim( danhSachPhim ) }
                  >
                    {/* {item.tenCumRap } */ }
                    <div className="media">
                      <img src={ lichChieuHeThongRap !== null && lichChieuHeThongRap[ 0 ].logo } width="30px" height="30px" className="mr-3 align-self-center" alt="..." />
                      <div className="media-body">
                        <h5 className="mt-0">{ item.tenCumRap }</h5>
                        <p>Address: { item.diaChi }</p>
                      </div>
                    </div>

                  </a>
                );
              }
              else {
                return (
                  <a
                    className="nav-link border-bottom "
                    id={ `v-pills-${ item.maCumRap }-tab` }
                    data-toggle="pill"
                    href={ `#v-pills-${ item.maCumRap }` }
                    role="tab"
                    aria-controls={ `v-pills-${ item.maCumRap }` }
                    aria-selected="false"
                    key={ i }
                    onClick={ () => layThongTinLichChieuPhim( danhSachPhim ) }
                  >
                    {/* {item.tenCumRap } */ }
                    <div className="media">
                      <img src={ lichChieuHeThongRap !== null && lichChieuHeThongRap[ 0 ].logo } width="30px" height="30px" className="mr-3 align-self-center" alt="..." />
                      <div className="media-body">
                        <h5 className="mt-0">{ item.tenCumRap }</h5>
                        <p>Address: { item.diaChi }</p>
                      </div>
                    </div>
                  </a>
                );
              }
            }
          } ) )
        }
      </>
    );
  }
}

const mapStateToProps = ( state ) => ( {
  cinemaClusters: state.cinemaReducers.fetchCinemaClustersReducers.data,
  lichChieuHeThongRap: state.cinemaReducers.layThongTinLichChieuHeThongRapReducers.data,
} );

const mapDispatchToProps = dispatch => ( {
  layThongTinLichChieuPhim: ( danhSachPhim ) => {
    danhSachPhim.forEach( phim => dispatch( actLayThongTinLichChieuPhim( phim.maPhim ) ) );
  }
} );

export default connect( mapStateToProps, mapDispatchToProps )( CinemaClustersTab );
