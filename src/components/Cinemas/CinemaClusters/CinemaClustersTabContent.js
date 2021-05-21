import React, { Component } from 'react';
import { connect } from 'react-redux';
import CinemaClusterMedia from './CinemaClusterMedia';

/**
 * todo: item la tung cum rap
 */

export class CinemaClustersTabContent extends Component {


  render () {
    let { cinemaClusters, lichChieuPhim, lichChieuHeThongRap } = this.props;
    console.log( 'lichChieuHeThongRap', lichChieuHeThongRap );
    console.log( 'lichChieuPhim', lichChieuPhim );

    let maHeThongRap;
    let index;
    let lstCumRap;

    ( lichChieuHeThongRap !== null && lichChieuHeThongRap.length > 0 ) && ( maHeThongRap = lichChieuHeThongRap[ 0 ].maHeThongRap );
    console.log( 'maHeThongRap', maHeThongRap );

    if ( lichChieuPhim !== null ) {
      index = lichChieuPhim.heThongRapChieu.findIndex( rap => rap.maHeThongRap === maHeThongRap );
      if ( index !== -1 ) {
        lstCumRap = lichChieuPhim.heThongRapChieu[ index ].cumRapChieu;
      }
    }
    console.log( 'lstCumRap', lstCumRap );

    return (
      <>
        {
          cinemaClusters!==null && cinemaClusters.map( ( item, i ) => {

            if ( i === 0 ) {
              if(lstCumRap)
              return lstCumRap.map( cumRap => {
                if ( item.maCumRap === cumRap.maCumRap ) {
                  return (
                    <div
                      className="tab-pane fade active show"
                      id={ `v-pills-${ item.maCumRap }` }
                      role="tabpanel"
                      aria-labelledby={ `v-pills-${ item.maCumRap }-tab` }
                      key={ i }
                    >
                      {/* {item.tenCumRap } */ }
                      <div className="card-list">
                        <CinemaClusterMedia cinemaCluster={ item } lichChieuPhim={ lichChieuPhim } />
                      </div>
                    </div>
                  );
                }
              } );
            }
            else {
              if(lstCumRap)
              return lstCumRap.map( cumRap => {
                if ( item.maCumRap === cumRap.maCumRap ) {
                  return (
                    <div
                      className="tab-pane fade  "
                      id={ `v-pills-${ item.maCumRap }` }
                      role="tabpanel"
                      aria-labelledby={ `v-pills-${ item.maCumRap }-tab` }
                      key={ i }
                    >
                      {/* {item.tenCumRap } */ }
                      <div className="card-list">
                        <CinemaClusterMedia cinemaCluster={ item } lichChieuPhim={ lichChieuPhim } />
                      </div>
                    </div>
                  );
                }
              } );
            }
          } )
        }
      </>
    );
  }
}

const mapStateToProps = ( state ) => ( {
  cinemaClusters: state.cinemaReducers.fetchCinemaClustersReducers.data,
  lichChieuHeThongRap: state.cinemaReducers.layThongTinLichChieuHeThongRapReducers.data,
  lichChieuPhim: state.cinemaReducers.layThongTinLichChieuPhimReducers.data,

} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( CinemaClustersTabContent );

