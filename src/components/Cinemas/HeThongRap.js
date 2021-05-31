import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actFetchCinemaClusters } from '../../services/QuanLyRap/LayCumRapTheoHeThong/actions';
import { actFetchCinemaSystems } from '../../services/QuanLyRap/LayHeThongRap/actions';
import { actLayLichChieuHeThongRap } from '../../services/QuanLyRap/LayLichChieuHeThongRap/actions';

export const HeThongRap = ( props ) => {
  let { lstHeThongRap, layLstHeThongRap, layLstCumRap, layLichChieuHeThongRap } = props;
  // console.log( lstHeThongRap );
  useEffect( () => {
    return layLstHeThongRap();
  }, [] );

  return (
    <div className="list-group he-thong-rap" id="list-tab" role="tablist">
      {
        lstHeThongRap ?
          ( lstHeThongRap.map( ( heThongRap, index ) => (
            <a
              key={ index }
              className="list-group-item list-group-item-action"
              id={ `list-${ heThongRap.maHeThongRap }-list` }
              data-toggle="list"
              href={ `#list-${ heThongRap.maHeThongRap }` }
              role="tab"
              aria-controls={ `${ heThongRap.maHeThongRap }` }
              onClick={ () => {
                layLstCumRap( heThongRap.maHeThongRap );
                layLichChieuHeThongRap( heThongRap.maHeThongRap );
              } }
            >
              <img src={ heThongRap.logo } alt={ heThongRap.biDanh } width="60px" height="60px" />
            </a>
          ) ) ) : "khong co he thong rap"
      }
    </div>

  );
};

const mapStateToProps = ( state ) => ( {
  lstHeThongRap: state.cinemaReducers.fetchCinemaSystemsReducers.data
} );

const mapDispatchToProps = dispatch => ( {
  layLstHeThongRap: () => dispatch( actFetchCinemaSystems() ),
  layLstCumRap: ( maHeThongRap ) => dispatch( actFetchCinemaClusters( maHeThongRap ) ),
  layLichChieuHeThongRap: ( maHeThongRap ) => dispatch( actLayLichChieuHeThongRap( maHeThongRap ) ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( HeThongRap );

