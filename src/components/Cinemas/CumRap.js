import React from 'react';
import { connect } from 'react-redux';
import { actLayLichChieuPhim } from '../../services/QuanLyRap/LayLichChieuPhim/actions';

export const CumRap = ( props ) => {
  // console.log( props );
  let { lstCumRap, lichChieuHeThongRap, layLichChieuPhim } = props;

  let lstCumRapTheoLichChieuHeThongRap = ( lichChieuHeThongRap && lichChieuHeThongRap[ 0 ]?.lstCumRap );
  // console.log( 'lstCumRapTheoLichChieuHeThongRap', lstCumRapTheoLichChieuHeThongRap );

  let layDanhSachPhimTheoCupRap = ( maCumRap ) => {
    if ( lstCumRapTheoLichChieuHeThongRap ) {
      let index = lstCumRapTheoLichChieuHeThongRap.findIndex( item => item.maCumRap === maCumRap );
      // console.log( lstCumRapTheoLichChieuHeThongRap[ index ] );
      if ( index !== -1 ) return lstCumRapTheoLichChieuHeThongRap[ index ];
    }
    return false;
  };

  let renderCumRap = () => {
    return lstCumRap ?
      ( lstCumRap.map( ( cumRap, index ) => {

        let { danhSachPhim } = layDanhSachPhimTheoCupRap( cumRap.maCumRap );
        if ( danhSachPhim ) {
          // console.log( danhSachPhim );
          return (
            <a
              key={ index }
              className="list-group-item list-group-item-action"
              id={ `list-${ cumRap.maCumRap }-list` }
              data-toggle="list"
              href={ `#list-${ cumRap.maCumRap }` }
              role="tab"
              aria-controls={ `${ cumRap.maCumRap }` }
              onClick={ () => layLichChieuPhim( danhSachPhim ) }
            >
              {cumRap.tenCumRap }
            </a>
          );
        }

      } ) ) : 'khong co cum rap';
  };

  return (
    <div className="list-group cum-rap" id="list-tab" role="tablist">
      {
        renderCumRap()
      }
    </div>

  );
};

const mapStateToProps = ( state ) => ( {
  lstCumRap: state.cinemaReducers.fetchCinemaClustersReducers.data,
  lichChieuHeThongRap: state.cinemaReducers.layLichChieuHeThongRapReducers.data
} );

const mapDispatchToProps = dispatch => ( {
  layLichChieuPhim: ( danhSachPhim ) => {
    danhSachPhim.forEach( phim => dispatch( actLayLichChieuPhim( phim.maPhim ) ) );
  }
} );

export default connect( mapStateToProps, mapDispatchToProps )( CumRap );

