import React from 'react';
import { connect } from 'react-redux';
import PhimCard from './PhimCard';

export const LichChieuPhim = ( props ) => {
  let { lstCumRap } = props;
  // let { phimLichChieu } = props;
  // console.log( 'lstCumRap', lstCumRap );
  // console.log( 'phimLichChieu', phimLichChieu );

  return (
    <div className="tab-content lich-chieu-phim" id="nav-tabContent">
      {
        lstCumRap ?
          lstCumRap.map( ( cumRap, index ) => (
            <div
              key={ index }
              className="tab-pane fade "
              id={ `list-${ cumRap.maCumRap }` } role="tabpanel"
              aria-labelledby={ `list-${ cumRap.maCumRap }-list` }
            >
              {/* {cumRap.tenCumRap } */ }
              <PhimCard cumRap={ cumRap } />
            </div>
          ) ) : 'khong co lich chieu phim'
      }
    </div>

  );
};

const mapStateToProps = ( state ) => ( {
  lstCumRap: state.cinemaReducers.fetchCinemaClustersReducers.data,
  // phimLichChieu: state.cinemaReducers.layLichChieuPhimReducers.data
} );

const mapDispatchToProps = {

};

export default connect( mapStateToProps, mapDispatchToProps )( LichChieuPhim );

